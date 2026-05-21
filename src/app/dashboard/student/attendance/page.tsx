'use client';

import { useState } from 'react';
import { FiCalendar, FiCheck, FiX, FiClock } from 'react-icons/fi';

interface AttendanceRecord {
  date: string;
  subject: string;
  status: 'present' | 'absent' | 'late';
  remarks?: string;
}

const MOCK_ATTENDANCE: AttendanceRecord[] = [
  {
    date: '2024-01-15',
    subject: 'Mathematics',
    status: 'present',
  },
  {
    date: '2024-01-14',
    subject: 'English',
    status: 'present',
  },
  {
    date: '2024-01-13',
    subject: 'Science',
    status: 'late',
    remarks: 'Arrived 10 minutes late',
  },
  {
    date: '2024-01-12',
    subject: 'History',
    status: 'present',
  },
  {
    date: '2024-01-11',
    subject: 'Computer Science',
    status: 'absent',
    remarks: 'Sick leave approved',
  },
  {
    date: '2024-01-10',
    subject: 'Mathematics',
    status: 'present',
  },
];

export default function StudentAttendancePage() {
  const [selectedMonth, setSelectedMonth] = useState('January');
  const present = MOCK_ATTENDANCE.filter((r) => r.status === 'present').length;
  const absent = MOCK_ATTENDANCE.filter((r) => r.status === 'absent').length;
  const late = MOCK_ATTENDANCE.filter((r) => r.status === 'late').length;
  const total = MOCK_ATTENDANCE.length;
  const percentage = ((present / total) * 100).toFixed(1);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'present':
        return (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <FiCheck className="w-4 h-4 text-green-600" />
            </div>
            <span className="text-green-600 font-semibold text-sm">Present</span>
          </div>
        );
      case 'absent':
        return (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
              <FiX className="w-4 h-4 text-red-600" />
            </div>
            <span className="text-red-600 font-semibold text-sm">Absent</span>
          </div>
        );
      case 'late':
        return (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
              <FiClock className="w-4 h-4 text-orange-600" />
            </div>
            <span className="text-orange-600 font-semibold text-sm">Late</span>
          </div>
        );
    }
  };

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">My Attendance</h1>
        <p className="text-slate-600 mt-2">
          View your attendance record and analytics
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-xs text-slate-600 font-semibold mb-1">TOTAL DAYS</p>
          <p className="text-2xl font-bold text-slate-900">{total}</p>
        </div>
        <div className="bg-green-50 rounded-lg shadow p-4 border border-green-200">
          <p className="text-xs text-green-700 font-semibold mb-1">PRESENT</p>
          <p className="text-2xl font-bold text-green-600">{present}</p>
        </div>
        <div className="bg-red-50 rounded-lg shadow p-4 border border-red-200">
          <p className="text-xs text-red-700 font-semibold mb-1">ABSENT</p>
          <p className="text-2xl font-bold text-red-600">{absent}</p>
        </div>
        <div className="bg-orange-50 rounded-lg shadow p-4 border border-orange-200">
          <p className="text-xs text-orange-700 font-semibold mb-1">LATE</p>
          <p className="text-2xl font-bold text-orange-600">{late}</p>
        </div>
        <div className="bg-blue-50 rounded-lg shadow p-4 border border-blue-200">
          <p className="text-xs text-blue-700 font-semibold mb-1">PERCENTAGE</p>
          <p className="text-2xl font-bold text-blue-600">{percentage}%</p>
        </div>
      </div>

      {/* Month Filter */}
      <div className="bg-white rounded-lg shadow p-4">
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Select Month
        </label>
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        >
          <option>January</option>
          <option>February</option>
          <option>March</option>
          <option>April</option>
        </select>
      </div>

      {/* Attendance Records */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="p-6 border-b border-slate-200">
          <h3 className="font-bold text-slate-900 text-lg">
            {selectedMonth} Attendance
          </h3>
        </div>
        <div className="divide-y divide-slate-200">
          {MOCK_ATTENDANCE.map((record, idx) => (
            <div
              key={idx}
              className="p-6 hover:bg-slate-50 transition flex items-center justify-between"
            >
              <div className="flex items-start gap-4">
                <div className="text-slate-500">
                  <FiCalendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    {record.subject}
                  </p>
                  <p className="text-sm text-slate-600 mt-1">
                    {new Date(record.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                  {record.remarks && (
                    <p className="text-xs text-slate-500 mt-2 italic">
                      {record.remarks}
                    </p>
                  )}
                </div>
              </div>
              {getStatusIcon(record.status)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}