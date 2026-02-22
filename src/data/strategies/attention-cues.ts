import { Strategy } from '@/types';

export const attentionCuesStrategy: Strategy = {
  id: 'attention-cues-001',
  slug: 'attention-cues',
  title: 'Attention Cues',
  shortDescription: 'Use the pupil\'s name, non-verbal signals, and consistent routines to gain and check attention before giving instructions.',
  longDescription: 'Attention cues ensure you have the pupil\'s focus before you start speaking. For pupils who are easily distracted or have difficulties sustaining attention, instructions delivered without first securing attention simply don\'t land. Using the pupil\'s name, non-verbal signals like a touch on the desk or visual cue, and checking for attention before speaking transforms instruction delivery from hopeful to effective.',
  difficulty: 'beginner',
  prepTime: '5 mins',
  areaOfNeed: 'Processing & Attention',
  subjects: ['English', 'Maths', 'Science', 'History', 'Geography', 'Art', 'Music', 'PE', 'MFL', 'DT', 'Drama', 'RE', 'Computing', 'PSHE'],
  routines: ['Lesson start', 'Instructions', 'Transitions', 'Independent work'],
  tags: ['attention', 'focus', 'instructions', 'non-verbal', 'ADHD', 'direct address'],

  content: {
    problem: {
      headline: 'Instructions given without attention are instructions lost',
      description: 'You explain the task clearly. The whole class starts working. But one pupil sits there, blank-faced, having no idea what to do. They weren\'t ignoring you—they simply weren\'t attending when you spoke. Their attention was elsewhere, and your words went straight past them.',
      signs: [
        'Pupil frequently asks "What do I do?" immediately after instructions',
        'Starts wrong task or does nothing while others begin',
        'Looks at you but seems "elsewhere" mentally',
        'Responds better when you speak directly to them',
        'EHCP mentions "difficulties sustaining attention" or "easily distracted"',
        'EHCP states "needs direct address" or "requires individual attention cues"',
      ],
    },

    explanation: {
      definition: 'Attention cues are deliberate signals you use to gain and verify a pupil\'s focus before delivering instructions. This includes using their name, non-verbal signals (touch on desk, visual cue card, hand signal), proximity, and checking for attention through eye contact or a response before speaking.',
      whyItWorks: 'Attention is the gateway to learning. If the gate is closed, nothing gets through. Pupils with attention difficulties don\'t choose to miss instructions—their attention simply isn\'t where it needs to be. By using a cue before speaking, you open the gate. By checking for attention, you verify it\'s open. This transforms instruction delivery from broadcast (hope they\'re listening) to targeted (know they\'re listening).',
      keyPrinciples: [
        'Say their name first, then pause, then give the instruction',
        'Use non-verbal cues when verbal cues would disrupt others',
        'Check for attention—don\'t assume it',
        'Establish consistent attention-getting routines',
        'Stay close enough for cues to work',
      ],
    },

    howTo: {
      steps: [
        {
          step: 1,
          title: 'Use their name before the instruction',
          instruction: 'Say the pupil\'s name first. Pause briefly. Wait for them to look at you. Then give the instruction. This sequence—name, pause, instruction—is critical.',
          teacherSays: '"Aiden." [Pause, wait for eye contact] "Open your book to page 12."',
          tip: 'The pause is essential. Name-then-immediate-instruction doesn\'t work as well.',
        },
        {
          step: 2,
          title: 'Establish a non-verbal attention cue',
          instruction: 'Agree a non-verbal signal with the pupil for when verbal cues would be disruptive or when they\'re deeply focused elsewhere. This could be a gentle touch on the desk, a tap near their book, or showing a small cue card.',
          teacherSays: '"When I tap your desk like this, it means I need you to look at me. Let\'s practice."',
          tip: 'Practice the cue when stakes are low so it becomes automatic.',
        },
        {
          step: 3,
          title: 'Check for attention before speaking',
          instruction: 'Don\'t assume attention—verify it. Look for eye contact, body orientation toward you, or a verbal acknowledgement. If attention isn\'t there, use your cue again.',
          teacherSays: '"Are you with me? Good. Here\'s what I need you to do..."',
          tip: 'A quick "thumbs up if you\'re ready" works well for whole-class checks.',
        },
        {
          step: 4,
          title: 'Position yourself effectively',
          instruction: 'Move close enough that your cue will work. Trying to gain attention from across the room rarely succeeds. Proximity supports attention.',
          tip: 'Stand near the pupil during key instruction moments. Don\'t hover—just be close.',
        },
        {
          step: 5,
          title: 'Establish a consistent routine',
          instruction: 'Make attention cues predictable. Use the same sequence every time. Predictability helps the pupil recognise when attention is needed.',
          teacherSays: '"Remember, when you hear your name, stop, look at me, and listen."',
        },
        {
          step: 6,
          title: 'Reinforce successful attention',
          instruction: 'When the pupil responds well to your attention cue, acknowledge it briefly. This builds the habit.',
          teacherSays: '"Thank you, Aiden. Good looking. Now, here\'s what we\'re doing..."',
          tip: 'Keep praise brief and move straight to the instruction.',
        },
      ],
      commonMistakes: [
        'Giving the instruction before saying their name (they miss the start)',
        'Saying name and instruction in one breath without pausing',
        'Assuming attention from eye contact (they may be looking but not attending)',
        'Using attention cues inconsistently so the pupil doesn\'t recognise them',
        'Standing too far away for non-verbal cues to work',
        'Forgetting to check for attention during whole-class instructions',
      ],
      timeToImplement: 'Immediate - no resources needed',
    },

    workedExamples: [
      {
        subject: 'English',
        topic: 'Starting a comprehension task',
        scenario: 'Year 8 reading comprehension. One pupil frequently misses instructions because they\'re looking at their book or out the window when you speak to the class.',
        steps: [
          {
            action: 'Gain attention before whole-class instruction',
            teacherDoes: 'Before addressing the class, move near the pupil. Tap desk gently. Wait for them to look up.',
            pupilDoes: 'Looks up from book. Makes eye contact.',
          },
          {
            action: 'Give whole-class instruction',
            teacherDoes: 'Now give the instruction to the class: "Everyone, read the passage on page 34 and answer questions 1 to 3."',
            pupilDoes: 'Hears the instruction because attention was already secured.',
          },
          {
            action: 'Check individual understanding',
            teacherDoes: 'After class instruction, check: "Mia, what page are we on?" Wait for response.',
            pupilDoes: 'Says "Page 34" confirming they heard.',
          },
          {
            action: 'Provide quick redirect if needed',
            teacherDoes: 'If pupil didn\'t catch it: "Page 34, questions 1 to 3. Start with question 1."',
            pupilDoes: 'Opens to correct page, begins reading.',
          },
        ],
      },
      {
        subject: 'Maths',
        topic: 'Transitioning to independent practice',
        scenario: 'Year 7 maths lesson. After teaching input, pupils begin practice. One pupil with ADHD often continues looking at the board or fidgeting and misses the transition.',
        steps: [
          {
            action: 'Use name to signal transition',
            teacherDoes: 'As lesson transitions, say clearly: "Kyle." Pause. Wait for response.',
            pupilDoes: 'Stops fidgeting. Looks at teacher.',
          },
          {
            action: 'Deliver clear instruction',
            teacherDoes: 'Say: "It\'s time to work on your own now. Questions 1 to 5 in your book."',
            pupilDoes: 'Hears instruction clearly because attention was secured first.',
          },
          {
            action: 'Point to resource',
            teacherDoes: 'Point to the textbook and the specific questions while close to the pupil.',
            pupilDoes: 'Opens book to correct page.',
          },
          {
            action: 'Check they\'ve started',
            teacherDoes: 'After 30 seconds, return: "Kyle, which question are you on?" Brief check.',
            pupilDoes: 'Shows they\'ve begun or receives quick redirect if stuck.',
          },
        ],
      },
      {
        subject: 'Science',
        topic: 'Giving safety instructions during practical',
        scenario: 'Year 9 practical lesson. Pupil is excited about the equipment and is visually scanning the room, not attending to safety briefing.',
        steps: [
          {
            action: 'Secure attention before safety instructions',
            teacherDoes: 'Stand near pupil. Say: "Jayden, this is important." Pause. Make eye contact.',
            pupilDoes: 'Stops scanning the room. Looks at teacher.',
          },
          {
            action: 'Deliver key safety point',
            teacherDoes: 'Say: "Goggles on before you touch any equipment. Tell me the rule."',
            pupilDoes: 'Says "Goggles on first" - confirming they heard and understood.',
          },
          {
            action: 'Use visual cue for ongoing attention',
            teacherDoes: 'Hold up the goggles as a visual anchor while explaining: "These stay on the whole time. Not on your forehead—on your eyes."',
            pupilDoes: 'Watches the goggles, attention maintained through visual focus.',
          },
          {
            action: 'Confirm understanding with action',
            teacherDoes: 'Say: "Show me. Put your goggles on now."',
            pupilDoes: 'Puts goggles on correctly, demonstrating they attended to instruction.',
          },
        ],
      },
      {
        subject: 'History',
        topic: 'Analysing a historical source',
        scenario: 'Year 8 lesson on the Industrial Revolution. Pupil is distracted by materials on the desk and misses instructions about source analysis tasks.',
        steps: [
          {
            action: 'Step 1: Secure attention before task explanation',
            teacherDoes: 'Move to pupil\'s desk. Say: "Ellie." Pause. Wait for eye contact before continuing.',
            pupilDoes: 'Stops handling materials on desk. Looks up at teacher.',
          },
          {
            action: 'Step 2: Deliver focused instruction',
            teacherDoes: 'Point to the source document on the desk. Say: "Look at Source A. I need you to find two things that tell us about factory conditions."',
            pupilDoes: 'Follows pointing gesture. Looks at Source A.',
          },
          {
            action: 'Step 3: Confirm task understanding',
            teacherDoes: 'Ask: "What are you looking for?" Wait for response.',
            pupilDoes: 'Says "Two things about factory conditions" - confirming attention and understanding.',
          },
        ],
      },
      {
        subject: 'Geography',
        topic: 'Interpreting an OS map',
        scenario: 'Year 9 fieldwork preparation. Pupil is looking at their own map but not attending to whole-class explanation of grid references.',
        steps: [
          {
            action: 'Step 1: Use name with pause',
            teacherDoes: 'Say: "Tyler." Pause for two seconds. Wait for head to lift from map.',
            pupilDoes: 'Stops tracing finger on map. Looks towards teacher.',
          },
          {
            action: 'Step 2: Direct attention to demonstration',
            teacherDoes: 'Point to the board map. Say: "Eyes on the big map. Watch my finger trace the grid reference."',
            pupilDoes: 'Turns body towards board. Watches demonstration.',
          },
          {
            action: 'Step 3: Check with quick task',
            teacherDoes: 'Say: "Now you try. Find 456 783 on your map. Point to it when you\'ve got it."',
            pupilDoes: 'Locates grid reference on own map. Points to show understanding.',
          },
        ],
      },
      {
        subject: 'Art',
        topic: 'Demonstrating a new technique',
        scenario: 'Year 7 lesson on shading techniques. Pupil is absorbed in their own drawing and misses teacher demonstration at the front.',
        steps: [
          {
            action: 'Step 1: Use non-verbal cue to avoid disrupting creative flow',
            teacherDoes: 'Move close to pupil. Gently tap edge of desk twice. Wait for pupil to look up.',
            pupilDoes: 'Pauses drawing. Looks up at teacher.',
          },
          {
            action: 'Step 2: Direct attention to demonstration',
            teacherDoes: 'Point to the front. Say quietly: "Watch this bit, Chloe. I\'m showing the technique you\'ll need."',
            pupilDoes: 'Turns to watch demonstration at the front.',
          },
          {
            action: 'Step 3: Provide individual check-in after demo',
            teacherDoes: 'After demonstration, return to pupil. Say: "Show me the pencil grip I just demonstrated."',
            pupilDoes: 'Demonstrates correct grip, confirming they attended to the key technique.',
          },
        ],
      },
      {
        subject: 'Music',
        topic: 'Learning a new rhythm pattern',
        scenario: 'Year 8 practical lesson. Pupil is tapping their own rhythm on the desk and not attending to the teacher modelling the correct pattern.',
        steps: [
          {
            action: 'Step 1: Use name and clear stop signal',
            teacherDoes: 'Say firmly: "Marcus." Pause. Hold up flat hand in "stop" gesture. Wait for tapping to stop.',
            pupilDoes: 'Stops tapping. Looks at teacher.',
          },
          {
            action: 'Step 2: Direct listening attention',
            teacherDoes: 'Say: "Listen first. Don\'t play yet - just listen to this rhythm." Play the pattern once slowly.',
            pupilDoes: 'Keeps hands still. Listens to the rhythm pattern.',
          },
          {
            action: 'Step 3: Check attention through echo',
            teacherDoes: 'Say: "Now you. Copy what I just played." Gesture that it\'s their turn.',
            pupilDoes: 'Attempts to reproduce rhythm, demonstrating they listened.',
          },
        ],
      },
      {
        subject: 'PE',
        topic: 'Explaining rules of a game',
        scenario: 'Year 7 outdoor lesson. Pupil is bouncing a ball or chatting with peers while teacher explains game rules to the group.',
        steps: [
          {
            action: 'Step 1: Gain attention with ball cue',
            teacherDoes: 'Say: "Jordan, ball under your arm." Pause. Wait for compliance before continuing.',
            pupilDoes: 'Stops bouncing. Tucks ball under arm. Looks at teacher.',
          },
          {
            action: 'Step 2: Use position check',
            teacherDoes: 'Say: "Face me, feet still. Good. Now listen to the rules."',
            pupilDoes: 'Turns body to face teacher. Stands still.',
          },
          {
            action: 'Step 3: Confirm key rule understood',
            teacherDoes: 'After explanation, ask: "Jordan, what happens if the ball goes out?" Wait for response.',
            pupilDoes: 'Answers the question about the rule, showing they attended.',
          },
        ],
      },
      {
        subject: 'MFL',
        topic: 'Listening to a French audio clip',
        scenario: 'Year 9 French lesson. Pupil is looking at vocabulary list instead of preparing to listen to the audio for a comprehension task.',
        steps: [
          {
            action: 'Step 1: Use name and clear instruction',
            teacherDoes: 'Say: "Aisha." Pause. "Close your vocab book. Listening task now."',
            pupilDoes: 'Closes vocabulary book. Looks at teacher.',
          },
          {
            action: 'Step 2: Prepare attention for audio',
            teacherDoes: 'Say: "You\'re listening for two things: the day and the time. Ready?" Wait for nod or verbal response.',
            pupilDoes: 'Nods or says "Yes" to confirm readiness.',
          },
          {
            action: 'Step 3: Check outcome after listening',
            teacherDoes: 'After audio, go to pupil first. Ask: "What day did you hear?" Wait for response.',
            pupilDoes: 'Gives answer, demonstrating they attended to the listening task.',
          },
        ],
      },
      {
        subject: 'DT',
        topic: 'Demonstrating safe use of tools',
        scenario: 'Year 8 resistant materials lesson. Pupil is handling tools on the bench while teacher explains safety procedures.',
        steps: [
          {
            action: 'Step 1: Secure attention with safety cue',
            teacherDoes: 'Say: "Ryan, tools down on the bench." Pause. Wait for tools to be put down.',
            pupilDoes: 'Places tools down. Looks at teacher.',
          },
          {
            action: 'Step 2: Confirm attention before safety instruction',
            teacherDoes: 'Make eye contact. Say: "This is a safety point. Watch my hands as I show you."',
            pupilDoes: 'Watches teacher\'s hand demonstration.',
          },
          {
            action: 'Step 3: Verify understanding before allowing tool use',
            teacherDoes: 'Say: "Show me how you\'ll hold the saw before you use it."',
            pupilDoes: 'Demonstrates correct grip, proving they attended to safety instruction.',
          },
        ],
      },
      {
        subject: 'Drama',
        topic: 'Explaining a rehearsal task',
        scenario: 'Year 9 lesson on devising. Pupil is chatting with group members or physically warming up while teacher gives rehearsal instructions.',
        steps: [
          {
            action: 'Step 1: Use freeze technique',
            teacherDoes: 'Say: "Freeze everyone." Then specifically: "Leah." Pause. Wait for stillness and eye contact.',
            pupilDoes: 'Stops moving and talking. Makes eye contact with teacher.',
          },
          {
            action: 'Step 2: Deliver clear rehearsal focus',
            teacherDoes: 'Say: "In this rehearsal, your group is working on the freeze-frame for scene two. You have five minutes."',
            pupilDoes: 'Listens to instruction while remaining still.',
          },
          {
            action: 'Step 3: Check understanding before release',
            teacherDoes: 'Ask: "Leah, what\'s your group focusing on?" Wait for response before saying "Go."',
            pupilDoes: 'Says "Freeze-frame for scene two" then joins group activity.',
          },
        ],
      },
      {
        subject: 'RE',
        topic: 'Discussing a moral dilemma',
        scenario: 'Year 8 ethics lesson. Pupil is doodling or looking at materials from another lesson while class discusses a scenario.',
        steps: [
          {
            action: 'Step 1: Use quiet attention cue',
            teacherDoes: 'Move near pupil. Tap desk gently. Make eye contact. Say quietly: "Ben, I want to hear your thoughts on this."',
            pupilDoes: 'Stops doodling. Looks up. Engages with the teacher.',
          },
          {
            action: 'Step 2: Give thinking time with focus',
            teacherDoes: 'Say: "Listen to the next question. I\'ll come back to you for an answer." Move away to ask the question to class.',
            pupilDoes: 'Attends to the question, knowing they\'ll be asked.',
          },
          {
            action: 'Step 3: Return for contribution',
            teacherDoes: 'Come back to pupil. Say: "Ben, what do you think - is it ever right to lie?"',
            pupilDoes: 'Offers their opinion, demonstrating they attended to the discussion.',
          },
        ],
      },
      {
        subject: 'Computing',
        topic: 'Explaining a coding task',
        scenario: 'Year 7 lesson on algorithms. Pupil is clicking around the screen or looking at something unrelated on their computer while teacher explains the task.',
        steps: [
          {
            action: 'Step 1: Use screen cue',
            teacherDoes: 'Say: "Holly, hands off keyboard." Pause. Walk towards pupil. Wait for compliance.',
            pupilDoes: 'Removes hands from keyboard. Looks at teacher.',
          },
          {
            action: 'Step 2: Direct attention to instruction',
            teacherDoes: 'Say: "Look at the board. I\'m explaining the first three steps of the task."',
            pupilDoes: 'Turns to face the board. Watches explanation.',
          },
          {
            action: 'Step 3: Check before releasing to task',
            teacherDoes: 'After explanation, ask: "Holly, what\'s step one?" Wait for response before saying "Go ahead."',
            pupilDoes: 'States step one correctly, then begins task on computer.',
          },
        ],
      },
      {
        subject: 'PSHE',
        topic: 'Circle time discussion',
        scenario: 'Year 8 lesson on healthy relationships. Pupil is looking at the floor or seems disengaged during sensitive whole-class discussion.',
        steps: [
          {
            action: 'Step 1: Use gentle, private attention cue',
            teacherDoes: 'Move near pupil during activity transition. Say quietly: "Zara." Pause. Make eye contact at their level.',
            pupilDoes: 'Lifts head. Makes brief eye contact.',
          },
          {
            action: 'Step 2: Offer supported engagement',
            teacherDoes: 'Say: "I\'d value your input on the next question. You can pass if you want, but I\'ll ask you first."',
            pupilDoes: 'Nods acknowledgement. Prepares to engage.',
          },
          {
            action: 'Step 3: Provide low-pressure check-in',
            teacherDoes: 'When asking the question, look at pupil first. Say: "Zara, any thoughts? Or would you like to pass?"',
            pupilDoes: 'Either contributes or passes - both show they attended and made a choice.',
          },
        ],
      },
    ],

    routines: [
      {
        routine: 'Beginning of lesson attention check',
        context: 'Starting the lesson when the pupil may not be ready to attend',
        steps: [
          'Stand near the pupil\'s desk as lesson begins',
          'Use their name: "Sophie." Pause.',
          'Wait for eye contact or verbal response ("Yes?")',
          'Say: "We\'re starting. Eyes on me/the board."',
          'Begin your lesson only when attention is confirmed',
        ],
        taRole: 'Position yourself where you can give a subtle attention cue (tap on desk, point to teacher) if the pupil doesn\'t respond to their name. Don\'t speak for them—just redirect attention.',
      },
      {
        routine: 'Mid-lesson attention reset',
        context: 'During independent work when attention has drifted',
        steps: [
          'Move close to the pupil without disrupting others',
          'Use the agreed non-verbal cue (tap desk, show cue card)',
          'Wait for pupil to look up',
          'Point to their work or give quiet verbal redirect: "Back to question 3."',
          'Move away once they\'ve re-engaged to avoid hovering',
        ],
        taRole: 'Monitor for attention drift. Use the agreed non-verbal cue. Keep redirects brief and low-key. Track how often resets are needed to inform feedback.',
      },
    ],

    troubleshooting: [
      {
        problem: 'Pupil doesn\'t respond to their name',
        cause: 'They may be hyperfocused elsewhere, or their name has become "background noise" through overuse.',
        solution: 'Move closer before using their name. Try using their name in a slightly different tone, or pair it with a non-verbal cue (tap desk as you say their name). If overuse is the issue, reduce how often you use their name for non-essential reasons.',
      },
      {
        problem: 'Non-verbal cue startles or annoys the pupil',
        cause: 'The cue may be too intrusive, or it wasn\'t agreed in advance.',
        solution: 'Agree the cue together when both calm. Ask: "What\'s a good way for me to get your attention without everyone hearing?" Let them choose from options: tap on desk, visual card, hand signal in their eyeline.',
      },
      {
        problem: 'Pupil makes eye contact but still doesn\'t process the instruction',
        cause: 'Eye contact doesn\'t guarantee attention. They may be looking but not listening.',
        solution: 'Add a response check: "Tell me what you\'re going to do" or "What page?" This confirms processing, not just looking. Keep the check quick and matter-of-fact.',
      },
      {
        problem: 'Using their name constantly feels singling them out',
        cause: 'Overuse of name in front of peers can feel embarrassing.',
        solution: 'Use non-verbal cues more often in whole-class settings. Save name-based attention cues for when you\'re close to the pupil. Build in attention checks for the whole class too, so the pupil isn\'t always the one being named.',
      },
      {
        problem: 'Strategy works but takes too much time',
        cause: 'Checking attention individually feels slower than broadcasting to the class.',
        solution: 'The time spent securing attention saves time on re-explaining. Position yourself near key pupils during instruction. Brief your TA to give attention cues so you can teach while they support.',
      },
      {
        problem: 'Attention gained but lost again quickly',
        cause: 'Attention sustaining is separate from attention getting. Short attention span needs frequent check-ins.',
        solution: 'Break instructions into smaller chunks. Check back more frequently. Combine with chunking strategy. Accept that multiple attention cues may be needed and plan for this.',
      },
    ],

    scripts: {
      teacher: {
        starting: [
          '"[Name]." [Pause] "Are you with me? Good."',
          '"I\'m going to give you an instruction. Ready? Look at me first."',
          '"When you hear your name, stop what you\'re doing and look at me."',
        ],
        during: [
          '"[Name], eyes on me for this bit."',
          '"Check: what are you doing right now? Good, keep going."',
          '"I\'m coming to you next. Be ready to listen."',
        ],
        ifStuck: [
          '"Let me get your attention first. [Name]. Good. Now listen..."',
          '"I can see you\'re busy, but I need you to hear this."',
          '"Stop. Look. Now listen: [instruction]."',
        ],
        ending: [
          '"You listened well when I used your name today."',
          '"Good attention. You heard the instruction first time."',
        ],
      },
      ta: {
        role: 'Support attention cues by positioning near the pupil during key instructions. Use agreed non-verbal cues to redirect attention before the teacher speaks. Help check understanding after instructions are given.',
        keyPhrases: [
          '"[Name], Miss/Sir is about to speak."',
          '"Look at the teacher."',
          '"What did Miss/Sir just say?"',
          '"Show me you\'re ready."',
        ],
        avoid: [
          'Repeating the instruction yourself instead of redirecting attention',
          'Using the pupil\'s name too frequently (it loses impact)',
          'Giving attention cues from across the room',
          'Startling the pupil with sudden touches',
        ],
      },
    },

    noTaAdaptations: {
      overview: "Attention cues are teacher-led whole-class strategies - they don't require TA support at all when implemented consistently.",
      keyAdjustments: [
        "Use whole-class attention signals that include everyone (call-and-response, visual cues)",
        "Position yourself to make eye contact with pupils who need extra support",
        "Use proximity - move near pupils who need attention cues while teaching",
        "Build in automatic attention resets at fixed points in the lesson",
      ],
      independenceStrategies: [
        "Teach self-monitoring: provide a visual checklist of 'ready to learn' behaviours",
        "Use personal attention cue cards pupils can use to self-redirect",
        "Create a 'focus reset' routine pupils can use independently (deep breath, check board, hands ready)",
      ],
      peerSupportOptions: [
        "Assign 'focus partners' who give a quiet signal if their partner misses a cue",
        "Use table points for collective attention - peers encourage each other",
        "Create positive peer pressure through group attention tracking",
      ],
    },
  },

  prepPlan: [
    { time: '2 mins', action: 'Identify key instruction moments', details: 'Note when you give crucial instructions in the lesson—start, transitions, new tasks. Plan to be near the pupil at these points.' },
    { time: '2 mins', action: 'Agree non-verbal cue with pupil', details: 'Before the lesson (or at a calm moment), agree a non-verbal signal: tap on desk, visual card, or hand signal. Practice it once.' },
    { time: '1 min', action: 'Brief TA', details: 'Tell TA which pupil needs attention cues and what the agreed signal is. Ask them to support attention during whole-class instruction.' },
  ],

  printableSummary: `ATTENTION CUES

WHAT: Use deliberate signals to gain and check attention before giving instructions.

WHY: Instructions delivered without attention don't land. You must open the gate before sending information through.

HOW:
1. Say their name first, then pause
2. Wait for eye contact or response
3. Then give the instruction
4. Use non-verbal cues when helpful (tap desk, visual card)
5. Check attention—don't assume it
6. Establish consistent routines

THE SEQUENCE:
Name → Pause → Check → Instruct

NON-VERBAL OPTIONS:
- Gentle tap on desk
- Visual cue card
- Hand signal in their eyeline
- Move into their line of sight
- Point to where you want them to look

COMMON MISTAKES:
x Giving instruction before saying name
x No pause between name and instruction
x Assuming eye contact means attention
x Standing too far away

WHEN YOU SEE:
- "What do I do?" right after instructions
- Blank look while others start working
- Responds better to direct address
- EHCP: "easily distracted" / "needs direct address"`,

  quickChecklist: [
    'Identified key instruction moments in the lesson',
    'Planned to position myself near the pupil for instructions',
    'Agreed a non-verbal attention cue with the pupil',
    'Practiced the sequence: name → pause → check → instruct',
    'Briefed TA on attention cue support',
    'Planned how to check attention, not just assume it',
  ],

  ehcpPhrases: [
    'difficulties sustaining attention',
    'easily distracted',
    'needs direct address',
    'requires individual attention cues',
    'struggles to maintain focus',
    'attention difficulties',
    'needs support to attend to instructions',
    'benefits from adult proximity',
    'requires pre-warning before instructions',
  ],

  relatedStrategies: ['chunking-one-step-instructions', 'visual-supports'],
};
