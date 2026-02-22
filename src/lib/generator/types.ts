// Types for the Worked Example Generator

export type StrategyType =
  | 'chunking'
  | 'backward-chaining'
  | 'task-analysis'
  | 'prompt-fading'
  | 'visual-supports'
  | 'errorless-learning';

export type Subject = 'english' | 'maths' | 'science';

export type KeyStage = 'ks3' | 'ks4';

export type TaskType = 'worksheet' | 'reading' | 'writing' | 'practical' | 'discussion';

export type WorkingLevel = 'eyfs' | 'ks1' | 'ks2' | 'ks3' | 'ks4';

export interface GeneratorInputs {
  strategy: StrategyType;
  subject: Subject;
  keyStage: KeyStage;
  topic: string;
  taskType: TaskType;
  workingLevel: WorkingLevel;
  notes: string;
}

export interface InstructionStep {
  step: number;
  instruction: string;
  supportNote?: string;
}

export interface BackwardChainStep {
  phase: number;
  teacherDoes: string;
  pupilDoes: string;
  support: string;
}

export interface PromptLevel {
  level: number;
  type: 'full-physical' | 'partial-physical' | 'model' | 'gesture' | 'verbal-direct' | 'verbal-indirect' | 'visual' | 'independent';
  prompt: string;
  example: string;
}

export interface PromptFadingStep {
  session: string;
  promptLevel: string;
  action: string;
  successCriteria: string;
}

export interface VisualSupport {
  type: 'now-next' | 'checklist' | 'cue-card' | 'visual-timer' | 'task-board';
  title: string;
  content: string[];
  usage: string;
}

export interface GeneratorOutputs {
  instructionSequence: InstructionStep[];
  backwardChaining: BackwardChainStep[] | null;
  prompts: PromptLevel[];
  promptFadingPlan: PromptFadingStep[];
  teacherScript: string[];
  taScript: string[];
  visualSupports: VisualSupport[];
  miniVideoScript: {
    duration: string;
    hook: string;
    demonstration: string[];
    keyPoints: string[];
    callToAction: string;
  };
}
