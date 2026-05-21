'use client';

import { useState } from 'react';
import { FiPlus, FiEdit2, FiTrash2, FiUsers } from 'react-icons/fi';

interface Class {
  id: number;
  className: string;
  section: string;
  classTeacher: string;
  strength: number;
  subjects: string[];
}

const MOCK_CLASSES: Class[] = [
  {
    id: 1,
    className: '10',
    section: 'A',
    classTeacher: 'Mr. Rajesh Desai',
    strength: 35,
    subjects: ['Mathematics', 'English', 'Science', 'History', 'Geography'],
  },
  {
    id: 2,
    className: '10',
    section: 'B',
    classTeacher: 'Ms. Priya Sharma',
    strength: 38,
    subjects: ['Mathematics', 'English', 'Science', 'History', 'Computer Science'],
  },
  {
    id: 3,
    className: '11',
    section: 'A',
    classTeacher: 'Dr. Patel',
    strength: 32,
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science'],
  },
];

export default function ClassesManagementPage() {
  const [classes, setClasses] = useState<Class[]>(MOCK_CLASSES);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Classes Management
          </h1>
          <p className="text-slate-600 mt-1">
            Manage classes, sections, and subject assignments
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          <FiPlus className="w-5 h-5" />
          Create Class
        </button>
      </div>

      {/* Classes Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {classes.map((classItem) => (
          <div
            key={classItem.id}
            className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4 pb-4 border-b border-slate-200">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {classItem.className}-{classItem.section}
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  {classItem.classTeacher}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-600 font-semibold mb-1">STRENGTH</p>
                <div className="flex items-center gap-1 text-2xl font-bold text-blue-600">
                  <FiUsers className="w-6 h-6" />
                  {classItem.strength}
                </div>
              </div>
            </div>

            {/* Subjects */}
            <div className="mb-4">
              <p className="text-xs font-semibold text-slate-700 mb-2">
                SUBJECTS ({classItem.subjects.length})
              </p>
              <div className="flex gap-2 flex-wrap">
                {classItem.subjects.map((subject, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 pt-4 border-t border-slate-200">
              <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition text-sm font-medium">
                View Details
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
    </div>
  );
}