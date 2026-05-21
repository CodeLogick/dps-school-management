'use client';

import { FiDownload, FiEye } from 'react-icons/fi';

interface Subject {
  name: string;
  examType: string;
  marksObtained: number;
  totalMarks: number;
  grade: string;
}

const MOCK_MARKS: Subject[] = [
  {
    name: 'Mathematics',
    examType: 'Midterm',
    marksObtained: 92,
    totalMarks: 100,
    grade: 'A+',
  },
  {
    name: 'English',
    examType: 'Midterm',
    marksObtained: 85,
    totalMarks: 100,
    grade: 'A',
  },
  {
    name: 'Science',
    examType: 'Midterm',
    marksObtained: 88,
    totalMarks: 100,
    grade: 'A',
  },
  {
    name: 'History',
    examType: 'Midterm',
    marksObtained: 80,
    totalMarks: 100,
    grade: 'B+',
  },
  {
    name: 'Geography',
    examType: 'Midterm',
    marksObtained: 78,
    totalMarks: 100,
    grade: 'B',
  },
  {
    name: 'Computer Science',
    examType: 'Midterm',
    marksObtained: 95,
    totalMarks: 100,
    grade: 'A+',
  },
];

export default function ReportCard() {
  const getGradeColor = (grade: string) => {
    if (grade === 'A+' || grade === 'A')
      return 'bg-green-100 text-green-700';
    if (grade === 'B+' || grade === 'B')
      return 'bg-blue-100 text-blue-700';
    if (grade === 'C+' || grade === 'C')
      return 'bg-yellow-100 text-yellow-700';
    return 'bg-red-100 text-red-700';
  };

  const totalObtained = MOCK_MARKS.reduce((sum, m) => sum + m.marksObtained, 0);
  const totalMarks = MOCK_MARKS.reduce((sum, m) => sum + m.totalMarks, 0);
  const percentage = ((totalObtained / totalMarks) * 100).toFixed(2);

  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-200 p-6 flex items-center justify-between">
        <div>
          <h3 className="font-bold text-slate-900 text-lg">
            Midterm Report Card
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Midterm Examination - 2024
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition">
          <FiDownload className="w-4 h-4" />
          Download
        </button>
      </div>

      {/* Marks Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-100 border-b border-slate-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                Subject
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-slate-900">
                Marks Obtained
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-slate-900">
                Total Marks
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-slate-900">
                Percentage
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-slate-900">
                Grade
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {MOCK_MARKS.map((subject, idx) => {
              const percentage = (
                (subject.marksObtained / subject.totalMarks) *
                100
              ).toFixed(0);
              return (
                <tr key={idx} className="hover:bg-slate-50 transition">
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">
                    {subject.name}
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-slate-700">
                    {subject.marksObtained}
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-slate-700">
                    {subject.totalMarks}
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-slate-700">
                    {percentage}%
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getGradeColor(
                        subject.grade
                      )}`}
                    >
                      {subject.grade}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Summary Footer */}
      <div className="bg-slate-50 border-t border-slate-200 p-6">
        <div className="grid grid-cols-3 gap-6">
          <div>
            <p className="text-xs text-slate-600 font-semibold mb-1">
              TOTAL MARKS
            </p>
            <p className="text-2xl font-bold text-slate-900">
              {totalObtained}/{totalMarks}
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-600 font-semibold mb-1">
              PERCENTAGE
            </p>
            <p className="text-2xl font-bold text-blue-600">{percentage}%</p>
          </div>
          <div>
            <p className="text-xs text-slate-600 font-semibold mb-1">
              OVERALL GRADE
            </p>
            <p className="text-2xl font-bold text-green-600">A</p>
          </div>
        </div>
      </div>
    </div>
  );
}