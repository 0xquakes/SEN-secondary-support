import { Strategy } from '@/types';

export const selfRegulationStrategy: Strategy = {
  id: 'self-regulation-001',
  slug: 'self-regulation-tools',
  title: 'Self-Regulation Tools',
  shortDescription: 'Teach pupils to recognise, monitor, and manage their emotional and sensory states using practical tools and routines.',
  longDescription: 'Self-regulation tools help pupils identify how they are feeling, access strategies to manage big emotions, and return to a state where learning is possible. This includes simplified emotion scales (like zones of regulation), break cards, calm corner protocols, sensory tools, movement breaks, and explicit teaching of self-monitoring skills. The goal is to move from adult-led regulation to pupil-led self-awareness and action.',
  difficulty: 'intermediate',
  prepTime: '15-20 mins',
  areaOfNeed: 'Developing Independence',
  subjects: ['English', 'Maths', 'Science', 'History', 'Geography', 'Art', 'Music', 'PE', 'MFL', 'DT', 'Drama', 'RE', 'Computing', 'PSHE'],
  routines: ['Lesson start', 'Transitions', 'Independent work', 'After break times', 'Assessment situations'],
  tags: ['emotional regulation', 'sensory processing', 'anxiety', 'self-monitoring', 'breaks', 'calm corner', 'zones of regulation'],

  content: {
    problem: {
      headline: 'Dysregulation derails learning before it begins',
      description: 'The pupil arrives at your lesson already wound up. Or they hit a difficulty and suddenly they\'re under the desk, or shouting, or completely shut down. By the time you notice, they\'re beyond the point where talking helps. Learning has stopped. The rest of the lesson becomes damage control.',
      signs: [
        'Pupil becomes dysregulated quickly with little warning',
        'Escalates from calm to crisis with no middle ground',
        'Cannot identify or name how they are feeling',
        'Relies entirely on adults to notice and intervene',
        'EHCP mentions "difficulties with emotional regulation"',
        'EHCP states "needs sensory breaks" or "becomes dysregulated"',
        'Struggles to return to learning after emotional incidents',
        'Sensory overload leads to meltdown or shutdown',
      ],
    },

    explanation: {
      definition: 'Self-regulation tools are practical strategies that help pupils recognise their emotional and sensory state, communicate it, and take action to manage it. This includes emotion scales (simplified zones), break cards, calm corner protocols, sensory tools, movement breaks, and self-monitoring checklists.',
      whyItWorks: 'Many pupils who struggle with regulation don\'t lack the desire to stay calm—they lack the awareness and tools. They don\'t notice they\'re escalating until it\'s too late. They don\'t have words for their feelings. They don\'t know what might help. By teaching explicit awareness (emotion scales), giving communication tools (break cards), providing regulation spaces (calm corners), and offering sensory/movement options, we give them a toolkit. Over time, they move from needing adults to intervene to being able to self-regulate independently.',
      keyPrinciples: [
        'Teach awareness before expecting self-management',
        'Provide tools before expecting them to ask for help',
        'Make regulation strategies available, not punitive',
        'Practice in calm moments, not during crisis',
        'Build from adult-led regulation toward self-regulation',
      ],
    },

    howTo: {
      steps: [
        {
          step: 1,
          title: 'Introduce a simple emotion scale',
          instruction: 'Use a 3-5 point scale with colours, numbers, or images. Green/1 = calm and ready. Yellow/2-3 = starting to feel wobbly. Red/4-5 = struggling, need help. Teach what each level feels like in the body.',
          teacherSays: '"This scale shows how we\'re feeling inside. Green means calm, ready to learn. Yellow means something\'s not quite right. Red means I need help now."',
          tip: 'Keep it simple. Three levels is enough to start. Add nuance later.',
        },
        {
          step: 2,
          title: 'Teach body signals for each zone',
          instruction: 'Help the pupil connect physical sensations to the scale. Green: relaxed shoulders, normal breathing. Yellow: tight tummy, faster heart. Red: clenched fists, hot face, can\'t think clearly.',
          teacherSays: '"When you\'re in the yellow zone, what does your body feel like? Maybe your tummy feels tight, or your hands are fidgety."',
          tip: 'Do this when the pupil is calm—not during a crisis.',
        },
        {
          step: 3,
          title: 'Introduce break cards',
          instruction: 'Give the pupil a card they can show or place on their desk to request a break without speaking. Agree where they go (calm corner) and for how long (start with 2-3 minutes). This must feel safe, not punitive.',
          teacherSays: '"If you feel yourself moving into yellow or red, you can use your break card. No questions asked. Go to the calm corner and I\'ll check on you in 2 minutes."',
          tip: 'Honour the card every time. If it feels punitive, they won\'t use it.',
        },
        {
          step: 4,
          title: 'Set up a calm corner',
          instruction: 'Designate a low-stimulation space in the classroom. Include sensory tools (fidgets, stress ball, weighted lap pad), visual timers, breathing prompt cards, and maybe headphones. Keep it simple and accessible.',
          teacherSays: '"This is our calm corner. When you need to reset, you can come here. There are tools to help you feel better."',
          tip: 'Make it inviting, not a punishment space. Other pupils can use it too.',
        },
        {
          step: 5,
          title: 'Teach specific regulation strategies',
          instruction: 'Explicitly teach 2-3 strategies the pupil can use: deep breathing (in for 4, out for 6), wall push-ups, squeezing a stress ball, counting backwards from 10. Practice these when calm.',
          teacherSays: '"Let\'s practise our calming breaths now while we\'re feeling good, so your body remembers how to do it when things feel tricky."',
          tip: 'Different strategies work for different pupils. Offer choice.',
        },
        {
          step: 6,
          title: 'Build in movement breaks',
          instruction: 'Schedule regular movement breaks before dysregulation happens. This might be a "brain break" for the whole class, or a specific movement task for the pupil (delivering a message, getting equipment).',
          teacherSays: '"Every 20 minutes, we\'ll have a quick movement break. Stand up, stretch, shake it out."',
          tip: 'Proactive movement prevents reactive crisis.',
        },
        {
          step: 7,
          title: 'Teach self-monitoring',
          instruction: 'Use a simple check-in routine where the pupil rates their zone at set points (start of lesson, after 15 mins, after a task). This builds awareness of their patterns.',
          teacherSays: '"Point to your zone. Are you green, yellow, or red right now? What might help you stay green?"',
          tip: 'Celebrate accurate self-assessment, not just being "green".',
        },
      ],
      commonMistakes: [
        'Only teaching regulation strategies during crisis (too late)',
        'Making the calm corner feel like a punishment or isolation',
        'Not honouring the break card when the pupil uses it',
        'Expecting the pupil to self-regulate before teaching awareness',
        'Removing sensory tools as a consequence for behaviour',
        'Skipping movement breaks when "there\'s not enough time"',
      ],
      timeToImplement: '15-20 minutes setup, ongoing practice',
    },

    workedExamples: [
      {
        subject: 'English',
        topic: 'Extended writing with regulation check-ins',
        scenario: 'Year 8 pupil becomes frustrated during writing tasks. EHCP mentions "difficulties with emotional regulation" and "needs sensory breaks". Working at KS2 level, finds sustained writing overwhelming.',
        steps: [
          {
            action: 'Pre-task check-in',
            teacherDoes: 'Before starting, points to emotion scale on desk. "Point to your zone." Pupil points to green. "Good. Remember, if you move to yellow, you can use your break card."',
            pupilDoes: 'Points to green on scale. Acknowledges break card on desk.',
          },
          {
            action: 'Chunk task with movement',
            teacherDoes: 'Breaks writing into 3 sentences. "Write your first sentence, then stand up and stretch before the second." Provides stress ball for fidgeting while thinking.',
            pupilDoes: 'Writes first sentence. Uses stress ball. Stands and stretches. Returns to second sentence.',
          },
          {
            action: 'Mid-task check-in',
            teacherDoes: 'After sentence 2, quietly asks "Where are you on your scale now?" Pupil points to yellow. "Good noticing. What might help? Break card or wall push-ups?"',
            pupilDoes: 'Points to yellow. Chooses wall push-ups. Does 5 push-ups against the wall. Returns calmer.',
          },
          {
            action: 'Successful completion',
            teacherDoes: '"You finished all three sentences and you noticed when you were getting to yellow. That\'s brilliant self-monitoring."',
            pupilDoes: 'Completes task. Identifies own regulation strategies used.',
          },
        ],
      },
      {
        subject: 'Maths',
        topic: 'Problem-solving with sensory supports',
        scenario: 'Year 7 pupil becomes dysregulated when faced with unfamiliar maths problems. EHCP notes "becomes dysregulated when challenged" and "benefits from sensory regulation strategies".',
        steps: [
          {
            action: 'Set up sensory supports',
            teacherDoes: 'Before lesson, places fidget cube and weighted lap pad on desk. Shows emotion scale. "These are here if you need them. No need to ask."',
            pupilDoes: 'Sees supports available. Places lap pad across legs.',
          },
          {
            action: 'Introduce challenging problem',
            teacherDoes: 'Says "This problem is tricky. It\'s okay to find it hard. Where are you on your scale?" Watches for signs of escalation.',
            pupilDoes: 'Points to green/yellow border. Picks up fidget cube.',
          },
          {
            action: 'Provide scaffolded support',
            teacherDoes: 'Breaks problem into steps. After each step, pauses. "Still okay? You\'re using your fidget cube—good strategy."',
            pupilDoes: 'Works through steps with fidget support. Stays regulated.',
          },
          {
            action: 'Reflect on success',
            teacherDoes: '"You did a hard problem and stayed in control. What helped?" Pupil identifies lap pad and fidget cube.',
            pupilDoes: 'Identifies successful strategies. Builds self-awareness.',
          },
        ],
      },
      {
        subject: 'Science',
        topic: 'Managing a busy practical lesson',
        scenario: 'Year 9 pupil struggles with sensory overload during practical work. EHCP states "needs sensory breaks" and "sensory processing difficulties lead to behavioural responses".',
        steps: [
          {
            action: 'Pre-lesson preparation',
            teacherDoes: 'Warns pupil in advance about noisy practical. Reviews calm corner location and break card. "If it gets too loud, you can use ear defenders or your break card."',
            pupilDoes: 'Knows what to expect. Has ear defenders and break card ready.',
          },
          {
            action: 'Early intervention',
            teacherDoes: 'Notices pupil covering ears during noisy section. Quietly moves closer. "You look like you\'re in yellow. Ear defenders, or do you need the calm corner?"',
            pupilDoes: 'Takes ear defenders. Continues with reduced sensory input.',
          },
          {
            action: 'Scheduled movement break',
            teacherDoes: 'Halfway through, gives pupil a job. "Take this equipment back to the prep room." This provides a legitimate break from the busy environment.',
            pupilDoes: 'Leaves classroom briefly. Returns calmer after movement and reduced stimulation.',
          },
          {
            action: 'End of lesson check-out',
            teacherDoes: '"You managed a noisy practical today. You used ear defenders and had a movement break. How are you feeling now?"',
            pupilDoes: 'Points to green. Identifies strategies that helped.',
          },
        ],
      },
      {
        subject: 'History',
        topic: 'Analysing sources with emotional regulation',
        scenario: 'Year 8 pupil becomes frustrated when asked to interpret historical sources. EHCP states "difficulties with emotional regulation" and "becomes dysregulated when faced with challenging tasks".',
        steps: [
          {
            action: 'Step 1: Pre-task zone check',
            teacherDoes: 'Before introducing sources, checks in quietly. "We\'re going to look at some tricky sources today. Point to your zone." Places stress ball within reach.',
            pupilDoes: 'Points to green zone. Acknowledges stress ball is available.',
          },
          {
            action: 'Step 2: Scaffold with regulation breaks',
            teacherDoes: 'Breaks source analysis into small steps. After each step, prompts: "How\'s your zone? You\'ve done the first part—take a moment to squeeze your stress ball before we move on."',
            pupilDoes: 'Completes first step. Uses stress ball. Checks own zone before continuing.',
          },
          {
            action: 'Step 3: Celebrate self-regulation',
            teacherDoes: '"You noticed you were getting frustrated and used your stress ball. That\'s exactly what good historians do—they take a moment to think clearly."',
            pupilDoes: 'Identifies that pausing helped them think more clearly about the source.',
          },
        ],
      },
      {
        subject: 'Geography',
        topic: 'Fieldwork data collection with sensory awareness',
        scenario: 'Year 9 pupil struggles with outdoor fieldwork due to sensory overload. EHCP notes "sensory processing difficulties" and "requires support to regulate in unfamiliar environments".',
        steps: [
          {
            action: 'Step 1: Pre-fieldwork preparation',
            teacherDoes: 'Before leaving classroom, reviews regulation tools. "Fieldwork can be overwhelming. Here\'s your ear defenders and break signal. If you need to step back, show me this card."',
            pupilDoes: 'Puts ear defenders in pocket. Understands break signal. Knows where quiet space is.',
          },
          {
            action: 'Step 2: Regular check-ins during fieldwork',
            teacherDoes: 'Every 10 minutes, catches pupil\'s eye and shows zone hand signal. When pupil signals yellow, quietly says: "Good noticing. Put on your ear defenders and take 5 deep breaths."',
            pupilDoes: 'Signals yellow zone. Uses ear defenders. Takes breaths. Returns to green.',
          },
          {
            action: 'Step 3: Structured break',
            teacherDoes: 'Midway through, provides planned task that allows a break: "Can you take the equipment bag back to the minibus? Take your time."',
            pupilDoes: 'Takes equipment to quieter space. Returns regulated and ready to continue data collection.',
          },
        ],
      },
      {
        subject: 'Art',
        topic: 'Managing frustration during practical work',
        scenario: 'Year 7 pupil becomes dysregulated when artwork doesn\'t go as planned. EHCP mentions "struggles to manage emotions" and "perfectionist tendencies lead to emotional outbursts".',
        steps: [
          {
            action: 'Step 1: Set expectations about mistakes',
            teacherDoes: 'Before practical begins: "In art, things often don\'t go perfectly first time. That\'s part of the process. Remember your zone scale—if you feel yourself going yellow, pause and use your calming strategies."',
            pupilDoes: 'Sees emotion scale on desk. Knows fidget tool and break card are available.',
          },
          {
            action: 'Step 2: Early intervention',
            teacherDoes: 'Notices pupil scrubbing at work with eraser. Approaches calmly: "I can see you\'re frustrated. What zone are you in?" Pupil says yellow. "Let\'s put the pencil down for 30 seconds. Wall push-ups or breathing?"',
            pupilDoes: 'Identifies yellow zone. Chooses wall push-ups. Does 5 push-ups. Returns calmer.',
          },
          {
            action: 'Step 3: Reframe and continue',
            teacherDoes: '"You stopped before you got really frustrated. That\'s brilliant. Now, let\'s look at this together—what part is working well?"',
            pupilDoes: 'Identifies positive aspects of work. Continues with lower frustration.',
          },
        ],
      },
      {
        subject: 'Music',
        topic: 'Ensemble practice with sensory regulation',
        scenario: 'Year 8 pupil finds group music practice overwhelming due to noise levels. EHCP states "sensory overload leads to meltdown" and "needs sensory breaks throughout the day".',
        steps: [
          {
            action: 'Step 1: Proactive sensory planning',
            teacherDoes: 'Before ensemble practice: "It\'s going to get loud today. You\'ve got your ear defenders and your break card. Where are you on your scale right now?"',
            pupilDoes: 'Points to green. Has ear defenders ready. Knows they can use break card.',
          },
          {
            action: 'Step 2: Monitor and intervene early',
            teacherDoes: 'During loud section, watches for signs of overload. Sees pupil covering ears. Signals quietly: "Ear defenders on. You\'re doing well." After section ends: "Quick zone check?"',
            pupilDoes: 'Puts on ear defenders during loud passages. Signals yellow but manageable.',
          },
          {
            action: 'Step 3: Scheduled quiet role',
            teacherDoes: 'Gives pupil a role that allows brief quiet time: "Can you sort the sheet music in the practice room next door? Come back in 3 minutes."',
            pupilDoes: 'Takes break in quieter space. Returns regulated for final section of lesson.',
          },
        ],
      },
      {
        subject: 'PE',
        topic: 'Team games with regulation strategies',
        scenario: 'Year 9 pupil becomes dysregulated during competitive team sports. EHCP mentions "difficulties with emotional regulation" and "competition triggers anxiety and anger responses".',
        steps: [
          {
            action: 'Step 1: Pre-game regulation plan',
            teacherDoes: 'Before game starts: "Remember, if things feel intense, you can take yourself to the bench for 2 minutes—no questions asked. What\'s your calm-down strategy?"',
            pupilDoes: 'Confirms strategy: deep breaths and counting to 10. Knows bench is available.',
          },
          {
            action: 'Step 2: In-game check-in',
            teacherDoes: 'During natural break, quietly asks: "Zone check—where are you?" Pupil indicates yellow. "Good noticing. Take 30 seconds on the bench, do your breathing, come back when you\'re green."',
            pupilDoes: 'Goes to bench. Uses deep breathing. Counts to 10. Returns to game.',
          },
          {
            action: 'Step 3: End of lesson reflection',
            teacherDoes: '"You used your bench break today and came back calmer. That takes real self-awareness. What did you notice in your body before you went to the bench?"',
            pupilDoes: 'Identifies body signals: racing heart, clenched fists. Links these to yellow zone.',
          },
        ],
      },
      {
        subject: 'MFL',
        topic: 'Speaking activities with anxiety management',
        scenario: 'Year 10 pupil experiences anxiety during speaking assessments in French. EHCP notes "anxiety impacts classroom participation" and "requires support to regulate during verbal tasks".',
        steps: [
          {
            action: 'Step 1: Pre-speaking regulation',
            teacherDoes: 'Before speaking activity: "Let\'s check in. Point to your zone." Pupil points to yellow. "That\'s normal before speaking. Let\'s do 3 deep breaths together. In for 4, out for 6."',
            pupilDoes: 'Identifies yellow zone (nervous). Does breathing exercise with teacher. Moves towards green.',
          },
          {
            action: 'Step 2: Scaffolded speaking with check-ins',
            teacherDoes: 'Breaks speaking into smaller parts. After first phrase: "Excellent. How\'s your zone?" Provides fidget under desk. "You can squeeze this while you think."',
            pupilDoes: 'Speaks first phrase. Uses fidget. Stays regulated through shorter chunks.',
          },
          {
            action: 'Step 3: Acknowledge and build confidence',
            teacherDoes: '"You managed your nerves brilliantly. You used breathing before and your fidget during. What helped most?"',
            pupilDoes: 'Reflects that breathing beforehand helped most. Adds this to personal regulation toolkit.',
          },
        ],
      },
      {
        subject: 'DT',
        topic: 'Practical workshop with frustration management',
        scenario: 'Year 8 pupil becomes frustrated when practical work goes wrong in DT. EHCP states "becomes dysregulated when challenged" and "needs explicit teaching of self-regulation strategies".',
        steps: [
          {
            action: 'Step 1: Anticipate challenges',
            teacherDoes: 'Before practical: "Woodwork can be tricky. Things might not work first time. Your emotion scale and break card are on your bench. What\'s your plan if things get frustrating?"',
            pupilDoes: 'Identifies plan: put tools down, squeeze stress ball, ask for help if still stuck.',
          },
          {
            action: 'Step 2: Intervene at yellow',
            teacherDoes: 'Notices pupil sawing aggressively. Approaches calmly: "Pause there. What zone?" Pupil admits yellow. "Good. Tools down. Stress ball. I\'ll come back in one minute."',
            pupilDoes: 'Puts down saw. Uses stress ball. Takes a minute to regulate.',
          },
          {
            action: 'Step 3: Problem-solve when calm',
            teacherDoes: 'Returns after one minute: "Better? Let\'s look at this together. The saw was going off line—here\'s a trick to fix it." Demonstrates calmly.',
            pupilDoes: 'Watches demonstration. Tries again with better technique. Stays in green zone.',
          },
        ],
      },
      {
        subject: 'Drama',
        topic: 'Managing emotions during improvisation',
        scenario: 'Year 7 pupil struggles with unpredictability of improvisation tasks. EHCP mentions "anxiety in unstructured situations" and "requires predictability to maintain regulation".',
        steps: [
          {
            action: 'Step 1: Provide structure within improvisation',
            teacherDoes: 'Before improv: "I know improv feels unpredictable. Here\'s the scenario and your starting line. If you need to pause, say \'freeze\' and step out of the scene. That\'s allowed."',
            pupilDoes: 'Understands the scenario. Knows escape word ("freeze") is available.',
          },
          {
            action: 'Step 2: Check-in during activity',
            teacherDoes: 'During a pause in the scene, quietly asks: "Zone check?" Pupil shows yellow. "That\'s brave to keep going in yellow. Do you want to continue or take a moment?"',
            pupilDoes: 'Chooses to continue with awareness of their state. Uses deep breath before next line.',
          },
          {
            action: 'Step 3: Reflect on coping',
            teacherDoes: '"You did improv today even though it felt uncomfortable. You used your breathing and you knew you could say freeze. How did it feel to have that safety net?"',
            pupilDoes: 'Reflects that knowing escape was possible made it easier to try. Stayed more regulated.',
          },
        ],
      },
      {
        subject: 'RE',
        topic: 'Discussion of emotive topics with regulation support',
        scenario: 'Year 10 pupil becomes emotionally overwhelmed during discussions about death, suffering, or injustice. EHCP notes "difficulty recognising emotions" and "needs support to process emotional content".',
        steps: [
          {
            action: 'Step 1: Pre-warn about content',
            teacherDoes: 'Before lesson: "Today we\'re discussing a sensitive topic. It\'s okay to have feelings about this. Your break card is there if you need space. Let\'s check your zone before we start."',
            pupilDoes: 'Points to green. Knows break card is available. Feels prepared for content.',
          },
          {
            action: 'Step 2: Provide processing time',
            teacherDoes: 'After presenting emotive content, pauses: "Take a moment. How is everyone feeling? [To target pupil quietly] Where are you on your scale?"',
            pupilDoes: 'Identifies yellow. Uses grounding technique (feeling feet on floor) that was pre-taught.',
          },
          {
            action: 'Step 3: Offer alternative participation',
            teacherDoes: '"You can share your thoughts out loud, write them down, or just listen today. There\'s no wrong choice. What feels manageable?"',
            pupilDoes: 'Chooses to write thoughts. Stays regulated. Participates in a way that feels safe.',
          },
        ],
      },
      {
        subject: 'Computing',
        topic: 'Debugging code with frustration tolerance',
        scenario: 'Year 8 pupil becomes dysregulated when code doesn\'t work. EHCP states "low frustration tolerance" and "becomes dysregulated when things don\'t go as expected".',
        steps: [
          {
            action: 'Step 1: Normalise errors',
            teacherDoes: 'Before coding: "Bugs happen to everyone. Professional programmers spend most of their time debugging. When you hit an error, that\'s not failure—that\'s coding. Check your zone before you start."',
            pupilDoes: 'Points to green. Understands errors are expected. Has regulation tools on desk.',
          },
          {
            action: 'Step 2: Structured debugging with breaks',
            teacherDoes: 'Notices pupil getting frustrated at error message. Approaches: "Error found—good. What zone?" Pupil says yellow. "Step back from the screen. Look at the wall for 10 seconds. Then we\'ll debug together."',
            pupilDoes: 'Steps back. Looks away from screen. Takes breath. Returns calmer.',
          },
          {
            action: 'Step 3: Celebrate persistence',
            teacherDoes: '"You found the bug and fixed it. More importantly, you noticed you were frustrated and took a break. That\'s what good programmers do."',
            pupilDoes: 'Identifies that stepping back helped them see the error more clearly.',
          },
        ],
      },
      {
        subject: 'PSHE',
        topic: 'Discussing personal topics with emotional safety',
        scenario: 'Year 9 pupil finds PSHE topics about relationships and identity triggering. EHCP mentions "emotional dysregulation" and "requires support when discussing personal matters".',
        steps: [
          {
            action: 'Step 1: Establish safety before content',
            teacherDoes: 'Before lesson: "Today\'s topic might bring up feelings. That\'s completely normal. You\'ve got your break card and you can step out to the quiet space if needed. Let\'s check in—where are you?"',
            pupilDoes: 'Points to green. Knows quiet space location. Has break card ready.',
          },
          {
            action: 'Step 2: Monitor throughout',
            teacherDoes: 'During discussion, watches for signs of dysregulation. Notices pupil looking down, fidgeting. Quietly: "Zone check?" Pupil signals yellow. "Take your card. Quiet space. I\'ll check on you in 3 minutes."',
            pupilDoes: 'Uses break card. Goes to quiet space. Uses calming strategies independently.',
          },
          {
            action: 'Step 3: Supported return',
            teacherDoes: 'After 3 minutes, checks in: "How are you doing? Would you like to come back, or do you need longer? You can rejoin whenever you\'re ready."',
            pupilDoes: 'Indicates ready to return. Rejoins lesson. Teacher provides written notes of missed content.',
          },
        ],
      },
    ],

    routines: [
      {
        routine: 'Lesson start check-in',
        context: 'Beginning of every lesson. Pupils arrive in different states. Need to catch dysregulation early.',
        steps: [
          'As pupils settle, ask target pupil to point to their zone (can be private gesture)',
          'If green: "Great, you\'re ready to learn."',
          'If yellow: "Thanks for letting me know. What might help? Fidget? Quick walk? Let\'s sort that now."',
          'If red: "Okay, let\'s use the calm corner first. I\'ll come and check on you in 2 minutes."',
        ],
        taRole: 'Do the check-in quietly at the pupil\'s desk. Have sensory tools ready to offer. Don\'t make it a big announcement. If pupil is red, accompany them to calm corner.',
      },
      {
        routine: 'Proactive movement breaks',
        context: 'Every 15-20 minutes during extended tasks. Prevents dysregulation before it happens.',
        steps: [
          'Set a visual timer for 15-20 minutes',
          'When timer ends, everyone stops for a 1-minute movement break',
          'Options: stand and stretch, walk to the window and back, 5 star jumps, wall push-ups',
          'Resume task. Reset timer.',
        ],
        taRole: 'Model the movement break enthusiastically. Ensure the target pupil participates. For some pupils, offer a specific movement task rather than choice.',
      },
    ],

    troubleshooting: [
      {
        problem: 'Pupil won\'t use the break card',
        cause: 'They may see it as embarrassing, or previous breaks felt punitive. Or they don\'t recognise when they need it.',
        solution: 'Make break cards normal—offer them to multiple pupils. Ensure breaks are genuinely calming, not isolating. Teach body signal awareness so they notice earlier. Try a more discreet signal (touching their ear, moving a token on their desk).',
      },
      {
        problem: 'Pupil uses calm corner constantly to avoid work',
        cause: 'The work may be too hard, or the calm corner is more appealing than the task. The function of the behaviour is escape.',
        solution: 'Review task difficulty. Make work more achievable. Limit calm corner time (2-3 minutes with visual timer). Have a planned conversation: "I notice you\'re using the corner a lot. Let\'s work out what\'s making lessons feel hard."',
      },
      {
        problem: 'Other pupils complain it\'s unfair',
        cause: 'They see fidgets, breaks, and calm corners as privileges rather than needs.',
        solution: 'Normalise regulation for everyone: "Some people need glasses to see. Some people need movement to think. We all have different brains." Consider offering some tools class-wide.',
      },
      {
        problem: 'Pupil escalates too fast—goes from green to red instantly',
        cause: 'They may not have enough awareness of the yellow zone yet. Or there are specific triggers causing sudden escalation.',
        solution: 'Increase check-in frequency (every 10 minutes). Look for patterns—what happened right before? Teach body awareness explicitly. Consider whether yellow zone is actually being masked.',
      },
      {
        problem: 'Sensory tools become a distraction',
        cause: 'The novelty of fidgets, or using them for play rather than regulation.',
        solution: 'Teach explicit rules: "Fidgets stay in your hand or on your desk. If they leave your desk, we\'ll try a different tool." Offer tools that are less visually interesting. Review whether the pupil actually needs sensory input or is using tools for stimulation.',
      },
      {
        problem: 'Strategies work sometimes but not others',
        cause: 'Different triggers need different strategies. What works for frustration may not work for sensory overload.',
        solution: 'Map triggers to strategies. Create a personal "menu" of options: "When I feel frustrated, I can try... When it\'s too noisy, I can try..." Build pupil\'s awareness of what works when.',
      },
    ],

    scripts: {
      teacher: {
        starting: [
          '"Let\'s check in. Point to your zone—are you green, yellow, or red?"',
          '"Your break card and fidget tools are on your desk. Use them whenever you need to."',
          '"Remember, if you feel yourself going into yellow, that\'s the time to do something about it."',
        ],
        during: [
          '"I can see you\'re working hard. How\'s your zone looking?"',
          '"Good noticing—you picked up your stress ball. That\'s smart self-regulation."',
          '"You look like you might be moving into yellow. What could help right now?"',
        ],
        ifStuck: [
          '"I can see things are feeling hard. Let\'s use the calm corner for 2 minutes."',
          '"Your body is telling you something. Let\'s take 5 deep breaths together."',
          '"It\'s okay to take a break. Show me your break card when you\'re ready."',
        ],
        ending: [
          '"Before you go, point to your zone. What helped you stay regulated today?"',
          '"You used your strategies really well today. I noticed you [specific observation]."',
          '"You recognised when you were in yellow and did something about it. That\'s real progress."',
        ],
      },
      ta: {
        role: 'Monitor the pupil\'s regulation state. Prompt check-ins. Have sensory tools ready. Accompany to calm corner if needed. Model calm, regulated behaviour yourself. Celebrate small wins in self-awareness.',
        keyPhrases: [
          '"Where are you on your scale right now?"',
          '"I notice your hands are clenching. What zone might that be?"',
          '"Would a fidget or a movement break help?"',
          '"Good job noticing you were in yellow. What did you do about it?"',
        ],
        avoid: [
          'Waiting until the pupil is in crisis to intervene',
          'Removing sensory tools as a punishment',
          'Making break card use feel shameful',
          'Telling them they "don\'t look dysregulated"',
          'Rushing them back from the calm corner',
        ],
      },
    },

    noTaAdaptations: {
      overview: "Self-regulation tools are designed for independence - the goal is for pupils to recognise and manage their own states without adult prompting.",
      keyAdjustments: [
        "Ensure regulation tools are on the pupil's desk, not held by an adult",
        "Create a personal 'calm kit' the pupil can access whenever needed",
        "Use visual scales (zones of regulation, emotion thermometers) pupils can self-assess with",
        "Build in regular self-check points throughout lessons using visual prompts",
      ],
      independenceStrategies: [
        "Teach a self-regulation routine: 'Notice, name, choose a tool, use it, check again'",
        "Create personal regulation plans pupils can follow independently",
        "Use self-monitoring charts where pupils track their own regulation throughout the day",
      ],
      peerSupportOptions: [
        "Train peer 'check-in buddies' who can quietly ask 'How are you doing?'",
        "Use partner regulation checks at transition points",
        "Create a supportive classroom culture where requesting a break is normalised for everyone",
      ],
    },
  },

  prepPlan: [
    { time: '5 mins', action: 'Create emotion scale visual', details: 'Simple 3-zone scale: green (calm), yellow (wobbly), red (struggling). Laminate or print for desk.' },
    { time: '3 mins', action: 'Make break cards', details: 'Small card pupil can show or place on desk. Can be discreet (just a colour) or explicit ("I need a break").' },
    { time: '5 mins', action: 'Set up calm corner', details: 'Designate low-stimulation space. Add: fidget toys, stress ball, visual timer, breathing prompt card, ear defenders if available.' },
    { time: '3 mins', action: 'Brief TA', details: 'Show emotion scale, explain break card protocol, identify calm corner location. Agree who does check-ins.' },
    { time: '2 mins', action: 'Plan movement breaks', details: 'Decide when to schedule proactive breaks. Set visual timer or write prompts in lesson plan.' },
  ],

  printableSummary: `SELF-REGULATION TOOLS

WHAT: Practical tools to help pupils recognise, communicate, and manage their emotional and sensory states.

WHY: Many pupils don't lack the desire to stay calm—they lack awareness and tools. Teaching regulation explicitly builds independence.

KEY COMPONENTS:

1. EMOTION SCALE (Zones)
   Green = calm, ready to learn
   Yellow = something's not right, wobbling
   Red = struggling, need help now
   Teach body signals for each zone

2. BREAK CARDS
   Non-verbal way to request a break
   Must feel safe, not punitive
   Honour it every time

3. CALM CORNER
   Low-stimulation space
   Sensory tools, timer, breathing cards
   Not a punishment—a regulation space

4. SENSORY TOOLS
   Fidgets, stress balls, weighted items
   Available without asking
   Teach appropriate use

5. MOVEMENT BREAKS
   Every 15-20 minutes proactively
   Before dysregulation, not after

6. SELF-MONITORING
   Regular zone check-ins
   Build awareness of patterns
   Celebrate accurate self-assessment

COMMON MISTAKES:
x Only teaching strategies during crisis
x Making calm corner feel punitive
x Not honouring the break card
x Removing sensory tools as punishment
x Skipping movement breaks

EHCP PHRASES THAT SUGGEST THIS STRATEGY:
- "difficulties with emotional regulation"
- "needs sensory breaks"
- "becomes dysregulated"
- "sensory processing difficulties"`,

  quickChecklist: [
    'Emotion scale visible on pupil\'s desk',
    'Break card available and protocol agreed',
    'Calm corner set up with sensory tools',
    'Taught body signals for each zone (when calm)',
    'Specific regulation strategies practised',
    'Movement breaks scheduled into lesson',
    'Check-in routine established',
    'TA briefed on role and scripts',
    'Sensory tools available without asking',
  ],

  ehcpPhrases: [
    'difficulties with emotional regulation',
    'needs sensory breaks',
    'becomes dysregulated',
    'sensory processing difficulties',
    'struggles to manage emotions',
    'requires support to regulate',
    'needs movement breaks',
    'benefits from a calm space',
    'emotional dysregulation',
    'difficulty recognising emotions',
    'sensory overload',
    'requires sensory input',
  ],

  relatedStrategies: ['visual-supports-now-next', 'chunking-one-step-instructions'],
};
