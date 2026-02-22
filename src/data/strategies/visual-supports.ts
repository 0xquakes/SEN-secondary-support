import { Strategy } from '@/types';

export const visualSupportsStrategy: Strategy = {
  id: 'visual-supports-001',
  slug: 'visual-supports-now-next',
  title: 'Visual Supports / Now-Next',
  shortDescription: 'Use visual cues to show what\'s happening now and what comes next, reducing anxiety and increasing predictability.',
  longDescription: 'Visual supports replace the uncertainty of "what\'s happening?" with concrete, visible information. Now-Next boards, checklists, cue cards, and visual timers reduce verbal load and provide an ongoing reference the pupil can check independently without asking. This dramatically reduces anxiety for pupils who struggle with transitions or unpredictability.',
  difficulty: 'beginner',
  prepTime: '10-15 mins',
  areaOfNeed: 'Visual & Structural Support',
  subjects: ['English', 'Maths', 'Science', 'History', 'Geography', 'Art', 'Music', 'PE', 'MFL', 'DT', 'Drama', 'RE', 'Computing', 'PSHE'],
  routines: ['All transitions', 'Lesson structure', 'Activity changes', 'Independent work'],
  tags: ['anxiety', 'transitions', 'predictability', 'autism', 'communication', 'working memory'],

  content: {
    problem: {
      headline: 'Verbal instructions vanish; anxiety fills the gap',
      description: 'You explain the lesson plan verbally. The pupil nods. Five minutes later, they\'re anxious, asking "What are we doing? What comes next?" They couldn\'t hold the information. Now every transition feels like a cliff edge they\'re about to fall off.',
      signs: [
        'Constantly asks "What are we doing now?" or "What\'s next?"',
        'Becomes anxious or distressed during transitions',
        'Waits for peers to move before doing anything',
        'Seems unable to start tasks independently',
        'EHCP mentions "benefits from visual supports" or "needs predictability"',
        'Appears lost when verbal instructions end',
      ],
    },

    explanation: {
      definition: 'Visual supports make the invisible visible. Instead of holding information in working memory, the pupil can see it. Now-Next boards show current and upcoming activities. Checklists break tasks into visible steps. Cue cards provide quick reference. Visual timers show time remaining.',
      whyItWorks: 'Verbal instructions disappear the moment you stop speaking. For pupils with limited working memory or high anxiety, this creates constant uncertainty. Visual supports provide a permanent reference point. The pupil can check the visual whenever they need to—independently, without asking, without waiting. This reduces cognitive load, lowers anxiety, and builds autonomy. They\'re not dependent on remembering or on you repeating yourself.',
      keyPrinciples: [
        'Visual information persists; verbal information vanishes',
        'Pupil can check independently without asking',
        'Update the visual BEFORE you change the activity',
        'Keep visuals honest—they must match reality',
        'Start simple and add complexity once habits form',
      ],
    },

    howTo: {
      steps: [
        {
          step: 1,
          title: 'Create a Now-Next board',
          instruction: 'Make a simple A4 card with two sections: NOW on the left, NEXT on the right. Add Velcro strips for attaching activity cards, or simply use Post-it notes.',
          tip: 'Don\'t wait for laminated perfection. Post-it notes on paper work immediately.',
        },
        {
          step: 2,
          title: 'Make activity cards',
          instruction: 'Create small cards for common activities: Writing, Reading, Video, Discussion, Break, Pack up. Use words, pictures, or both depending on the pupil.',
          tip: 'Start with 6-8 cards covering your typical lesson activities.',
        },
        {
          step: 3,
          title: 'Position the visual where they can see it',
          instruction: 'Put the Now-Next on the pupil\'s desk, or at the front for whole-class use. The pupil must be able to see it without asking permission or moving.',
          teacherSays: '"This is your Now-Next board. It always tells you what\'s happening."',
        },
        {
          step: 4,
          title: 'Teach the pupil to use it',
          instruction: 'Don\'t assume they know. Explicitly teach them to check the visual before asking you. Practice: "Before you ask me what\'s next, check your board."',
          teacherSays: '"Look at your Now-Next. Point to NOW. What are we doing?"',
          tip: 'Build the habit through practice, not assumption.',
        },
        {
          step: 5,
          title: 'Update BEFORE transitions',
          instruction: 'Before you change activities, update the board so the pupil can see what\'s coming. This is crucial. They see the change before it happens.',
          teacherSays: '"I\'m updating your NEXT card now. Watch—we\'re moving to reading after this."',
        },
        {
          step: 6,
          title: 'Refer to it consistently',
          instruction: 'Build the habit by pointing to the visual regularly. "Check your Now-Next" becomes a familiar prompt that redirects without repeating instructions.',
          teacherSays: '"Check your board. What\'s next? That\'s right—pack up time."',
        },
      ],
      commonMistakes: [
        'Changing activities without updating the visual first (destroys trust)',
        'Placing the visual where the pupil can\'t see it easily',
        'Assuming the pupil knows how to use it without teaching',
        'Making visuals too complex too soon (start with Now-Next only)',
        'Letting the visual contradict reality (the visual must be honest)',
      ],
      timeToImplement: '10-15 minutes prep, immediate use',
    },

    workedExamples: [
      {
        subject: 'English',
        topic: 'Extended writing with First-Then card',
        scenario: 'Year 8 pupil resists writing tasks. They want to skip to preferred activities. Working at KS2 level for extended writing.',
        steps: [
          {
            action: 'Set up First-Then card',
            teacherDoes: 'Place First-Then card on desk. FIRST shows "Writing - 3 sentences". THEN shows the pupil\'s preferred activity (e.g., drawing).',
            pupilDoes: 'Sees the visual contract. Understands the deal.',
          },
          {
            action: 'Point to the contract',
            teacherDoes: 'Say: "Look at your card. First, writing. Just three sentences. Then, drawing. I\'ll set the timer."',
            pupilDoes: 'Looks at card. Sees both parts of the deal clearly.',
          },
          {
            action: 'Support the writing',
            teacherDoes: 'Provide sentence starters. Point to FIRST card as reminder. "Two more sentences, then it\'s THEN time."',
            pupilDoes: 'Writes sentences. Checks card for motivation.',
          },
          {
            action: 'Complete the contract',
            teacherDoes: 'Remove FIRST card. Say: "You did it. First is done. Now it\'s THEN time. You earned it."',
            pupilDoes: 'Sees the visual proof they completed the task. Moves to preferred activity.',
          },
        ],
      },
      {
        subject: 'Maths',
        topic: 'Lesson schedule for anxious pupil',
        scenario: 'Year 7 pupil becomes anxious when they don\'t know how long things will last or what\'s coming. Working at age-appropriate level but needs predictability.',
        steps: [
          {
            action: 'Display lesson schedule',
            teacherDoes: 'Write on whiteboard visible to all: 1. Starter 2. Teaching 3. Practice 4. Plenary 5. Pack up. Add approximate times if helpful.',
            pupilDoes: 'Sees entire lesson structure at a glance.',
          },
          {
            action: 'Start the lesson',
            teacherDoes: 'Say: "Here\'s what we\'re doing today. It\'s all on the board. I\'ll cross each one off when we finish it."',
            pupilDoes: 'Knows what to expect. Can see the whole journey.',
          },
          {
            action: 'Mark progress',
            teacherDoes: 'Cross off completed sections. Say: "Starter done. Watch me cross it off. What\'s next? Practice."',
            pupilDoes: 'Sees visual proof of progress. Knows position in the lesson.',
          },
          {
            action: 'Add a timer (optional)',
            teacherDoes: 'Display visual timer next to schedule. "Practice for 15 minutes. You can see the time on the timer."',
            pupilDoes: 'Can check both what they\'re doing and how long is left independently.',
          },
        ],
      },
      {
        subject: 'Science',
        topic: 'Practical method with visual checklist',
        scenario: 'Year 7 practical with six steps. Pupil working at KS1 level struggles to hold method in memory.',
        steps: [
          {
            action: 'Display method visually',
            teacherDoes: 'Write numbered steps on whiteboard with simple diagrams. Large, clear, visible from all desks.',
            pupilDoes: 'Can see all steps. Doesn\'t need to remember them.',
          },
          {
            action: 'Introduce the visual',
            teacherDoes: 'Say: "Today\'s practical has six steps. They\'re all on the board. We\'ll tick each one as we do it."',
            pupilDoes: 'Understands they can check the board instead of asking.',
          },
          {
            action: 'Track progress during practical',
            teacherDoes: 'Tick completed steps. Circle current step. "Step three done. We\'re on step four now. What\'s step four? Read it from the board."',
            pupilDoes: 'Reads step from board. Completes it. Checks for next step.',
          },
          {
            action: 'Celebrate completion',
            teacherDoes: 'Tick final step. "Look—all six steps ticked. You completed the whole practical by following the board."',
            pupilDoes: 'Sees visual proof of achievement. Six ticks.',
          },
        ],
      },
      {
        subject: 'History',
        topic: 'Source analysis with visual scaffold',
        scenario: 'Year 9 pupil analysing a WWI recruitment poster. Struggles to remember the analysis steps without constant prompting.',
        steps: [
          {
            action: 'Display analysis scaffold',
            teacherDoes: 'Place laminated "Source Analysis" card on desk with visual prompts: 1. What type? (icon of document) 2. Who made it? (icon of person) 3. Why? (question mark) 4. What does it show? (magnifying glass)',
            pupilDoes: 'Sees the four steps clearly. Knows what to do without asking.',
          },
          {
            action: 'Model using the scaffold',
            teacherDoes: 'Say: "We\'ll use this card for every source. Watch me—I point to step one. What type of source is this? A poster. Now you do step two."',
            pupilDoes: 'Points to step two on their card. Identifies who made it.',
          },
          {
            action: 'Independent practice with visual',
            teacherDoes: 'Give new source. Say: "Use your card. Work through each step. Tick them off as you go."',
            pupilDoes: 'Works through analysis independently, checking each step on the visual scaffold.',
          },
        ],
      },
      {
        subject: 'Geography',
        topic: 'Map skills with visual key reference',
        scenario: 'Year 7 pupil learning six-figure grid references. Becomes confused about the order of steps and frequently asks for help.',
        steps: [
          {
            action: 'Provide visual reference strip',
            teacherDoes: 'Give pupil a desk strip showing: "Along the corridor, up the stairs" with arrows and numbered example. Include visual of x-axis first, then y-axis.',
            pupilDoes: 'Has permanent reference for the method. No need to memorise.',
          },
          {
            action: 'Connect verbal to visual',
            teacherDoes: 'Say: "Every time you do a grid reference, check your strip. Point to step one. Which direction first?"',
            pupilDoes: 'Points to strip. Says "Along the corridor." Reads the x-axis number.',
          },
          {
            action: 'Build independence',
            teacherDoes: 'When pupil asks for help, redirect: "What does your strip say? Show me with your finger."',
            pupilDoes: 'Checks visual strip instead of asking. Completes grid references using the reference.',
          },
        ],
      },
      {
        subject: 'Art',
        topic: 'Painting technique with step-by-step visual',
        scenario: 'Year 8 pupil doing watercolour painting. Rushes steps or forgets the technique sequence, leading to frustration when work goes wrong.',
        steps: [
          {
            action: 'Display technique sequence',
            teacherDoes: 'Place visual process card on desk: 1. Wet brush (water droplet icon) 2. Load paint (brush in paint icon) 3. Test on scrap (test square) 4. Apply to work (painting icon). Each step has a checkbox.',
            pupilDoes: 'Sees the four steps. Understands there\'s a process to follow.',
          },
          {
            action: 'Practise with the visual',
            teacherDoes: 'Say: "Before each brush stroke, check your card. Do all four steps. Tick each one as you do it."',
            pupilDoes: 'Slows down. Follows sequence. Ticks each step before moving on.',
          },
          {
            action: 'Redirect rushing',
            teacherDoes: 'If pupil skips steps: "Stop. Where\'s your card? Which step are you on? Do them in order."',
            pupilDoes: 'Returns to visual. Resets. Follows the sequence properly.',
          },
        ],
      },
      {
        subject: 'Music',
        topic: 'Keyboard practice with visual fingering chart',
        scenario: 'Year 7 pupil learning a melody on keyboard. Cannot remember which fingers to use and keeps stopping to ask.',
        steps: [
          {
            action: 'Set up visual fingering guide',
            teacherDoes: 'Place enlarged fingering diagram above the keyboard showing numbered fingers (1-5) and which notes to play. Colour-code if helpful.',
            pupilDoes: 'Can see finger numbers matched to notes without asking.',
          },
          {
            action: 'Connect fingers to visual',
            teacherDoes: 'Say: "Your finger chart is here. Before you play a note, look at the chart. Which finger plays C? Point to it."',
            pupilDoes: 'Looks at chart. Points to finger 1 for C. Plays with correct finger.',
          },
          {
            action: 'Build fluency',
            teacherDoes: 'Say: "Play the first four notes. Check the chart before each one. You don\'t need to ask me—the chart tells you."',
            pupilDoes: 'Plays independently, checking visual between notes. Gradually needs fewer checks.',
          },
        ],
      },
      {
        subject: 'PE',
        topic: 'Warm-up routine with visual sequence board',
        scenario: 'Year 9 pupil with autism finds the unstructured start of PE lessons overwhelming. Doesn\'t know what to do during warm-up.',
        steps: [
          {
            action: 'Display warm-up sequence',
            teacherDoes: 'Show visual board with six warm-up exercises in order, each with stick figure illustration: 1. Jog on spot 2. Star jumps 3. Arm circles 4. Lunges 5. High knees 6. Stretches',
            pupilDoes: 'Sees exactly what to do. No verbal instructions needed.',
          },
          {
            action: 'Direct to visual at lesson start',
            teacherDoes: 'Say: "Warm-up time. Your board shows you what to do. Start at number one. Move through each exercise."',
            pupilDoes: 'Follows visual sequence independently. Moves to next exercise when ready.',
          },
          {
            action: 'Mark progress',
            teacherDoes: 'Provide magnetic marker or clip. "Move your marker as you finish each one. When you reach six, you\'re done."',
            pupilDoes: 'Moves marker after each exercise. Knows exactly when warm-up is complete.',
          },
        ],
      },
      {
        subject: 'MFL',
        topic: 'Speaking task with visual sentence builder',
        scenario: 'Year 8 pupil learning French. Freezes during speaking activities because they can\'t hold vocabulary and sentence structure simultaneously.',
        steps: [
          {
            action: 'Provide visual sentence frame',
            teacherDoes: 'Give pupil a visual sentence builder card showing structure: [Subject] + [Verb] + [Object]. Include picture cues above key vocabulary. "Je mange..." with food pictures.',
            pupilDoes: 'Sees sentence structure and vocabulary options visually.',
          },
          {
            action: 'Model using the visual',
            teacherDoes: 'Say: "Watch me use the card. I point to \'je\', then \'mange\', then I choose a food. Je mange une pomme. Your turn—use your card."',
            pupilDoes: 'Points to each part of the sentence builder. Constructs sentence with visual support.',
          },
          {
            action: 'Reduce anxiety in speaking',
            teacherDoes: 'Say: "When I ask you a question, use your card. You don\'t need to remember—you can read and point."',
            pupilDoes: 'Participates in speaking activity using visual support. Confidence increases.',
          },
        ],
      },
      {
        subject: 'DT',
        topic: 'Practical making with visual process board',
        scenario: 'Year 8 pupil making a phone holder in workshop. Gets overwhelmed by multi-step making process and makes errors by skipping steps.',
        steps: [
          {
            action: 'Set up process board at workstation',
            teacherDoes: 'Place A4 process board showing making stages with photos: 1. Measure and mark 2. Cut 3. File edges 4. Drill holes 5. Assemble 6. Finish. Add checkboxes.',
            pupilDoes: 'Sees entire making process. Knows what stage comes next.',
          },
          {
            action: 'Teach checkpoint system',
            teacherDoes: 'Say: "Before you move to the next stage, tick the box and show me. This stops mistakes. Which stage are you on now?"',
            pupilDoes: 'Points to current stage. Completes it. Ticks box. Checks what\'s next.',
          },
          {
            action: 'Quality control with visual',
            teacherDoes: 'Add quality check questions under each stage. "Stage 3: Are edges smooth? No sharp bits?" Pupil self-checks before moving on.',
            pupilDoes: 'Reads check question. Examines work. Only moves on when quality check passed.',
          },
        ],
      },
      {
        subject: 'Drama',
        topic: 'Devising process with visual planning board',
        scenario: 'Year 9 group devising a scene. Pupil with ADHD loses track of the creative process and what the group has decided.',
        steps: [
          {
            action: 'Create group planning board',
            teacherDoes: 'Provide A3 visual planner divided into: Characters (with space for names/traits), Setting (where/when), Problem, Solution, Key moments. Use sticky notes for flexibility.',
            pupilDoes: 'Can see all decisions made so far. Doesn\'t need to hold them in memory.',
          },
          {
            action: 'Record decisions visually',
            teacherDoes: 'Say: "Every time your group makes a decision, write it on a sticky note and add it to your board. Then everyone can see it."',
            pupilDoes: 'Writes key decisions. Sticks them on board. Can check back when needed.',
          },
          {
            action: 'Reference during rehearsal',
            teacherDoes: 'Keep board visible during rehearsal. "Check your board—what happens in moment three? What did you decide about your character?"',
            pupilDoes: 'Checks visual record. Remembers agreed decisions. Stays on track with group.',
          },
        ],
      },
      {
        subject: 'RE',
        topic: 'Comparing religions with visual comparison chart',
        scenario: 'Year 7 pupil comparing beliefs across religions. Becomes confused when trying to hold multiple perspectives simultaneously.',
        steps: [
          {
            action: 'Provide visual comparison grid',
            teacherDoes: 'Give pupil A3 comparison chart with religions across the top and key concepts down the side (e.g., Place of worship, Holy book, Key beliefs). Include symbol icons for each religion.',
            pupilDoes: 'Sees structure for comparison. Each piece of information has a clear place.',
          },
          {
            action: 'Build the visual during learning',
            teacherDoes: 'Say: "As we learn about each religion, add it to your chart. Christianity\'s place of worship? Write \'church\' in that box. Now you\'ll always be able to compare."',
            pupilDoes: 'Fills in chart as they learn. Creates their own visual reference.',
          },
          {
            action: 'Use for comparison tasks',
            teacherDoes: 'Say: "The question asks how two religions are similar. Look at your chart. Compare the boxes. What\'s the same?"',
            pupilDoes: 'Uses visual chart to identify similarities and differences without relying on memory.',
          },
        ],
      },
      {
        subject: 'Computing',
        topic: 'Coding with visual algorithm flowchart',
        scenario: 'Year 8 pupil writing Python code. Struggles to translate the logic in their head into code and loses track of program structure.',
        steps: [
          {
            action: 'Plan with visual flowchart',
            teacherDoes: 'Before coding, provide flowchart template. "Draw your algorithm first. What happens first? What decision does the program make? Show it with arrows."',
            pupilDoes: 'Creates visual map of program logic. Sees the structure before writing code.',
          },
          {
            action: 'Code from the visual',
            teacherDoes: 'Say: "Now code from your flowchart. Point to the first shape. Write that code. Move to the next shape. What code does that need?"',
            pupilDoes: 'Translates each flowchart shape into code. Uses visual as guide.',
          },
          {
            action: 'Debug using the visual',
            teacherDoes: 'When code doesn\'t work: "Go back to your flowchart. Point to where you are in the code. Does your code match your flowchart?"',
            pupilDoes: 'Compares code to flowchart. Identifies where they diverged. Fixes error.',
          },
        ],
      },
      {
        subject: 'PSHE',
        topic: 'Emotional regulation with feelings thermometer',
        scenario: 'Year 7 pupil struggles to recognise and communicate their emotional state. Often becomes dysregulated without warning.',
        steps: [
          {
            action: 'Introduce feelings thermometer',
            teacherDoes: 'Provide visual thermometer showing emotion levels: 1 (green, calm) to 5 (red, crisis). Include body clues and face expressions at each level.',
            pupilDoes: 'Sees emotions as a scale. Has vocabulary and pictures for different levels.',
          },
          {
            action: 'Practise identifying level',
            teacherDoes: 'Say: "Point to where you are on the thermometer right now. Look at your body—is your heart fast or slow? Are you tense or relaxed?"',
            pupilDoes: 'Checks body. Points to current level on thermometer. Builds self-awareness.',
          },
          {
            action: 'Use for communication and intervention',
            teacherDoes: 'Say: "When you get to level 3, show me your thermometer. We\'ll do something to help you come back down before it gets higher."',
            pupilDoes: 'Uses visual to communicate emotional state. Gets support earlier, before crisis.',
          },
        ],
      },
    ],

    routines: [
      {
        routine: 'Morning arrival',
        context: 'Pupil arrives anxious, not knowing what to expect. Every morning feels unpredictable.',
        steps: [
          'Pupil arrives, sees visual routine strip on their desk',
          'Strip shows: Bag on floor > Coat on chair > Planner on desk > Equipment check > Look at board > Start task',
          'Pupil follows sequence independently, ticking or pointing to each step',
          'No verbal instruction needed—the visual guides them',
        ],
        taRole: 'Greet the pupil. Point to the strip if needed. Don\'t give verbal instructions—let the visual do the work. "Your strip is there."',
      },
      {
        routine: 'Lesson transitions',
        context: 'Moving between activities within a lesson. Pupil struggles with change.',
        steps: [
          'Before announcing the change, update the Now-Next board',
          '"I\'m changing your NEXT card. Watch—we\'re moving to discussion."',
          'Give the class the transition instruction',
          'Point to the pupil\'s board: "Check your Now-Next. What are we doing now?"',
        ],
        taRole: 'Update the Now-Next if teacher is busy. Point to the board during transitions. "What does NOW say?"',
      },
      {
        routine: 'Independent work',
        context: 'Extended writing or multi-step task. Pupil loses track of where they are.',
        steps: [
          'Provide a task checklist or process strip (e.g., Plan > Draft > Check > Improve > Final)',
          'Give pupil a paperclip or arrow to mark current stage',
          '"Move your clip when you finish each stage. You can always see where you are."',
          'Check in: "Where\'s your clip? Good, you\'re on Check. What\'s next?"',
        ],
        taRole: 'Prompt the pupil to move their marker. "You\'ve finished drafting. What stage is next? Move your clip."',
      },
    ],

    troubleshooting: [
      {
        problem: 'Pupil ignores the visual support',
        cause: 'They don\'t know how to use it. No one taught them explicitly.',
        solution: 'Teach it explicitly: "Before you ask me what\'s next, look at your board. Point to NOW. What does it say?" Build the habit through practice, not assumption.',
      },
      {
        problem: 'Plans change and the visual is wrong',
        cause: 'You changed the activity without updating the visual first.',
        solution: 'Always update the visual BEFORE announcing the change. "I\'m going to change our NEXT—watch me move the card." Never let reality contradict the visual.',
      },
      {
        problem: 'Pupil checks the visual obsessively',
        cause: 'The visual is working—they\'re using it for regulation. Anxiety is high.',
        solution: 'This often reduces naturally as anxiety decreases. If it interferes with learning, add structure: "You can check at the start of each activity."',
      },
      {
        problem: 'No time to make proper visuals',
        cause: 'Waiting for laminated perfection.',
        solution: 'Start simple. Whiteboard schedule costs nothing. Post-it note Now-Next works immediately. Build your resource bank gradually. Don\'t let perfect stop good enough.',
      },
      {
        problem: 'Other pupils ask why they don\'t get one',
        cause: 'Visuals are visible; difference is noticed.',
        solution: 'Normalise it: "Some people find it easier to see the plan. If you\'d like one too, you can have one." Many decline. Some take one—and may benefit.',
      },
    ],

    scripts: {
      teacher: {
        starting: [
          '"This is your Now-Next board. It always tells you what\'s happening."',
          '"Before you ask me what we\'re doing, check your board."',
          '"I\'ll update this whenever we change activities. You can check it any time."',
        ],
        during: [
          '"Look at your Now-Next. What are we doing now?"',
          '"I\'m updating NEXT. Watch—we\'re moving to reading."',
          '"Check your board. What comes after this?"',
        ],
        ifStuck: [
          '"What does your board say? Point to NOW."',
          '"You don\'t need to ask me—your board tells you."',
          '"Check your checklist. Which step are you on?"',
        ],
        ending: [
          '"Look at your board. We completed everything on it today."',
          '"You checked your visual and always knew what was happening. Well done."',
        ],
      },
      ta: {
        role: 'Keep the visual updated. Redirect the pupil to check their visual instead of asking you verbally. Build their independence by pointing to the visual rather than giving verbal answers.',
        keyPhrases: [
          '"Check your Now-Next."',
          '"What does your board say?"',
          '"Point to where you are on your checklist."',
          '"Before you ask me, look at your strip."',
        ],
        avoid: [
          'Answering "What are we doing?" verbally instead of pointing to visual',
          'Forgetting to update the Now-Next before transitions',
          'Adding verbal information not shown on the visual',
          'Removing the visual once the pupil "should know" the routine',
        ],
      },
    },

    noTaAdaptations: {
      overview: "Visual supports are inherently designed to reduce reliance on adult prompting - they're one of the most TA-independent strategies available.",
      keyAdjustments: [
        "Ensure Now-Next boards are positioned where pupils can update them independently",
        "Use Velcro or magnetic systems so pupils can physically move task cards themselves",
        "Create personalised visual schedules pupils keep in their planner",
        "Laminate visual supports so they last and can be reused across lessons",
      ],
      independenceStrategies: [
        "Teach the routine: 'Check your board. Do Now. Move it to Done. Check Next.'",
        "Build in self-monitoring: 'Look at your board every 5 minutes' with a timer",
        "Create a visual 'finished' routine they follow without prompting",
      ],
      peerSupportOptions: [
        "Pair pupils with similar visual supports - they can remind each other to check",
        "Create class 'visual checkers' who prompt everyone to update boards at transitions",
        "Use group Now-Next boards for table groups, with shared responsibility to update",
      ],
    },
  },

  prepPlan: [
    { time: '5 mins', action: 'Create Now-Next board', details: 'A4 paper with NOW and NEXT sections. Draw lines or use sticky notes. Can upgrade to laminated version later.' },
    { time: '3 mins', action: 'Make activity cards', details: 'Write or draw common activities on small paper squares or Post-its: Writing, Reading, Video, Discussion, Break, Pack up.' },
    { time: '2 mins', action: 'Position the visual', details: 'Put Now-Next on pupil\'s desk (or front of room for whole class). Check they can see it from their seat.' },
    { time: '2 mins', action: 'Plan your updates', details: 'Look at your lesson plan. When will you update NOW and NEXT? Note these moments.' },
    { time: '1 min', action: 'Brief TA', details: 'Show them the visual. Explain: update before transitions, redirect pupil to check the board instead of answering verbally.' },
  ],

  printableSummary: `VISUAL SUPPORTS / NOW-NEXT

WHAT: Make invisible information visible. Now-Next boards, checklists, cue cards, timers.

WHY: Verbal instructions vanish. Visual supports persist. Pupil can check independently without asking.

HOW:
1. Create Now-Next board (NOW on left, NEXT on right)
2. Make activity cards (words, pictures, or both)
3. Position where pupil can see without asking
4. Teach them to check it: "Look at your board"
5. Update BEFORE transitions happen
6. Keep it honest—visual must match reality

VISUAL SUPPORT TYPES:
- Now-Next board: Current + upcoming activity
- Checklist: Task broken into visible steps
- Cue card: Quick reference for key information
- Visual timer: Shows time remaining
- Routine strip: Step-by-step sequence for daily routines

COMMON MISTAKES:
x Changing activity without updating visual first
x Placing visual where pupil can't see it
x Assuming they know how to use it (teach explicitly)
x Letting visual contradict reality

WHEN YOU SEE:
- Constantly asks "What are we doing?"
- Anxious during transitions
- Waits for peers before acting
- EHCP mentions "visual supports" or "predictability"`,

  quickChecklist: [
    'Created Now-Next board (or checklist/schedule)',
    'Made activity cards visible and clear',
    'Positioned where pupil can see independently',
    'Taught pupil to check the visual explicitly',
    'Updated visual BEFORE each transition',
    'Kept visual honest (matches reality)',
    'Redirected verbal questions to the visual',
    'Briefed TA on updating and redirecting',
  ],

  ehcpPhrases: [
    'benefits from visual supports',
    'needs predictability',
    'struggles with transitions',
    'requires visual timetable',
    'anxiety around change',
    'needs routine and structure',
    'benefits from knowing what is happening next',
    'requires visual cues',
    'difficulties with verbal instructions',
  ],

  relatedStrategies: ['chunking-one-step-instructions', 'task-analysis', 'errorless-learning'],
};
