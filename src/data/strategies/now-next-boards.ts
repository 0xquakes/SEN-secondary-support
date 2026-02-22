import { Strategy } from '@/types';

export const nowNextBoardsStrategy: Strategy = {
  id: 'now-next-boards-001',
  slug: 'now-next-boards',
  title: 'Now-Next Boards',
  shortDescription: 'Visual boards showing current and upcoming activities to reduce transition anxiety and increase predictability.',
  longDescription: 'Now-Next boards provide a simple, powerful visual framework for showing pupils what is happening right now and what comes immediately after. By making the sequence of activities visible and concrete, they dramatically reduce the anxiety that comes from uncertainty about transitions. For pupils who struggle with change, seeing "what comes next" transforms an unpredictable experience into a manageable one.',
  difficulty: 'beginner',
  prepTime: '10-15 mins',
  areaOfNeed: 'Visual & Structural Support',
  subjects: ['English', 'Maths', 'Science', 'History', 'Geography', 'Art', 'Music', 'PE', 'MFL', 'DT', 'Drama', 'RE', 'Computing', 'PSHE'],
  routines: ['Lesson transitions', 'Break times', 'Activity changes', 'Morning routines'],
  tags: ['anxiety', 'transitions', 'predictability', 'autism', 'visual supports', 'change', 'schedules'],

  content: {
    problem: {
      headline: 'Uncertainty about what comes next triggers anxiety',
      description: 'The pupil seems settled during an activity, but as it nears the end, anxiety builds. "What are we doing next? When is break? What happens after that?" They cannot hold the day\'s sequence in their mind. Every transition feels like stepping into the unknown, and that uncertainty creates distress that disrupts learning and wellbeing.',
      signs: [
        'Asks repeatedly "What are we doing next?" or "When is break?"',
        'Becomes visibly anxious as activities near completion',
        'Resists stopping current activities even when prompted',
        'Needs excessive reassurance about upcoming changes',
        'EHCP mentions "anxious about transitions" or "needs visual schedules"',
        'Meltdowns or shutdowns during transition periods',
        'EHCP mentions "difficulties with change"',
      ],
    },

    explanation: {
      definition: 'A Now-Next board is a simple visual display with two sections: NOW (showing the current activity) and NEXT (showing what comes immediately after). Activity cards or symbols are placed in each section and updated before transitions occur. For longer sequences, a THEN section can be added to show one step further ahead.',
      whyItWorks: 'Anxiety often stems from uncertainty. When a pupil cannot predict what will happen next, their brain goes into alert mode, preparing for potential threats. Now-Next boards eliminate this uncertainty by making the immediate future visible and concrete. The pupil can check the board whenever they feel anxious, without having to ask an adult. This builds independence while reducing the cognitive load of trying to remember verbal instructions about the schedule. Crucially, updating the board BEFORE transitions means the pupil sees change coming rather than having it imposed suddenly.',
      keyPrinciples: [
        'Update NEXT before announcing any transition',
        'The board must always reflect reality - never let it become inaccurate',
        'Position the board where the pupil can see it independently',
        'Use consistent symbols or cards the pupil can recognise quickly',
        'Start with Now-Next only; add THEN once the basic system is established',
      ],
    },

    howTo: {
      steps: [
        {
          step: 1,
          title: 'Create the basic board',
          instruction: 'Make a simple board with two clearly labelled sections: NOW on the left and NEXT on the right. Use A4 or A3 card, with Velcro strips for attaching cards, or use a whiteboard with Post-it notes.',
          tip: 'Laminate the board for durability, but don\'t wait for perfect resources - Post-it notes work immediately.',
        },
        {
          step: 2,
          title: 'Prepare activity cards',
          instruction: 'Create small cards for common activities: Maths, English, Reading, Writing, Break, Lunch, PE, Assembly, Pack up, Home time. Use words, pictures/symbols, or both depending on the pupil\'s needs.',
          teacherSays: '"These cards show what we\'re doing. Let\'s look at them together."',
          tip: 'Start with 8-10 cards covering your most frequent activities. Add more as needed.',
        },
        {
          step: 3,
          title: 'Position the board accessibly',
          instruction: 'Place the board where the pupil can see it from their seat without asking permission or standing up. On their desk is ideal for individual boards; at the front for whole-class boards.',
          tip: 'If the pupil needs to ask to see the board, half the benefit is lost.',
        },
        {
          step: 4,
          title: 'Introduce the system explicitly',
          instruction: 'Teach the pupil what the board means and how to use it. Show them how NOW tells them what to do right now, and NEXT shows what is coming. Practice reading the board together.',
          teacherSays: '"This is your Now-Next board. NOW tells you what we\'re doing right now. NEXT shows what comes after. You can look at it whenever you want to know what\'s happening."',
        },
        {
          step: 5,
          title: 'Update BEFORE transitions',
          instruction: 'Always move the cards before you announce a change. The pupil sees the update, processes the upcoming change, and is prepared before it happens. This is the most critical step.',
          teacherSays: '"Watch me update your board. See? NEXT is changing to Reading. That\'s what we\'re doing after this."',
          tip: 'Give a verbal cue as you update so the pupil notices the change.',
        },
        {
          step: 6,
          title: 'Build the checking habit',
          instruction: 'When the pupil asks what\'s happening, redirect them to the board instead of answering verbally. This builds independence and makes the board their go-to resource.',
          teacherSays: '"Great question. Check your board - what does NEXT say?"',
        },
        {
          step: 7,
          title: 'Add THEN when ready (optional)',
          instruction: 'Once the pupil is confident with Now-Next, add a THEN section for longer sequences if needed. This shows one more step into the future. Only add this if the pupil needs to see further ahead.',
          teacherSays: '"I\'ve added THEN to your board. Now you can see even further ahead: NOW, then NEXT, then THEN."',
          tip: 'Not all pupils need THEN. Some find it overwhelming. Follow the pupil\'s lead.',
        },
      ],
      commonMistakes: [
        'Updating the board after announcing the change (defeats the purpose)',
        'Letting the board become inaccurate (destroys trust in the system)',
        'Placing the board where the pupil cannot see it independently',
        'Adding too many sections too quickly (Now-Next-Then-Later-Finally overwhelms)',
        'Removing the board once the pupil "seems fine" (they may be relying on it silently)',
        'Using inconsistent or unclear symbols that the pupil cannot read quickly',
      ],
      timeToImplement: '10-15 minutes prep, immediate use',
    },

    workedExamples: [
      {
        subject: 'English',
        topic: 'Managing a writing lesson with breaks',
        scenario: 'Year 5 pupil becomes anxious during extended writing, constantly asking when they can stop. Working at age-appropriate level but struggles with uncertainty about timing.',
        steps: [
          {
            action: 'Set up the board before the lesson',
            teacherDoes: 'Places NOW card showing "Writing" and NEXT card showing "Brain break". Shows the pupil: "Look, writing now, then a brain break."',
            pupilDoes: 'Sees the sequence. Knows a break is coming.',
          },
          {
            action: 'Remind during the task',
            teacherDoes: 'When pupil asks "When can I stop?", points to the board: "Check your Now-Next. What comes after writing?"',
            pupilDoes: 'Looks at board. Sees "Brain break" in NEXT. Continues writing with less anxiety.',
          },
          {
            action: 'Update before the transition',
            teacherDoes: 'Before announcing the break, updates the board: NOW becomes "Brain break", NEXT becomes "More writing". Says: "Watch me change your board. Break time is moving to NOW."',
            pupilDoes: 'Sees the change before it happens. Transitions smoothly to break.',
          },
          {
            action: 'Continue the pattern',
            teacherDoes: 'Repeats the update-before-change pattern throughout the lesson. Each transition is visible before it is announced.',
            pupilDoes: 'Checks board independently. Transitions become predictable and manageable.',
          },
        ],
      },
      {
        subject: 'Maths',
        topic: 'Supporting transitions between lesson phases',
        scenario: 'Year 7 pupil has meltdowns when asked to stop one activity and start another unexpectedly. EHCP states "difficulties with change" and "needs visual schedules".',
        steps: [
          {
            action: 'Show the lesson structure',
            teacherDoes: 'At lesson start, shows Now-Next board: NOW is "Starter activity", NEXT is "Learning new method". Says: "Here\'s what we\'re doing. I\'ll update this before we change."',
            pupilDoes: 'Sees the plan. Knows what to expect.',
          },
          {
            action: 'Give advance warning via the board',
            teacherDoes: 'Two minutes before the transition, updates NEXT to confirm it. Says quietly: "Look at your board. NEXT is coming soon. Two more minutes on the starter."',
            pupilDoes: 'Sees the upcoming change. Has time to prepare mentally.',
          },
          {
            action: 'Make the transition',
            teacherDoes: 'Moves "Learning new method" to NOW, adds "Practice questions" to NEXT. Says: "Board is updated. We\'re moving to NOW - learning the new method."',
            pupilDoes: 'Sees the change happen on the board first. Transitions without distress.',
          },
          {
            action: 'Use THEN for the full lesson',
            teacherDoes: 'Adds THEN section showing "Plenary" so pupil can see three steps ahead throughout the lesson.',
            pupilDoes: 'Checks board periodically. Knows exactly where they are in the lesson.',
          },
        ],
      },
      {
        subject: 'Science',
        topic: 'Managing a practical lesson with multiple phases',
        scenario: 'Year 8 pupil becomes very anxious during practicals because the sequence of activities is unpredictable. Working at KS2 level and needs high predictability.',
        steps: [
          {
            action: 'Set up detailed Now-Next-Then',
            teacherDoes: 'Creates board with three sections. NOW: "Safety talk", NEXT: "Collect equipment", THEN: "Do experiment". Shows pupil at start of lesson.',
            pupilDoes: 'Sees the full sequence of the practical. Anxiety reduced because the unknown becomes known.',
          },
          {
            action: 'Update as each phase completes',
            teacherDoes: 'After safety talk, shifts cards: NOW becomes "Collect equipment", NEXT becomes "Do experiment", THEN becomes "Write up". Says: "Watch me update - we\'re moving on."',
            pupilDoes: 'Sees progress through the lesson visually. Knows exactly what stage they are at.',
          },
          {
            action: 'Handle an unexpected change',
            teacherDoes: 'Equipment issue means skipping a step. Updates board first: "I need to change our plan. Watch your board - I\'m updating it now." Changes cards to show new sequence.',
            pupilDoes: 'Sees the change on the board before it affects them. Can process the unexpected change because it is made visible.',
          },
          {
            action: 'End with pack-up sequence',
            teacherDoes: 'Final update shows NOW: "Pack up", NEXT: "Plenary", THEN: "Home time". Guides through final transitions using the board.',
            pupilDoes: 'Completes lesson knowing exactly what remains. Transitions to end of lesson smoothly.',
          },
        ],
      },
      {
        subject: 'History',
        topic: 'Source analysis lesson with group work transition',
        scenario: 'Year 9 pupil becomes distressed when moving from individual source analysis to group discussion. EHCP mentions "anxiety around social situations" and "needs clear structure".',
        steps: [
          {
            action: 'Set up board at lesson start',
            teacherDoes: 'Shows Now-Next board: NOW is "Source analysis (on your own)", NEXT is "Group discussion". Says: "You can see exactly what we are doing today. Individual work first, then groups."',
            pupilDoes: 'Sees that group work is coming. Has time to mentally prepare rather than being surprised.',
          },
          {
            action: 'Provide advance warning before group work',
            teacherDoes: 'Five minutes before transition, points to board: "Check your NEXT. Group discussion is coming soon. You will be working with your table." Updates to add THEN: "Written task".',
            pupilDoes: 'Sees group work approaching. Knows it is time-limited because written task comes after.',
          },
          {
            action: 'Make the transition visible',
            teacherDoes: 'Moves cards: NOW becomes "Group discussion", NEXT becomes "Written task". Says: "Board is updated. We are moving to group work now."',
            pupilDoes: 'Transitions to group work knowing exactly when it will end. Can see the written task coming as a return to individual work.',
          },
        ],
      },
      {
        subject: 'Geography',
        topic: 'Fieldwork preparation lesson with multiple activities',
        scenario: 'Year 8 pupil struggles with lessons that have many different components. Becomes overwhelmed when activities change without warning. Working at expected level but needs high predictability.',
        steps: [
          {
            action: 'Show the lesson structure with Now-Next-Then',
            teacherDoes: 'Sets up three-section board: NOW: "Watch video", NEXT: "Fill in worksheet", THEN: "Pack fieldwork bags". Says: "Three activities today. Your board shows them all."',
            pupilDoes: 'Sees the full lesson structure. Knows what to expect from each phase.',
          },
          {
            action: 'Update before each transition',
            teacherDoes: 'After video, shifts cards before speaking to class: NOW becomes "Fill in worksheet", NEXT becomes "Pack fieldwork bags", THEN becomes "Plenary". Says quietly to pupil: "Board updated. Moving on."',
            pupilDoes: 'Sees the change on the board before hearing the class instruction. Transitions without distress.',
          },
          {
            action: 'Handle the practical element',
            teacherDoes: 'For packing bags, updates board to show NOW: "Pack fieldwork bags", NEXT: "Plenary". Breaks down the packing task verbally while board shows overall position in lesson.',
            pupilDoes: 'Knows where they are in the lesson even during a busy practical task. Can focus on the activity without worrying about what comes after.',
          },
        ],
      },
      {
        subject: 'Art',
        topic: 'Mixed media project with messy materials',
        scenario: 'Year 7 pupil becomes anxious when art activities involve unpredictable elements like paint or clay. EHCP states "sensory sensitivities" and "needs to know what is coming".',
        steps: [
          {
            action: 'Preview the lesson sequence',
            teacherDoes: 'Shows Now-Next board: NOW: "Sketch your design", NEXT: "Add paint". Says: "We will do sketching first. Paint comes after - I will warn you before we get the paints out."',
            pupilDoes: 'Sees that painting is coming but not yet. Can focus on sketching without worrying about when paint appears.',
          },
          {
            action: 'Give advance warning for sensory activity',
            teacherDoes: 'Before paint transition, updates board and says: "Look at your board. Paint is about to move to NOW. I am getting the paints ready. You can put on your apron."',
            pupilDoes: 'Has time to prepare for the sensory experience. Can put on protective clothing and mentally ready themselves.',
          },
          {
            action: 'Show clean-up in the sequence',
            teacherDoes: 'Updates to show NOW: "Add paint", NEXT: "Clean up and wash hands". Says: "Your board shows clean-up is next. The messy part has a clear end."',
            pupilDoes: 'Knows the messy activity is time-limited. Can engage with paint knowing clean-up is clearly coming.',
          },
        ],
      },
      {
        subject: 'Music',
        topic: 'Practical lesson with performance element',
        scenario: 'Year 8 pupil enjoys music but becomes very anxious about performing in front of others. Needs to know exactly when performance elements will happen.',
        steps: [
          {
            action: 'Show lesson structure including performance',
            teacherDoes: 'Sets up Now-Next-Then: NOW: "Learn the rhythm", NEXT: "Practice in pairs", THEN: "Perform to class". Says: "Performance is at the end. You have lots of practice time first."',
            pupilDoes: 'Sees that performance is coming but not immediately. Can see the preparation time available.',
          },
          {
            action: 'Update through practice phases',
            teacherDoes: 'Shifts cards as lesson progresses. When NEXT becomes "Perform to class", says: "Performance is moving closer. Check your board - one more step before you perform."',
            pupilDoes: 'Sees performance approaching gradually. No sudden surprises. Can use remaining practice time effectively.',
          },
          {
            action: 'Transition to performance',
            teacherDoes: 'Updates board: NOW: "Perform to class", NEXT: "Pack away". Says: "Performance is NOW. And look - pack away comes straight after. Then we are done."',
            pupilDoes: 'Knows exactly what is happening. Can see the end of the lesson coming after performance.',
          },
        ],
      },
      {
        subject: 'PE',
        topic: 'Games lesson with changing activities',
        scenario: 'Year 9 pupil struggles with the fast-paced changes in PE lessons. Becomes confused and anxious when activities switch rapidly during games sessions.',
        steps: [
          {
            action: 'Set up portable Now-Next board',
            teacherDoes: 'Uses a small laminated board that can be placed on the bench. Shows NOW: "Warm-up", NEXT: "Skills practice". Says: "Your board is here on the bench. Check it any time."',
            pupilDoes: 'Knows where to look for information during the lesson. Can check independently between activities.',
          },
          {
            action: 'Update before whistle signals',
            teacherDoes: 'Before blowing whistle to change activity, walks to board and updates it. Catches pupil\'s eye and points to board, then blows whistle for whole class.',
            pupilDoes: 'Sees the change coming before the whistle. Transitions with the rest of the class rather than being caught off guard.',
          },
          {
            action: 'Show game and cool-down sequence',
            teacherDoes: 'Updates to show NOW: "Game", NEXT: "Cool-down", THEN: "Get changed". Says: "Three things left. Board shows them all."',
            pupilDoes: 'Knows exactly what remains in the lesson. Can participate in the game knowing the sequence to the end.',
          },
        ],
      },
      {
        subject: 'MFL',
        topic: 'French speaking and listening lesson',
        scenario: 'Year 8 pupil becomes highly anxious during speaking activities in French. Needs to know when they will be asked to speak so they can prepare.',
        steps: [
          {
            action: 'Preview speaking activities in advance',
            teacherDoes: 'Shows Now-Next board: NOW: "Listening activity", NEXT: "Speaking in pairs". Says: "Listening first. Speaking comes next - you will practice with your partner, not in front of the class."',
            pupilDoes: 'Sees that speaking is coming. Knows it is pair work, not whole-class performance. Can prepare mentally.',
          },
          {
            action: 'Give warning before speaking transition',
            teacherDoes: 'Before ending listening task, updates board and says: "Check your board. Speaking is moving to NOW soon. You will work with [partner name]."',
            pupilDoes: 'Has time to prepare. Knows exactly who they will work with. Anxiety reduced through predictability.',
          },
          {
            action: 'Show writing activity following speaking',
            teacherDoes: 'Updates to show NOW: "Speaking in pairs", NEXT: "Writing task". Says: "After speaking, you will write. Speaking has a clear end point."',
            pupilDoes: 'Engages with speaking knowing it is time-limited. Can see the transition back to individual written work.',
          },
        ],
      },
      {
        subject: 'DT',
        topic: 'Practical making session with tools',
        scenario: 'Year 7 pupil is anxious about using unfamiliar tools and equipment. EHCP mentions "needs preparation for new experiences" and "benefits from visual structure".',
        steps: [
          {
            action: 'Show making sequence with tool use clearly marked',
            teacherDoes: 'Sets up Now-Next-Then: NOW: "Mark out wood", NEXT: "Use saw (with teacher)", THEN: "Sand edges". Says: "The board shows when you will use each tool. Sawing is next, and I will be with you."',
            pupilDoes: 'Sees the sequence of tool use. Knows teacher support is coming for the challenging part.',
          },
          {
            action: 'Update before tool transitions',
            teacherDoes: 'Before sawing, updates board and says: "Saw is moving to NOW. I am coming to help you. Look at your board - sanding comes after."',
            pupilDoes: 'Prepares for tool use. Knows support is available and the task has a clear end.',
          },
          {
            action: 'Handle unexpected delays',
            teacherDoes: 'If queue for equipment, updates board to show NOW: "Wait for saw", NEXT: "Use saw". Says: "Board shows we are waiting. Sawing is still coming."',
            pupilDoes: 'Understands the delay without anxiety because it is made visible on the board.',
          },
        ],
      },
      {
        subject: 'Drama',
        topic: 'Devising lesson with improvisation elements',
        scenario: 'Year 10 pupil finds the unpredictable nature of drama lessons very challenging. Struggles particularly with improvisation where they do not know what will happen.',
        steps: [
          {
            action: 'Structure the drama lesson visually',
            teacherDoes: 'Shows Now-Next board: NOW: "Warm-up games", NEXT: "Planned group work". Says: "Even in drama, we have a structure. Your board shows what type of activity is happening."',
            pupilDoes: 'Sees that drama has predictable phases. Knows what type of activity to expect.',
          },
          {
            action: 'Distinguish improvisation from scripted work',
            teacherDoes: 'When improvisation is coming, updates board: NOW: "Planned group work", NEXT: "Improvisation (with prompts)". Says: "Improv is next but you will have prompt cards to help."',
            pupilDoes: 'Knows improvisation is coming and that there will be support. Can mentally prepare for the less structured activity.',
          },
          {
            action: 'Show reflection and discussion phases',
            teacherDoes: 'Updates to show NOW: "Improvisation", NEXT: "Watch and discuss", THEN: "Written reflection". Says: "After improv, we sit and watch others, then write. The active part has a clear end."',
            pupilDoes: 'Engages with improvisation knowing exactly what follows. Can see the return to calmer, structured activities.',
          },
        ],
      },
      {
        subject: 'RE',
        topic: 'Discussion-based lesson on ethical issues',
        scenario: 'Year 9 pupil becomes anxious during open-ended discussions where they might be asked to share opinions. Needs to know when discussion elements will occur.',
        steps: [
          {
            action: 'Preview lesson structure including discussion',
            teacherDoes: 'Shows Now-Next board: NOW: "Watch video clip", NEXT: "Think-pair-share". Says: "Discussion comes after the video. You will talk to your partner first, not the whole class."',
            pupilDoes: 'Sees discussion is coming. Knows it starts with partner talk, which is less intimidating.',
          },
          {
            action: 'Prepare for discussion transition',
            teacherDoes: 'Before discussion, updates board and says: "Check your board. Think-pair-share is coming. Think of one thing you want to say to your partner."',
            pupilDoes: 'Has time to prepare a response. Knows exactly what format the discussion will take.',
          },
          {
            action: 'Show individual work following discussion',
            teacherDoes: 'Updates to show NOW: "Think-pair-share", NEXT: "Written response". Says: "After discussing, you write your own response. The talking part will end."',
            pupilDoes: 'Participates in discussion knowing it is time-limited. Can see the return to individual written work.',
          },
        ],
      },
      {
        subject: 'Computing',
        topic: 'Programming lesson with debugging challenges',
        scenario: 'Year 8 pupil becomes frustrated when code does not work and needs to know the structure of support available. EHCP mentions "low frustration tolerance" and "needs clear expectations".',
        steps: [
          {
            action: 'Show lesson phases including help points',
            teacherDoes: 'Sets up Now-Next board: NOW: "Code the first section", NEXT: "Teacher check-in". Says: "You will code, then I will check everyone\'s work. Help is built into the lesson."',
            pupilDoes: 'Sees that teacher support is coming at a specific point. Knows they do not have to struggle alone.',
          },
          {
            action: 'Update to show debugging phase',
            teacherDoes: 'Updates board: NOW: "Teacher check-in", NEXT: "Debug with partner". Says: "Check-in now. Next you will debug together - your board shows this."',
            pupilDoes: 'Knows that if code has errors, structured support is coming. Debugging is expected, not a failure.',
          },
          {
            action: 'Show extension or consolidation',
            teacherDoes: 'Updates to show NOW: "Debug with partner", NEXT: "Extension challenge OR practice task". Says: "Your board shows what is next - you choose extension or more practice."',
            pupilDoes: 'Sees clear options for what comes next. Knows the lesson structure continues predictably.',
          },
        ],
      },
      {
        subject: 'PSHE',
        topic: 'Lesson on relationships with sensitive discussions',
        scenario: 'Year 10 pupil finds PSHE topics emotionally challenging and unpredictable. Needs to know exactly what will be discussed and when.',
        steps: [
          {
            action: 'Preview sensitive content in structure',
            teacherDoes: 'Shows Now-Next board: NOW: "Ground rules reminder", NEXT: "Video on topic". Says: "We start with ground rules, then watch a video. Your board shows each part."',
            pupilDoes: 'Sees the lesson has clear structure. Knows what format each section takes.',
          },
          {
            action: 'Prepare for discussion elements',
            teacherDoes: 'Updates board: NOW: "Video on topic", NEXT: "Written reflection (private)". Says: "After the video, you write your own thoughts. You do not have to share them."',
            pupilDoes: 'Knows reflection is coming and it is private. Can watch video without worrying about being asked to share immediately.',
          },
          {
            action: 'Show optional sharing phase',
            teacherDoes: 'Updates to show NOW: "Written reflection", NEXT: "Optional sharing". Says: "Your board shows sharing is next BUT it says optional. You choose whether to contribute."',
            pupilDoes: 'Sees that sharing is coming but understands it is optional. Can prepare to participate or observe.',
          },
        ],
      },
    ],

    routines: [
      {
        routine: 'Lesson transitions',
        context: 'Moving between activities within a single lesson. Pupil struggles with unexpected changes or unclear sequences.',
        steps: [
          'Before the lesson, set up Now-Next showing first two activities',
          'Two minutes before each transition, draw attention to NEXT: "Look at what\'s coming"',
          'Update the board before announcing the change verbally to the class',
          '"Watch me move the cards. NOW is changing."',
          'After the transition, confirm: "Check your board. What are we doing now?"',
        ],
        taRole: 'Keep the board updated if the teacher is busy with the class. Give the pupil a quiet prompt to check their board before each transition. If they ask "What\'s next?", point to the board rather than answering verbally.',
      },
      {
        routine: 'Break times',
        context: 'Transitioning to and from break or lunch. Pupil becomes anxious about when break is, or struggles to return to class after break.',
        steps: [
          'Show "Break" in NEXT section as the lesson before break progresses',
          'Five minutes before break, confirm: "Check your NEXT. Break is nearly here."',
          'When break arrives, update board to show NOW: "Break", NEXT: "Next lesson/activity"',
          'At return from break, meet pupil and point to board: "Break is finished. Look at NOW - we\'re starting [activity]"',
          'If pupil struggles to return, show the board: "Break was NOW. Now it\'s finished. Look at what NOW shows."',
        ],
        taRole: 'Meet the pupil at the classroom door after break with the updated board visible. Use the board to ease the transition back: "Break is done. Your board shows what\'s now." Avoid verbal negotiation - let the board show the reality.',
      },
    ],

    troubleshooting: [
      {
        problem: 'Pupil ignores the board entirely',
        cause: 'They were not taught how to use it explicitly, or it has become inaccurate so they do not trust it.',
        solution: 'Re-teach the board explicitly. Practice together: "Point to NOW. What does it say? Point to NEXT. What comes after?" Ensure the board is always accurate. Rebuild trust through consistency.',
      },
      {
        problem: 'Pupil becomes fixated on NEXT and cannot focus on NOW',
        cause: 'Anxiety about the upcoming activity is overwhelming. They may be dreading what comes next.',
        solution: 'Cover the NEXT section temporarily if needed. Address what is causing anxiety about the upcoming activity. Consider whether NEXT is showing something aversive that needs support. Sometimes knowing what is coming increases anxiety rather than reducing it - this pupil may need the NEXT revealed closer to the transition.',
      },
      {
        problem: 'The board becomes inaccurate during busy lessons',
        cause: 'Teacher is managing multiple demands and forgets to update the board.',
        solution: 'Brief the TA to own the board updates. Put a visual reminder near your teaching position. If the board becomes wrong, update it immediately and acknowledge: "Sorry, I forgot to update your board. Let me fix it now." Consistency is critical for trust.',
      },
      {
        problem: 'Pupil wants to add THEN, LATER, FINALLY, etc.',
        cause: 'They are seeking more certainty by seeing further ahead.',
        solution: 'Add THEN if it genuinely helps, but resist going beyond three sections. Explain: "We can see three steps ahead. That is enough for now. I will keep updating it so you always know what is coming." Too many sections can increase anxiety rather than reduce it.',
      },
      {
        problem: 'Pupil has a meltdown when the board shows an unwanted activity',
        cause: 'The board is doing its job - showing reality - but reality is distressing.',
        solution: 'The board is not the problem; the upcoming activity is. Use the advance warning the board provides to prepare supports, offer choices, or problem-solve the activity itself. The board gives you time to intervene before the transition.',
      },
      {
        problem: 'Other pupils ask why they do not have a board',
        cause: 'The board is visible and difference is noticed.',
        solution: 'Normalise it: "Some people find it helpful to see what is happening. If you would like one, you can have one." Consider a whole-class visual schedule on the board that benefits everyone while the pupil has their individual board for closer reference.',
      },
    ],

    scripts: {
      teacher: {
        starting: [
          '"This is your Now-Next board. It always shows you what is happening now and what comes next."',
          '"You can look at it whenever you want. You don\'t need to ask me - just check your board."',
          '"I\'ll update it before we change activities, so you\'ll always know what is coming."',
        ],
        during: [
          '"Watch me update your board. See? NEXT is changing."',
          '"Check your Now-Next. What are we doing now?"',
          '"Before you ask me, look at your board. What does NEXT say?"',
          '"I\'m about to update your board. NEXT is nearly becoming NOW."',
        ],
        ifStuck: [
          '"Point to NOW. What does it say? That is what we are doing."',
          '"You can check your board - it will tell you."',
          '"Let me show you how to read the board again."',
        ],
        ending: [
          '"Look at your board - we have done everything it showed today."',
          '"You checked your Now-Next and always knew what was happening. That helped you today."',
          '"Tomorrow your board will show the new day. Same system, new activities."',
        ],
      },
      ta: {
        role: 'Keep the Now-Next board accurate and updated. Redirect the pupil to check the board rather than answering their questions verbally. Give quiet prompts before transitions: "Check your NEXT." Own the board updates if the teacher is busy with the class.',
        keyPhrases: [
          '"Check your Now-Next."',
          '"What does your board say?"',
          '"Let me update your board for you."',
          '"NEXT is coming soon. Have a look."',
        ],
        avoid: [
          'Answering "What are we doing next?" verbally instead of pointing to the board',
          'Letting the board become inaccurate during busy moments',
          'Adding verbal information that contradicts or goes beyond the board',
          'Removing the board because the pupil seems to have learned the routine',
        ],
      },
    },

    noTaAdaptations: {
      overview: "Now-Next boards are designed for independence - once taught, pupils should manage them without adult prompting.",
      keyAdjustments: [
        "Make the board easily accessible on the pupil's desk, not held by an adult",
        "Use a consistent routine: board is always in the same place, same format",
        "Add a 'finished' section so progress is visible without adult confirmation",
        "Include visual timers alongside the Now-Next so pupils can self-pace",
      ],
      independenceStrategies: [
        "Teach a checking routine: 'Every time you finish, look at your board'",
        "Use self-monitoring checklists: 'Did I check my Now-Next board?'",
        "Build board-checking into transition routines the whole class follows",
      ],
      peerSupportOptions: [
        "Pair with a 'board buddy' who reminds them to check at transitions",
        "Use table groups where everyone has a Now-Next and they remind each other",
        "Create peer 'transition helpers' who prompt the whole table to check boards",
      ],
    },
  },

  prepPlan: [
    { time: '5 mins', action: 'Create the board', details: 'A4 or A3 card with NOW and NEXT sections clearly labelled. Add Velcro strips if using cards, or use a whiteboard with Post-it notes.' },
    { time: '5 mins', action: 'Make activity cards', details: 'Create cards for common activities: Maths, English, Reading, Writing, Break, Lunch, PE, Assembly, Pack up. Use words, symbols, or both.' },
    { time: '2 mins', action: 'Position the board', details: 'Place on pupil\'s desk or where they can see it independently from their seat.' },
    { time: '2 mins', action: 'Plan update moments', details: 'Review your lesson plan and note when you will need to update the board (before each transition).' },
    { time: '1 min', action: 'Brief TA', details: 'Explain the board system. Ask them to keep it updated if you are busy, and to redirect the pupil to the board rather than answering verbally.' },
  ],

  printableSummary: `NOW-NEXT BOARDS

WHAT: A simple visual board showing the current activity (NOW) and the upcoming activity (NEXT). Update before transitions so the pupil sees change coming.

WHY: Uncertainty about what comes next triggers anxiety. Now-Next boards make the immediate future visible, reducing anxiety and building independence.

HOW:
1. Create board with NOW and NEXT sections
2. Make activity cards (words, pictures, or both)
3. Position where pupil can see independently
4. Teach them to check it: "Look at your Now-Next"
5. Update BEFORE announcing any transition
6. Redirect verbal questions to the board

WHEN TO ADD THEN:
- Only after Now-Next is well established
- If pupil needs to see further ahead
- Keep to three sections maximum
- Not all pupils need it

KEY PRINCIPLES:
- Update BEFORE transitions, not after
- Board must always be accurate (trust is essential)
- Pupil should be able to check without asking
- Redirect verbal questions to the board

COMMON MISTAKES:
x Updating after announcing changes
x Letting the board become inaccurate
x Placing where pupil cannot see independently
x Adding too many sections too quickly

WHEN YOU SEE:
- Constantly asks "What are we doing next?"
- Anxious as activities near completion
- Meltdowns during transitions
- EHCP mentions "needs visual schedules"`,

  quickChecklist: [
    'Created Now-Next board with clear sections',
    'Made activity cards the pupil can recognise',
    'Positioned board where pupil can see independently',
    'Taught pupil to check the board explicitly',
    'Updated board BEFORE each transition',
    'Kept board accurate throughout the lesson',
    'Redirected verbal questions to the board',
    'Briefed TA on updating and redirecting',
  ],

  ehcpPhrases: [
    'anxious about transitions',
    'needs visual schedules',
    'difficulties with change',
    'requires predictability',
    'struggles with transitions',
    'needs to know what is happening next',
    'anxiety around uncertainty',
    'benefits from visual timetable',
    'requires advance warning of changes',
    'needs routine and structure',
  ],

  relatedStrategies: ['visual-supports-now-next', 'chunking-one-step-instructions', 'task-analysis'],
};
