import { Strategy } from '@/types';

export const taskAnalysisStrategy: Strategy = {
  id: 'task-analysis-001',
  slug: 'task-analysis',
  title: 'Task Analysis with Visual Checklist',
  shortDescription: 'Break complex tasks into component steps with a visual checklist the pupil works through independently.',
  longDescription: 'Task analysis transforms overwhelming tasks into manageable sequences. You break a complex task into its component steps, create a visual checklist, and the pupil works through each step independently, ticking off as they go. This externalises the sequence from their working memory onto paper, dramatically reducing cognitive load and building independence.',
  difficulty: 'beginner',
  prepTime: '15-20 mins',
  areaOfNeed: 'Breaking Down Learning',
  subjects: ['English', 'Maths', 'Science', 'History', 'Geography', 'Art', 'Music', 'PE', 'MFL', 'DT', 'Drama', 'RE', 'Computing', 'PSHE'],
  routines: ['Lesson start', 'Independent work', 'Equipment setup', 'Packing up'],
  tags: ['working memory', 'cognitive load', 'independence', 'visual supports', 'checklists'],

  content: {
    problem: {
      headline: 'Complex tasks overwhelm working memory',
      description: 'You say "write a paragraph about the character." The pupil writes one sentence and stops. They know what a paragraph is. They can write sentences. But holding the whole sequence in their head while executing each part? That\'s where it falls apart. The steps are invisible, stored only in memory—and memory is full.',
      signs: [
        'Pupil starts a task but stops partway through',
        'Completes some steps but misses others randomly',
        'Asks "what do I do next?" repeatedly',
        'Stares at the page, unsure how to continue',
        'EHCP mentions "difficulties with multi-step tasks" or "needs tasks broken down"',
      ],
    },

    explanation: {
      definition: 'Task analysis means breaking a task into its component steps, writing them as a visual checklist, and having the pupil tick off each step as they complete it independently.',
      whyItWorks: 'Working memory has limited capacity. When a pupil tries to hold a complex sequence in their head while also executing each step, the system overloads. Task analysis externalises the sequence—it moves the "what comes next" information from their head onto paper. Now their working memory only needs to handle one step at a time. The checklist remembers the sequence for them. Ticking off steps provides concrete progress feedback and builds momentum.',
      keyPrinciples: [
        'Break tasks into visible, numbered steps',
        'Create a physical checklist the pupil can tick',
        'Each step should be a single, clear action',
        'Pupil works through independently, ticking as they go',
        'The checklist externalises memory load',
      ],
    },

    howTo: {
      steps: [
        {
          step: 1,
          title: 'Identify the task',
          instruction: 'Choose a task the pupil struggles to complete. It should have a clear start and end point.',
          tip: 'Pick something they do regularly—the analysis becomes reusable.',
        },
        {
          step: 2,
          title: 'Do the task yourself slowly',
          instruction: 'Actually do the task, step by step. Write down every single action, including ones that feel automatic to you.',
          teacherSays: '"I\'m going to do this myself and write down every step I take."',
          tip: 'If your list has fewer than 6-8 steps for a complex task, you\'ve probably missed some.',
        },
        {
          step: 3,
          title: 'Add hidden cognitive steps',
          instruction: 'Review your list for invisible steps like "decide," "check," or "remember." These are often where breakdown happens.',
          tip: 'Ask yourself: "What am I thinking between these two actions?"',
        },
        {
          step: 4,
          title: 'Create the visual checklist',
          instruction: 'Write steps clearly with tick boxes. Use simple verb-led language: "Write," "Look at," "Pick up." Number each step.',
          tip: 'Laminate for reuse. Add small pictures if helpful.',
        },
        {
          step: 5,
          title: 'Teach the pupil to use it',
          instruction: 'Don\'t just hand over the checklist. Explicitly teach: "Point to step one. Do it. Tick it. Point to step two."',
          teacherSays: '"This checklist shows you every step. Do one, tick it, move to the next. You don\'t need to remember what comes next—it\'s all here."',
        },
        {
          step: 6,
          title: 'Fade your support',
          instruction: 'Initially stay close to prompt checklist use. Gradually move away as the pupil works independently through the steps.',
          tip: 'The goal is the pupil using the checklist without you.',
        },
      ],
      commonMistakes: [
        'Giving the checklist without teaching how to use it',
        'Missing invisible cognitive steps (decide, check, remember)',
        'Making steps too big—each should be one action',
        'Standing over the pupil instead of letting them work independently',
        'Forgetting to include the final "check your work" step',
      ],
      timeToImplement: '15-20 mins to create, then reusable',
    },

    workedExamples: [
      {
        subject: 'English',
        topic: 'Writing a PEE paragraph',
        scenario: 'Year 9 writing about a character. Pupil knows the PEE structure but loses track of the sequence when writing.',
        steps: [
          {
            action: 'Step 1: Create the checklist',
            teacherDoes: 'Writes checklist: 1. Write your point sentence. 2. Find a quote. 3. Write "This shows..." 4. Explain what the quote suggests. 5. Link back to the question. 6. Read through your paragraph.',
            pupilDoes: 'Receives laminated checklist with tick boxes.',
          },
          {
            action: 'Step 2: Teach checklist use',
            teacherDoes: 'Says: "Point to step one. What does it say? Good. Do that now. When you\'ve done it, tick the box."',
            pupilDoes: 'Points to step one, reads it, writes point sentence, ticks box.',
          },
          {
            action: 'Step 3: Independent work',
            teacherDoes: 'Moves away. Only returns if pupil is stuck—then points to checklist: "Which step are you on?"',
            pupilDoes: 'Works through steps 2-6 independently, ticking each box. Completes paragraph.',
          },
        ],
      },
      {
        subject: 'Maths',
        topic: 'Solving two-step equations',
        scenario: 'Year 8 solving equations like 2x + 5 = 13. Pupil can do individual operations but loses track of the sequence.',
        steps: [
          {
            action: 'Step 1: Create the checklist',
            teacherDoes: 'Writes checklist: 1. Circle the number on its own (+5). 2. Do the opposite to both sides. 3. Write the new equation. 4. Circle what\'s with x (2x). 5. Do the opposite to both sides. 6. Write x = answer. 7. Check by putting answer back in.',
            pupilDoes: 'Receives checklist with tick boxes.',
          },
          {
            action: 'Step 2: First problem together',
            teacherDoes: 'Says: "Step one—circle the number on its own. Which number? Good, +5. Tick. Step two—what\'s the opposite of +5?"',
            pupilDoes: 'Follows checklist step by step, ticking each box.',
          },
          {
            action: 'Step 3: Independent problems',
            teacherDoes: 'Sets three more equations. Says: "Use your checklist. Tick each step."',
            pupilDoes: 'Works through problems independently using checklist. Gets all three correct.',
          },
        ],
      },
      {
        subject: 'Science',
        topic: 'Setting up a Bunsen burner',
        scenario: 'Year 7 practical. Pupil struggles to remember the safety sequence for lighting a Bunsen burner.',
        steps: [
          {
            action: 'Step 1: Create visual checklist',
            teacherDoes: 'Creates checklist with pictures: 1. Put on safety goggles. 2. Check gas tap is off. 3. Connect rubber tube firmly. 4. Close the air hole. 5. Light the match. 6. Turn on gas tap. 7. Light the Bunsen. 8. Adjust air hole for blue flame.',
            pupilDoes: 'Receives laminated visual checklist to keep at workstation.',
          },
          {
            action: 'Step 2: Teach sequence',
            teacherDoes: 'Demonstrates while pointing to each step on checklist: "Watch me follow the checklist. Step one, goggles on. Tick."',
            pupilDoes: 'Watches and follows along on their own checklist.',
          },
          {
            action: 'Step 3: Pupil does it',
            teacherDoes: 'Says: "Your turn. Follow your checklist. Tick each step."',
            pupilDoes: 'Sets up Bunsen burner safely and independently, ticking off each step.',
          },
        ],
      },
      {
        subject: 'History',
        topic: 'Analysing a historical source',
        scenario: 'Year 9 studying WWI. Pupil can identify features of a source but loses track when asked to evaluate its usefulness.',
        steps: [
          {
            action: 'Step 1: Create the checklist',
            teacherDoes: 'Writes checklist: 1. Read the source carefully. 2. Write what type of source it is. 3. Write who made it and when. 4. List two facts the source tells us. 5. Write one reason it might be useful. 6. Write one limitation. 7. Write your conclusion sentence.',
            pupilDoes: 'Receives laminated checklist with tick boxes.',
          },
          {
            action: 'Step 2: Model with first source',
            teacherDoes: 'Says: "Watch me use the checklist. Step one, I read the source. Tick. Step two, it\'s a photograph. I write that down. Tick."',
            pupilDoes: 'Follows along on their own checklist, seeing the process modelled.',
          },
          {
            action: 'Step 3: Independent analysis',
            teacherDoes: 'Gives a new source. Says: "Use your checklist. Work through each step and tick as you go."',
            pupilDoes: 'Works through the source analysis independently, producing a structured response.',
          },
        ],
      },
      {
        subject: 'Geography',
        topic: 'Describing a graph or chart',
        scenario: 'Year 8 analysing climate data. Pupil can read values but struggles to write a full description of the pattern.',
        steps: [
          {
            action: 'Step 1: Create the checklist',
            teacherDoes: 'Writes checklist: 1. Write what the graph shows (title). 2. Find the highest value and write it. 3. Find the lowest value and write it. 4. Describe the overall pattern (increase/decrease/stays same). 5. Identify any anomalies. 6. Use data to support one point.',
            pupilDoes: 'Receives checklist with tick boxes.',
          },
          {
            action: 'Step 2: Teach checklist use',
            teacherDoes: 'Points to climate graph. Says: "Step one—what does the graph show? Write it. Tick. Step two—find the highest value. Where is it? Write it down."',
            pupilDoes: 'Works through first three steps with teacher guidance, ticking each one.',
          },
          {
            action: 'Step 3: Complete independently',
            teacherDoes: 'Says: "Finish steps four to six on your own. Tick each one when done."',
            pupilDoes: 'Completes the description independently using the checklist structure.',
          },
        ],
      },
      {
        subject: 'Art',
        topic: 'Evaluating artwork using formal elements',
        scenario: 'Year 7 writing an evaluation of their own artwork. Pupil can identify what they like but struggles to give structured feedback.',
        steps: [
          {
            action: 'Step 1: Create the checklist',
            teacherDoes: 'Writes checklist: 1. Write the title of your piece. 2. Describe one colour choice and why you used it. 3. Describe one shape or form you included. 4. Comment on your use of line or texture. 5. Write one thing that worked well. 6. Write one thing you would improve. 7. Read through your evaluation.',
            pupilDoes: 'Receives checklist with tick boxes and their artwork in front of them.',
          },
          {
            action: 'Step 2: Work through together',
            teacherDoes: 'Says: "Point to step one. What\'s the title? Write it. Tick. Step two—look at your colours. Pick one and tell me why you chose it."',
            pupilDoes: 'Writes responses for each step with teacher prompting the checklist.',
          },
          {
            action: 'Step 3: Independent completion',
            teacherDoes: 'Says: "Complete steps five, six, and seven on your own. Tick each one."',
            pupilDoes: 'Finishes evaluation independently, producing a structured written response.',
          },
        ],
      },
      {
        subject: 'Music',
        topic: 'Composing an 8-bar melody',
        scenario: 'Year 8 composing a melody for a film scene. Pupil can play notes but freezes when asked to create a composition.',
        steps: [
          {
            action: 'Step 1: Create the checklist',
            teacherDoes: 'Writes checklist: 1. Choose your starting note. 2. Play four notes going up or down—write them. 3. Play four notes coming back—write them. 4. Play all eight notes together. 5. Change one note if it sounds wrong. 6. Add rhythm (long or short notes). 7. Play your final melody.',
            pupilDoes: 'Receives checklist with tick boxes next to keyboard.',
          },
          {
            action: 'Step 2: First steps together',
            teacherDoes: 'Says: "Step one—pick your starting note. Play a few and choose one. Good, C. Tick. Step two—play four notes going up. Write them down."',
            pupilDoes: 'Chooses starting note, plays ascending phrase, writes notes down, ticks boxes.',
          },
          {
            action: 'Step 3: Complete the composition',
            teacherDoes: 'Says: "Work through steps three to seven. Your checklist tells you exactly what to do."',
            pupilDoes: 'Completes melody independently, following the checklist to create and refine the composition.',
          },
        ],
      },
      {
        subject: 'PE',
        topic: 'Performing a gymnastics sequence',
        scenario: 'Year 7 creating a floor routine. Pupil can do individual moves but cannot remember the sequence.',
        steps: [
          {
            action: 'Step 1: Create visual checklist',
            teacherDoes: 'Creates picture checklist: 1. Starting position (stand tall). 2. Forward roll. 3. Hold balance for 3 seconds. 4. Cartwheel. 5. Jump with shape. 6. Finishing position (stand tall). Uses stick figure drawings.',
            pupilDoes: 'Receives laminated visual card to place at the edge of the mat.',
          },
          {
            action: 'Step 2: Walk through with checklist',
            teacherDoes: 'Says: "Look at step one. Show me your starting position. Good. Tick it. Step two—forward roll. Show me."',
            pupilDoes: 'Performs each element while looking at the checklist, ticking after each move.',
          },
          {
            action: 'Step 3: Full sequence independently',
            teacherDoes: 'Says: "Perform your whole sequence. Check your card before you start. Remember each move and tick in your head."',
            pupilDoes: 'Performs full routine, glancing at visual card for prompts, completing the sequence.',
          },
        ],
      },
      {
        subject: 'MFL',
        topic: 'Writing a paragraph in French',
        scenario: 'Year 9 writing about their daily routine. Pupil knows vocabulary but struggles to structure a paragraph with different tenses.',
        steps: [
          {
            action: 'Step 1: Create the checklist',
            teacherDoes: 'Writes checklist in English: 1. Write an opening sentence (what you do). 2. Add a time phrase. 3. Write a second activity. 4. Add an opinion (j\'aime/je deteste). 5. Write what you did yesterday (past tense). 6. Write what you will do tomorrow (future tense). 7. Check verb endings.',
            pupilDoes: 'Receives checklist with tick boxes and vocabulary sheet.',
          },
          {
            action: 'Step 2: First sentences together',
            teacherDoes: 'Says: "Step one—write what you do in the morning. Use your vocab sheet. Good. Tick. Step two—add a time phrase. Look here for examples."',
            pupilDoes: 'Writes first two sentences, referring to checklist and vocabulary, ticking boxes.',
          },
          {
            action: 'Step 3: Complete paragraph',
            teacherDoes: 'Says: "Continue through the checklist. You have your vocabulary sheet. Tick each step."',
            pupilDoes: 'Works through steps three to seven independently, producing a paragraph with three tenses.',
          },
        ],
      },
      {
        subject: 'DT',
        topic: 'Using a sewing machine',
        scenario: 'Year 8 textiles project. Pupil is anxious about the sewing machine and forgets the threading sequence.',
        steps: [
          {
            action: 'Step 1: Create visual checklist',
            teacherDoes: 'Creates checklist with photos: 1. Place thread on spool pin. 2. Pull thread through thread guide. 3. Wind thread around tension disc. 4. Thread through take-up lever. 5. Thread down to needle. 6. Thread through needle eye (front to back). 7. Pull thread under presser foot. 8. Hold both threads back.',
            pupilDoes: 'Receives laminated visual checklist to keep at sewing station.',
          },
          {
            action: 'Step 2: Demonstrate with checklist',
            teacherDoes: 'Says: "Watch me follow the checklist. Step one, thread on spool pin. Tick. Step two, through the guide. Tick." Demonstrates each step.',
            pupilDoes: 'Watches demonstration while following along on their own checklist.',
          },
          {
            action: 'Step 3: Pupil threads machine',
            teacherDoes: 'Unthreads machine. Says: "Your turn. Use your checklist. Tick each step as you do it."',
            pupilDoes: 'Threads sewing machine independently using visual checklist, completing all eight steps.',
          },
        ],
      },
      {
        subject: 'Drama',
        topic: 'Devising a scene from a stimulus',
        scenario: 'Year 10 devising performance. Group freezes when given an image stimulus and told to create a scene.',
        steps: [
          {
            action: 'Step 1: Create group checklist',
            teacherDoes: 'Writes checklist: 1. Look at stimulus for 1 minute in silence. 2. Each person says one word it makes them think of. 3. Decide who/where/what (characters, setting, situation). 4. Create a frozen image (tableau). 5. Add three lines of dialogue. 6. Decide how scene starts and ends. 7. Run through once. 8. Run through again and refine.',
            pupilDoes: 'Group receives one checklist to share.',
          },
          {
            action: 'Step 2: Work through initial steps',
            teacherDoes: 'Says: "Step one—look at your stimulus in silence. When the minute is up, tick. Step two—go round and each say one word."',
            pupilDoes: 'Group follows steps one and two, ticking as they complete each.',
          },
          {
            action: 'Step 3: Devise independently',
            teacherDoes: 'Says: "Work through steps three to eight. The checklist guides your devising process."',
            pupilDoes: 'Group works through remaining steps, using checklist to structure their creative process.',
          },
        ],
      },
      {
        subject: 'RE',
        topic: 'Writing an evaluation of an ethical issue',
        scenario: 'Year 11 answering a 12-mark evaluation question on euthanasia. Pupil can state opinions but struggles to structure a balanced response.',
        steps: [
          {
            action: 'Step 1: Create the checklist',
            teacherDoes: 'Writes checklist: 1. State the issue clearly. 2. Write one religious view (with teaching). 3. Write why some agree with this view. 4. Write one opposing view (with teaching). 5. Write why some agree with this view. 6. Write your conclusion. 7. Check you used key terms. 8. Read through your answer.',
            pupilDoes: 'Receives checklist with tick boxes.',
          },
          {
            action: 'Step 2: First two steps together',
            teacherDoes: 'Says: "Step one—write one sentence stating the issue. Good. Tick. Step two—what would a Christian say? Use a teaching. Write it."',
            pupilDoes: 'Writes opening and first viewpoint with teacher prompting use of checklist.',
          },
          {
            action: 'Step 3: Complete response',
            teacherDoes: 'Says: "Continue through steps three to eight. Your checklist ensures you cover both sides."',
            pupilDoes: 'Works through remaining steps independently, producing a balanced 12-mark response.',
          },
        ],
      },
      {
        subject: 'Computing',
        topic: 'Writing a Python program',
        scenario: 'Year 8 creating a quiz program. Pupil understands individual coding concepts but cannot structure a complete program.',
        steps: [
          {
            action: 'Step 1: Create the checklist',
            teacherDoes: 'Writes checklist: 1. Write a comment saying what the program does. 2. Print a welcome message. 3. Set score variable to 0. 4. Write first question using input(). 5. Write if statement to check answer. 6. Add to score if correct. 7. Repeat for two more questions. 8. Print final score. 9. Test your program.',
            pupilDoes: 'Receives checklist with tick boxes next to computer.',
          },
          {
            action: 'Step 2: Code first steps together',
            teacherDoes: 'Says: "Step one—write a comment. The hash symbol then what your program does. Tick. Step two—print a welcome message. What command do you use?"',
            pupilDoes: 'Writes first three lines of code with teacher prompting checklist use.',
          },
          {
            action: 'Step 3: Complete program',
            teacherDoes: 'Says: "Work through steps four to nine. Your checklist tells you the order. Call me when you reach step nine."',
            pupilDoes: 'Completes the quiz program independently, following the checklist structure.',
          },
        ],
      },
      {
        subject: 'PSHE',
        topic: 'Making a decision using a decision-making framework',
        scenario: 'Year 9 discussing how to respond to peer pressure. Pupil struggles to think through consequences before acting.',
        steps: [
          {
            action: 'Step 1: Create the checklist',
            teacherDoes: 'Writes checklist: 1. Write what the decision is. 2. Write two things that could happen if you say yes. 3. Write two things that could happen if you say no. 4. Write who else might be affected. 5. Circle the best choice for you. 6. Write one reason for your choice. 7. Write what you would actually say.',
            pupilDoes: 'Receives checklist with tick boxes for scenario work.',
          },
          {
            action: 'Step 2: Apply to scenario',
            teacherDoes: 'Gives scenario: "A friend wants you to skip class." Says: "Step one—write what the decision is. Tick. Step two—what could happen if you skip?"',
            pupilDoes: 'Writes responses for steps one to three with teacher prompting.',
          },
          {
            action: 'Step 3: Complete independently',
            teacherDoes: 'Says: "Complete steps four to seven on your own. This gives you a way to think through any decision."',
            pupilDoes: 'Works through remaining steps, producing a reasoned response to the scenario.',
          },
        ],
      },
    ],

    routines: [
      {
        routine: 'Starting independent work',
        context: 'Pupil often stares at page, unsure how to begin',
        steps: [
          '1. Read the question',
          '2. Underline key words',
          '3. Look at any examples',
          '4. Say your first sentence in your head',
          '5. Write your first sentence',
          '6. Read it back',
        ],
        taRole: 'Point to the checklist and say "Which step are you on?" rather than telling them what to do.',
      },
      {
        routine: 'Packing up at end of lesson',
        context: 'Pupil either rushes chaotically or freezes when asked to pack up',
        steps: [
          '1. Stop working, pen down',
          '2. Close your book',
          '3. Put book in bag',
          '4. Zip your bag',
          '5. Check desk for loose items',
          '6. Push chair in',
          '7. Stand behind chair',
        ],
        taRole: 'Keep the visual strip on the pupil\'s desk. A quiet tap on it is enough to prompt them to start.',
      },
      {
        routine: 'Equipment setup for a lesson',
        context: 'Pupil often missing equipment or takes much longer than peers to be ready',
        steps: [
          '1. Get pencil case out',
          '2. Get exercise book out',
          '3. Open book to a clean page',
          '4. Write the date',
          '5. Write the title from the board',
          '6. Underline with a ruler',
          '7. Pencil case closed, book open, ready',
        ],
        taRole: 'Position the checklist where the pupil can see it. Let them work through it independently.',
      },
    ],

    troubleshooting: [
      {
        problem: 'Pupil doesn\'t use the checklist',
        cause: 'They haven\'t been taught how to use it—it was just provided',
        solution: 'Go back to explicit teaching. "Point to step one. Read it. Do it. Tick it. Now point to step two." Practise this sequence until it\'s automatic.',
      },
      {
        problem: 'Pupil ticks steps without actually doing them',
        cause: 'They\'re rushing through, or the ticking has become the goal rather than the doing',
        solution: 'Slow down. Say "Show me step three before you tick it." Add a brief check-in point midway through.',
      },
      {
        problem: 'Checklist has too many steps—pupil gets overwhelmed',
        cause: 'The task analysis is too granular',
        solution: 'Group related micro-steps. "Write your point sentence" is better than "Pick up pen. Look at question. Decide your point. Write your point."',
      },
      {
        problem: 'Pupil can do the task with the checklist but not without it',
        cause: 'This is fine initially—independence from you matters more than independence from the checklist',
        solution: 'Keep using the checklist. Over time, fade it: remove steps they\'ve mastered, or use a shorter version.',
      },
    ],

    scripts: {
      teacher: {
        starting: [
          '"This checklist shows every step. You do one, tick it, then do the next."',
          '"You don\'t need to remember what comes next—it\'s all written here."',
          '"Point to step one. Read it to me. Good—do that now."',
        ],
        during: [
          '"Which step are you on? Point to it."',
          '"Good, you\'ve ticked three steps already. Keep going."',
          '"Stuck? Check your checklist—what\'s the next step?"',
        ],
        ifStuck: [
          '"Point to the step you\'re on. Read it out loud."',
          '"You\'ve done step four. What does step five say?"',
          '"Let\'s look at your checklist together."',
        ],
        ending: [
          '"You\'ve ticked every step. You did the whole thing."',
          '"See how the checklist helped you finish? You can use it again next time."',
        ],
      },
      ta: {
        role: 'Prompt checklist use rather than giving answers. Point to the checklist. Ask "Which step are you on?" The goal is the pupil working through it independently.',
        keyPhrases: [
          '"Look at your checklist."',
          '"Which step are you on?"',
          '"What does the next step say?"',
          '"Tick that one and move on."',
        ],
        avoid: [
          'Telling them what to do instead of pointing to the checklist',
          'Doing steps for them',
          'Ticking boxes for them',
          'Hovering—let them work independently',
        ],
      },
    },

    noTaAdaptations: {
      overview: "Task analysis is ideal for independent work because the visual checklist itself replaces the need for constant adult guidance.",
      keyAdjustments: [
        "Laminate task analysis checklists so pupils can tick with whiteboard markers and reuse",
        "Add picture symbols or photos alongside text for each step",
        "Include 'self-check' prompts within the checklist (e.g., 'Have you written the date?')",
        "Colour-code steps that often need teacher input vs. fully independent steps",
      ],
      independenceStrategies: [
        "Teach pupils to get their own checklist from a designated spot at lesson start",
        "Create a 'stuck' protocol: try step again, check the example, then raise hand",
        "Use 'done' boxes at the end of rows where they place a counter when finished",
      ],
      peerSupportOptions: [
        "Pair pupils with matching checklists - they can compare progress",
        "Assign 'checklist helpers' who can point to the next step if asked",
        "Use collaborative task analysis where pairs complete alternating steps",
      ],
    },
  },

  prepPlan: [
    {
      time: '5 mins',
      action: 'Choose the task',
      details: 'Pick a task the pupil struggles with repeatedly. It should have a clear start and end.'
    },
    {
      time: '5 mins',
      action: 'Do the task yourself',
      details: 'Actually do the task, slowly, noting every single action. Include cognitive steps (deciding, checking).'
    },
    {
      time: '3 mins',
      action: 'Review and number',
      details: 'Read through your steps. Add any you missed. Number them sequentially.'
    },
    {
      time: '3 mins',
      action: 'Create your tool',
      details: 'Write the steps as a checklist, prompt card, or visual strip. Use simple verbs and short phrases.'
    },
    {
      time: '2 mins',
      action: 'Plan validation',
      details: 'In the lesson, watch the pupil attempt the task while you mark which steps they do/struggle with.'
    }
  ],

  printableSummary: `TASK ANALYSIS WITH VISUAL CHECKLIST

WHAT: Break a complex task into component steps. Create a visual checklist. Pupil works through independently, ticking off each step.

WHY: Working memory overloads when holding a whole sequence while executing it. The checklist externalises the sequence—memory only handles one step at a time.

HOW:
1. Identify a task the pupil struggles to complete
2. Do the task yourself, slowly, writing every step
3. Add hidden cognitive steps (decide, check, remember)
4. Create a numbered checklist with tick boxes
5. Teach the pupil to use it: "Point. Do. Tick. Next."
6. Fade your support—let them work independently

QUICK EXAMPLES:
PEE Paragraph: 1. Write point 2. Find quote 3. Write "This shows..." 4. Explain 5. Link to question 6. Read through
Two-step equations: 1. Circle number alone 2. Do opposite 3. Write new equation 4. Circle term with x 5. Do opposite 6. Write x = 7. Check

COMMON MISTAKES:
- Giving the checklist without teaching how to use it
- Missing cognitive steps (decide, check)
- Standing over them instead of letting them work independently

WHEN YOU SEE:
- Pupil starts then stops partway through
- "What do I do next?" repeatedly
- Completes some steps but misses others`,

  quickChecklist: [
    'Identified a task the pupil struggles to complete',
    'Did the task myself and wrote down every step',
    'Added hidden cognitive steps (decide, check, remember)',
    'Created a numbered checklist with tick boxes',
    'Taught the pupil how to use it (point, do, tick)',
    'Pupil is working through steps independently',
    'Fading my support—not hovering',
  ],

  ehcpPhrases: [
    'difficulties with multi-step tasks',
    'needs tasks broken into small steps',
    'struggles with sequencing',
    'requires visual supports for task completion',
    'needs step-by-step guidance',
    'benefits from structured approaches',
    'requires explicit instruction'
  ],

  relatedStrategies: ['chunking-one-step-instructions', 'backward-chaining', 'visual-supports-now-next']
};
