'use client';

import { useState, useEffect } from 'react';

export function Disclaimer() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user has already seen the disclaimer this session
    const dismissed = sessionStorage.getItem('disclaimer-seen');
    if (!dismissed) {
      setIsVisible(true);
    } else {
      setIsDismissed(true);
    }
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem('disclaimer-seen', 'true');
    setIsVisible(false);
    setIsDismissed(true);
  };

  if (!isVisible && isDismissed) {
    return null;
  }

  if (!isVisible) {
    return null;
  }

  return (
    <div
      role="alert"
      aria-live="polite"
      className="disclaimer-banner p-4 print:hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
          {/* Icon */}
          <div className="flex-shrink-0">
            <svg
              className="w-6 h-6 text-amber-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800">
                For Teaching Staff Only
              </span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong className="text-slate-900">Important:</strong> This resource provides general guidance on evidence-based strategies for supporting pupils with SEND.
              It does not replace professional judgement, individual pupil assessments, or your school&apos;s policies.
              Always adapt these strategies to meet each pupil&apos;s specific needs, and consult with your SENCo or relevant specialists where appropriate.
              Your school may have additional requirements or procedures that take precedence.
            </p>
          </div>

          {/* Dismiss button */}
          <div className="flex-shrink-0">
            <button
              onClick={handleDismiss}
              className="inline-flex items-center justify-center w-8 h-8 rounded-full text-slate-500 hover:text-slate-900 hover:bg-amber-100 transition-colors"
              aria-label="Dismiss notice"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Compact disclaimer for footer/print
export function DisclaimerCompact() {
  return (
    <div className="text-xs text-slate-500 leading-relaxed">
      <p className="mb-2">
        <strong className="text-slate-600">For teaching staff only.</strong> This resource provides general guidance and does not replace professional judgement,
        individual assessments, or school policies. Adapt strategies to meet each pupil&apos;s individual needs.
      </p>
    </div>
  );
}

// Print-friendly disclaimer
export function DisclaimerPrint() {
  return (
    <div className="hidden print:block disclaimer-banner-print text-sm mb-4">
      <p className="font-semibold mb-1">For Teaching Staff Only</p>
      <p>
        This resource provides general guidance on evidence-based strategies for supporting pupils with SEND.
        It does not replace professional judgement, individual pupil assessments, or your school&apos;s policies.
        Always adapt these strategies to meet each pupil&apos;s specific needs.
      </p>
    </div>
  );
}
