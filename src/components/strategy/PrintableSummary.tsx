'use client';

import { Strategy } from '@/types';

interface PrintableSummaryProps {
  strategy: Strategy;
}

export function PrintableSummary({ strategy }: PrintableSummaryProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Print button - hidden when printing */}
      <div className="print:hidden mb-6">
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Print Summary
        </button>
      </div>

      {/* Printable content - only visible when printing */}
      <div className="hidden print:block print:text-black">
        <div className="prose prose-sm max-w-none">
          <div dangerouslySetInnerHTML={{
            __html: strategy.printableSummary
              .replace(/^# (.*$)/gm, '<h1 class="text-2xl font-bold mb-4">$1</h1>')
              .replace(/^## (.*$)/gm, '<h2 class="text-lg font-bold mt-6 mb-2">$1</h2>')
              .replace(/^- \*\*(.*?)\*\*(.*)$/gm, '<li class="ml-4"><strong>$1</strong>$2</li>')
              .replace(/^- (.*)$/gm, '<li class="ml-4">$1</li>')
              .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              .replace(/\n\n/g, '</p><p class="mt-2">')
          }} />

          <div className="mt-8 pt-4 border-t-2 border-black">
            <h2 className="text-lg font-bold mb-3">Quick Checklist</h2>
            <div className="grid grid-cols-1 gap-2">
              {strategy.quickChecklist.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 border-2 border-black flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-400 text-xs text-gray-600">
            <p>SEND Teaching Strategies | {strategy.title}</p>
          </div>
        </div>
      </div>
    </>
  );
}
