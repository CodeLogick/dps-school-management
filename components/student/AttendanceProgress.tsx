'use client';

interface AttendanceProgressProps {
  percentage: number;
}

export default function AttendanceProgress({
  percentage,
}: AttendanceProgressProps) {
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (percentage / 100) * circumference;

  const getColor = (percentage: number) => {
    if (percentage >= 85) return '#10b981'; // green
    if (percentage >= 75) return '#3b82f6'; // blue
    if (percentage >= 60) return '#f59e0b'; // amber
    return '#ef4444'; // red
  };

  return (
    <div className="flex flex-col items-center">
      <svg width="120" height="120" className="transform -rotate-90">
        {/* Background Circle */}
        <circle
          cx="60"
          cy="60"
          r="45"
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="8"
        />
        {/* Progress Circle */}
        <circle
          cx="60"
          cy="60"
          r="45"
          fill="none"
          stroke={getColor(percentage)}
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-500"
        />
      </svg>
      <div className="text-center mt-2">
        <p className="text-2xl font-bold text-slate-900">{percentage}%</p>
        <p className="text-xs text-slate-600 mt-1">Present</p>
      </div>
    </div>
  );
}