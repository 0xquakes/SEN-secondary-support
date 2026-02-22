'use client';

import Link from 'next/link';
import { strategies } from '@/data/strategies';

export default function DownloadsPage() {
  const handlePrintAll = () => {
    // Open each strategy print page in sequence
    strategies.forEach((strategy, index) => {
      setTimeout(() => {
        window.open(`/print/${strategy.slug}`, '_blank');
      }, index * 500);
    });
  };

  return (
    <div className="py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Download Strategy PDFs
          </h1>
          <p className="text-lg text-slate-600 mb-6">
            Each strategy is available as a printable PDF with complete guidance,
            worked examples for all 14 subjects, plus teacher and TA scripts.
          </p>

          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-emerald-800 mb-3">How to Save as PDF</h2>
            <ol className="space-y-2 text-sm text-slate-700">
              <li className="flex gap-2">
                <span className="font-bold text-emerald-600">1.</span>
                Click the "Print / Download PDF" button for any strategy below
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-emerald-600">2.</span>
                In the print dialog, select "Save as PDF" as your destination/printer
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-emerald-600">3.</span>
                Click Save to download the PDF to your device
              </li>
            </ol>
            <p className="text-xs text-slate-500 mt-3">
              Works in Chrome, Safari, Firefox, and Edge. On Mac: Cmd+P → PDF dropdown. On Windows: Ctrl+P → Microsoft Print to PDF.
            </p>
          </div>
        </header>

        {/* Strategy List */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            All Strategies
          </h2>

          <div className="space-y-3">
            {strategies.map((strategy) => (
              <div
                key={strategy.id}
                className="bg-white rounded-lg p-4 shadow-sm border border-slate-200 flex items-center justify-between gap-4"
              >
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-slate-900 truncate">{strategy.title}</h3>
                  <p className="text-sm text-slate-600 truncate">{strategy.shortDescription}</p>
                  <div className="flex gap-2 mt-2">
                    <span className="text-xs px-2 py-0.5 bg-slate-100 text-slate-700 rounded">14 subjects</span>
                    <span className={`text-xs px-2 py-0.5 rounded ${
                      strategy.difficulty === 'beginner' ? 'bg-emerald-100 text-emerald-700' :
                      strategy.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {strategy.difficulty}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <Link
                    href={`/print/${strategy.slug}`}
                    target="_blank"
                    className="px-4 py-2 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 text-sm flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    PDF
                  </Link>
                  <Link
                    href={`/strategies/${strategy.slug}`}
                    className="px-4 py-2 bg-slate-100 text-slate-700 font-medium rounded-lg hover:bg-slate-200 text-sm"
                  >
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bundle Download */}
        <section className="mt-12 bg-slate-100 rounded-lg p-6 border border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 mb-3">Complete Bundle</h2>
          <p className="text-slate-600 mb-4">
            Need all strategies? Click below to open all print pages, then save each as PDF.
          </p>
          <button
            onClick={handlePrintAll}
            className="px-6 py-3 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
            </svg>
            Open All Print Pages
          </button>
          <p className="text-xs text-slate-500 mt-2">
            Opens multiple tabs. Save each as PDF using your browser&apos;s print function.
          </p>
        </section>

        {/* Quick Access Cards */}
        <section className="mt-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Also Available</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/resources"
              className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-slate-900 mb-2">Printable Resource Bundle</h3>
              <p className="text-sm text-slate-600">
                One-page summaries, quick checklists, and TA prompt cards for all strategies.
              </p>
            </Link>
            <Link
              href="/library"
              className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-slate-900 mb-2">Interactive Library</h3>
              <p className="text-sm text-slate-600">
                Browse strategies with search, filters, and full interactive content.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
