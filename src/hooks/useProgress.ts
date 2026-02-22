'use client';

import { useState, useEffect, useCallback } from 'react';
import { ProgressData } from '@/types';

const STORAGE_KEY = 'ehcp-strategies-progress';

const defaultProgress: ProgressData = {
  completedStrategies: [],
  lastVisited: '',
};

export function useProgress() {
  const [progress, setProgress] = useState<ProgressData>(defaultProgress);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setProgress(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to load progress:', e);
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage whenever progress changes
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
      } catch (e) {
        console.error('Failed to save progress:', e);
      }
    }
  }, [progress, isLoaded]);

  const markStrategyComplete = useCallback((strategySlug: string) => {
    setProgress((prev) => ({
      ...prev,
      completedStrategies: prev.completedStrategies.includes(strategySlug)
        ? prev.completedStrategies
        : [...prev.completedStrategies, strategySlug],
    }));
  }, []);

  const setLastVisited = useCallback((strategySlug: string) => {
    setProgress((prev) => ({
      ...prev,
      lastVisited: strategySlug,
    }));
  }, []);

  const isStrategyComplete = useCallback(
    (strategySlug: string) => progress.completedStrategies.includes(strategySlug),
    [progress.completedStrategies]
  );

  const resetProgress = useCallback(() => {
    setProgress(defaultProgress);
  }, []);

  return {
    progress,
    isLoaded,
    markStrategyComplete,
    setLastVisited,
    isStrategyComplete,
    resetProgress,
  };
}
