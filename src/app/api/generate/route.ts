import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `You are an expert special educational needs coordinator (SENCo) and differentiation specialist for UK secondary schools. You create practical, ready-to-use resources for teachers supporting pupils with SEND who are working significantly below age-related expectations.

Your expertise includes:
- Evidence-based SEND interventions and strategies
- Adapting KS3/KS4 content for pupils working at KS1/KS2 developmental levels
- Creating scaffolded learning experiences
- Reducing cognitive load while maintaining learning objectives
- Practical classroom strategies that preserve pupil dignity

Key principles:
- Use UK educational terminology (pupil, maths, behaviour, colour, etc.)
- Be specific - give exact words, scripts, and steps, not vague suggestions
- Match language complexity to the pupil's working level
- Maintain dignity - nothing patronising
- Make resources immediately usable without further editing
- Consider the role of teaching assistants (TAs) in supporting learning`;

interface UploadedFile {
  name: string;
  type: string;
  base64: string;
}

interface GeneratorInput {
  subject: string;
  keyStage: string;
  topic: string;
  taskType: string;
  workingLevel: string;
  barriers?: string;
  additionalContext?: string;
  file?: UploadedFile;
}

export async function POST(request: NextRequest) {
  try {
    const input: GeneratorInput = await request.json();

    const prompt = `Generate comprehensive differentiation resources for the following lesson:

**Lesson Context:**
- Subject: ${input.subject}
- Key Stage: ${input.keyStage}
- Topic: ${input.topic}
- Task Type: ${input.taskType}
- Pupil Working Level: ${input.workingLevel}
${input.barriers ? `- Known Barriers/Learning Needs: ${input.barriers}` : ''}
${input.additionalContext ? `- Additional Context: ${input.additionalContext}` : ''}

Generate a JSON response with this exact structure:

{
  "overview": "A 2-3 sentence overview of how to approach this lesson for a pupil at ${input.workingLevel} level, addressing the specific topic of ${input.topic}",

  "strategies": [
    {
      "name": "Strategy name",
      "description": "Brief explanation of why this strategy works for this context",
      "steps": [
        "Step 1: Specific action with exact words/materials",
        "Step 2: ...",
        "Step 3: ..."
      ]
    }
  ],

  "differentiation": {
    "taskModifications": [
      "Specific modification 1 for this task",
      "Specific modification 2..."
    ],
    "scaffolding": [
      "Scaffold 1 with specific details",
      "Scaffold 2..."
    ],
    "resources": [
      "Physical resource needed",
      "Visual support needed..."
    ]
  },

  "teacherScript": {
    "starting": [
      "Exact phrase to introduce the task",
      "Check understanding phrase..."
    ],
    "during": [
      "Monitoring phrase 1",
      "Encouragement phrase..."
    ],
    "ifStuck": [
      "First intervention phrase",
      "Breaking down the step..."
    ]
  },

  "taGuidance": {
    "role": "Clear description of the TA's specific role during this task",
    "keyPhrases": [
      "Phrase 1 the TA should use",
      "Phrase 2..."
    ],
    "avoid": [
      "What NOT to do/say",
      "Another thing to avoid..."
    ]
  },

  "visualSupports": [
    "Description of visual support 1 to prepare",
    "Description of visual support 2..."
  ],

  "successCriteria": [
    "Observable success criterion 1",
    "Observable success criterion 2...",
    "Observable success criterion 3..."
  ]
}

Important requirements:
1. Provide 2-4 strategies, each with 3-5 clear steps
2. Include at least 3-4 items in each differentiation category
3. Teacher scripts should use actual words/phrases, not generic descriptions
4. TA guidance should be specific to this task, not generic
5. Visual supports should describe what to prepare, not generic types
6. Success criteria should be observable and achievable for the working level
7. All content must be specific to ${input.subject} / ${input.topic}, not generic
8. Consider the cognitive demands of ${input.taskType} tasks

Make everything immediately actionable - a teacher should be able to use this without any modification.`;

    // Build message content - include file if provided
    type ImageMediaType = 'image/jpeg' | 'image/png' | 'image/gif' | 'image/webp';
    type ContentBlock =
      | { type: 'text'; text: string }
      | { type: 'image'; source: { type: 'base64'; media_type: ImageMediaType; data: string } }
      | { type: 'document'; source: { type: 'base64'; media_type: 'application/pdf'; data: string } };

    const messageContent: ContentBlock[] = [];

    if (input.file) {
      // Add the uploaded file to the message
      if (input.file.type === 'application/pdf') {
        messageContent.push({
          type: 'document',
          source: {
            type: 'base64',
            media_type: 'application/pdf',
            data: input.file.base64,
          },
        });
        messageContent.push({
          type: 'text',
          text: `I've uploaded a PDF document called "${input.file.name}". Please analyse this worksheet/lesson plan carefully and use its specific content, questions, and structure to inform your differentiation strategies.\n\n${prompt}`,
        });
      } else {
        // Image file
        messageContent.push({
          type: 'image',
          source: {
            type: 'base64',
            media_type: input.file.type as ImageMediaType,
            data: input.file.base64,
          },
        });
        messageContent.push({
          type: 'text',
          text: `I've uploaded an image of a worksheet/lesson plan called "${input.file.name}". Please analyse this document carefully and use its specific content, questions, layout, and structure to inform your differentiation strategies.\n\n${prompt}`,
        });
      }
    } else {
      messageContent.push({
        type: 'text',
        text: prompt,
      });
    }

    const response = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 4096,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: messageContent }],
    });

    const textContent = response.content.find(block => block.type === 'text');
    const text = textContent ? textContent.text : '{}';

    // Extract JSON from response (handle markdown code blocks)
    let jsonStr = text;
    const jsonMatch = text.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (jsonMatch) {
      jsonStr = jsonMatch[1];
    }

    let parsed;
    try {
      parsed = JSON.parse(jsonStr);
    } catch {
      // If JSON parsing fails, return the raw text for debugging
      return NextResponse.json({
        error: 'Failed to parse AI response',
        raw: text,
      }, { status: 500 });
    }

    // Return the parsed result directly (not wrapped)
    return NextResponse.json(parsed);
  } catch (error) {
    console.error('Generate API error:', error);
    return NextResponse.json(
      { error: 'Failed to generate resources' },
      { status: 500 }
    );
  }
}
