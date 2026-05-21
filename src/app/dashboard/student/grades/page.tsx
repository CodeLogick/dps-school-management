'use client';

import { useState } from 'react';
import { FiDownload, FiFilter, FiBarChart2 } from 'react-icons/fi';

interface ExamResults {
  examType: string;
  results: SubjectResult[];
  averagePercentage: number;
  overallGrade: string;
}

interface SubjectResult {
  subject: string;
  marksObtained: number;
  totalMarks: number;
  percentage: number;
  grade: string;
}

const EXAM_RESULTS: ExamResults[] = [
  {
    examType: 'Midterm Examination',
    results: [
      {
        subject: 'Mathematics',
        marksObtained: 92,
        totalMarks: 100,
        percentage: 92,
        grade: 'A+',
      },
      {
        subject: 'English',
        marksObtained: 85,
        totalMarks: 100,
        percentage: 85,
        grade: 'A',
      },
      {
        subject: 'Science',
        marksObtained: 88,
        totalMarks: 100,
        percentage: 88,
        grade: 'A',
      },
      {
        subject: 'History',
        marksObtained: 80,
        totalMarks: 100,
        percentage: 80,
        grade: 'B+',
      },
      {
        subject: 'Geography',
        marksObtained: 78,
        totalMarks: 100,
        percentage: 78,
        grade: 'B',
      },
      {
        subject: 'Computer Science',
        marksObtained: 95,
        totalMarks: 100,
        percentage: 95,
        grade: 'A+',
      },
    ],
    averagePercentage: 86.3,
    overallGrade: 'A',
  },
  {
    examType: 'Unit Test 1',
    results: [
      {
        subject: 'Mathematics',
        marksObtained: 88,
        totalMarks: 100,
        percentage: 88,
        grade: 'A',
      },
      {
        subject: 'English',
        marksObtained: 82,
        totalMarks: 100,
        percentage: 82,
        grade: 'B+',
      },
      {
        subject: 'Science',
        marksObtained: 90,
        totalMarks: 100,
        percentage: 90,
        grade: 'A+',
      },
      {
        subject: 'History',
        marksObtained: 75,
        totalMarks: 100,
        percentage: 75,
        grade: 'B',
      },
      {
        subject: 'Geography',
        marksObtained: 76,
        totalMarks: 100,
        percentage: 76,
        grade: 'B',
      },
      {
        subject: 'Computer Science',
        marksObtained: 92,
        totalMarks: 100,
        percentage: 92,
        grade: 'A+',
      },
    ],
    averagePercentage: 84,
    overallGrade: 'A',
  },
];

const getGradeColor = (grade: string) => {
  if (grade === 'A+' || grade === 'A')
    return 'bg-green-100 text-green-700';
  if (grade === 'B+' || grade === 'B')
    return 'bg-blue-100 text-blue-700';
  if (grade === 'C+' || grade === 'C')
    return 'bg-yellow-100 text-yellow-700';
  return 'bg-red-100 text-red-700';
};

const getPercentageColor = (percentage: number) => {
  if (percentage >= 90) return 'text-green-600';
  if (percentage >= 80) return 'text-blue-600';
  if (percentage >= 70) return 'text-yellow-600';
  return 'text-red-600';
};

export default function StudentGradesPage() {
  const [selectedExam, setSelectedExam] = useState(0);
  const currentExam = EXAM_RESULTS[selectedExam];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">My Grades</h1>
        <p className="text-slate-600 mt-2">
          View your exam results and academic performance
        </p>
      </div>

      {/* Exam Selection Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 flex-wrap">
        {EXAM_RESULTS.map((exam, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedExam(idx)}
            className={`px-4 py-2 rounded-lg font-semibold transition whitespace-nowrap ${
              selectedExam === idx
                ? 'bg-blue-600 text-white'
                : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50'
            }`}
          >
            {exam.examType}
          </button>
        ))}
      </div>

      {/* Overall Performance Card */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl text-white p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-blue-100 text-sm mb-2">AVERAGE</p>
            <p className="text-3xl font-bold">
              {currentExam.averagePercentage.toFixed(1)}%
            </p>
          </div>
          <div>
            <p className="text-blue-100 text-sm mb-2">OVERALL GRADE</p>
            <p className="text-3xl font-bold">{currentExam.overallGrade}</p>
          </div>
          <div>
            <p className="text-blue-100 text-sm mb-2">SUBJECTS</p>
            <p className="text-3xl font-bold">{currentExam.results.length}</p>
          </div>
          <div>
            <p className="text-blue-100 text-sm mb-2">PERFORMANCE</p>
            <p className="text-lg font-bold">
              {currentExam.averagePercentage >= 90
                ? 'Excellent'
                : currentExam.averagePercentage >= 80
                ? 'Very Good'
                : currentExam.averagePercentage >= 70
                ? 'Good'
                : 'Average'}
            </p>
          </div>
        </div>
      </div>

      {/* Results Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="bg-slate-50 border-b border-slate-200 p-6 flex items-center justify-between">
          <h3 className="font-bold text-slate-900 text-lg">
            {currentExam.examType}
          </h3>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition">
            <FiDownload className="w-4 h-4" />
            Download
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-100 border-b border-slate-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                  Subject
                </th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-slate-900">
                  Marks
                </th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-slate-900">
                  Total
                </th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-slate-900">
                  Percentage
                </th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-slate-900">
                  Grade
                </th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-slate-900">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {currentExam.results.map((result, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition">
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">
                    {result.subject}
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-slate-900">
                    {result.marksObtained}
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-slate-900">
                    {result.totalMarks}
                  </td>
                  <td className={`px-6 py-4 text-center text-sm font-bold ${getPercentageColor(result.percentage)}`}>
                    {result.percentage}%
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getGradeColor(
                        result.grade
                      )}`}
                    >
                      {result.grade}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                      Pass
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Summary */}
        <div className="bg-slate-50 border-t border-slate-200 p-6">
          <div className="grid grid-cols-3 gap-6">
            <div>
              <p className="text-xs text-slate-600 font-semibold mb-1">
                HIGHEST MARKS
              </p>
              <p className="text-2xl font-bold text-slate-900">
                {Math.max(...currentExam.results.map((r) => r.marksObtained))}
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-600 font-semibold mb-1">
                LOWEST MARKS
              </p>
              <p className="text-2xl font-bold text-slate-900">
                {Math.min(...currentExam.results.map((r) => r.marksObtained))}
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-600 font-semibold mb-1">
                AVERAGE MARKS
              </p>
              <p className="text-2xl font-bold text-slate-900">
                {(
                  currentExam.results.reduce(
                    (sum, r) => sum + r.marksObtained,
                    0
                  ) / currentExam.results.length
                ).toFixed(1)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Chart Info */}
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
          <FiBarChart2 className="w-5 h-5" />
          Subject Performance
        </h3>
        <div className="space-y-3">
          {currentExam.results.map((result, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-900 mb-1">
                  {result.subject}
                </p>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      result.percentage >= 90
                        ? 'bg-green-600'
                        : result.percentage >= 80
                        ? 'bg-blue-600'
                        : result.percentage >= 70
                        ? 'bg-yellow-600'
                        : 'bg-red-600'
                    }`}
                    style={{ width: `${result.percentage}%` }}
                  ></div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-sm text-slate-900">
                  {result.percentage}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}