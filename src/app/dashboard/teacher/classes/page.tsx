'use client';

import { useState } from 'react';
import { FiBook, FiUsers, FiCalendar, FiBarChart2 } from 'react-icons/fi';

interface ClassAssignment {
  id: number;
  classNo: string;
  section: string;
  subject: string;
  strength: number;
  periods: number;
  totalStudents: number;
  presentToday: number;
}

const MOCK_ASSIGNMENTS: ClassAssignment[] = [
  {
    id: 1,
    classNo: '10',
    section: 'A',
    subject: 'Mathematics',
    strength: 35,
    periods: 5,
    totalStudents: 35,
    presentToday: 32,
  },
  {
    id: 2,
    classNo: '10',
    section: 'B',
    subject: 'Mathematics',
    strength: 38,
    periods: 4,
    totalStudents: 38,
    presentToday: 35,
  },
  {
    id: 3,
    classNo: '11',
    section: 'A',
    subject: 'Mathematics',
    strength: 32,
    periods: 5,
    totalStudents: 32,
    presentToday: 30,
  },
  {
    id: 4,
    classNo: '12',
    section: 'A',
    subject: 'Advanced Mathematics',
    strength: 28,
    periods: 5,
    totalStudents: 28,
    presentToday: 27,
  },
];

export default function TeacherClassesPage() {
  const [assignments] = useState<ClassAssignment[]>(MOCK_ASSIGNMENTS);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">My Classes</h1>
        <p className="text-slate-600 mt-2">Assigned classes and subject details</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <p className="text-xs text-blue-700 font-semibold">TOTAL CLASSES</p>
          <p className="text-2xl font-bold text-blue-600">{assignments.length}</p>
        </div>
        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
          <p className="text-xs text-green-700 font-semibold">TOTAL STUDENTS</p>
          <p className="text-2xl font-bold text-green-600">
            {assignments.reduce((sum, a) => sum + a.strength, 0)}
          </p>
        </div>
        <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
          <p className="text-xs text-purple-700 font-semibold">AVG. STRENGTH</p>
          <p className="text-2xl font-bold text-purple-600">
            {Math.round(assignments.reduce((sum, a) => sum + a.strength, 0) / assignments.length)}
          </p>
        </div>
        <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
          <p className="text-xs text-orange-700 font-semibold">TODAY'S AVG</p>
          <p className="text-2xl font-bold text-orange-600">
            {Math.round((assignments.reduce((sum, a) => sum + a.presentToday, 0) / assignments.reduce((sum, a) => sum + a.strength, 0)) * 100)}%
          </p>
        </div>
      </div>

      {/* Classes List */}
      <div className="space-y-4">
        {assignments.map((assignment) => {
          const attendancePercentage = Math.round(
            (assignment.presentToday / assignment.strength) * 100
          );

          return (
            <div
              key={assignment.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Class {assignment.classNo}-{assignment.section}
                  </h3>
                  <p className="text-blue-600 font-semibold mt-1">
                    {assignment.subject}
                  </p>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">
                  {assignment.periods} periods/week
                </span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <FiUsers className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-xs text-slate-600">Strength</p>
                    <p className="font-bold text-slate-900">{assignment.strength}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FiBarChart2 className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="text-xs text-slate-600">Present Today</p>
                    <p className="font-bold text-slate-900">{assignment.presentToday}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FiCalendar className="w-5 h-5 text-orange-600" />
                  <div>
                    <p className="text-xs text-slate-600">Attendance</p>
                    <p className="font-bold text-slate-900">{attendancePercentage}%</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex gap-2">
                <button className="flex-1 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition font-semibold text-sm">
                  Mark Attendance
                </button>
                <button className="flex-1 px-4 py-2 bg-green-50 hover:bg-green-100 text-green-600 rounded-lg transition font-semibold text-sm">
                  Enter Marks
                </button>
                <button className="flex-1 px-4 py-2 bg-purple-50 hover:bg-purple-100 text-purple-600 rounded-lg transition font-semibold text-sm">
                  View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}