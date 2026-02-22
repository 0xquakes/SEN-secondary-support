'use client';

import { useState, useMemo } from 'react';
import { strategies, filterStrategies, getAllSubjects, getAllRoutines, getAllAreasOfNeed, getStrategiesByArea } from '@/data/strategies';
import { StrategyCard } from '@/components/strategy/StrategyCard';
import { FilterBar } from '@/components/ui/FilterBar';

// Area of need descriptions and colors
const areaInfo: Record<string, { description: string; color: string; bgColor: string; borderColor: string }> = {
  'Breaking Down Learning': {
    description: 'Strategies for simplifying complex information and making learning accessible',
    color: 'text-blue-700',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  'Processing & Attention': {
    description: 'Supporting pupils who need more time to process or struggle with focus',
    color: 'text-amber-700',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
  },
  'Visual & Structural Support': {
    description: 'Making information visible and providing clear structure',
    color: 'text-emerald-700',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
  },
  'Building Confidence': {
    description: 'Helping pupils who have experienced failure to rebuild self-belief',
    color: 'text-rose-700',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-200',
  },
  'Developing Independence': {
    description: 'Moving pupils from adult-dependent to self-sufficient',
    color: 'text-purple-700',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
};

export default function LibraryPage() {
  const [searchValue, setSearchValue] = useState('');
  const [viewMode, setViewMode] = useState<'grouped' | 'all'>('grouped');
  const [selectedFilters, setSelectedFilters] = useState({
    difficulty: [] as string[],
    subjects: [] as string[],
    routines: [] as string[],
    prepTime: [] as string[],
  });

  const filters = useMemo(() => ({
    difficulty: ['beginner', 'intermediate', 'advanced'],
    subjects: getAllSubjects(),
    routines: getAllRoutines(),
    prepTime: [...new Set(strategies.map(s => s.prepTime))],
  }), []);

  const filteredStrategies = useMemo(() => {
    return filterStrategies({
      ...selectedFilters,
      search: searchValue,
    });
  }, [searchValue, selectedFilters]);

  const handleFilterChange = (filterType: string, values: string[]) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: values,
    }));
  };

  const handleClearAll = () => {
    setSelectedFilters({
      difficulty: [],
      subjects: [],
      routines: [],
      prepTime: [],
    });
    setSearchValue('');
  };

  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Strategy Library</h1>
            <p className="text-lg text-slate-600 max-w-2xl">
              Browse all {strategies.length} evidence-based strategies for supporting pupils with SEND. Search by name, subject, or learning need.
            </p>
          </div>
          <img
            src="/illustrations/library.svg"
            alt="Browse strategies"
            className="w-48 h-36 flex-shrink-0 hidden md:block"
          />
        </div>

        {/* Filters */}
        <FilterBar
          searchValue={searchValue}
          onSearchChange={setSearchValue}
          filters={filters}
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
          onClearAll={handleClearAll}
        />

        {/* View Toggle */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-slate-500">
            Showing {filteredStrategies.length} of {strategies.length} strategies
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-600">View:</span>
            <div className="flex rounded-lg border border-slate-200 overflow-hidden">
              <button
                onClick={() => setViewMode('grouped')}
                className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                  viewMode === 'grouped'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white text-slate-600 hover:bg-slate-50'
                }`}
              >
                By Area of Need
              </button>
              <button
                onClick={() => setViewMode('all')}
                className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                  viewMode === 'all'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white text-slate-600 hover:bg-slate-50'
                }`}
              >
                All Strategies
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        {filteredStrategies.length > 0 ? (
          viewMode === 'grouped' && !searchValue && Object.values(selectedFilters).every(arr => arr.length === 0) ? (
            // Grouped view (only when no filters/search active)
            <div className="space-y-12">
              {getAllAreasOfNeed().map(area => {
                const areaStrategies = filteredStrategies.filter(s => s.areaOfNeed === area);
                if (areaStrategies.length === 0) return null;
                const info = areaInfo[area];
                return (
                  <section key={area} id={area.toLowerCase().replace(/\s+/g, '-')}>
                    <div className={`${info.bgColor} ${info.borderColor} border rounded-xl p-5 mb-6`}>
                      <h2 className={`text-xl font-bold ${info.color} mb-1`}>{area}</h2>
                      <p className="text-slate-600 text-sm">{info.description}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {areaStrategies.map((strategy) => (
                        <StrategyCard key={strategy.id} strategy={strategy} />
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          ) : (
            // Flat view (when filters/search active or explicitly selected)
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStrategies.map((strategy) => (
                <StrategyCard key={strategy.id} strategy={strategy} />
              ))}
            </div>
          )
        ) : (
          <div className="text-center py-12">
            <img
              src="/illustrations/empty-search.svg"
              alt="No results found"
              className="w-48 h-36 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">No strategies found</h3>
            <p className="text-slate-600 mb-4">Try adjusting your search or filters</p>
            <button
              onClick={handleClearAll}
              className="text-emerald-600 hover:text-emerald-700 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Search Help */}
        <div className="mt-16 bg-emerald-50 rounded-lg p-8 border border-emerald-100">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Not sure which strategy you need?</h2>
          <p className="text-slate-600 mb-6">
            Try searching for common learning needs or challenges. For example:
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              'multi-step instructions',
              'adult support',
              'visual supports',
              'task completion',
              'transitions',
              'confidence',
            ].map((phrase) => (
              <button
                key={phrase}
                onClick={() => setSearchValue(phrase)}
                className="px-4 py-2 bg-white text-slate-700 rounded-lg hover:bg-emerald-100 transition-colors text-sm border border-slate-200"
              >
                {phrase}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
