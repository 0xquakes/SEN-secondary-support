import { Strategy } from '@/types';

export const waitTimeStrategy: Strategy = {
  id: 'wait-time-001',
  slug: 'wait-time-processing-time',
  title: 'Wait Time / Processing Time',
  shortDescription: 'Give pupils extra time (5-10 seconds minimum) to process questions before expecting a response.',
  longDescription: 'Wait time is the deliberate pause between asking a question and expecting an answer. For pupils with processing difficulties, the standard 1-2 seconds most teachers wait is nowhere near enough. By extending wait time to 5-10 seconds (or longer), you give their brains time to decode the question, retrieve relevant information, formulate a response, and prepare to speak. This single adjustment can transform a pupil who "never answers" into one who participates confidently.',
  difficulty: 'beginner',
  prepTime: '0 mins',
  areaOfNeed: 'Processing & Attention',
  subjects: ['English', 'Maths', 'Science', 'History', 'Geography', 'Art', 'Music', 'PE', 'MFL', 'DT', 'Drama', 'RE', 'Computing', 'PSHE'],
  routines: ['Questioning', 'Class discussions', 'Assessment'],
  tags: ['processing time', 'questioning', 'participation', 'inclusion', 'verbal response'],

  content: {
    problem: {
      headline: 'Standard wait time excludes pupils with processing difficulties',
      description: 'You ask a question. You wait one second, maybe two. No response. You move on to another pupil or answer it yourself. The pupil with processing difficulties never had a chance. Their brain was still decoding your question when you gave up on them. Over time, they learn not to bother trying.',
      signs: [
        'Pupil rarely or never volunteers answers',
        'Gives correct answers when given time, but freezes in whole-class questioning',
        'Says "I don\'t know" immediately, then gives correct answer later',
        'Appears to "zone out" during question-and-answer sessions',
        'EHCP mentions "needs additional processing time"',
        'EHCP mentions "slow to respond to questions"',
      ],
    },

    explanation: {
      definition: 'Wait time means deliberately pausing for 5-10 seconds (minimum) after asking a question, before expecting any response. For some pupils, you may need to wait 15-20 seconds or longer.',
      whyItWorks: 'Processing a question involves multiple cognitive steps: hearing the words, decoding their meaning, understanding what\'s being asked, searching memory for relevant information, formulating a response, and preparing the motor plan for speech. For pupils with processing difficulties, each of these steps takes longer. When you rush them, you\'re asking them to skip steps. The result is either silence or an incorrect answer that doesn\'t reflect their actual knowledge. Extended wait time lets their brain complete the full sequence.',
      keyPrinciples: [
        'Wait at least 5-10 seconds after asking a question',
        'Use a visual or silent signal that thinking time is happening',
        'Apply wait time to ALL pupils, not just the target pupil',
        'Count silently in your head to avoid rushing',
        'Never answer your own question during thinking time',
      ],
    },

    howTo: {
      steps: [
        {
          step: 1,
          title: 'Establish a "thinking time" signal',
          instruction: 'Create a clear signal that tells the whole class "we are now thinking, not answering." This normalises the pause and takes pressure off the target pupil.',
          teacherSays: '"When I hold up my hand like this, it means thinking time. No hands up yet. Everyone is thinking."',
          tip: 'A visual signal (hand up, "thinking" card, timer) works better than just saying "think".',
        },
        {
          step: 2,
          title: 'Ask the question clearly',
          instruction: 'State the question once, clearly. Don\'t rephrase or add to it during thinking time.',
          teacherSays: '"What was the main reason the character felt angry?" [Raises hand signal]',
          tip: 'Rephrasing during thinking time resets the processing clock to zero.',
        },
        {
          step: 3,
          title: 'Count silently to 10',
          instruction: 'Count slowly in your head: "one-thousand-one, one-thousand-two..." up to at least 10. This feels longer than you expect. That\'s normal.',
          tip: 'It will feel awkward at first. Push through. The silence is productive.',
        },
        {
          step: 4,
          title: 'Scan the room calmly',
          instruction: 'While waiting, look around the room with a neutral expression. Don\'t stare at the target pupil. Don\'t show impatience.',
          tip: 'Your body language during wait time matters. Looking rushed makes pupils feel rushed.',
        },
        {
          step: 5,
          title: 'Invite responses',
          instruction: 'After thinking time, lower your hand signal and invite responses. If using cold-calling, give the named pupil a few more seconds after being named.',
          teacherSays: '"Thinking time is over. [Name], what do you think?"',
          tip: 'If the pupil still needs time, say "I\'ll come back to you" rather than moving on permanently.',
        },
      ],
      commonMistakes: [
        'Counting too fast (practice with a real timer first)',
        'Rephrasing the question during thinking time',
        'Staring at the target pupil while waiting',
        'Showing impatience through body language',
        'Only using wait time for the target pupil (makes them feel singled out)',
        'Answering your own question when no one responds immediately',
      ],
      timeToImplement: 'Immediate - no resources needed',
    },

    workedExamples: [
      {
        subject: 'English',
        topic: 'Comprehension discussion',
        scenario: 'Year 9 discussing a poem. One pupil with processing difficulties rarely participates in discussions.',
        steps: [
          {
            action: 'Step 1: Set up thinking time',
            teacherDoes: 'Say: "I\'m going to ask a question. When you see my hand up, that\'s thinking time. No calling out."',
            pupilDoes: 'Listens. Understands the signal.',
          },
          {
            action: 'Step 2: Ask and wait',
            teacherDoes: 'Say: "Why do you think the poet chose to repeat the word \'silence\'?" Raises hand. Counts silently to 12.',
            pupilDoes: 'Processes the question. Thinks about the poem. Starts forming an answer.',
          },
          {
            action: 'Step 3: Invite response',
            teacherDoes: 'Lowers hand. Says: "Jamie, I\'d like to hear your thinking." Waits 5 more seconds.',
            pupilDoes: 'Says: "Because... it makes you notice it more?"',
          },
        ],
      },
      {
        subject: 'Maths',
        topic: 'Mental arithmetic',
        scenario: 'Year 7 practising times tables. Pupil knows the answers when given time but freezes in rapid-fire questioning.',
        steps: [
          {
            action: 'Step 1: Change the format',
            teacherDoes: 'Say: "We\'re going to do times tables differently today. I\'ll ask, then we all get thinking time."',
            pupilDoes: 'Listens. Feels less anxious knowing there will be time.',
          },
          {
            action: 'Step 2: Ask with extended wait',
            teacherDoes: 'Say: "Seven times eight." Shows thinking time signal. Counts slowly to 8.',
            pupilDoes: 'Counts mentally: 7, 14, 21, 28, 35, 42, 49, 56.',
          },
          {
            action: 'Step 3: Call on pupil',
            teacherDoes: 'Say: "Aisha, what did you get?" Waits 3 more seconds.',
            pupilDoes: 'Says: "Fifty-six." Feels successful.',
          },
        ],
      },
      {
        subject: 'Science',
        topic: 'Explaining a concept',
        scenario: 'Year 8 learning about photosynthesis. Pupil understands concepts but needs time to put understanding into words.',
        steps: [
          {
            action: 'Step 1: Preview the question',
            teacherDoes: 'Say: "I\'m going to ask you to explain what the plant needs for photosynthesis. Take a moment to think."',
            pupilDoes: 'Starts thinking before the formal question.',
          },
          {
            action: 'Step 2: Ask and wait',
            teacherDoes: 'Say: "What three things does a plant need for photosynthesis?" Waits 10 seconds with thinking signal.',
            pupilDoes: 'Recalls: sunlight, water, carbon dioxide. Rehearses the words mentally.',
          },
          {
            action: 'Step 3: Support the response',
            teacherDoes: 'Says: "Tell me one to start." Waits 5 seconds.',
            pupilDoes: 'Says: "Sunlight." Gains confidence.',
          },
        ],
      },
      {
        subject: 'History',
        topic: 'Analysing sources',
        scenario: 'Year 9 examining a World War One propaganda poster. Pupil with processing difficulties struggles to articulate observations quickly.',
        steps: [
          {
            action: 'Step 1: Frame the question',
            teacherDoes: 'Say: "Look at this poster carefully. I\'m going to ask you what message it was trying to send to people in 1915. Thinking time starts now." Raises hand signal.',
            pupilDoes: 'Studies the poster. Begins processing visual details and their meaning.',
          },
          {
            action: 'Step 2: Wait and observe',
            teacherDoes: 'Counts silently to 15. Scans the room calmly. Does not rush or add extra information.',
            pupilDoes: 'Notices the soldier, the text, the colours. Starts connecting these to what they know about recruitment.',
          },
          {
            action: 'Step 3: Invite response',
            teacherDoes: 'Lowers hand. Says: "Marcus, what do you think the message was?" Waits 5 more seconds.',
            pupilDoes: 'Says: "They wanted men to join the army... to make them feel brave?"',
          },
        ],
      },
      {
        subject: 'Geography',
        topic: 'Explaining processes',
        scenario: 'Year 8 learning about river formation. Pupil knows the content but needs time to order their explanation.',
        steps: [
          {
            action: 'Step 1: Set up with visual support',
            teacherDoes: 'Displays diagram of a waterfall. Say: "I\'m going to ask you to explain how a waterfall forms. Use the diagram to help you think." Raises thinking signal.',
            pupilDoes: 'Looks at the diagram. Starts recalling the process from memory.',
          },
          {
            action: 'Step 2: Extended wait',
            teacherDoes: 'Counts silently to 12. Maintains calm, patient expression while looking around the room.',
            pupilDoes: 'Mentally sequences the steps: hard rock, soft rock, erosion, undercutting, collapse.',
          },
          {
            action: 'Step 3: Scaffold if needed',
            teacherDoes: 'Says: "Priya, start by telling me what happens to the soft rock." Waits 5 seconds.',
            pupilDoes: 'Says: "The soft rock erodes faster... because the water wears it away underneath."',
          },
        ],
      },
      {
        subject: 'Art',
        topic: 'Evaluating artwork',
        scenario: 'Year 7 discussing a painting by Monet. Pupil finds it hard to articulate opinions about art quickly.',
        steps: [
          {
            action: 'Step 1: Present the question clearly',
            teacherDoes: 'Say: "Look at this painting. I want you to think about how Monet has used colour to create mood. Thinking time." Raises hand signal.',
            pupilDoes: 'Looks at the painting. Begins to notice blues, greens, and how they make them feel.',
          },
          {
            action: 'Step 2: Allow processing time',
            teacherDoes: 'Counts silently to 10. Walks slowly near the displayed artwork, giving everyone time to look.',
            pupilDoes: 'Formulates thoughts: calm colours, soft, peaceful feeling. Thinks of the word "tranquil".',
          },
          {
            action: 'Step 3: Invite and affirm',
            teacherDoes: 'Says: "Ella, what mood do the colours create?" Waits 5 seconds.',
            pupilDoes: 'Says: "It feels calm... peaceful. The blue makes it feel quiet."',
          },
        ],
      },
      {
        subject: 'Music',
        topic: 'Listening and appraising',
        scenario: 'Year 8 listening to a piece of orchestral music. Pupil struggles to identify instruments quickly during class discussion.',
        steps: [
          {
            action: 'Step 1: Prepare for listening',
            teacherDoes: 'Say: "We\'re going to listen to a 30-second clip. After it finishes, I\'ll ask you which instruments you heard. You\'ll have thinking time before anyone answers."',
            pupilDoes: 'Listens actively, knowing they will have time to process afterwards.',
          },
          {
            action: 'Step 2: Play and wait',
            teacherDoes: 'Plays the clip. When it ends, raises thinking signal. Counts silently to 12.',
            pupilDoes: 'Replays the sounds mentally. Identifies strings, maybe brass. Tries to recall instrument names.',
          },
          {
            action: 'Step 3: Prompt response',
            teacherDoes: 'Says: "Tyler, tell me one instrument you definitely heard." Waits 5 seconds.',
            pupilDoes: 'Says: "Violin... I could hear the violins."',
          },
        ],
      },
      {
        subject: 'PE',
        topic: 'Tactical understanding',
        scenario: 'Year 9 basketball lesson. Pupil understands tactics but needs time to explain their thinking when asked about positioning.',
        steps: [
          {
            action: 'Step 1: Pause the activity',
            teacherDoes: 'Blows whistle to pause practice. Say: "Freeze there. I\'m going to ask someone to explain why that was a good position. Thinking time." Raises hand.',
            pupilDoes: 'Stays in position. Starts thinking about why they moved where they did.',
          },
          {
            action: 'Step 2: Wait with purpose',
            teacherDoes: 'Counts silently to 8. Looks around at different players, not singling anyone out.',
            pupilDoes: 'Thinks: I moved to create space. The defender couldn\'t reach me. I was ready for a pass.',
          },
          {
            action: 'Step 3: Name and wait',
            teacherDoes: 'Says: "Jade, why did you move to that space?" Waits 5 seconds.',
            pupilDoes: 'Says: "I moved away from the defender... so I could receive the pass."',
          },
        ],
      },
      {
        subject: 'MFL',
        topic: 'Speaking practice',
        scenario: 'Year 8 French lesson practising ordering food. Pupil knows vocabulary but needs time to construct sentences.',
        steps: [
          {
            action: 'Step 1: Set up the scenario',
            teacherDoes: 'Say: "Imagine you\'re in a French cafe. I\'m going to ask you to order a drink and a snack. Take time to think about the words you need." Raises thinking signal.',
            pupilDoes: 'Starts retrieving vocabulary: "Je voudrais", drink words, food words.',
          },
          {
            action: 'Step 2: Extended wait',
            teacherDoes: 'Counts silently to 15. This is longer because pupils need to retrieve foreign vocabulary and construct a sentence.',
            pupilDoes: 'Mentally rehearses: "Je voudrais un coca et un croissant, s\'il vous plait."',
          },
          {
            action: 'Step 3: Supportive response',
            teacherDoes: 'Lowers hand. Says: "Oliver, qu\'est-ce que tu voudrais?" Waits 5 more seconds.',
            pupilDoes: 'Says: "Je voudrais... un coca... et un croissant." Feels successful.',
          },
        ],
      },
      {
        subject: 'DT',
        topic: 'Evaluating designs',
        scenario: 'Year 7 designing a phone stand. Pupil needs time to explain their design choices.',
        steps: [
          {
            action: 'Step 1: Frame the evaluation question',
            teacherDoes: 'Say: "Look at your design. I\'m going to ask you to explain one thing you would improve and why. Thinking time." Raises hand signal.',
            pupilDoes: 'Looks at their sketch. Starts thinking about what could be better.',
          },
          {
            action: 'Step 2: Wait while they process',
            teacherDoes: 'Counts silently to 10. Moves around the room, glancing at different designs without rushing anyone.',
            pupilDoes: 'Identifies: the base is too small, it might fall over. Thinks about how to explain this.',
          },
          {
            action: 'Step 3: Invite explanation',
            teacherDoes: 'Says: "Kai, what would you improve?" Waits 5 seconds.',
            pupilDoes: 'Says: "I\'d make the base wider... so it doesn\'t tip over when the phone\'s on it."',
          },
        ],
      },
      {
        subject: 'Drama',
        topic: 'Character analysis',
        scenario: 'Year 9 working on a devised piece about bullying. Pupil struggles to articulate character motivations quickly.',
        steps: [
          {
            action: 'Step 1: Set up reflective question',
            teacherDoes: 'After a freeze-frame activity, say: "Think about your character. Why do they behave the way they do? Thinking time - really get into their head." Raises hand signal.',
            pupilDoes: 'Thinks about their character. Considers their backstory, feelings, and reasons.',
          },
          {
            action: 'Step 2: Allow deep thinking',
            teacherDoes: 'Counts silently to 12. Maintains a thoughtful, calm atmosphere in the room.',
            pupilDoes: 'Thinks: my character is scared of being a target themselves. They go along with the group to stay safe.',
          },
          {
            action: 'Step 3: Draw out response',
            teacherDoes: 'Says: "Sophie, why does your character act that way?" Waits 5 seconds.',
            pupilDoes: 'Says: "She\'s scared... if she doesn\'t join in, she thinks they\'ll turn on her instead."',
          },
        ],
      },
      {
        subject: 'RE',
        topic: 'Ethical discussion',
        scenario: 'Year 10 discussing whether euthanasia should be legal. Pupil has opinions but needs time to formulate arguments.',
        steps: [
          {
            action: 'Step 1: Pose the question clearly',
            teacherDoes: 'Say: "Should people have the right to choose when they die? I want you to think of one reason for or against. Extended thinking time for this one." Raises hand signal.',
            pupilDoes: 'Starts processing the question. Considers religious views, personal autonomy, suffering.',
          },
          {
            action: 'Step 2: Extended wait',
            teacherDoes: 'Counts silently to 15. Complex ethical questions need more processing time.',
            pupilDoes: 'Formulates: people should have control over their own body, but it could be misused. Decides which point to make.',
          },
          {
            action: 'Step 3: Invite contribution',
            teacherDoes: 'Says: "Connor, share one thought with us." Waits 5 seconds.',
            pupilDoes: 'Says: "I think people should have the choice... because it\'s their body and their suffering."',
          },
        ],
      },
      {
        subject: 'Computing',
        topic: 'Debugging code',
        scenario: 'Year 8 Python lesson. Pupil can identify bugs when given time but freezes when put on the spot.',
        steps: [
          {
            action: 'Step 1: Display the problem',
            teacherDoes: 'Shows buggy code on screen. Say: "There\'s an error in this code. I want everyone to find it. Thinking time - trace through it in your head." Raises hand signal.',
            pupilDoes: 'Starts reading the code line by line. Looks for syntax errors, logic problems.',
          },
          {
            action: 'Step 2: Allow tracing time',
            teacherDoes: 'Counts silently to 12. Debugging requires following logic, which takes time.',
            pupilDoes: 'Traces: input is taken, stored in variable, calculation happens... wait, the variable name is wrong on line 4.',
          },
          {
            action: 'Step 3: Ask for specific observation',
            teacherDoes: 'Says: "Amara, which line has the problem?" Waits 5 seconds.',
            pupilDoes: 'Says: "Line 4... the variable name is spelled differently to line 2."',
          },
        ],
      },
      {
        subject: 'PSHE',
        topic: 'Personal reflection',
        scenario: 'Year 8 lesson on healthy relationships. Pupil finds it hard to articulate thoughts about sensitive topics quickly.',
        steps: [
          {
            action: 'Step 1: Create safe thinking space',
            teacherDoes: 'Say: "Think about what makes a good friend. I\'m going to ask for one quality you think is important. Take your time with this one - no rush." Raises hand signal.',
            pupilDoes: 'Reflects on friendships. Thinks about trust, kindness, being there when needed.',
          },
          {
            action: 'Step 2: Extended wait',
            teacherDoes: 'Counts silently to 12. Personal questions need extra processing time.',
            pupilDoes: 'Decides on "trust" as their answer. Thinks about how to explain why.',
          },
          {
            action: 'Step 3: Gentle invitation',
            teacherDoes: 'Says: "Ben, what quality did you think of?" Waits 5 seconds. Uses warm, non-pressuring tone.',
            pupilDoes: 'Says: "Trust... because you need to know they won\'t tell everyone your stuff."',
          },
        ],
      },
    ],

    routines: [
      {
        routine: 'Whole-class questioning',
        context: 'Any subject, any time you ask questions to the class',
        steps: [
          'Ask the question once, clearly',
          'Raise your thinking time signal',
          'Count silently to at least 10',
          'Lower the signal and invite responses',
          'If cold-calling, give an additional 3-5 seconds after naming the pupil',
        ],
        taRole: 'Sit near the target pupil. During thinking time, you can give a quiet prompt like "Think about..." but don\'t give the answer. Watch for signs they have an answer ready (they might look up, shift position, or make eye contact with you).',
      },
      {
        routine: 'Exit ticket questioning',
        context: 'End of lesson verbal check-in with individual pupils',
        steps: [
          'Approach the pupil calmly',
          'Say: "I\'m going to ask you one question about today\'s lesson. Take your time."',
          'Ask the question and wait 10+ seconds',
          'Accept partial answers positively',
          'Say: "Good. You can pack up now."',
        ],
        taRole: 'If doing the exit check, follow the same protocol. Don\'t rush the pupil even if others are waiting. A calm, patient tone communicates that you expect them to answer and you\'ll wait for it.',
      },
    ],

    troubleshooting: [
      {
        problem: 'It feels awkward to wait in silence',
        cause: 'Teachers are trained to fill silence. Ten seconds feels like a minute.',
        solution: 'Practice with a timer until you can accurately judge 10 seconds. The awkwardness fades as it becomes routine. Remember: the silence is productive thinking time, not dead air.',
      },
      {
        problem: 'Other pupils call out during thinking time',
        cause: 'They haven\'t learned the routine yet, or they\'re keen to show they know',
        solution: 'Explicitly teach the thinking time routine. Say: "When you see my hand, it means everyone thinks. If you call out, you\'re stealing thinking time from others." Praise pupils who wait.',
      },
      {
        problem: 'Pupil still says "I don\'t know" even with wait time',
        cause: 'They may have given up on themselves, or the question may be too hard',
        solution: 'Try saying: "I\'ll come back to you." Return after another pupil has answered. Or scaffold: "Tell me one thing you do know about this." Build their confidence that waiting produces success.',
      },
      {
        problem: 'Lessons take longer because of all the waiting',
        cause: 'Extended wait time does use more time initially',
        solution: 'Ask fewer, better questions rather than many rapid questions. Quality over quantity. The payoff is that more pupils are genuinely thinking and learning, not just the fast processors.',
      },
      {
        problem: 'The pupil seems to use the time but still gives wrong answers',
        cause: 'Processing time helps retrieval, but they may not have the knowledge to retrieve',
        solution: 'This tells you the issue is knowledge, not processing. Adjust your teaching accordingly. Wait time reveals what they actually know versus what they can quickly access.',
      },
    ],

    scripts: {
      teacher: {
        starting: [
          '"When you see my hand up, that\'s thinking time. No calling out."',
          '"I\'m going to ask a question. Everyone will have time to think."',
          '"Take your time with this one. There\'s no rush."',
        ],
        during: [
          '"Keep thinking. I\'ll wait."',
          '"Good thinking time, everyone."',
          '[Silent counting. Calm expression. No rushing.]',
        ],
        ifStuck: [
          '"I\'ll come back to you in a moment."',
          '"Tell me one thing you know about this."',
          '"Start with the bit you\'re sure about."',
        ],
        ending: [
          '"Thank you for taking time to think that through."',
          '"See what happens when you get time to think? You knew it."',
          '"Good answer. That thinking time paid off."',
        ],
      },
      ta: {
        role: 'Model patience. Don\'t jump in with answers or heavy prompts. Your job is to help the pupil believe they can answer if given time. Watch for signs they\'re ready to respond.',
        keyPhrases: [
          '"Take your time."',
          '"You\'ve got thinking time."',
          '"I can see you\'re thinking. That\'s good."',
          '"What\'s the first thing that comes to mind?"',
        ],
        avoid: [
          'Whispering the answer',
          'Saying "Come on, quickly"',
          'Finishing their sentences',
          'Moving on before they\'ve had a chance',
        ],
      },
    },

    noTaAdaptations: {
      overview: "Wait time is entirely teacher-controlled and requires no TA - it's about changing your own questioning habits and classroom pace.",
      keyAdjustments: [
        "Use a visible timer on the board so all pupils (and you) can see the wait time",
        "Place a visual 'thinking time' card on desks that pupils display while processing",
        "Use written response cards so everyone processes before anyone speaks",
        "Build wait time into your lesson slides with automatic pauses",
      ],
      independenceStrategies: [
        "Teach pupils to use the wait time productively: 'Lips closed, brain working'",
        "Provide thinking stems on desks: 'I think... because...'",
        "Use 'think-write-share' so processing happens on paper first",
      ],
      peerSupportOptions: [
        "Use think-pair-share so pupils process together before whole-class response",
        "Assign thinking partners who quietly discuss during wait time",
        "Create 'no hands up' zones where you select respondents after wait time",
      ],
    },
  },

  prepPlan: [
    { time: '0 mins', action: 'Decide your signal', details: 'Choose a thinking time signal: raised hand, "thinking" card, or sand timer' },
    { time: '0 mins', action: 'Practice counting', details: 'Count to 10 with a timer until you can do it accurately without rushing' },
    { time: '1 min', action: 'Brief TA', details: 'Tell them about the thinking time routine and ask them to model patience' },
  ],

  printableSummary: `WAIT TIME / PROCESSING TIME

WHAT: Pause 5-10 seconds (minimum) after asking a question, before expecting any response.

WHY: Processing a question takes time. Decoding words, understanding meaning, retrieving information, formulating a response, preparing to speak. Fast processors do this in 1-2 seconds. Others need 10+.

HOW:
1. Create a "thinking time" signal (raised hand, card, timer)
2. Ask the question ONCE, clearly
3. Raise your signal
4. Count slowly to at least 10
5. Lower signal and invite responses
6. Give named pupils extra seconds after being called on

COMMON MISTAKES:
- Counting too fast (practice with a timer)
- Rephrasing during thinking time (resets their clock)
- Staring at the target pupil
- Showing impatience
- Only using it for one pupil (makes them feel singled out)

WHEN YOU SEE:
- Pupil rarely volunteers answers
- Says "I don\'t know" then answers correctly later
- Appears to zone out during Q&A
- EHCP: "needs additional processing time"`,

  quickChecklist: [
    'Chosen a thinking time signal',
    'Explained the signal to the class',
    'Counting to at least 10 (timed accurately)',
    'Asking questions once, clearly',
    'Not rephrasing during thinking time',
    'Maintaining calm body language while waiting',
    'Using wait time for everyone, not just target pupils',
    'TA briefed on the routine',
  ],

  ehcpPhrases: [
    'needs additional processing time',
    'slow to respond to questions',
    'requires extra time to process verbal information',
    'needs longer wait time when questioned',
    'processing speed difficulties',
    'slow processing speed',
    'requires time to formulate responses',
    'delayed response to verbal instructions',
  ],

  relatedStrategies: ['chunking-001', 'visual-supports'],
};
