import { Strategy } from '@/types';

export const chunkingStrategy: Strategy = {
  id: 'chunking-001',
  slug: 'chunking-one-step-instructions',
  title: 'Chunking into 1-Step Instructions',
  shortDescription: 'Break multi-step tasks into single, clear instructions delivered one at a time.',
  longDescription: 'Chunking transforms overwhelming multi-step instructions into manageable single steps. Instead of giving three instructions at once, you deliver one, wait for completion, then give the next. This dramatically reduces cognitive load for pupils who struggle to hold multiple instructions in working memory.',
  difficulty: 'beginner',
  prepTime: '5 mins',
  areaOfNeed: 'Breaking Down Learning',
  subjects: ['English', 'Maths', 'Science', 'History', 'Geography', 'Art', 'Music', 'PE', 'MFL', 'DT', 'Drama', 'RE', 'Computing', 'PSHE'],
  routines: ['Lesson transitions', 'Task setup', 'Independent work'],
  tags: ['working memory', 'cognitive load', 'instructions', 'differentiation'],

  content: {
    problem: {
      headline: 'Multi-step instructions overload working memory',
      description: 'You say "Get your book, turn to page 42, and answer questions 1 to 3." The pupil gets their book... then stops. Stares at you. Has no idea what comes next. Their working memory hit capacity at step one.',
      signs: [
        'Pupil completes first step then looks lost',
        'Frequently asks "What do I do now?"',
        'Starts wrong task after multi-step instruction',
        'Waits for peers to start, then copies them',
        'EHCP mentions "difficulties with multi-step instructions"',
      ],
    },

    explanation: {
      definition: 'Chunking means giving ONE instruction, waiting for it to be completed, then giving the next. That\'s it.',
      whyItWorks: 'Working memory—the mental space where we hold and process information—has limited capacity. For some pupils, that capacity is very small. They can hold one thing, maybe two. Not three. When you give multiple instructions at once, you\'re asking them to store all of them while executing the first one. The storage fails. They lose the later instructions entirely.',
      keyPrinciples: [
        'One instruction at a time',
        'Wait for completion before giving the next',
        'Use a clear completion signal',
        'Keep language consistent and predictable',
        'Stay close enough to deliver the next step quickly',
      ],
    },

    howTo: {
      steps: [
        {
          step: 1,
          title: 'Identify multi-step moments',
          instruction: 'Before the lesson, note where you usually give 2+ instructions together. Task setup is the classic one.',
          teacherSays: 'N/A - this is prep',
          tip: 'Write these moments on a Post-it as a reminder.',
        },
        {
          step: 2,
          title: 'Break into single steps',
          instruction: '"Get your book, open to page 42, answer questions 1-3" becomes three separate instructions.',
          tip: 'Each instruction should require only one action.',
        },
        {
          step: 3,
          title: 'Agree a completion signal',
          instruction: 'Decide how you\'ll know step one is done before giving step two. This could be the pupil looking at you, putting their pen down, or giving a thumbs up.',
          teacherSays: '"When you\'ve done that, look at me and I\'ll tell you the next step."',
          tip: 'Agree this in advance so it becomes automatic.',
        },
        {
          step: 4,
          title: 'Position yourself',
          instruction: 'Stay close enough to see the completion signal and deliver the next instruction without delay. Don\'t hover—just be ready.',
          tip: 'Being too far away creates a delay that breaks momentum.',
        },
        {
          step: 5,
          title: 'Deliver with consistent language',
          instruction: 'Use the same format each time. "First..." Wait. "Now..." Wait. "Next..." The predictability helps.',
          teacherSays: '"First, get your exercise book." [Wait] "Now, open to page 42." [Wait] "Read question 1."',
        },
      ],
      commonMistakes: [
        'Giving the next instruction before the first is complete',
        'Standing too far away to see the completion signal',
        'Using different phrasing each time (confusing)',
        'Chunking for the whole class when only one pupil needs it',
        'Forgetting to use the strategy when under time pressure',
      ],
      timeToImplement: 'Immediate - no resources needed',
    },

    workedExamples: [
      {
        subject: 'English',
        topic: 'Writing a paragraph about a character',
        scenario: 'Year 8 class writing about Macbeth. One pupil working at KS1 level needs to write 3 sentences.',
        steps: [
          {
            action: 'Step 1: Get ready',
            teacherDoes: 'Say: "Get your exercise book and open to a clean page."',
            pupilDoes: 'Opens book. Looks at teacher.',
          },
          {
            action: 'Step 2: First sentence',
            teacherDoes: 'Say: "Write: Macbeth is a..." Point to word bank with character words.',
            pupilDoes: 'Copies sentence starter. Chooses word from bank. Writes sentence.',
          },
          {
            action: 'Step 3: Check and continue',
            teacherDoes: 'Say: "Read your sentence to me." Then: "Good. Now write: He feels..."',
            pupilDoes: 'Reads sentence aloud. Writes second sentence.',
          },
        ],
      },
      {
        subject: 'Maths',
        topic: 'Solving simple equations',
        scenario: 'Year 9 solving equations. Pupil working at KS2 level needs to solve 3x = 12.',
        steps: [
          {
            action: 'Step 1: Identify the operation',
            teacherDoes: 'Point to equation. Say: "What is happening to x? Is it being multiplied or divided?"',
            pupilDoes: 'Says "multiplied" (or teacher guides to answer).',
          },
          {
            action: 'Step 2: Do the inverse',
            teacherDoes: 'Say: "To undo multiply, we divide. Divide both sides by 3." Point to where to write.',
            pupilDoes: 'Writes ÷3 on both sides.',
          },
          {
            action: 'Step 3: Calculate',
            teacherDoes: 'Say: "What is 12 divided by 3?" Wait. "Write x = your answer."',
            pupilDoes: 'Calculates (using manipulatives if needed). Writes x = 4.',
          },
        ],
      },
      {
        subject: 'Science',
        topic: 'Setting up a practical',
        scenario: 'Year 7 setting up Bunsen burner. Pupil working at KS1 level needs safety support.',
        steps: [
          {
            action: 'Step 1: Safety first',
            teacherDoes: 'Say: "Put on your safety goggles." Wait for goggles to be on properly.',
            pupilDoes: 'Puts on goggles. Looks at teacher.',
          },
          {
            action: 'Step 2: Connect gas',
            teacherDoes: 'Say: "Push the rubber tube onto the gas tap. Push it on firmly."',
            pupilDoes: 'Connects tube. Tugs gently to check secure.',
          },
          {
            action: 'Step 3: Check airhole',
            teacherDoes: 'Point to airhole. Say: "Turn this collar so the hole is closed." Demonstrate.',
            pupilDoes: 'Closes airhole. Looks at teacher for next instruction.',
          },
        ],
      },
      {
        subject: 'History',
        topic: 'Analysing a historical source',
        scenario: 'Year 8 studying the conditions in WW1 trenches. Pupil working at KS2 level needs to analyse a photograph.',
        steps: [
          {
            action: 'Step 1: Look at the source',
            teacherDoes: 'Point to photograph. Say: "Look at this picture for 10 seconds. Just look."',
            pupilDoes: 'Looks at photograph. Looks at teacher when ready.',
          },
          {
            action: 'Step 2: Identify one thing',
            teacherDoes: 'Say: "Tell me one thing you can see in this picture."',
            pupilDoes: 'Says one thing they observe (e.g., "soldiers", "mud").',
          },
          {
            action: 'Step 3: Write it down',
            teacherDoes: 'Say: "Write: I can see... and finish the sentence with what you told me."',
            pupilDoes: 'Writes sentence. Looks at teacher for next instruction.',
          },
        ],
      },
      {
        subject: 'Geography',
        topic: 'Reading a map',
        scenario: 'Year 7 learning map skills. Pupil working at KS2 level needs to find grid references.',
        steps: [
          {
            action: 'Step 1: Find the horizontal line',
            teacherDoes: 'Say: "Put your finger on number 3 along the bottom." Point to the axis.',
            pupilDoes: 'Places finger on number 3 on horizontal axis.',
          },
          {
            action: 'Step 2: Find the vertical line',
            teacherDoes: 'Say: "Now slide your finger up until you reach line 5."',
            pupilDoes: 'Moves finger up the grid to line 5.',
          },
          {
            action: 'Step 3: Identify the feature',
            teacherDoes: 'Say: "What symbol is in that square? Look at the key to find out what it means."',
            pupilDoes: 'Looks at symbol, checks key, tells teacher what it represents.',
          },
        ],
      },
      {
        subject: 'Art',
        topic: 'Colour mixing',
        scenario: 'Year 7 learning about secondary colours. Pupil working at KS1 level needs to mix orange.',
        steps: [
          {
            action: 'Step 1: Get first colour',
            teacherDoes: 'Say: "Put one blob of red paint on your palette." Point to red paint and palette.',
            pupilDoes: 'Squeezes red paint onto palette. Looks at teacher.',
          },
          {
            action: 'Step 2: Get second colour',
            teacherDoes: 'Say: "Now put one blob of yellow next to the red. Same size."',
            pupilDoes: 'Adds yellow paint next to red.',
          },
          {
            action: 'Step 3: Mix together',
            teacherDoes: 'Say: "Use your brush to mix them together in circles. Keep mixing until it\'s all one colour."',
            pupilDoes: 'Mixes paints until orange is achieved. Shows teacher.',
          },
        ],
      },
      {
        subject: 'Music',
        topic: 'Learning a rhythm pattern',
        scenario: 'Year 8 learning percussion. Pupil working at KS2 level needs to play a 4-beat rhythm.',
        steps: [
          {
            action: 'Step 1: Listen to the pattern',
            teacherDoes: 'Say: "Listen to me clap this pattern once." Clap: TAA TAA TA-TA TAA.',
            pupilDoes: 'Listens and watches. Looks at teacher when finished.',
          },
          {
            action: 'Step 2: Clap it back',
            teacherDoes: 'Say: "Now clap it with me. Ready? Go." Clap pattern together.',
            pupilDoes: 'Claps pattern along with teacher.',
          },
          {
            action: 'Step 3: Play on instrument',
            teacherDoes: 'Say: "Now play that same pattern on your drum. Same rhythm."',
            pupilDoes: 'Plays rhythm on drum. Looks at teacher for feedback.',
          },
        ],
      },
      {
        subject: 'PE',
        topic: 'Passing a basketball',
        scenario: 'Year 9 learning chest pass. Pupil working at KS2 level needs support with technique.',
        steps: [
          {
            action: 'Step 1: Hold the ball',
            teacherDoes: 'Say: "Hold the ball at your chest with both hands. Fingers spread wide."',
            pupilDoes: 'Holds ball at chest height. Shows teacher hand position.',
          },
          {
            action: 'Step 2: Step forward',
            teacherDoes: 'Say: "Step forward with one foot towards your partner."',
            pupilDoes: 'Steps forward. Looks at teacher.',
          },
          {
            action: 'Step 3: Push and release',
            teacherDoes: 'Say: "Push the ball straight to your partner\'s chest. Let go when your arms are straight."',
            pupilDoes: 'Pushes ball towards partner. Watches where ball goes.',
          },
        ],
      },
      {
        subject: 'MFL',
        topic: 'Introducing yourself in French',
        scenario: 'Year 7 learning basic French greetings. Pupil working at KS2 level practising "Je m\'appelle".',
        steps: [
          {
            action: 'Step 1: Listen and repeat',
            teacherDoes: 'Say: "Listen: Je m\'appelle. Now you say it."',
            pupilDoes: 'Repeats "Je m\'appelle". Looks at teacher.',
          },
          {
            action: 'Step 2: Add your name',
            teacherDoes: 'Say: "Now say Je m\'appelle and then your name."',
            pupilDoes: 'Says "Je m\'appelle [name]".',
          },
          {
            action: 'Step 3: Write it down',
            teacherDoes: 'Point to board. Say: "Copy Je m\'appelle from the board. Then write your name after it."',
            pupilDoes: 'Copies phrase and adds name. Shows teacher.',
          },
        ],
      },
      {
        subject: 'DT',
        topic: 'Using a saw safely',
        scenario: 'Year 8 woodwork project. Pupil working at KS2 level needs to cut a piece of pine.',
        steps: [
          {
            action: 'Step 1: Secure the wood',
            teacherDoes: 'Say: "Put the wood in the vice. Turn the handle until it doesn\'t wobble."',
            pupilDoes: 'Places wood in vice. Tightens handle. Checks wood is secure.',
          },
          {
            action: 'Step 2: Position the saw',
            teacherDoes: 'Say: "Put the saw on the pencil line. Hold the handle with your strongest hand."',
            pupilDoes: 'Places saw blade on marked line. Grips handle firmly.',
          },
          {
            action: 'Step 3: Start cutting',
            teacherDoes: 'Say: "Pull the saw back gently three times to make a groove. Small movements."',
            pupilDoes: 'Makes three gentle back-strokes to start cut. Looks at teacher for next instruction.',
          },
        ],
      },
      {
        subject: 'Drama',
        topic: 'Creating a freeze frame',
        scenario: 'Year 7 exploring emotions through tableaux. Pupil working at KS2 level creating an angry character.',
        steps: [
          {
            action: 'Step 1: Choose your position',
            teacherDoes: 'Say: "Stand in the space. Think about where an angry person\'s hands might be."',
            pupilDoes: 'Stands in space. Positions hands (fists, crossed arms).',
          },
          {
            action: 'Step 2: Face expression',
            teacherDoes: 'Say: "Now make your face look angry. Think eyebrows, mouth."',
            pupilDoes: 'Changes facial expression to show anger.',
          },
          {
            action: 'Step 3: Freeze',
            teacherDoes: 'Say: "Freeze like a statue. Don\'t move at all until I say."',
            pupilDoes: 'Holds completely still in position.',
          },
        ],
      },
      {
        subject: 'RE',
        topic: 'Identifying religious symbols',
        scenario: 'Year 8 learning about world religions. Pupil working at KS2 level matching symbols to religions.',
        steps: [
          {
            action: 'Step 1: Look at the symbol',
            teacherDoes: 'Point to symbol card. Say: "Look at this symbol carefully. What shape is it?"',
            pupilDoes: 'Looks at symbol. Describes shape (e.g., "cross", "star").',
          },
          {
            action: 'Step 2: Find the match',
            teacherDoes: 'Say: "Look at your word cards. Find the religion that uses this symbol."',
            pupilDoes: 'Looks through word cards. Picks the matching religion.',
          },
          {
            action: 'Step 3: Stick them together',
            teacherDoes: 'Say: "Glue the symbol and the word next to each other in your book."',
            pupilDoes: 'Glues both cards in book. Looks at teacher for next symbol.',
          },
        ],
      },
      {
        subject: 'Computing',
        topic: 'Creating a simple program',
        scenario: 'Year 7 using Scratch. Pupil working at KS2 level making a sprite move.',
        steps: [
          {
            action: 'Step 1: Find the block',
            teacherDoes: 'Say: "Click on Motion on the left side. It\'s the blue one."',
            pupilDoes: 'Clicks on Motion category. Looks at teacher.',
          },
          {
            action: 'Step 2: Drag the block',
            teacherDoes: 'Say: "Find the block that says Move 10 steps. Drag it to the middle area."',
            pupilDoes: 'Finds block. Drags it to scripts area.',
          },
          {
            action: 'Step 3: Test it',
            teacherDoes: 'Say: "Click on the block once. Watch what your sprite does."',
            pupilDoes: 'Clicks block. Watches sprite move. Tells teacher what happened.',
          },
        ],
      },
      {
        subject: 'PSHE',
        topic: 'Setting a personal goal',
        scenario: 'Year 9 goal-setting session. Pupil working at KS2 level writing a SMART target.',
        steps: [
          {
            action: 'Step 1: Choose one thing',
            teacherDoes: 'Say: "Pick one thing you want to get better at. Just one."',
            pupilDoes: 'Thinks and chooses one goal (e.g., "arriving on time").',
          },
          {
            action: 'Step 2: Make it specific',
            teacherDoes: 'Say: "Write: I will... and then exactly what you will do."',
            pupilDoes: 'Writes "I will arrive to school before the bell."',
          },
          {
            action: 'Step 3: Add when',
            teacherDoes: 'Say: "Now write: every day this week. That tells you when."',
            pupilDoes: 'Adds timeframe to goal. Shows teacher completed sentence.',
          },
        ],
      },
    ],

    routines: [
      {
        routine: 'Lesson transitions',
        context: 'Moving from starter activity to main task',
        steps: [
          '"Pens down." [Wait for pen to be down]',
          '"Close your starter book." [Wait]',
          '"Look at the board." [Wait for eye contact]',
          '"Get your main exercise book." [Wait]',
        ],
        taRole: 'Stand near the pupil. Give a quiet "pen down" prompt if needed. Point to the board when teacher says to look.',
      },
      {
        routine: 'Independent work',
        context: 'Starting a worksheet independently',
        steps: [
          '"Read question 1." [Point to it]',
          '"What is it asking you to do?" [Wait for response]',
          '"Write your answer." [Point to answer space]',
          '"Show me when you\'ve finished that one."',
        ],
        taRole: 'Sit beside pupil. Point to each question as they move on. Don\'t give answers—just repeat the instruction if needed.',
      },
    ],

    troubleshooting: [
      {
        problem: 'Pupil doesn\'t give completion signal',
        cause: 'They\'ve forgotten, or never learned the signal',
        solution: 'Re-teach the signal explicitly. Practice it three times before starting the task. "Remember, when you\'re done, look at me."',
      },
      {
        problem: 'Pupil rushes and makes errors',
        cause: 'They\'re trying to remember later steps and rushing the current one',
        solution: 'Reassure them there\'s no need to remember what comes next. "I\'ll tell you the next step. Just focus on this one."',
      },
      {
        problem: 'Other pupils finish while you\'re still chunking',
        cause: 'Normal—chunking takes longer but ensures completion',
        solution: 'Have extension work ready for fast finishers. The chunked pupil completing the work correctly is the priority.',
      },
      {
        problem: 'You forget to chunk when busy',
        cause: 'Cognitive load on you during a full lesson',
        solution: 'Put a Post-it on your lanyard or board with "ONE STEP" written on it. Brief your TA to chunk if you forget.',
      },
    ],

    scripts: {
      teacher: {
        starting: [
          '"We\'re going to do this one step at a time."',
          '"I\'ll tell you exactly what to do. Just listen for one thing at a time."',
          '"When you\'ve done that, look at me."',
        ],
        during: [
          '"Good, you\'ve done that. Now..."',
          '"Well done. The next step is..."',
          '"Keep going. When that\'s done, look at me."',
        ],
        ifStuck: [
          '"Just focus on this one thing."',
          '"Forget about later—just do this step."',
          '"Let me say that again: [repeat single instruction]."',
        ],
        ending: [
          '"You\'ve finished all the steps. Well done."',
          '"See? One step at a time and you got there."',
        ],
      },
      ta: {
        role: 'Stay close to deliver chunked instructions. Give the completion signal prompt if the pupil forgets. Don\'t add extra steps or rush ahead.',
        keyPhrases: [
          '"What did Miss/Sir say to do?"',
          '"Just that one thing first."',
          '"Look at Miss/Sir when you\'re ready."',
          '"Good. Wait for the next step."',
        ],
        avoid: [
          'Giving two instructions at once',
          'Adding "and then..." to any instruction',
          'Telling them what comes later',
          'Rushing them to finish faster',
        ],
      },
    },

    noTaAdaptations: {
      overview: "Chunking works well without TA support because it's primarily about how you deliver instructions, not about having extra adults.",
      keyAdjustments: [
        "Use a visual task card on the pupil's desk showing one step at a time - they flip to the next when ready",
        "Teach the pupil to raise a specific signal (e.g., turning over a card) when they've completed a step",
        "Pre-record short audio instructions on a tablet they can replay",
        "Pair chunked instructions with a physical checklist they tick themselves",
      ],
      independenceStrategies: [
        "Teach the pupil to self-chunk: 'Read step 1. Do step 1. Check. Move to step 2.'",
        "Create a 'parking lot' on their desk where completed work goes, making progress visible",
        "Use timers so they know when to expect the next instruction from you",
      ],
      peerSupportOptions: [
        "Seat near a reliable peer who can point to the current step if needed",
        "Use pair work where both pupils follow the same chunked instructions",
        "Assign a 'step buddy' who gives a thumbs up when they've both finished a step",
      ],
    },
  },

  prepPlan: [
    { time: '2 mins', action: 'Identify multi-step moments', details: 'Note 2-3 places in the lesson where you give multiple instructions' },
    { time: '2 mins', action: 'Break into single steps', details: 'Write each step on a Post-it if helpful' },
    { time: '1 min', action: 'Brief TA', details: 'Tell them which pupil needs chunking and agree the completion signal' },
  ],

  printableSummary: `CHUNKING INTO 1-STEP INSTRUCTIONS

WHAT: Give ONE instruction → Wait for completion → Give the next

WHY: Working memory capacity is limited. Multi-step instructions overload it.

HOW:
1. Identify where you give 2+ instructions together
2. Break these into single steps
3. Agree a completion signal (eye contact, thumbs up)
4. Position yourself close enough to see the signal
5. Use consistent language: "First..." "Now..." "Next..."

COMMON MISTAKES:
✗ Giving the next instruction too soon
✗ Standing too far away
✗ Changing your phrasing

WHEN YOU SEE:
• Pupil completes step 1 then stops
• "What do I do now?"
• Copying peers instead of listening`,

  quickChecklist: [
    'Identified multi-step moments in the lesson',
    'Written chunked steps on Post-it',
    'Briefed TA on the sequence',
    'Agreed completion signal with pupil',
    'Positioned myself to deliver quickly',
    'Kept language consistent throughout',
  ],

  ehcpPhrases: [
    'difficulties following multi-step instructions',
    'needs instructions breaking down',
    'struggles with complex instructions',
    'requires step-by-step guidance',
    'needs instructions repeated',
    'limited working memory',
  ],

  relatedStrategies: ['task-analysis', 'visual-supports'],
};
