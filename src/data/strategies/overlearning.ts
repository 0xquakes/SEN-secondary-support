import { Strategy } from '@/types';

export const overlearningStrategy: Strategy = {
  id: 'overlearning-001',
  slug: 'overlearning-repetition',
  title: 'Overlearning and Repetition',
  shortDescription: 'Continue practice beyond initial mastery to embed skills deeply, using spaced repetition and engaging review routines.',
  longDescription: `Overlearning means continuing to practise a skill after the pupil has demonstrated initial mastery. This isn't about boring repetition—it's about embedding knowledge so deeply that recall becomes automatic. When information is truly overlearned, it frees up working memory for higher-level thinking. For pupils who struggle to retain information, who seem to "lose" skills between lessons, or whose EHCP mentions difficulties with consolidation, overlearning provides the repeated exposure their brains need to move learning from fragile short-term memory into robust long-term storage.`,
  difficulty: 'beginner',
  prepTime: '5-10 mins',
  areaOfNeed: 'Processing & Attention',
  subjects: ['English', 'Maths', 'Science', 'History', 'Geography', 'Art', 'Music', 'PE', 'MFL', 'DT', 'Drama', 'RE', 'Computing', 'PSHE'],
  routines: ['Lesson starters', 'Daily review', 'Homework', 'End of lesson'],
  tags: ['memory', 'retention', 'consolidation', 'repetition', 'spaced practice', 'automaticity'],

  content: {
    problem: {
      headline: 'Skills learned one day are forgotten by the next',
      description: 'The pupil seems to understand in the lesson. They get it right. You move on. But next week—or even next day—it\'s as if they\'ve never seen it before. The skill hasn\'t stuck. Their brain stored it temporarily but never transferred it to long-term memory. Without repeated practice distributed over time, learning evaporates.',
      signs: [
        'Pupil masters skill in lesson but forgets by next session',
        'Says "We\'ve never done this before" when you have',
        'Needs to relearn basics at the start of each unit',
        'Can\'t apply previously taught skills to new contexts',
        'EHCP mentions "difficulties retaining information"',
      ],
    },

    explanation: {
      definition: 'Overlearning is deliberate practice that continues after initial mastery, combined with spaced repetition that revisits content across days and weeks to strengthen memory traces.',
      whyItWorks: 'Memory isn\'t like recording—it\'s like building muscle. One correct attempt creates a weak neural pathway. Each subsequent repetition strengthens that pathway. Spacing these repetitions across time (distributed practice) is far more effective than cramming (massed practice). When we retrieve information repeatedly, we signal to the brain: "This matters. Keep it." The result is automaticity—skills that are so embedded they require no conscious effort, freeing working memory for new challenges.',
      keyPrinciples: [
        'Continue practice beyond first success',
        'Space repetition across days and weeks (distributed practice)',
        'Make retrieval active, not passive re-reading',
        'Vary the context while keeping the core skill constant',
        'Keep repetition engaging through variation and games',
      ],
    },

    howTo: {
      steps: [
        {
          step: 1,
          title: 'Identify skills that need overlearning',
          instruction: 'Which skills does this pupil repeatedly forget? Which basics do they need automatic so they can focus on higher-level thinking?',
          tip: 'Prioritise foundational skills: number bonds, phonics patterns, key vocabulary, procedures.',
        },
        {
          step: 2,
          title: 'Build in immediate repetition',
          instruction: 'When the pupil gets something right, don\'t move on immediately. Have them do 3-5 more successful repetitions in that session.',
          teacherSays: '"Great, you\'ve got it. Let\'s do a few more to lock it in."',
          tip: 'These extra repetitions should feel like success, not punishment.',
        },
        {
          step: 3,
          title: 'Schedule spaced review',
          instruction: 'Plan when you\'ll revisit this skill. Use expanding intervals: next day, then 3 days, then a week, then a fortnight.',
          teacherSays: '"We\'ll come back to this tomorrow, and again next week. That\'s how we make it stick."',
          tip: 'Put review moments in your planner—don\'t rely on memory.',
        },
        {
          step: 4,
          title: 'Use active retrieval',
          instruction: 'Don\'t just show the information again—ask the pupil to retrieve it. Testing strengthens memory more than restudying.',
          teacherSays: '"Before I show you, can you remember what we did last time?"',
          tip: 'If they can\'t retrieve it, prompt minimally before showing the answer.',
        },
        {
          step: 5,
          title: 'Vary the format',
          instruction: 'Same skill, different presentation. Flashcards one day, verbal quiz the next, written practice another day. Variation maintains engagement.',
          tip: 'Small changes prevent boredom while reinforcing the same underlying skill.',
        },
        {
          step: 6,
          title: 'Make it routine',
          instruction: 'Build daily review into your lesson structure. Predictable review routines reduce planning load and ensure consistency.',
          teacherSays: '"Every lesson starts with our five quick questions on what we\'ve learned before."',
        },
      ],
      commonMistakes: [
        'Moving on immediately after first success',
        'Massing practice in one session instead of spacing it',
        'Making repetition boring and drill-like',
        'Only reviewing before tests (cramming)',
        'Passive re-reading instead of active retrieval',
      ],
      timeToImplement: '5-10 mins preparation, integrated into daily routines',
    },

    workedExamples: [
      {
        subject: 'Maths',
        topic: 'Times tables (6x table)',
        scenario: 'Year 5 pupil learns 6x table facts but forgets them within days. Needs automaticity for division and fractions work.',
        steps: [
          {
            action: 'Day 1: Initial teaching with overlearning',
            teacherDoes: 'Teach 6x1 to 6x6 using visual arrays. Once pupil answers correctly, continue with 5 more practice rounds.',
            pupilDoes: 'Answers correctly multiple times. Brain strengthens pathways through repetition.',
          },
          {
            action: 'Day 1 end: Quick retrieval',
            teacherDoes: 'At lesson end, ask: "Quick fire—6x3? 6x5? 6x2?" Celebrate quick recall.',
            pupilDoes: 'Retrieves facts from memory. Experiences success.',
          },
          {
            action: 'Day 2: Spaced retrieval',
            teacherDoes: 'Start lesson with flashcard review of yesterday\'s facts. If stuck, show array briefly then ask again.',
            pupilDoes: 'Retrieves with some effort. Correct answers after prompts still strengthen memory.',
          },
          {
            action: 'Day 4: Varied practice',
            teacherDoes: 'Play "times table tennis"—verbal back-and-forth. Then written quiz. Mix in facts from 6x7-6x12.',
            pupilDoes: 'Practises in different formats. Starts combining with new facts.',
          },
          {
            action: 'Week 2 onwards: Maintenance',
            teacherDoes: 'Include 6x table in daily starter. 2-3 questions mixed with other content.',
            pupilDoes: 'Maintains automaticity through regular low-stakes retrieval.',
          },
        ],
      },
      {
        subject: 'English',
        topic: 'Spelling patterns (homophones)',
        scenario: 'Year 7 pupil confuses their/there/they\'re in every piece of writing despite being taught multiple times.',
        steps: [
          {
            action: 'Session 1: Teach with memorable distinctions',
            teacherDoes: 'Teach each word with a memorable hook: "their = heir (ownership)", "there = here (place)", "they\'re = they are (contraction test)".',
            pupilDoes: 'Learns the distinctions. Practises 10 sentences choosing the correct form.',
          },
          {
            action: 'Session 1: Overlearning',
            teacherDoes: 'After pupil gets 3 right, continue with 5 more. Say: "You\'ve got it—let\'s make it stick."',
            pupilDoes: 'Completes additional practice. Confidence builds with repeated success.',
          },
          {
            action: 'Daily: Quick quiz in starter',
            teacherDoes: 'Include 2 their/there/they\'re sentences in every lesson starter for 3 weeks.',
            pupilDoes: 'Retrieves correct form daily. Begins to automatise the decision process.',
          },
          {
            action: 'Varied contexts: Spot the error',
            teacherDoes: 'Show sentences with deliberate errors. "Find and fix: There going to the park."',
            pupilDoes: 'Applies knowledge in different format. Identifies "They\'re" as correct.',
          },
          {
            action: 'Writing integration',
            teacherDoes: 'During writing, prompt: "You\'ve used \'there\'—which one is it? Ownership, place, or contraction?"',
            pupilDoes: 'Self-checks using the memorable hooks. Transfers skill to authentic writing.',
          },
        ],
      },
      {
        subject: 'Science',
        topic: 'Safety symbols',
        scenario: 'Year 8 pupil cannot remember hazard symbols despite seeing them every practical. Needs this for safe working and exams.',
        steps: [
          {
            action: 'Initial teaching with multiple exposures',
            teacherDoes: 'Teach 4 key symbols with actions: oxidising (flame gesture), corrosive (eating away motion), toxic (skull), flammable (fire).',
            pupilDoes: 'Associates each symbol with word and action. Repeats matching game 3 times.',
          },
          {
            action: 'Same lesson: Immediate retrieval',
            teacherDoes: 'Cover symbols. "Show me the action for corrosive. Now point to the corrosive symbol."',
            pupilDoes: 'Retrieves from memory using action as memory aid.',
          },
          {
            action: 'Every practical: Embedded review',
            teacherDoes: 'Before each practical: "What symbols are on today\'s chemicals? What do they mean? What precautions?"',
            pupilDoes: 'Identifies symbols in real context. Links to actual safety behaviour.',
          },
          {
            action: 'Weekly quiz: Spaced retrieval',
            teacherDoes: 'Include 2 symbol questions in weekly science quiz. Mix with other content.',
            pupilDoes: 'Retrieves symbols alongside other knowledge. Spacing strengthens retention.',
          },
          {
            action: 'Month 2: Add symbols',
            teacherDoes: 'Introduce 2 more symbols. Review all 6 with the action game.',
            pupilDoes: 'Builds on secure foundation. Original 4 now automatic; brain has capacity for new ones.',
          },
        ],
      },
      {
        subject: 'History',
        topic: 'Key dates and events (Norman Conquest)',
        scenario: 'Year 7 pupil struggles to remember dates and sequence of events in the Norman Conquest unit. Confuses 1066 events and cannot recall key figures.',
        steps: [
          {
            action: 'Initial teaching: Core facts with memory hooks',
            teacherDoes: 'Teach 5 key dates/events with memorable associations: "1066 - William\'s tricks" (rhyme), "Hastings - Harold\'s last stand" (alliteration). Create a timeline with visual icons.',
            pupilDoes: 'Learns dates with memory hooks. Completes timeline activity matching dates to events 3 times.',
          },
          {
            action: 'Same lesson: Immediate overlearning',
            teacherDoes: 'After success, ask pupil to complete timeline from memory. Then verbal quick-fire: "When was the Battle of Hastings? Who won? What happened to Harold?"',
            pupilDoes: 'Retrieves information multiple times in same session. Repetition strengthens initial learning.',
          },
          {
            action: 'Weekly: Timeline retrieval in starters',
            teacherDoes: 'Include 2-3 questions about Norman Conquest dates in every History lesson starter for half term. Mix with current topic questions.',
            pupilDoes: 'Retrieves dates regularly. Spacing across weeks builds long-term retention.',
          },
        ],
      },
      {
        subject: 'Geography',
        topic: 'Map skills (compass directions and grid references)',
        scenario: 'Year 8 pupil cannot reliably use 4-figure grid references. Confuses "along the corridor, up the stairs" and reverses numbers.',
        steps: [
          {
            action: 'Teaching with physical movement',
            teacherDoes: 'Teach grid references using classroom movement: "Walk ALONG the corridor first (eastings), then UP the stairs (northings)." Practise with large floor grid.',
            pupilDoes: 'Physically walks the grid reference process. Completes 5 successful grid references with movement.',
          },
          {
            action: 'Immediate repetition: Mini whiteboard practice',
            teacherDoes: 'Show map on board. "Write the grid reference for the church. Now the farm. Now the bridge." Continue until 5 consecutive correct answers.',
            pupilDoes: 'Practises beyond initial success. Each repetition reinforces the correct process.',
          },
          {
            action: 'Every Geography lesson: Quick grid reference',
            teacherDoes: 'Start each lesson with a 2-minute map challenge. Display map, ask for 3 grid references. Track progress on visible chart.',
            pupilDoes: 'Daily retrieval builds automaticity. Visible progress chart motivates continued practice.',
          },
        ],
      },
      {
        subject: 'Art',
        topic: 'Colour theory (primary, secondary, complementary colours)',
        scenario: 'Year 7 pupil cannot remember which colours mix to create secondary colours, or identify complementary pairs. This limits their practical work.',
        steps: [
          {
            action: 'Teaching with hands-on mixing',
            teacherDoes: 'Demonstrate colour mixing with paint. Pupil mixes each secondary colour themselves while saying: "Red plus yellow makes orange." Create colour wheel.',
            pupilDoes: 'Physically mixes colours while verbalising. Multi-sensory approach strengthens memory.',
          },
          {
            action: 'Overlearning through repetition',
            teacherDoes: 'Quick verbal quiz: "What makes orange? What makes green? What\'s opposite red on the wheel?" Repeat until responses are instant.',
            pupilDoes: 'Answers become automatic through repeated retrieval. No hesitation on basic facts.',
          },
          {
            action: 'Every practical lesson: Colour starter',
            teacherDoes: 'Begin each Art lesson with 30-second colour quiz. Before pupil collects materials: "Tell me two complementary pairs."',
            pupilDoes: 'Regular retrieval maintains knowledge. Links theory to practical application.',
          },
        ],
      },
      {
        subject: 'Music',
        topic: 'Musical notation (note values and names)',
        scenario: 'Year 8 pupil cannot remember note names on the treble clef or distinguish between crotchets and quavers. This slows their ability to read and play music.',
        steps: [
          {
            action: 'Teaching with mnemonics and rhythm',
            teacherDoes: 'Teach line notes with "Every Good Boy Deserves Football" and spaces with "FACE". Clap note values while saying names: "Crotchet = 1 beat" (clap), "Quaver = half beat" (two quick claps).',
            pupilDoes: 'Learns mnemonics and physical rhythms. Associates movement with note values.',
          },
          {
            action: 'Immediate overlearning: Flashcard drill',
            teacherDoes: 'Show note flashcards rapidly. Pupil names note or claps rhythm. Continue for 20 cards, even after consistent success.',
            pupilDoes: 'Repeated retrieval in one session. Speed builds automaticity.',
          },
          {
            action: 'Every Music lesson: Note naming warm-up',
            teacherDoes: 'Display 5 notes on board as pupils enter. "Write the names before the register is done." Track accuracy over weeks.',
            pupilDoes: 'Daily retrieval embeds note names. Automaticity develops through consistent practice.',
          },
        ],
      },
      {
        subject: 'PE',
        topic: 'Rules and scoring (badminton)',
        scenario: 'Year 9 pupil enjoys playing badminton but cannot remember serving rules or scoring system. This affects their ability to officiate and play independently.',
        steps: [
          {
            action: 'Teaching rules through demonstration',
            teacherDoes: 'Demonstrate each serving rule while pupil copies: "Serve below waist height, feet stationary, diagonal court." Pupil practises each rule physically.',
            pupilDoes: 'Learns rules through physical practice. Body memory reinforces verbal knowledge.',
          },
          {
            action: 'Repeated application: Referee role',
            teacherDoes: 'Pupil referees short games, calling faults. Teacher confirms or corrects each call. "Was that serve legal? Why/why not?"',
            pupilDoes: 'Applies rules repeatedly in real context. Immediate feedback reinforces correct understanding.',
          },
          {
            action: 'Every badminton lesson: Rules quiz',
            teacherDoes: 'Before playing: "Quick rules check - show me a legal serve position. What\'s the score if server wins this point?" Only start game after correct answers.',
            pupilDoes: 'Regular retrieval before activity. Rules become automatic prerequisite for play.',
          },
        ],
      },
      {
        subject: 'MFL',
        topic: 'High-frequency vocabulary (French greetings and introductions)',
        scenario: 'Year 7 pupil cannot retain basic French vocabulary between lessons. Forgets how to introduce themselves despite multiple teachings.',
        steps: [
          {
            action: 'Teaching with actions and repetition',
            teacherDoes: 'Teach 6 key phrases with actions: wave for "Bonjour", point to self for "Je m\'appelle", shrug for "Comment tu t\'appelles?" Drill with actions 10 times.',
            pupilDoes: 'Associates physical gestures with phrases. Multiple repetitions in first session.',
          },
          {
            action: 'Same lesson: Role-play overlearning',
            teacherDoes: 'Pupil introduces themselves to teacher, TA, and 3 peers. Same conversation, different partners. "Each time, try to need the prompt card less."',
            pupilDoes: 'Practises same phrases 5 times with different people. Varied context, same core skill.',
          },
          {
            action: 'Every MFL lesson: Entry routine',
            teacherDoes: 'Greet pupil in French at door. Expect French response. Brief exchange before entering. Track fluency improvement.',
            pupilDoes: 'Daily authentic retrieval. Low-stakes practice builds confidence and automaticity.',
          },
        ],
      },
      {
        subject: 'DT',
        topic: 'Health and safety procedures (using workshop machinery)',
        scenario: 'Year 9 pupil forgets safety procedures for pillar drill and cannot work independently. Needs constant reminders about guards, goggles, and hair.',
        steps: [
          {
            action: 'Teaching with physical walk-through',
            teacherDoes: 'Walk through complete safety procedure at pillar drill: "First, goggles on. Second, hair tied back. Third, check guard..." Pupil physically demonstrates each step.',
            pupilDoes: 'Performs full safety routine while verbalising each step. Physical practice reinforces sequence.',
          },
          {
            action: 'Immediate overlearning: Repeat demonstration',
            teacherDoes: 'Pupil demonstrates full safety procedure 3 more times to teacher, explaining each step. "Now show me again, faster."',
            pupilDoes: 'Repeated demonstrations build automaticity. Speed develops with practice.',
          },
          {
            action: 'Every practical lesson: Safety checkpoint',
            teacherDoes: 'Before pupil uses any machine: "Talk me through the safety steps." Only approve use after correct verbal demonstration.',
            pupilDoes: 'Regular retrieval before every practical. Safety becomes automatic prerequisite.',
          },
        ],
      },
      {
        subject: 'Drama',
        topic: 'Stage positions and directions',
        scenario: 'Year 8 pupil confuses stage left/right and upstage/downstage. This affects their ability to follow direction and blocking instructions.',
        steps: [
          {
            action: 'Teaching with physical positioning',
            teacherDoes: 'Stand on stage with pupil. "Downstage is DOWN towards the audience, upstage is UP away from them. Stage left is YOUR left as the actor." Walk to each position while naming it.',
            pupilDoes: 'Physically moves to each position while saying the name. Body learns the spatial relationships.',
          },
          {
            action: 'Immediate drill: Direction game',
            teacherDoes: 'Call out positions rapidly: "Downstage right! Centre stage! Upstage left!" Continue for 2 minutes, mixing up sequence. Celebrate quick responses.',
            pupilDoes: 'Moves quickly to correct positions. Repeated retrieval under time pressure builds automaticity.',
          },
          {
            action: 'Every Drama lesson: Positioning warm-up',
            teacherDoes: 'Start each lesson with 60-second position drill. "Everyone to upstage centre. Now downstage left." Track target pupil\'s accuracy.',
            pupilDoes: 'Daily retrieval through movement. Positions become automatic, freeing focus for performance.',
          },
        ],
      },
      {
        subject: 'RE',
        topic: 'Key religious terminology (Five Pillars of Islam)',
        scenario: 'Year 7 pupil cannot remember the names and meanings of the Five Pillars of Islam. Confuses terms and cannot apply them in written work.',
        steps: [
          {
            action: 'Teaching with visual and physical associations',
            teacherDoes: 'Teach each pillar with an action: Shahada (hand on heart for belief), Salah (prayer hands), Zakat (giving gesture), Sawm (empty stomach mime), Hajj (walking motion). Create visual poster with icons.',
            pupilDoes: 'Associates each pillar with action and image. Multi-sensory learning creates multiple memory pathways.',
          },
          {
            action: 'Overlearning: Action game',
            teacherDoes: 'Say pillar name - pupil does action. Do action - pupil says name. Continue until responses are instant. "Now tell me all five with actions, no help."',
            pupilDoes: 'Retrieves in both directions (name to action, action to name). Complete recall develops automaticity.',
          },
          {
            action: 'Every RE lesson: Quick retrieval',
            teacherDoes: 'Include pillar questions in lesson starters when studying Islam. "Which pillar involves giving to charity? What\'s the pillar of fasting called?"',
            pupilDoes: 'Regular retrieval over half term. Terminology becomes embedded for exam answers.',
          },
        ],
      },
      {
        subject: 'Computing',
        topic: 'Programming syntax (Python print statements and variables)',
        scenario: 'Year 8 pupil forgets basic Python syntax between lessons. Makes same errors with quotation marks, brackets, and variable assignment repeatedly.',
        steps: [
          {
            action: 'Teaching with verbal rehearsal',
            teacherDoes: 'Teach syntax with verbal pattern: "print, open bracket, quote marks, text, quote marks, close bracket." Pupil types while saying pattern aloud.',
            pupilDoes: 'Verbalises syntax while typing. Dual coding (verbal and motor) strengthens memory.',
          },
          {
            action: 'Immediate overlearning: Error correction',
            teacherDoes: 'Show 5 code snippets with errors. "Find and fix the syntax error." Then pupil writes 5 correct print statements from scratch.',
            pupilDoes: 'Practises identifying and applying correct syntax multiple times. Error analysis deepens understanding.',
          },
          {
            action: 'Every Computing lesson: Syntax starter',
            teacherDoes: 'Display code with deliberate syntax errors. "Fix these in your first 3 minutes." Include previous syntax alongside new learning.',
            pupilDoes: 'Regular retrieval of correct syntax. Pattern becomes automatic, allowing focus on logic.',
          },
        ],
      },
      {
        subject: 'PSHE',
        topic: 'Emergency procedures (what to do in different emergency situations)',
        scenario: 'Year 7 pupil cannot remember key information for emergencies (recovery position steps, when to call 999, fire safety). This is essential life knowledge.',
        steps: [
          {
            action: 'Teaching with physical practice',
            teacherDoes: 'Demonstrate recovery position step-by-step. Pupil practises on volunteer: "First, kneel beside them. Second, arm at right angle..." Repeat full sequence 3 times.',
            pupilDoes: 'Physically performs each step while verbalising. Muscle memory supports recall in stress.',
          },
          {
            action: 'Scenario-based overlearning',
            teacherDoes: 'Present quick scenarios: "Person has fallen, they\'re breathing but unconscious. What do you do? Talk me through it." Vary scenarios but require same core procedure.',
            pupilDoes: 'Applies knowledge to different scenarios. Varied context reinforces transferable skill.',
          },
          {
            action: 'Termly review: Emergency refresher',
            teacherDoes: 'Return to emergency procedures each half term. "Quick check - show me the recovery position. What\'s the number for emergencies?" Build into PSHE routine.',
            pupilDoes: 'Spaced retrieval across the year. Life-saving knowledge stays accessible.',
          },
        ],
      },
    ],

    routines: [
      {
        routine: 'Daily review starter',
        context: 'First 5 minutes of every lesson',
        steps: [
          'Prepare 5 quick questions covering recent and older content (ratio: 2 new, 2 recent, 1 older)',
          'Display questions on board as pupils enter—they start immediately',
          'After 3 minutes, review answers together',
          'Celebrate: "These are sticking because we keep coming back to them"',
          'Track which questions pupils get wrong—those return tomorrow',
        ],
        taRole: 'Sit with target pupil during starter. If they\'re stuck, prompt minimally: "We did this yesterday—what was the first step?" Celebrate quick retrieval.',
      },
      {
        routine: 'Exit ticket retrieval',
        context: 'Last 3 minutes of every lesson',
        steps: [
          'Ask: "What was the most important thing you learned today? Write one sentence or draw it."',
          'Then: "Now answer this question from last week..." (retrieval of older content)',
          'Collect exit tickets to identify who needs more repetition',
          'Use responses to plan tomorrow\'s review questions',
        ],
        taRole: 'Support target pupil in articulating today\'s learning. For the retrieval question, prompt recall of when they learned it: "Remember Tuesday when we..." rather than giving the answer.',
      },
    ],

    troubleshooting: [
      {
        problem: 'Pupil groans when they see review questions',
        cause: 'Repetition feels boring or punitive',
        solution: 'Vary the format: use games, competitions, peer quizzing, mini-whiteboards. Frame positively: "This is how we make things permanent." Celebrate improvement: "Last week you got 2, this week 4!"',
      },
      {
        problem: 'Pupil still forgets despite repetition',
        cause: 'Repetitions not spaced correctly, or not using active retrieval',
        solution: 'Check you\'re spacing across days, not massing in one session. Ensure retrieval is ACTIVE—pupil generates the answer, not just recognises it. Add more memorable hooks (actions, images, stories).',
      },
      {
        problem: 'No time in lessons for review',
        cause: 'Curriculum pressure; feeling that review time is "wasted"',
        solution: 'Review IS learning—it\'s not extra, it\'s essential. 5 minutes of daily review prevents 20 minutes of reteaching later. Build it into your non-negotiable lesson structure.',
      },
      {
        problem: 'Other pupils don\'t need this much repetition',
        cause: 'Differentiated memory needs',
        solution: 'Whole-class daily review benefits everyone. For target pupils, add extra retrieval moments: quick questions while others work, TA-led mini-quizzes, take-home flashcards for parents to use.',
      },
      {
        problem: 'Pupil gets answers right in review but not in context',
        cause: 'Knowledge is isolated; not transferring to application',
        solution: 'Vary the context during review. Don\'t just ask "6x4?" but also "If I have 4 bags of 6 apples..." and "How many 6s in 24?" Same knowledge, different angles.',
      },
      {
        problem: 'Parents say "we\'ve done this already"',
        cause: 'Misunderstanding of overlearning purpose',
        solution: 'Explain: "We\'re building automaticity. Like learning to drive—first you think about every action, then it becomes automatic. We need this automatic so their brain is free for harder thinking."',
      },
    ],

    scripts: {
      teacher: {
        starting: [
          '"We\'re going to practise this until it\'s automatic."',
          '"You got it right—now let\'s do a few more to lock it in."',
          '"Every lesson, we start by remembering what we learned before."',
        ],
        during: [
          '"Good—that\'s coming faster now."',
          '"You remembered that from last week. It\'s sticking."',
          '"Let\'s try another one. Same skill, different question."',
        ],
        ifStuck: [
          '"Think back to yesterday. What was the first step?"',
          '"I\'ll give you a clue... now you tell me the rest."',
          '"That\'s OK—let\'s go over it again. We\'ll come back to it tomorrow."',
        ],
        ending: [
          '"Because we keep practising, this is getting easier."',
          '"You didn\'t even have to think about that one—it\'s becoming automatic."',
          '"We\'ll review this again tomorrow to keep it strong."',
        ],
      },
      ta: {
        role: 'Support daily review routines. Prompt retrieval rather than giving answers. Track which content needs more repetition for target pupils. Run mini-quizzes during independent work time.',
        keyPhrases: [
          '"We did this yesterday—can you remember?"',
          '"What was the trick for remembering this?"',
          '"Let\'s do two more to make sure it sticks."',
          '"You\'re getting faster at this!"',
        ],
        avoid: [
          'Giving answers instead of prompting retrieval',
          'Saying "You should know this by now"',
          'Skipping review because pupil "got it yesterday"',
          'Making repetition feel like punishment',
        ],
      },
    },

    noTaAdaptations: {
      overview: "Overlearning is about structured repetition - it can be built into independent routines and self-paced practice without adult support.",
      keyAdjustments: [
        "Create self-marking practice cards pupils can work through independently",
        "Use apps or online tools that provide repeated practice with immediate feedback",
        "Design 'daily practice' sheets that follow the same format for consistent repetition",
        "Set up practice stations pupils rotate through independently",
      ],
      independenceStrategies: [
        "Teach pupils to use flashcard routines independently (look, cover, write, check)",
        "Create personal practice logs where pupils track their own repetitions",
        "Use timed challenges where pupils try to beat their own previous scores",
      ],
      peerSupportOptions: [
        "Pair pupils to quiz each other on practiced content",
        "Use peer testing partners who take turns being the 'teacher'",
        "Create study groups for shared practice sessions",
      ],
    },
  },

  prepPlan: [
    {
      time: '2 mins',
      action: 'Identify priority skills',
      details: 'What 3-5 skills does this pupil need to overlearn? Prioritise foundational knowledge.',
    },
    {
      time: '3 mins',
      action: 'Create retrieval questions',
      details: 'Write 5 quick questions for daily starter. Mix new content with previously taught material.',
    },
    {
      time: '2 mins',
      action: 'Plan spacing schedule',
      details: 'When will you review today\'s content? Tomorrow, Day 3, Week 2? Put in planner.',
    },
    {
      time: '2 mins',
      action: 'Prepare variation',
      details: 'How will you vary the format? Flashcards, verbal quiz, whiteboard, game? Plan for different days.',
    },
    {
      time: '1 min',
      action: 'Brief TA',
      details: 'Tell TA which content to review with pupil and the retrieval prompts to use.',
    },
  ],

  printableSummary: `OVERLEARNING AND REPETITION

WHAT: Continue practice beyond initial mastery, using spaced repetition to embed skills permanently.

WHY: One correct answer creates a weak memory. Repeated retrieval over time builds strong, automatic recall.

HOW:
1. Don't stop at first success—do 3-5 more practice attempts
2. Space repetition: next day, 3 days, 1 week, 2 weeks
3. Use ACTIVE retrieval—pupil generates answers, not just recognises
4. Vary the format to maintain engagement
5. Build review into daily lesson routine (5-min starters)
6. Track what needs more repetition

KEY PRINCIPLES:
- Distributed practice beats massed practice
- Retrieval strengthens memory more than re-reading
- Automaticity frees working memory for harder thinking

COMMON MISTAKES:
x Moving on after first success
x Cramming instead of spacing
x Passive re-reading instead of active recall
x Making repetition boring

WHEN YOU SEE:
- "We've never done this before" (but you have)
- Skills forgotten between lessons
- Can't apply previous learning to new contexts
- EHCP mentions "requires consolidation"`,

  quickChecklist: [
    'Identified 3-5 priority skills for overlearning',
    'Continued practice beyond first success (3-5 more attempts)',
    'Scheduled spaced review in planner',
    'Prepared daily starter questions (mix of new and old)',
    'Planned format variation for engagement',
    'Using active retrieval not passive re-reading',
    'Tracking which content needs more repetition',
    'Briefed TA on review routine',
  ],

  ehcpPhrases: [
    'needs repeated practice',
    'difficulties retaining information',
    'requires consolidation',
    'forgets previously learned skills',
    'needs regular reinforcement',
    'struggles to retain learning',
    'requires overlearning of key concepts',
    'benefits from spaced repetition',
    'needs frequent revisiting of content',
    'difficulties with long-term memory',
  ],

  relatedStrategies: ['chunking-one-step-instructions', 'errorless-learning', 'visual-supports'],
};
