'use client';

import { useSession } from 'next-auth/react';
import { FiBook, FiBarChart2, FiCalendar, FiBell } from 'react-icons/fi';
import AttendanceProgress from '@/components/student/AttendanceProgress';
import ReportCard from '@/components/student/ReportCard';

export default function StudentDashboard() {
  const { data: session } = useSession();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Welcome, {session?.user?.name}
        </h1>
        <p className="text-slate-600 mt-2">
          Your academic profile and performance overview
        </p>
      </div>

      {/* Profile Card */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg p-6 text-white">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-blue-100 text-sm mb-1">CLASS & SECTION</p>
            <h2 className="text-2xl font-bold">10-A</h2>
            <p className="text-blue-100 text-sm mt-2">Roll Number: A001</p>
          </div>
          <div className="text-right">
            <p className="text-blue-100 text-sm mb-1">ENROLLMENT</p>
            <p className="text-lg font-semibold">Active</p>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Attendance */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-900">Attendance</h3>
            <FiBook className="w-5 h-5 text-blue-600" />
          </div>
          <AttendanceProgress percentage={88} />
        </div>

        {/* Overall Grade */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-900">Overall Grade</h3>
            <FiBarChart2 className="w-5 h-5 text-green-600" />
          </div>
          <div className="text-4xl font-bold text-green-600 mb-2">A</div>
          <p className="text-sm text-slate-600">Average: 8.5/10</p>
        </div>

        {/* Subjects */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-900">Subjects</h3>
            <FiBook className="w-5 h-5 text-purple-600" />
          </div>
          <div className="text-4xl font-bold text-purple-600 mb-2">6</div>
          <p className="text-sm text-slate-600">Active courses</p>
        </div>
      </div>

      {/* Report Card Preview */}
      <ReportCard />

      {/* Announcements */}
      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex items-center gap-2 mb-4">
          <FiBell className="w-5 h-5 text-orange-600" />
          <h3 className="font-bold text-slate-900 text-lg">Latest Announcements</h3>
        </div>
        <div className="space-y-3">
          {[
            { date: 'Today', text: 'Mid-term exams begin from next week. Study schedule posted.' },
            { date: 'Yesterday', text: 'Sports day event cancelled due to weather.' },
            { date: '2 days ago', text: 'New library books added to science section.' },
          ].map((ann, idx) => (
            <div
              key={idx}
              className="p-4 bg-slate-50 rounded-lg border-l-4 border-orange-500 hover:bg-slate-100 transition"
            >
              <p className="text-xs text-slate-500 font-semibold mb-1">{ann.date}</p>
              <p className="text-sm text-slate-700">{ann.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}