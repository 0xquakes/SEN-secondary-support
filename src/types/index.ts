// Core types for EHCP Strategies app

// Step-by-step guide structure (replaces video)
export interface GuideStep {
  step: number;
  title: string;
  instruction: string;
  teacherSays?: string;
  tip?: string;
}

// Worked example for a specific subject
export interface WorkedExampleData {
  subject: 'English' | 'Maths' | 'Science' | 'History' | 'Geography' | 'Art' | 'Music' | 'PE' | 'MFL' | 'DT' | 'Drama' | 'RE' | 'Computing' | 'PSHE';
  topic: string;
  scenario: string;
  steps: Array<{
    action: string;
    teacherDoes: string;
    pupilDoes: string;
  }>;
}

// Routine application (transition, independent work, etc.)
export interface RoutineExample {
  routine: string;
  context: string;
  steps: string[];
  taRole: string;
}

// Content module structure (replaces video-based microModule)
export interface ContentModule {
  // The problem this strategy solves
  problem: {
    headline: string;
    description: string;
    signs: string[]; // Signs you need this strategy
  };

  // What the strategy is
  explanation: {
    definition: string;
    whyItWorks: string;
    keyPrinciples: string[];
  };

  // How to implement it
  howTo: {
    steps: GuideStep[];
    commonMistakes: string[];
    timeToImplement: string;
  };

  // Subject-specific worked examples
  workedExamples: WorkedExampleData[];

  // Classroom routine applications
  routines: RoutineExample[];

  // Troubleshooting
  troubleshooting: Array<{
    problem: string;
    cause: string;
    solution: string;
  }>;

  // Scripts for teacher and TA
  scripts: {
    teacher: {
      starting: string[];
      during: string[];
      ifStuck: string[];
      ending: string[];
    };
    ta: {
      role: string;
      keyPhrases: string[];
      avoid: string[];
    };
  };

  // No-TA adaptations - how to use this strategy without TA support
  noTaAdaptations: {
    overview: string;
    keyAdjustments: string[];
    independenceStrategies: string[];
    peerSupportOptions: string[];
  };
}

export interface TroubleshootingItem {
  problem: string;
  solution: string;
  tips?: string[];
}

export interface PrepPlanStep {
  time: string;
  action: string;
  details?: string;
}

export type AreaOfNeed =
  | 'Breaking Down Learning'
  | 'Processing & Attention'
  | 'Visual & Structural Support'
  | 'Building Confidence'
  | 'Developing Independence';

export interface Strategy {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  prepTime: string;
  areaOfNeed: AreaOfNeed;
  subjects: string[];
  routines: string[];
  tags: string[];

  // Content module (written walkthroughs)
  content: ContentModule;

  // Additional resources
  prepPlan: PrepPlanStep[];
  printableSummary: string;
  quickChecklist: string[];
  ehcpPhrases: string[];
  relatedStrategies: string[];
}

export interface ProgressData {
  completedStrategies: string[];
  lastVisited: string;
}

export interface FilterOptions {
  difficulty: string[];
  subjects: string[];
  routines: string[];
  prepTime: string[];
}
