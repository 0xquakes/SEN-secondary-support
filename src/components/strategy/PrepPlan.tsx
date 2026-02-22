import { PrepPlanStep } from '@/types';

interface PrepPlanProps {
  steps: PrepPlanStep[];
}

export function PrepPlan({ steps }: PrepPlanProps) {
  const totalTime = steps.reduce((acc, step) => {
    const match = step.time.match(/(\d+)/);
    return acc + (match ? parseInt(match[1]) : 0);
  }, 0);

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-slate-900">
          10-Minute Prep Plan
        </h3>
        <span className="text-sm text-slate-500">
          ~{totalTime} mins total
        </span>
      </div>

      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-shrink-0 w-16 text-right">
              <span className="text-sm font-medium text-emerald-600">{step.time}</span>
            </div>
            <div className="flex-1 pb-4 border-b border-slate-200 last:border-0 last:pb-0">
              <p className="font-medium text-slate-900 mb-1">{step.action}</p>
              {step.details && (
                <p className="text-sm text-slate-600">{step.details}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
