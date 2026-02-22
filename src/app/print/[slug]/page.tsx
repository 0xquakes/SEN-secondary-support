'use client';

import { useParams, notFound } from 'next/navigation';
import { getStrategyBySlug } from '@/data/strategies';

export default function PrintStrategyPage() {
  const params = useParams();
  const slug = params.slug as string;
  const strategy = getStrategyBySlug(slug);

  if (!strategy) {
    notFound();
  }

  // Get examples for each subject
  const englishExample = strategy.content.workedExamples.find(e => e.subject === 'English');
  const mathsExample = strategy.content.workedExamples.find(e => e.subject === 'Maths');
  const scienceExample = strategy.content.workedExamples.find(e => e.subject === 'Science');

  // Filter out signs that mention EHCP
  const filteredSigns = strategy.content.problem.signs.filter(
    sign => !sign.toLowerCase().includes('ehcp')
  );

  return (
    <>
      <div className="print-page bg-white text-black p-8 max-w-4xl mx-auto">
        {/* Header with Strategy Title */}
        <header className="mb-8">
          <div className="bg-emerald-600 text-white py-6 px-8 rounded-lg mb-6">
            <h1 className="text-4xl font-bold text-center">{strategy.title}</h1>
          </div>
          <div className="flex justify-between items-start border-b-2 border-gray-300 pb-4">
            <p className="text-gray-600 text-lg max-w-xl">{strategy.shortDescription}</p>
            <div className="text-right text-sm flex-shrink-0 ml-4">
              <span className="inline-block px-3 py-1 bg-gray-200 rounded font-medium text-sm">
                {strategy.difficulty}
              </span>
              <p className="mt-2 text-gray-500">{strategy.prepTime} prep</p>
            </div>
          </div>
        </header>

        {/* Overview */}
        <section className="mb-6">
          <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-3">Overview: {strategy.title}</h2>
          <p className="text-gray-700">{strategy.longDescription}</p>
        </section>

        {/* When to Use This Strategy */}
        <section className="mb-6">
          <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-3">When to Use This Strategy</h2>
          <ul className="space-y-1 text-sm">
            {filteredSigns.map((sign, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-gray-400">•</span>
                <span>{sign}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Step-by-Step Guide */}
        <section className="mb-6 page-break-before">
          <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-3">Step-by-Step Guide</h2>
          <ol className="space-y-4">
            {strategy.content.howTo.steps.map((step) => (
              <li key={step.step} className="flex gap-3">
                <span className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {step.step}
                </span>
                <div>
                  <p className="font-semibold">{step.title}</p>
                  <p className="text-sm text-gray-600">{step.instruction}</p>
                  {step.teacherSays && (
                    <p className="text-sm mt-1 italic text-emerald-700">Teacher says: {step.teacherSays}</p>
                  )}
                  {step.tip && (
                    <p className="text-sm mt-1 text-amber-700">Tip: {step.tip}</p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* English Example */}
        {englishExample && (
          <section className="mb-6 page-break-before">
            <h2 className="text-xl font-bold border-b border-blue-300 pb-2 mb-3 text-blue-800">
              English Example: {englishExample.topic}
            </h2>
            <p className="text-sm text-gray-600 mb-4 bg-blue-50 p-3 rounded">{englishExample.scenario.replace(/EHCP[^.]*\./gi, '').replace(/\s+/g, ' ').trim()}</p>
            <div className="space-y-3">
              {englishExample.steps.map((step, i) => (
                <div key={i} className="border-l-4 border-blue-400 pl-4 py-2">
                  <p className="font-semibold text-sm">{step.action}</p>
                  <p className="text-sm text-gray-700"><strong>Teacher:</strong> {step.teacherDoes}</p>
                  <p className="text-sm text-gray-600"><strong>Pupil:</strong> {step.pupilDoes}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Maths Example */}
        {mathsExample && (
          <section className="mb-6 page-break-before">
            <h2 className="text-xl font-bold border-b border-amber-300 pb-2 mb-3 text-amber-800">
              Maths Example: {mathsExample.topic}
            </h2>
            <p className="text-sm text-gray-600 mb-4 bg-amber-50 p-3 rounded">{mathsExample.scenario.replace(/EHCP[^.]*\./gi, '').replace(/\s+/g, ' ').trim()}</p>
            <div className="space-y-3">
              {mathsExample.steps.map((step, i) => (
                <div key={i} className="border-l-4 border-amber-400 pl-4 py-2">
                  <p className="font-semibold text-sm">{step.action}</p>
                  <p className="text-sm text-gray-700"><strong>Teacher:</strong> {step.teacherDoes}</p>
                  <p className="text-sm text-gray-600"><strong>Pupil:</strong> {step.pupilDoes}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Science Example */}
        {scienceExample && (
          <section className="mb-6 page-break-before">
            <h2 className="text-xl font-bold border-b border-green-300 pb-2 mb-3 text-green-800">
              Science Example: {scienceExample.topic}
            </h2>
            <p className="text-sm text-gray-600 mb-4 bg-green-50 p-3 rounded">{scienceExample.scenario.replace(/EHCP[^.]*\./gi, '').replace(/\s+/g, ' ').trim()}</p>
            <div className="space-y-3">
              {scienceExample.steps.map((step, i) => (
                <div key={i} className="border-l-4 border-green-400 pl-4 py-2">
                  <p className="font-semibold text-sm">{step.action}</p>
                  <p className="text-sm text-gray-700"><strong>Teacher:</strong> {step.teacherDoes}</p>
                  <p className="text-sm text-gray-600"><strong>Pupil:</strong> {step.pupilDoes}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="mt-8 pt-4 border-t border-gray-300 text-xs text-gray-500 text-center">
          <p>SEND Teaching Strategy &middot; {strategy.title} &middot; For teaching staff only</p>
          <p className="mt-1">Please adapt all guidance to meet individual pupil needs.</p>
        </footer>
      </div>

      {/* Print button - hidden when printing */}
      <div className="print:hidden fixed bottom-6 right-6 flex gap-3">
        <button
          onClick={() => window.print()}
          className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 shadow-lg flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Print / Save as PDF
        </button>
        <a
          href={`/strategies/${slug}`}
          className="px-6 py-3 bg-slate-600 text-white font-semibold rounded-lg hover:bg-slate-700 shadow-lg"
        >
          Back to Strategy
        </a>
      </div>

      {/* Print styles */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 1.5cm;
          }

          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          .print-page {
            padding: 0 !important;
            max-width: none !important;
          }

          .page-break-before {
            page-break-before: always;
            break-before: page;
          }

          .print\\:hidden {
            display: none !important;
          }

          /* Ensure backgrounds print */
          .bg-gray-50, .bg-blue-50, .bg-amber-50, .bg-green-50, .bg-emerald-50 {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>
    </>
  );
}
