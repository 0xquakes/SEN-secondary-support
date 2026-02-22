'use client';

import { strategies } from '@/data/strategies';
import { Strategy } from '@/types';
import { DisclaimerPrint } from '@/components/layout/Disclaimer';

// Strategy summary component - one page per strategy
function StrategySummary({ strategy }: { strategy: Strategy }) {
  return (
    <div className="page-break-after bg-white text-black p-8 print:p-0">
      {/* Header */}
      <div className="border-b-2 border-black pb-4 mb-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold">{strategy.title}</h2>
            <p className="text-gray-600 mt-1">{strategy.shortDescription}</p>
          </div>
          <div className="text-right text-sm">
            <span className="inline-block px-2 py-1 bg-gray-200 rounded font-medium">
              {strategy.difficulty}
            </span>
            <p className="mt-1 text-gray-500">{strategy.prepTime} prep</p>
          </div>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-2 gap-6">
        {/* Left column */}
        <div>
          {/* What it is */}
          <section className="mb-4">
            <h3 className="font-bold text-sm uppercase tracking-wide border-b border-gray-300 pb-1 mb-2">
              What It Is
            </h3>
            <p className="text-sm leading-relaxed">{strategy.longDescription}</p>
          </section>

          {/* Learning Needs */}
          <section className="mb-4">
            <h3 className="font-bold text-sm uppercase tracking-wide border-b border-gray-300 pb-1 mb-2">
              Learning Needs This Addresses
            </h3>
            <ul className="text-sm space-y-1">
              {strategy.ehcpPhrases.slice(0, 4).map((phrase, i) => (
                <li key={i} className="italic text-gray-700">&ldquo;{phrase}&rdquo;</li>
              ))}
            </ul>
          </section>

          {/* Works well in */}
          <section className="mb-4">
            <h3 className="font-bold text-sm uppercase tracking-wide border-b border-gray-300 pb-1 mb-2">
              Works Well In
            </h3>
            <div className="text-sm">
              <p><strong>Subjects:</strong> {strategy.subjects.join(', ')}</p>
              <p><strong>Routines:</strong> {strategy.routines.join(', ')}</p>
            </div>
          </section>
        </div>

        {/* Right column */}
        <div>
          {/* Quick Checklist */}
          <section className="mb-4">
            <h3 className="font-bold text-sm uppercase tracking-wide border-b border-gray-300 pb-1 mb-2">
              Quick Checklist
            </h3>
            <ul className="text-sm space-y-2">
              {strategy.quickChecklist.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="inline-block w-4 h-4 border-2 border-gray-400 rounded flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Prep Plan */}
          <section>
            <h3 className="font-bold text-sm uppercase tracking-wide border-b border-gray-300 pb-1 mb-2">
              5-Minute Prep Plan
            </h3>
            <ol className="text-sm space-y-2">
              {strategy.prepPlan.slice(0, 4).map((step, i) => (
                <li key={i} className="flex gap-2">
                  <span className="font-bold text-gray-500">{i + 1}.</span>
                  <div>
                    <span className="font-medium">{step.action}</span>
                    {step.details && (
                      <span className="text-gray-600 text-xs block">{step.details}</span>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-gray-300 text-xs text-gray-500 text-center">
        SEND Teaching Strategies &middot; {strategy.title} &middot; For teaching staff only
      </div>
    </div>
  );
}

// Checklist page - multiple checklists on one page
function ChecklistPage({ strategiesGroup }: { strategiesGroup: Strategy[] }) {
  return (
    <div className="page-break-after bg-white text-black p-8 print:p-0">
      <h2 className="text-xl font-bold border-b-2 border-black pb-2 mb-6">
        Quick Checklists
      </h2>

      <div className="grid grid-cols-2 gap-6">
        {strategiesGroup.map((strategy) => (
          <div key={strategy.id} className="border border-gray-300 rounded-lg p-4">
            <h3 className="font-bold text-sm mb-3 pb-2 border-b border-gray-200">
              {strategy.title}
            </h3>
            <ul className="text-xs space-y-2">
              {strategy.quickChecklist.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="inline-block w-3.5 h-3.5 border-2 border-gray-400 rounded flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-300 text-xs text-gray-500 text-center">
        SEND Teaching Strategies &middot; Quick Checklists &middot; For teaching staff only
      </div>
    </div>
  );
}

// TA Prompt Card component
function TAPromptCard({ strategy }: { strategy: Strategy }) {
  // Generate TA prompts based on the strategy
  const taPrompts = getTAPrompts(strategy);

  return (
    <div className="border-2 border-gray-400 rounded-lg p-4 bg-amber-50">
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-amber-200">
        <span className="text-lg">📋</span>
        <h4 className="font-bold text-sm">{strategy.title}</h4>
      </div>

      <div className="text-xs space-y-3">
        <div>
          <p className="font-semibold text-amber-800 mb-1">Key phrases to use:</p>
          <ul className="space-y-1 text-gray-700">
            {taPrompts.phrases.map((phrase, i) => (
              <li key={i}>&ldquo;{phrase}&rdquo;</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-amber-800 mb-1">Remember:</p>
          <ul className="space-y-1 text-gray-700">
            {taPrompts.reminders.map((reminder, i) => (
              <li key={i}>• {reminder}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-amber-800 mb-1">If stuck:</p>
          <p className="text-gray-700">{taPrompts.ifStuck}</p>
        </div>
      </div>
    </div>
  );
}

// Generate TA prompts based on strategy
function getTAPrompts(strategy: Strategy): {
  phrases: string[];
  reminders: string[];
  ifStuck: string;
} {
  const prompts: Record<string, { phrases: string[]; reminders: string[]; ifStuck: string }> = {
    'chunking-one-step-instructions': {
      phrases: [
        'What do you need to do first?',
        'Show me when you\'re ready for the next step.',
        'Good. Now...',
        'One thing at a time.',
      ],
      reminders: [
        'Wait for completion before giving next instruction',
        'Stay close but don\'t hover',
        'Use the agreed signal',
        'Keep language consistent',
      ],
      ifStuck: 'Repeat the single instruction. Point to the relevant materials. Wait.',
    },
    'backward-chaining': {
      phrases: [
        'You\'re going to finish this one.',
        'I\'ll help with the start, you do the end.',
        'Nearly there - your turn.',
        'You finished it!',
      ],
      reminders: [
        'Complete earlier steps yourself first',
        'Let them do the final step independently',
        'Celebrate the completion',
        'Gradually add earlier steps',
      ],
      ifStuck: 'Step back in and complete more steps yourself. Reduce what they need to do.',
    },
    'task-analysis': {
      phrases: [
        'Let\'s look at your checklist.',
        'Which step are you on?',
        'Tick that off - well done.',
        'What comes next?',
      ],
      reminders: [
        'Point to the step list, not verbal reminders',
        'Let them find their place',
        'Celebrate each tick',
        'Don\'t rush between steps',
      ],
      ifStuck: 'Point to current step on the checklist. Read it aloud if needed.',
    },
    'prompt-fading': {
      phrases: [
        'Try it yourself first.',
        'What do you think?',
        'Check your resources.',
        'You can do this part.',
      ],
      reminders: [
        'Start with least support needed',
        'Wait 10 seconds before prompting',
        'Note which prompts you use',
        'Reduce support over time',
      ],
      ifStuck: 'Move up one prompt level. Use gesture before verbal.',
    },
    'visual-supports': {
      phrases: [
        'Check your Now-Next board.',
        'What does your checklist say?',
        'Look at your cue card.',
        'Point to where you are.',
      ],
      reminders: [
        'Point to visuals, don\'t just tell',
        'Keep visuals visible and close',
        'Update Now-Next when moving on',
        'Let them refer independently',
      ],
      ifStuck: 'Point directly to the relevant visual. Read it together if needed.',
    },
    'errorless-learning': {
      phrases: [
        'Let me show you first.',
        'We\'ll do this one together.',
        'That\'s exactly right.',
        'You\'ve got it.',
      ],
      reminders: [
        'Prompt before errors happen',
        'Give immediate support',
        'Praise correct responses warmly',
        'Prevent rather than correct',
      ],
      ifStuck: 'Provide the correct response immediately. Practice it together.',
    },
  };

  return prompts[strategy.slug] || {
    phrases: ['What do you need to do?', 'Check your resources.', 'You can do this.'],
    reminders: ['Wait before prompting', 'Use visual supports', 'Praise effort'],
    ifStuck: 'Break the task down further. Provide more support.',
  };
}

// TA Prompt Cards page
function TAPromptCardsPage() {
  return (
    <div className="page-break-after bg-white text-black p-8 print:p-0">
      <h2 className="text-xl font-bold border-b-2 border-black pb-2 mb-2">
        TA Prompt Cards
      </h2>
      <p className="text-sm text-gray-600 mb-6">
        Cut out and keep these cards for quick reference during lessons.
      </p>

      <div className="grid grid-cols-2 gap-4">
        {strategies.map((strategy) => (
          <TAPromptCard key={strategy.id} strategy={strategy} />
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-300 text-xs text-gray-500 text-center">
        SEND Teaching Strategies &middot; TA Prompt Cards &middot; For teaching staff only
      </div>
    </div>
  );
}

// Main page component
export default function ResourcesPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Screen view */}
      <div className="print:hidden py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Printable Resources Bundle
                </h1>
                <p className="text-lg text-slate-600">
                  Download all strategy summaries, checklists, and TA prompt cards in one printable document.
                  Perfect for training sessions, TA briefings, or keeping in your planner.
                </p>
              </div>
              <img
                src="/illustrations/resources.svg"
                alt="Printable resources"
                className="w-48 h-36 flex-shrink-0 hidden md:block"
              />
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">This bundle includes:</h2>
              <ul className="space-y-3 text-slate-700 mb-6">
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center text-white text-sm">✓</span>
                  <span><strong>6 one-page strategy summaries</strong> — what it is, when to use it, quick checklist</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center text-white text-sm">✓</span>
                  <span><strong>Quick checklists</strong> — all 6 strategies on one page for easy reference</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center text-white text-sm">✓</span>
                  <span><strong>TA prompt cards</strong> — cut-out cards with key phrases and reminders</span>
                </li>
              </ul>

              <button
                onClick={handlePrint}
                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors text-lg shadow-sm"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                Print All Resources
              </button>

              <p className="text-sm text-slate-500 mt-4 text-center">
                Prints to approximately 9 pages on A4 paper
              </p>
            </div>
          </header>

          {/* Preview */}
          <section className="mt-12">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">Preview</h2>

            <div className="space-y-6">
              {/* Strategy summaries preview */}
              <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                <h3 className="font-medium text-slate-700 mb-3">Strategy Summaries (6 pages)</h3>
                <div className="grid grid-cols-3 gap-3">
                  {strategies.map((s) => (
                    <div key={s.id} className="bg-slate-50 rounded p-3 text-black text-xs border border-slate-200">
                      <p className="font-bold truncate">{s.title}</p>
                      <p className="text-gray-500 truncate">{s.shortDescription}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Checklists preview */}
              <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                <h3 className="font-medium text-slate-700 mb-3">Quick Checklists (2 pages)</h3>
                <div className="bg-slate-50 rounded p-3 text-black text-xs border border-slate-200">
                  <p className="font-bold">All 6 checklists on 2 pages</p>
                  <p className="text-gray-500">Ready to tick off as you prepare</p>
                </div>
              </div>

              {/* TA cards preview */}
              <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                <h3 className="font-medium text-slate-700 mb-3">TA Prompt Cards (1 page)</h3>
                <div className="bg-amber-50 rounded p-3 text-black text-xs border border-amber-200">
                  <p className="font-bold">6 cut-out cards</p>
                  <p className="text-gray-500">Key phrases and reminders for each strategy</p>
                </div>
              </div>
            </div>
          </section>

          {/* Tips */}
          <section className="mt-12 bg-emerald-50 rounded-lg p-6 border border-emerald-100">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Printing Tips</h2>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Print on A4 paper for best results</li>
              <li>• Use &ldquo;Fit to page&rdquo; in your print settings if content is cut off</li>
              <li>• For TA cards: print on card stock or laminate for durability</li>
              <li>• Consider printing checklists double-sided to save paper</li>
            </ul>
          </section>
        </div>
      </div>

      {/* Print view - only shown when printing */}
      <div className="hidden print:block">
        {/* Cover page */}
        <div className="page-break-after p-8 text-center">
          <div className="mt-16">
            <h1 className="text-4xl font-bold mb-4">SEND Teaching Strategies</h1>
            <h2 className="text-2xl text-gray-600 mb-8">Resource Bundle for Teachers</h2>

            <div className="max-w-md mx-auto text-left mt-12 space-y-4">
              <p className="text-lg">This bundle contains:</p>
              <ul className="text-gray-700 space-y-2">
                <li>✓ 6 one-page strategy summaries</li>
                <li>✓ Quick checklists for all strategies</li>
                <li>✓ TA prompt cards (cut-out)</li>
              </ul>
            </div>

            <div className="mt-16">
              <DisclaimerPrint />
            </div>
          </div>

          <div className="absolute bottom-8 left-0 right-0 text-center text-sm text-gray-500">
            For teaching staff only &middot; Adapt to your school&apos;s policies
          </div>
        </div>

        {/* Strategy summaries */}
        {strategies.map((strategy) => (
          <StrategySummary key={strategy.id} strategy={strategy} />
        ))}

        {/* Checklists - 3 per page */}
        <ChecklistPage strategiesGroup={strategies.slice(0, 3)} />
        <ChecklistPage strategiesGroup={strategies.slice(3, 6)} />

        {/* TA Prompt Cards */}
        <TAPromptCardsPage />

        {/* Back cover */}
        <div className="p-8 text-center">
          <div className="mt-32">
            <h2 className="text-2xl font-bold mb-4">SEND Teaching Strategies</h2>
            <p className="text-gray-600 mb-8">Practical Classroom Support for KS3/KS4 Teachers</p>

            <div className="max-w-md mx-auto text-sm text-gray-500 space-y-4">
              <p>
                These strategies are based on evidence-based practice for supporting
                pupils with SEND. Adapt all guidance to meet individual pupil needs.
              </p>
              <p>
                For more worked examples, video demonstrations, and the interactive
                generator tool, visit the full resource online.
              </p>
            </div>
          </div>

          <div className="absolute bottom-8 left-0 right-0 text-center text-xs text-gray-400">
            For teaching staff only &middot; Does not replace professional judgement
          </div>
        </div>
      </div>

      {/* Print-specific styles */}
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

          .page-break-after {
            page-break-after: always;
            break-after: page;
          }

          .page-break-before {
            page-break-before: always;
            break-before: page;
          }

          /* Ensure backgrounds print */
          .bg-amber-50 {
            background-color: #fffbeb !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          /* Hide screen-only elements */
          .print\\:hidden {
            display: none !important;
          }

          /* Show print-only elements */
          .print\\:block {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}
