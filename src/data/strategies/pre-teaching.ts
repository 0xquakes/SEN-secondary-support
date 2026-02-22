import { Strategy } from '@/types';

export const preTeachingStrategy: Strategy = {
  id: 'pre-teaching-001',
  slug: 'pre-teaching-vocabulary',
  title: 'Pre-teaching Vocabulary',
  shortDescription: 'Teach key vocabulary before the main lesson to reduce cognitive load and build confidence.',
  longDescription: 'Pre-teaching vocabulary means introducing key words and their meanings before pupils encounter them in the lesson. By frontloading this vocabulary—during morning registration, with a TA, or the day before—pupils enter the main lesson already familiar with the language. This dramatically reduces cognitive load, allowing them to focus on learning concepts rather than decoding unfamiliar words.',
  difficulty: 'beginner',
  prepTime: '10-15 mins',
  areaOfNeed: 'Breaking Down Learning',
  subjects: ['English', 'Maths', 'Science', 'History', 'Geography', 'Art', 'Music', 'PE', 'MFL', 'DT', 'Drama', 'RE', 'Computing', 'PSHE'],
  routines: ['Morning registration', 'TA intervention time', 'Lesson preparation', 'Homework'],
  tags: ['vocabulary', 'cognitive load', 'language', 'preparation', 'differentiation', 'communication'],

  content: {
    problem: {
      headline: 'Unfamiliar vocabulary creates a barrier to learning',
      description: 'You start explaining photosynthesis. The pupil hears "chlorophyll," "carbon dioxide," "glucose"—words they\'ve never encountered. While other pupils follow your explanation, this pupil is stuck on the first unfamiliar word. By the time they\'ve tried to decode it, they\'ve missed everything else. The lesson moves on without them.',
      signs: [
        'Pupil looks confused when subject-specific terms are used',
        'Asks "What does that word mean?" repeatedly during explanations',
        'Stops engaging when new vocabulary is introduced',
        'Written work avoids using key vocabulary',
        'EHCP mentions "limited vocabulary" or "difficulties with subject-specific language"',
        'Struggles to access texts at age-appropriate level',
      ],
    },

    explanation: {
      definition: 'Pre-teaching vocabulary means explicitly teaching key words and their meanings before the main lesson. This can happen the day before, during morning registration, in a brief TA session, or at home. The goal is that when the pupil hears these words in the lesson, they already know what they mean.',
      whyItWorks: 'When a pupil encounters an unfamiliar word during a lesson, their brain has to work hard to decode it while simultaneously trying to follow the explanation. This dual demand overwhelms working memory. By pre-teaching vocabulary, you remove the decoding burden. The word is already familiar—stored in long-term memory—so working memory is free to focus on understanding the concept. The pupil can actually listen to your explanation instead of getting stuck on the words.',
      keyPrinciples: [
        'Teach vocabulary before it appears in the lesson, not during',
        'Focus on 3-5 key words maximum per lesson',
        'Use simple definitions the pupil can understand',
        'Include pictures or concrete examples wherever possible',
        'Revisit the words briefly at the start of the main lesson',
      ],
    },

    howTo: {
      steps: [
        {
          step: 1,
          title: 'Identify key vocabulary',
          instruction: 'Look at tomorrow\'s lesson. Pick 3-5 words that are essential for understanding. These are words the pupil won\'t already know and can\'t easily guess from context.',
          tip: 'Don\'t try to pre-teach every unfamiliar word. Focus on the ones that will block understanding if unknown.',
        },
        {
          step: 2,
          title: 'Create simple definitions',
          instruction: 'Write a simple, pupil-friendly definition for each word. Avoid using other complex words in the definition. If possible, connect to something the pupil already knows.',
          teacherSays: '"Photosynthesis means how plants make their own food using sunlight."',
          tip: 'Test your definition: would a younger child understand it?',
        },
        {
          step: 3,
          title: 'Make vocabulary cards',
          instruction: 'Create simple cards with the word on one side and definition plus picture on the other. Pictures don\'t need to be fancy—a simple drawing or printed image works.',
          tip: 'Keep cards small enough to fit on the pupil\'s desk during the lesson as a reference.',
        },
        {
          step: 4,
          title: 'Find pre-teaching time',
          instruction: 'Identify when to pre-teach: morning registration, TA time before the lesson, end of day for tomorrow\'s lesson, or as homework. Even 5 minutes is enough for 3-5 words.',
          teacherSays: '"Before we start, let\'s look at some words you\'ll hear in Science today."',
        },
        {
          step: 5,
          title: 'Teach the words explicitly',
          instruction: 'Show the word. Say it. Have the pupil say it. Explain the simple definition. Show the picture. Ask the pupil to tell you what it means in their own words.',
          teacherSays: '"This word is chlorophyll. Say it with me: chlor-o-phyll. It\'s the green stuff inside leaves that catches sunlight. Point to the green in this leaf picture."',
        },
        {
          step: 6,
          title: 'Quick review before the lesson',
          instruction: 'At the start of the main lesson, do a 30-second review. Hold up each card briefly. "What does this word mean?" The pupil recalls the definition, reinforcing the memory.',
          teacherSays: '"Before we start, quick check—what does photosynthesis mean? Good. What about chlorophyll?"',
        },
      ],
      commonMistakes: [
        'Pre-teaching too many words (stick to 3-5)',
        'Using complex definitions that need their own definitions',
        'Skipping the picture—visual support helps enormously',
        'Not reviewing at the start of the lesson (the bridge is crucial)',
        'Pre-teaching vocabulary the pupil already knows (check first)',
      ],
      timeToImplement: '5-10 minutes for pre-teaching, 1 minute for review',
    },

    workedExamples: [
      {
        subject: 'Science',
        topic: 'Pre-teaching photosynthesis vocabulary',
        scenario: 'Year 7 Science lesson on photosynthesis. Pupil working at KS1 level with limited vocabulary. Lesson is tomorrow afternoon.',
        steps: [
          {
            action: 'Identify key words (day before)',
            teacherDoes: 'Review lesson plan. Select: photosynthesis, chlorophyll, carbon dioxide, oxygen. Create four vocabulary cards with pictures.',
            pupilDoes: 'N/A - preparation step.',
          },
          {
            action: 'Pre-teach with TA (morning registration)',
            teacherDoes: 'TA shows cards one by one. "This is photosynthesis. It means how plants make food from sunlight. Say it: photo-syn-the-sis."',
            pupilDoes: 'Looks at card. Repeats word. Points to picture of plant in sunshine.',
          },
          {
            action: 'Practice definitions',
            teacherDoes: 'TA asks: "What is chlorophyll?" Provides prompts if needed: "It\'s the green..."',
            pupilDoes: 'Says: "The green stuff that catches sunlight." Matches word cards to picture cards.',
          },
          {
            action: 'Quick review before Science lesson',
            teacherDoes: 'At start of Science: "Before we begin—quick quiz. What does photosynthesis mean?" Shows cards as prompts.',
            pupilDoes: 'Recalls definitions from morning. Feels confident hearing these words in the lesson.',
          },
        ],
      },
      {
        subject: 'Maths',
        topic: 'Pre-teaching fractions vocabulary',
        scenario: 'Year 5 Maths lesson on fractions. Pupil working at KS1 level struggles with mathematical language. Lesson is this afternoon.',
        steps: [
          {
            action: 'Identify key words (break time)',
            teacherDoes: 'Select: numerator, denominator, equivalent. Create cards with fraction pictures showing each concept visually.',
            pupilDoes: 'N/A - preparation step.',
          },
          {
            action: 'Pre-teach at lunch (TA)',
            teacherDoes: 'TA shows fraction diagram. "See this number on top? It\'s called the numerator. Say it: new-mer-ay-tor. It tells us how many pieces we have."',
            pupilDoes: 'Looks at fraction picture. Points to top number. Says "numerator." Counts the shaded pieces.',
          },
          {
            action: 'Link to concrete example',
            teacherDoes: 'TA uses chocolate bar. "If I break this into 4 pieces and eat 3, the denominator is 4—how many pieces total. The numerator is 3—how many I ate."',
            pupilDoes: 'Physically counts pieces. Says: "Denominator is 4 because there are 4 pieces."',
          },
          {
            action: 'Review at lesson start',
            teacherDoes: 'Before Maths: "Remember our fraction words? Point to the numerator. Point to the denominator." Cards on desk for reference.',
            pupilDoes: 'Points correctly. Has vocabulary cards on desk during lesson to check if needed.',
          },
        ],
      },
      {
        subject: 'English',
        topic: 'Pre-teaching literary terms for poetry',
        scenario: 'Year 9 English studying poetry. Pupil working at KS2 level with EHCP noting "difficulties with subject-specific language." Lesson tomorrow.',
        steps: [
          {
            action: 'Identify key words (after school)',
            teacherDoes: 'Select: metaphor, simile, personification. Create cards with simple definitions and example sentences from the poem.',
            pupilDoes: 'N/A - preparation step.',
          },
          {
            action: 'Pre-teach end of day',
            teacherDoes: 'Teacher spends 5 minutes: "Tomorrow we\'re studying poetry. Here are three important words. A simile compares two things using \'like\' or \'as.\' The moon was like a silver coin."',
            pupilDoes: 'Listens. Repeats: "Simile uses like or as." Looks at example: "The moon was LIKE a coin—that\'s the simile."',
          },
          {
            action: 'Send card home',
            teacherDoes: 'Gives vocabulary cards to pupil. "Look at these tonight with someone at home. Try to remember what each word means."',
            pupilDoes: 'Takes cards home. Reviews with parent/carer. Practices saying the words.',
          },
          {
            action: 'Quick check next morning',
            teacherDoes: 'Morning registration: "Remember those poetry words? What\'s a metaphor?" Praise correct answers. Clarify any confusion.',
            pupilDoes: 'Recalls: "Metaphor says something IS something else." Arrives at English lesson confident with the vocabulary.',
          },
        ],
      },
      {
        subject: 'History',
        topic: 'Pre-teaching key terms for the Norman Conquest',
        scenario: 'Year 7 History lesson on the Battle of Hastings. Pupil with EHCP noting language processing difficulties. Lesson is tomorrow.',
        steps: [
          {
            action: 'Step 1: Identify key vocabulary',
            teacherDoes: 'Reviews lesson plan and selects: conquest, cavalry, infantry, succession. Creates vocabulary cards with simple illustrations of each concept.',
            pupilDoes: 'N/A - preparation step.',
          },
          {
            action: 'Step 2: Pre-teach during form time',
            teacherDoes: 'TA shows cards: "This word is cavalry. Say it with me: cav-al-ry. It means soldiers who fight on horses. Look at this picture of knights on horseback."',
            pupilDoes: 'Repeats "cavalry." Points to horses in the picture. Says: "Cavalry are soldiers on horses."',
          },
          {
            action: 'Step 3: Review before History lesson',
            teacherDoes: 'Quick check at lesson start: "What\'s the difference between cavalry and infantry?" Points to vocabulary cards on desk.',
            pupilDoes: 'Uses cards to recall: "Cavalry ride horses, infantry walk." Follows lesson explanation about battle tactics.',
          },
        ],
      },
      {
        subject: 'Geography',
        topic: 'Pre-teaching coastal erosion vocabulary',
        scenario: 'Year 8 Geography lesson on coastal processes. Pupil working below age-related expectations with limited subject-specific vocabulary. Lesson tomorrow afternoon.',
        steps: [
          {
            action: 'Step 1: Select key geographical terms',
            teacherDoes: 'Identifies: erosion, hydraulic action, abrasion, attrition. Creates cards with diagrams showing each process happening to a cliff.',
            pupilDoes: 'N/A - preparation step.',
          },
          {
            action: 'Step 2: Pre-teach with visual support',
            teacherDoes: 'Shows diagram of waves hitting cliff: "Erosion means wearing away. The sea erodes the cliff - it wears it away bit by bit. This picture shows the cliff getting smaller."',
            pupilDoes: 'Traces the cliff shape on the diagram. Says: "Erosion is wearing away." Points to where cliff has got smaller.',
          },
          {
            action: 'Step 3: Connect processes to actions',
            teacherDoes: 'Uses actions: "Hydraulic action - the water pushes into cracks like this [pushes hands together]. Abrasion - rocks scrape like sandpaper [rubbing motion]."',
            pupilDoes: 'Copies the actions. Links each movement to the word. Uses cards during lesson to remember which process is which.',
          },
        ],
      },
      {
        subject: 'Art',
        topic: 'Pre-teaching colour theory vocabulary',
        scenario: 'Year 7 Art lesson on colour mixing and theory. Pupil with EHCP struggles to retain new terminology. Double lesson tomorrow.',
        steps: [
          {
            action: 'Step 1: Prepare visual vocabulary cards',
            teacherDoes: 'Selects: primary, secondary, complementary, hue. Creates cards with colour wheel sections showing each concept clearly.',
            pupilDoes: 'N/A - preparation step.',
          },
          {
            action: 'Step 2: Pre-teach using colour wheel',
            teacherDoes: 'Shows colour wheel: "Primary colours are red, blue, yellow - you can\'t mix these from other colours. They\'re the starting colours." Points to each.',
            pupilDoes: 'Points to primary colours on wheel. Says: "Red, blue, yellow are primary because you can\'t make them."',
          },
          {
            action: 'Step 3: Hands-on connection',
            teacherDoes: 'Gives paint samples: "Mix red and blue - what do you get? Purple. Purple is a secondary colour because you made it from two primaries."',
            pupilDoes: 'Mixes colours physically. Writes "secondary" on card next to purple, orange, green. Arrives at lesson ready to use terms.',
          },
        ],
      },
      {
        subject: 'Music',
        topic: 'Pre-teaching musical elements vocabulary',
        scenario: 'Year 8 Music lesson on analysing a piece of music. Pupil with EHCP has limited musical vocabulary. Lesson is this afternoon.',
        steps: [
          {
            action: 'Step 1: Identify listening vocabulary',
            teacherDoes: 'Selects: tempo, dynamics, texture, pitch. Creates cards with visual representations - tempo shown as speedometer, dynamics as volume dial.',
            pupilDoes: 'N/A - preparation step.',
          },
          {
            action: 'Step 2: Pre-teach with audio examples',
            teacherDoes: 'Plays two clips: "This is fast tempo, this is slow tempo. Tempo means speed. When I ask about tempo, I\'m asking: is it fast or slow?"',
            pupilDoes: 'Listens to clips. Points to "fast" or "slow" on tempo card. Says: "Tempo is the speed of the music."',
          },
          {
            action: 'Step 3: Physical demonstration',
            teacherDoes: 'Claps rhythm fast then slow. Sings loud then quiet. "Dynamics means volume - loud or quiet. Show me loud dynamics with your clap."',
            pupilDoes: 'Claps loudly, then quietly. Matches "dynamics" card to volume. Ready to describe music using correct terms in lesson.',
          },
        ],
      },
      {
        subject: 'PE',
        topic: 'Pre-teaching basketball tactical vocabulary',
        scenario: 'Year 9 PE lesson introducing basketball tactics. Pupil with EHCP struggles to follow verbal instructions during practical lessons. Lesson tomorrow.',
        steps: [
          {
            action: 'Step 1: Select tactical terms',
            teacherDoes: 'Identifies: zone defence, man-to-man marking, screening, fast break. Creates cards with simple court diagrams showing player positions.',
            pupilDoes: 'N/A - preparation step.',
          },
          {
            action: 'Step 2: Pre-teach with diagrams',
            teacherDoes: 'Shows court diagram: "Zone defence means you guard an area, not a person. See how this player stays in this zone? They don\'t follow one person around."',
            pupilDoes: 'Points to zone on diagram. Says: "In zone defence, I stay in my area." Draws the zone on a mini whiteboard.',
          },
          {
            action: 'Step 3: Walk through on court',
            teacherDoes: 'Takes pupil to sports hall briefly: "Stand here. This is your zone. When I say zone defence, you stay in this area. Let\'s walk it."',
            pupilDoes: 'Walks the zone boundaries. Physically experiences the space. Connects the word to the action before the main lesson.',
          },
        ],
      },
      {
        subject: 'MFL',
        topic: 'Pre-teaching grammar terms for French verb conjugation',
        scenario: 'Year 8 French lesson on present tense conjugation. Pupil with EHCP needs grammar terminology explained before the lesson. Lesson tomorrow.',
        steps: [
          {
            action: 'Step 1: Prepare grammar vocabulary',
            teacherDoes: 'Selects: infinitive, conjugate, verb ending, pronoun. Creates cards linking English grammar to French examples.',
            pupilDoes: 'N/A - preparation step.',
          },
          {
            action: 'Step 2: Connect to English first',
            teacherDoes: '"The infinitive is the basic form of a verb - in English it\'s \'to play\', \'to eat\'. In French, infinitives end in -er, -ir, or -re. Look: jouer means to play."',
            pupilDoes: 'Matches English infinitives to French. Says: "Infinitive is the \'to\' form - jouer means to play."',
          },
          {
            action: 'Step 3: Demonstrate conjugation simply',
            teacherDoes: '"Conjugate means changing the verb ending to match who is doing it. I play, you play, he plays - see how it changes? In French: je joue, tu joues."',
            pupilDoes: 'Highlights the changing endings in different colours. Understands "conjugate" means changing endings. Ready for the lesson.',
          },
        ],
      },
      {
        subject: 'DT',
        topic: 'Pre-teaching materials and tools vocabulary',
        scenario: 'Year 7 DT lesson on working with wood. Pupil with EHCP needs to understand safety vocabulary and tool names. Practical lesson tomorrow.',
        steps: [
          {
            action: 'Step 1: Identify essential vocabulary',
            teacherDoes: 'Selects: tenon saw, bench hook, grain direction, vice. Creates cards with photographs of each tool and labelled parts.',
            pupilDoes: 'N/A - preparation step.',
          },
          {
            action: 'Step 2: Pre-teach with real objects',
            teacherDoes: 'Shows actual tools: "This is a tenon saw. It\'s for cutting straight lines in wood. Say it: ten-on saw. Feel how the teeth face one direction."',
            pupilDoes: 'Holds the saw handle safely. Says "tenon saw." Points to the teeth. Matches the real tool to the vocabulary card.',
          },
          {
            action: 'Step 3: Connect to tomorrow\'s task',
            teacherDoes: '"Tomorrow you\'ll use the bench hook and tenon saw together. The bench hook holds the wood still. Let\'s put the wood in it now so you know what to do."',
            pupilDoes: 'Places wood in bench hook. Understands the setup. Can follow instructions in the lesson because vocabulary is familiar.',
          },
        ],
      },
      {
        subject: 'Drama',
        topic: 'Pre-teaching performance techniques vocabulary',
        scenario: 'Year 8 Drama lesson on physical theatre techniques. Pupil with EHCP benefits from knowing terminology before practical work. Lesson this afternoon.',
        steps: [
          {
            action: 'Step 1: Select key techniques',
            teacherDoes: 'Identifies: tableau, levels, proxemics, gesture. Creates cards with photographs of students demonstrating each technique.',
            pupilDoes: 'N/A - preparation step.',
          },
          {
            action: 'Step 2: Pre-teach with demonstration',
            teacherDoes: '"Tableau means a frozen picture - like pressing pause. Everyone freezes in position to show a moment. Watch me freeze... this is a tableau."',
            pupilDoes: 'Watches demonstration. Practises freezing. Says: "Tableau is a frozen picture." Creates own simple tableau.',
          },
          {
            action: 'Step 3: Introduce levels physically',
            teacherDoes: '"Levels means how high or low you are on stage. Stand tall - high level. Crouch down - low level. This creates interesting pictures."',
            pupilDoes: 'Moves between high, medium, and low levels. Connects physical experience to vocabulary. Ready to use terms in lesson.',
          },
        ],
      },
      {
        subject: 'RE',
        topic: 'Pre-teaching world religions vocabulary',
        scenario: 'Year 7 RE lesson comparing religious practices. Pupil with EHCP struggles with unfamiliar religious terminology. Lesson tomorrow.',
        steps: [
          {
            action: 'Step 1: Prepare religious vocabulary',
            teacherDoes: 'Selects: worship, sacred, ritual, pilgrimage. Creates cards with examples from multiple religions to show universal concepts.',
            pupilDoes: 'N/A - preparation step.',
          },
          {
            action: 'Step 2: Pre-teach with examples',
            teacherDoes: '"Sacred means very special and holy. A church is sacred to Christians, a mosque is sacred to Muslims, a temple is sacred to Hindus. Sacred places are treated with respect."',
            pupilDoes: 'Looks at pictures of different sacred places. Says: "Sacred means holy and special." Points to examples on card.',
          },
          {
            action: 'Step 3: Connect to own experience',
            teacherDoes: '"A ritual is something you do the same way each time for a special reason. Like blowing out birthday candles - that\'s a kind of ritual. Religious rituals are similar but for worship."',
            pupilDoes: 'Gives own example of a familiar ritual. Understands the concept through personal connection. Ready to discuss religious rituals.',
          },
        ],
      },
      {
        subject: 'Computing',
        topic: 'Pre-teaching programming vocabulary',
        scenario: 'Year 8 Computing lesson on programming concepts. Pupil with EHCP needs technical vocabulary explained simply. Lesson tomorrow.',
        steps: [
          {
            action: 'Step 1: Select coding vocabulary',
            teacherDoes: 'Identifies: variable, loop, condition, algorithm. Creates cards with real-world analogies and simple code examples.',
            pupilDoes: 'N/A - preparation step.',
          },
          {
            action: 'Step 2: Pre-teach with everyday examples',
            teacherDoes: '"A variable is like a labelled box that stores information. This box is labelled \'score\' and it holds the number 10. The number can change, but the label stays the same."',
            pupilDoes: 'Labels a box "score" and puts counters in it. Changes the number. Says: "Variable stores information that can change."',
          },
          {
            action: 'Step 3: Demonstrate loop with actions',
            teacherDoes: '"A loop repeats an action. Clap three times - that\'s a loop that repeats three times. In code, we write it once and tell it to repeat."',
            pupilDoes: 'Claps three times. Writes simple loop instruction: "repeat 3 times: clap." Understands loop concept before seeing code.',
          },
        ],
      },
      {
        subject: 'PSHE',
        topic: 'Pre-teaching healthy relationships vocabulary',
        scenario: 'Year 9 PSHE lesson on consent and boundaries. Pupil with EHCP benefits from understanding sensitive vocabulary before class discussion. Lesson tomorrow.',
        steps: [
          {
            action: 'Step 1: Prepare sensitive vocabulary carefully',
            teacherDoes: 'Selects: consent, boundaries, respect, pressure. Creates age-appropriate cards with clear, simple definitions and scenarios.',
            pupilDoes: 'N/A - preparation step.',
          },
          {
            action: 'Step 2: Pre-teach in private setting',
            teacherDoes: 'One-to-one: "Consent means agreeing to something by choice, not because you feel you have to. If someone asks to borrow your pen and you say yes - that\'s consent."',
            pupilDoes: 'Practises giving and refusing consent in simple scenarios. Says: "Consent is choosing to say yes."',
          },
          {
            action: 'Step 3: Introduce boundaries concept',
            teacherDoes: '"Boundaries are your personal rules about what\'s okay and what\'s not okay. Everyone\'s boundaries are different. Tomorrow we\'ll discuss this more - you\'ll already know the words."',
            pupilDoes: 'Thinks of one personal boundary. Feels prepared for sensitive discussion. Has vocabulary cards for private reference if needed.',
          },
        ],
      },
    ],

    routines: [
      {
        routine: 'Morning registration vocabulary check',
        context: 'Daily 5-minute slot to pre-teach vocabulary for that day\'s challenging lesson.',
        steps: [
          'TA arrives at registration with vocabulary cards for the day',
          'Shows each card: word, picture, simple definition',
          'Pupil repeats the word and points to the picture',
          'Pupil attempts to say the definition in own words',
          'Cards given to pupil to keep on desk during the lesson',
        ],
        taRole: 'Lead the pre-teaching session. Keep it quick and positive. Don\'t worry if recall isn\'t perfect—the goal is familiarity. Hand cards to pupil for the lesson.',
      },
      {
        routine: 'End-of-day preview',
        context: 'Last 5 minutes of the day used to prepare vocabulary for tomorrow\'s lessons.',
        steps: [
          'Teacher identifies tomorrow\'s challenging vocabulary (2-3 words)',
          'Brief whole-class preview: "Tomorrow in Science, you\'ll hear these words..."',
          'Show each word, give simple definition, show picture',
          'Targeted pupil gets vocabulary cards to take home',
          'Next morning: quick review before lesson starts',
        ],
        taRole: 'Ensure targeted pupil has their cards. Follow up next morning: "Did you look at your cards? Let\'s check—what does photosynthesis mean?"',
      },
    ],

    troubleshooting: [
      {
        problem: 'No time in the day for pre-teaching',
        cause: 'Schedule is packed, or TA unavailable at the right time.',
        solution: 'Use end-of-day preview (2 minutes whole class), send cards home, or pre-teach during transition time. Even 3 minutes makes a difference. Consider pre-teaching for fewer lessons but doing it well.',
      },
      {
        problem: 'Pupil forgets the vocabulary by lesson time',
        cause: 'Pre-teaching was too far in advance, or not reviewed.',
        solution: 'Always do a 30-second review at the start of the lesson. Keep vocabulary cards on the desk as a reference. The goal isn\'t perfect recall—it\'s familiarity. Hearing the word again will trigger the memory.',
      },
      {
        problem: 'Don\'t know which words to choose',
        cause: 'Every word seems important, or unsure what pupil already knows.',
        solution: 'Ask: "Which words, if unknown, will completely block understanding?" Those are your priority. When in doubt, ask the pupil: "Do you know what photosynthesis means?" Their response tells you what to pre-teach.',
      },
      {
        problem: 'Pupil is embarrassed by vocabulary cards',
        cause: 'Visible support makes them feel different from peers.',
        solution: 'Make it normal: offer cards to the whole class ("anyone who wants one"), use a small bookmark-sized format, or put words on a "knowledge organiser" everyone has. Some pupils prefer digital cards on a tablet.',
      },
      {
        problem: 'Pictures are hard to find for abstract concepts',
        cause: 'Some vocabulary (democracy, irony, ratio) doesn\'t have obvious pictures.',
        solution: 'Use diagrams, symbols, or examples instead. For "democracy" show a ballot box or voting image. For "ratio" show grouped objects. For "irony" show a fire station on fire. A visual prompt is better than no visual.',
      },
      {
        problem: 'TA doesn\'t know which vocabulary to pre-teach',
        cause: 'Communication gap between teacher and TA.',
        solution: 'Send vocabulary cards to TA the day before, or keep a shared folder of upcoming vocabulary. A simple text/email the night before works: "Tomorrow\'s Science words: photosynthesis, chlorophyll, carbon dioxide."',
      },
    ],

    scripts: {
      teacher: {
        starting: [
          '"Before the lesson, let\'s learn some important words you\'ll hear today."',
          '"I\'m going to teach you three words now, so when you hear them later, you\'ll already know what they mean."',
          '"These cards will help you in today\'s lesson. Let\'s go through them together."',
        ],
        during: [
          '"Remember the word we learned this morning? Chlorophyll. What does it mean?"',
          '"Check your vocabulary card if you need to."',
          '"You know this word—we practiced it. Photosynthesis. Tell me what it means."',
        ],
        ifStuck: [
          '"Look at your card. What does the picture show?"',
          '"We said this word means... Can you finish the sentence?"',
          '"This is one of our vocabulary words. Let me help you remember—it starts with photo, like photograph, because it uses light..."',
        ],
        ending: [
          '"You used all three vocabulary words today. Well done."',
          '"Remember those words for next time—they\'ll come up again."',
          '"Take your cards home and see if you can teach someone what those words mean."',
        ],
      },
      ta: {
        role: 'Lead pre-teaching sessions during registration or intervention time. Keep vocabulary cards ready. Prompt the pupil to check their cards during lessons. Review briefly before relevant lessons.',
        keyPhrases: [
          '"Let\'s learn these words before the lesson."',
          '"Say it with me: chlor-o-phyll."',
          '"What does this word mean? Use your own words."',
          '"You\'ve got this—we practiced it this morning."',
          '"Check your card."',
        ],
        avoid: [
          'Pre-teaching too many words at once (stick to 3-5)',
          'Using complex language in definitions',
          'Rushing through without checking understanding',
          'Forgetting to give pupil the cards for the lesson',
          'Skipping the review at lesson start',
        ],
      },
    },

    noTaAdaptations: {
      overview: "Pre-teaching without a TA means finding alternative times and formats - it's about preparation, not in-lesson support.",
      keyAdjustments: [
        "Send home a simple vocabulary preview sheet the night before (5 key words with pictures)",
        "Use registration time or form period for quick 5-minute pre-teaching",
        "Create video recordings pupils can watch before the lesson on a tablet",
        "Set up a 'preview station' pupils visit at the start of break before your lesson",
      ],
      independenceStrategies: [
        "Teach pupils to preview their own vocabulary using flash cards you provide",
        "Create self-study pre-teaching packs with clear instructions",
        "Use apps that deliver pre-teaching content (flashcards, short quizzes)",
      ],
      peerSupportOptions: [
        "Pair with a pupil from a higher set who can preview vocabulary together at break",
        "Create peer vocabulary tutors who run through key words before lessons",
        "Use cross-age tutoring with older students for pre-teaching sessions",
      ],
    },
  },

  prepPlan: [
    { time: '3 mins', action: 'Identify key vocabulary', details: 'Look at tomorrow\'s lesson plan. Select 3-5 essential words the pupil won\'t know.' },
    { time: '5 mins', action: 'Create vocabulary cards', details: 'Write word on front, simple definition and picture on back. Can be handwritten.' },
    { time: '2 mins', action: 'Arrange pre-teaching time', details: 'Brief TA or plan to use morning registration. Share cards with TA if they\'re leading.' },
    { time: '1 min', action: 'Plan lesson review', details: 'Note to do 30-second vocabulary check at start of the main lesson.' },
  ],

  printableSummary: `PRE-TEACHING VOCABULARY

WHAT: Teach key vocabulary BEFORE the main lesson so pupils already know the words when they hear them.

WHY: Unfamiliar words overload working memory. If the pupil is trying to decode vocabulary while listening to your explanation, they miss the learning. Pre-teaching removes the decoding burden.

HOW:
1. Identify 3-5 key words from tomorrow's lesson
2. Create simple definitions (no jargon)
3. Make vocabulary cards with pictures
4. Pre-teach: morning registration, TA time, or day before
5. Review for 30 seconds at lesson start
6. Keep cards on pupil's desk during lesson

WHEN TO PRE-TEACH:
- Morning registration (5 mins with TA)
- Intervention time
- End of previous day
- As homework with cards sent home

COMMON MISTAKES:
x Pre-teaching too many words (stick to 3-5)
x Complex definitions that need their own definitions
x Skipping the picture
x No review at lesson start

WHEN YOU SEE:
- Confused by subject-specific language
- "What does that word mean?"
- Stops engaging when new vocabulary appears
- EHCP mentions "limited vocabulary"`,

  quickChecklist: [
    'Identified 3-5 key words for tomorrow\'s lesson',
    'Written simple, pupil-friendly definitions',
    'Created vocabulary cards with pictures',
    'Arranged pre-teaching time (TA, registration, etc.)',
    'Shared cards with TA if they\'re leading',
    'Planned 30-second review at lesson start',
    'Pupil has cards on desk during lesson',
  ],

  ehcpPhrases: [
    'limited vocabulary',
    'difficulties with subject-specific language',
    'struggles to access age-appropriate texts',
    'needs vocabulary support',
    'word-finding difficulties',
    'requires pre-teaching of key concepts',
    'language and communication needs',
    'benefits from visual vocabulary support',
    'limited expressive vocabulary',
  ],

  relatedStrategies: ['visual-supports-now-next', 'chunking-one-step-instructions'],
};
