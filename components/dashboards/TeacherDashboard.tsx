'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import StatCard from '@/components/StatCard';
import {
  FiBook,
  FiUsers,
  FiClipboard,
  FiBarChart2,
} from 'react-icons/fi';

export default function TeacherDashboard() {
  const { data: session } = useSession();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Welcome, {session?.user?.name}
        </h1>
        <p className="text-slate-600 mt-2">
          Manage your classes, attendance, and grades
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          icon={FiBook}
          label="Classes Assigned"
          value={4}
          color="blue"
        />
        <StatCard
          icon={FiUsers}
          label="Total Students"
          value={128}
          color="green"
        />
        <StatCard
          icon={FiClipboard}
          label="Pending Marks"
          value={12}
          color="orange"
        />
        <StatCard
          icon={FiBarChart2}
          label="Avg. Attendance"
          value="87%"
          color="purple"
        />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Link
          href="/dashboard/teacher/attendance"
          className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white hover:shadow-lg transition group"
        >
          <FiClipboard className="w-8 h-8 mb-4 group-hover:scale-110 transition" />
          <h3 className="text-xl font-bold mb-2">Mark Attendance</h3>
          <p className="text-blue-100 text-sm">Record today's attendance for your classes</p>
        </Link>

        <Link
          href="/dashboard/teacher/marks"
          className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white hover:shadow-lg transition group"
        >
          <FiBarChart2 className="w-8 h-8 mb-4 group-hover:scale-110 transition" />
          <h3 className="text-xl font-bold mb-2">Enter Marks</h3>
          <p className="text-green-100 text-sm">Input exam and assignment scores</p>
        </Link>
      </div>

      {/* Assigned Classes Preview */}
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="font-bold text-slate-900 mb-4 text-lg">Assigned Classes</h3>
        <div className="space-y-3">
          {['10-A (Mathematics)', '10-B (Mathematics)', '11-A (Science)', '12-A (Advanced Math)'].map((cls, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition cursor-pointer"
            >
              <span className="font-medium text-slate-900">{cls}</span>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                30 students
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}