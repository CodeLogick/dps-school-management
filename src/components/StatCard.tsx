import { IconType } from 'react-icons';

interface StatCardProps {
  icon: IconType;
  label: string;
  value: string | number;
  trend?: string;
  color?: 'blue' | 'green' | 'purple' | 'orange';
}

const colorClasses = {
  blue: 'bg-blue-50 text-blue-600',
  green: 'bg-green-50 text-green-600',
  purple: 'bg-purple-50 text-purple-600',
  orange: 'bg-orange-50 text-orange-600',
};

export default function StatCard({
  icon: Icon,
  label,
  value,
  trend,
  color = 'blue',
}: StatCardProps) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-slate-600 text-sm font-semibold mb-2">{label}</p>
          <p className="text-3xl font-bold text-slate-900">{value}</p>
          {trend && <p className="text-xs text-slate-500 mt-2">{trend}</p>}
        </div>
        <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}