'use client';

import Link from 'next/link';
import { strategies } from '@/data/strategies';

// All subjects we want to display (even if no strategies yet)
const allSubjects = [
  'English',
  'Maths',
  'Science',
  'History',
  'Geography',
  'Art',
  'Music',
  'PE',
  'MFL',
  'DT',
  'Drama',
  'RE',
  'Computing',
  'PSHE',
];

// Subject metadata
const subjectInfo: Record<string, { color: string; icon: string; description: string }> = {
  'English': {
    color: 'blue',
    icon: '📖',
    description: 'Reading, writing, speaking and listening',
  },
  'Maths': {
    color: 'amber',
    icon: '🔢',
    description: 'Number, algebra, geometry and statistics',
  },
  'Science': {
    color: 'green',
    icon: '🔬',
    description: 'Biology, chemistry and physics',
  },
  'History': {
    color: 'red',
    icon: '📜',
    description: 'Source analysis and historical enquiry',
  },
  'Geography': {
    color: 'teal',
    icon: '🌍',
    description: 'Human and physical geography',
  },
  'Art': {
    color: 'pink',
    icon: '🎨',
    description: 'Practical techniques and art analysis',
  },
  'Music': {
    color: 'purple',
    icon: '🎵',
    description: 'Performance, composition and listening',
  },
  'PE': {
    color: 'orange',
    icon: '⚽',
    description: 'Physical activity and team sports',
  },
  'MFL': {
    color: 'indigo',
    icon: '🗣️',
    description: 'Modern foreign languages',
  },
  'DT': {
    color: 'slate',
    icon: '🔧',
    description: 'Design and technology',
  },
  'Drama': {
    color: 'rose',
    icon: '🎭',
    description: 'Performance and drama techniques',
  },
  'RE': {
    color: 'violet',
    icon: '🕊️',
    description: 'Religious education and ethics',
  },
  'Computing': {
    color: 'cyan',
    icon: '💻',
    description: 'Computer science and digital literacy',
  },
  'PSHE': {
    color: 'emerald',
    icon: '💚',
    description: 'Personal, social and health education',
  },
};

const colorClasses: Record<string, { bg: string; border: string; text: string; hover: string }> = {
  blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', hover: 'hover:bg-blue-100' },
  amber: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700', hover: 'hover:bg-amber-100' },
  green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700', hover: 'hover:bg-green-100' },
  red: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700', hover: 'hover:bg-red-100' },
  teal: { bg: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-700', hover: 'hover:bg-teal-100' },
  pink: { bg: 'bg-pink-50', border: 'border-pink-200', text: 'text-pink-700', hover: 'hover:bg-pink-100' },
  purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', hover: 'hover:bg-purple-100' },
  orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', hover: 'hover:bg-orange-100' },
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-700', hover: 'hover:bg-indigo-100' },
  slate: { bg: 'bg-slate-100', border: 'border-slate-300', text: 'text-slate-700', hover: 'hover:bg-slate-200' },
  rose: { bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-700', hover: 'hover:bg-rose-100' },
  violet: { bg: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-700', hover: 'hover:bg-violet-100' },
  cyan: { bg: 'bg-cyan-50', border: 'border-cyan-200', text: 'text-cyan-700', hover: 'hover:bg-cyan-100' },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', hover: 'hover:bg-emerald-100' },
};

// Count strategies per subject
const getStrategyCount = (subject: string) => {
  return strategies.filter(s =>
    s.subjects.some(sub => sub.toLowerCase() === subject.toLowerCase())
  ).length;
};

// Check if subject has worked examples
const hasWorkedExamples = (subject: string) => {
  return strategies.some(s =>
    s.content.workedExamples.some(e => e.subject.toLowerCase() === subject.toLowerCase())
  );
};

export default function SubjectsPage() {
  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12">
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link href="/" className="text-slate-500 hover:text-slate-900">Home</Link>
              </li>
              <li className="text-slate-300">/</li>
              <li className="text-slate-900">Subject Bundles</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Strategies by Subject
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Find strategies with worked examples specific to your subject. Each bundle shows you exactly how to apply SEND strategies in your classroom context.
          </p>
        </header>

        {/* All Subjects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {allSubjects.map((subject) => {
            const info = subjectInfo[subject] || { color: 'slate', icon: '📚', description: 'Strategies for this subject' };
            const colors = colorClasses[info.color] || colorClasses.slate;
            const count = getStrategyCount(subject);
            const hasExamples = hasWorkedExamples(subject);

            return (
              <Link
                key={subject}
                href={`/subjects/${subject.toLowerCase()}`}
                className={`${colors.bg} ${colors.border} ${colors.hover} border-2 rounded-xl p-5 transition-all group block`}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{info.icon}</span>
                  {hasExamples && (
                    <span className={`${colors.text} text-xs font-medium px-2 py-0.5 rounded-full bg-white border ${colors.border}`}>
                      {count} strategies
                    </span>
                  )}
                </div>
                <h3 className={`text-lg font-bold ${colors.text} mb-1 group-hover:underline`}>
                  {subject}
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  {info.description}
                </p>
                {hasExamples ? (
                  <p className="text-xs text-emerald-600 font-medium">
                    Worked examples available →
                  </p>
                ) : (
                  <p className="text-xs text-slate-400">
                    Coming soon
                  </p>
                )}
              </Link>
            );
          })}
        </div>

        {/* What's Included */}
        <section className="mt-16 bg-slate-50 rounded-xl p-8 border border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 mb-6">What's in Each Subject Bundle?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">All Relevant Strategies</h3>
                <p className="text-slate-600 text-sm">Every strategy that applies to your subject, in one place</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Subject-Specific Examples</h3>
                <p className="text-slate-600 text-sm">Real worked examples using topics from your subject</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Printable Bundle</h3>
                <p className="text-slate-600 text-sm">Download and print for your department</p>
              </div>
            </div>
          </div>
        </section>

        {/* Can't Find Your Subject */}
        <section className="mt-8 bg-emerald-50 rounded-xl p-6 border border-emerald-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="font-semibold text-emerald-800 mb-1">Need a strategy for a specific lesson?</h3>
              <p className="text-emerald-700 text-sm">
                The AI Generator can create personalised differentiation for any subject and topic.
              </p>
            </div>
            <Link
              href="/generator"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors shadow-sm self-start"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              AI Generator
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
