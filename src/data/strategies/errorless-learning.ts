import { Strategy } from '@/types';

export const errorlessLearningStrategy: Strategy = {
  id: 'errorless-learning-001',
  slug: 'errorless-learning',
  title: 'Errorless Learning',
  shortDescription: 'Design tasks so the pupil succeeds on the first attempt, building confidence before introducing challenge.',
  longDescription: `Errorless learning is about engineering success. You set up tasks, prompts, and environments so that the pupil cannot fail on their first attempts. This isn't about lowering expectations—it's about building a foundation of success that makes harder things possible later. For pupils who have experienced repeated failure, who shut down at the first sign of difficulty, or whose self-belief is fragile, errorless learning rebuilds confidence by proving that they CAN succeed. Once confidence is established, you gradually introduce challenge. But first: success.`,
  difficulty: 'intermediate',
  prepTime: '10-15 mins',
  areaOfNeed: 'Building Confidence',
  subjects: ['English', 'Maths', 'Science', 'History', 'Geography', 'Art', 'Music', 'PE', 'MFL', 'DT', 'Drama', 'RE', 'Computing', 'PSHE'],
  routines: ['New skill introduction', 'Confidence building', 'Recovery after failure'],
  tags: ['confidence', 'self-efficacy', 'anxiety', 'success', 'dignity'],

  content: {
    problem: {
      headline: 'Repeated failure creates learned helplessness',
      description: 'The pupil tries and fails. Tries again and fails. Eventually, they stop trying altogether. They stare at the blank page, refuse to pick up the pen, or say "I can\'t" before even looking at the task. Their brain has learned: attempting this leads to failure and shame. So it protects itself by not attempting at all.',
      signs: [
        'Says "I can\'t do this" before attempting',
        'Stares at blank page without starting',
        'Shuts down or becomes distressed when faced with challenge',
        'Avoids tasks they\'ve previously failed',
        'EHCP mentions "low confidence" or "history of failure"',
      ],
    },

    explanation: {
      definition: 'Errorless learning means providing immediate prompts BEFORE errors occur, engineering success on the very first attempt, then gradually fading support once the correct response is established.',
      whyItWorks: 'When pupils fail repeatedly, wrong answers and negative emotions become embedded in memory alongside the task itself. The brain associates the task with failure before learning even begins. Errorless learning prevents this by ensuring the correct response is experienced first and multiple times. The pupil\'s brain learns: I can do this. Once that belief is established, you can gradually introduce challenge. But you\'ve earned the right to challenge them by first proving they can succeed. This isn\'t lowering expectations—it\'s providing a scaffolded route to the same high standards.',
      keyPrinciples: [
        'Prompt BEFORE the error occurs, not after',
        'Heavy support upfront, faded once success is established',
        'Never let wrong answers become embedded in memory',
        'Build belief through repeated success',
        'Same expectations, scaffolded route',
      ],
    },

    howTo: {
      steps: [
        {
          step: 1,
          title: 'Identify the failure point',
          instruction: 'What specific task does this pupil consistently fail at or refuse to try? Be precise—not "English" but "writing opening sentences."',
          tip: 'Look for patterns: where do they shut down, refuse, or consistently get it wrong?',
        },
        {
          step: 2,
          title: 'Analyse why failure occurs',
          instruction: 'Is it too many steps? Wrong starting point? Fear of being wrong? Understanding the cause enables you to design success.',
          tip: 'Often the problem is belief, not ability. They CAN do it, but they believe they cannot.',
        },
        {
          step: 3,
          title: 'Design for 100% success',
          instruction: 'Make it impossible to fail. Options: give the answer to copy, provide two correct choices, simplify to the point where success is inevitable, or provide full prompts.',
          teacherSays: '"I\'ve set this up so you can\'t get it wrong. Just follow along."',
          tip: 'The first attempt MUST succeed. No exceptions.',
        },
        {
          step: 4,
          title: 'Deliver without fanfare',
          instruction: 'Don\'t announce "I\'m making this easy for you." Just present the task. Let them succeed. Then name their success explicitly.',
          teacherSays: '"You did it. That was you."',
          tip: 'Avoid language that highlights the scaffolding—focus on their achievement.',
        },
        {
          step: 5,
          title: 'Fade support gradually',
          instruction: 'Once success is consistent (multiple times, not just once), introduce ONE element of challenge. If they fail, drop back immediately.',
          teacherSays: '"Now let\'s try a slightly harder one. Same structure, just one more step."',
          tip: 'If in doubt, wait longer before adding challenge. More success builds stronger belief.',
        },
        {
          step: 6,
          title: 'Track and celebrate progress',
          instruction: 'Show the pupil how far they\'ve come. This reinforces their growing belief and proves the strategy is working.',
          teacherSays: '"In September, you needed the full answer. Now you\'re doing it with just the first letter."',
        },
      ],
      commonMistakes: [
        'Adding challenge too soon before belief is established',
        'Announcing "I\'m making this easier for you" (damages dignity)',
        'Prompting AFTER the error instead of BEFORE',
        'Not fading support—keeping scaffolding too long',
        'Giving up after one success instead of building a pattern',
      ],
      timeToImplement: '10-15 mins preparation, ongoing implementation',
    },

    workedExamples: [
      {
        subject: 'English',
        topic: 'Writing opening sentences',
        scenario: 'Year 10 pupil stares at blank pages and never starts writing. Every attempt has been "wrong."',
        steps: [
          {
            action: 'Phase 1: No possibility of failure',
            teacherDoes: 'Say: "I\'ve written the first sentence for you. Copy it exactly." Provide the complete sentence.',
            pupilDoes: 'Copies the sentence. Has started their paragraph successfully.',
          },
          {
            action: 'Phase 1: Name the success',
            teacherDoes: 'Say: "You\'ve started your paragraph. That sentence is correct."',
            pupilDoes: 'Experiences success. Brain registers: I can start a paragraph.',
          },
          {
            action: 'Phase 2: Minimal choice, maximum scaffold',
            teacherDoes: 'Say: "Here are two options for your first sentence. Pick one and write it."',
            pupilDoes: 'Chooses one option. Writes it. Cannot fail—both options are correct.',
          },
          {
            action: 'Phase 3: Structured freedom',
            teacherDoes: 'Say: "Start your paragraph with \'The writer...\' and say what they do."',
            pupilDoes: 'Writes own sentence using the starter. Has written independently.',
          },
        ],
      },
      {
        subject: 'Maths',
        topic: 'Fraction addition',
        scenario: 'Year 8 pupil shuts down whenever they see fractions. Belief: "I can\'t do fractions."',
        steps: [
          {
            action: 'Step 1: Give the answer',
            teacherDoes: 'Say: "Add one half plus one half. Here\'s the answer: two halves, which is one whole. Write it."',
            pupilDoes: 'Copies the correct answer. Has completed a fractions problem.',
          },
          {
            action: 'Step 1: Name the success',
            teacherDoes: 'Say: "You just did a fractions addition. You got it right."',
            pupilDoes: 'Experiences success with fractions—possibly for the first time.',
          },
          {
            action: 'Step 2: Partial scaffold',
            teacherDoes: 'Say: "One quarter plus one quarter. The answer is two quarters. Can you simplify that?"',
            pupilDoes: 'Simplifies to one half. Succeeds with minimal independent thinking.',
          },
          {
            action: 'Step 3: Remove one layer',
            teacherDoes: 'Say: "One quarter plus one quarter equals...?" Wait for response.',
            pupilDoes: 'Says "two quarters" or "one half." Is now doing fraction addition.',
          },
        ],
      },
      {
        subject: 'Science',
        topic: 'Equipment identification',
        scenario: 'Year 7 pupil is terrified of being wrong about equipment names. Gets them muddled and refuses to engage.',
        steps: [
          {
            action: 'Phase 1: Labelled equipment',
            teacherDoes: 'Attach visible labels to each piece of equipment. Say: "Point to the beaker."',
            pupilDoes: 'Points to equipment labelled "beaker." Cannot fail—answer is visible.',
          },
          {
            action: 'Phase 1: Name the success',
            teacherDoes: 'Say: "That\'s right—it says beaker right on it. You identified the beaker."',
            pupilDoes: 'Succeeds at equipment identification. Anxiety decreases.',
          },
          {
            action: 'Phase 2: Labels removed, chart available',
            teacherDoes: 'Say: "Find the conical flask. If you\'re not sure, check the chart on the wall."',
            pupilDoes: 'Checks chart if needed. Points correctly. "Good—you confirmed it yourself."',
          },
          {
            action: 'Phase 3: Safe to guess',
            teacherDoes: 'Say: "Tell me what this is. If you\'re not sure, take your best guess—I\'ll help if needed."',
            pupilDoes: 'Guesses. If wrong: "Close—it\'s a measuring cylinder. Now you know."',
          },
        ],
      },
      {
        subject: 'History',
        topic: 'Source analysis',
        scenario: 'Year 9 pupil freezes when asked to analyse historical sources. Previous attempts have been marked as "too shallow" or "missing the point."',
        steps: [
          {
            action: 'Step 1: Provide the analysis',
            teacherDoes: 'Say: "Here\'s what this source tells us about life in the trenches. Read my analysis, then copy the key points into your book."',
            pupilDoes: 'Copies the model analysis. Has completed source analysis successfully.',
          },
          {
            action: 'Step 2: Scaffold with sentence starters',
            teacherDoes: 'Say: "Look at this new source. Use these sentence starters: \'This source shows...\', \'This suggests that...\', \'The author might have...\'"',
            pupilDoes: 'Completes sentences using the starters. Cannot fail—structure is provided.',
          },
          {
            action: 'Step 3: Guided independence',
            teacherDoes: 'Say: "What does this source tell us? Start with what you can see, then tell me what it suggests."',
            pupilDoes: 'Offers observations. Teacher confirms and builds on them. "Yes—and what might that suggest?"',
          },
        ],
      },
      {
        subject: 'Geography',
        topic: 'Map skills - grid references',
        scenario: 'Year 7 pupil consistently gets grid references wrong and now refuses to attempt them, saying "I always get it backwards."',
        steps: [
          {
            action: 'Step 1: Full scaffold with mnemonic',
            teacherDoes: 'Say: "Along the corridor, then up the stairs. Watch me find this reference. The first number goes across, the second goes up." Demonstrate, then give the answer.',
            pupilDoes: 'Watches demonstration and writes the correct feature. Success with grid references.',
          },
          {
            action: 'Step 2: Guided practice with check',
            teacherDoes: 'Say: "Find 45, 23. Remember: along first, then up. Point to where you\'ll go along to." Check before they go up.',
            pupilDoes: 'Points along, gets confirmation, then moves up. Finds correct location.',
          },
          {
            action: 'Step 3: Independent with safety net',
            teacherDoes: 'Say: "Find what\'s at 67, 34. If you want me to check your first move, just ask."',
            pupilDoes: 'Attempts independently. Asks for check if uncertain. Succeeds with minimal support.',
          },
        ],
      },
      {
        subject: 'Art',
        topic: 'Observational drawing',
        scenario: 'Year 8 pupil screws up every attempt at drawing within seconds, saying "I can\'t draw" and "It looks nothing like it."',
        steps: [
          {
            action: 'Step 1: Tracing for success',
            teacherDoes: 'Say: "Put this tracing paper over the image. Trace the main outlines. That\'s your drawing."',
            pupilDoes: 'Traces the image. Produces an accurate drawing. "Look—you drew that."',
          },
          {
            action: 'Step 2: Grid method scaffold',
            teacherDoes: 'Say: "I\'ve put a grid over the image and your paper. Just copy what\'s in each square—one square at a time."',
            pupilDoes: 'Copies square by square. Builds up accurate image without overwhelm.',
          },
          {
            action: 'Step 3: Guided direct observation',
            teacherDoes: 'Say: "Look at the object. What basic shape do you see first? Draw just that shape." Build up piece by piece.',
            pupilDoes: 'Draws one shape at a time with teacher confirmation. Builds confidence gradually.',
          },
        ],
      },
      {
        subject: 'Music',
        topic: 'Reading notation',
        scenario: 'Year 7 pupil cannot read music notation and panics when sheet music is placed in front of them. Previous lessons have left them feeling "stupid."',
        steps: [
          {
            action: 'Step 1: Colour-coded notes',
            teacherDoes: 'Say: "Each note has a colour. Red is C, blue is D. Play the red notes when you see red." Provide colour-coded sheet music.',
            pupilDoes: 'Plays notes by matching colours. Successfully plays the melody.',
          },
          {
            action: 'Step 2: Letter names on notes',
            teacherDoes: 'Say: "I\'ve written the letter names on each note. Play C, then D, then E—just read the letters."',
            pupilDoes: 'Reads letter names and plays. Still succeeding, but now connecting letters to positions.',
          },
          {
            action: 'Step 3: Partial removal',
            teacherDoes: 'Say: "I\'ve only labelled the first note of each bar. Work out the others—they\'re close to the labelled one."',
            pupilDoes: 'Uses labelled notes as anchors. Works out adjacent notes. Building independence.',
          },
        ],
      },
      {
        subject: 'PE',
        topic: 'Basketball shooting',
        scenario: 'Year 9 pupil refuses to shoot during basketball because they have never scored and feel humiliated by misses.',
        steps: [
          {
            action: 'Step 1: Guaranteed success',
            teacherDoes: 'Say: "Stand here, right under the basket. Drop the ball in—it\'s impossible to miss from here."',
            pupilDoes: 'Drops ball into basket from directly underneath. Scores. "That\'s a basket. You scored."',
          },
          {
            action: 'Step 2: Very close range',
            teacherDoes: 'Say: "Take one step back. Same action—just a gentle push up. I\'ll rebound if needed."',
            pupilDoes: 'Shoots from close range. High success rate. Building positive associations.',
          },
          {
            action: 'Step 3: Gradually increase distance',
            teacherDoes: 'Say: "You\'ve scored from there five times. Ready to try one step further back?"',
            pupilDoes: 'Moves back slightly. Success rate stays high because progression is gradual.',
          },
        ],
      },
      {
        subject: 'MFL',
        topic: 'Speaking in French',
        scenario: 'Year 8 pupil refuses to speak French aloud, saying "My accent is rubbish" and "Everyone laughs."',
        steps: [
          {
            action: 'Step 1: Repetition only',
            teacherDoes: 'Say: "Listen and repeat after me, at the same time as me. Bonjour." Speak alongside the pupil.',
            pupilDoes: 'Says the word at the same time as teacher. Voice is covered. Success.',
          },
          {
            action: 'Step 2: Echo immediately after',
            teacherDoes: 'Say: "I\'ll say it, then you say it straight after. Je m\'appelle..." Wait for echo.',
            pupilDoes: 'Echoes immediately. Still supported by hearing the model first.',
          },
          {
            action: 'Step 3: Prepared response',
            teacherDoes: 'Say: "I\'m going to ask your name. The answer is Je m\'appelle [name]. Ready? Comment tu t\'appelles?"',
            pupilDoes: 'Gives prepared response. Succeeds because they knew exactly what to say.',
          },
        ],
      },
      {
        subject: 'DT',
        topic: 'Using a saw',
        scenario: 'Year 7 pupil is terrified of using tools after a previous incident where they cut crookedly and ruined their project.',
        steps: [
          {
            action: 'Step 1: Hand-over-hand guidance',
            teacherDoes: 'Say: "I\'ll guide your hands. You hold the saw, I\'ll help you keep it straight." Guide the cut together.',
            pupilDoes: 'Makes a straight cut with full physical support. "You just made a perfect cut."',
          },
          {
            action: 'Step 2: Guided start, independent finish',
            teacherDoes: 'Say: "I\'ll help you start the cut and get it in the groove. Then you carry on—I\'ll watch."',
            pupilDoes: 'Starts with support, continues independently. Cut stays straight because start was correct.',
          },
          {
            action: 'Step 3: Verbal guidance only',
            teacherDoes: 'Say: "Start your cut. I\'m right here. Remember: let the saw do the work, don\'t push too hard."',
            pupilDoes: 'Makes cut independently with teacher nearby. Support is presence only.',
          },
        ],
      },
      {
        subject: 'Drama',
        topic: 'Speaking in front of class',
        scenario: 'Year 10 pupil freezes and forgets lines when performing. Has walked off stage mid-performance before.',
        steps: [
          {
            action: 'Step 1: Script in hand',
            teacherDoes: 'Say: "Hold your script. Read directly from it. You don\'t need to look up at all." Allow full script use.',
            pupilDoes: 'Reads from script. Completes performance. "You performed that whole scene."',
          },
          {
            action: 'Step 2: Cue cards visible',
            teacherDoes: 'Say: "Your cue cards are on the desk. Glance at them whenever you need to. Nobody minds."',
            pupilDoes: 'Performs with cue cards available. Looks at them less than expected.',
          },
          {
            action: 'Step 3: Prompt available but not used',
            teacherDoes: 'Say: "I\'ll be in the wings with your script. If you need a line, just pause and I\'ll whisper it."',
            pupilDoes: 'Performs knowing support is there. May not need it. Safety net enables risk-taking.',
          },
        ],
      },
      {
        subject: 'RE',
        topic: 'Explaining religious concepts',
        scenario: 'Year 8 pupil gives one-word answers in RE and says "I don\'t know what I\'m supposed to say" when asked to explain beliefs.',
        steps: [
          {
            action: 'Step 1: Explanation provided',
            teacherDoes: 'Say: "Muslims believe in one God, called Allah. In your book, write: Muslims believe in one God, called Allah."',
            pupilDoes: 'Copies the explanation. Has written about religious belief accurately.',
          },
          {
            action: 'Step 2: Fill in the blanks',
            teacherDoes: 'Say: "Christians believe that Jesus is the _____ of God. Choose from: Son, friend, teacher."',
            pupilDoes: 'Selects "Son." Completes the sentence correctly. Cannot fail—correct answer is obvious.',
          },
          {
            action: 'Step 3: Structured response',
            teacherDoes: 'Say: "Tell me one thing Hindus believe. Start with: Hindus believe that..."',
            pupilDoes: 'Completes the sentence. Produces a correct explanation with sentence starter support.',
          },
        ],
      },
      {
        subject: 'Computing',
        topic: 'Writing code',
        scenario: 'Year 9 pupil stares at blank screen in coding lessons. Every program they\'ve written has produced errors and they\'ve given up.',
        steps: [
          {
            action: 'Step 1: Copy working code',
            teacherDoes: 'Say: "Here\'s a program that works. Type it exactly as shown. Every character matters."',
            pupilDoes: 'Copies the code exactly. Runs it. It works. "You just wrote a working program."',
          },
          {
            action: 'Step 2: Modify one element',
            teacherDoes: 'Say: "This code prints \'Hello\'. Change just the word in quotes to your name. Nothing else."',
            pupilDoes: 'Changes one word. Runs it. It works with their modification. "You edited code successfully."',
          },
          {
            action: 'Step 3: Fill in the gap',
            teacherDoes: 'Say: "This code is missing one line. The comment tells you what goes there. Write that line."',
            pupilDoes: 'Writes the missing line using the comment as guidance. Program runs. Building independence.',
          },
        ],
      },
      {
        subject: 'PSHE',
        topic: 'Discussing personal topics in class',
        scenario: 'Year 10 pupil refuses to participate in PSHE discussions, saying "I\'m not talking about that stuff."',
        steps: [
          {
            action: 'Step 1: Written response only',
            teacherDoes: 'Say: "You don\'t need to speak. Write your thoughts on this card. Only I will read it."',
            pupilDoes: 'Writes response privately. Participates without public exposure. "Thank you for sharing your thoughts."',
          },
          {
            action: 'Step 2: Pair discussion',
            teacherDoes: 'Say: "Discuss with your partner. You don\'t need to share with the class."',
            pupilDoes: 'Talks quietly with trusted partner. Practises expressing views in safe context.',
          },
          {
            action: 'Step 3: Optional sharing',
            teacherDoes: 'Say: "Would anyone like to share what they discussed? Only if you want to."',
            pupilDoes: 'May choose to share, knowing it\'s optional. No pressure, but opportunity exists.',
          },
        ],
      },
    ],

    routines: [
      {
        routine: 'Asking for help',
        context: 'Pupil never asks for help—sits silently stuck until lesson ends',
        steps: [
          'Week 1: Remove the ask entirely. TA notices pupil is stuck and initiates: "I can see you need help. Let\'s look at this together."',
          'Week 2: Effortless signal. "If you want help, just put this card on your desk. I\'ll come over." Card placed = help arrives.',
          'Week 3: Minimal verbal. "If you\'re stuck, just say \'help\' or raise a finger." Pupil raises finger. "Thanks for letting me know."',
          'Week 4+: Standard hand-raise. "Put your hand up if you need me."',
        ],
        taRole: 'Initially, TA monitors and initiates help without waiting for the pupil to ask. Gradually shift responsibility to pupil as each signal method succeeds.',
      },
      {
        routine: 'Reading aloud',
        context: 'Pupil refuses to read aloud after years of public stumbling',
        steps: [
          'Phase 1: Choral reading. "Everyone read this paragraph aloud with me." Pupil\'s voice hidden in group.',
          'Phase 2: Partner reading. "Read this sentence to your partner. Just them—no one else listening."',
          'Phase 3: Prepared passage. "Tomorrow, I\'d like you to read this paragraph. Take it home and practise tonight."',
          'Phase 4: Short, practised. Start with one sentence they\'ve practised. Build up gradually.',
        ],
        taRole: 'Sit near pupil during choral reading to monitor participation. For partner reading, pair with a supportive peer. Celebrate when they read successfully.',
      },
      {
        routine: 'Starting written work',
        context: 'Pupil cannot start writing tasks—paralysed by the blank page',
        steps: [
          'Phase 1: First sentence provided. "Copy this sentence to start." Success = they\'ve started.',
          'Phase 2: Sentence starter. "Begin with: The main character..." They complete it.',
          'Phase 3: Planning support. "Write one word for what happens first." They write one word, then expand.',
          'Phase 4: Independent start with safety net. "Start writing. If you\'re stuck after one minute, I\'ll help."',
        ],
        taRole: 'For Phase 1, provide the sentence. Check they\'ve copied it, then praise. Gradually reduce to pointing at the starter, then to a "You\'ve got this" nod.',
      },
    ],

    troubleshooting: [
      {
        problem: 'Pupil says "this is too easy" or "I\'m not a baby"',
        cause: 'Scaffolding is too visible or feels patronising',
        solution: 'Reframe: "This is how experts build skills—fundamentals first." Make scaffolding less obvious. Start at a slightly higher level if you\'re sure they won\'t fail. Protect dignity while ensuring success.',
      },
      {
        problem: 'Other staff think I\'m going too easy',
        cause: 'They don\'t understand the progression plan',
        solution: 'Explain: "Same expectations, different route. Watch—I\'ll track the scaffold reduction." Show them the phases and the evidence of progress. The endpoint is the same.',
      },
      {
        problem: 'Pupil succeeds but doesn\'t seem to believe it',
        cause: 'Years of failure have created deep-rooted negative beliefs',
        solution: 'Be explicit: "You did that. That was you." Name the specific skill: "You just solved a fraction problem." They need many more successes before belief shifts—stay at success level longer.',
      },
      {
        problem: 'Added challenge too soon and they failed',
        cause: 'Moved on before belief was established',
        solution: 'Drop back immediately without drama: "Let\'s go back to what was working." Rebuild with more successes. You haven\'t undone progress—you\'ve learned where the edge is. Go slower next time.',
      },
      {
        problem: 'This takes too long with curriculum pressures',
        cause: 'Pressure to cover content',
        solution: 'If the pupil shuts down and learns nothing, the curriculum isn\'t getting through anyway. Errorless learning invests time upfront to build the belief that enables all future learning. It\'s faster in the long run.',
      },
    ],

    scripts: {
      teacher: {
        starting: [
          '"I\'ve set this up so you can\'t get it wrong. Just follow along."',
          '"We\'re going to do this together first."',
          '"I\'ll show you, then you\'ll do it exactly the same way."',
        ],
        during: [
          '"You did it. That was you."',
          '"You just [name the skill]. You got it right."',
          '"Good. Now let\'s do another one the same way."',
        ],
        ifStuck: [
          '"Let me give you more help. Here\'s exactly what to write..."',
          '"I\'m going to show you again. Watch, then copy."',
          '"That\'s OK—let\'s go back to what was working."',
        ],
        ending: [
          '"Look how far you\'ve come. You did that independently."',
          '"In September you needed the full answer. Now you\'re doing it yourself."',
          '"You\'re someone who can do [name the skill]."',
        ],
      },
      ta: {
        role: 'Provide prompts BEFORE errors occur. Monitor closely and intervene early. Fade support gradually as success becomes consistent. Never let the pupil fail on early attempts.',
        keyPhrases: [
          '"Let me help you get it right the first time."',
          '"Here\'s exactly what to do..."',
          '"You did that. I saw you."',
          '"Let\'s go back to what was working."',
        ],
        avoid: [
          'Letting them struggle and fail on early attempts',
          'Saying "Try it yourself first"',
          'Waiting for errors before helping',
          'Announcing that you\'re making it easier',
        ],
      },
    },

    noTaAdaptations: {
      overview: "Errorless learning without a TA requires careful task design upfront - building the support into the materials rather than relying on adult intervention.",
      keyAdjustments: [
        "Design worksheets with immediate self-check answers (e.g., fold-over flaps, scratch-off answers)",
        "Use colour-coding to make correct choices obvious initially, then fade colours over time",
        "Provide worked examples directly above each practice problem",
        "Create fill-in-the-blank tasks with word banks that make errors nearly impossible",
      ],
      independenceStrategies: [
        "Teach pupils to always check the example before attempting",
        "Use 'copy then try' formats where they replicate a model before independent work",
        "Build in immediate self-correction: answer keys on the back of sheets",
      ],
      peerSupportOptions: [
        "Pair stronger and developing pupils for immediate peer feedback",
        "Use 'check before you move on' partners who verify each other's work",
        "Create peer tutoring pairs where one pupil guides the other through examples",
      ],
    },
  },

  prepPlan: [
    {
      time: '3 mins',
      action: 'Identify the failure point',
      details: 'What specific task does this pupil consistently fail or refuse? Be precise.',
    },
    {
      time: '3 mins',
      action: 'Analyse the cause',
      details: 'Why do they fail? Too hard? Too vague? Wrong starting point? Fear of being wrong?',
    },
    {
      time: '5 mins',
      action: 'Design 100% success version',
      details: 'How can you make failure impossible? Give the answer? Heavy scaffold? Simpler version?',
    },
    {
      time: '2 mins',
      action: 'Plan the progression',
      details: 'What will Phase 2 look like? Phase 3? Write out the scaffold-reduction steps.',
    },
    {
      time: '2 mins',
      action: 'Prepare language',
      details: 'What will you say when they succeed? How will you attribute it to them? "You did that."',
    },
  ],

  printableSummary: `ERRORLESS LEARNING

WHAT: Provide prompts BEFORE errors occur, engineering success on first attempt, then fade support once correct response is established.

WHY: Wrong answers become embedded in memory. Repeated failure creates learned helplessness. Success first builds belief that enables future challenge.

HOW:
1. Identify where failure happens
2. Analyse WHY failure occurs
3. Design for 100% success (give answer, heavy scaffold, simplify)
4. Deliver without fanfare—let them succeed
5. Add ONE element of challenge once success is consistent
6. Track and celebrate progress

KEY PRINCIPLE:
Prompt BEFORE the error, not after. Heavy support upfront, faded gradually.

COMMON MISTAKES:
x Adding challenge too soon
x Announcing "I'm making this easier"
x Prompting AFTER the error instead of BEFORE
x Not fading support once success is established

WHEN YOU SEE:
- "I can't do this" before attempting
- Staring at blank page without starting
- Shuts down when faced with challenge
- EHCP mentions "low confidence" or "avoids challenging tasks"`,

  quickChecklist: [
    'Identified specific task where failure occurs',
    'Analysed why failure happens',
    'Designed task for 100% success on first attempt',
    'Prepared scaffold (answer, options, simplification)',
    'Delivered without saying "I\'m making this easy"',
    'Attributed success explicitly: "You did that"',
    'Planned Phase 2 with ONE added challenge',
    'Tracked progress to show scaffold reduction',
  ],

  ehcpPhrases: [
    'low confidence',
    'avoids challenging tasks',
    'shuts down when faced with difficulty',
    'history of failure',
    'needs success to engage',
    'disengages when work is challenging',
    'requires high levels of encouragement',
    'gives up easily',
  ],

  relatedStrategies: ['backward-chaining', 'prompt-fading', 'chunking-one-step-instructions'],
};
