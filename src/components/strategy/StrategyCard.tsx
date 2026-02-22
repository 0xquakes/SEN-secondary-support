'use client';

import Link from 'next/link';
import { Strategy } from '@/types';

interface StrategyCardProps {
  strategy: Strategy;
}

export function StrategyCard({ strategy }: StrategyCardProps) {
  const difficultyColors = {
    beginner: 'bg-green-100 text-green-700',
    intermediate: 'bg-yellow-100 text-yellow-700',
    advanced: 'bg-red-100 text-red-700',
  };

  return (
    <Link
      href={`/strategies/${strategy.slug}`}
      className="block bg-white rounded-lg overflow-hidden hover:shadow-md transition-all group border border-slate-200 shadow-sm"
    >
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-lg font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors">
            {strategy.title}
          </h3>
        </div>

        <p className="text-slate-600 text-sm mb-4 line-clamp-2">
          {strategy.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className={`px-2 py-0.5 rounded text-xs font-medium ${difficultyColors[strategy.difficulty]}`}>
            {strategy.difficulty}
          </span>
          <span className="px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600">
            {strategy.prepTime} prep
          </span>
        </div>

        {/* Learning needs preview */}
        <div className="pt-4 border-t border-slate-200">
          <p className="text-xs text-slate-500 mb-2">Helps with:</p>
          <p className="text-xs text-slate-600 italic line-clamp-2">
            &ldquo;{strategy.ehcpPhrases.slice(0, 2).join('", "')}&rdquo;
          </p>
        </div>
      </div>
    </Link>
  );
}
