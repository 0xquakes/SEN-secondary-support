import { Strategy } from '@/types';

export const backwardChainingStrategy: Strategy = {
  id: 'backward-chaining-001',
  slug: 'backward-chaining',
  title: 'Backward Chaining',
  shortDescription: 'Teach the last step first so the pupil always finishes the task independently and experiences success.',
  longDescription: `Backward chaining flips traditional teaching on its head. Instead of starting at the beginning and gradually building up, you complete most of the task FOR the pupil, then let them do just the final step. Once they've mastered that, you leave the last TWO steps for them. Then three. The pupil always ends by completing the task themselves, building confidence and muscle memory from the end backward. This is particularly powerful for pupils who give up early because they've never experienced finishing something.`,
  difficulty: 'intermediate',
  prepTime: '10-15 mins',
  areaOfNeed: 'Building Confidence',
  subjects: ['English', 'Maths', 'Science', 'History', 'Geography', 'Art', 'Music', 'PE', 'MFL', 'DT', 'Drama', 'RE', 'Computing', 'PSHE'],
  routines: ['Self-care', 'Equipment organisation', 'Written tasks'],
  tags: ['independence', 'motivation', 'task completion', 'confidence'],

  content: {
    problem: {
      headline: 'Pupils give up because they never experience finishing',
      description: 'You explain the task. They start. Halfway through, they stop. "I can\'t do it." They\'ve never experienced finishing something themselves. The beginning is always the hardest part, and that\'s where they get stuck. By the time they reach what should be the satisfying conclusion, they\'ve already given up.',
      signs: [
        'Pupil starts tasks but rarely completes them',
        'Says "I can\'t do it" before really trying',
        'Gives up when the task gets difficult early on',
        'Has no experience of independent completion',
        'EHCP mentions "gives up before finishing work" or "requires tasks to be completed with the pupil"',
      ],
    },

    explanation: {
      definition: 'Backward chaining means teaching from the end. You complete most of the task for the pupil, leaving only the final step for them. Once they master that, you leave the last two steps. Then three. You work backward until they do the whole thing.',
      whyItWorks: 'The magic is psychological. When you always finish the task, you start to believe you can finish tasks. Psychologists call this self-efficacy. For pupils who have a history of giving up, of never finishing, this is transformative. Every single time, they experience completion. That feeling of success at the end builds confidence and motivation to take on more.',
      keyPrinciples: [
        'The pupil always finishes the task themselves',
        'Start with just the final step',
        'Add earlier steps only when the current step is fluent',
        'Aim for automaticity, not just accuracy',
        'Celebrate completion genuinely every time',
      ],
    },

    howTo: {
      steps: [
        {
          step: 1,
          title: 'Pick a sequential task',
          instruction: 'Choose a task with clear, ordered steps that the pupil regularly fails to complete. Writing tasks, maths procedures, and daily routines work well.',
          teacherSays: 'N/A - this is prep',
          tip: 'The task must have a defined end point. Creative or open-ended tasks don\'t suit backward chaining.',
        },
        {
          step: 2,
          title: 'Do a task analysis',
          instruction: 'Break the task into every individual step from start to finish. Write these down so you know exactly where to hand over.',
          tip: 'For a paragraph: topic sentence, evidence, explanation. For packing up: close book, put in bag, zip bag, stand, push chair in.',
        },
        {
          step: 3,
          title: 'Complete all steps except the last',
          instruction: 'Do the earlier steps yourself, or guide the pupil hand-over-hand. Don\'t make a fuss about it - just get there efficiently.',
          teacherSays: '"Right, I\'ve done the first parts. Now you finish it."',
          tip: 'If possible, pre-prepare templates so this doesn\'t take lesson time.',
        },
        {
          step: 4,
          title: 'Cue the final step',
          instruction: 'Use a simple, consistent phrase to hand over. The pupil completes just the last step.',
          teacherSays: '"Now you finish it." or "Just this last step - you do it."',
          tip: 'Keep the cue the same every time so it becomes automatic.',
        },
        {
          step: 5,
          title: 'Celebrate completion',
          instruction: 'Acknowledge that they finished the task. Not effusively - just genuinely. The completion is the reward.',
          teacherSays: '"You finished it. The whole thing is done because you finished it."',
        },
        {
          step: 6,
          title: 'Add steps backward over time',
          instruction: 'Once the last step is fluent (automatic, not just accurate), leave the last two steps. Keep working backward.',
          teacherSays: '"Tomorrow we\'ll leave a bit more for you."',
          tip: 'Some pupils need days or weeks on a single step. That\'s fine. Patience is key.',
        },
      ],
      commonMistakes: [
        'Moving backward too quickly before the current step is fluent',
        'Making the handover too visible or awkward',
        'Forgetting to celebrate the completion',
        'Using this for non-sequential tasks where chunking would work better',
        'Inconsistent approaches across different staff',
      ],
      timeToImplement: 'First session immediate; full independence takes weeks',
    },

    workedExamples: [
      {
        subject: 'English',
        topic: 'Writing a PEE Paragraph',
        scenario: 'Year 9 writing a Point-Evidence-Explanation paragraph about Macbeth. Pupil working at KS1 level finds the three-part structure overwhelming.',
        steps: [
          {
            action: 'Week 1: Explanation only',
            teacherDoes: 'Writes Point and Evidence. Says: "I\'ve written that Lady Macbeth is ambitious, with a quote. Now you write why this shows ambition. Start with \'This shows...\'"',
            pupilDoes: 'Writes one sentence starting with "This shows..."',
          },
          {
            action: 'Celebrate completion',
            teacherDoes: 'Says: "You finished the paragraph. Read the whole thing - you wrote that ending."',
            pupilDoes: 'Reads complete paragraph aloud. Sees their contribution.',
          },
          {
            action: 'Week 2: Evidence + Explanation',
            teacherDoes: 'Writes Point only. Says: "I\'ve written the point. Now you find a quote and explain it."',
            pupilDoes: 'Selects quote from options. Writes Evidence and Explanation.',
          },
          {
            action: 'Week 3: Full paragraph',
            teacherDoes: 'Provides scaffold only. Says: "Now write all three parts."',
            pupilDoes: 'Writes complete PEE paragraph with scaffold support.',
          },
        ],
      },
      {
        subject: 'Maths',
        topic: 'Multi-step percentage problem',
        scenario: 'Year 8 calculating sale prices. Problem: A jacket costs 80 pounds with a 25% discount. What\'s the sale price? This requires finding 25% of 80, then subtracting.',
        steps: [
          {
            action: 'Day 1: Final calculation only',
            teacherDoes: 'Calculates 25% of 80 = 20. Says: "I\'ve worked out that 25% of 80 is 20. That\'s the discount. Now you finish it - what\'s 80 minus 20?"',
            pupilDoes: 'Writes 80 - 20 = 60. Says "60 pounds."',
          },
          {
            action: 'Celebrate completion',
            teacherDoes: 'Says: "The sale price is 60 pounds. You solved the problem."',
            pupilDoes: 'Sees they completed a two-step percentage problem.',
          },
          {
            action: 'Day 2: Both calculations',
            teacherDoes: 'Shows how to find 25% (divide by 4). Says: "Find 25% of 80, then subtract it."',
            pupilDoes: 'Calculates 80 / 4 = 20, then 80 - 20 = 60.',
          },
        ],
      },
      {
        subject: 'Science',
        topic: 'Writing a conclusion',
        scenario: 'Year 7 writing a conclusion for a plant growth experiment. A proper conclusion has three parts: what we tested, what we found, and what it means.',
        steps: [
          {
            action: 'Week 1: Meaning only',
            teacherDoes: 'Writes what was tested and what was found. Says: "I\'ve written that we tested light versus dark and that the light plant grew more. Now you write the final sentence - what does this tell us? Start with \'This shows that...\'"',
            pupilDoes: 'Writes: "This shows that plants need light to grow."',
          },
          {
            action: 'Celebrate completion',
            teacherDoes: 'Says: "You\'ve finished the conclusion."',
            pupilDoes: 'Sees their sentence completes a proper scientific conclusion.',
          },
          {
            action: 'Week 2: Findings + Meaning',
            teacherDoes: 'Writes what was tested only. Says: "You write what we found and what it means."',
            pupilDoes: 'Writes two sentences about findings and meaning.',
          },
          {
            action: 'Week 3: Full conclusion',
            teacherDoes: 'Provides sentence starters only.',
            pupilDoes: 'Writes complete three-part conclusion.',
          },
        ],
      },
      {
        subject: 'History',
        topic: 'Writing a source analysis',
        scenario: 'Year 8 analysing a propaganda poster from World War One. A source analysis requires content description, purpose identification, and usefulness evaluation.',
        steps: [
          {
            action: 'Week 1: Usefulness evaluation only',
            teacherDoes: 'Writes what the source shows and its purpose. Says: "I\'ve described the poster and explained it was used to recruit soldiers. Now you write the final part - is this source useful for learning about recruitment? Start with \'This source is useful because...\'"',
            pupilDoes: 'Writes: "This source is useful because it shows us what methods the government used to persuade men to join the army."',
          },
          {
            action: 'Celebrate completion',
            teacherDoes: 'Says: "You\'ve finished the source analysis. Read it back - you wrote that evaluation."',
            pupilDoes: 'Reads complete analysis. Sees their sentence completes the task.',
          },
          {
            action: 'Week 2: Purpose + Usefulness',
            teacherDoes: 'Writes content description only. Says: "I\'ve described what\'s in the poster. Now you explain why it was made and how useful it is."',
            pupilDoes: 'Writes two sentences about purpose and usefulness.',
          },
        ],
      },
      {
        subject: 'Geography',
        topic: 'Describing a graph showing population change',
        scenario: 'Year 9 describing a population pyramid for Japan. A complete description needs trend identification, data evidence, and explanation of what it means.',
        steps: [
          {
            action: 'Week 1: Explanation only',
            teacherDoes: 'Writes the trend and data evidence. Says: "I\'ve written that Japan has an ageing population and that 28% are over 65. Now you finish it - what does this mean for Japan? Start with \'This means that...\'"',
            pupilDoes: 'Writes: "This means that Japan will have fewer workers and more people needing healthcare and pensions."',
          },
          {
            action: 'Celebrate completion',
            teacherDoes: 'Says: "You\'ve completed the graph description. That explanation shows you understand the data."',
            pupilDoes: 'Sees their sentence completes a proper geographical analysis.',
          },
          {
            action: 'Week 2: Evidence + Explanation',
            teacherDoes: 'Writes trend identification only. Says: "I\'ve identified the trend. Now you add data from the graph and explain what it means."',
            pupilDoes: 'Identifies specific data and writes explanation.',
          },
        ],
      },
      {
        subject: 'Art',
        topic: 'Completing a tonal study',
        scenario: 'Year 7 creating a tonal drawing of a sphere. The process requires outline, mid-tones, and highlights/shadows.',
        steps: [
          {
            action: 'Week 1: Highlights only',
            teacherDoes: 'Draws outline and adds mid-tones. Says: "I\'ve drawn the sphere shape and added the grey tones. Now you finish it - use the eraser to add the highlights where the light hits."',
            pupilDoes: 'Uses eraser to create highlights on the sphere.',
          },
          {
            action: 'Celebrate completion',
            teacherDoes: 'Says: "You\'ve finished the tonal study. Look - the sphere looks 3D because you added those highlights."',
            pupilDoes: 'Sees completed artwork with their contribution making it look three-dimensional.',
          },
          {
            action: 'Week 2: Shadows + Highlights',
            teacherDoes: 'Draws outline and light mid-tones only. Says: "I\'ve started the tones. Now you add the darker shadows and the highlights."',
            pupilDoes: 'Adds shadows with pencil and highlights with eraser.',
          },
        ],
      },
      {
        subject: 'Music',
        topic: 'Composing an 8-bar melody',
        scenario: 'Year 8 composing a melody in C major. A complete melody needs an opening phrase, development, and a concluding phrase.',
        steps: [
          {
            action: 'Week 1: Final two bars only',
            teacherDoes: 'Composes bars 1-6. Says: "I\'ve written the opening and middle of the melody. Now you finish it - write the last two bars. Remember, it should end on C to sound finished."',
            pupilDoes: 'Writes final two bars, ending on note C.',
          },
          {
            action: 'Celebrate completion',
            teacherDoes: 'Plays the full melody. Says: "Listen to your composition - you wrote that ending."',
            pupilDoes: 'Hears complete 8-bar melody with their contribution.',
          },
          {
            action: 'Week 2: Final four bars',
            teacherDoes: 'Composes bars 1-4 only. Says: "I\'ve written the opening. Now you compose the second half - develop the idea and bring it to an ending."',
            pupilDoes: 'Composes bars 5-8, developing the melody and ending on C.',
          },
        ],
      },
      {
        subject: 'PE',
        topic: 'Performing a gymnastics sequence',
        scenario: 'Year 7 performing a floor sequence with travel, balance, and finish. The complete sequence needs an opening travel, a held balance, and a finishing pose.',
        steps: [
          {
            action: 'Week 1: Finishing pose only',
            teacherDoes: 'Demonstrates and guides through travel and balance. Says: "I\'ve helped you with the cartwheel and the arabesque balance. Now you finish it - hold your finishing pose for three seconds."',
            pupilDoes: 'Performs finishing pose, holding for three seconds.',
          },
          {
            action: 'Celebrate completion',
            teacherDoes: 'Says: "You completed the sequence. That finish was controlled and confident."',
            pupilDoes: 'Experiences completing a full gymnastics sequence.',
          },
          {
            action: 'Week 2: Balance + Finish',
            teacherDoes: 'Guides travel element only. Says: "I\'ve helped you with the cartwheel. Now perform your balance and your finish."',
            pupilDoes: 'Performs arabesque balance transitioning into finishing pose.',
          },
        ],
      },
      {
        subject: 'MFL',
        topic: 'Writing a paragraph in French about hobbies',
        scenario: 'Year 8 writing about free time activities. A complete paragraph needs a statement of what they do, when they do it, and an opinion.',
        steps: [
          {
            action: 'Week 1: Opinion only',
            teacherDoes: 'Writes activity and time phrase. Says: "I\'ve written \'Je joue au football le weekend\' - I play football at the weekend. Now you finish it with your opinion. Start with \'C\'est...\'"',
            pupilDoes: 'Writes: "C\'est amusant" or "C\'est super."',
          },
          {
            action: 'Celebrate completion',
            teacherDoes: 'Says: "You\'ve finished a French paragraph. Read the whole thing aloud."',
            pupilDoes: 'Reads complete paragraph. Hears their opinion completing the text.',
          },
          {
            action: 'Week 2: Time phrase + Opinion',
            teacherDoes: 'Writes activity statement only. Says: "I\'ve written what you do. Now add when you do it and your opinion."',
            pupilDoes: 'Writes time phrase and opinion to complete the paragraph.',
          },
        ],
      },
      {
        subject: 'DT',
        topic: 'Assembling a phone holder',
        scenario: 'Year 9 making a wooden phone holder. Assembly requires fitting the base, attaching the back support, and securing with screws.',
        steps: [
          {
            action: 'Week 1: Final screws only',
            teacherDoes: 'Positions base and back support in clamps. Says: "I\'ve lined up the pieces and started the pilot holes. Now you finish it - drive in these two screws to secure it."',
            pupilDoes: 'Uses screwdriver to drive in final two screws.',
          },
          {
            action: 'Celebrate completion',
            teacherDoes: 'Says: "You\'ve assembled the phone holder. Test it with your phone - you built that."',
            pupilDoes: 'Tests completed phone holder. Sees functional product they finished.',
          },
          {
            action: 'Week 2: Attaching + Securing',
            teacherDoes: 'Positions base only. Says: "I\'ve got the base ready. Now you attach the back support and secure it with screws."',
            pupilDoes: 'Positions back support, drills pilot holes, drives in screws.',
          },
        ],
      },
      {
        subject: 'Drama',
        topic: 'Performing a monologue',
        scenario: 'Year 10 performing a 12-line monologue. Performance requires opening lines with character establishment, middle section with emotional build, and final lines with resolution.',
        steps: [
          {
            action: 'Week 1: Final four lines only',
            teacherDoes: 'Performs first eight lines demonstrating character. Says: "I\'ve shown the opening and the build-up. Now you finish it - perform the last four lines where the character makes their decision."',
            pupilDoes: 'Performs final four lines with appropriate emotion and pacing.',
          },
          {
            action: 'Celebrate completion',
            teacherDoes: 'Says: "You completed the monologue. That ending landed - the audience would feel that resolution."',
            pupilDoes: 'Experiences completing a full dramatic performance.',
          },
          {
            action: 'Week 2: Build-up + Resolution',
            teacherDoes: 'Performs opening four lines only. Says: "I\'ve established the character. Now you perform the emotional build and the ending."',
            pupilDoes: 'Performs middle and final sections, showing emotional progression.',
          },
        ],
      },
      {
        subject: 'RE',
        topic: 'Writing an evaluation answer',
        scenario: 'Year 9 evaluating the statement "Prayer is the most important part of being religious." A complete answer needs arguments for, arguments against, and a conclusion.',
        steps: [
          {
            action: 'Week 1: Conclusion only',
            teacherDoes: 'Writes arguments for and against. Says: "I\'ve written why some agree and disagree. Now you finish it - write your conclusion. Do you agree or disagree? Start with \'In conclusion, I think...\'"',
            pupilDoes: 'Writes: "In conclusion, I think prayer is important but not the most important because actions like helping others also matter."',
          },
          {
            action: 'Celebrate completion',
            teacherDoes: 'Says: "You\'ve finished the evaluation. Your conclusion brings together both sides and gives your view."',
            pupilDoes: 'Sees their conclusion completing a balanced argument.',
          },
          {
            action: 'Week 2: Counter-argument + Conclusion',
            teacherDoes: 'Writes arguments for only. Says: "I\'ve written why some people agree. Now you add the other side and your conclusion."',
            pupilDoes: 'Writes arguments against and conclusion.',
          },
        ],
      },
      {
        subject: 'Computing',
        topic: 'Writing a Python program with input, process, and output',
        scenario: 'Year 8 creating a program that asks for a name and age, then outputs a greeting. A complete program needs input commands, processing, and print output.',
        steps: [
          {
            action: 'Week 1: Print statement only',
            teacherDoes: 'Writes input and variable code. Says: "I\'ve written the code to get the name and age. Now you finish it - write the print statement. Use: print(\'Hello\', name, \'you are\', age)"',
            pupilDoes: 'Types the print statement and runs the program.',
          },
          {
            action: 'Celebrate completion',
            teacherDoes: 'Says: "You completed the program. Run it - it works because you wrote that output line."',
            pupilDoes: 'Runs program, sees their code producing the output.',
          },
          {
            action: 'Week 2: Processing + Output',
            teacherDoes: 'Writes input commands only. Says: "I\'ve written the inputs. Now you create a variable for next year\'s age and print a message."',
            pupilDoes: 'Writes processing line and print statement.',
          },
        ],
      },
      {
        subject: 'PSHE',
        topic: 'Creating a personal action plan',
        scenario: 'Year 8 creating a plan for improving sleep habits. A complete action plan needs goal identification, specific actions, and a review date.',
        steps: [
          {
            action: 'Week 1: Review date only',
            teacherDoes: 'Writes goal and specific actions with pupil input. Says: "We\'ve written that you want to get 8 hours sleep and that you\'ll stop screens at 9pm. Now you finish it - when will you review if this is working? Write the date and who you\'ll talk to."',
            pupilDoes: 'Writes: "I will review this on [date two weeks away] with my form tutor."',
          },
          {
            action: 'Celebrate completion',
            teacherDoes: 'Says: "You\'ve finished your action plan. It\'s got a goal, actions, and a review date. That\'s a complete plan."',
            pupilDoes: 'Sees completed action plan ready to implement.',
          },
          {
            action: 'Week 2: Actions + Review',
            teacherDoes: 'Writes goal statement only. Says: "We\'ve got your goal. Now you write what specific actions you\'ll take and when you\'ll review."',
            pupilDoes: 'Writes specific actions and review arrangements.',
          },
        ],
      },
    ],

    routines: [
      {
        routine: 'Lesson transitions',
        context: 'Tying a school tie at the start of the day',
        steps: [
          'Week 1: TA does entire knot except final pull. "I\'ve done the knot. Now just pull this end to tighten. You do the last bit."',
          'Pupil pulls narrow end. "Done. You tied your tie."',
          'Week 2: Leave the final loop and the pull. "Put the wide end through this loop, then pull tight."',
          'Week 3: Leave more steps. Continue working backward until full independence.',
        ],
        taRole: 'Do your steps quickly and without fuss. Use consistent language: "Now you finish it." Celebrate completion: "You tied your tie." Track which step you\'re on.',
      },
      {
        routine: 'Independent work',
        context: 'Logging onto the computer at the start of ICT',
        steps: [
          'Week 1: TA types username and password. "I\'ve typed your login. Now press Enter."',
          'Pupil presses Enter. "You logged in."',
          'Week 2: TA types username only. "I\'ve typed your username. Now type your password and press Enter."',
          'Week 3: Pupil does all three steps with a visual prompt card.',
        ],
        taRole: 'Prepare a visual login card for when they\'re ready. Track progress. From day one, the pupil experiences logging themselves in.',
      },
    ],

    troubleshooting: [
      {
        problem: 'Pupil refuses because they know you did the rest',
        cause: 'They feel the task isn\'t really theirs or it feels patronising',
        solution: 'Reframe it: "This is how athletes train - building from the finish line backwards. We\'re getting you finishing things independently." If resistance persists, do your steps before the lesson so they\'re less visible.',
      },
      {
        problem: 'No time to complete most of the task for one pupil',
        cause: 'Completing steps during the lesson takes too long',
        solution: 'Prepare templates in advance: partially completed paragraphs, partially solved equations. Your TA can run the backward chaining while you teach the class. Preparation time upfront saves intervention time later.',
      },
      {
        problem: 'They master the last step but struggle when you add more',
        cause: 'You moved backward too quickly',
        solution: 'Stay on each step longer. Aim for fluency (automatic), not just accuracy. The step should feel easy before you add complexity. Consider whether the next step is too big and needs breaking down further.',
      },
      {
        problem: 'The task doesn\'t have clear sequential steps',
        cause: 'Wrong strategy choice for this type of task',
        solution: 'Backward chaining works best for linear, sequential tasks. If the task is non-linear (creative writing, project work), use chunking or visual supports instead.',
      },
      {
        problem: 'Other staff complete tasks differently',
        cause: 'Lack of consistency across team',
        solution: 'Brief all staff who work with the pupil. Create a visual showing the current target step. Add it to the support plan. Consistency is what builds independence - mixed approaches undermine progress.',
      },
    ],

    scripts: {
      teacher: {
        starting: [
          '"I\'ve done the first parts. Now you finish it."',
          '"Just this last step - you do it."',
          '"I\'ve got you to the end. Your job is to complete it."',
        ],
        during: [
          '"Keep going - you\'re finishing this."',
          '"Nearly there. Do this last bit."',
          '"That\'s right. Now finish it off."',
        ],
        ifStuck: [
          '"Look at what\'s already done. You just need this last part."',
          '"I\'ll show you once, then you do it."',
          '"Remember, you\'ve done this step before. You can do it."',
        ],
        ending: [
          '"You finished it. The whole thing is done because you finished it."',
          '"See? You completed the task."',
          '"Tomorrow we\'ll leave a bit more for you."',
        ],
      },
      ta: {
        role: 'Complete the earlier steps efficiently. Use consistent language for the handover. Celebrate completion. Track which step you\'re working on and communicate progress to the teacher.',
        keyPhrases: [
          '"I\'ve done this part. Now you finish it."',
          '"Just this last bit."',
          '"You finished it."',
          '"Tomorrow we\'ll leave more for you."',
        ],
        avoid: [
          'Making the handover awkward or over-explained',
          'Moving backward before the current step is fluent',
          'Completing the final step for them',
          'Forgetting to celebrate the completion',
        ],
      },
    },

    noTaAdaptations: {
      overview: "Backward chaining can be set up to run independently once the pupil understands the routine. The key is clear visual supports showing what's already done and what they complete.",
      keyAdjustments: [
        "Prepare partially-completed work samples in advance that pupils pick up independently",
        "Use colour-coded worksheets where their section is highlighted",
        "Create 'finish it' task cards they can work through without adult prompting",
        "Set up a self-check station where they compare their ending to a model answer",
      ],
      independenceStrategies: [
        "Teach the routine: 'Find your yellow section. Complete it. Check the answer. Put in done tray.'",
        "Gradually reduce how much is pre-completed as they build confidence",
        "Use self-assessment checklists so they know when they've successfully finished",
      ],
      peerSupportOptions: [
        "Pair with a peer who has completed the task - they can confirm the finish is correct",
        "Use reciprocal backward chaining where two pupils complete different ending sections",
        "Create peer 'quality checkers' who verify completed work against success criteria",
      ],
    },
  },

  prepPlan: [
    {
      time: '3 mins',
      action: 'Choose your task',
      details: 'Pick a task the pupil regularly fails to complete. It must have sequential steps. Writing tasks, maths procedures, and routines work well.',
    },
    {
      time: '4 mins',
      action: 'Do a task analysis',
      details: 'List every step from start to finish. Write these down - you\'ll need to know exactly where to start and how to progress backward.',
    },
    {
      time: '2 mins',
      action: 'Prepare your "final step only" version',
      details: 'What will you pre-complete? A partially written paragraph? A nearly-solved equation? A nearly-tied tie? Prepare this in advance.',
    },
    {
      time: '2 mins',
      action: 'Brief relevant staff',
      details: 'Show TA the task analysis and explain which step the pupil is currently on. Agree language: "Now you finish it."',
    },
    {
      time: '1 min',
      action: 'Plan your tracking',
      details: 'Note today\'s target step. After the lesson, record whether to stay at this step or move backward. Simple ticks on your task analysis work fine.',
    },
  ],

  printableSummary: `BACKWARD CHAINING

WHAT: Complete most of the task, leaving only the final step(s) for the pupil. Work backward over time until they do the whole thing.

WHY: The pupil always finishes. This builds self-efficacy - the belief that they CAN complete tasks.

HOW:
1. Pick a sequential task the pupil struggles to complete
2. Break it into steps (task analysis)
3. Complete all steps except the last one
4. Cue: "Now you finish it"
5. Celebrate: "You finished it"
6. Add steps backward as each becomes fluent

COMMON MISTAKES:
- Moving backward too quickly
- Not celebrating the completion
- Inconsistent approaches across staff

WHEN YOU SEE:
- Starts tasks but rarely completes them
- "I can't do it" before really trying
- EHCP says "gives up before finishing work"`,

  quickChecklist: [
    'Identified a sequential task the pupil struggles to complete',
    'Written out all steps (task analysis)',
    'Prepared the pre-completed version leaving just the last step',
    'Briefed TA on current target step',
    'Used simple cue: "Now you finish it"',
    'Celebrated completion: "You finished it"',
    'Recorded whether to move backward or stay at current step',
  ],

  ehcpPhrases: [
    'requires tasks to be completed with the pupil',
    'gives up before completing work',
    'needs support to see tasks through',
    'lacks confidence with extended tasks',
    'struggles to complete multi-step activities',
    'requires encouragement to finish work',
    'benefits from structured task completion',
  ],

  relatedStrategies: ['task-analysis', 'chunking-one-step-instructions', 'prompt-fading'],
};
