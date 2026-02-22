'use client';

import { useEffect } from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { getStrategyBySlug, getRelatedStrategies } from '@/data/strategies';
import { StrategyTabs } from '@/components/strategy/StrategyTabs';
import { StrategyCard } from '@/components/strategy/StrategyCard';
import { useProgress } from '@/hooks/useProgress';

export default function StrategyPage() {
  const params = useParams();
  const slug = params.slug as string;
  const strategy = getStrategyBySlug(slug);
  const { setLastVisited } = useProgress();

  useEffect(() => {
    if (strategy) {
      setLastVisited(strategy.slug);
    }
  }, [strategy, setLastVisited]);

  if (!strategy) {
    notFound();
  }

  const relatedStrategies = getRelatedStrategies(strategy);

  const difficultyColors = {
    beginner: 'bg-green-100 text-green-700',
    intermediate: 'bg-yellow-100 text-yellow-700',
    advanced: 'bg-red-100 text-red-700',
  };

  return (
    <div className="py-8 md:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 print:hidden" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link href="/" className="text-slate-500 hover:text-slate-900">Home</Link>
            </li>
            <li className="text-slate-300">/</li>
            <li>
              <Link href="/library" className="text-slate-500 hover:text-slate-900">Library</Link>
            </li>
            <li className="text-slate-300">/</li>
            <li className="text-slate-900">{strategy.title}</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900">{strategy.title}</h1>
                <div className="flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyColors[strategy.difficulty]}`}>
                    {strategy.difficulty}
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-600">
                    {strategy.prepTime} prep
                  </span>
                </div>
              </div>
              <p className="text-xl text-slate-600 mb-6">{strategy.shortDescription}</p>

              {/* Learning Needs */}
              <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-200">
                <p className="text-sm font-medium text-slate-600 mb-2">This strategy helps with:</p>
                <div className="flex flex-wrap gap-2">
                  {strategy.ehcpPhrases.slice(0, 4).map((phrase, index) => (
                    <span key={index} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm italic">
                      &ldquo;{phrase}&rdquo;
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <img
              src="/illustrations/strategy-detail.svg"
              alt="Strategy guide"
              className="w-48 h-24 flex-shrink-0 hidden lg:block print:hidden"
            />
          </div>
        </header>

        {/* Tabbed Content */}
        <StrategyTabs strategy={strategy} />

        {/* Sidebar Info (collapsed on mobile) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
            <h3 className="text-sm font-semibold text-slate-900 mb-3">Subjects</h3>
            <div className="flex flex-wrap gap-2">
              {strategy.subjects.map((subject, index) => (
                <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                  {subject}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
            <h3 className="text-sm font-semibold text-slate-900 mb-3">Routines</h3>
            <div className="flex flex-wrap gap-2">
              {strategy.routines.map((routine, index) => (
                <span key={index} className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs">
                  {routine}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
            <h3 className="text-sm font-semibold text-slate-900 mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {strategy.tags.map((tag, index) => (
                <span key={index} className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Related Strategies */}
        {relatedStrategies.length > 0 && (
          <section className="mt-12 pt-8 border-t border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Related Strategies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedStrategies.map((related) => (
                <StrategyCard key={related.id} strategy={related} />
              ))}
            </div>
          </section>
        )}

        {/* Back to Library */}
        <div className="mt-12 pt-8 border-t border-slate-200 print:hidden">
          <Link
            href="/library"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Strategy Library
          </Link>
        </div>
      </div>
    </div>
  );
}
