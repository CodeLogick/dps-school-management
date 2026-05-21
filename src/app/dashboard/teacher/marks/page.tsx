'use client';

import { useState } from 'react';
import { FiPlus, FiSave, FiTrash2 } from 'react-icons/fi';

interface MarkRecord {
  studentId: number;
  name: string;
  rollNumber: string;
  marks: number | '';
  examType: string;
}

const MOCK_STUDENTS = [
  { studentId: 1, name: 'Arjun Sharma', rollNumber: 'A001' },
  { studentId: 2, name: 'Priya Verma', rollNumber: 'A002' },
  { studentId: 3, name: 'Rajesh Kumar', rollNumber: 'A003' },
];

export default function MarksPage() {
  const [selectedClass, setSelectedClass] = useState('10-A');
  const [selectedSubject, setSelectedSubject] = useState('Mathematics');
  const [selectedExam, setSelectedExam] = useState('Midterm');
  const [marks, setMarks] = useState<MarkRecord[]>(
    MOCK_STUDENTS.map((s) => ({
      ...s,
      marks: '',
      examType: selectedExam,
    }))
  );

  const updateMarks = (studentId: number, value: string) => {
    setMarks((prev) =>
      prev.map((m) =>
        m.studentId === studentId ? { ...m, marks: value ? parseInt(value) : '' } : m
      )
    );
  };

  const handleSave = () => {
    console.log('Marks saved:', { selectedClass, selectedSubject, selectedExam, marks });
    alert('Marks submitted successfully!');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Enter Marks</h1>
        <p className="text-slate-600 mt-1">Record exam and assignment scores</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
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
            Exam Type
          </label>
          <select
            value={selectedExam}
            onChange={(e) => setSelectedExam(e.target.value)}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option>Midterm</option>
            <option>Final</option>
            <option>Assignment</option>
            <option>Quiz</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Total Marks
          </label>
          <input
            type="number"
            defaultValue="100"
            disabled
            className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-slate-100 text-slate-600"
          />
        </div>
      </div>

      {/* Marks Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                Roll No.
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                Student Name
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                Marks Obtained
              </th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">
                Percentage
              </th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">
                Grade
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {marks.map((record) => {
              const percentage =
                record.marks !== '' ? (record.marks as number) : 0;
              const grade =
                percentage >= 90 ? 'A+'
                : percentage >= 80 ? 'A'
                : percentage >= 70 ? 'B'
                : percentage >= 60 ? 'C'
                : 'F';

              return (
                <tr key={record.studentId} className="hover:bg-slate-50 transition">
                  <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                    {record.rollNumber}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700">
                    {record.name}
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={record.marks}
                      onChange={(e) =>
                        updateMarks(record.studentId, e.target.value)
                      }
                      className="w-20 px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      placeholder="0-100"
                    />
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-slate-700">
                    {record.marks !== '' ? `${record.marks}%` : '-'}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                        grade === 'A+' || grade === 'A'
                          ? 'bg-green-100 text-green-700'
                          : grade === 'B'
                          ? 'bg-blue-100 text-blue-700'
                          : grade === 'C'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {grade}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
      >
        <FiSave className="w-5 h-5" />
        Submit Marks
      </button>
    </div>
  );
}