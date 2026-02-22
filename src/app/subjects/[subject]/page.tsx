'use client';

import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { strategies } from '@/data/strategies';

// Subject display names and metadata
const subjectMeta: Record<string, { display: string; color: string; bgColor: string; borderColor: string }> = {
  english: { display: 'English', color: 'text-blue-700', bgColor: 'bg-blue-50', borderColor: 'border-blue-200' },
  maths: { display: 'Maths', color: 'text-amber-700', bgColor: 'bg-amber-50', borderColor: 'border-amber-200' },
  science: { display: 'Science', color: 'text-green-700', bgColor: 'bg-green-50', borderColor: 'border-green-200' },
  history: { display: 'History', color: 'text-red-700', bgColor: 'bg-red-50', borderColor: 'border-red-200' },
  geography: { display: 'Geography', color: 'text-teal-700', bgColor: 'bg-teal-50', borderColor: 'border-teal-200' },
  art: { display: 'Art', color: 'text-pink-700', bgColor: 'bg-pink-50', borderColor: 'border-pink-200' },
  music: { display: 'Music', color: 'text-purple-700', bgColor: 'bg-purple-50', borderColor: 'border-purple-200' },
  pe: { display: 'PE', color: 'text-orange-700', bgColor: 'bg-orange-50', borderColor: 'border-orange-200' },
  mfl: { display: 'MFL', color: 'text-indigo-700', bgColor: 'bg-indigo-50', borderColor: 'border-indigo-200' },
  dt: { display: 'DT', color: 'text-slate-700', bgColor: 'bg-slate-100', borderColor: 'border-slate-300' },
  drama: { display: 'Drama', color: 'text-rose-700', bgColor: 'bg-rose-50', borderColor: 'border-rose-200' },
  re: { display: 'RE', color: 'text-violet-700', bgColor: 'bg-violet-50', borderColor: 'border-violet-200' },
  computing: { display: 'Computing', color: 'text-cyan-700', bgColor: 'bg-cyan-50', borderColor: 'border-cyan-200' },
  pshe: { display: 'PSHE', color: 'text-emerald-700', bgColor: 'bg-emerald-50', borderColor: 'border-emerald-200' },
};

export default function SubjectPage() {
  const params = useParams();
  const subjectSlug = (params.subject as string).toLowerCase();
  const meta = subjectMeta[subjectSlug];

  if (!meta) {
    notFound();
  }

  // Find strategies that include this subject
  const subjectStrategies = strategies.filter(s =>
    s.subjects.some(sub => sub.toLowerCase() === subjectSlug)
  );

  // Get worked examples for this subject
  const strategiesWithExamples = subjectStrategies.map(strategy => {
    const example = strategy.content.workedExamples.find(
      e => e.subject.toLowerCase() === subjectSlug ||
           (subjectSlug === 'maths' && e.subject === 'Maths') ||
           (subjectSlug === 'english' && e.subject === 'English') ||
           (subjectSlug === 'science' && e.subject === 'Science')
    );
    return { strategy, example };
  });

  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link href="/" className="text-slate-500 hover:text-slate-900">Home</Link>
            </li>
            <li className="text-slate-300">/</li>
            <li>
              <Link href="/subjects" className="text-slate-500 hover:text-slate-900">Subjects</Link>
            </li>
            <li className="text-slate-300">/</li>
            <li className="text-slate-900">{meta.display}</li>
          </ol>
        </nav>

        {/* Header */}
        <header className={`${meta.bgColor} ${meta.borderColor} border-2 rounded-xl p-8 mb-8`}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className={`text-3xl md:text-4xl font-bold ${meta.color} mb-2`}>
                SEND Strategies for {meta.display}
              </h1>
              <p className="text-slate-600 text-lg">
                {subjectStrategies.length} strategies with {meta.display.toLowerCase()}-specific worked examples
              </p>
            </div>
            <Link
              href={`/print/subjects/${subjectSlug}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors border border-slate-200 shadow-sm self-start"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Print Bundle
            </Link>
          </div>
        </header>

        {/* Quick Links */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Jump to Strategy</h2>
          <div className="flex flex-wrap gap-2">
            {subjectStrategies.map(strategy => (
              <a
                key={strategy.id}
                href={`#${strategy.slug}`}
                className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors"
              >
                {strategy.title}
              </a>
            ))}
          </div>
        </section>

        {/* Strategies with Examples */}
        <div className="space-y-12">
          {strategiesWithExamples.map(({ strategy, example }) => (
            <section
              key={strategy.id}
              id={strategy.slug}
              className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden scroll-mt-20"
            >
              {/* Strategy Header */}
              <div className="p-6 border-b border-slate-200">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-2">{strategy.title}</h2>
                    <p className="text-slate-600">{strategy.shortDescription}</p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      strategy.difficulty === 'beginner' ? 'bg-green-100 text-green-700' :
                      strategy.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {strategy.difficulty}
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-600">
                      {strategy.prepTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Worked Example */}
              {example ? (
                <div className={`p-6 ${meta.bgColor}`}>
                  <h3 className={`font-semibold ${meta.color} mb-3`}>
                    {meta.display} Example: {example.topic}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 bg-white p-3 rounded-lg">
                    {example.scenario}
                  </p>
                  <div className="space-y-3">
                    {example.steps.map((step, i) => (
                      <div key={i} className="bg-white rounded-lg p-4 border-l-4 border-slate-300">
                        <p className="font-medium text-slate-900 text-sm mb-2">{step.action}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                          <div>
                            <span className="text-slate-500">Teacher:</span>
                            <span className="text-slate-700 ml-1">{step.teacherDoes}</span>
                          </div>
                          <div>
                            <span className="text-slate-500">Pupil:</span>
                            <span className="text-slate-700 ml-1">{step.pupilDoes}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="p-6 bg-slate-50">
                  <p className="text-slate-500 italic">
                    This strategy applies to {meta.display} but doesn't have a specific worked example yet.
                    <Link href={`/strategies/${strategy.slug}`} className="text-emerald-600 hover:underline ml-1">
                      View the full strategy guide →
                    </Link>
                  </p>
                </div>
              )}

              {/* Quick Actions */}
              <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center gap-3">
                <Link
                  href={`/strategies/${strategy.slug}`}
                  className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  Full strategy guide →
                </Link>
                <Link
                  href={`/print/${strategy.slug}`}
                  className="text-sm text-slate-600 hover:text-slate-700 font-medium"
                >
                  Print PDF
                </Link>
                <span className="text-slate-300">|</span>
                <Link
                  href={`/generator?subject=${subjectSlug}&strategy=${encodeURIComponent(strategy.title)}`}
                  className="inline-flex items-center gap-1.5 text-sm text-purple-600 hover:text-purple-700 font-medium"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Customise with AI
                </Link>
              </div>
            </section>
          ))}
        </div>

        {/* Other Subjects */}
        <section className="mt-16">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Other Subject Bundles</h2>
          <div className="flex flex-wrap gap-3">
            {Object.entries(subjectMeta)
              .filter(([slug]) => slug !== subjectSlug)
              .map(([slug, info]) => (
                <Link
                  key={slug}
                  href={`/subjects/${slug}`}
                  className={`px-4 py-2 ${info.bgColor} ${info.borderColor} border rounded-lg ${info.color} font-medium hover:shadow-sm transition-all`}
                >
                  {info.display}
                </Link>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}
