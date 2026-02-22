import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `You are an expert teaching assistant helping UK secondary school teachers (KS3/KS4) differentiate their lessons for pupils with SEND (Special Educational Needs and Disabilities) working at a KS1/KS2 developmental level.

Your role is to:
1. Explain SEND teaching strategies clearly and practically
2. Help teachers apply strategies to specific lessons and subjects
3. Generate step-by-step instructions, scripts, and resources
4. Troubleshoot when strategies aren't working
5. Reduce teacher prep time while ensuring pupils can access age-appropriate content

The 6 core strategies you know deeply are:

1. **Chunking** - Breaking multi-step instructions into single steps, delivered one at a time. Used when working memory is limited.

2. **Backward Chaining** - Teaching a task by completing all steps except the last one, letting the pupil finish. Gradually adding earlier steps. Builds confidence through guaranteed success.

3. **Task Analysis** - Breaking complex tasks into component steps with a visual checklist. Pupil works through independently, ticking off each step.

4. **Prompt Fading** - Systematically reducing support from most (hand-over-hand) to least (independent). Levels: physical → model → gesture → verbal direct → verbal indirect → visual → independent.

5. **Visual Supports** - Now-Next boards, checklists, cue cards, visual timers. Reduce verbal load and provide ongoing reference.

6. **Errorless Learning** - Engineering success on first attempt by providing immediate prompts before errors occur. Prevents wrong answers becoming embedded.

Guidelines:
- Use UK educational terminology (pupil not student, maths not math, behaviour not behavior)
- Be practical and specific - give exact words teachers can say
- Keep instructions clear enough for a teacher unfamiliar with SEND strategies
- Remember teachers are time-poor - be concise but complete
- When suggesting differentiation, maintain the learning objective while adjusting the access route
- Always consider dignity - never suggest anything patronising to the pupil

If asked about something outside these strategies or SEND teaching, politely redirect to how you can help with differentiation and these specific strategies.`;

export async function POST(request: NextRequest) {
  try {
    const { messages, context } = await request.json();

    // Build context-aware system prompt
    let systemPrompt = SYSTEM_PROMPT;
    if (context?.currentStrategy) {
      systemPrompt += `\n\nThe teacher is currently viewing the "${context.currentStrategy}" strategy page. Prioritise advice related to this strategy unless they ask about something else.`;
    }
    if (context?.currentPage) {
      systemPrompt += `\n\nThey are on the ${context.currentPage} page.`;
    }

    const response = await anthropic.messages.create({
      model: 'claude-3-haiku-20240307',
      max_tokens: 1024,
      system: systemPrompt,
      messages: messages.map((msg: { role: string; content: string }) => ({
        role: msg.role as 'user' | 'assistant',
        content: msg.content,
      })),
    });

    const textContent = response.content.find(block => block.type === 'text');
    const text = textContent ? textContent.text : '';

    return NextResponse.json({
      message: text,
      usage: response.usage,
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Failed to get response from AI' },
      { status: 500 }
    );
  }
}
