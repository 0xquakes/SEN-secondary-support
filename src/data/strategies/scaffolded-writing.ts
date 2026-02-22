import { Strategy } from '@/types';

export const scaffoldedWritingStrategy: Strategy = {
  id: 'scaffolded-writing-001',
  slug: 'scaffolded-writing-frames',
  title: 'Scaffolded Writing Frames',
  shortDescription: 'Use structured writing frames with sentence starters to support pupils who struggle to organise and structure their written work.',
  longDescription: 'Scaffolded writing frames provide a visible structure that removes the overwhelming blank page. By offering sentence starters, paragraph templates, and clear organisational frameworks, pupils can focus on their ideas rather than struggling with how to begin or structure their writing. The key is to differentiate the level of scaffolding and gradually fade support as confidence grows.',
  difficulty: 'beginner',
  prepTime: '10-15 mins',
  areaOfNeed: 'Visual & Structural Support',
  subjects: ['English', 'Maths', 'Science', 'History', 'Geography', 'Art', 'Music', 'PE', 'MFL', 'DT', 'Drama', 'RE', 'Computing', 'PSHE'],
  routines: ['Extended writing', 'Independent work', 'Assessment tasks', 'Homework'],
  tags: ['writing', 'organisation', 'structure', 'differentiation', 'literacy', 'sentence starters'],

  content: {
    problem: {
      headline: 'The blank page paralyses writers who struggle to organise ideas',
      description: 'You give the class a writing task. Most pupils begin. But one pupil stares at the blank page. They might know what they want to say, but they cannot work out how to start, how to organise their thoughts, or how to move from one idea to the next. The blank page becomes an insurmountable barrier.',
      signs: [
        'Pupil stares at blank page for extended periods',
        'Writing is disorganised with ideas jumping randomly',
        'Frequently asks "How do I start?" or "What do I write?"',
        'Produces very little written work despite verbal ability',
        'EHCP mentions "difficulties organising written work"',
        'EHCP mentions "needs writing support"',
        'EHCP mentions "struggles to structure ideas"',
      ],
    },

    explanation: {
      definition: 'Scaffolded writing frames are pre-structured templates that provide sentence starters, paragraph organisers, and visual frameworks to guide written work. They range from highly scaffolded (fill-in-the-blank) to lightly scaffolded (prompts only), allowing differentiation based on need.',
      whyItWorks: 'Writing requires simultaneous management of multiple cognitive demands: generating ideas, organising them logically, forming sentences, spelling, handwriting. For pupils with limited working memory or executive function difficulties, this overload causes shutdown. Writing frames reduce cognitive load by providing structure externally, freeing the pupil to focus on content. The visible framework also reduces anxiety by showing exactly what is expected.',
      keyPrinciples: [
        'Remove the blank page barrier with visible structure',
        'Sentence starters reduce the hardest part: beginning',
        'Differentiate scaffolding level to match pupil need',
        'Gradually fade scaffolding as confidence builds',
        'Keep the focus on ideas, not mechanics',
      ],
    },

    howTo: {
      steps: [
        {
          step: 1,
          title: 'Assess the scaffolding level needed',
          instruction: 'Observe the pupil\'s current writing. Do they need complete sentence starters (high scaffold), opening words only (medium), or just structural prompts (low)? Match the frame to their current ability.',
          tip: 'When in doubt, start with more scaffolding. You can always remove it.',
        },
        {
          step: 2,
          title: 'Choose the right frame type',
          instruction: 'Select from: paragraph frames (topic sentence + supporting points + conclusion), PEEL frames simplified (Point, Evidence, Explain), story frames (beginning, middle, end with prompts), or subject-specific frames.',
          teacherSays: '"Today I\'m giving you a writing frame. It shows you exactly how to organise your answer."',
          tip: 'Have multiple versions ready at different scaffold levels.',
        },
        {
          step: 3,
          title: 'Model using the frame',
          instruction: 'Before independent work, demonstrate completing the frame. Think aloud as you use each sentence starter. Show how the frame guides you through the writing.',
          teacherSays: '"Watch me use this frame. It says \'First...\' so I\'m going to write what happened first. Then it says \'Next...\' so I move to what happened after that."',
        },
        {
          step: 4,
          title: 'Provide the frame and check understanding',
          instruction: 'Give the pupil their frame. Point to each section. Check they understand what goes where before they begin writing.',
          teacherSays: '"Point to where you\'ll write your first idea. Good. Point to where you\'ll give your evidence. Perfect."',
          tip: 'Colour-code sections if helpful for visual learners.',
        },
        {
          step: 5,
          title: 'Support without over-helping',
          instruction: 'During writing, redirect to the frame rather than giving answers. The frame should do the scaffolding work. If they\'re stuck, point to the next sentence starter.',
          teacherSays: '"What does your frame say to write next? Read that sentence starter to me."',
        },
        {
          step: 6,
          title: 'Plan for fading',
          instruction: 'Track progress. When the pupil consistently completes a frame confidently, move to a lighter scaffold. The goal is independent writing, with frames as a stepping stone.',
          tip: 'Fading might take weeks or months. Don\'t rush it.',
        },
      ],
      commonMistakes: [
        'Giving the same frame to all pupils regardless of need',
        'Removing scaffolding too quickly before confidence is built',
        'Not modelling how to use the frame first',
        'Frames that are too complex or text-heavy',
        'Forgetting to fade scaffolding over time (pupil becomes dependent)',
        'Using frames only for English when they help across all subjects',
      ],
      timeToImplement: '10-15 minutes prep for frames, immediate use',
    },

    workedExamples: [
      {
        subject: 'English',
        topic: 'Writing a paragraph about a character',
        scenario: 'Year 8 studying Of Mice and Men. Pupil working at KS2 level needs to write a paragraph about Lennie. EHCP notes difficulties organising written work.',
        steps: [
          {
            action: 'Provide paragraph frame',
            teacherDoes: 'Give pupil a paragraph frame: "Lennie is... This is shown when he... This tells the reader that... Another example is when... Overall, Lennie..."',
            pupilDoes: 'Sees the structure. Knows there are five parts to complete.',
          },
          {
            action: 'Model the first sentence',
            teacherDoes: 'Say: "Watch me start. \'Lennie is...\' I need a word to describe him. I\'ll write \'Lennie is kind.\' Now you try the next part."',
            pupilDoes: 'Sees how to use the starter. Attempts "This is shown when he..."',
          },
          {
            action: 'Guide through the frame',
            teacherDoes: 'Point to each section in turn. "Read the next starter. What goes there? Find something from the text."',
            pupilDoes: 'Works through frame systematically. Completes each section.',
          },
          {
            action: 'Review completed paragraph',
            teacherDoes: 'Say: "Read me your whole paragraph." Praise the structure. "See how your frame helped you write a proper paragraph with evidence?"',
            pupilDoes: 'Reads complete paragraph. Sees they\'ve produced structured writing.',
          },
        ],
      },
      {
        subject: 'Science',
        topic: 'Writing a conclusion',
        scenario: 'Year 7 writing up an experiment on dissolving. Pupil working at KS1 level struggles to structure ideas and needs writing support.',
        steps: [
          {
            action: 'Provide conclusion frame',
            teacherDoes: 'Give simple frame: "I found out that... I know this because... This happened because... If I did this again, I would..."',
            pupilDoes: 'Sees four clear sentences to complete.',
          },
          {
            action: 'Connect to their results',
            teacherDoes: 'Point to their results table. "Look at your results. What did you find out? Write that after \'I found out that...\'"',
            pupilDoes: 'Looks at results. Writes finding: "sugar dissolved fastest."',
          },
          {
            action: 'Support evidence sentence',
            teacherDoes: 'Point to next starter. "\'I know this because...\' Look at your numbers. What do they tell you?"',
            pupilDoes: 'Refers to data. Writes evidence: "it took only 30 seconds."',
          },
          {
            action: 'Complete and celebrate',
            teacherDoes: 'Guide through remaining sentences. "You\'ve written a full scientific conclusion using your frame. This is exactly what scientists do."',
            pupilDoes: 'Finishes all four sentences. Has complete conclusion.',
          },
        ],
      },
      {
        subject: 'Maths',
        topic: 'Explaining mathematical reasoning',
        scenario: 'Year 9 explaining how they solved a problem. Pupil working at KS2 level can do the maths but cannot explain their thinking in writing.',
        steps: [
          {
            action: 'Provide reasoning frame',
            teacherDoes: 'Give frame: "To solve this problem, I first... I did this because... Then I... My answer is... I know this is correct because..."',
            pupilDoes: 'Sees structure for explaining their method.',
          },
          {
            action: 'Walk through their solution',
            teacherDoes: 'Say: "You got the right answer. Now let\'s explain how. What did you do first? Write that after \'I first...\'"',
            pupilDoes: 'Recalls first step. Writes: "I first multiplied 12 by 5."',
          },
          {
            action: 'Prompt reasoning',
            teacherDoes: 'Point to "I did this because..." Say: "Why did you multiply? What made you choose that operation?"',
            pupilDoes: 'Thinks about reasoning. Writes: "because I needed to find the total."',
          },
          {
            action: 'Complete explanation',
            teacherDoes: 'Guide through remaining starters. "Now you have a full written explanation. Anyone reading this would understand your method."',
            pupilDoes: 'Completes frame. Has structured mathematical explanation.',
          },
        ],
      },
      {
        subject: 'History',
        topic: 'Writing a source analysis',
        scenario: 'Year 8 analysing a propaganda poster from World War One. Pupil with EHCP needs support to organise their analysis into a coherent written response.',
        steps: [
          {
            action: 'Provide source analysis frame',
            teacherDoes: 'Give frame: "This source shows... The purpose of this source was to... I can tell this because... This source is useful for understanding... because... However, this source might not be reliable because..."',
            pupilDoes: 'Sees clear structure for analysing the source systematically.',
          },
          {
            action: 'Guide observation first',
            teacherDoes: 'Point to poster then to frame. Say: "Start with what you can actually see. \'This source shows...\' - describe what\'s in the image."',
            pupilDoes: 'Looks at poster. Writes: "This source shows a soldier pointing at the viewer with the words \'Your Country Needs You\'."',
          },
          {
            action: 'Build to interpretation',
            teacherDoes: 'Point to purpose section. "Now think about why it was made. \'The purpose was to...\' What were they trying to get people to do?"',
            pupilDoes: 'Connects observation to purpose. Writes: "The purpose was to persuade men to join the army."',
          },
        ],
      },
      {
        subject: 'Geography',
        topic: 'Describing a case study',
        scenario: 'Year 9 writing about the causes and effects of a natural hazard. Pupil struggles to organise information and frequently jumps between different aspects.',
        steps: [
          {
            action: 'Provide case study frame',
            teacherDoes: 'Give frame with clear sections: "The hazard I am studying is... It happened in... on... The causes of this hazard were... Firstly... Secondly... The effects on people were... The effects on the environment were... The response to this hazard included..."',
            pupilDoes: 'Sees separate boxes for causes, effects, and responses.',
          },
          {
            action: 'Direct to resources',
            teacherDoes: 'Place case study fact sheet next to frame. "Each section of your frame needs information. Use your fact sheet. Find the causes first."',
            pupilDoes: 'Scans fact sheet for cause information. Writes causes in correct section.',
          },
          {
            action: 'Check completeness',
            teacherDoes: 'Point to each section in turn. "Have you written something for every part? Let\'s check - causes, effects on people, effects on environment, response."',
            pupilDoes: 'Reviews frame. Identifies any gaps. Completes all sections.',
          },
        ],
      },
      {
        subject: 'Art',
        topic: 'Evaluating their own artwork',
        scenario: 'Year 7 writing an evaluation of their portrait project. Pupil finds it hard to articulate thoughts about their work and stares at blank evaluation sheet.',
        steps: [
          {
            action: 'Provide art evaluation frame',
            teacherDoes: 'Give frame: "In this project I created... I was inspired by the artist... I used the techniques of... The most successful part of my work is... because... If I could improve my work, I would... because..."',
            pupilDoes: 'Sees specific prompts relating to their artwork and process.',
          },
          {
            action: 'Connect to their work',
            teacherDoes: 'Place their artwork next to the frame. "Look at your portrait. Let\'s start - \'In this project I created...\' Describe what you made."',
            pupilDoes: 'Looks at their work. Writes: "In this project I created a portrait using oil pastels in the style of Picasso."',
          },
          {
            action: 'Prompt critical thinking',
            teacherDoes: 'Point to success section. "Which part are you most pleased with? Point to it on your artwork. Now write why it works well."',
            pupilDoes: 'Identifies strongest element. Writes: "The most successful part is the eyes because I blended the colours smoothly."',
          },
        ],
      },
      {
        subject: 'Music',
        topic: 'Appraising a piece of music',
        scenario: 'Year 8 writing about a piece of music they have listened to. Pupil can verbally describe what they hear but cannot organise this into writing.',
        steps: [
          {
            action: 'Provide music appraisal frame',
            teacherDoes: 'Give frame: "The piece I listened to is... by... The tempo is... which makes me feel... The dynamics change from... to... The instruments I can hear include... The structure of the piece is... Overall, I think this piece is... because..."',
            pupilDoes: 'Sees musical elements broken down into separate prompts.',
          },
          {
            action: 'Listen and capture',
            teacherDoes: 'Play excerpt. Point to tempo section. "What speed is it? Fast, slow, moderate? Write that and how it makes you feel."',
            pupilDoes: 'Listens. Writes: "The tempo is fast which makes me feel excited and energetic."',
          },
          {
            action: 'Build musical vocabulary',
            teacherDoes: 'Provide keyword mat alongside frame. "Use these musical words to help describe what you hear. \'The dynamics change from...\' - find the right word on your mat."',
            pupilDoes: 'Uses keyword mat. Writes: "The dynamics change from piano to forte in the chorus."',
          },
        ],
      },
      {
        subject: 'PE',
        topic: 'Evaluating a performance',
        scenario: 'Year 9 writing an evaluation of their badminton skills after a practical assessment. Pupil struggles to translate physical experience into written analysis.',
        steps: [
          {
            action: 'Provide performance evaluation frame',
            teacherDoes: 'Give frame: "The skill I performed was... I did this well because... One strength of my technique was... This helped me to... One area I need to improve is... To improve this, I could... Next lesson, my target is..."',
            pupilDoes: 'Sees clear structure linking performance to written evaluation.',
          },
          {
            action: 'Use video support',
            teacherDoes: 'If available, show video clip of their performance. "Watch yourself. \'One strength of my technique was...\' What do you see yourself doing well?"',
            pupilDoes: 'Watches clip. Identifies strength. Writes: "One strength was my ready position because I was balanced and could move quickly."',
          },
          {
            action: 'Make targets specific',
            teacherDoes: 'Point to improvement section. "Be specific. What exactly could you practise? Write a target you could actually do next lesson."',
            pupilDoes: 'Thinks practically. Writes: "Next lesson, my target is to follow through with my racket after each shot."',
          },
        ],
      },
      {
        subject: 'MFL',
        topic: 'Writing a description of their town',
        scenario: 'Year 8 French lesson writing about where they live. Pupil knows vocabulary but cannot structure sentences or paragraphs in the target language.',
        steps: [
          {
            action: 'Provide bilingual writing frame',
            teacherDoes: 'Give frame with French starters and English hints: "J\'habite a... (I live in...) C\'est une ville/un village... (It is a town/village...) Dans ma ville, il y a... (In my town, there is...) J\'aime ma ville parce que... (I like my town because...) Cependant... (However...)"',
            pupilDoes: 'Sees French sentence starters with English support for meaning.',
          },
          {
            action: 'Build from vocabulary',
            teacherDoes: 'Place vocabulary list next to frame. "Look at your places in town vocabulary. What is in your town? Choose three things for \'il y a...\'"',
            pupilDoes: 'Selects vocabulary. Writes: "Dans ma ville, il y a un cinema, une piscine et beaucoup de magasins."',
          },
          {
            action: 'Encourage connectives',
            teacherDoes: 'Point to \'Cependant\'. "This means however. What is something not so good about your town? This makes your writing more interesting."',
            pupilDoes: 'Thinks of contrast. Writes: "Cependant, il n\'y a pas de centre sportif."',
          },
        ],
      },
      {
        subject: 'DT',
        topic: 'Writing a design specification',
        scenario: 'Year 8 writing a specification for their phone holder project. Pupil has good practical ideas but struggles to express design criteria in writing.',
        steps: [
          {
            action: 'Provide specification frame',
            teacherDoes: 'Give frame: "My product must... (function) My product should be made from... because... (materials) My product needs to be... size because... (dimensions) My product will appeal to... because... (target market) My product must be safe because... (safety)"',
            pupilDoes: 'Sees specification broken into clear design criteria categories.',
          },
          {
            action: 'Link to design brief',
            teacherDoes: 'Place design brief next to frame. "Look at what your product needs to do. \'My product must...\' - what is its main job?"',
            pupilDoes: 'Reads brief. Writes: "My product must hold a phone securely at an angle for watching videos."',
          },
          {
            action: 'Justify choices',
            teacherDoes: 'Point to materials section. "You wrote which material. Now explain why. Think about the properties - is it strong? Waterproof? Cheap?"',
            pupilDoes: 'Considers material properties. Writes: "My product should be made from plywood because it is strong, cheap, and easy to cut and shape."',
          },
        ],
      },
      {
        subject: 'Drama',
        topic: 'Evaluating a live performance',
        scenario: 'Year 9 writing a review after watching a theatre production. Pupil has strong opinions but writing is disorganised with ideas scattered randomly.',
        steps: [
          {
            action: 'Provide review frame',
            teacherDoes: 'Give frame: "The production I watched was... The plot is about... The actor who stood out was... because they used... (voice/movement/facial expression) The use of... (lighting/sound/set) was effective because... The moment that had the most impact was when... Overall, I would rate this production... because..."',
            pupilDoes: 'Sees review structured into plot, acting, technical elements, and opinion.',
          },
          {
            action: 'Focus on drama vocabulary',
            teacherDoes: 'Highlight acting section. "Think about how they used their body and voice. What techniques did you see? Use your drama keywords - projection, gesture, levels."',
            pupilDoes: 'Recalls specific moments. Writes: "The actor used exaggerated gestures and changed levels to show the character\'s desperation."',
          },
          {
            action: 'Support evidence',
            teacherDoes: 'Point to \'The moment that had the most impact...\' Say: "Think of one specific moment. What happened? Why did it affect the audience?"',
            pupilDoes: 'Chooses key moment. Writes: "The moment that had the most impact was when the lights went red and the sound became loud because it made the audience feel scared."',
          },
        ],
      },
      {
        subject: 'RE',
        topic: 'Explaining a religious belief',
        scenario: 'Year 7 explaining why suffering is a problem for religious believers. Pupil understands the concept verbally but cannot structure an explanation in writing.',
        steps: [
          {
            action: 'Provide explanation frame',
            teacherDoes: 'Give frame: "Some religious believers struggle with the problem of suffering because... They believe that God is... However, suffering exists in the world, for example... This is a problem because if God is... then... Some believers respond to this by saying... Others believe..."',
            pupilDoes: 'Sees the logical structure of the philosophical problem laid out.',
          },
          {
            action: 'Build the argument',
            teacherDoes: 'Point to first section. "What do believers say God is like? Powerful? Loving? Write those ideas after \'They believe that God is...\'."',
            pupilDoes: 'Recalls teaching. Writes: "They believe that God is all-powerful, all-knowing, and all-loving."',
          },
          {
            action: 'Connect the contradiction',
            teacherDoes: 'Point to \'This is a problem because...\' Say: "Now explain the puzzle. If God is all-powerful AND all-loving, what should happen to suffering? But what actually happens?"',
            pupilDoes: 'Makes connection. Writes: "This is a problem because if God is all-powerful and loving, He should stop suffering, but He doesn\'t."',
          },
        ],
      },
      {
        subject: 'Computing',
        topic: 'Explaining how an algorithm works',
        scenario: 'Year 8 writing an explanation of their sorting algorithm. Pupil can code but struggles to explain their computational thinking in words.',
        steps: [
          {
            action: 'Provide algorithm explanation frame',
            teacherDoes: 'Give frame: "The purpose of my algorithm is to... It takes the input of... The first step is to... This is needed because... Then the algorithm... It uses a loop to... The output is... My algorithm is efficient because..."',
            pupilDoes: 'Sees structure for explaining computational process step by step.',
          },
          {
            action: 'Walk through the code',
            teacherDoes: 'Display their code next to frame. "Point to the first thing your code does. Now write that in words: \'The first step is to...\'"',
            pupilDoes: 'Traces code. Writes: "The first step is to compare the first two numbers in the list."',
          },
          {
            action: 'Explain the logic',
            teacherDoes: 'Point to \'This is needed because...\' Say: "Why does the computer need to do that? What would go wrong without it?"',
            pupilDoes: 'Thinks about purpose. Writes: "This is needed because the computer needs to know which number is bigger before it can swap them."',
          },
        ],
      },
      {
        subject: 'PSHE',
        topic: 'Reflecting on decision-making',
        scenario: 'Year 9 writing a reflection on a scenario about peer pressure. Pupil finds it difficult to structure thoughts about personal and social situations.',
        steps: [
          {
            action: 'Provide reflection frame',
            teacherDoes: 'Give frame: "The situation in this scenario is... The person has to decide whether to... One option is to... This might lead to... because... Another option is to... This might lead to... I think the best choice would be... because... The values that are important in this situation are..."',
            pupilDoes: 'Sees structure for weighing up options and justifying decisions.',
          },
          {
            action: 'Identify the dilemma',
            teacherDoes: 'Read scenario together. "What decision does this person face? Write that after \'The person has to decide...\'"',
            pupilDoes: 'Identifies choice. Writes: "The person has to decide whether to go along with their friends or say no and risk being left out."',
          },
          {
            action: 'Consider consequences',
            teacherDoes: 'Point to both options sections. "Think about each choice. What might happen next? There\'s no single right answer - explain your thinking."',
            pupilDoes: 'Considers outcomes. Writes consequences for each option, then makes reasoned choice.',
          },
        ],
      },
    ],

    routines: [
      {
        routine: 'Extended writing tasks',
        context: 'Any lesson requiring a longer written response (paragraph or more)',
        steps: [
          'Before task: assess which scaffold level pupil needs today',
          'Provide appropriate frame (high/medium/low scaffold)',
          'Model using the frame with a brief example',
          'Pupil works through frame section by section',
          'Check in at each section transition: "What does the next starter say?"',
          'Review completed writing: "Your frame helped you structure this perfectly"',
        ],
        taRole: 'Sit with pupil during writing. Point to the current section of the frame. Read sentence starters aloud if needed. Don\'t give content answers - redirect to the frame structure.',
      },
      {
        routine: 'Quick written responses',
        context: 'Short answer questions requiring a sentence or two',
        steps: [
          'Display sentence starter on board or mini whiteboard',
          'Say: "Start your answer with these words: [starter]"',
          'Point to starter when pupil hesitates',
          'Gradually reduce to just the first word, then remove entirely',
        ],
        taRole: 'Write the sentence starter on a sticky note for the pupil\'s desk. Point to it when they look stuck. Whisper "Start with..." if needed.',
      },
    ],

    troubleshooting: [
      {
        problem: 'Pupil copies sentence starters but adds nothing',
        cause: 'The scaffold is right but they don\'t know what content to add',
        solution: 'This is a content issue, not a structure issue. Before writing, discuss ideas verbally. Have them tell you what they\'ll write for each section. Then they write what they just said.',
      },
      {
        problem: 'Pupil refuses to use the frame',
        cause: 'May feel it marks them as different, or frame doesn\'t match their thinking',
        solution: 'Offer the frame to the whole class as optional. Many pupils find them helpful. Alternatively, create the frame together with the pupil so it feels like their tool, not an imposition.',
      },
      {
        problem: 'Writing is still disorganised despite the frame',
        cause: 'Frame may be too complex, or pupil skipping sections',
        solution: 'Simplify the frame. Use numbered boxes so they must complete 1 before 2. Cover later sections until earlier ones are done. Work through it together, one box at a time.',
      },
      {
        problem: 'Pupil has become dependent on frames',
        cause: 'Scaffolding was not faded over time',
        solution: 'Begin systematic fading: first, partial sentence starters (just first words). Then section headings only. Then a planning template. Then verbal reminder of structure. Then nothing. This takes time.',
      },
      {
        problem: 'Other staff don\'t use the frames',
        cause: 'Lack of communication about pupil\'s support needs',
        solution: 'Add "uses writing frames for extended writing" to pupil passport or support plan. Share successful frames with colleagues. Include in IEP targets if appropriate.',
      },
    ],

    scripts: {
      teacher: {
        starting: [
          '"I\'m giving you a writing frame today. It shows you exactly how to organise your answer."',
          '"This frame has sentence starters. They help you begin each section."',
          '"Watch me use the frame first, then you\'ll have a go."',
        ],
        during: [
          '"What does your frame say to write next? Read that starter."',
          '"Point to where you are on your frame. Good. What comes after that?"',
          '"Don\'t worry about what comes later. Just focus on this section of your frame."',
        ],
        ifStuck: [
          '"Read the sentence starter out loud. Now finish that sentence."',
          '"Tell me what you want to say. Good. Now write exactly that after the starter."',
          '"Look at your frame. It tells you what type of thing to write here."',
        ],
        ending: [
          '"Read your whole piece to me. See how your frame helped you organise it?"',
          '"You\'ve written a proper structured [paragraph/explanation/story]. Well done."',
          '"Next time, we might try a frame with less help. You\'re getting good at this."',
        ],
      },
      ta: {
        role: 'Guide the pupil through the frame section by section. Read sentence starters aloud if literacy is a barrier. Redirect to the frame when they ask for help. Track which scaffold level works and feed back to the teacher.',
        keyPhrases: [
          '"Look at your frame. What does it say to write here?"',
          '"Read the sentence starter to me. Now finish it."',
          '"You\'ve done section 1. Move to section 2."',
          '"Point to where you are on your frame."',
        ],
        avoid: [
          'Giving the content to write (the frame provides structure, not answers)',
          'Letting the pupil skip sections of the frame',
          'Removing the frame before the pupil is confident',
          'Adding verbal instructions that contradict the frame',
        ],
      },
    },

    noTaAdaptations: {
      overview: "Scaffolded writing frames are inherently independent - the scaffold is built into the resource, not delivered by an adult.",
      keyAdjustments: [
        "Create tiered writing frames pupils select based on their confidence",
        "Build sentence starters, word banks, and success criteria directly into worksheets",
        "Use model paragraphs pupils can physically cut up and rearrange",
        "Provide audio recordings of model answers pupils can listen to while writing",
      ],
      independenceStrategies: [
        "Teach pupils to choose their own level of scaffold (full frame, partial frame, checklist only)",
        "Create 'next step' cards pupils collect when ready to reduce scaffolding",
        "Build in self-editing checklists matched to the writing frame structure",
      ],
      peerSupportOptions: [
        "Use peer response partners who check writing against the frame together",
        "Create paired writing where pupils take turns scribing and checking",
        "Assign peer editors who use the same success criteria to give feedback",
      ],
    },
  },

  prepPlan: [
    { time: '5 mins', action: 'Assess scaffold level needed', details: 'Review pupil\'s recent writing. Decide if they need high (full starters), medium (partial starters), or low (prompts only) scaffolding.' },
    { time: '5 mins', action: 'Create or select frame', details: 'Choose frame type: paragraph frame, PEEL simplified, story frame, or subject-specific. Adapt sentence starters to match the task.' },
    { time: '3 mins', action: 'Prepare differentiated versions', details: 'Make 2-3 versions at different scaffold levels. Some pupils may need higher/lower support than expected.' },
    { time: '2 mins', action: 'Plan your model', details: 'Prepare a brief example of completing the frame to demonstrate before independent work.' },
  ],

  printableSummary: `SCAFFOLDED WRITING FRAMES

WHAT: Pre-structured templates with sentence starters that guide written work.

WHY: Writing requires managing multiple demands at once. Frames reduce cognitive load by providing structure externally.

TYPES OF FRAMES:
- Paragraph frames: Topic sentence + supporting points + conclusion
- PEEL simplified: Point, Evidence, Explain, Link (simplified as needed)
- Story frames: Beginning, middle, end with prompts
- Subject-specific: Conclusion frames, reasoning frames, etc.

HOW:
1. Assess scaffold level needed (high/medium/low)
2. Choose appropriate frame type
3. Model using the frame first
4. Pupil works through section by section
5. Redirect to frame when stuck
6. Fade scaffolding over time

DIFFERENTIATION LEVELS:
HIGH: Full sentence starters ("Lennie is... This is shown when...")
MEDIUM: Partial starters ("First..." "Then..." "Because...")
LOW: Section headings only ("Introduction" "Evidence" "Conclusion")

COMMON MISTAKES:
x Same frame for all pupils
x Removing scaffolding too quickly
x Not modelling frame use first
x Forgetting to fade over time

WHEN YOU SEE:
- Pupil stares at blank page
- Disorganised writing with jumping ideas
- "How do I start?" frequently asked
- EHCP: "difficulties organising written work"`,

  quickChecklist: [
    'Assessed pupil\'s current scaffold level needed',
    'Selected appropriate frame type for the task',
    'Created differentiated versions if needed',
    'Modelled using the frame before independent work',
    'Pupil can point to each section and explain what goes there',
    'Redirected to frame when pupil asked for help',
    'Planned next steps for fading scaffolding',
  ],

  ehcpPhrases: [
    'difficulties organising written work',
    'needs writing support',
    'struggles to structure ideas',
    'requires scaffolding for written tasks',
    'finds it hard to get started with writing',
    'needs support to organise thoughts',
    'benefits from writing frames',
    'requires sentence starters',
    'difficulties with extended writing',
  ],

  relatedStrategies: ['chunking-one-step-instructions', 'visual-supports', 'task-analysis'],
};
