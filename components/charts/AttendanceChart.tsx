'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Mon', attendance: 92 },
  { day: 'Tue', attendance: 88 },
  { day: 'Wed', attendance: 95 },
  { day: 'Thu', attendance: 89 },
  { day: 'Fri', attendance: 91 },
  { day: 'Sat', attendance: 85 },
];

export default function AttendanceChart() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="font-bold text-slate-900 mb-4 text-lg">
        Weekly Attendance Overview
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="day" stroke="#64748b" />
          <YAxis stroke="#64748b" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="attendance"
            stroke="#2563eb"
            strokeWidth={2}
            dot={{ fill: '#2563eb', r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}