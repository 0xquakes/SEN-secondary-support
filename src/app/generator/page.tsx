'use client';

import { useState, useRef, useCallback, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

interface UploadedFile {
  name: string;
  type: string;
  base64: string;
}

// All UK secondary school subjects
const subjects = [
  { value: 'english', label: 'English' },
  { value: 'maths', label: 'Maths' },
  { value: 'science', label: 'Science' },
  { value: 'biology', label: 'Biology' },
  { value: 'chemistry', label: 'Chemistry' },
  { value: 'physics', label: 'Physics' },
  { value: 'history', label: 'History' },
  { value: 'geography', label: 'Geography' },
  { value: 'french', label: 'French' },
  { value: 'spanish', label: 'Spanish' },
  { value: 'german', label: 'German' },
  { value: 'art', label: 'Art & Design' },
  { value: 'dt', label: 'Design & Technology' },
  { value: 'food', label: 'Food Technology' },
  { value: 'music', label: 'Music' },
  { value: 'drama', label: 'Drama' },
  { value: 're', label: 'Religious Education' },
  { value: 'pe', label: 'PE' },
  { value: 'computing', label: 'Computer Science' },
  { value: 'pshe', label: 'PSHE / Citizenship' },
  { value: 'business', label: 'Business Studies' },
  { value: 'economics', label: 'Economics' },
  { value: 'media', label: 'Media Studies' },
];

const keyStages = [
  { value: 'ks3', label: 'KS3 (Years 7-9)' },
  { value: 'ks4', label: 'KS4 (Years 10-11)' },
];

const workingLevels = [
  { value: 'early-years', label: 'Early Years / Pre-KS1' },
  { value: 'ks1', label: 'KS1 (Years 1-2)' },
  { value: 'lower-ks2', label: 'Lower KS2 (Years 3-4)' },
  { value: 'upper-ks2', label: 'Upper KS2 (Years 5-6)' },
];

const taskTypes = [
  { value: 'worksheet', label: 'Worksheet / Written Task' },
  { value: 'practical', label: 'Practical Activity' },
  { value: 'reading', label: 'Reading Task' },
  { value: 'discussion', label: 'Discussion / Speaking' },
  { value: 'assessment', label: 'Assessment / Test' },
  { value: 'group-work', label: 'Group Work' },
  { value: 'independent', label: 'Independent Work' },
  { value: 'homework', label: 'Homework' },
];

interface GeneratedResource {
  overview: string;
  strategies: Array<{
    name: string;
    description: string;
    steps: string[];
  }>;
  differentiation: {
    taskModifications: string[];
    scaffolding: string[];
    resources: string[];
  };
  teacherScript: {
    starting: string[];
    during: string[];
    ifStuck: string[];
  };
  taGuidance: {
    role: string;
    keyPhrases: string[];
    avoid: string[];
  };
  visualSupports: string[];
  successCriteria: string[];
}

function GeneratorContent() {
  const [subject, setSubject] = useState('english');
  const [keyStage, setKeyStage] = useState('ks3');
  const [topic, setTopic] = useState('');
  const [taskType, setTaskType] = useState('worksheet');
  const [workingLevel, setWorkingLevel] = useState('ks1');
  const [barriers, setBarriers] = useState('');
  const [additionalContext, setAdditionalContext] = useState('');

  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<GeneratedResource | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const outputRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams();

  // Pre-fill form from URL query parameters (e.g., from subject bundle page)
  useEffect(() => {
    const subjectParam = searchParams.get('subject');
    const strategyParam = searchParams.get('strategy');

    if (subjectParam) {
      // Map subject param to select value
      const subjectMapping: Record<string, string> = {
        'english': 'english',
        'maths': 'maths',
        'science': 'science',
        'history': 'history',
        'geography': 'geography',
        'art': 'art',
        'music': 'music',
        'pe': 'pe',
        'mfl': 'french',
        'dt': 'dt',
        'drama': 'drama',
        're': 're',
        'computing': 'computing',
        'pshe': 'pshe',
      };
      const mappedSubject = subjectMapping[subjectParam.toLowerCase()];
      if (mappedSubject) {
        setSubject(mappedSubject);
      }
    }

    if (strategyParam) {
      // Pre-fill barriers with strategy context
      setBarriers(`I want to use the "${strategyParam}" strategy. Please generate specific differentiation for this approach.`);
    }
  }, [searchParams]);

  const handleFileUpload = useCallback(async (file: File) => {
    const maxSize = 10 * 1024 * 1024; // 10MB limit
    if (file.size > maxSize) {
      setError('File too large. Maximum size is 10MB.');
      return;
    }

    const allowedTypes = [
      'image/jpeg',
      'image/png',
      'image/gif',
      'image/webp',
      'application/pdf',
    ];

    if (!allowedTypes.includes(file.type)) {
      setError('Unsupported file type. Please upload an image (JPG, PNG, GIF, WebP) or PDF.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = (reader.result as string).split(',')[1];
      setUploadedFile({
        name: file.name,
        type: file.type,
        base64,
      });
      setError(null);
    };
    reader.onerror = () => {
      setError('Failed to read file');
    };
    reader.readAsDataURL(file);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileUpload(file);
    }
  }, [handleFileUpload]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleFileInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  }, [handleFileUpload]);

  const removeFile = useCallback(() => {
    setUploadedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, []);

  const handleGenerate = async () => {
    if (!topic.trim()) {
      setError('Please enter a topic');
      return;
    }

    setIsGenerating(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject: subjects.find(s => s.value === subject)?.label || subject,
          keyStage: keyStages.find(k => k.value === keyStage)?.label || keyStage,
          topic,
          taskType: taskTypes.find(t => t.value === taskType)?.label || taskType,
          workingLevel: workingLevels.find(w => w.value === workingLevel)?.label || workingLevel,
          barriers,
          additionalContext,
          file: uploadedFile ? {
            name: uploadedFile.name,
            type: uploadedFile.type,
            base64: uploadedFile.base64,
          } : undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error || 'Failed to generate resources');
      }

      setResult(data);

      setTimeout(() => {
        outputRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } catch (err) {
      console.error('Generator error:', err);
      if (err instanceof Error) {
        setError(err.message);
      } else if (typeof err === 'object' && err !== null) {
        setError(JSON.stringify(err));
      } else {
        setError('Something went wrong. Please try again.');
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="py-8 md:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 print:hidden">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link href="/" className="text-slate-500 hover:text-slate-900">Home</Link>
            </li>
            <li className="text-slate-300">/</li>
            <li className="text-slate-900">AI Generator</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-8 print:mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 print:text-black mb-4">
              AI Differentiation Generator
            </h1>
            <p className="text-lg text-slate-600 print:text-gray-600">
              Generate personalised differentiation strategies, scripts, and resources for any lesson.
              Powered by AI to go beyond the standard strategies and adapt to your specific context.
            </p>
          </div>
          <img
            src="/illustrations/generator.svg"
            alt="Generate resources"
            className="w-48 h-40 flex-shrink-0 hidden md:block print:hidden"
          />
        </header>

        {/* Input Form */}
        <div className="bg-white rounded-lg p-6 mb-8 print:hidden shadow-sm border border-slate-200">
          <h2 className="text-xl font-semibold text-slate-900 mb-6">Describe Your Lesson</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                Subject
              </label>
              <select
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                {subjects.map((s) => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
            </div>

            {/* Key Stage */}
            <div>
              <label htmlFor="keystage" className="block text-sm font-medium text-slate-700 mb-2">
                Key Stage
              </label>
              <select
                id="keystage"
                value={keyStage}
                onChange={(e) => setKeyStage(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                {keyStages.map((k) => (
                  <option key={k.value} value={k.value}>{k.label}</option>
                ))}
              </select>
            </div>

            {/* Topic */}
            <div className="md:col-span-2">
              <label htmlFor="topic" className="block text-sm font-medium text-slate-700 mb-2">
                Topic / Lesson Focus *
              </label>
              <input
                id="topic"
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g., Writing a persuasive letter, Solving quadratic equations, The water cycle..."
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>

            {/* Task Type */}
            <div>
              <label htmlFor="tasktype" className="block text-sm font-medium text-slate-700 mb-2">
                Task Type
              </label>
              <select
                id="tasktype"
                value={taskType}
                onChange={(e) => setTaskType(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                {taskTypes.map((t) => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
            </div>

            {/* Working Level */}
            <div>
              <label htmlFor="workinglevel" className="block text-sm font-medium text-slate-700 mb-2">
                Pupil Working Level
              </label>
              <select
                id="workinglevel"
                value={workingLevel}
                onChange={(e) => setWorkingLevel(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                {workingLevels.map((w) => (
                  <option key={w.value} value={w.value}>{w.label}</option>
                ))}
              </select>
              <p className="mt-1 text-xs text-slate-500">
                The developmental level at which the pupil is currently working
              </p>
            </div>

            {/* Barriers */}
            <div className="md:col-span-2">
              <label htmlFor="barriers" className="block text-sm font-medium text-slate-700 mb-2">
                Known Barriers / Learning Needs (optional)
              </label>
              <textarea
                id="barriers"
                value={barriers}
                onChange={(e) => setBarriers(e.target.value)}
                placeholder="e.g., difficulties with working memory, struggles with multi-step instructions, needs visual supports, becomes anxious during transitions..."
                rows={2}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Additional Context */}
            <div className="md:col-span-2">
              <label htmlFor="context" className="block text-sm font-medium text-slate-700 mb-2">
                Additional Context (optional)
              </label>
              <textarea
                id="context"
                value={additionalContext}
                onChange={(e) => setAdditionalContext(e.target.value)}
                placeholder="e.g., pupil responds well to visual rewards, has a TA support 3 hours/week, prefers working in pairs..."
                rows={2}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
              />
            </div>

            {/* File Upload */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Upload Worksheet or Lesson Plan (optional)
              </label>
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onClick={() => fileInputRef.current?.click()}
                className={`relative border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                  isDragging
                    ? 'border-emerald-500 bg-emerald-50'
                    : uploadedFile
                    ? 'border-emerald-600 bg-emerald-50'
                    : 'border-slate-300 hover:border-slate-400 hover:bg-slate-50'
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/png,image/gif,image/webp,application/pdf"
                  onChange={handleFileInputChange}
                  className="hidden"
                />

                {uploadedFile ? (
                  <div className="flex items-center justify-center gap-3">
                    <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="text-left">
                      <p className="text-slate-900 font-medium">{uploadedFile.name}</p>
                      <p className="text-slate-500 text-sm">
                        {uploadedFile.type === 'application/pdf' ? 'PDF Document' : 'Image'}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFile();
                      }}
                      className="ml-4 p-1 text-slate-400 hover:text-red-500 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <>
                    <svg className="w-10 h-10 mx-auto text-slate-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="text-slate-600 mb-1">
                      <span className="text-emerald-600 font-medium">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-slate-500 text-sm">
                      PDF, JPG, PNG, GIF or WebP (max 10MB)
                    </p>
                  </>
                )}
              </div>
              <p className="mt-2 text-xs text-slate-500">
                Upload your worksheet, lesson plan, or resource and the AI will analyse it to generate specific differentiation strategies
              </p>
            </div>
          </div>

          {error && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {error}
            </div>
          )}

          <div className="mt-6">
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors flex items-center gap-2 shadow-sm"
            >
              {isGenerating ? (
                <>
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Generating...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Generate Differentiation Resources
                </>
              )}
            </button>
          </div>
        </div>

        {/* Results */}
        {result && (
          <div ref={outputRef} className="space-y-6">
            {/* Actions bar */}
            <div className="flex items-center justify-between print:hidden">
              <h2 className="text-2xl font-bold text-slate-900">Generated Resources</h2>
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors border border-slate-200"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                Print
              </button>
            </div>

            {/* Context summary */}
            <div className="bg-emerald-900/30 border border-emerald-800 rounded-lg p-4 print:bg-green-50 print:border-green-200">
              <p className="text-emerald-300 print:text-green-800">
                <strong>Subject:</strong> {subjects.find(s => s.value === subject)?.label} |
                <strong> Topic:</strong> {topic} |
                <strong> Task:</strong> {taskTypes.find(t => t.value === taskType)?.label} |
                <strong> Working level:</strong> {workingLevels.find(w => w.value === workingLevel)?.label}
              </p>
            </div>

            {/* Overview */}
            <section className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 print:bg-white print:border print:border-gray-300">
              <h3 className="text-lg font-semibold text-slate-900 print:text-black mb-4">Overview</h3>
              <p className="text-slate-600 print:text-gray-700">{result.overview}</p>
            </section>

            {/* Strategies */}
            <section className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 print:bg-white print:border print:border-gray-300">
              <h3 className="text-lg font-semibold text-slate-900 print:text-black mb-4">Recommended Strategies</h3>
              <div className="space-y-4">
                {result.strategies.map((strategy, i) => (
                  <div key={i} className="bg-slate-50 print:bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-emerald-600 print:text-green-700 mb-2">{strategy.name}</h4>
                    <p className="text-slate-500 print:text-gray-600 text-sm mb-3">{strategy.description}</p>
                    <ol className="space-y-1">
                      {strategy.steps.map((step, j) => (
                        <li key={j} className="text-slate-700 print:text-gray-700 text-sm flex items-start gap-2">
                          <span className="text-emerald-600 print:text-green-600 font-bold">{j + 1}.</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            </section>

            {/* Differentiation */}
            <section className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 print:bg-white print:border print:border-gray-300">
              <h3 className="text-lg font-semibold text-slate-900 print:text-black mb-4">Differentiation</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-slate-500 print:text-gray-500 mb-2">Task Modifications</h4>
                  <ul className="space-y-1">
                    {result.differentiation.taskModifications.map((mod, i) => (
                      <li key={i} className="text-slate-700 print:text-gray-700 text-sm flex items-start gap-2">
                        <span className="text-blue-600 print:text-blue-600">•</span>
                        {mod}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-500 print:text-gray-500 mb-2">Scaffolding</h4>
                  <ul className="space-y-1">
                    {result.differentiation.scaffolding.map((scaffold, i) => (
                      <li key={i} className="text-slate-700 print:text-gray-700 text-sm flex items-start gap-2">
                        <span className="text-purple-600 print:text-purple-600">•</span>
                        {scaffold}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-500 print:text-gray-500 mb-2">Resources Needed</h4>
                  <ul className="space-y-1">
                    {result.differentiation.resources.map((resource, i) => (
                      <li key={i} className="text-slate-700 print:text-gray-700 text-sm flex items-start gap-2">
                        <span className="text-orange-600 print:text-orange-600">•</span>
                        {resource}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Scripts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Teacher Script */}
              <section className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 print:bg-green-50 print:border-green-200">
                <h3 className="text-lg font-semibold text-emerald-700 print:text-green-700 mb-4">Teacher Script</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-slate-500 print:text-gray-500 uppercase mb-2">Starting</p>
                    {result.teacherScript.starting.map((line, i) => (
                      <p key={i} className="text-slate-700 print:text-gray-700 italic text-sm mb-1">{line}</p>
                    ))}
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 print:text-gray-500 uppercase mb-2">During the task</p>
                    {result.teacherScript.during.map((line, i) => (
                      <p key={i} className="text-slate-700 print:text-gray-700 italic text-sm mb-1">{line}</p>
                    ))}
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 print:text-gray-500 uppercase mb-2">If stuck</p>
                    {result.teacherScript.ifStuck.map((line, i) => (
                      <p key={i} className="text-slate-700 print:text-gray-700 italic text-sm mb-1">{line}</p>
                    ))}
                  </div>
                </div>
              </section>

              {/* TA Guidance */}
              <section className="bg-amber-50 border border-amber-200 rounded-lg p-6 print:bg-amber-50 print:border-amber-200">
                <h3 className="text-lg font-semibold text-amber-700 print:text-amber-700 mb-4">TA Guidance</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-slate-500 print:text-gray-500 uppercase mb-2">Your role</p>
                    <p className="text-slate-700 print:text-gray-700 text-sm">{result.taGuidance.role}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 print:text-gray-500 uppercase mb-2">Key phrases</p>
                    {result.taGuidance.keyPhrases.map((phrase, i) => (
                      <p key={i} className="text-slate-700 print:text-gray-700 italic text-sm mb-1">{phrase}</p>
                    ))}
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 print:text-gray-500 uppercase mb-2">Avoid</p>
                    {result.taGuidance.avoid.map((item, i) => (
                      <p key={i} className="text-slate-700 print:text-gray-700 text-sm mb-1 flex items-start gap-1">
                        <span className="text-red-500 print:text-red-600">✗</span> {item}
                      </p>
                    ))}
                  </div>
                </div>
              </section>
            </div>

            {/* Visual Supports */}
            <section className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 print:bg-white print:border print:border-gray-300">
              <h3 className="text-lg font-semibold text-slate-900 print:text-black mb-4">Visual Supports to Prepare</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {result.visualSupports.map((support, i) => (
                  <li key={i} className="text-slate-700 print:text-gray-700 text-sm flex items-start gap-2">
                    <span className="text-blue-600 print:text-blue-600">→</span>
                    {support}
                  </li>
                ))}
              </ul>
            </section>

            {/* Success Criteria */}
            <section className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 print:bg-white print:border print:border-gray-300">
              <h3 className="text-lg font-semibold text-slate-900 print:text-black mb-4">Success Criteria</h3>
              <ul className="space-y-2">
                {result.successCriteria.map((criteria, i) => (
                  <li key={i} className="text-slate-700 print:text-gray-700 flex items-start gap-3">
                    <div className="w-5 h-5 rounded border-2 border-slate-300 print:border-gray-400 flex-shrink-0 mt-0.5" />
                    {criteria}
                  </li>
                ))}
              </ul>
            </section>

            {/* Disclaimer */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm text-slate-600 print:bg-gray-100 print:border-gray-300 print:text-gray-600">
              <strong>AI-Generated Content:</strong> These resources were generated by AI based on your inputs.
              Please review and adapt them for your specific classroom context. Always use your professional
              judgement when implementing differentiation strategies.
            </div>
          </div>
        )}

        {/* Back link */}
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

export default function GeneratorPage() {
  return (
    <Suspense fallback={
      <div className="py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-slate-200 rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-slate-200 rounded w-2/3 mb-8"></div>
            <div className="space-y-4">
              <div className="h-12 bg-slate-200 rounded"></div>
              <div className="h-12 bg-slate-200 rounded"></div>
              <div className="h-32 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    }>
      <GeneratorContent />
    </Suspense>
  );
}
