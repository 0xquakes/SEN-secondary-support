import { Strategy } from '@/types';

export const promptFadingStrategy: Strategy = {
  id: 'prompt-fading-001',
  slug: 'prompt-fading',
  title: 'Prompt Fading',
  shortDescription: 'Systematically reduce support so the pupil becomes independent without realising the help has gone.',
  longDescription: `Prompt fading is the art of gradually withdrawing support so smoothly that the pupil doesn't notice—and suddenly they're doing something independently that they previously needed help with. You start with maximum support (physical guidance, full verbal prompts, complete models), then systematically reduce it over time: from hand-over-hand to hand-on-shoulder; from full sentences to single words to just a look. The goal is independence, achieved without the cliff-edge of suddenly removing all help.`,
  difficulty: 'intermediate',
  prepTime: '5-10 mins',
  areaOfNeed: 'Developing Independence',
  subjects: ['English', 'Maths', 'Science', 'History', 'Geography', 'Art', 'Music', 'PE', 'MFL', 'DT', 'Drama', 'RE', 'Computing', 'PSHE'],
  routines: ['All routines', 'Skill development', 'Independence training'],
  tags: ['independence', 'scaffolding', 'gradual release', 'support withdrawal'],

  content: {
    problem: {
      headline: 'The pupil can do it with help, but never without you',
      description: 'They can complete the task—when you are standing right there. The moment you step away? Nothing. They wait, stare, or call out. They have learned to rely on you, not on themselves. The support you provided has become a dependency, not a scaffold.',
      signs: [
        'Pupil succeeds with support but stops the moment adult moves away',
        'Always waits for instruction before starting, even familiar tasks',
        'Asks "Is this right?" after every step',
        'EHCP mentions "adult-dependent" or "over-reliant on prompts"',
        'Can do the skill but only when prompted each time',
        'Other staff report different levels of independence',
      ],
    },

    explanation: {
      definition: 'Prompt fading means systematically reducing support from most (physical, hand-over-hand) to least (independent) using a clear hierarchy: Physical, Model, Verbal Direct, Verbal Indirect, Gestural, Visual, Independent.',
      whyItWorks: 'When we provide support without a plan to withdraw it, we accidentally teach dependency. The pupil learns "I do this with help" rather than "I can do this." Prompt fading builds genuine independence by reducing support so gradually that the pupil barely notices—each success feels like their own achievement. The hierarchy gives you a roadmap: you always know what level you are at and what comes next.',
      keyPrinciples: [
        'Start where the pupil needs you—don\'t underestimate required support',
        'Get 3 successes at current level before fading',
        'Fade by ONE level only—never skip steps',
        'If they fail, drop back immediately without shame',
        'Track progress so all staff use the same level',
        'Make fading invisible—don\'t announce it',
      ],
    },

    howTo: {
      steps: [
        {
          step: 1,
          title: 'Identify the target skill',
          instruction: 'Be specific. "Use a sentence starter independently" not "do English." The skill must be something they CAN do with support—you are fading scaffolding, not teaching from scratch.',
          teacherSays: 'N/A - this is planning',
          tip: 'Choose high-impact skills: routines, core academic tasks, self-regulation strategies.',
        },
        {
          step: 2,
          title: 'Determine current prompt level',
          instruction: 'What support do they need RIGHT NOW to succeed? If unsure, start higher—it is easier to fade down than to rescue failure. Use the hierarchy: Physical (P), Model (M), Verbal Direct (VD), Verbal Indirect (VI), Gestural (G), Visual (V), Independent (I).',
          tip: 'Observe across multiple instances before deciding. One success does not mean they are ready to fade.',
        },
        {
          step: 3,
          title: 'Plan your hierarchy for this skill',
          instruction: 'Write out what each prompt level looks like for THIS specific skill. What is the physical prompt? What is the model? What words for verbal direct vs indirect? What gesture will you use?',
          teacherSays: '"For using sentence starters: Physical = I guide their hand to the word wall. Model = I write the starter, they copy. Verbal direct = I say the full starter. Verbal indirect = I say just the first word. Gestural = I point to the wall. Visual = the wall itself. Independent = nothing."',
          tip: 'Write this on a Post-it or tracking sheet so all staff are consistent.',
        },
        {
          step: 4,
          title: 'Get 3 successes at current level',
          instruction: 'Before fading, the pupil must succeed THREE times in a row at the current prompt level. This is not negotiable. Three ensures it was not a fluke.',
          tip: 'For tricky skills or anxious pupils, increase to 5 or 7 successes.',
        },
        {
          step: 5,
          title: 'Fade by one level',
          instruction: 'Move up the hierarchy by exactly one step. From verbal direct to verbal indirect. From gestural to visual. Never skip levels.',
          teacherSays: '"Yesterday I said the full sentence starter. Today I\'ll just say the first word and see if they can continue."',
          tip: 'If the gap feels too big, add an intermediate step (e.g., verbal direct + gesture, then gesture only).',
        },
        {
          step: 6,
          title: 'If they fail, drop back immediately',
          instruction: 'No drama, no disappointment. Just smoothly return to the previous level. Try fading again after more successes.',
          teacherSays: '"Let me help you with that one." [Provide previous level prompt]',
          tip: 'Failure at a new level means 3 more successes at the old level before trying again.',
        },
        {
          step: 7,
          title: 'Track and communicate',
          instruction: 'Record current level and date. Share with all staff working with this pupil. Everyone must use the SAME prompt level.',
          tip: 'A simple tracking card that travels with the pupil works well.',
        },
      ],
      commonMistakes: [
        'Fading too fast—not waiting for enough successes',
        'Skipping levels in the hierarchy',
        'Different staff using different prompt levels',
        'Announcing the fading ("Today I\'m not going to help you as much")',
        'Trying to fade a skill they cannot actually do yet—teach first, then fade',
        'Giving up after one failed fade attempt',
        'Not having a clear hierarchy written down',
      ],
      timeToImplement: '5-10 mins prep, then ongoing implementation over days/weeks',
    },

    workedExamples: [
      {
        subject: 'English',
        topic: 'Using analytical sentence starters',
        scenario: 'Year 9 English class analysing Macbeth. Pupil working at KS2 level needs to use "The writer suggests..." independently.',
        steps: [
          {
            action: 'Week 1: Model level',
            teacherDoes: 'Write "The writer suggests that Macbeth is..." on the board. Say: "Watch me write my analysis sentence. Now you copy this starter and finish it with your own idea."',
            pupilDoes: 'Copies sentence starter from board. Adds own ending. Succeeds 3 times.',
          },
          {
            action: 'Week 2: Verbal direct level',
            teacherDoes: 'Say: "Start your sentence with \'The writer suggests that...\' and tell me what the writer suggests about this character."',
            pupilDoes: 'Writes sentence starter from verbal prompt. Completes sentence. Succeeds 3 times.',
          },
          {
            action: 'Week 3: Verbal indirect level',
            teacherDoes: 'Say: "Begin your analysis sentence. The writer..." then pause expectantly.',
            pupilDoes: 'Continues "...suggests that..." and completes sentence. Succeeds 3 times.',
          },
          {
            action: 'Week 4: Gestural level',
            teacherDoes: 'Point to sentence starter poster on wall. Say nothing.',
            pupilDoes: 'Looks at poster, writes "The writer suggests..." independently.',
          },
          {
            action: 'Week 5: Independent',
            teacherDoes: 'Say: "Analyse the next quote." Give no sentence starter prompt.',
            pupilDoes: 'Writes "The writer suggests..." without any prompt. Poster still available as backup.',
          },
        ],
      },
      {
        subject: 'Maths',
        topic: 'Solving two-step equations',
        scenario: 'Year 8 Maths class solving equations like 2x + 3 = 11. Pupil working at KS2 level needs to solve these independently.',
        steps: [
          {
            action: 'Stage 1: Model level',
            teacherDoes: 'Solve the equation on the board while narrating each step. "First I deal with the +3 by subtracting 3 from both sides. Then I deal with the 2x by dividing both sides by 2." Say: "Now you copy exactly what I did with this next one."',
            pupilDoes: 'Copies the method exactly. Teacher checks and confirms. Succeeds 3 times.',
          },
          {
            action: 'Stage 2: Verbal direct level',
            teacherDoes: 'Say: "First, what operation do you need to undo? The +3. So subtract 3 from both sides. Write that. Good. Now divide both sides by 2."',
            pupilDoes: 'Follows each verbal instruction. Writes solution step by step. Succeeds 3 times.',
          },
          {
            action: 'Stage 3: Verbal indirect level',
            teacherDoes: 'Say: "What do you do first with a two-step equation? Deal with the..." and pause.',
            pupilDoes: 'Says "...number on its own" and subtracts 3. Continues to divide by 2. Succeeds 3 times.',
          },
          {
            action: 'Stage 4: Gestural level',
            teacherDoes: 'Point to the steps poster showing "1. Deal with the number. 2. Deal with the letter." Say nothing.',
            pupilDoes: 'Follows steps from poster. Solves equation correctly. Succeeds 3 times.',
          },
          {
            action: 'Stage 5: Independent',
            teacherDoes: 'Say: "Solve this equation." Give no additional prompt. Poster remains on wall.',
            pupilDoes: 'Solves 2x + 5 = 13 independently using internalised steps.',
          },
        ],
      },
      {
        subject: 'Science',
        topic: 'Writing a hypothesis',
        scenario: 'Year 7 Science class planning an investigation. Pupil working at KS1 level needs to write a hypothesis using "I predict... because..."',
        steps: [
          {
            action: 'Stage 1: Physical + Model level',
            teacherDoes: 'Write hypothesis frame on pupil\'s sheet: "I predict _____ because _____." Guide their hand to underline the frame. Say: "I\'ll write one first. I predict the plant will grow taller because it has more light. Now you write yours in the same way."',
            pupilDoes: 'Copies the structure. Writes own hypothesis with physical guidance to the frame.',
          },
          {
            action: 'Stage 2: Verbal direct level',
            teacherDoes: 'Say: "Write your hypothesis. Start with \'I predict\' then say what you think will happen. Then write \'because\' and say why."',
            pupilDoes: 'Writes hypothesis following verbal instructions. "I predict the ice will melt because it is warm."',
          },
          {
            action: 'Stage 3: Verbal indirect level',
            teacherDoes: 'Say: "Write your hypothesis. Remember, I predict... because..."',
            pupilDoes: 'Uses the partial verbal cue to structure their writing. Succeeds 3 times.',
          },
          {
            action: 'Stage 4: Gestural level',
            teacherDoes: 'Point to hypothesis frame on the Science Working Wall. Raise eyebrows expectantly.',
            pupilDoes: 'Looks at frame, writes hypothesis in correct format. Succeeds 3 times.',
          },
          {
            action: 'Stage 5: Independent',
            teacherDoes: 'Say: "Write your hypothesis for this investigation."',
            pupilDoes: 'Writes "I predict... because..." without any prompt. Frame still visible as environmental support.',
          },
        ],
      },
      {
        subject: 'History',
        topic: 'Explaining causation in historical events',
        scenario: 'Year 8 History class studying the causes of World War One. Pupil working at KS2 level needs to explain causes using "This led to... because..."',
        steps: [
          {
            action: 'Stage 1: Model level',
            teacherDoes: 'Write a full causation sentence on the board: "The assassination of Franz Ferdinand led to war because it triggered a chain of alliances." Say: "Watch me explain this cause. Now copy my structure but write about the arms race."',
            pupilDoes: 'Copies the sentence structure. Writes own causation sentence about arms race with same pattern.',
          },
          {
            action: 'Stage 2: Verbal direct level',
            teacherDoes: 'Say: "Start your sentence with what happened, then write \'led to\', then the result, then \'because\' and explain why. So: The arms race led to... because..."',
            pupilDoes: 'Follows verbal structure to write causation sentence. Succeeds 3 times with different causes.',
          },
          {
            action: 'Stage 3: Gestural level',
            teacherDoes: 'Point to causation sentence frame on the History display board: "[Event] led to [Result] because [Explanation]." Say nothing.',
            pupilDoes: 'Looks at frame, writes causation sentence independently using the structure. Succeeds 3 times.',
          },
        ],
      },
      {
        subject: 'Geography',
        topic: 'Describing geographical patterns from maps',
        scenario: 'Year 9 Geography class studying population distribution. Pupil working at KS2 level needs to describe patterns using "The map shows that... This is because..."',
        steps: [
          {
            action: 'Stage 1: Model level',
            teacherDoes: 'Project map and model description: "The map shows that population is higher in coastal areas. This is because ports provide jobs and trade." Say: "Now describe another pattern you can see using the same structure."',
            pupilDoes: 'Copies sentence structure. Writes own pattern description about river valleys.',
          },
          {
            action: 'Stage 2: Verbal indirect level',
            teacherDoes: 'Say: "Describe what you see on the map. Remember, the map shows that... this is because..." and pause.',
            pupilDoes: 'Completes the sentence stems independently. Writes full description. Succeeds 3 times.',
          },
          {
            action: 'Stage 3: Independent',
            teacherDoes: 'Say: "Describe the pattern you can see on this new map." Give no sentence starter prompt. Pattern frame remains on display.',
            pupilDoes: 'Writes "The map shows that..." independently without prompting.',
          },
        ],
      },
      {
        subject: 'Art',
        topic: 'Evaluating own artwork using formal elements',
        scenario: 'Year 7 Art class completing self-evaluation. Pupil working at KS2 level needs to evaluate using "I used [element] to create [effect]."',
        steps: [
          {
            action: 'Stage 1: Physical + Model level',
            teacherDoes: 'Sit beside pupil with their artwork. Point to a specific area. Say: "I can see you used warm colours to create a feeling of energy. Write that down: I used warm colours to create energy." Guide hand to evaluation sheet.',
            pupilDoes: 'Writes sentence with physical guidance to correct section of sheet.',
          },
          {
            action: 'Stage 2: Verbal direct level',
            teacherDoes: 'Point to artwork. Say: "Look at the lines in your piece. Write: I used [type of line] to create [effect]. What type of line did you use? What effect does it have?"',
            pupilDoes: 'Writes "I used curved lines to create movement." Succeeds 3 times with different elements.',
          },
          {
            action: 'Stage 3: Gestural level',
            teacherDoes: 'Point to formal elements keyword mat on desk. Tap evaluation frame. Nod expectantly.',
            pupilDoes: 'Uses keyword mat to select element. Writes evaluation sentence using frame. Succeeds 3 times.',
          },
        ],
      },
      {
        subject: 'Music',
        topic: 'Describing musical features using key vocabulary',
        scenario: 'Year 8 Music class analysing a piece of music. Pupil working at KS2 level needs to describe features using "The [feature] is [description] which creates [effect]."',
        steps: [
          {
            action: 'Stage 1: Model level',
            teacherDoes: 'Play music excerpt. Say: "Listen to the tempo. I would write: The tempo is fast which creates excitement. Now listen again and write about the dynamics using the same pattern."',
            pupilDoes: 'Listens and writes: "The dynamics are loud which creates power." Copies sentence structure.',
          },
          {
            action: 'Stage 2: Verbal indirect level',
            teacherDoes: 'Play music. Say: "Describe the texture. Remember: The texture is... which creates..." and pause.',
            pupilDoes: 'Completes sentence: "The texture is thick which creates a full sound." Succeeds 3 times.',
          },
          {
            action: 'Stage 3: Visual level',
            teacherDoes: 'Point to musical elements display and sentence frame poster. Say: "Describe the melody."',
            pupilDoes: 'Uses visual supports to write: "The melody is high which creates a light feeling." Succeeds 3 times.',
          },
        ],
      },
      {
        subject: 'PE',
        topic: 'Self-coaching during skill practice',
        scenario: 'Year 7 PE class practising basketball chest pass. Pupil with coordination difficulties needs to self-coach through the technique steps.',
        steps: [
          {
            action: 'Stage 1: Physical + Verbal level',
            teacherDoes: 'Stand behind pupil, guide arms through motion. Say each step: "Ball at chest. Step forward. Push and flick. Follow through." Repeat with hand-on-hand guidance.',
            pupilDoes: 'Performs chest pass with physical guidance while hearing verbal cues. Succeeds 3 times.',
          },
          {
            action: 'Stage 2: Verbal direct level',
            teacherDoes: 'Stand nearby. Call out each step as pupil performs: "Chest... step... push... follow through!"',
            pupilDoes: 'Performs chest pass following verbal commands. Succeeds 3 times.',
          },
          {
            action: 'Stage 3: Visual level',
            teacherDoes: 'Point to technique card showing 4-step sequence in pictures. Say: "Use your card. Go."',
            pupilDoes: 'Glances at card, performs chest pass using visual prompt. Succeeds 3 times.',
          },
        ],
      },
      {
        subject: 'MFL',
        topic: 'Forming sentences using verb conjugation',
        scenario: 'Year 8 French class practising present tense -er verbs. Pupil working at KS2 level needs to conjugate verbs independently.',
        steps: [
          {
            action: 'Stage 1: Model level',
            teacherDoes: 'Write on board: "Je joue, Tu joues, Il/Elle joue." Say: "Watch how I change the ending. Now copy this pattern with \'danser\' - to dance."',
            pupilDoes: 'Copies conjugation pattern. Writes "Je danse, Tu danses, Il/Elle danse."',
          },
          {
            action: 'Stage 2: Verbal indirect level',
            teacherDoes: 'Say: "Conjugate \'chanter\'. Remember, Je... with what ending?" Pause. "Tu... with what ending?"',
            pupilDoes: 'Responds: "Je chante, Tu chantes..." Completes conjugation with partial prompts. Succeeds 3 times.',
          },
          {
            action: 'Stage 3: Gestural level',
            teacherDoes: 'Point to verb endings chart on wall. Say: "Conjugate \'manger\'." No other prompt.',
            pupilDoes: 'Uses chart to write correct conjugations. Succeeds 3 times.',
          },
        ],
      },
      {
        subject: 'DT',
        topic: 'Following safety procedures independently',
        scenario: 'Year 9 DT class using pillar drill. Pupil needs to complete safety checks independently before operating machinery.',
        steps: [
          {
            action: 'Stage 1: Physical + Verbal level',
            teacherDoes: 'Stand beside pupil at drill. Say each step while guiding: "Hair tied back - check yours. Safety glasses on. Guard in place - feel it. Wood clamped - push it. Teacher permission - ask me."',
            pupilDoes: 'Completes each safety check with physical guidance and verbal instruction.',
          },
          {
            action: 'Stage 2: Verbal indirect level',
            teacherDoes: 'Say: "Run through your safety checks. Hair... glasses... guard... clamp... permission..." Pause after each word.',
            pupilDoes: 'Completes each check prompted by single-word cues. Succeeds 3 times.',
          },
          {
            action: 'Stage 3: Visual level',
            teacherDoes: 'Point to laminated safety checklist on machine. Say: "Complete your checks."',
            pupilDoes: 'Works through visual checklist independently. Succeeds 3 times.',
          },
        ],
      },
      {
        subject: 'Drama',
        topic: 'Using vocal techniques in performance',
        scenario: 'Year 8 Drama class working on monologues. Pupil working at KS2 level needs to vary pace, pitch, and volume independently.',
        steps: [
          {
            action: 'Stage 1: Model level',
            teacherDoes: 'Perform the line twice - once flat, once with vocal variety. Say: "Watch how I slow down here for tension, get louder here for anger. Now copy exactly how I said this line."',
            pupilDoes: 'Copies teacher performance. Matches pace, pitch, and volume changes.',
          },
          {
            action: 'Stage 2: Verbal direct level',
            teacherDoes: 'Say: "On this line, slow right down. On this word, raise your voice. Try it."',
            pupilDoes: 'Performs with vocal variety following specific verbal instructions. Succeeds 3 times.',
          },
          {
            action: 'Stage 3: Gestural level',
            teacherDoes: 'During rehearsal, use hand signals: palm down slowly = slow pace, hand rising = increase volume. Say nothing.',
            pupilDoes: 'Responds to gestures by adjusting vocal technique. Succeeds 3 times.',
          },
        ],
      },
      {
        subject: 'RE',
        topic: 'Explaining religious concepts with examples',
        scenario: 'Year 7 RE class studying beliefs about God. Pupil working at KS2 level needs to explain concepts using "This means... For example..."',
        steps: [
          {
            action: 'Stage 1: Model level',
            teacherDoes: 'Say: "Omnipotent means all-powerful. I would write: This means God can do anything. For example, Christians believe God created the universe." Write it on board. "Now explain omniscient - all-knowing - using the same pattern."',
            pupilDoes: 'Copies structure. Writes: "This means God knows everything. For example, God knows our thoughts."',
          },
          {
            action: 'Stage 2: Verbal indirect level',
            teacherDoes: 'Say: "Explain benevolent. Remember: This means... For example..." and pause expectantly.',
            pupilDoes: 'Completes: "This means God is loving. For example, God sent Jesus." Succeeds 3 times.',
          },
          {
            action: 'Stage 3: Gestural level',
            teacherDoes: 'Point to explanation frame on display: "This means... For example..." Tap new keyword card. Say nothing.',
            pupilDoes: 'Uses visual frame to write explanation of new concept. Succeeds 3 times.',
          },
        ],
      },
      {
        subject: 'Computing',
        topic: 'Debugging code systematically',
        scenario: 'Year 8 Computing class debugging Python programs. Pupil working at KS2 level needs to follow debugging steps independently.',
        steps: [
          {
            action: 'Stage 1: Verbal direct level',
            teacherDoes: 'Sit beside pupil at computer. Say: "First, read the error message. What line does it say? Line 5. Now look at line 5. What does the error say is wrong? Missing colon. Add the colon and run again."',
            pupilDoes: 'Follows each verbal instruction. Identifies error location, reads message, fixes issue.',
          },
          {
            action: 'Stage 2: Verbal indirect level',
            teacherDoes: 'Say: "There\'s an error. What do you check first?" Pause. "What does it tell you?" Pause. "So what do you fix?"',
            pupilDoes: 'Responds: "The error message... line 7... spelling mistake." Fixes code. Succeeds 3 times.',
          },
          {
            action: 'Stage 3: Visual level',
            teacherDoes: 'Point to debugging flowchart poster: Read error, Find line, Identify problem, Fix, Test. Say: "Debug this."',
            pupilDoes: 'Uses flowchart to work through debugging steps independently. Succeeds 3 times.',
          },
        ],
      },
      {
        subject: 'PSHE',
        topic: 'Using calming strategies when anxious',
        scenario: 'Year 9 PSHE lesson on emotional regulation. Pupil needs to use breathing technique independently when feeling overwhelmed.',
        steps: [
          {
            action: 'Stage 1: Physical + Verbal level',
            teacherDoes: 'Notice pupil becoming anxious. Move to them. Say: "Let\'s breathe together. Hand on stomach. In for 4 - feel your stomach rise. Out for 6 - feel it fall." Breathe alongside them.',
            pupilDoes: 'Copies breathing with physical guidance and verbal counting.',
          },
          {
            action: 'Stage 2: Verbal indirect level',
            teacherDoes: 'Notice early signs of anxiety. Say quietly: "Remember your breathing. In for 4... out for 6..."',
            pupilDoes: 'Begins breathing technique with verbal reminder. Completes independently. Succeeds 3 times.',
          },
          {
            action: 'Stage 3: Gestural level',
            teacherDoes: 'Catch pupil\'s eye. Tap chest twice (agreed signal for "use your breathing"). Say nothing.',
            pupilDoes: 'Recognises gesture. Begins 4-6 breathing independently. Calms without further support.',
          },
        ],
      },
    ],

    routines: [
      {
        routine: 'Asking for help appropriately',
        context: 'Pupil tends to call out, shut down, or wait passively when stuck instead of using help card',
        steps: [
          'Physical: TA notices distress, physically places help card upright. "Card up means I need help."',
          'Gestural + Verbal: TA points to card. "Remember what to do when you\'re stuck?"',
          'Gestural only: TA catches pupil\'s eye, glances at help card. Pupil puts it up.',
          'Proximity only: TA moves nearby but does not gesture. Pupil puts card up.',
          'Independent: Pupil is stuck, no adult nearby. Puts card up independently.',
        ],
        taRole: 'Track which level the pupil is at. Only provide that level of prompt. When they succeed, say "Thank you for using your card." Record successes to know when to fade.',
      },
      {
        routine: 'Transitioning between activities',
        context: 'Pupil needs individual support to stop one activity and start the next',
        steps: [
          'Physical + Verbal: Stand next to pupil, touch shoulder. "New activity. Close your book. Get your ruler."',
          'Verbal + Gestural: "New activity." Gesture toward new materials.',
          'Verbal only: "New activity. You know what to do."',
          'Gestural only: Catch eye, gesture toward board showing new instructions.',
          'Independent: Class instruction alone prompts transition. Pupil follows like everyone else.',
        ],
        taRole: 'Position yourself to give the agreed prompt level. Do not give more support than needed. If pupil succeeds 3 times, note it and discuss fading with teacher.',
      },
      {
        routine: 'Starting independent work',
        context: 'Pupil waits for adult to tell them to start even when instructions are clear',
        steps: [
          'Physical + Verbal: Tap desk, point to worksheet. "Start question 1 now."',
          'Verbal direct: "The class is starting. Begin question 1."',
          'Verbal indirect: "Everyone is starting..." [expectant pause]',
          'Gestural: Catch eye, point to worksheet, nod.',
          'Independent: Pupil begins when class instruction is given, no individual prompt needed.',
        ],
        taRole: 'Note current level on tracking card. Give consistent prompt level. Celebrate independent starts: "You got started all by yourself!"',
      },
      {
        routine: 'Packing away at end of lesson',
        context: 'Pupil needs step-by-step instruction to pack away, causing delays',
        steps: [
          'Full verbal sequence: "Put your pen in your pencil case. Put your book in your bag. Push your chair in."',
          'Partial verbal: "Time to pack away. Pen... book... chair..."',
          'First word only: "Pack away. Pen..."',
          'Gestural: Point to visual routine card showing pack-away steps.',
          'Independent: Pupil packs away when timer sounds, following class routine.',
        ],
        taRole: 'Use visual routine card as environmental support. Fade verbal prompts while keeping visual available. Record when pupil follows card independently.',
      },
    ],

    troubleshooting: [
      {
        problem: 'Pupil succeeds 3 times but fails when I fade',
        cause: 'Three successes might not be enough for this skill, or the fade was too big',
        solution: 'Increase to 5 or 7 successes before fading. Or add an intermediate step between levels (e.g., verbal direct + gesture together, then gesture only).',
      },
      {
        problem: 'Different staff give different prompt levels',
        cause: 'No shared tracking system or communication about current level',
        solution: 'Create a simple tracking card that travels with the pupil. Show current level and date achieved. Brief all staff: "Jamie is at gestural level for sentence starters. Please only point to the poster, do not say the starter."',
      },
      {
        problem: 'Pupil gets upset when support is reduced',
        cause: 'They noticed the fading and feel anxious or abandoned',
        solution: 'Make fading invisible. Never announce it. If they ask for help, provide current level prompt smoothly. Celebrate success: "You did that yourself!" so they feel capable, not unsupported.',
      },
      {
        problem: 'No time to track prompt levels for every skill',
        cause: 'Trying to fade too many things at once',
        solution: 'Pick ONE skill per pupil to fade systematically. Focus until independent, then pick another. One skill to independence is worth more than five skills stuck at full prompts.',
      },
      {
        problem: 'The skill never seems to fade—always needs a prompt',
        cause: 'The task might be too hard, or the skill was never properly learned',
        solution: 'Check if the pupil can actually DO the skill with full support. Prompt fading assumes they CAN do it—you are removing scaffolding. If they cannot do it even with full prompts, teach the skill first, then fade.',
      },
      {
        problem: 'Pupil is independent with me but not with other adults',
        cause: 'Fading was person-specific, not generalised',
        solution: 'Deliberately practice the skill with different adults at the current prompt level. Once independent with you, have TA provide gestural prompt, then fade with them too.',
      },
    ],

    scripts: {
      teacher: {
        starting: [
          '"I\'m going to help you with this, and over time you\'ll need less help."',
          '"Let\'s practise this together first."',
          '"Watch how I do it, then you\'ll try."',
        ],
        during: [
          '"You\'re getting this. Let\'s try with a bit less help."',
          '"Remember what comes next?"',
          '"You\'ve done this before—what\'s the first step?"',
          '[Point to resource instead of giving verbal prompt]',
        ],
        ifStuck: [
          '"Let me help you with that one."',
          '"Here\'s a clue..." [provide current level prompt only]',
          '"Look at the poster—what does it say to do first?"',
        ],
        ending: [
          '"You did that yourself!"',
          '"See? You remembered without me telling you."',
          '"That\'s independence—well done."',
        ],
      },
      ta: {
        role: 'Track current prompt level for each target skill. Provide ONLY that level of support—no more, no less. Record successes to know when ready to fade. Communicate with teacher about progress.',
        keyPhrases: [
          '"Remember what to do?"',
          '"You know this one."',
          '"What did we practise?"',
          '[Point to visual support]',
          '"You did it!"',
        ],
        avoid: [
          'Giving more support than the current level',
          'Jumping in before the pupil has tried',
          'Announcing that you are reducing help',
          'Using inconsistent prompt levels across sessions',
          'Skipping levels because the pupil "seems ready"',
        ],
      },
    },

    noTaAdaptations: {
      overview: "Without a TA, prompt fading requires more structured environmental supports and peer assistance. The goal remains the same: systematically reducing dependence.",
      keyAdjustments: [
        "Use visual prompt cards on desks that pupils can refer to instead of asking an adult",
        "Create 'help stations' around the room with model answers and worked examples",
        "Record short video demonstrations pupils can rewatch on a tablet",
        "Build prompt fading into the worksheet design (first questions heavily scaffolded, later ones less so)",
      ],
      independenceStrategies: [
        "Teach a 'three before me' rule: check notes, check display, check card, then ask",
        "Create self-fading checklists where early tasks have more prompts printed",
        "Use visual countdown cards showing how many independent attempts before help",
      ],
      peerSupportOptions: [
        "Train peer 'hint givers' who can provide gestural prompts only (pointing, not telling)",
        "Set up study pairs where one pupil is slightly ahead and can model",
        "Use collaborative problem-solving where peers discuss before seeking adult help",
      ],
    },
  },

  prepPlan: [
    {
      time: '2 mins',
      action: 'Identify target skill',
      details: 'What specific skill do you want the pupil to do independently? Be precise.',
    },
    {
      time: '2 mins',
      action: 'Determine current level',
      details: 'What prompt level do they currently need to succeed? Start there.',
    },
    {
      time: '3 mins',
      action: 'Plan your hierarchy',
      details: 'Write out the prompt levels from current to independent. What will each level look like for this skill?',
    },
    {
      time: '2 mins',
      action: 'Create tracking system',
      details: 'Simple notation: P, M, VD, VI, G, V, I. Where will you record current level and dates?',
    },
    {
      time: '1 min',
      action: 'Brief staff',
      details: 'Make sure TA knows current level and when to fade (3 successes).',
    },
  ],

  printableSummary: `PROMPT FADING

WHAT: Systematically reduce support from most (physical) to least (independent) using a clear hierarchy.

WHY: Prevents prompt-dependency. Creates genuine independence without sudden withdrawal of help.

THE PROMPT HIERARCHY (Most to Least Supportive):
Physical (P) - Hand-over-hand guidance
Model (M) - "Watch me, then copy"
Verbal Direct (VD) - Full instruction ("Start with 'The writer suggests...'")
Verbal Indirect (VI) - Partial cue ("The writer...")
Gestural (G) - Point, tap, look
Visual (V) - Environmental support (poster, card)
Independent (I) - No prompt needed

HOW TO FADE:
1. Identify specific target skill
2. Determine current prompt level
3. Get 3 successes at current level
4. Fade by ONE level only
5. If fail, drop back immediately
6. Track: note level and date
7. Communicate: all staff use same level

COMMON MISTAKES:
x Fading too fast
x Skipping levels
x Different staff using different levels
x Announcing the fading
x Trying to fade a skill they cannot do yet

WHEN YOU SEE IN EHCP:
- "Adult-dependent"
- "Over-reliant on prompts"
- "Needs prompting to complete tasks"
- "Requires consistent adult direction"`,

  quickChecklist: [
    'Identified specific target skill for independence',
    'Determined current prompt level (P, M, VD, VI, G, V, I)',
    'Planned prompt hierarchy for this skill',
    'Got 3 successes at current level',
    'Faded by ONE level only',
    'Dropped back if pupil failed (no shame)',
    'Recorded current level and date',
    'Briefed other staff on current level',
  ],

  ehcpPhrases: [
    'over-reliant on adult support',
    'adult-dependent',
    'needs prompting to complete tasks',
    'requires consistent adult direction',
    'needs repeated prompts',
    'relies on adult guidance',
    'requires scaffolded support',
  ],

  relatedStrategies: ['backward-chaining', 'chunking-one-step-instructions', 'errorless-learning'],
};
