'use client';

import { useState } from 'react';
import { TroubleshootingItem } from '@/types';

interface TroubleshootingAccordionProps {
  items: TroubleshootingItem[];
}

export function TroubleshootingAccordion({ items }: TroubleshootingAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-slate-800 rounded-lg overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-750 transition-colors"
          >
            <span className="font-medium text-white pr-4">{item.problem}</span>
            <svg
              className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {openIndex === index && (
            <div className="px-5 pb-5">
              <div className="pt-2 border-t border-slate-700">
                <p className="text-slate-300 mt-3">{item.solution}</p>

                {item.tips && item.tips.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm font-medium text-emerald-400 mb-2">Tips:</p>
                    <ul className="space-y-1">
                      {item.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start gap-2 text-sm text-slate-400">
                          <span className="text-emerald-400 mt-0.5">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
