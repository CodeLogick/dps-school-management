'use client';

import { useState } from 'react';
import { FiPlus, FiEdit2, FiTrash2, FiSearch, FiEye } from 'react-icons/fi';

interface Teacher {
  id: number;
  employeeId: string;
  name: string;
  email: string;
  department: string;
  qualifications: string[];
  classesAssigned: string[];
  monthlyPayroll: number;
  joinDate: string;
  status: string;
}

const MOCK_TEACHERS: Teacher[] = [
  {
    id: 1,
    employeeId: 'EMP001',
    name: 'Mr. Rajesh Desai',
    email: 'rajesh.desai@dpsinternational.com',
    department: 'Mathematics',
    qualifications: ['B.Tech', 'M.Ed'],
    classesAssigned: ['10-A', '10-B', '11-A'],
    monthlyPayroll: 45000,
    joinDate: '2018-06-01',
    status: 'active',
  },
  {
    id: 2,
    employeeId: 'EMP002',
    name: 'Ms. Priya Sharma',
    email: 'priya.sharma@dpsinternational.com',
    department: 'English',
    qualifications: ['B.A', 'M.A'],
    classesAssigned: ['9-A', '10-B', '12-A'],
    monthlyPayroll: 42000,
    joinDate: '2019-07-15',
    status: 'active',
  },
];

export default function TeacherManagementPage() {
  const [teachers, setTeachers] = useState<Teacher[]>(MOCK_TEACHERS);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);

  const filteredTeachers = teachers.filter(
    (t) =>
      t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.employeeId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Teacher Management
          </h1>
          <p className="text-slate-600 mt-1">
            Manage teacher records, qualifications, and assignments
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          <FiPlus className="w-5 h-5" />
          Add Teacher
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <FiSearch className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search by name or employee ID..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Teachers Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredTeachers.map((teacher) => (
          <div
            key={teacher.id}
            className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {teacher.name}
                </h3>
                <p className="text-sm text-slate-600">
                  {teacher.employeeId}
                </p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  teacher.status === 'active'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {teacher.status}
              </span>
            </div>

            {/* Department & Email */}
            <div className="space-y-2 mb-4 pb-4 border-b border-slate-200">
              <p className="text-sm">
                <span className="font-semibold text-slate-700">Department: </span>
                <span className="text-slate-600">{teacher.department}</span>
              </p>
              <p className="text-sm">
                <span className="font-semibold text-slate-700">Email: </span>
                <span className="text-slate-600">{teacher.email}</span>
              </p>
            </div>

            {/* Qualifications */}
            <div className="mb-4">
              <p className="text-xs font-semibold text-slate-700 mb-2">
                QUALIFICATIONS
              </p>
              <div className="flex gap-2 flex-wrap">
                {teacher.qualifications.map((qual, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded"
                  >
                    {qual}
                  </span>
                ))}
              </div>
            </div>

            {/* Classes Assigned */}
            <div className="mb-4">
              <p className="text-xs font-semibold text-slate-700 mb-2">
                CLASSES ASSIGNED ({teacher.classesAssigned.length})
              </p>
              <div className="flex gap-2 flex-wrap">
                {teacher.classesAssigned.map((cls, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded"
                  >
                    {cls}
                  </span>
                ))}
              </div>
            </div>

            {/* Payroll Info */}
            <div className="mb-4 pb-4 border-b border-slate-200">
              <p className="text-sm">
                <span className="font-semibold text-slate-700">
                  Monthly Payroll:{' '}
                </span>
                <span className="text-slate-600">
                  ₹{teacher.monthlyPayroll.toLocaleString()}
                </span>
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition text-sm font-medium">
                <FiEye className="w-4 h-4" />
                View
              </button>
              <button className="flex items-center justify-center px-3 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition">
                <FiEdit2 className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-center px-3 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition">
                <FiTrash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredTeachers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-600 text-lg">No teachers found</p>
        </div>
      )}
    </div>
  );
}