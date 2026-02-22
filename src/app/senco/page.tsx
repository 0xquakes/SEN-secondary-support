'use client';

import Link from 'next/link';
import { strategies } from '@/data/strategies';

export default function SencoPage() {
  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              SENCO & Coach Resources
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl">
              Tools for leading SEND strategy implementation across your school.
              Observation frameworks, feedback scripts, and professional development pathways.
            </p>
          </div>
          <img
            src="/illustrations/coaching.svg"
            alt="Coaching and support"
            className="w-56 h-44 flex-shrink-0 hidden md:block"
          />
        </header>

        {/* Implementation Guide */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Implementation Guide</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-emerald-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Identify Priority Strategies</h3>
              <p className="text-slate-600 mb-4">
                Review pupil profiles across your cohort. Which learning needs appear most frequently?
                Start with 2-3 strategies that address the most common challenges.
              </p>
              <div className="bg-slate-50 rounded p-3">
                <p className="text-sm text-slate-700">
                  <span className="font-medium text-emerald-600">Tip:</span> "Difficulties with multi-step instructions"
                  and "benefits from visual supports" are often the most common—start there.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-emerald-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Run Staff CPD Sessions</h3>
              <p className="text-slate-600 mb-4">
                Use the strategy guides as CPD content. Each strategy takes 10-15 minutes to read through.
                Follow up with discussion of the worked examples.
              </p>
              <div className="bg-slate-50 rounded p-3">
                <p className="text-sm text-slate-700">
                  <span className="font-medium text-emerald-600">Format:</span> 15 mins read strategy guide → 15 mins discuss worked examples
                  → 15 mins plan implementation for specific pupils.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-emerald-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Support Implementation</h3>
              <p className="text-slate-600 mb-4">
                Teachers use the "Try It Tomorrow" prep plans. Observe implementation using the
                framework below. Provide developmental feedback.
              </p>
              <div className="bg-slate-50 rounded p-3">
                <p className="text-sm text-slate-700">
                  <span className="font-medium text-emerald-600">Timeline:</span> Aim for first observation within
                  2 weeks of CPD. Fidelity matters more than perfection.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-emerald-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Review & Iterate</h3>
              <p className="text-slate-600 mb-4">
                After 4-6 weeks, review impact. Are target pupils showing progress?
                Adjust strategies as needed. Add new strategies to the repertoire.
              </p>
              <div className="bg-slate-50 rounded p-3">
                <p className="text-sm text-slate-700">
                  <span className="font-medium text-emerald-600">Evidence:</span> Look for increased task completion,
                  reduced adult dependency, improved confidence indicators.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Observation Framework */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Observation Framework</h2>
              <p className="text-slate-600">
                Use this framework when observing strategy implementation. Focus on fidelity (are they doing it right?)
                and impact (is it working?).
              </p>
            </div>
            <img
              src="/illustrations/observation.svg"
              alt="Observation checklist"
              className="w-40 h-28 flex-shrink-0 hidden lg:block"
            />
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200">
            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">Look For</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">Evidence of Fidelity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">Evidence of Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-6 py-4 text-slate-900 font-medium">Preparation</td>
                  <td className="px-6 py-4 text-slate-600 text-sm">Materials ready, TA briefed, visuals in place</td>
                  <td className="px-6 py-4 text-slate-600 text-sm">Smooth start, no scrambling for resources</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-slate-900 font-medium">Delivery</td>
                  <td className="px-6 py-4 text-slate-600 text-sm">Follows strategy steps, consistent language</td>
                  <td className="px-6 py-4 text-slate-600 text-sm">Pupil responds, stays engaged, attempts task</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-slate-900 font-medium">Responsiveness</td>
                  <td className="px-6 py-4 text-slate-600 text-sm">Adjusts level of support, drops back when needed</td>
                  <td className="px-6 py-4 text-slate-600 text-sm">Pupil succeeds, shows increasing independence</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-slate-900 font-medium">Consistency</td>
                  <td className="px-6 py-4 text-slate-600 text-sm">Uses strategy throughout relevant moments</td>
                  <td className="px-6 py-4 text-slate-600 text-sm">Pupil anticipates structure, less anxious</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-white rounded-lg shadow-sm border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Quick Observation Checklist</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Was the strategy clearly visible/audible?',
                'Did the teacher/TA follow the key steps?',
                'Was there evidence of prior preparation?',
                'Did the pupil respond positively?',
                'Did the pupil complete the task (or more than usual)?',
                'Was the strategy used consistently, not just once?',
                'Did the teacher/TA adjust support level as needed?',
                'Was there a completion signal or celebration?',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded border-2 border-slate-300 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feedback Scripts */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Feedback Conversation Scripts</h2>
              <p className="text-slate-600">
                Use these scripts for developmental feedback conversations. The goal is to build confidence
                and refine implementation, not to judge.
              </p>
            </div>
            <img
              src="/illustrations/feedback.svg"
              alt="Feedback conversation"
              className="w-40 h-28 flex-shrink-0 hidden lg:block"
            />
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-emerald-600 mb-4">Opening: Acknowledge & Celebrate</h3>
              <div className="bg-slate-50 rounded p-4 space-y-3">
                <p className="text-slate-700 italic">
                  "Thanks for letting me observe. I noticed you were using [strategy name] with [pupil]. Let's talk about how it went."
                </p>
                <p className="text-slate-700 italic">
                  "I saw [specific positive example]. That's exactly what the strategy looks like in practice."
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-amber-600 mb-4">Middle: Explore & Refine</h3>
              <div className="bg-slate-50 rounded p-4 space-y-3">
                <p className="text-slate-700 italic">
                  "How did you feel it went from your perspective?"
                </p>
                <p className="text-slate-700 italic">
                  "I noticed [moment X]. Tell me what you were thinking at that point."
                </p>
                <p className="text-slate-700 italic">
                  "What would you do the same way next time? What might you try differently?"
                </p>
                <p className="text-slate-700 italic">
                  "One thing that might help: [specific suggestion from the strategy guidance]."
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-blue-600 mb-4">Closing: Plan & Support</h3>
              <div className="bg-slate-50 rounded p-4 space-y-3">
                <p className="text-slate-700 italic">
                  "What's your next step with this strategy?"
                </p>
                <p className="text-slate-700 italic">
                  "Is there anything you need from me to help you develop this further?"
                </p>
                <p className="text-slate-700 italic">
                  "I'll pop back in [timeframe] to see how it's going. Just a quick check-in, not a formal observation."
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
            <h4 className="font-semibold text-emerald-700 mb-2">Key Principles</h4>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600">•</span>
                <span>Lead with positives—find what they did well, even if small</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600">•</span>
                <span>Ask before telling—let them reflect first</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600">•</span>
                <span>One refinement at a time—don't overwhelm with feedback</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600">•</span>
                <span>Always end with a concrete next step and offer of support</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Strategy Quick Reference */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Strategy Quick Reference</h2>
          <p className="text-slate-600 mb-6">
            Quick links to all strategies with the learning needs they address.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {strategies.map((strategy) => (
              <Link
                key={strategy.id}
                href={`/strategies/${strategy.slug}`}
                className="bg-white rounded-lg p-4 hover:shadow-md transition-all group border border-slate-200 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {strategy.title}
                  </h3>
                  <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                    strategy.difficulty === 'beginner' ? 'bg-green-100 text-green-700' :
                    strategy.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {strategy.difficulty}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mb-2">{strategy.shortDescription}</p>
                <p className="text-xs text-slate-500">
                  Helps with: "{strategy.ehcpPhrases[0]}"
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Professional Development Pathway */}
        <section>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <h2 className="text-2xl font-bold text-slate-900">Suggested PD Pathway</h2>
            <img
              src="/illustrations/progress.svg"
              alt="Progress tracking"
              className="w-40 h-28 flex-shrink-0 hidden lg:block"
            />
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Foundation (Term 1)</h3>
                  <p className="text-slate-600 text-sm mb-2">
                    All staff complete: Chunking, Visual Supports, Task Analysis
                  </p>
                  <p className="text-xs text-slate-500">
                    Focus: Basic implementation with target pupils
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Development (Term 2)</h3>
                  <p className="text-slate-600 text-sm mb-2">
                    Add: Prompt Fading, Backward Chaining
                  </p>
                  <p className="text-xs text-slate-500">
                    Focus: Building independence, tracking progress
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Mastery (Term 3)</h3>
                  <p className="text-slate-600 text-sm mb-2">
                    Add: Errorless Learning. All staff combining strategies flexibly.
                  </p>
                  <p className="text-xs text-slate-500">
                    Focus: Responsive use, peer coaching, sharing practice
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
