// Deterministic template-based generator for worked examples

import {
  GeneratorInputs,
  GeneratorOutputs,
  InstructionStep,
  BackwardChainStep,
  PromptLevel,
  PromptFadingStep,
  VisualSupport,
} from './types';
import { taskTypeLabels, workingLevelLabels } from './topics';

// Helper to get task-specific verbs
function getTaskVerbs(taskType: string): { main: string; action: string; complete: string } {
  const verbs: Record<string, { main: string; action: string; complete: string }> = {
    worksheet: { main: 'complete', action: 'write', complete: 'finish' },
    reading: { main: 'read', action: 'look at', complete: 'finish reading' },
    writing: { main: 'write', action: 'put', complete: 'finish writing' },
    practical: { main: 'do', action: 'carry out', complete: 'complete' },
    discussion: { main: 'discuss', action: 'talk about', complete: 'share' },
  };
  return verbs[taskType] || verbs.worksheet;
}

// Helper to get working-level appropriate language
function getLanguageLevel(workingLevel: string): { complexity: 'simple' | 'moderate' | 'standard'; wordCount: number } {
  const levels: Record<string, { complexity: 'simple' | 'moderate' | 'standard'; wordCount: number }> = {
    eyfs: { complexity: 'simple', wordCount: 3 },
    ks1: { complexity: 'simple', wordCount: 5 },
    ks2: { complexity: 'moderate', wordCount: 8 },
    ks3: { complexity: 'standard', wordCount: 10 },
    ks4: { complexity: 'standard', wordCount: 12 },
  };
  return levels[workingLevel] || levels.ks1;
}

// Generate instruction sequence based on task type
function generateInstructionSequence(inputs: GeneratorInputs): InstructionStep[] {
  const verbs = getTaskVerbs(inputs.taskType);
  const lang = getLanguageLevel(inputs.workingLevel);
  const topicShort = inputs.topic.split(' - ')[0].split(' ').slice(0, 3).join(' ');

  const baseSteps: Record<string, InstructionStep[]> = {
    worksheet: [
      { step: 1, instruction: `Look at the ${topicShort} worksheet`, supportNote: 'Point to worksheet' },
      { step: 2, instruction: 'Read the first question', supportNote: 'Use a reading guide if needed' },
      { step: 3, instruction: 'Think about the answer', supportNote: 'Give thinking time (10 seconds)' },
      { step: 4, instruction: 'Write your answer', supportNote: 'Offer a word bank if needed' },
      { step: 5, instruction: 'Check your work', supportNote: 'Provide success criteria' },
    ],
    reading: [
      { step: 1, instruction: `Get the ${topicShort} text ready`, supportNote: 'Ensure correct page/text' },
      { step: 2, instruction: 'Read the title and look at any pictures', supportNote: 'Discuss what it might be about' },
      { step: 3, instruction: 'Read the first paragraph', supportNote: 'Use a reading ruler' },
      { step: 4, instruction: 'Stop and think: what did it say?', supportNote: 'Allow processing time' },
      { step: 5, instruction: 'Continue reading', supportNote: 'Chunk into manageable sections' },
    ],
    writing: [
      { step: 1, instruction: `Look at the ${topicShort} writing task`, supportNote: 'Read success criteria together' },
      { step: 2, instruction: 'Plan your ideas', supportNote: 'Use a planning frame' },
      { step: 3, instruction: 'Write your first sentence', supportNote: 'Offer sentence starters' },
      { step: 4, instruction: 'Read it back to check it makes sense', supportNote: 'Read aloud or whisper' },
      { step: 5, instruction: 'Write the next sentence', supportNote: 'Use connectives list' },
    ],
    practical: [
      { step: 1, instruction: `Get your ${topicShort} equipment ready`, supportNote: 'Visual equipment checklist' },
      { step: 2, instruction: 'Listen to/read the first instruction', supportNote: 'Demonstrate alongside' },
      { step: 3, instruction: 'Do the first step', supportNote: 'Guide hands if needed' },
      { step: 4, instruction: 'Check: does it look right?', supportNote: 'Show success example' },
      { step: 5, instruction: 'Move to the next step', supportNote: 'Wait for signal to continue' },
    ],
    discussion: [
      { step: 1, instruction: `Think about ${topicShort}`, supportNote: 'Give quiet thinking time' },
      { step: 2, instruction: 'Choose one idea to share', supportNote: 'Offer sentence starters' },
      { step: 3, instruction: 'Put your hand up OR turn to your partner', supportNote: 'Clarify which format' },
      { step: 4, instruction: 'Say your idea clearly', supportNote: 'Model appropriate volume' },
      { step: 5, instruction: 'Listen to others', supportNote: 'Visual listening reminder' },
    ],
  };

  // Simplify language for lower working levels
  let steps = baseSteps[inputs.taskType] || baseSteps.worksheet;

  if (lang.complexity === 'simple') {
    steps = steps.map(s => ({
      ...s,
      instruction: s.instruction.split(' ').slice(0, lang.wordCount).join(' '),
    }));
  }

  return steps;
}

// Generate backward chaining plan (only for certain strategies/tasks)
function generateBackwardChaining(inputs: GeneratorInputs): BackwardChainStep[] | null {
  // Backward chaining works best for sequential tasks
  if (!['worksheet', 'writing', 'practical'].includes(inputs.taskType)) {
    return null;
  }

  const topicShort = inputs.topic.split(' - ')[0].split(' ').slice(0, 3).join(' ');

  const phases: BackwardChainStep[] = [
    {
      phase: 1,
      teacherDoes: `Complete steps 1-4 of the ${topicShort} task`,
      pupilDoes: 'Complete the final step only (step 5)',
      support: 'Full guidance available, focus on successful completion',
    },
    {
      phase: 2,
      teacherDoes: 'Complete steps 1-3',
      pupilDoes: 'Complete steps 4 and 5',
      support: 'Verbal prompts for step 4, independent on step 5',
    },
    {
      phase: 3,
      teacherDoes: 'Complete steps 1-2',
      pupilDoes: 'Complete steps 3, 4, and 5',
      support: 'Visual checklist available, verbal prompts as needed',
    },
    {
      phase: 4,
      teacherDoes: 'Complete step 1 only',
      pupilDoes: 'Complete steps 2, 3, 4, and 5',
      support: 'Gesture prompts only, encourage self-checking',
    },
    {
      phase: 5,
      teacherDoes: 'Set up task and observe',
      pupilDoes: 'Complete all steps independently',
      support: 'Available if requested, celebrate independence',
    },
  ];

  return phases;
}

// Generate prompts from most to least supportive
function generatePrompts(inputs: GeneratorInputs): PromptLevel[] {
  const topicShort = inputs.topic.split(' - ')[0].split(' ').slice(0, 3).join(' ');
  const verbs = getTaskVerbs(inputs.taskType);

  return [
    {
      level: 1,
      type: 'full-physical',
      prompt: 'Hand-over-hand guidance through the task',
      example: `Physically guide the pupil's hand to ${verbs.action} the answer for ${topicShort}`,
    },
    {
      level: 2,
      type: 'partial-physical',
      prompt: 'Light touch to initiate or guide',
      example: `Gently tap the pupil's hand or arm to prompt them to start ${verbs.main}ing`,
    },
    {
      level: 3,
      type: 'model',
      prompt: 'Demonstrate the expected action',
      example: `"Watch me ${verbs.main} this one first, then you try the next one"`,
    },
    {
      level: 4,
      type: 'gesture',
      prompt: 'Point or gesture to guide attention',
      example: `Point to the relevant part of the ${topicShort} task, or gesture towards materials`,
    },
    {
      level: 5,
      type: 'verbal-direct',
      prompt: 'Explicit verbal instruction',
      example: `"${verbs.action.charAt(0).toUpperCase() + verbs.action.slice(1)} your answer in the box now"`,
    },
    {
      level: 6,
      type: 'verbal-indirect',
      prompt: 'Hint or question prompt',
      example: `"What do you need to do next?" or "Where does the answer go?"`,
    },
    {
      level: 7,
      type: 'visual',
      prompt: 'Visual cue only (checklist, symbol, gesture)',
      example: `Point to the visual checklist or Now-Next board showing the ${topicShort} task`,
    },
    {
      level: 8,
      type: 'independent',
      prompt: 'No prompt - independent working',
      example: `Pupil completes the ${topicShort} task without adult support`,
    },
  ];
}

// Generate prompt fading plan
function generatePromptFadingPlan(inputs: GeneratorInputs): PromptFadingStep[] {
  return [
    {
      session: 'Sessions 1-2',
      promptLevel: 'Model + Verbal direct',
      action: 'Demonstrate each step, then give clear verbal instructions',
      successCriteria: 'Pupil follows instructions with support',
    },
    {
      session: 'Sessions 3-4',
      promptLevel: 'Gesture + Verbal indirect',
      action: 'Point to guide attention, ask questions instead of telling',
      successCriteria: 'Pupil responds to hints and gestures',
    },
    {
      session: 'Sessions 5-6',
      promptLevel: 'Visual only',
      action: 'Use checklist/Now-Next board, reduce verbal prompts',
      successCriteria: 'Pupil refers to visual supports independently',
    },
    {
      session: 'Sessions 7-8',
      promptLevel: 'Monitoring only',
      action: 'Observe from distance, intervene only if stuck for 30+ seconds',
      successCriteria: 'Pupil works independently for 2+ minutes',
    },
    {
      session: 'Sessions 9+',
      promptLevel: 'Independent',
      action: 'Check in at start and end only',
      successCriteria: 'Pupil completes task independently',
    },
  ];
}

// Generate teacher script
function generateTeacherScript(inputs: GeneratorInputs): string[] {
  const topicShort = inputs.topic.split(' - ')[0].split(' ').slice(0, 3).join(' ');
  const verbs = getTaskVerbs(inputs.taskType);
  const levelLabel = workingLevelLabels[inputs.workingLevel];

  return [
    `[Before the lesson]`,
    `- Prepare the ${topicShort} ${taskTypeLabels[inputs.taskType].toLowerCase()} at ${levelLabel}`,
    `- Have visual supports ready (Now-Next board, checklist)`,
    `- Brief the TA on today's prompt level`,
    ``,
    `[Starting the task]`,
    `"Today we're going to ${verbs.main} some ${topicShort} work."`,
    `"Let me show you what we're going to do." [Point to the task]`,
    `"First, we'll..." [Explain step 1 clearly]`,
    ``,
    `[During the task]`,
    `"You're doing well with..." [Name specific success]`,
    `"What's your next step?" [If using verbal-indirect prompts]`,
    `"Look at your checklist." [If using visual prompts]`,
    ``,
    `[If the pupil is stuck]`,
    `"Let's look at this together." [Move to more supportive prompt if needed]`,
    `"Remember, you can..." [Remind of available supports]`,
    ``,
    `[Ending the task]`,
    `"You've finished the ${topicShort} work. Let's check it together."`,
    `"What did you find easy? What was tricky?"`,
    `"Next time, we'll..." [Preview next session]`,
  ];
}

// Generate TA script
function generateTAScript(inputs: GeneratorInputs): string[] {
  const topicShort = inputs.topic.split(' - ')[0].split(' ').slice(0, 3).join(' ');
  const verbs = getTaskVerbs(inputs.taskType);

  return [
    `[Your role today]`,
    `- Support [name] with the ${topicShort} ${taskTypeLabels[inputs.taskType].toLowerCase()}`,
    `- Use [specified prompt level] - check with teacher`,
    `- Record any notes on the monitoring sheet`,
    ``,
    `[Positioning]`,
    `- Sit beside (not opposite) the pupil`,
    `- Keep visual supports within easy reach`,
    `- Be ready to step back when appropriate`,
    ``,
    `[Key phrases to use]`,
    `"What do you need to do first?"`,
    `"Look at your Now-Next board."`,
    `"You've done [X], now it's time for [Y]."`,
    `"Do you need help, or can you try by yourself?"`,
    ``,
    `[If the pupil is stuck]`,
    `- Wait 10 seconds before prompting`,
    `- Start with the least supportive prompt`,
    `- Only increase support if needed`,
    ``,
    `[Things to avoid]`,
    `- Don't complete work for the pupil`,
    `- Don't give answers - guide towards them`,
    `- Don't hover - give space to try independently`,
    ``,
    `[Record keeping]`,
    `- Note which prompts were needed`,
    `- Note any difficulties`,
    `- Note successes to share with teacher`,
  ];
}

// Generate visual support suggestions
function generateVisualSupports(inputs: GeneratorInputs): VisualSupport[] {
  const topicShort = inputs.topic.split(' - ')[0].split(' ').slice(0, 3).join(' ');
  const verbs = getTaskVerbs(inputs.taskType);

  return [
    {
      type: 'now-next',
      title: 'Now-Next Board',
      content: [
        `NOW: ${verbs.main.charAt(0).toUpperCase() + verbs.main.slice(1)} ${topicShort}`,
        `NEXT: [Break/Reward/Next activity]`,
      ],
      usage: 'Place on desk. Point to it to refocus attention. Update "NEXT" with something motivating.',
    },
    {
      type: 'checklist',
      title: 'Task Checklist',
      content: [
        `☐ Get my equipment ready`,
        `☐ ${verbs.main.charAt(0).toUpperCase() + verbs.main.slice(1)} step 1`,
        `☐ ${verbs.main.charAt(0).toUpperCase() + verbs.main.slice(1)} step 2`,
        `☐ ${verbs.main.charAt(0).toUpperCase() + verbs.main.slice(1)} step 3`,
        `☐ Check my work`,
        `☐ Show an adult`,
      ],
      usage: 'Pupil ticks off each step. Provides structure and sense of progress.',
    },
    {
      type: 'cue-card',
      title: 'Help Card / Cue Card',
      content: [
        `I can:`,
        `• Look at my checklist`,
        `• Ask for help`,
        `• Take a short break`,
        `• Try the next question`,
      ],
      usage: 'Pupil refers to this when stuck instead of calling out. Promotes independence.',
    },
  ];
}

// Generate mini video script
function generateMiniVideoScript(inputs: GeneratorInputs): GeneratorOutputs['miniVideoScript'] {
  const topicShort = inputs.topic.split(' - ')[0].split(' ').slice(0, 3).join(' ');
  const verbs = getTaskVerbs(inputs.taskType);
  const strategyName = inputs.strategy.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const levelLabel = workingLevelLabels[inputs.workingLevel];

  return {
    duration: '45 seconds',
    hook: `"Here's how to use ${strategyName} for a ${inputs.subject} ${taskTypeLabels[inputs.taskType].toLowerCase()} on ${topicShort}, supporting a pupil working at ${levelLabel}."`,
    demonstration: [
      `[Show the task materials briefly - 5 seconds]`,
      `"First, I set up the Now-Next board showing what we're doing and what comes after."`,
      `[Point to Now-Next board - 5 seconds]`,
      `"I break the task into ${inputs.strategy === 'chunking' ? 'small chunks' : 'clear steps'}, with a checklist the pupil can tick off."`,
      `[Show checklist being used - 8 seconds]`,
      `"I start with [appropriate prompt level] and ${inputs.strategy === 'prompt-fading' ? 'gradually reduce support' : 'support as needed'}."`,
      `[Show interaction with pupil - 10 seconds]`,
      `"When they complete each step, I ${inputs.strategy === 'backward-chaining' ? 'celebrate the finish, then add earlier steps' : 'acknowledge success before moving on'}."`,
    ],
    keyPoints: [
      `Use visual supports (Now-Next, checklist)`,
      `Match language to ${levelLabel}`,
      `${inputs.strategy === 'errorless-learning' ? 'Set up for success - prevent errors before they happen' : 'Fade prompts systematically over time'}`,
    ],
    callToAction: `"Try this with your next ${inputs.subject} ${taskTypeLabels[inputs.taskType].toLowerCase()}. Download the checklist template below."`,
  };
}

// Main generator function
export function generateWorkedExample(inputs: GeneratorInputs): GeneratorOutputs {
  return {
    instructionSequence: generateInstructionSequence(inputs),
    backwardChaining: generateBackwardChaining(inputs),
    prompts: generatePrompts(inputs),
    promptFadingPlan: generatePromptFadingPlan(inputs),
    teacherScript: generateTeacherScript(inputs),
    taScript: generateTAScript(inputs),
    visualSupports: generateVisualSupports(inputs),
    miniVideoScript: generateMiniVideoScript(inputs),
  };
}
