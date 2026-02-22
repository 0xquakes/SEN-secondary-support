'use client';

import { useState } from 'react';

interface FilterBarProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  filters: {
    difficulty: string[];
    subjects: string[];
    routines: string[];
    prepTime: string[];
  };
  selectedFilters: {
    difficulty: string[];
    subjects: string[];
    routines: string[];
    prepTime: string[];
  };
  onFilterChange: (filterType: string, values: string[]) => void;
  onClearAll: () => void;
}

export function FilterBar({
  searchValue,
  onSearchChange,
  filters,
  selectedFilters,
  onFilterChange,
  onClearAll,
}: FilterBarProps) {
  const [showFilters, setShowFilters] = useState(false);

  const hasActiveFilters =
    selectedFilters.difficulty.length > 0 ||
    selectedFilters.subjects.length > 0 ||
    selectedFilters.routines.length > 0 ||
    selectedFilters.prepTime.length > 0;

  const toggleFilter = (filterType: string, value: string) => {
    const current = selectedFilters[filterType as keyof typeof selectedFilters];
    const newValues = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    onFilterChange(filterType, newValues);
  };

  return (
    <div className="bg-white rounded-lg p-4 mb-6 shadow-sm border border-slate-200">
      {/* Search */}
      <div className="flex gap-4 mb-4">
        <div className="flex-1 relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search strategies or learning needs..."
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
            showFilters || hasActiveFilters
              ? 'bg-emerald-600 text-white'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          Filters
          {hasActiveFilters && (
            <span className="bg-white text-emerald-600 text-xs font-bold px-1.5 py-0.5 rounded-full">
              {selectedFilters.difficulty.length + selectedFilters.subjects.length + selectedFilters.routines.length + selectedFilters.prepTime.length}
            </span>
          )}
        </button>
      </div>

      {/* Filter panels */}
      {showFilters && (
        <div className="pt-4 border-t border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Difficulty */}
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">Difficulty</label>
              <div className="flex flex-wrap gap-2">
                {filters.difficulty.map((level) => (
                  <button
                    key={level}
                    onClick={() => toggleFilter('difficulty', level)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedFilters.difficulty.includes(level)
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Subjects */}
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">Subject</label>
              <div className="flex flex-wrap gap-2">
                {filters.subjects.slice(0, 5).map((subject) => (
                  <button
                    key={subject}
                    onClick={() => toggleFilter('subjects', subject)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedFilters.subjects.includes(subject)
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {subject}
                  </button>
                ))}
              </div>
            </div>

            {/* Routines */}
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">Routine</label>
              <div className="flex flex-wrap gap-2">
                {filters.routines.slice(0, 4).map((routine) => (
                  <button
                    key={routine}
                    onClick={() => toggleFilter('routines', routine)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedFilters.routines.includes(routine)
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {routine}
                  </button>
                ))}
              </div>
            </div>

            {/* Prep Time */}
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">Prep Time</label>
              <div className="flex flex-wrap gap-2">
                {filters.prepTime.map((time) => (
                  <button
                    key={time}
                    onClick={() => toggleFilter('prepTime', time)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedFilters.prepTime.includes(time)
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {hasActiveFilters && (
            <div className="mt-4 pt-4 border-t border-slate-200">
              <button
                onClick={onClearAll}
                className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
