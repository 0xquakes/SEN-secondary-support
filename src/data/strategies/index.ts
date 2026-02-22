import { Strategy } from '@/types';
import { chunkingStrategy } from './chunking';
import { backwardChainingStrategy } from './backward-chaining';
import { taskAnalysisStrategy } from './task-analysis';
import { promptFadingStrategy } from './prompt-fading';
import { visualSupportsStrategy } from './visual-supports';
import { errorlessLearningStrategy } from './errorless-learning';
import { waitTimeStrategy } from './wait-time';
import { choiceMakingStrategy } from './choice-making';
import { preTeachingStrategy } from './pre-teaching';
import { overlearningStrategy } from './overlearning';
import { cpaStrategy } from './concrete-pictorial-abstract';
import { nowNextBoardsStrategy } from './now-next-boards';
import { modellingStrategy } from './modelling';
import { scaffoldedWritingStrategy } from './scaffolded-writing';
import { selfRegulationStrategy } from './self-regulation';
import { attentionCuesStrategy } from './attention-cues';

export const strategies: Strategy[] = [
  chunkingStrategy,
  backwardChainingStrategy,
  taskAnalysisStrategy,
  promptFadingStrategy,
  visualSupportsStrategy,
  errorlessLearningStrategy,
  waitTimeStrategy,
  choiceMakingStrategy,
  preTeachingStrategy,
  overlearningStrategy,
  cpaStrategy,
  nowNextBoardsStrategy,
  modellingStrategy,
  scaffoldedWritingStrategy,
  selfRegulationStrategy,
  attentionCuesStrategy,
];

export const getStrategyBySlug = (slug: string): Strategy | undefined => {
  return strategies.find((s) => s.slug === slug);
};

export const getStrategyById = (id: string): Strategy | undefined => {
  return strategies.find((s) => s.id === id);
};

export const getRelatedStrategies = (strategy: Strategy): Strategy[] => {
  return strategy.relatedStrategies
    .map((slug) => getStrategyBySlug(slug))
    .filter((s): s is Strategy => s !== undefined);
};

export const getAllSubjects = (): string[] => {
  const subjects = new Set<string>();
  strategies.forEach((s) => s.subjects.forEach((subj) => subjects.add(subj)));
  return Array.from(subjects).sort();
};

export const getAllRoutines = (): string[] => {
  const routines = new Set<string>();
  strategies.forEach((s) => s.routines.forEach((r) => routines.add(r)));
  return Array.from(routines).sort();
};

export const getAllTags = (): string[] => {
  const tags = new Set<string>();
  strategies.forEach((s) => s.tags.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
};

export const getAllAreasOfNeed = (): string[] => {
  // Return in a logical order rather than alphabetical
  return [
    'Breaking Down Learning',
    'Processing & Attention',
    'Visual & Structural Support',
    'Building Confidence',
    'Developing Independence',
  ];
};

export const getStrategiesByArea = (): Record<string, typeof strategies> => {
  const grouped: Record<string, typeof strategies> = {};
  getAllAreasOfNeed().forEach(area => {
    grouped[area] = strategies.filter(s => s.areaOfNeed === area);
  });
  return grouped;
};

export const filterStrategies = (options: {
  difficulty?: string[];
  subjects?: string[];
  routines?: string[];
  prepTime?: string[];
  search?: string;
}): Strategy[] => {
  let filtered = [...strategies];

  if (options.difficulty && options.difficulty.length > 0) {
    filtered = filtered.filter((s) => options.difficulty!.includes(s.difficulty));
  }

  if (options.subjects && options.subjects.length > 0) {
    filtered = filtered.filter((s) =>
      s.subjects.some((subj) => options.subjects!.includes(subj))
    );
  }

  if (options.routines && options.routines.length > 0) {
    filtered = filtered.filter((s) =>
      s.routines.some((r) => options.routines!.includes(r))
    );
  }

  if (options.prepTime && options.prepTime.length > 0) {
    filtered = filtered.filter((s) => options.prepTime!.includes(s.prepTime));
  }

  if (options.search && options.search.trim() !== '') {
    const searchLower = options.search.toLowerCase();
    filtered = filtered.filter(
      (s) =>
        s.title.toLowerCase().includes(searchLower) ||
        s.shortDescription.toLowerCase().includes(searchLower) ||
        s.tags.some((t) => t.toLowerCase().includes(searchLower)) ||
        s.ehcpPhrases.some((p) => p.toLowerCase().includes(searchLower))
    );
  }

  return filtered;
};

export {
  chunkingStrategy,
  backwardChainingStrategy,
  taskAnalysisStrategy,
  promptFadingStrategy,
  visualSupportsStrategy,
  errorlessLearningStrategy,
  waitTimeStrategy,
  choiceMakingStrategy,
  preTeachingStrategy,
  overlearningStrategy,
  cpaStrategy,
  nowNextBoardsStrategy,
  modellingStrategy,
  scaffoldedWritingStrategy,
  selfRegulationStrategy,
  attentionCuesStrategy,
};
