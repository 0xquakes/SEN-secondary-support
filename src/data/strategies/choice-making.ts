import { Strategy } from '@/types';

export const choiceMakingStrategy: Strategy = {
  id: 'choice-making-001',
  slug: 'structured-choice-making',
  title: 'Structured Choice Making',
  shortDescription: 'Limit choices to 2-3 options to reduce overwhelm while giving pupils agency and maintaining structure.',
  longDescription: 'Structured choice making transforms overwhelming open-ended decisions into manageable selections between 2-3 carefully chosen options. Instead of asking "What would you like to do?" which can paralyse a pupil, you offer "Would you like the red pen or the blue pen?" This gives genuine agency while preventing decision paralysis. The pupil feels in control without being overwhelmed by infinite possibilities.',
  difficulty: 'beginner',
  prepTime: '5 mins',
  areaOfNeed: 'Building Confidence',
  subjects: ['English', 'Maths', 'Science', 'History', 'Geography', 'Art', 'Music', 'PE', 'MFL', 'DT', 'Drama', 'RE', 'Computing', 'PSHE'],
  routines: ['Task setup', 'Independent work', 'Transitions', 'Activity selection'],
  tags: ['decision-making', 'anxiety', 'autonomy', 'executive function', 'overwhelm', 'differentiation'],

  content: {
    problem: {
      headline: 'Too many choices cause paralysis, not freedom',
      description: 'You ask "What colour would you like?" or "Where would you like to sit?" expecting a simple answer. Instead, the pupil freezes. Stares. Cannot decide. What felt like offering freedom has actually created an impossible situation. Their brain cannot process all the options, rank them, and select one. They shut down.',
      signs: [
        'Pupil freezes when given open-ended choices',
        'Takes excessive time to make simple decisions',
        'Becomes anxious or distressed when asked to choose',
        'Says "I don\'t know" to every choice question',
        'Defers all decisions to adults or peers',
        'EHCP mentions "becomes overwhelmed by options"',
        'EHCP mentions "needs limited choices" or "difficulties with decision-making"',
      ],
    },

    explanation: {
      definition: 'Structured choice making means offering exactly 2-3 pre-selected options instead of open-ended questions. You control the options; they control the selection. Both parties have agency, but the cognitive load stays manageable.',
      whyItWorks: 'Decision-making requires executive function skills: holding options in working memory, comparing them against criteria, predicting outcomes, and committing to one while letting others go. For pupils with executive function difficulties, this process is exhausting or impossible when there are too many options. By limiting choices to 2-3, you reduce the cognitive load dramatically. The pupil can genuinely compare two things. They can make a real choice. They experience agency and success rather than paralysis and failure.',
      keyPrinciples: [
        'Offer 2-3 options maximum, never more',
        'All options must be genuinely acceptable to you',
        'Present choices visually when possible',
        'Give adequate processing time after presenting options',
        'Know when to direct instead of offering choice',
        'Accept their choice without questioning it',
      ],
    },

    howTo: {
      steps: [
        {
          step: 1,
          title: 'Identify choice moments',
          instruction: 'Before the lesson, note moments where you naturally offer choices or where choices could give the pupil agency. Task setup, equipment selection, and work format are common opportunities.',
          tip: 'Start with low-stakes choices (pen colour) before high-stakes ones (task selection).',
        },
        {
          step: 2,
          title: 'Pre-select your options',
          instruction: 'Choose 2-3 options that are all acceptable to you. Never include an option you would reject if they chose it. All options must be genuine.',
          teacherSays: 'Think: "Would I be happy with any of these?" If not, remove that option.',
          tip: 'Having a "wrong" choice destroys trust and makes future choices feel like traps.',
        },
        {
          step: 3,
          title: 'Present choices visually',
          instruction: 'Where possible, show the options rather than just naming them. Hold up two pencils. Point to two seats. Display two task cards. Visual presentation reduces working memory load.',
          teacherSays: '"You can use this pencil or this pencil. Which one?"',
          tip: 'Physical objects are easier to choose between than abstract concepts.',
        },
        {
          step: 4,
          title: 'Use simple, consistent language',
          instruction: 'Present choices with clear, predictable phrasing. "You can have A or B" or "Would you like X or Y?" Avoid long explanations of each option.',
          teacherSays: '"Red or blue?" or "This seat or that seat?"',
        },
        {
          step: 5,
          title: 'Give processing time',
          instruction: 'After presenting the choice, wait. Count to 10 in your head if needed. Do not repeat the options or add new information. Let them process.',
          tip: 'Silence feels uncomfortable but is essential for processing.',
        },
        {
          step: 6,
          title: 'Accept and move on',
          instruction: 'When they choose, accept it immediately without commentary. Do not ask "Are you sure?" or suggest the other option might be better.',
          teacherSays: '"Blue. Great." Then continue with the lesson.',
        },
      ],
      commonMistakes: [
        'Offering too many options (more than 3 causes overwhelm)',
        'Including options you would not actually accept',
        'Repeating or rephrasing choices before they have processed',
        'Questioning their choice after they make it',
        'Offering choices when direct instruction is more appropriate',
        'Making all options equal when one is clearly better for learning',
      ],
      timeToImplement: 'Immediate - no resources needed',
    },

    workedExamples: [
      {
        subject: 'English',
        topic: 'Creative writing task selection',
        scenario: 'Year 8 class starting creative writing. Pupil working at KS2 level becomes overwhelmed when given open choice of topic.',
        steps: [
          {
            action: 'Prepare limited options',
            teacherDoes: 'Select 3 writing prompts that suit the pupil\'s interests and ability. Write each on a separate card with a simple image.',
            pupilDoes: 'N/A - this is teacher preparation.',
          },
          {
            action: 'Present choices visually',
            teacherDoes: 'Place three cards on desk. Say: "Today you\'re choosing your writing topic. Here are three options." Point to each briefly.',
            pupilDoes: 'Looks at the three cards. Can see all options at once.',
          },
          {
            action: 'Give processing time',
            teacherDoes: 'Say: "Take your time. Point to the one you want to write about." Wait silently. Do not repeat options.',
            pupilDoes: 'Considers options. Points to chosen card.',
          },
          {
            action: 'Confirm and remove other options',
            teacherDoes: 'Say: "The adventure story. Good choice." Remove other cards from desk. Provide writing resources for chosen topic.',
            pupilDoes: 'Sees decision is made. Other options are gone. Can focus on chosen task.',
          },
        ],
      },
      {
        subject: 'Maths',
        topic: 'Choosing calculation method',
        scenario: 'Year 7 pupil working at KS2 level. Class is practising multiplication. Multiple methods have been taught but pupil freezes when asked to choose one.',
        steps: [
          {
            action: 'Limit to two methods',
            teacherDoes: 'Prepare two method cards: grid method and repeated addition. These are the only options for this pupil.',
            pupilDoes: 'N/A - preparation.',
          },
          {
            action: 'Present the choice',
            teacherDoes: 'Place both cards in front of pupil. Say: "For this question, you can use grid method or repeated addition. Which one?"',
            pupilDoes: 'Looks at both cards. Familiar with both methods.',
          },
          {
            action: 'Support the decision',
            teacherDoes: 'If pupil hesitates, say: "Both will work. Just pick the one you want to use today." Wait.',
            pupilDoes: 'Points to grid method.',
          },
          {
            action: 'Reinforce and continue',
            teacherDoes: 'Say: "Grid method. Here\'s your grid paper." Remove other card. Pupil works through problem using chosen method.',
            pupilDoes: 'Uses grid method. Completes calculation. Success with chosen approach.',
          },
        ],
      },
      {
        subject: 'Science',
        topic: 'Recording experimental results',
        scenario: 'Year 9 practical lesson. Pupil working at KS2 level needs to record results but freezes when asked "How do you want to record this?"',
        steps: [
          {
            action: 'Prepare recording options',
            teacherDoes: 'Create two recording template options: a simple table and a labelled diagram with spaces for numbers.',
            pupilDoes: 'N/A - preparation.',
          },
          {
            action: 'Offer structured choice',
            teacherDoes: 'Show both templates. Say: "You need to record your results. You can use this table or this diagram. Which one works better for you?"',
            pupilDoes: 'Examines both templates.',
          },
          {
            action: 'Provide decision support',
            teacherDoes: 'Point to each in turn. Say: "Table - you write numbers in boxes. Diagram - you label the picture. Either one is fine."',
            pupilDoes: 'Says "The table" or points to it.',
          },
          {
            action: 'Confirm and proceed',
            teacherDoes: 'Hand over the table template. Say: "Good. Write your first measurement here." Point to first cell.',
            pupilDoes: 'Has clear recording format. Begins entering data.',
          },
        ],
      },
      {
        subject: 'History',
        topic: 'Analysing historical sources',
        scenario: 'Year 8 class studying the Industrial Revolution. Pupil becomes overwhelmed when asked to choose a source to analyse from a collection of five documents.',
        steps: [
          {
            action: 'Pre-select appropriate sources',
            teacherDoes: 'Choose two sources that match the pupil\'s reading level: a simple factory illustration and a short worker\'s account (3 sentences).',
            pupilDoes: 'N/A - teacher preparation.',
          },
          {
            action: 'Present limited choice',
            teacherDoes: 'Place both sources on desk. Say: "You\'re going to analyse a source about factory life. You can study this picture or this written account. Which one?"',
            pupilDoes: 'Looks at both sources. Can see the visual is simpler, the text is short.',
          },
          {
            action: 'Accept and provide scaffold',
            teacherDoes: 'When pupil points to the picture, say: "Good choice. Here\'s your question sheet for pictures." Hand over the visual analysis scaffold.',
            pupilDoes: 'Has one source and one scaffold. Begins analysis without overwhelm.',
          },
        ],
      },
      {
        subject: 'Geography',
        topic: 'Presenting fieldwork findings',
        scenario: 'Year 9 class completing a rivers fieldwork project. Pupil freezes when told they can present their findings "however they like".',
        steps: [
          {
            action: 'Prepare presentation templates',
            teacherDoes: 'Create two presentation options: a poster template with labelled sections, and a PowerPoint template with 4 pre-formatted slides.',
            pupilDoes: 'N/A - teacher preparation.',
          },
          {
            action: 'Offer structured choice',
            teacherDoes: 'Show both templates. Say: "You need to present your river data. You can make a poster like this, or a slideshow like this. Which format works better for you?"',
            pupilDoes: 'Examines both templates. Sees the structure already in place.',
          },
          {
            action: 'Confirm and set up',
            teacherDoes: 'When pupil chooses poster, say: "Poster it is. Here\'s your template. Start by putting your river name in this box." Point to title section.',
            pupilDoes: 'Has clear format and starting point. Begins work immediately.',
          },
        ],
      },
      {
        subject: 'Art',
        topic: 'Selecting materials for mixed media work',
        scenario: 'Year 7 mixed media project. Pupil stands frozen at the materials table with 20+ options for collage elements.',
        steps: [
          {
            action: 'Intercept before overwhelm',
            teacherDoes: 'Notice pupil heading to materials table. Approach and say: "Let me help you choose. Come with me."',
            pupilDoes: 'Stops before reaching overwhelming display.',
          },
          {
            action: 'Present curated selection',
            teacherDoes: 'Pick up two contrasting material types. Say: "For your background, you can use this textured paper or this fabric piece. Feel them both. Which one?"',
            pupilDoes: 'Touches both materials. Makes sensory comparison.',
          },
          {
            action: 'Build choices sequentially',
            teacherDoes: 'When pupil chooses fabric, hand it over. Say: "Good. Take this to your desk. I\'ll bring you two colour options for your next layer in a minute."',
            pupilDoes: 'Returns to desk with one material. Knows more choices will come in manageable stages.',
          },
        ],
      },
      {
        subject: 'Music',
        topic: 'Choosing instruments for group composition',
        scenario: 'Year 8 class creating group compositions. Pupil cannot decide which instrument to play when the whole percussion section is available.',
        steps: [
          {
            action: 'Narrow instrument options',
            teacherDoes: 'Select two instruments that suit the pupil\'s ability level: a tambourine and a wood block. Bring these to the pupil, away from the full instrument display.',
            pupilDoes: 'Sees only two options, not the overwhelming full selection.',
          },
          {
            action: 'Demonstrate and offer choice',
            teacherDoes: 'Play a simple rhythm on each instrument. Say: "For today\'s composition, you can play the tambourine or the wood block. Have a go with each, then tell me which one."',
            pupilDoes: 'Tries both instruments briefly. Experiences how each feels.',
          },
          {
            action: 'Confirm and integrate',
            teacherDoes: 'When pupil chooses tambourine, say: "Tambourine. You\'ll play on beats 1 and 3. Let me show you." Return other instrument to storage.',
            pupilDoes: 'Has one instrument and clear role in the group.',
          },
        ],
      },
      {
        subject: 'PE',
        topic: 'Selecting warm-up activities',
        scenario: 'Year 10 GCSE PE class. Pupils lead their own warm-ups but this pupil freezes when asked to choose exercises for the group.',
        steps: [
          {
            action: 'Prepare warm-up cards',
            teacherDoes: 'Create a set of warm-up cards with pictures and names. Select three appropriate for today\'s lesson focus (e.g., three leg stretches before football).',
            pupilDoes: 'N/A - teacher preparation.',
          },
          {
            action: 'Present limited selection',
            teacherDoes: 'Hand pupil the three cards. Say: "You\'re leading warm-up stretches. Pick two of these three to teach the class."',
            pupilDoes: 'Holds three cards. Task is clear: pick two, not invent something new.',
          },
          {
            action: 'Support the lead',
            teacherDoes: 'When pupil selects two, say: "Good choices. Show me those two stretches now, then you\'ll demonstrate to the class." Remove the third card.',
            pupilDoes: 'Practises chosen stretches with teacher. Ready to lead with confidence.',
          },
        ],
      },
      {
        subject: 'MFL',
        topic: 'Choosing speaking task format',
        scenario: 'Year 9 French class practising ordering food vocabulary. Pupil becomes anxious when asked to "practise the dialogue however you prefer".',
        steps: [
          {
            action: 'Identify format options',
            teacherDoes: 'Prepare two practice formats: a written gap-fill dialogue, and a paired speaking role-play card with sentence starters.',
            pupilDoes: 'N/A - teacher preparation.',
          },
          {
            action: 'Offer clear choice',
            teacherDoes: 'Show both options. Say: "You need to practise ordering food. You can fill in this written dialogue first, or go straight to speaking with a partner using these cards. Which one?"',
            pupilDoes: 'Considers both options. Written feels safer; speaking feels more challenging.',
          },
          {
            action: 'Confirm and set up',
            teacherDoes: 'When pupil chooses written first, say: "Good. Complete this gap-fill, then you\'ll try speaking. I\'ll check back in five minutes."',
            pupilDoes: 'Starts with scaffolded written task. Knows speaking will come but has preparation first.',
          },
        ],
      },
      {
        subject: 'DT',
        topic: 'Selecting construction techniques',
        scenario: 'Year 8 resistant materials project making phone stands. Pupil freezes when asked how they want to join two pieces of wood.',
        steps: [
          {
            action: 'Prepare technique options',
            teacherDoes: 'Identify two joining methods appropriate for this pupil\'s skill level: PVA glue with clamps, or pre-drilled dowel joints. Set up examples of both.',
            pupilDoes: 'N/A - teacher preparation.',
          },
          {
            action: 'Show and explain simply',
            teacherDoes: 'Point to both examples. Say: "You need to join these pieces. You can use glue and clamps like this one, or dowels like this one. Both are strong. Which one do you want to try?"',
            pupilDoes: 'Examines both finished examples. Can see what each method looks like.',
          },
          {
            action: 'Set up for success',
            teacherDoes: 'When pupil chooses glue, say: "Glue and clamps. Here\'s what you need." Gather the specific materials and place them at pupil\'s workstation.',
            pupilDoes: 'Has all required materials ready. Follows the chosen method without second-guessing.',
          },
        ],
      },
      {
        subject: 'Drama',
        topic: 'Choosing performance roles',
        scenario: 'Year 7 class devising a short piece about bullying. Pupil becomes distressed when asked to "decide what character you want to be".',
        steps: [
          {
            action: 'Identify suitable roles',
            teacherDoes: 'Review the group\'s piece and select two roles that suit this pupil: the narrator (minimal interaction, can read from script) or the supportive friend (brief positive lines).',
            pupilDoes: 'N/A - teacher preparation.',
          },
          {
            action: 'Present clear options privately',
            teacherDoes: 'Speak quietly to pupil away from the group. Say: "I\'ve got two parts that would be perfect for you. You can be the narrator and read the story, or you can be the friend who says kind things. Which feels right?"',
            pupilDoes: 'Considers both. Neither involves being the main focus or the antagonist.',
          },
          {
            action: 'Confirm and provide script',
            teacherDoes: 'When pupil chooses narrator, say: "Good choice. Here\'s your script. You\'ll stand here and read these parts. Let\'s practise your first line."',
            pupilDoes: 'Has defined role, script, and position. Can rehearse with security.',
          },
        ],
      },
      {
        subject: 'RE',
        topic: 'Selecting research focus',
        scenario: 'Year 9 class researching religious festivals. Pupil cannot start when given open choice of "any festival from any religion".',
        steps: [
          {
            action: 'Narrow the options',
            teacherDoes: 'Select two festivals with good visual resources and clear information: Diwali and Hanukkah. Prepare a fact sheet for each.',
            pupilDoes: 'N/A - teacher preparation.',
          },
          {
            action: 'Present focused choice',
            teacherDoes: 'Place both fact sheets on desk. Say: "You\'re researching a festival of light. You can study Diwali, the Hindu festival, or Hanukkah, the Jewish festival. Look at both sheets and pick one."',
            pupilDoes: 'Reads the titles and sees the pictures. Both are clearly about light festivals.',
          },
          {
            action: 'Confirm and direct first step',
            teacherDoes: 'When pupil chooses Diwali, say: "Diwali it is. First, highlight three facts on this sheet that you find most interesting." Hand over highlighter.',
            pupilDoes: 'Has specific festival, resource, and first task. Begins highlighting immediately.',
          },
        ],
      },
      {
        subject: 'Computing',
        topic: 'Choosing programming project',
        scenario: 'Year 8 class starting a Scratch animation project. Pupil overwhelmed by instruction to "make any animation you like".',
        steps: [
          {
            action: 'Create starter templates',
            teacherDoes: 'Prepare two Scratch starter files: a space theme (rocket sprite, star background) and an underwater theme (fish sprite, ocean background). Both have basic movement code started.',
            pupilDoes: 'N/A - teacher preparation.',
          },
          {
            action: 'Show both options',
            teacherDoes: 'Open both projects on screen. Say: "You\'re making an animation. You can start with the space theme or the underwater theme. Both have some code already. Click through each and tell me which one."',
            pupilDoes: 'Clicks through both starter files. Sees what assets and code already exist.',
          },
          {
            action: 'Load and direct',
            teacherDoes: 'When pupil chooses underwater, say: "Good. I\'ll load the underwater starter. Your first task is to make the fish move across the screen. The motion blocks are here." Point to block palette.',
            pupilDoes: 'Has themed project loaded with clear first coding task. Begins immediately.',
          },
        ],
      },
      {
        subject: 'PSHE',
        topic: 'Choosing reflection activity',
        scenario: 'Year 10 class completing a unit on mental health. Pupil cannot engage when asked to "reflect on your learning in whatever way works for you".',
        steps: [
          {
            action: 'Prepare reflection formats',
            teacherDoes: 'Create two reflection options: a worksheet with sentence starters ("One thing I learned...", "I could help a friend by...") and a mind map template with central topic and four branches.',
            pupilDoes: 'N/A - teacher preparation.',
          },
          {
            action: 'Offer structured choice',
            teacherDoes: 'Place both in front of pupil. Say: "You need to reflect on what we\'ve learned about mental health. You can complete these sentences, or create a mind map. Which format helps you think better?"',
            pupilDoes: 'Looks at both formats. Sentence starters feel more guided; mind map feels more visual.',
          },
          {
            action: 'Confirm and start together',
            teacherDoes: 'When pupil chooses sentence starters, say: "Good choice. Let\'s read the first sentence starter together. \'One thing I learned about mental health is...\' What comes to mind?"',
            pupilDoes: 'Has structure and support for first response. Completes remaining sentences independently.',
          },
        ],
      },
    ],

    routines: [
      {
        routine: 'Start of independent work',
        context: 'Transitioning from whole-class teaching to independent practice. Pupil needs some agency but cannot handle open-ended task selection.',
        steps: [
          'Prepare 2-3 task cards or worksheets before the lesson',
          'When independent work begins, place options on pupil\'s desk',
          '"You\'re going to practise now. You can start with this one or this one." Point to each.',
          'Wait for selection. Remove unchosen options.',
          '"Good. Start here." Point to first question on chosen task.',
        ],
        taRole: 'Have task options ready. Present choices calmly without adding extra explanation. Accept choice without commentary. Remove other options to reduce visual clutter.',
      },
      {
        routine: 'Equipment selection',
        context: 'Daily moments where pupils choose equipment (pens, rulers, seats, resources). Pupil freezes at open equipment stations.',
        steps: [
          'Before pupil approaches equipment, select 2 appropriate items',
          'Bring items to pupil or intercept them before the full selection',
          '"You need a pen. Green or purple?" Hold up both.',
          'Pupil points or says their choice',
          'Hand over chosen item. Other goes back.',
        ],
        taRole: 'Intercept before overwhelm happens. Pre-select appropriate options. Present calmly, accept quickly, move on. Do not let pupil approach full equipment station if this triggers overwhelm.',
      },
    ],

    troubleshooting: [
      {
        problem: 'Pupil still cannot choose between 2 options',
        cause: 'Even two options may be too many, or the pupil is anxious about making the "wrong" choice.',
        solution: 'Try offering just one option with a yes/no: "I\'ve chosen the blue pen for you today. Is that okay?" If still stuck, direct: "Today we\'re using blue." Build up to choices once trust is established.',
      },
      {
        problem: 'Pupil always chooses the same option',
        cause: 'This is normal and fine. Predictability feels safe. The choice is still giving them agency.',
        solution: 'Accept consistent choices. Do not force variety. If you need them to try something different, make it the only option that day: "Today everyone is using the grid method."',
      },
      {
        problem: 'Pupil changes their mind repeatedly',
        cause: 'Anxiety about commitment, or they do not understand that choosing ends the decision.',
        solution: 'Make choices final: "Once you choose, that\'s your answer and we move on." Remove unchosen options immediately. If they try to change: "You chose blue. We\'re using blue. You can choose again next time."',
      },
      {
        problem: 'Pupil asks you to choose for them',
        cause: 'Decision-making feels too risky. They want to avoid responsibility for the outcome.',
        solution: 'Give a time limit: "I\'ll count to 5, then if you haven\'t chosen, I\'ll pick." Often this prompts a choice. If not, choose for them matter-of-factly: "I\'ll pick blue today. You can choose next time."',
      },
      {
        problem: 'You accidentally offer too many options',
        cause: 'Natural teacher instinct to give freedom. Open-ended questions slip out.',
        solution: 'Recover by narrowing: "Actually, let me make this easier. These two. Which one?" Plan your limited choices in advance and write them on a Post-it as a reminder.',
      },
    ],

    scripts: {
      teacher: {
        starting: [
          '"I\'m going to give you a choice. Just two options."',
          '"You get to decide. Here are your options."',
          '"There\'s no wrong answer here. Both are good."',
        ],
        during: [
          '"This one or this one?"',
          '"Take your time. Point when you\'re ready."',
          '"Would you like A or B?"',
        ],
        ifStuck: [
          '"Both are good choices. Just pick one for now."',
          '"I\'ll count to 5, then you point to one."',
          '"Would it help if I chose today? You can choose next time."',
        ],
        ending: [
          '"Good choice. Let\'s get started."',
          '"You decided quickly today. Well done."',
          '"You made your choice and got straight to work."',
        ],
      },
      ta: {
        role: 'Pre-select appropriate options before presenting them. Intercept the pupil before they face overwhelming choices (like full equipment stations). Present choices calmly with minimal language. Accept their choice immediately and remove other options.',
        keyPhrases: [
          '"This one or this one?"',
          '"Point to the one you want."',
          '"Good choice." [Remove other option]',
          '"You chose. Let\'s go."',
        ],
        avoid: [
          'Offering more than 3 options',
          'Asking "Are you sure?" after they choose',
          'Suggesting they might prefer the other option',
          'Letting them approach full equipment stations alone',
          'Rushing them to decide faster',
        ],
      },
    },

    noTaAdaptations: {
      overview: "Choice-making works well without TA support because it's about how tasks are structured, not about adult presence during the task.",
      keyAdjustments: [
        "Build choices into worksheets: 'Choose 2 of these 4 questions to answer'",
        "Create choice boards on desks that pupils use independently",
        "Use 'pick a path' task cards where pupils select their own route",
        "Offer choice through differentiated resource stations pupils access themselves",
      ],
      independenceStrategies: [
        "Teach a choosing routine: 'Look at options, think about what suits you, pick one, start'",
        "Use visual choice cards pupils physically select and place on their desk",
        "Build in reflection: 'Was this a good choice for me?' self-assessment",
      ],
      peerSupportOptions: [
        "Let pupils discuss choices briefly with a partner before committing",
        "Create choice partnerships where pupils make complementary choices",
        "Use peer sharing of choices: 'Tell your partner which one you picked and why'",
      ],
    },
  },

  prepPlan: [
    { time: '2 mins', action: 'Identify choice moments', details: 'Note 2-3 places in the lesson where you could offer structured choices (task, equipment, method, seating).' },
    { time: '2 mins', action: 'Pre-select options', details: 'For each choice moment, decide on exactly 2-3 options. Ensure all are genuinely acceptable.' },
    { time: '1 min', action: 'Brief TA', details: 'Tell them which moments involve choices and what the options are. Agree that choices are final once made.' },
  ],

  printableSummary: `STRUCTURED CHOICE MAKING

WHAT: Offer exactly 2-3 options instead of open-ended questions. You control the options; they control the selection.

WHY: Too many choices overwhelm executive function. Limited choices give genuine agency without paralysis.

HOW:
1. Pre-select 2-3 acceptable options (never more)
2. Present visually when possible (hold up, point to, display)
3. Use simple language: "This one or this one?"
4. Give processing time - wait silently
5. Accept their choice without questioning
6. Remove unchosen options immediately

WHEN TO OFFER CHOICE vs DIRECT:
- Choice: Low-stakes decisions, building agency, pupil is calm
- Direct: High anxiety moments, safety situations, when any delay is problematic

VISUAL PRESENTATION:
- Hold up physical objects
- Point to options on desk
- Use choice cards with pictures
- Display options side by side

COMMON MISTAKES:
x Offering more than 3 options
x Including options you would not accept
x Asking "Are you sure?" after they choose
x Rushing before they have processed

WHEN YOU SEE:
- Freezes at open-ended questions
- Says "I don't know" to choices
- EHCP mentions "overwhelmed by options" or "needs limited choices"`,

  quickChecklist: [
    'Pre-selected 2-3 options only',
    'All options are genuinely acceptable',
    'Prepared visual presentation where possible',
    'Briefed TA on options and process',
    'Planned processing time into the moment',
    'Ready to accept choice without questioning',
  ],

  ehcpPhrases: [
    'becomes overwhelmed by options',
    'needs limited choices',
    'difficulties with decision-making',
    'struggles with open-ended tasks',
    'requires structured choices',
    'needs support with decision making',
    'finds too many options overwhelming',
    'benefits from reduced choices',
  ],

  relatedStrategies: ['visual-supports', 'chunking-one-step-instructions', 'errorless-learning'],
};
