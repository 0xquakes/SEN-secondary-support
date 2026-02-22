'use client';

import { useState } from 'react';
import { Strategy } from '@/types';
import { StepByStepGuide, WorkedExample, QuickReference } from './StepByStepGuide';
import { PrepPlan } from './PrepPlan';
import { PrintableSummary } from './PrintableSummary';

interface StrategyTabsProps {
  strategy: Strategy;
}

type TabId = 'overview' | 'howto' | 'examples' | 'scripts' | 'nota' | 'troubleshooting' | 'resources';

interface Tab {
  id: TabId;
  label: string;
  icon: React.ReactNode;
}

const tabs: Tab[] = [
  {
    id: 'overview',
    label: 'Overview',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 'howto',
    label: 'How To',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    id: 'examples',
    label: 'Examples',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    id: 'scripts',
    label: 'Scripts',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
  {
    id: 'nota',
    label: 'No TA?',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    id: 'troubleshooting',
    label: 'Troubleshooting',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 'resources',
    label: 'Resources',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

export function StrategyTabs({ strategy }: StrategyTabsProps) {
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const { content } = strategy;

  return (
    <div>
      {/* Tab Navigation */}
      <div className="border-b border-slate-200 mb-8">
        <nav className="flex gap-1 overflow-x-auto pb-px" aria-label="Strategy sections">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-emerald-600 text-emerald-600'
                  : 'border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-300'
              }`}
              aria-selected={activeTab === tab.id}
              role="tab"
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div role="tabpanel">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* When to Use This Strategy */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white text-sm font-bold">?</span>
                <h2 className="text-xl font-bold text-slate-900">When to Use This Strategy</h2>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                <h3 className="text-lg font-semibold text-blue-600 mb-3">{content.problem.headline}</h3>
                <p className="text-slate-600 mb-4">{content.problem.description}</p>
                <div>
                  <p className="text-sm font-medium text-slate-500 mb-2">You might notice:</p>
                  <ul className="space-y-1">
                    {content.problem.signs.map((sign, i) => (
                      <li key={i} className="text-slate-600 text-sm flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        {sign}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* What It Is */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-600 text-white text-sm font-bold">?</span>
                <h2 className="text-xl font-bold text-slate-900">What It Is</h2>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                <p className="text-lg text-slate-900 font-medium mb-4">{content.explanation.definition}</p>
                <p className="text-slate-600 mb-6">{content.explanation.whyItWorks}</p>
                <div>
                  <p className="text-sm font-medium text-emerald-600 mb-2">Key principles:</p>
                  <ul className="space-y-2">
                    {content.explanation.keyPrinciples.map((principle, i) => (
                      <li key={i} className="text-slate-600 flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">{i + 1}.</span>
                        {principle}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* How To Tab */}
        {activeTab === 'howto' && (
          <div className="space-y-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-slate-500">Time to implement: {content.howTo.timeToImplement}</span>
            </div>

            <StepByStepGuide
              title="Step-by-Step Guide"
              steps={content.howTo.steps}
            />

            {/* Common Mistakes */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="font-semibold text-amber-700 mb-4">Common mistakes to avoid</h3>
              <ul className="space-y-2">
                {content.howTo.commonMistakes.map((mistake, i) => (
                  <li key={i} className="text-slate-700 flex items-start gap-2">
                    <span className="text-amber-600">✗</span>
                    {mistake}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Examples Tab */}
        {activeTab === 'examples' && (
          <div className="space-y-8">
            {/* Worked Examples */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-2">Worked Examples</h2>
              <p className="text-slate-600 mb-4">
                See exactly how this strategy works across different subjects.
              </p>
              <div className="space-y-4">
                {content.workedExamples.map((example, i) => (
                  <WorkedExample key={i} {...example} />
                ))}
              </div>
            </section>

            {/* Classroom Routines */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Classroom Routines</h2>
              <div className="space-y-4">
                {content.routines.map((routine, i) => (
                  <div key={i} className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                        {routine.routine}
                      </span>
                    </div>
                    <p className="text-slate-500 text-sm mb-3">{routine.context}</p>
                    <ol className="space-y-2 mb-4">
                      {routine.steps.map((step, j) => (
                        <li key={j} className="text-slate-700 text-sm flex items-start gap-2">
                          <span className="text-emerald-600 font-bold">{j + 1}.</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                    <div className="pt-3 border-t border-slate-200">
                      <p className="text-xs text-slate-500 uppercase mb-1">TA role</p>
                      <p className="text-slate-700 text-sm">{routine.taRole}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Scripts Tab */}
        {activeTab === 'scripts' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Teacher Script */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-emerald-700 mb-6">Teacher Script</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-slate-500 text-xs uppercase mb-2">Starting the task</p>
                  {content.scripts.teacher.starting.map((line, i) => (
                    <p key={i} className="text-slate-700 italic mb-1">{line}</p>
                  ))}
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase mb-2">During the task</p>
                  {content.scripts.teacher.during.map((line, i) => (
                    <p key={i} className="text-slate-700 italic mb-1">{line}</p>
                  ))}
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase mb-2">If stuck</p>
                  {content.scripts.teacher.ifStuck.map((line, i) => (
                    <p key={i} className="text-slate-700 italic mb-1">{line}</p>
                  ))}
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase mb-2">Ending</p>
                  {content.scripts.teacher.ending.map((line, i) => (
                    <p key={i} className="text-slate-700 italic mb-1">{line}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* TA Script */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-amber-700 mb-6">TA Script</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-slate-500 text-xs uppercase mb-2">Your role</p>
                  <p className="text-slate-700">{content.scripts.ta.role}</p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase mb-2">Key phrases</p>
                  {content.scripts.ta.keyPhrases.map((line, i) => (
                    <p key={i} className="text-slate-700 italic mb-1">{line}</p>
                  ))}
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase mb-2">Avoid</p>
                  {content.scripts.ta.avoid.map((line, i) => (
                    <p key={i} className="text-slate-700 flex items-start gap-1 mb-1">
                      <span className="text-red-500">✗</span> {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* No TA Tab */}
        {activeTab === 'nota' && content.noTaAdaptations && (
          <div className="space-y-6">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-amber-800 mb-1">No Teaching Assistant?</h3>
                  <p className="text-amber-700">{content.noTaAdaptations.overview}</p>
                </div>
              </div>
            </div>

            <section className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Key Adjustments
              </h3>
              <ul className="space-y-3">
                {content.noTaAdaptations.keyAdjustments.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">{i + 1}</span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                Building Independence
              </h3>
              <ul className="space-y-3">
                {content.noTaAdaptations.independenceStrategies.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Peer Support Options
              </h3>
              <ul className="space-y-3">
                {content.noTaAdaptations.peerSupportOptions.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-purple-500 mt-1">•</span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        )}

        {/* Troubleshooting Tab */}
        {activeTab === 'troubleshooting' && (
          <div className="space-y-4">
            <p className="text-slate-600 mb-6">Common challenges and how to address them.</p>
            {content.troubleshooting.map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-5 shadow-sm border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">{item.problem}</h3>
                <p className="text-slate-500 text-sm mb-3">
                  <strong className="text-slate-600">Cause:</strong> {item.cause}
                </p>
                <p className="text-slate-700">
                  <strong className="text-emerald-600">Solution:</strong> {item.solution}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Resources Tab */}
        {activeTab === 'resources' && (
          <div className="space-y-8">
            {/* Prep Plan */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">5-Minute Prep Plan</h2>
              <PrepPlan steps={strategy.prepPlan} />
            </section>

            {/* Quick Checklist */}
            <section className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Quick Checklist</h2>
              <ul className="space-y-3">
                {strategy.quickChecklist.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border-2 border-slate-300 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Quick Reference */}
            <QuickReference
              title={strategy.title}
              whenToUse={content.problem.signs.slice(0, 4)}
              keySteps={content.howTo.steps.map(s => s.title)}
              commonMistakes={content.howTo.commonMistakes.slice(0, 3)}
              ehcpPhrases={strategy.ehcpPhrases}
            />

            {/* Printable Summary */}
            <section className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Printable Summary</h2>
              <p className="text-slate-600 mb-4">
                One-page summary with checklist. Perfect for briefing TAs or keeping in your planner.
              </p>
              <PrintableSummary strategy={strategy} />
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
