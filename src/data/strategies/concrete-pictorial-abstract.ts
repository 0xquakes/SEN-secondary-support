import { Strategy } from '@/types';

export const cpaStrategy: Strategy = {
  id: 'cpa-001',
  slug: 'concrete-pictorial-abstract',
  title: 'Concrete-Pictorial-Abstract (CPA)',
  shortDescription: 'Progress from physical objects to drawings to symbols, building deep understanding at each stage.',
  longDescription: 'The Concrete-Pictorial-Abstract approach moves learning through three stages: first handling real objects (concrete), then representing them visually (pictorial), and finally using symbols like numbers and letters (abstract). This progression ensures pupils build genuine understanding rather than memorising procedures they don\'t comprehend. Particularly powerful for pupils who struggle with abstract concepts, it provides the foundation that makes symbols meaningful.',
  difficulty: 'intermediate',
  prepTime: '10-15 mins',
  areaOfNeed: 'Breaking Down Learning',
  subjects: ['English', 'Maths', 'Science', 'History', 'Geography', 'Art', 'Music', 'PE', 'MFL', 'DT', 'Drama', 'RE', 'Computing', 'PSHE'],
  routines: ['New concept introduction', 'Skill building', 'Independent practice', 'Intervention sessions'],
  tags: ['manipulatives', 'visual learning', 'abstract concepts', 'hands-on', 'mathematical understanding', 'science concepts'],

  content: {
    problem: {
      headline: 'Abstract symbols mean nothing without concrete foundations',
      description: 'You teach a maths concept and the pupil can follow the procedure. But ask them to explain what\'s happening, or give them a slightly different problem, and they\'re lost. They memorised steps without understanding. The symbols are meaningless marks on paper because they never connected to anything real.',
      signs: [
        'Can follow procedures but can\'t explain why they work',
        'Gets confused when problems look slightly different',
        'Struggles to apply learning to new contexts',
        'EHCP mentions "needs concrete resources" or "struggles with abstract concepts"',
        'Relies heavily on memorised rules without understanding',
        'Cannot draw or represent what a problem means',
        'EHCP states "requires hands-on learning"',
      ],
    },

    explanation: {
      definition: 'CPA is a three-stage approach: Concrete (physical objects you can touch and move), Pictorial (drawings, diagrams, visual representations), and Abstract (numbers, symbols, letters). You don\'t skip stages. You move through them in order, ensuring understanding at each level before progressing.',
      whyItWorks: 'Abstract symbols are shortcuts for real things. The number "3" represents three actual objects. The letter "x" represents an unknown quantity. But if a pupil has never connected the symbol to reality, it\'s just a shape. CPA builds meaning from the ground up. When pupils physically group objects, they understand what multiplication is. When they draw those groups, they can visualise without the objects. Only then do the symbols 3 x 4 carry meaning. The concrete experience becomes the foundation that makes abstraction possible.',
      keyPrinciples: [
        'Always start with concrete manipulatives for new concepts',
        'Don\'t rush to abstract - mastery at each stage is essential',
        'Pictorial bridges concrete and abstract',
        'Return to concrete when understanding breaks down',
        'Use consistent representations across all three stages',
        'Let the pupil control the pace of progression',
      ],
    },

    howTo: {
      steps: [
        {
          step: 1,
          title: 'Identify the concept and gather manipulatives',
          instruction: 'Before teaching, identify the core concept and select appropriate concrete materials. For maths: counters, cubes, base-ten blocks, fraction pieces. For science: actual objects, models, specimens.',
          tip: 'Keep manipulatives organised and accessible. Have enough for the pupil to work independently.',
        },
        {
          step: 2,
          title: 'Introduce with concrete materials',
          instruction: 'Let the pupil physically handle and manipulate objects. Don\'t rush to show them "the way" - let them explore. Guide them to discover patterns and relationships through the materials.',
          teacherSays: '"Let\'s use these cubes to understand what\'s happening. Show me 3 groups of 4 cubes."',
          tip: 'Resist the urge to jump to numbers. The concrete stage builds the mental model.',
        },
        {
          step: 3,
          title: 'Check concrete understanding',
          instruction: 'Before moving on, ensure the pupil truly understands at the concrete level. Can they explain what they\'re doing? Can they solve similar problems with the manipulatives?',
          teacherSays: '"Explain to me what you just did with the cubes. What did you find out?"',
        },
        {
          step: 4,
          title: 'Move to pictorial representation',
          instruction: 'Have the pupil draw what they did with the concrete materials. The drawing should directly represent the physical objects - circles for counters, squares for cubes.',
          teacherSays: '"Now draw what you made with the cubes. Show me 3 groups of 4 in your drawing."',
          tip: 'Keep the manipulatives visible so they can refer back while drawing.',
        },
        {
          step: 5,
          title: 'Connect pictorial to concrete',
          instruction: 'Explicitly link the drawing to the physical materials. Point to the drawing and the objects. The pupil should see they represent the same thing.',
          teacherSays: '"Point to the cubes. Now point to your drawing. They show the same thing, don\'t they?"',
        },
        {
          step: 6,
          title: 'Introduce abstract symbols',
          instruction: 'Only now introduce numbers and symbols. Write them next to the pictorial representation. The pupil should see how 3 x 4 = 12 connects to their drawing and the cubes.',
          teacherSays: '"We can write this as 3 times 4 equals 12. Three groups of four. See how it matches your drawing?"',
          tip: 'Keep all three representations visible: objects, drawing, and symbols side by side.',
        },
        {
          step: 7,
          title: 'Practice at abstract level with option to return',
          instruction: 'Give abstract problems but keep manipulatives and drawing materials available. If the pupil gets stuck, they can return to pictorial or concrete to rebuild understanding.',
          teacherSays: '"Try this one: 2 x 5. If you need to, you can use the cubes or draw it."',
        },
      ],
      commonMistakes: [
        'Rushing through concrete to "get to the real maths"',
        'Using manipulatives as a reward rather than a learning tool',
        'Removing concrete materials too soon',
        'Skipping the pictorial stage entirely',
        'Not explicitly connecting all three representations',
        'Treating CPA as a one-time progression rather than returning when needed',
      ],
      timeToImplement: '10-15 minutes prep to gather materials; ongoing during teaching',
    },

    workedExamples: [
      {
        subject: 'Maths',
        topic: 'Understanding multiplication as groups',
        scenario: 'Year 5 pupil working at KS1 level. EHCP states "needs concrete resources to access mathematical concepts." Learning 4 x 3.',
        steps: [
          {
            action: 'Concrete: Build with cubes',
            teacherDoes: 'Place a pile of cubes on the desk. Say: "We\'re going to make 4 groups. Each group needs 3 cubes. Can you make that?"',
            pupilDoes: 'Physically separates cubes into 4 groups of 3. Counts to check each group.',
          },
          {
            action: 'Concrete: Find the total',
            teacherDoes: 'Say: "How many cubes do you have altogether? Count them all."',
            pupilDoes: 'Counts all cubes. Discovers there are 12.',
          },
          {
            action: 'Pictorial: Draw the groups',
            teacherDoes: 'Give paper and pencil. Say: "Now draw your groups. Draw exactly what you made with the cubes."',
            pupilDoes: 'Draws 4 circles with 3 squares in each (or similar representation).',
          },
          {
            action: 'Abstract: Write the calculation',
            teacherDoes: 'Say: "We can write this as a number sentence. 4 groups of 3. That\'s 4 times 3." Write 4 x 3 = 12 next to the drawing.',
            pupilDoes: 'Sees how the symbols connect to the drawing and the cubes. Copies the number sentence.',
          },
        ],
      },
      {
        subject: 'English',
        topic: 'Understanding sentence structure',
        scenario: 'Year 8 pupil working at KS1 level. EHCP states "requires hands-on approaches to literacy." Learning to build simple sentences with subject-verb-object.',
        steps: [
          {
            action: 'Concrete: Build sentences with word cards',
            teacherDoes: 'Give the pupil physical word cards: nouns (dog, cat, boy), verbs (chased, ate, saw), objects (ball, food, bird). Say: "Pick up a person or animal. Then pick what they did. Then pick what they did it to."',
            pupilDoes: 'Physically picks up cards: "The dog" + "chased" + "the ball". Arranges them in a row on the desk.',
          },
          {
            action: 'Concrete: Feel the sentence structure',
            teacherDoes: 'Say: "Touch each card as you read. Who? Did what? To what?" Point to each position.',
            pupilDoes: 'Touches each card while reading. Physically experiences the three parts of the sentence.',
          },
          {
            action: 'Pictorial: Draw the sentence',
            teacherDoes: 'Say: "Draw three boxes. In box 1, draw who. In box 2, draw what they did. In box 3, draw what they did it to."',
            pupilDoes: 'Draws dog in box 1, running action in box 2, ball in box 3. Writes the words underneath.',
          },
          {
            action: 'Abstract: Write the sentence',
            teacherDoes: 'Say: "Now write it as a proper sentence. Capital letter at the start, full stop at the end." Point to drawing as guide.',
            pupilDoes: 'Writes "The dog chased the ball." Can see how the sentence matches the pictures and the original cards.',
          },
        ],
      },
      {
        subject: 'Science',
        topic: 'Understanding particle arrangement in states of matter',
        scenario: 'Year 8 pupil working at KS2 level. EHCP states "requires hands-on learning to understand scientific concepts." Learning solid, liquid, gas particle arrangement.',
        steps: [
          {
            action: 'Concrete: Role-play particles',
            teacherDoes: 'Use small objects (marbles, balls, or even pupils standing). Say: "These are particles. In a solid, they\'re packed tight and can\'t move. Pack them together."',
            pupilDoes: 'Arranges objects tightly together in a fixed pattern. Cannot move them without disturbing others.',
          },
          {
            action: 'Concrete: Show liquid and gas',
            teacherDoes: 'Say: "In a liquid, particles can slide past each other but stay close. Show me." Then: "In a gas, they spread out and move freely."',
            pupilDoes: 'Rearranges objects to show sliding (liquid) and scattered (gas). Physically experiences the difference.',
          },
          {
            action: 'Pictorial: Draw particle diagrams',
            teacherDoes: 'Give paper with three boxes labelled Solid, Liquid, Gas. Say: "Draw circles to show how the particles are arranged in each."',
            pupilDoes: 'Draws packed circles (solid), close but not fixed (liquid), spread out (gas). Uses concrete experience as reference.',
          },
          {
            action: 'Abstract: Use scientific terminology',
            teacherDoes: 'Say: "Scientists describe these as: fixed positions and vibrating (solid), close together but moving (liquid), far apart and fast (gas)." Write keywords.',
            pupilDoes: 'Labels diagrams with scientific vocabulary. Connects abstract words to drawings and physical experience.',
          },
        ],
      },
      {
        subject: 'History',
        topic: 'Understanding feudal hierarchy in Medieval England',
        scenario: 'Year 7 pupil with EHCP stating "struggles to understand abstract social concepts." Learning the feudal system structure.',
        steps: [
          {
            action: 'Concrete: Build the hierarchy with blocks',
            teacherDoes: 'Provide building blocks or Lego of different sizes. Say: "We\'re going to build Medieval society. The biggest block is the King at the top. Place it here. Now add smaller blocks underneath for the lords."',
            pupilDoes: 'Physically stacks blocks in a pyramid shape - one large block (King) at top, several medium blocks (Lords) below, many small blocks (Peasants) at the base.',
          },
          {
            action: 'Pictorial: Draw the feudal pyramid',
            teacherDoes: 'Give paper with a triangle outline. Say: "Draw what you built. King at the top, Lords in the middle, Peasants at the bottom. Add small drawings of each."',
            pupilDoes: 'Draws pyramid with sections. Adds simple figures: crowned figure at top, lords with swords in middle, farmers with tools at bottom.',
          },
          {
            action: 'Abstract: Label with historical terminology',
            teacherDoes: 'Say: "Historians call this the feudal system. The King grants land to Lords, who give protection to Peasants who work the land." Write terms next to each level.',
            pupilDoes: 'Labels diagram with terms: Monarch, Nobility, Peasantry. Writes key words: land, loyalty, labour. Connects abstract terms to visual representation.',
          },
        ],
      },
      {
        subject: 'Geography',
        topic: 'Understanding river features and erosion',
        scenario: 'Year 9 pupil with EHCP stating "requires practical demonstrations to understand physical processes." Learning river erosion and deposition.',
        steps: [
          {
            action: 'Concrete: Create a river channel in sand',
            teacherDoes: 'Set up a sand tray with a slope. Say: "Pour water slowly from the top. Watch what happens to the sand. Where does it get washed away? Where does it pile up?"',
            pupilDoes: 'Pours water and observes. Sees sand eroding on outer bends, depositing on inner bends. Touches the different areas to feel the changes.',
          },
          {
            action: 'Pictorial: Draw an annotated river diagram',
            teacherDoes: 'Say: "Draw the river you just made from above, like a bird\'s view. Use arrows to show where water flows fastest. Shade where sand was removed and where it built up."',
            pupilDoes: 'Draws meandering river shape. Adds arrows for flow direction. Shades erosion zones on outer bends, deposition zones on inner bends.',
          },
          {
            action: 'Abstract: Apply geographical terminology',
            teacherDoes: 'Say: "Geographers call the washing away erosion and the building up deposition. The outer bend is called the river cliff, the inner bend is the slip-off slope." Write terms on diagram.',
            pupilDoes: 'Labels diagram with terms: erosion, deposition, river cliff, slip-off slope, meander. Links abstract vocabulary to observed physical process.',
          },
        ],
      },
      {
        subject: 'Art',
        topic: 'Understanding colour theory and mixing',
        scenario: 'Year 8 pupil with EHCP stating "benefits from hands-on exploration before formal instruction." Learning primary, secondary, and tertiary colours.',
        steps: [
          {
            action: 'Concrete: Mix paints physically',
            teacherDoes: 'Provide red, yellow, and blue paints with mixing palette. Say: "These are the only colours you have. Mix red and yellow together. What do you get? Now try blue and yellow."',
            pupilDoes: 'Physically mixes paints, discovering orange, green, and purple. Creates swatches of each mixture. Experiments with different proportions.',
          },
          {
            action: 'Pictorial: Create a colour wheel diagram',
            teacherDoes: 'Give a blank colour wheel template. Say: "Paint in your wheel. Primary colours in the main sections, then paint the mixtures between them where they belong."',
            pupilDoes: 'Paints colour wheel, placing secondaries between the primaries that create them. Sees the visual relationship between colours.',
          },
          {
            action: 'Abstract: Apply colour theory terminology',
            teacherDoes: 'Say: "Artists call red, yellow, blue the primary colours. Orange, green, purple are secondary colours. Complementary colours sit opposite each other." Label the wheel.',
            pupilDoes: 'Labels wheel with terms: primary, secondary, complementary. Can explain why orange sits between red and yellow using correct vocabulary.',
          },
        ],
      },
      {
        subject: 'Music',
        topic: 'Understanding rhythm and time signatures',
        scenario: 'Year 7 pupil with EHCP stating "needs kinaesthetic approaches to learning." Learning crotchets, minims, and semibreves in 4/4 time.',
        steps: [
          {
            action: 'Concrete: Clap and step the rhythms',
            teacherDoes: 'Say: "Walk on the spot - each step is one beat. Now clap once and hold for four steps. That\'s a semibreve. Now clap every two steps - those are minims. Now clap every step - crotchets."',
            pupilDoes: 'Physically walks and claps, feeling the duration of each note type in their body. Experiences that a semibreve lasts four times as long as a crotchet.',
          },
          {
            action: 'Pictorial: Build rhythm with blocks',
            teacherDoes: 'Give blocks of different lengths (or cut paper strips). Say: "If this short block is one beat, find blocks that show two beats and four beats. Arrange them to fill four beats total."',
            pupilDoes: 'Arranges blocks in different combinations: four short blocks, two medium blocks, one long block. Sees visually that they all fill the same space.',
          },
          {
            action: 'Abstract: Read and write musical notation',
            teacherDoes: 'Show standard notation. Say: "This symbol is a crotchet - one beat, like your short block. This is a minim - two beats. This is a semibreve - four beats." Write on stave.',
            pupilDoes: 'Matches notation symbols to blocks. Writes simple 4/4 rhythms using correct notation. Can decode new rhythms by relating symbols to physical experience.',
          },
        ],
      },
      {
        subject: 'PE',
        topic: 'Understanding tactics in invasion games',
        scenario: 'Year 8 pupil with EHCP stating "processes information better through physical demonstration." Learning width and depth in attacking play.',
        steps: [
          {
            action: 'Concrete: Walk through positions on court',
            teacherDoes: 'On a netball/basketball court, position cones. Say: "Stand at this cone. You\'re an attacker. Walk to create width - move towards the sideline. Now walk to create depth - move up or back."',
            pupilDoes: 'Physically walks the movements, feeling how their position stretches the defence. Experiences width (sideways) and depth (forwards/backwards) with their body.',
          },
          {
            action: 'Pictorial: Diagram plays on a whiteboard',
            teacherDoes: 'Give a mini whiteboard with pitch outline. Say: "Draw where you were standing. Draw an arrow showing how you moved to create width. Now show a different move for depth."',
            pupilDoes: 'Draws player positions as circles, arrows showing movement. Labels width movements going sideways, depth movements going up/down the pitch.',
          },
          {
            action: 'Abstract: Apply tactical terminology',
            teacherDoes: 'Say: "Coaches call this stretching the defence. Width creates space on the sides. Depth creates space in front and behind. This gives your team passing options."',
            pupilDoes: 'Uses vocabulary in context: "I created width to stretch them." Can read a tactical diagram and explain what movements create space and why.',
          },
        ],
      },
      {
        subject: 'MFL',
        topic: 'Understanding verb conjugation in French',
        scenario: 'Year 9 pupil with EHCP stating "needs concrete examples to understand grammatical patterns." Learning present tense regular -er verb endings.',
        steps: [
          {
            action: 'Concrete: Build verbs with physical cards',
            teacherDoes: 'Give cards with verb stem "parl-" and separate ending cards (-e, -es, -e, -ons, -ez, -ent). Say: "This is the root meaning speak. Pick up the je card. What ending goes with je?"',
            pupilDoes: 'Physically picks up pronoun cards and matches endings. Builds: je + parl + e, tu + parl + es. Moves cards around to see how the pattern works.',
          },
          {
            action: 'Pictorial: Create a conjugation grid',
            teacherDoes: 'Say: "Draw a table with pronouns down the side. Write the stem parl- in each row. Now add the endings you learned with the cards."',
            pupilDoes: 'Draws grid and fills in conjugation table. Uses colour coding: stem in one colour, endings in another. Sees the visual pattern of changes.',
          },
          {
            action: 'Abstract: Apply the pattern to new verbs',
            teacherDoes: 'Say: "This pattern works for hundreds of French verbs ending in -er. Try it with danser (to dance) and regarder (to watch). What stays the same? What changes?"',
            pupilDoes: 'Applies abstract rule to new verbs without cards. Writes: je danse, tu danses. Understands the transferable pattern from concrete experience.',
          },
        ],
      },
      {
        subject: 'DT',
        topic: 'Understanding mechanical systems and gear ratios',
        scenario: 'Year 10 pupil with EHCP stating "requires hands-on manipulation to understand mechanical concepts." Learning how gear ratios affect speed and torque.',
        steps: [
          {
            action: 'Concrete: Build and test gear systems',
            teacherDoes: 'Provide construction kit with different sized gears. Say: "Connect a small gear (10 teeth) to a large gear (30 teeth). Turn the small one - count how many times it spins before the large one completes one turn."',
            pupilDoes: 'Builds gear system and counts rotations. Discovers small gear turns 3 times for each turn of large gear. Feels the resistance difference when turning each gear.',
          },
          {
            action: 'Pictorial: Draw the gear relationship',
            teacherDoes: 'Say: "Draw your two gears. Label the teeth on each. Draw arrows showing direction of rotation. Write how many turns each makes."',
            pupilDoes: 'Draws gears with teeth marked. Annotates: "Small gear 10 teeth, 3 rotations" and "Large gear 30 teeth, 1 rotation." Adds arrows showing opposite rotation directions.',
          },
          {
            action: 'Abstract: Calculate gear ratios mathematically',
            teacherDoes: 'Say: "Engineers write this as a ratio: 30:10 or simplified 3:1. This means for every 3 turns of the driver, the driven gear turns once. We can calculate any ratio by dividing teeth."',
            pupilDoes: 'Calculates ratios for new gear combinations without building them. Can predict: "40 teeth and 8 teeth gives 5:1 ratio." Understands the mathematical relationship.',
          },
        ],
      },
      {
        subject: 'Drama',
        topic: 'Understanding status and power dynamics in performance',
        scenario: 'Year 8 pupil with EHCP stating "benefits from physical and embodied learning approaches." Learning how status is communicated non-verbally.',
        steps: [
          {
            action: 'Concrete: Physically embody high and low status',
            teacherDoes: 'Say: "Stand like someone very important - a king or prime minister. How does that feel? Now stand like someone with no power - a servant. What changed in your body?"',
            pupilDoes: 'Physically adopts postures: high status (upright, space-taking, slow movements) and low status (hunched, small, quick movements). Feels the difference in their body.',
          },
          {
            action: 'Pictorial: Sketch status indicators',
            teacherDoes: 'Say: "Draw two stick figures - one high status, one low status. Label what\'s different: eye contact, posture, gesture size, use of space."',
            pupilDoes: 'Draws contrasting figures. Annotates high status: "direct eye contact, open posture, expansive gestures." Low status: "looks down, closed posture, small gestures."',
          },
          {
            action: 'Abstract: Apply performance terminology',
            teacherDoes: 'Say: "Directors talk about status as a scale from 1 to 10. You can raise or lower status through proxemics (use of space), physicality, and eye contact." Write key terms.',
            pupilDoes: 'Uses vocabulary to analyse scenes: "That character has high status - their proxemics show dominance." Can discuss status abstractly while drawing on physical experience.',
          },
        ],
      },
      {
        subject: 'RE',
        topic: 'Understanding symbolism in religious practice',
        scenario: 'Year 7 pupil with EHCP stating "needs visual and tactile approaches to understand abstract concepts." Learning symbolism in Christian baptism.',
        steps: [
          {
            action: 'Concrete: Handle baptism artefacts',
            teacherDoes: 'Provide items: bowl of water, white cloth, candle. Say: "Hold the water - it\'s for washing, making clean. Feel the white cloth - it\'s pure, fresh. Watch the candle - it gives light in darkness."',
            pupilDoes: 'Handles each object. Feels the water, fabric texture. Observes the candle flame. Connects physical sensations to concepts: washing, purity, light.',
          },
          {
            action: 'Pictorial: Create a symbol meanings chart',
            teacherDoes: 'Say: "Draw each object. Next to it, draw what Christians believe it represents. Water shows washing away sin. White shows new life. Light shows Jesus guiding."',
            pupilDoes: 'Draws three columns: object, literal meaning, symbolic meaning. Creates visual links: water → washing → spiritual cleansing. Candle → light → Jesus as "light of the world."',
          },
          {
            action: 'Abstract: Analyse symbolism in religious context',
            teacherDoes: 'Say: "Religious scholars call these symbols. A symbol is something physical that represents something you can\'t see - like faith or salvation. How do these symbols help believers?"',
            pupilDoes: 'Writes abstract explanation of symbolism. Can explain: "Water symbolises purification because it represents washing away sin." Uses analytical vocabulary confidently.',
          },
        ],
      },
      {
        subject: 'Computing',
        topic: 'Understanding binary number representation',
        scenario: 'Year 8 pupil with EHCP stating "struggles with abstract mathematical concepts in computing." Learning how binary represents decimal numbers.',
        steps: [
          {
            action: 'Concrete: Use cards to represent binary values',
            teacherDoes: 'Provide five cards with dots: 16, 8, 4, 2, 1. Say: "Each card is either face up (on/1) or face down (off/0). Turn cards to make the number 13. Add up only the face-up cards."',
            pupilDoes: 'Physically flips cards: 8+4+1=13, so turns up 8, 4, and 1 cards. Records: 01101. Tries other numbers, physically manipulating cards to discover patterns.',
          },
          {
            action: 'Pictorial: Draw binary place value chart',
            teacherDoes: 'Say: "Draw a table with columns: 16, 8, 4, 2, 1. For the number 21, put a 1 under each column you need to add up to make 21. Put 0 in columns you don\'t need."',
            pupilDoes: 'Draws place value grid. Works out 21 = 16+4+1. Writes 1 under 16, 0 under 8, 1 under 4, 0 under 2, 1 under 1. Reads binary as 10101.',
          },
          {
            action: 'Abstract: Convert using mathematical process',
            teacherDoes: 'Say: "Computer scientists write this as powers of 2. The rightmost digit is 2⁰=1, then 2¹=2, then 2²=4, and so on. You can convert any number without cards once you know the pattern."',
            pupilDoes: 'Converts numbers to binary using mental maths or written calculation. Can explain: "10110 means 16+4+2=22" without needing physical cards.',
          },
        ],
      },
      {
        subject: 'PSHE',
        topic: 'Understanding healthy relationships and boundaries',
        scenario: 'Year 9 pupil with EHCP stating "requires concrete examples to understand social concepts." Learning about personal boundaries in friendships.',
        steps: [
          {
            action: 'Concrete: Use hula hoops to represent boundaries',
            teacherDoes: 'Place hula hoops on floor. Say: "Stand in your hoop - this is your personal space. I\'m going to step closer. Put your hand up when I\'m too close. Everyone\'s boundary is different."',
            pupilDoes: 'Stands in hoop and signals when comfortable distance is breached. Notices different pupils have different boundary sizes. Physically experiences consent and personal space.',
          },
          {
            action: 'Pictorial: Create a boundaries diagram',
            teacherDoes: 'Say: "Draw yourself in the middle with circles around you. The closest circle is for people you\'re most comfortable with. Label who goes where. What makes you comfortable letting someone closer?"',
            pupilDoes: 'Draws concentric circles: innermost (close family), middle (good friends), outer (classmates), outside (strangers). Annotates what each level involves: hugs, secrets shared, etc.',
          },
          {
            action: 'Abstract: Apply relationship vocabulary',
            teacherDoes: 'Say: "Psychologists call these concepts boundaries and consent. A boundary is your limit. Consent means agreeing freely. Healthy relationships respect both people\'s boundaries."',
            pupilDoes: 'Uses vocabulary in scenarios: "That\'s crossing a boundary because she didn\'t give consent." Can identify abstract concepts of respect and consent in relationship situations.',
          },
        ],
      },
    ],

    routines: [
      {
        routine: 'New concept introduction',
        context: 'Starting any new mathematical or scientific concept. Pupil has no prior understanding.',
        steps: [
          'Gather manipulatives before the lesson (cubes, counters, fraction pieces, models)',
          'Introduce the concept entirely through concrete materials first - no symbols yet',
          '"Let\'s explore this with objects. Don\'t worry about numbers yet."',
          'Allow 10-15 minutes of concrete exploration before any pictorial work',
          'Only introduce symbols once pupil can explain the concept using objects and drawings',
        ],
        taRole: 'Sit beside the pupil. Handle materials with them. Ask "What do you notice?" rather than giving explanations. Resist jumping to abstract. Keep manipulatives organised and available.',
      },
      {
        routine: 'Returning to concrete when stuck',
        context: 'Pupil is working at abstract level but makes errors or cannot explain their reasoning.',
        steps: [
          'Recognise the sign: pupil is guessing, following procedure without understanding, or stuck',
          '"Let\'s go back to the cubes to think about this."',
          'Rebuild understanding at concrete level - don\'t just show them, let them discover',
          'Move to pictorial: "Draw what you just did"',
          'Return to abstract only when understanding is secure',
        ],
        taRole: 'Watch for signs of confusion or procedural guessing. Don\'t re-explain abstractly - get the manipulatives out. Say: "Show me with the cubes what this problem is asking."',
      },
    ],

    troubleshooting: [
      {
        problem: 'Pupil refuses to use manipulatives ("that\'s for babies")',
        cause: 'Stigma around using concrete materials. May have been mocked or feels it marks them as different.',
        solution: 'Normalise manipulatives: "Mathematicians use these. Engineers use models. Scientists use specimens. Real experts use concrete materials." Use them yourself. Make them available to everyone, not just this pupil.',
      },
      {
        problem: 'Pupil can use manipulatives but can\'t draw the representation',
        cause: 'Pictorial stage needs explicit teaching - it\'s not automatic. Drawing skills may also be a barrier.',
        solution: 'Model the drawing yourself first. Use simple representations (circles for counters, squares for cubes). Provide templates if drawing is difficult. "Watch me draw what you made. Now you try."',
      },
      {
        problem: 'Pupil draws correctly but can\'t connect to abstract symbols',
        cause: 'The link between pictorial and abstract needs explicit teaching. Symbols are still meaningless.',
        solution: 'Write symbols directly onto the drawing. Point to each part: "This group of 3 circles is this 3. This group of 4 is this 4. Altogether makes 12." Physical pointing creates the connection.',
      },
      {
        problem: 'No time to use manipulatives in a busy lesson',
        cause: 'Pressure to cover content. Manipulatives feel like a "nice extra" rather than essential.',
        solution: 'CPA is faster in the long run. Ten minutes with manipulatives now saves hours of re-teaching later. For the pupil who needs it, this IS the lesson - coverage means nothing without understanding.',
      },
      {
        problem: 'Pupil becomes dependent on manipulatives, won\'t work abstractly',
        cause: 'Either moved to abstract too quickly before (creating fear), or the abstract stage was never properly connected to concrete.',
        solution: 'Don\'t remove manipulatives - fade them. "Do this one with cubes. Now do the next one by drawing. Now try writing the number sentence while looking at your drawing." Gradual release with safety net.',
      },
      {
        problem: 'Other pupils finish quickly while this pupil is still at concrete stage',
        cause: 'CPA takes longer but builds genuine understanding. Speed is not the goal.',
        solution: 'Have extension work for fast finishers. The pupil using CPA is not "behind" - they\'re building foundations others may lack. Their understanding will be deeper even if their pace is slower.',
      },
    ],

    scripts: {
      teacher: {
        starting: [
          '"We\'re going to use real objects to understand this first."',
          '"Don\'t worry about numbers yet. Let\'s explore with these cubes."',
          '"I want you to really understand this, not just memorise it. That\'s why we\'re starting with things you can touch."',
        ],
        during: [
          '"Show me what that looks like with the cubes."',
          '"Now draw what you just made."',
          '"Can you see how your drawing matches the objects?"',
          '"Let\'s write the number sentence next to your drawing."',
        ],
        ifStuck: [
          '"Let\'s go back to the cubes. Build it again."',
          '"Forget the numbers for a moment. What\'s actually happening?"',
          '"Draw it out. What does this problem look like?"',
        ],
        ending: [
          '"You started with cubes, then drew it, now you can write it. That\'s real understanding."',
          '"The cubes helped you see what the numbers mean."',
          '"You can always go back to objects or drawings if you need to."',
        ],
      },
      ta: {
        role: 'Keep manipulatives organised and ready. Help the pupil at concrete and pictorial stages without jumping to abstract. Watch for signs they\'re ready to progress or need to return to an earlier stage.',
        keyPhrases: [
          '"Show me with the cubes."',
          '"What does this look like with real objects?"',
          '"Draw what you just made."',
          '"Point to where that number is in your drawing."',
        ],
        avoid: [
          'Jumping to abstract explanations when pupil is stuck',
          'Removing manipulatives to "make them think properly"',
          'Rushing through concrete to save time',
          'Doing the manipulative work for them',
        ],
      },
    },

    noTaAdaptations: {
      overview: "CPA can be set up for independent use by ensuring manipulatives are organised and visual supports guide pupils through the progression.",
      keyAdjustments: [
        "Create self-service resource stations with labelled manipulatives pupils access independently",
        "Provide visual instruction cards showing how to use each concrete resource",
        "Use structured worksheets that guide the concrete → pictorial → abstract progression",
        "Set up 'maths tool kits' on desks with everything needed for independent CPA work",
      ],
      independenceStrategies: [
        "Teach the CPA routine: 'Build it, draw it, write it' as a mantra",
        "Use self-check cards where pupils verify their pictorial matches their concrete",
        "Create step-by-step visual guides for using specific manipulatives",
      ],
      peerSupportOptions: [
        "Pair pupils to build and compare concrete representations together",
        "Use 'maths partners' who check each other's drawings match their models",
        "Create peer teaching opportunities where pupils explain their concrete model to a partner",
      ],
    },
  },

  prepPlan: [
    { time: '5 mins', action: 'Identify the concept and representations', details: 'What will concrete, pictorial, and abstract look like for this specific concept? Plan all three stages.' },
    { time: '5 mins', action: 'Gather manipulatives', details: 'Collect cubes, counters, fraction pieces, or other materials. Ensure enough for independent work.' },
    { time: '2 mins', action: 'Prepare drawing materials', details: 'Paper, pencils, templates if needed. Consider pre-drawn frames for pictorial work.' },
    { time: '2 mins', action: 'Brief TA', details: 'Explain the three stages. Emphasise: don\'t rush to abstract. Keep manipulatives available throughout.' },
  ],

  printableSummary: `CONCRETE-PICTORIAL-ABSTRACT (CPA)

WHAT: Three stages of learning - physical objects, then drawings, then symbols.

WHY: Abstract symbols are meaningless without concrete foundations. CPA builds understanding from the ground up.

THE THREE STAGES:
1. CONCRETE: Physical objects (cubes, counters, fraction pieces, models)
2. PICTORIAL: Drawings and diagrams representing the objects
3. ABSTRACT: Numbers, letters, and symbols

HOW:
1. Start with manipulatives - let pupil explore and discover
2. Check understanding before moving on
3. Draw what was made with objects
4. Connect drawing to concrete materials explicitly
5. Introduce symbols alongside the drawing
6. Practice abstractly with option to return to earlier stages

COMMON MISTAKES:
x Rushing through concrete to "get to the maths"
x Removing manipulatives too soon
x Skipping the pictorial stage
x Not connecting all three representations explicitly

WHEN YOU SEE:
- Can follow procedures but can't explain why
- Struggles with abstract concepts
- EHCP mentions "needs concrete resources"
- EHCP states "requires hands-on learning"
- Gets confused when problems look different

REMEMBER: You can always return to concrete when understanding breaks down.`,

  quickChecklist: [
    'Identified what concrete, pictorial, and abstract look like for this concept',
    'Gathered appropriate manipulatives',
    'Prepared drawing materials or templates',
    'Started with concrete - no symbols until understanding is secure',
    'Allowed time for concrete exploration',
    'Asked pupil to draw their concrete work',
    'Explicitly connected drawing to objects',
    'Introduced symbols alongside pictorial representation',
    'Kept manipulatives available for return if needed',
    'Briefed TA on the three stages and pacing',
  ],

  ehcpPhrases: [
    'needs concrete resources',
    'struggles with abstract concepts',
    'requires hands-on learning',
    'benefits from visual and practical approaches',
    'needs to see and touch to understand',
    'difficulty with abstract reasoning',
    'requires multi-sensory teaching approaches',
    'learns best through practical activities',
    'needs concepts breaking down into concrete steps',
  ],

  relatedStrategies: ['chunking-one-step-instructions', 'visual-supports', 'task-analysis'],
};
