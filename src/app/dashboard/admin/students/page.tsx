'use client';

import { useEffect, useState } from 'react';
import { FiPlus, FiEdit2, FiTrash2, FiSearch } from 'react-icons/fi';

interface Student {
  id: number;
  rollNumber: string;
  name: string;
  className: string;
  email: string;
  enrollmentStatus: string;
  guardianPhone: string;
}

const MOCK_STUDENTS: Student[] = [
  {
    id: 1,
    rollNumber: 'A001',
    name: 'Arjun Sharma',
    className: '10-A',
    email: 'arjun.sharma@dpsinternational.com',
    enrollmentStatus: 'active',
    guardianPhone: '9876543210',
  },
  {
    id: 2,
    rollNumber: 'A002',
    name: 'Priya Verma',
    className: '10-A',
    email: 'priya.verma@dpsinternational.com',
    enrollmentStatus: 'active',
    guardianPhone: '9876543211',
  },
];

export default function StudentManagementPage() {
  const [students, setStudents] = useState<Student[]>(MOCK_STUDENTS);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);

  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.rollNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Student Management</h1>
          <p className="text-slate-600 mt-1">Manage student enrollment and details</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          <FiPlus className="w-5 h-5" />
          Add Student
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <FiSearch className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search by name or roll number..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                Roll No.
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                Class
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                Status
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-slate-900">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {filteredStudents.map((student) => (
              <tr key={student.id} className="hover:bg-slate-50 transition">
                <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                  {student.rollNumber}
                </td>
                <td className="px-6 py-4 text-sm text-slate-700">{student.name}</td>
                <td className="px-6 py-4 text-sm text-slate-700">{student.className}</td>
                <td className="px-6 py-4 text-sm text-slate-700">{student.email}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      student.enrollmentStatus === 'active'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {student.enrollmentStatus}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <button className="p-1 hover:bg-blue-50 rounded text-blue-600 transition">
                      <FiEdit2 className="w-4 h-4" />
                    </button>
                    <button className="p-1 hover:bg-red-50 rounded text-red-600 transition">
                      <FiTrash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-600">
          Showing {filteredStudents.length} of {students.length} students
        </p>
        <div className="flex gap-2">
          <button className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50">
            Previous
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
          <button className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}