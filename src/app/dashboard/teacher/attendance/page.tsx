'use client';

import { useState } from 'react';
import { FiCheck, FiX, FiClock, FiSave, FiCalendar } from 'react-icons/fi';

interface AttendanceRecord {
  studentId: number;
  name: string;
  rollNumber: string;
  status: 'present' | 'absent' | 'late' | null;
}

const MOCK_STUDENTS = [
  { studentId: 1, name: 'Arjun Sharma', rollNumber: 'A001' },
  { studentId: 2, name: 'Priya Verma', rollNumber: 'A002' },
  { studentId: 3, name: 'Rajesh Kumar', rollNumber: 'A003' },
  { studentId: 4, name: 'Divya Singh', rollNumber: 'A004' },
  { studentId: 5, name: 'Amit Patel', rollNumber: 'A005' },
];

export default function AttendancePage() {
  const [selectedClass, setSelectedClass] = useState('10-A');
  const [selectedSubject, setSelectedSubject] = useState('Mathematics');
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split('T')[0]
  );
  const [attendance, setAttendance] = useState<AttendanceRecord[]>(
    MOCK_STUDENTS.map((s) => ({ ...s, status: null }))
  );

  const updateAttendance = (
    studentId: number,
    status: 'present' | 'absent' | 'late'
  ) => {
    setAttendance((prev) =>
      prev.map((rec) =>
        rec.studentId === studentId
          ? {
              ...rec,
              status: rec.status === status ? null : status,
            }
          : rec
      )
    );
  };

  const handleSave = () => {
    console.log('Attendance saved:', { selectedClass, selectedSubject, selectedDate, attendance });
    alert('Attendance marked successfully!');
  };

  const presentCount = attendance.filter((r) => r.status === 'present').length;
  const absentCount = attendance.filter((r) => r.status === 'absent').length;
  const lateCount = attendance.filter((r) => r.status === 'late').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Mark Attendance</h1>
        <p className="text-slate-600 mt-1">Quick and interactive attendance marking</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Class
          </label>
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option>10-A</option>
            <option>10-B</option>
            <option>11-A</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Subject
          </label>
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option>Mathematics</option>
            <option>Science</option>
            <option>English</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Date
          </label>
          <div className="flex items-center gap-2">
            <FiCalendar className="text-slate-400" />
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
          <p className="text-sm text-green-700 font-semibold">Present</p>
          <p className="text-2xl font-bold text-green-600">{presentCount}</p>
        </div>
        <div className="bg-red-50 rounded-lg p-4 border border-red-200">
          <p className="text-sm text-red-700 font-semibold">Absent</p>
          <p className="text-2xl font-bold text-red-600">{absentCount}</p>
        </div>
        <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
          <p className="text-sm text-orange-700 font-semibold">Late</p>
          <p className="text-2xl font-bold text-orange-600">{lateCount}</p>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                Roll No.
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                Name
              </th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">
                Present
              </th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">
                Absent
              </th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">
                Late
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {attendance.map((record) => (
              <tr key={record.studentId} className="hover:bg-slate-50 transition">
                <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                  {record.rollNumber}
                </td>
                <td className="px-6 py-4 text-sm text-slate-700">{record.name}</td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => updateAttendance(record.studentId, 'present')}
                    className={`p-2 rounded-lg transition ${
                      record.status === 'present'
                        ? 'bg-green-600 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-green-50'
                    }`}
                  >
                    <FiCheck className="w-5 h-5" />
                  </button>
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => updateAttendance(record.studentId, 'absent')}
                    className={`p-2 rounded-lg transition ${
                      record.status === 'absent'
                        ? 'bg-red-600 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-red-50'
                    }`}
                  >
                    <FiX className="w-5 h-5" />
                  </button>
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => updateAttendance(record.studentId, 'late')}
                    className={`p-2 rounded-lg transition ${
                      record.status === 'late'
                        ? 'bg-orange-600 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-orange-50'
                    }`}
                  >
                    <FiClock className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
      >
        <FiSave className="w-5 h-5" />
        Save Attendance
      </button>
    </div>
  );
}