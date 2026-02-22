'use client';

import { useState } from 'react';

interface Step {
  step: number;
  title: string;
  instruction: string;
  teacherSays?: string;
  tip?: string;
}

interface StepByStepGuideProps {
  title: string;
  description?: string;
  steps: Step[];
  variant?: 'default' | 'compact';
}

export function StepByStepGuide({
  title,
  description,
  steps,
  variant = 'default',
}: StepByStepGuideProps) {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  if (variant === 'compact') {
    return (
      <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
        <h4 className="font-semibold text-slate-900 mb-3">{title}</h4>
        <ol className="space-y-2">
          {steps.map((step) => (
            <li key={step.step} className="flex gap-3 text-sm">
              <span className="flex-shrink-0 w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                {step.step}
              </span>
              <div>
                <p className="text-slate-700">{step.instruction}</p>
                {step.teacherSays && (
                  <p className="text-slate-500 text-xs mt-1 italic">
                    Say: &ldquo;{step.teacherSays}&rdquo;
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200">
      {/* Header */}
      <div className="p-6 border-b border-slate-200">
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        {description && (
          <p className="text-slate-600 mt-2">{description}</p>
        )}
      </div>

      {/* Steps */}
      <div className="divide-y divide-slate-200">
        {steps.map((step) => (
          <div key={step.step} className="group">
            <button
              onClick={() => setExpandedStep(expandedStep === step.step ? null : step.step)}
              className="w-full p-4 flex items-start gap-4 text-left hover:bg-slate-50 transition-colors"
              aria-expanded={expandedStep === step.step}
            >
              <span className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                {step.step}
              </span>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-slate-900">{step.title}</h4>
                <p className="text-slate-600 text-sm mt-1">{step.instruction}</p>
              </div>
              <svg
                className={`w-5 h-5 text-slate-400 transition-transform ${
                  expandedStep === step.step ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {expandedStep === step.step && (
              <div className="px-4 pb-4 pl-16 space-y-3">
                {step.teacherSays && (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                    <p className="text-xs font-medium text-emerald-700 mb-1">What to say:</p>
                    <p className="text-slate-700 italic">&ldquo;{step.teacherSays}&rdquo;</p>
                  </div>
                )}
                {step.tip && (
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                    <p className="text-xs font-medium text-amber-700 mb-1">Tip:</p>
                    <p className="text-slate-700 text-sm">{step.tip}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Worked example component for subject-specific examples
interface WorkedExampleProps {
  subject: 'English' | 'Maths' | 'Science' | 'History' | 'Geography' | 'Art' | 'Music' | 'PE' | 'MFL' | 'DT' | 'Drama' | 'RE' | 'Computing' | 'PSHE';
  topic: string;
  scenario: string;
  steps: Array<{
    action: string;
    teacherDoes: string;
    pupilDoes: string;
  }>;
}

export function WorkedExample({ subject, topic, scenario, steps }: WorkedExampleProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const subjectColors: Record<string, string> = {
    English: 'bg-blue-100 border-blue-200 text-blue-700',
    Maths: 'bg-purple-100 border-purple-200 text-purple-700',
    Science: 'bg-green-100 border-green-200 text-green-700',
    History: 'bg-amber-100 border-amber-200 text-amber-700',
    Geography: 'bg-teal-100 border-teal-200 text-teal-700',
    Art: 'bg-pink-100 border-pink-200 text-pink-700',
    Music: 'bg-indigo-100 border-indigo-200 text-indigo-700',
    PE: 'bg-orange-100 border-orange-200 text-orange-700',
    MFL: 'bg-cyan-100 border-cyan-200 text-cyan-700',
    DT: 'bg-slate-100 border-slate-200 text-slate-700',
    Drama: 'bg-rose-100 border-rose-200 text-rose-700',
    RE: 'bg-violet-100 border-violet-200 text-violet-700',
    Computing: 'bg-sky-100 border-sky-200 text-sky-700',
    PSHE: 'bg-lime-100 border-lime-200 text-lime-700',
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center gap-3">
          <span className={`px-3 py-1 rounded-full text-sm font-medium border ${subjectColors[subject]}`}>
            {subject}
          </span>
          <div>
            <h4 className="font-medium text-slate-900">{topic}</h4>
            <p className="text-slate-500 text-sm">{scenario}</p>
          </div>
        </div>
        <svg
          className={`w-5 h-5 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isExpanded && (
        <div className="p-4 pt-0 space-y-3">
          {steps.map((step, index) => (
            <div key={index} className="bg-slate-50 rounded-lg p-4">
              <p className="text-emerald-600 font-medium text-sm mb-2">{step.action}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-slate-500 text-xs uppercase mb-1">Teacher does</p>
                  <p className="text-slate-700">{step.teacherDoes}</p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase mb-1">Pupil does</p>
                  <p className="text-slate-700">{step.pupilDoes}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Quick reference card for printing
interface QuickReferenceProps {
  title: string;
  whenToUse: string[];
  keySteps: string[];
  commonMistakes: string[];
  ehcpPhrases: string[];
}

export function QuickReference({
  title,
  whenToUse,
  keySteps,
  commonMistakes,
  ehcpPhrases,
}: QuickReferenceProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 print:bg-white print:text-black print:border print:border-gray-300">
      <h3 className="text-lg font-bold text-slate-900 print:text-black mb-4 pb-2 border-b border-slate-200 print:border-gray-300">
        {title} — Quick Reference
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
        <div>
          <h4 className="font-semibold text-emerald-600 print:text-green-700 mb-2">When to use</h4>
          <ul className="space-y-1 text-slate-600 print:text-gray-700">
            {whenToUse.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-emerald-600 print:text-green-700 mb-2">Key steps</h4>
          <ol className="space-y-1 text-slate-600 print:text-gray-700 list-decimal list-inside">
            {keySteps.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
        </div>

        <div>
          <h4 className="font-semibold text-amber-600 print:text-amber-700 mb-2">Common mistakes</h4>
          <ul className="space-y-1 text-slate-600 print:text-gray-700">
            {commonMistakes.map((item, i) => (
              <li key={i}>✗ {item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-blue-600 print:text-blue-700 mb-2">Learning needs</h4>
          <ul className="space-y-1 text-slate-600 print:text-gray-700 italic">
            {ehcpPhrases.slice(0, 4).map((item, i) => (
              <li key={i}>&ldquo;{item}&rdquo;</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
