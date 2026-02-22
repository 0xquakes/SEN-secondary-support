import { Strategy } from '@/types';

export const modellingStrategy: Strategy = {
  id: 'modelling-001',
  slug: 'explicit-modelling-i-do-we-do-you-do',
  title: 'Explicit Modelling (I Do, We Do, You Do)',
  shortDescription: 'Teacher demonstrates with think-aloud, then guides practice together, then supports independent work.',
  longDescription: 'Explicit modelling breaks learning into three clear phases: "I Do" where the teacher demonstrates while thinking aloud, "We Do" where teacher and pupil practise together with guided support, and "You Do" where the pupil works independently with help available. This gradual release of responsibility ensures pupils see exactly what success looks like before attempting tasks alone, dramatically reducing confusion and building confidence.',
  difficulty: 'beginner',
  prepTime: '10 mins',
  areaOfNeed: 'Developing Independence',
  subjects: ['English', 'Maths', 'Science', 'History', 'Geography', 'Art', 'Music', 'PE', 'MFL', 'DT', 'Drama', 'RE', 'Computing', 'PSHE'],
  routines: ['Teaching new skills', 'Introducing procedures', 'Multi-step tasks', 'Problem-solving activities'],
  tags: ['demonstration', 'scaffolding', 'think-aloud', 'gradual release', 'explicit instruction', 'modelling'],

  content: {
    problem: {
      headline: 'Pupils don\'t know what "doing it right" looks like',
      description: 'You explain the task, give clear instructions, and say "Off you go." The pupil stares at their page. They have no idea where to start. They didn\'t understand your explanation because they\'ve never seen someone actually do it. They need to watch it happen, not just hear about it.',
      signs: [
        'Pupil asks "What do I do?" immediately after instructions',
        'Work looks completely different from what you demonstrated verbally',
        'Pupil waits for peers to start, then copies their approach',
        'Makes the same mistakes repeatedly despite corrections',
        'EHCP mentions "learns best from demonstration" or "needs explicit instruction"',
        'Freezes when faced with new types of problems',
      ],
    },

    explanation: {
      definition: 'Explicit modelling uses a three-phase approach: "I Do" (teacher demonstrates while thinking aloud), "We Do" (guided practice together), and "You Do" (independent practice with support available). The teacher shows exactly what thinking and doing look like, then gradually releases responsibility to the pupil.',
      whyItWorks: 'Many pupils cannot translate verbal instructions into action. They need to see the process happen. When you model with a think-aloud, you make invisible thinking visible. The pupil sees not just what you do, but why you do it and how you make decisions. The "We Do" phase lets them try with your support before going solo. By the time they reach "You Do," they\'ve already succeeded twice with help. The cognitive load is managed, confidence is built, and the path to success is clear.',
      keyPrinciples: [
        'Show, don\'t just tell',
        'Make your thinking visible through think-aloud',
        'Guide before expecting independence',
        'Adjust phase length based on pupil needs',
        'Keep support available during "You Do"',
      ],
    },

    howTo: {
      steps: [
        {
          step: 1,
          title: 'Plan your "I Do" demonstration',
          instruction: 'Before the lesson, work through the task yourself. Note the decisions you make, the steps you take, and any tricky points. Plan exactly what you\'ll say during your think-aloud.',
          tip: 'Write down your think-aloud script for the first few times. It\'s harder than it looks.',
        },
        {
          step: 2,
          title: 'Deliver "I Do" with think-aloud',
          instruction: 'Demonstrate the task while verbalising every thought. Narrate your decisions, your checking, your reasoning. Pupils watch and listen—no participation yet.',
          teacherSays: '"Watch me do this first. I\'m going to talk through everything I\'m thinking. Your job is just to watch and listen."',
          tip: 'Go slower than feels natural. What\'s obvious to you isn\'t obvious to them.',
        },
        {
          step: 3,
          title: 'Check understanding before "We Do"',
          instruction: 'Ask a quick question to check they followed. "What did I do first? Why did I check that?" Don\'t move on if they can\'t answer.',
          teacherSays: '"Before we try together, tell me: what was the first thing I did?"',
        },
        {
          step: 4,
          title: 'Guide through "We Do" together',
          instruction: 'Do another example together. Ask them to tell you what comes next, but you\'re still in control. They\'re contributing, you\'re guiding. Share the cognitive load.',
          teacherSays: '"Now we\'ll do one together. You tell me what to do next, and I\'ll write it. What\'s our first step?"',
          tip: 'If they get stuck, model that bit again. Don\'t just tell them—show them.',
        },
        {
          step: 5,
          title: 'Transition to "You Do" with support',
          instruction: 'Move them to independent work, but stay close. Let them know help is available. Watch for early errors and intervene quickly.',
          teacherSays: '"Now it\'s your turn. I\'ll be right here if you get stuck. Start with step one—what is it?"',
          tip: 'Position yourself to see their work. Catch errors early, before they become habits.',
        },
        {
          step: 6,
          title: 'Adjust phase length as needed',
          instruction: 'Some pupils need longer "I Do" with multiple examples. Some need extended "We Do" before going solo. Some can shorten "We Do" if "I Do" was clear. Watch and adapt.',
          tip: 'There\'s no fixed ratio. Match the phases to the pupil and the complexity of the task.',
        },
      ],
      commonMistakes: [
        'Rushing "I Do" because you think it\'s obvious',
        'Silent demonstration without think-aloud (they can\'t see your thinking)',
        'Skipping "We Do" and jumping straight to independent work',
        'Moving to "You Do" before they\'re ready',
        'Walking away during "You Do" (stay available)',
        'Using the same phase length for every pupil and every task',
      ],
      timeToImplement: '10 minutes prep for think-aloud planning',
    },

    workedExamples: [
      {
        subject: 'English',
        topic: 'Writing a topic sentence for a paragraph',
        scenario: 'Year 9 working on essay writing. Pupil working at KS2 level needs to write topic sentences but doesn\'t know where to start.',
        steps: [
          {
            action: 'I Do: Model with think-aloud',
            teacherDoes: 'Display paragraph question: "Why is Lady Macbeth a powerful character?" Think aloud: "Right, my topic sentence needs to answer this question directly. I\'m going to start with \'Lady Macbeth is powerful because...\' That way my reader knows exactly what this paragraph is about. Let me write: Lady Macbeth is powerful because she controls Macbeth\'s actions."',
            pupilDoes: 'Watches and listens. Sees the teacher\'s thinking process.',
          },
          {
            action: 'Check understanding',
            teacherDoes: 'Ask: "What did I do first? Why did I start with \'Lady Macbeth is powerful because\'?"',
            pupilDoes: 'Responds: "You answered the question directly."',
          },
          {
            action: 'We Do: Guide together',
            teacherDoes: 'New question: "Why is Macbeth an ambitious character?" Say: "Now let\'s do one together. What should we start with to answer this question directly?"',
            pupilDoes: 'Says: "Macbeth is ambitious because..." Teacher writes it. Together they complete: "Macbeth is ambitious because he wants to become king."',
          },
          {
            action: 'You Do: Independent with support',
            teacherDoes: 'New question: "Why is the witches\' prophecy important?" Say: "Your turn. Write a topic sentence that answers this question directly. I\'m right here."',
            pupilDoes: 'Writes: "The witches\' prophecy is important because..." Teacher monitors and prompts if needed.',
          },
        ],
      },
      {
        subject: 'Maths',
        topic: 'Solving two-step equations',
        scenario: 'Year 8 learning to solve equations like 2x + 3 = 11. Pupil working at KS2 level needs explicit demonstration of the process.',
        steps: [
          {
            action: 'I Do: Model with think-aloud',
            teacherDoes: 'Write 2x + 5 = 13 on board. Think aloud: "My goal is to get x on its own. I need to undo the operations. I see +5, so I\'ll do the opposite—subtract 5 from both sides. 13 minus 5 is 8, so now I have 2x = 8. Still not alone—x is being multiplied by 2. Opposite of multiply is divide. 8 divided by 2 is 4. So x = 4. Let me check: 2 times 4 is 8, plus 5 is 13. Yes!"',
            pupilDoes: 'Watches each step. Hears the reasoning behind each decision.',
          },
          {
            action: 'Check understanding',
            teacherDoes: 'Ask: "What did I do first? Why did I subtract 5?"',
            pupilDoes: 'Responds: "Because there was +5 and you needed to undo it."',
          },
          {
            action: 'We Do: Guide together',
            teacherDoes: 'Write 3x + 2 = 14. Say: "Your turn to guide me. What should I do first to get x on its own?" Pupil says subtract 2. Teacher writes it, asks: "Now what?" Continue together.',
            pupilDoes: 'Directs each step while teacher writes. Gets to x = 4. Checks together.',
          },
          {
            action: 'You Do: Independent with support',
            teacherDoes: 'Write 4x + 1 = 17. Say: "Now solve this one yourself. I\'ll watch. Talk me through it as you go if you want."',
            pupilDoes: 'Works through the problem. Teacher observes, prompts if stuck: "What operation do you see? What\'s the opposite?"',
          },
        ],
      },
      {
        subject: 'Science',
        topic: 'Drawing a labelled diagram of a cell',
        scenario: 'Year 7 learning to draw and label plant cells. Pupil working at KS1 level needs to see the process modelled before attempting independently.',
        steps: [
          {
            action: 'I Do: Model with think-aloud',
            teacherDoes: 'Draw on board while talking: "First I\'m drawing a rectangle for the cell wall—it\'s the outside, so I draw it first. Now inside that, I\'m drawing another rectangle close to the edge—that\'s the cell membrane, it\'s just inside the wall. Now a big oval in the middle—that\'s the vacuole, it takes up most of the space. Small circle near the edge—that\'s the nucleus. Now I\'m adding labels with ruler-straight lines. Each line touches the part and points to the label."',
            pupilDoes: 'Watches the sequence. Sees which part is drawn first, second, third.',
          },
          {
            action: 'Check understanding',
            teacherDoes: 'Ask: "What did I draw first? Why did I draw the cell wall before the other parts?"',
            pupilDoes: 'Responds: "Because it\'s on the outside."',
          },
          {
            action: 'We Do: Guide together',
            teacherDoes: 'Give pupil paper. Say: "Let\'s draw one together. I\'ll draw on the board, you draw on your paper. What do we draw first?" Pupil says cell wall. Both draw it. Continue step by step together.',
            pupilDoes: 'Draws each part as teacher draws it on board. Checks their drawing matches.',
          },
          {
            action: 'You Do: Independent with support',
            teacherDoes: 'Say: "Now draw another one without me drawing at the same time. You can look at our first one if you need a reminder. I\'ll watch."',
            pupilDoes: 'Draws cell independently. Teacher observes, reminds of sequence if pupil gets stuck: "What comes after the membrane?"',
          },
        ],
      },
      {
        subject: 'History',
        topic: 'Analysing a historical source',
        scenario: 'Year 8 learning to analyse sources about the Black Death. Pupil working at KS2 level needs to see how to extract information and make inferences from a source.',
        steps: [
          {
            action: 'I Do: Model with think-aloud',
            teacherDoes: 'Display a medieval illustration of plague doctors. Think aloud: "First, I need to describe what I can see. I can see a person wearing a long robe and a bird-like mask. Now I need to think about what this tells me. The mask looks strange—why would they wear that? I know they thought bad smells caused disease, so the mask probably held herbs to block smells. Let me write: This source shows that people in medieval times believed disease was spread through bad air, because the doctor wears a mask to protect from smells."',
            pupilDoes: 'Watches and listens. Sees the process of looking, describing, then inferring.',
          },
          {
            action: 'We Do: Guide together',
            teacherDoes: 'Display a new source—a medieval drawing of people fleeing a city. Say: "Let\'s do this one together. First step—what can you see in this picture?" Pupil describes people leaving. Ask: "Good. Now what does this tell us about how people reacted to the plague?"',
            pupilDoes: 'Describes what they see. With teacher prompting, makes inference: "People tried to run away from the plague."',
          },
          {
            action: 'You Do: Independent with support',
            teacherDoes: 'Give pupil a new source—a written account of plague symptoms. Say: "Now your turn. First, describe what the source says. Then tell me what it shows about the Black Death. I\'ll be right here."',
            pupilDoes: 'Works through the two steps independently. Teacher prompts if needed: "What can you see/read? What does that tell you?"',
          },
        ],
      },
      {
        subject: 'Geography',
        topic: 'Reading a six-figure grid reference',
        scenario: 'Year 7 learning map skills. Pupil working at KS2 level needs explicit demonstration of how to find a six-figure grid reference.',
        steps: [
          {
            action: 'I Do: Model with think-aloud',
            teacherDoes: 'Display OS map on board. Think aloud: "I need to find grid reference 456 789. I remember: along the corridor first, then up the stairs. So 456 is my eastings—I go along the bottom until I find 45, then estimate six-tenths of the way to 46. I\'ll put my finger there. Now 789 is my northings—up the side until I find 78, then estimate nine-tenths of the way to 79. Where my lines meet—that\'s the spot. I can see it\'s the church."',
            pupilDoes: 'Watches teacher trace the route with their finger. Sees the "along then up" sequence.',
          },
          {
            action: 'We Do: Guide together',
            teacherDoes: 'Say: "Let\'s find 523 647 together. What do we do first?" Pupil says go along. Ask: "Which number do we look for along the bottom?" Guide them through each step.',
            pupilDoes: 'Directs each step: finds 52 along the bottom, estimates three-tenths, then finds 64 up the side, estimates seven-tenths. Identifies the feature at that point.',
          },
          {
            action: 'You Do: Independent with support',
            teacherDoes: 'Give pupil a grid reference to find: 348 712. Say: "Find this one on your own map. Talk through what you\'re doing if it helps. I\'m here if you get stuck."',
            pupilDoes: 'Works through the process independently. Teacher watches and prompts: "Have you gone along first? What comes next?"',
          },
        ],
      },
      {
        subject: 'Art',
        topic: 'Blending tones with pencil shading',
        scenario: 'Year 9 learning observational drawing. Pupil working at KS2 level needs to see how to create smooth tonal gradients.',
        steps: [
          {
            action: 'I Do: Model with think-aloud',
            teacherDoes: 'Draw a sphere shape on paper. Think aloud: "I want to show this is 3D, so I need light and dark areas. The light is coming from here, so this side is lightest. I\'ll press very lightly with my pencil—see how faint that is? Now as I move to the shadow side, I press harder gradually. I\'m using small circular motions, overlapping them, to make it smooth. I don\'t want lines—I want soft blending. The darkest part is here at the edge, so I press hardest there."',
            pupilDoes: 'Watches the pencil pressure change. Sees the circular motion technique for smooth blending.',
          },
          {
            action: 'We Do: Guide together',
            teacherDoes: 'Give pupil paper with sphere outline. Say: "Let\'s shade together. Where should the lightest part be? Point to it." Pupil points. "Good. Start there with very light pressure. I\'ll do the same on mine. Now let\'s both move towards the shadow..."',
            pupilDoes: 'Shades in sync with teacher. Copies the light-to-dark progression and circular motion technique.',
          },
          {
            action: 'You Do: Independent with support',
            teacherDoes: 'Provide a new sphere outline. Say: "Now shade this one yourself. Remember: light pressure where the light hits, darker as you move to shadow. I\'ll watch."',
            pupilDoes: 'Shades independently. Teacher observes and gives specific feedback: "Good light pressure there—now gradually increase it as you move across."',
          },
        ],
      },
      {
        subject: 'Music',
        topic: 'Playing a chord progression on keyboard',
        scenario: 'Year 8 learning to play basic chord sequences. Pupil working at KS2 level needs to see finger positioning and chord changes demonstrated.',
        steps: [
          {
            action: 'I Do: Model with think-aloud',
            teacherDoes: 'Sit at keyboard visible to pupil. Think aloud: "I\'m playing C, F, G, C. For C chord, my thumb goes on C, middle finger on E, pinky on G. I press all three together. Now to change to F—I lift my hand and move it. Thumb on F, middle finger on A, pinky on C. I\'m looking at where my thumb needs to go first, then the other fingers follow. Let me play the whole sequence slowly: C... F... G... C."',
            pupilDoes: 'Watches finger placement. Sees the hand lift and reposition between chords.',
          },
          {
            action: 'We Do: Guide together',
            teacherDoes: 'Say: "Let\'s play the C chord together. Find C with your thumb—that\'s the white key before the two black keys. Now put your middle finger on E, skip one white key. Pinky on G, skip another. Ready? Play together on three..."',
            pupilDoes: 'Positions fingers with teacher guidance. Plays C chord, then F chord, then G chord together with teacher counting.',
          },
          {
            action: 'You Do: Independent with support',
            teacherDoes: 'Say: "Now play C, F, G, C on your own. Take your time between chord changes. I\'ll count you in, but you play by yourself."',
            pupilDoes: 'Plays the progression independently. Teacher watches finger placement and prompts if needed: "Check your thumb position on that chord."',
          },
        ],
      },
      {
        subject: 'PE',
        topic: 'Performing a basketball chest pass',
        scenario: 'Year 7 learning passing in basketball. Pupil working at KS2 level needs explicit demonstration of the technique before practising.',
        steps: [
          {
            action: 'I Do: Model with think-aloud',
            teacherDoes: 'Hold basketball at chest height. Think aloud: "Watch my hand position—fingers spread, thumbs behind the ball. The ball starts at my chest. I\'m going to step forward with one foot as I push. Now I push the ball away from my chest and flick my wrists—see how my thumbs end up pointing down? That flick gives the pass power and accuracy. I\'m aiming at my partner\'s chest." Demonstrates the complete pass to a partner.',
            pupilDoes: 'Watches the hand position, the step, and the wrist flick. Sees where the pass is aimed.',
          },
          {
            action: 'We Do: Guide together',
            teacherDoes: 'Give pupil the ball. Say: "Let\'s do this together step by step. Hold the ball at your chest—show me your hands. Good, spread those fingers more. Now we\'ll do the step and push together. Ready? Step and push!" Guide them through three attempts.',
            pupilDoes: 'Performs each element with teacher counting and cueing. Feels the step-push timing with verbal support.',
          },
          {
            action: 'You Do: Independent with support',
            teacherDoes: 'Say: "Now pass to your partner five times on your own. Remember: chest height, step forward, flick those wrists. I\'ll watch and give you feedback."',
            pupilDoes: 'Performs chest passes independently. Teacher observes and gives specific feedback: "Great step that time—try to flick your wrists more on the next one."',
          },
        ],
      },
      {
        subject: 'MFL',
        topic: 'Forming the perfect tense in French',
        scenario: 'Year 9 learning to describe past events in French. Pupil working at KS2 level needs to see how to construct a sentence with avoir and a past participle.',
        steps: [
          {
            action: 'I Do: Model with think-aloud',
            teacherDoes: 'Write on board: "I played football." Think aloud: "To say this in French, I need three parts. First, the subject—\'I\' is \'J\'. Second, I need the helper verb \'avoir\' matched to \'I\'—that\'s \'ai\'. Third, I need the past participle of \'jouer\'—I take off the -er and add -é, so \'joué\'. Put it together: J\'ai joué. Then I add \'au foot\' for football. J\'ai joué au foot." Writes each part in a different colour.',
            pupilDoes: 'Watches the sentence being built in three parts. Sees the colour-coding of subject, avoir form, and past participle.',
          },
          {
            action: 'We Do: Guide together',
            teacherDoes: 'Write: "I watched television." Say: "Let\'s build this together. What\'s our subject and avoir form for \'I\'?" Pupil says J\'ai. "Good. Now \'regarder\'—take off the -er and add...?" Guide through to: J\'ai regardé la télé.',
            pupilDoes: 'Provides each part with teacher prompting. Writes the sentence alongside the teacher.',
          },
          {
            action: 'You Do: Independent with support',
            teacherDoes: 'Write: "I listened to music." Say: "Build this one yourself. Remember the three parts. I\'m here if you need a hint."',
            pupilDoes: 'Constructs: J\'ai écouté de la musique. Teacher prompts if stuck: "What\'s your avoir form? Now change \'écouter\' to a past participle."',
          },
        ],
      },
      {
        subject: 'DT',
        topic: 'Using a coping saw safely',
        scenario: 'Year 7 learning to cut curves in wood. Pupil working at KS2 level needs explicit demonstration of safe technique before using the tool.',
        steps: [
          {
            action: 'I Do: Model with think-aloud',
            teacherDoes: 'Secure wood in vice. Think aloud: "First, safety—wood must be clamped tight so it doesn\'t move. I hold the saw handle firmly with one hand. The blade teeth point downwards and towards me because the saw cuts on the pull stroke. I\'m standing balanced, not leaning over. I start with gentle strokes to create a groove, then longer strokes. I let the saw do the work—I don\'t push hard. To turn a corner, I keep the blade moving while I slowly rotate the frame."',
            pupilDoes: 'Watches hand position, stance, and the gentle sawing action. Sees the technique for turning corners.',
          },
          {
            action: 'We Do: Guide together',
            teacherDoes: 'Say: "Your turn to hold the saw. Show me your grip—good. Now start with small strokes while I guide your hand. Feel how little pressure you need? Keep that rhythm. I\'ll tell you when to start turning."',
            pupilDoes: 'Holds saw with correct grip. Makes cuts with teacher guiding hand pressure and pace.',
          },
          {
            action: 'You Do: Independent with support',
            teacherDoes: 'Mark a curved line on new piece of wood. Say: "Now cut along this line yourself. Remember: gentle strokes, let the saw work. I\'m right here watching."',
            pupilDoes: 'Cuts along the marked line independently. Teacher stands close, ready to intervene on safety issues, gives technique feedback.',
          },
        ],
      },
      {
        subject: 'Drama',
        topic: 'Using thought tracking in performance',
        scenario: 'Year 8 exploring character in a devised piece. Pupil working at KS2 level needs to see how to freeze and speak inner thoughts convincingly.',
        steps: [
          {
            action: 'I Do: Model with think-aloud',
            teacherDoes: 'Set up a scene: a pupil receiving exam results. Act out opening the envelope, then freeze dramatically. Step out of the freeze slightly and speak: "Everyone\'s watching me. What if I failed? My hands are shaking. I can\'t let them see I\'m scared..." Return to freeze, then continue the scene. Explain: "See how I froze at the most tense moment? My thought track revealed feelings the audience couldn\'t see."',
            pupilDoes: 'Watches the freeze technique and the shift into inner voice. Sees how thoughts contrast with the external action.',
          },
          {
            action: 'We Do: Guide together',
            teacherDoes: 'Say: "Let\'s do a scene together—you\'re about to give a speech to the class. Walk to the front, then freeze when I say \'freeze.\' I\'ll help you with your thought track." Pupil walks, freezes. Teacher prompts: "What might your character be thinking right now? Say it out loud."',
            pupilDoes: 'Performs the action and freezes. With prompting, speaks thoughts: "Why did I volunteer for this? Everyone\'s staring at me."',
          },
          {
            action: 'You Do: Independent with support',
            teacherDoes: 'Say: "Now do a scene where you\'re waiting for a friend who\'s late. Walk in, check your phone, then freeze yourself at a tense moment and do your own thought track. I\'ll watch."',
            pupilDoes: 'Performs the scene independently, choosing when to freeze and what inner thoughts to express. Teacher gives feedback on timing and voice contrast.',
          },
        ],
      },
      {
        subject: 'RE',
        topic: 'Explaining different perspectives on an ethical issue',
        scenario: 'Year 10 studying medical ethics. Pupil working at KS3 level needs to see how to structure an explanation of religious and non-religious viewpoints.',
        steps: [
          {
            action: 'I Do: Model with think-aloud',
            teacherDoes: 'Display question: "What do Christians and atheists think about euthanasia?" Think aloud: "I need to explain two viewpoints clearly. I\'ll start with Christians. I\'ll state their view, then explain why using their beliefs. Christians generally oppose euthanasia because they believe life is sacred—only God should decide when life ends. Now the atheist view. Atheists might support euthanasia because they believe individuals should have autonomy over their own bodies, and reducing suffering is important. I\'ve given a view and a reason for each."',
            pupilDoes: 'Watches the structure: viewpoint + belief that explains it, for each perspective.',
          },
          {
            action: 'We Do: Guide together',
            teacherDoes: 'New question: "What do Muslims and humanists think about animal testing?" Say: "Let\'s do Muslims first. What might their view be?" Pupil suggests. "Good. Now why—what Islamic belief explains that view?" Guide to a complete response for both perspectives.',
            pupilDoes: 'Contributes ideas for each viewpoint. With guidance, structures: view + religious/philosophical reason for each.',
          },
          {
            action: 'You Do: Independent with support',
            teacherDoes: 'Question: "What do Buddhists and utilitarians think about capital punishment?" Say: "Write your answer showing both viewpoints with reasons. I\'ll check your structure."',
            pupilDoes: 'Writes independently, following the view + reason structure for both perspectives. Teacher prompts: "You\'ve got the Buddhist view—now what belief explains why they think that?"',
          },
        ],
      },
      {
        subject: 'Computing',
        topic: 'Writing a for loop in Python',
        scenario: 'Year 8 learning programming. Pupil working at KS2 level needs to see how a for loop is structured and how to modify it.',
        steps: [
          {
            action: 'I Do: Model with think-aloud',
            teacherDoes: 'Type code on screen. Think aloud: "I want to print the numbers 1 to 5. I\'ll use a for loop. First I write \'for\'—that tells Python I\'m starting a loop. Then I need a variable name to hold each number—I\'ll call it \'i\'. Then \'in range(1, 6)\'—this means start at 1 and stop before 6, so 1, 2, 3, 4, 5. Don\'t forget the colon at the end. Now I indent the next line—this is what happens each time. I\'ll write print(i). Let me run it." Shows output: 1, 2, 3, 4, 5.',
            pupilDoes: 'Watches each element being typed with explanation. Sees the colon and indentation.',
          },
          {
            action: 'We Do: Guide together',
            teacherDoes: 'Say: "Now let\'s write one that prints numbers 1 to 10. What do I type first?" Pupil says \'for\'. "Then what?" Guide through each element. "What numbers go in range() to get 1 to 10?" Help pupil see it\'s range(1, 11). Run it together.',
            pupilDoes: 'Directs each part of the code. Realises range needs to go one higher than the end number.',
          },
          {
            action: 'You Do: Independent with support',
            teacherDoes: 'Say: "Now write a for loop that prints the numbers 5 to 15. Type it yourself. I\'ll watch your screen."',
            pupilDoes: 'Types the for loop independently. Teacher watches and prompts if stuck: "Check your range numbers—where do you want to start? Where do you want to end?"',
          },
        ],
      },
      {
        subject: 'PSHE',
        topic: 'Assertive communication when setting boundaries',
        scenario: 'Year 9 learning about healthy relationships. Pupil working at KS3 level needs to see how to communicate boundaries clearly without aggression.',
        steps: [
          {
            action: 'I Do: Model with think-aloud',
            teacherDoes: 'Set up scenario: a friend keeps borrowing things without asking. Think aloud: "I need to be assertive—not aggressive, not passive. I\'ll use an \'I\' statement. I\'ll say how I feel, what the problem is, and what I need. Watch me." Role-play speaking to the friend: "I feel frustrated when you take my things without asking, because I worry I won\'t get them back. I need you to ask me first. Is that okay?" Explain: "See how I didn\'t shout or blame, but I was clear about what I need."',
            pupilDoes: 'Watches the calm tone and the I-statement structure. Sees the contrast with aggressive or passive responses.',
          },
          {
            action: 'We Do: Guide together',
            teacherDoes: 'New scenario: someone keeps interrupting you. Say: "Let\'s build an assertive response together. Start with \'I feel...\'—what emotion?" Pupil suggests. "Good. Now \'when you...\'—what\'s the behaviour?" Guide through to a complete I-statement.',
            pupilDoes: 'Constructs the response with teacher scaffolding: "I feel annoyed when you interrupt me, because I lose my train of thought. I need you to let me finish speaking."',
          },
          {
            action: 'You Do: Independent with support',
            teacherDoes: 'New scenario: a friend pressures you to share your homework. Say: "Create an assertive response yourself. Use the I-statement format. Then say it out loud to me."',
            pupilDoes: 'Writes and then speaks their assertive response independently. Teacher gives feedback on tone and clarity: "Good structure—try to keep your voice calm and steady when you say it."',
          },
        ],
      },
    ],

    routines: [
      {
        routine: 'Starting a new type of problem',
        context: 'Any time pupils encounter a new problem type, procedure, or skill they haven\'t done before.',
        steps: [
          'Announce: "This is new, so I\'ll show you first."',
          'I Do: Demonstrate one complete example with full think-aloud',
          'Check: "What did I do first? Why?"',
          'We Do: Guide through second example together',
          'You Do: Set independent task, stay close',
        ],
        taRole: 'During "I Do," ensure the pupil is watching, not trying to start their own work. During "You Do," sit beside the pupil. Prompt them to use the modelled steps: "What did Miss do first? Do that."',
      },
      {
        routine: 'Returning to a previously taught skill',
        context: 'Revisiting something taught before but the pupil has forgotten the process.',
        steps: [
          'Quick "I Do" reminder: model one example with brief think-aloud',
          'Skip or shorten "We Do" if they show recognition',
          'Move to "You Do" with scaffolds available (worked example on desk)',
          'If "You Do" fails, return to "We Do"',
        ],
        taRole: 'Keep a worked example visible for the pupil to reference during "You Do." Point to it: "Look at how Miss did this one. What step are you on?"',
      },
    ],

    troubleshooting: [
      {
        problem: 'Pupil tries to start working during "I Do"',
        cause: 'They don\'t understand they should just watch, or they\'re eager to try.',
        solution: 'Be explicit: "Pencils down. Your only job right now is to watch and listen. You\'ll have your turn in a minute." Repeat this expectation at the start of each "I Do."',
      },
      {
        problem: 'Pupil can\'t answer check-for-understanding questions',
        cause: 'They weren\'t attending, or the demonstration was too fast.',
        solution: 'Model again, slower. Say: "Let me show you one more time. This time, I really need you to watch because I\'m going to ask you what I did." Consider breaking into smaller steps.',
      },
      {
        problem: '"We Do" feels like you\'re still doing all the work',
        cause: 'Pupil isn\'t confident enough to contribute, or questions aren\'t specific enough.',
        solution: 'Ask smaller questions: "Should I add or subtract here?" "Which number do I write first?" Give choices rather than open questions until confidence builds.',
      },
      {
        problem: 'Pupil succeeds in "We Do" but fails in "You Do"',
        cause: 'The jump from guided to independent is too big. They needed your prompts.',
        solution: 'Add a "You Do with scaffolds" phase: provide a worked example, checklist, or prompt card they can reference. Gradually remove these supports over time.',
      },
      {
        problem: 'No time for all three phases in the lesson',
        cause: 'Lesson pacing doesn\'t allow for full I-We-You sequence.',
        solution: 'It\'s better to do "I Do" and "We Do" well than to rush all three. End at "We Do" and start next lesson with a brief "I Do" reminder before moving to "You Do."',
      },
      {
        problem: 'Other pupils don\'t need this much modelling',
        cause: 'Differentiation challenge—some pupils can skip to "You Do" quickly.',
        solution: 'Release confident pupils to "You Do" after "I Do." Keep target pupil with you for "We Do." Use TA to continue modelling with target pupil while you circulate.',
      },
    ],

    scripts: {
      teacher: {
        starting: [
          '"This is new, so watch me first. I\'ll think out loud so you can hear my brain working."',
          '"Your job right now is just to watch and listen. Pencils down."',
          '"I\'m going to show you exactly how to do this, step by step."',
        ],
        during: [
          '"Now I\'m thinking... what should I do next? I need to..."',
          '"Let me check—does that make sense? Yes, because..."',
          '"Watch what I do here—this is the tricky bit."',
          '"Now we\'ll do one together. You tell me what to do."',
          '"What\'s my next step? You tell me and I\'ll write it."',
        ],
        ifStuck: [
          '"Let me show you that part again. Watch carefully."',
          '"I\'ll do this bit, you watch, then you try the next one."',
          '"Let\'s go back to doing it together for a minute."',
        ],
        ending: [
          '"You did that yourself—you followed exactly what I showed you."',
          '"See how you did the same steps I modelled? That\'s how learning works."',
          '"You\'ve got it now. Next time we\'ll do less \'we do\' and more \'you do\'."',
        ],
      },
      ta: {
        role: 'During "I Do," ensure the pupil is watching the teacher. During "We Do," echo the teacher\'s questions and prompts. During "You Do," stay close and refer the pupil back to the modelled example.',
        keyPhrases: [
          '"Watch Miss carefully."',
          '"What did Miss do first? Do that."',
          '"Look at the example. What comes next?"',
          '"Remember how Miss talked through her thinking? Try that."',
          '"You saw how to do this. You can do it."',
        ],
        avoid: [
          'Doing the work for the pupil during "You Do"',
          'Giving different instructions than the teacher modelled',
          'Rushing the pupil through "We Do"',
          'Removing the worked example too soon',
        ],
      },
    },

    noTaAdaptations: {
      overview: "The I Do, We Do, You Do structure can work without a TA by using peer partnerships for the 'We Do' phase and recorded models for reference.",
      keyAdjustments: [
        "Record your 'I Do' demonstrations so pupils can rewatch during independent work",
        "Create visual step-by-step guides that capture the modelling for reference",
        "Use the board/display as a permanent model pupils can look back at",
        "Provide worked examples on desks that mirror your demonstration",
      ],
      independenceStrategies: [
        "Teach pupils to use the 'check the model' strategy before asking for help",
        "Create self-help cards: 'Stuck? 1. Check the example. 2. Check your notes. 3. Check with a peer.'",
        "Use 'copy then adapt' worksheets where pupils replicate the model before trying independently",
      ],
      peerSupportOptions: [
        "Use peer partnerships for the 'We Do' phase instead of TA support",
        "Create mixed-ability pairs where stronger pupils can re-model for their partner",
        "Implement peer checking against the modelled success criteria",
      ],
    },
  },

  prepPlan: [
    { time: '3 mins', action: 'Work through the task yourself', details: 'Do the problem or task you\'ll model. Note decisions you make and any tricky points.' },
    { time: '4 mins', action: 'Script your think-aloud', details: 'Write down what you\'ll say during "I Do." Include your reasoning, not just the steps.' },
    { time: '2 mins', action: 'Plan your "We Do" questions', details: 'List the prompts you\'ll use: "What next?" "Why this?" "Should I add or subtract?"' },
    { time: '1 min', action: 'Brief TA', details: 'Explain the three phases. TA keeps pupil watching during "I Do," supports during "You Do."' },
  ],

  printableSummary: `EXPLICIT MODELLING (I DO, WE DO, YOU DO)

WHAT: Three-phase teaching—demonstrate, guide together, then independent work.

WHY: Pupils need to see success before attempting it. Verbal instructions aren't enough.

THE THREE PHASES:

I DO (Teacher demonstrates)
- Show the complete task while thinking aloud
- Make every decision visible: "I'm doing this because..."
- Pupils watch only—pencils down
- Check: "What did I do first? Why?"

WE DO (Guided practice together)
- Same type of task, done together
- Pupil tells you what to do, you write/do it
- Share the cognitive load
- Bridge between watching and doing

YOU DO (Independent with support)
- Pupil works independently
- Teacher/TA stays close
- Help is available
- Catch errors early

WHEN TO EXTEND/SHORTEN PHASES:
- Extend "I Do": New or complex skill, pupil not attending
- Extend "We Do": Pupil lacks confidence, gap between guided and independent
- Shorten "We Do": Pupil shows quick understanding, not their first time
- Stay close in "You Do": Always—even confident pupils need error-catching

COMMON MISTAKES:
x Silent demonstration (no think-aloud)
x Skipping "We Do"
x Moving to "You Do" too fast
x Walking away during "You Do"

WHEN YOU SEE:
- "What do I do?" immediately after instructions
- Work looks nothing like demonstration
- Copies peers instead of understanding
- EHCP: "learns best from demonstration"`,

  quickChecklist: [
    'Worked through task myself before the lesson',
    'Planned think-aloud script for "I Do"',
    'Demonstrated with visible thinking, not silent showing',
    'Checked understanding before moving to "We Do"',
    'Guided through "We Do" with specific prompts',
    'Stayed close during "You Do"',
    'Provided worked example for reference',
    'Adjusted phase length based on pupil needs',
  ],

  ehcpPhrases: [
    'learns best from demonstration',
    'needs explicit instruction',
    'requires modelled examples',
    'benefits from step-by-step guidance',
    'needs to see tasks demonstrated',
    'requires adult modelling',
    'learns through imitation',
    'needs visual demonstration of tasks',
    'benefits from worked examples',
  ],

  relatedStrategies: ['chunking-one-step-instructions', 'task-analysis', 'prompt-fading'],
};
