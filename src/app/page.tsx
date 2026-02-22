'use client';

import Link from 'next/link';
import { strategies } from '@/data/strategies';
import { useProgress } from '@/hooks/useProgress';

export default function HomePage() {
  const { progress, isLoaded } = useProgress();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Text content */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-emerald-600 font-semibold mb-3 text-sm uppercase tracking-wide">For KS3/KS4 Teachers and TAs</p>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 leading-tight">
                Turn SEND paperwork into{' '}
                <span className="text-emerald-600">classroom action</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl">
                The EHCP says &ldquo;benefits from visual supports&rdquo; — but what does that <em>actually</em> look like in your lesson? Get specific strategies, exact scripts, and worked examples you can use tomorrow.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Link
                  href="/library"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors shadow-md text-lg"
                >
                  Browse All Strategies
                </Link>
                <Link
                  href="/generator"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors border border-slate-300 shadow-sm text-lg"
                >
                  Generate for My Lesson
                </Link>
              </div>
              <p className="text-slate-500 mt-5 text-sm">
                5-minute prep. Evidence-based. Ready to use.
              </p>
            </div>

            {/* Mascot */}
            <div className="flex-shrink-0 order-first md:order-last">
              <img
                src="/mascot.png"
                alt="Includable chameleon mascot"
                className="w-40 h-40 md:w-56 md:h-56 drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start - 3 clear paths */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-slate-900 mb-6 text-center">Choose how to start</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/library"
              className="bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl p-5 transition-colors group"
            >
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-emerald-700">Browse all strategies</h3>
              <p className="text-sm text-slate-600">See all strategies with search and filters</p>
            </Link>

            <Link
              href="/subjects"
              className="bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl p-5 transition-colors group"
            >
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-blue-700">Find by subject</h3>
              <p className="text-sm text-slate-600">Strategies with worked examples for your subject</p>
            </Link>

            <Link
              href="/generator"
              className="bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-xl p-5 transition-colors group"
            >
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-purple-700">AI Generator</h3>
              <p className="text-sm text-slate-600">Get custom differentiation for your specific lesson</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      {isLoaded && progress.completedStrategies.length > 0 && (
        <section className="py-12 bg-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-slate-900">Your Progress</h2>
              {progress.lastVisited && (
                <Link
                  href={`/strategies/${progress.lastVisited}`}
                  className="text-sm text-emerald-600 hover:text-emerald-700"
                >
                  Continue learning →
                </Link>
              )}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-3xl font-bold text-emerald-600">{progress.completedStrategies.length}</p>
                <p className="text-sm text-slate-600">Strategies completed</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-3xl font-bold text-emerald-600">{strategies.length - progress.completedStrategies.length}</p>
                <p className="text-sm text-slate-600">Strategies to go</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-3xl font-bold text-emerald-600">
                  {Math.round((progress.completedStrategies.length / strategies.length) * 100)}%
                </p>
                <p className="text-sm text-slate-600">Overall progress</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* AI Generator Highlight */}
      <section className="py-12 bg-gradient-to-r from-purple-50 to-indigo-50 border-y border-purple-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-xl font-bold text-slate-900 mb-2">AI Differentiation Generator</h2>
              <p className="text-slate-600">
                Tell the AI your subject, topic, and the barriers your pupil faces. It will generate a complete differentiation plan with specific strategies, teacher scripts, and adapted resources tailored to your exact lesson.
              </p>
            </div>
            <Link
              href="/generator"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors shadow-sm whitespace-nowrap"
            >
              Try the Generator
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Documentation to Action */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            From Documentation to Action
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl">
            You&apos;ve read the paperwork. Now find out exactly what to do in the classroom.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { phrase: '"Difficulties following multi-step instructions"', strategy: 'chunking-one-step-instructions', action: 'Use Chunking' },
              { phrase: '"Gives up before completing work"', strategy: 'backward-chaining', action: 'Try Backward Chaining' },
              { phrase: '"Needs tasks breaking into small steps"', strategy: 'task-analysis', action: 'Apply Task Analysis' },
              { phrase: '"Over-reliant on adult support"', strategy: 'prompt-fading', action: 'Use Prompt Fading' },
              { phrase: '"Benefits from visual supports"', strategy: 'visual-supports-now-next', action: 'Create Visual Supports' },
              { phrase: '"Shuts down when faced with difficulty"', strategy: 'errorless-learning', action: 'Try Errorless Learning' },
            ].map((item, index) => (
              <Link
                key={index}
                href={`/strategies/${item.strategy}`}
                className="bg-white rounded-lg p-5 hover:shadow-md transition-all group border border-slate-200"
              >
                <p className="text-slate-500 text-sm mb-2">When documentation says:</p>
                <p className="text-slate-800 font-medium italic mb-3">{item.phrase}</p>
                <p className="text-emerald-600 font-semibold group-hover:text-emerald-700 flex items-center gap-1">
                  {item.action}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/library"
              className="text-emerald-600 hover:text-emerald-700 font-medium"
            >
              View all strategies →
            </Link>
          </div>
        </div>
      </section>

      {/* For SENCOs - Compact Banner */}
      <section className="py-8 bg-slate-100 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h3 className="font-semibold text-slate-900">Are you a SENCO or Coach?</h3>
              <p className="text-sm text-slate-600">Access CPD plans, observation frameworks, and implementation guides</p>
            </div>
            <Link
              href="/senco"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors border border-slate-200 shadow-sm whitespace-nowrap"
            >
              SENCO Resources
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
