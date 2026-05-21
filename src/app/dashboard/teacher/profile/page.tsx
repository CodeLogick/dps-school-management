'use client';

import { useSession } from 'next-auth/react';
import { FiCalendar, FiDollarSign, FiBook, FiAward } from 'react-icons/fi';

interface PayrollStub {
  month: string;
  salary: number;
  deductions: number;
  net: number;
}

export default function TeacherProfilePage() {
  const { data: session } = useSession();

  const profileData = {
    name: session?.user?.name || 'Teacher Name',
    email: session?.user?.email || 'teacher@dpsinternational.com',
    employeeId: 'EMP001',
    department: 'Mathematics',
    joinDate: '2018-06-01',
    qualifications: ['B.Tech', 'M.Ed', 'B.Tech (IIT Delhi)', 'M.Tech (IIT Bombay)'],
    specializations: ['Advanced Mathematics', 'Applied Calculus', 'Data Science'],
    monthlyPayroll: 45000,
    bankAccount: '****5678',
    ifsc: 'SBIN0001234',
    classes: ['10-A', '10-B', '11-A', '12-A'],
    subjects: ['Mathematics', 'Advanced Mathematics'],
  };

  const payrollHistory: PayrollStub[] = [
    { month: 'January 2024', salary: 45000, deductions: 5000, net: 40000 },
    { month: 'December 2023', salary: 45000, deductions: 5000, net: 40000 },
    { month: 'November 2023', salary: 45000, deductions: 5000, net: 40000 },
  ];

  const attendanceData = [
    { month: 'January', days: 22, present: 22, absent: 0 },
    { month: 'December', days: 20, present: 20, absent: 0 },
    { month: 'November', days: 22, present: 21, absent: 1 },
  ];

  return (
    <div className="space-y-6 max-w-5xl">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">My Profile</h1>
        <p className="text-slate-600 mt-2">
          View your personal, academic, and payroll information
        </p>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        {/* Header Background */}
        <div className="h-32 bg-gradient-to-r from-green-600 to-green-700"></div>

        {/* Profile Content */}
        <div className="px-6 py-6">
          {/* Profile Picture & Basic Info */}
          <div className="flex items-start gap-6 mb-8 -mt-16 relative z-10">
            <div className="w-24 h-24 bg-green-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white text-3xl">
              {profileData.name.charAt(0)}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                {profileData.name}
              </h2>
              <p className="text-slate-600 mt-1">{profileData.department}</p>
              <div className="mt-3 flex gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                  {profileData.employeeId}
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                  Senior Teacher
                </span>
              </div>
            </div>
          </div>

          {/* Information Sections */}
          <div className="space-y-6">
            {/* Personal Information */}
            <div>
              <h3 className="font-bold text-slate-900 mb-4 text-lg">
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-lg">
                <div>
                  <p className="text-xs text-slate-600 font-semibold">EMAIL</p>
                  <p className="text-slate-900 font-medium">{profileData.email}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-600 font-semibold">EMPLOYEE ID</p>
                  <p className="text-slate-900 font-medium">{profileData.employeeId}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-600 font-semibold">DEPARTMENT</p>
                  <p className="text-slate-900 font-medium">{profileData.department}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-600 font-semibold">JOIN DATE</p>
                  <p className="text-slate-900 font-medium">
                    {new Date(profileData.joinDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>

            {/* Qualifications & Specializations */}
            <div>
              <h3 className="font-bold text-slate-900 mb-4 text-lg flex items-center gap-2">
                <FiAward className="w-5 h-5" />
                Qualifications & Specializations
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-lg">
                <div>
                  <p className="text-xs text-slate-600 font-semibold mb-3">
                    QUALIFICATIONS
                  </p>
                  <div className="space-y-2">
                    {profileData.qualifications.map((qual, idx) => (
                      <div
                        key={idx}
                        className="px-3 py-2 bg-white rounded border-l-4 border-green-500"
                      >
                        <p className="text-sm text-slate-900 font-medium">{qual}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs text-slate-600 font-semibold mb-3">
                    SPECIALIZATIONS
                  </p>
                  <div className="space-y-2">
                    {profileData.specializations.map((spec, idx) => (
                      <div
                        key={idx}
                        className="px-3 py-2 bg-white rounded border-l-4 border-blue-500"
                      >
                        <p className="text-sm text-slate-900 font-medium">{spec}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Classes & Subjects */}
            <div>
              <h3 className="font-bold text-slate-900 mb-4 text-lg flex items-center gap-2">
                <FiBook className="w-5 h-5" />
                Classes & Subjects
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-lg">
                <div>
                  <p className="text-xs text-slate-600 font-semibold mb-3">CLASSES</p>
                  <div className="flex gap-2 flex-wrap">
                    {profileData.classes.map((cls, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold"
                      >
                        {cls}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs text-slate-600 font-semibold mb-3">SUBJECTS</p>
                  <div className="flex gap-2 flex-wrap">
                    {profileData.subjects.map((subj, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold"
                      >
                        {subj}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Payroll Information */}
            <div>
              <h3 className="font-bold text-slate-900 mb-4 text-lg flex items-center gap-2">
                <FiDollarSign className="w-5 h-5" />
                Payroll Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-lg">
                <div>
                  <p className="text-xs text-slate-600 font-semibold">MONTHLY SALARY</p>
                  <p className="text-2xl font-bold text-green-600 mt-1">
                    ₹{profileData.monthlyPayroll.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-600 font-semibold">BANK ACCOUNT</p>
                  <div className="mt-3">
                    <p className="text-slate-900 font-medium">{profileData.bankAccount}</p>
                    <p className="text-sm text-slate-600">IFSC: {profileData.ifsc}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payroll History */}
            <div>
              <h3 className="font-bold text-slate-900 mb-4 text-lg">
                Recent Payroll Stubs
              </h3>
              <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                        Month
                      </th>
                      <th className="px-6 py-3 text-right text-sm font-semibold text-slate-900">
                        Salary
                      </th>
                      <th className="px-6 py-3 text-right text-sm font-semibold text-slate-900">
                        Deductions
                      </th>
                      <th className="px-6 py-3 text-right text-sm font-semibold text-slate-900">
                        Net Pay
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {payrollHistory.map((stub, idx) => (
                      <tr key={idx} className="hover:bg-slate-50">
                        <td className="px-6 py-3 text-sm text-slate-900 font-medium">
                          {stub.month}
                        </td>
                        <td className="px-6 py-3 text-right text-sm text-slate-900">
                          ₹{stub.salary.toLocaleString()}
                        </td>
                        <td className="px-6 py-3 text-right text-sm text-slate-900">
                          ₹{stub.deductions.toLocaleString()}
                        </td>
                        <td className="px-6 py-3 text-right text-sm font-bold text-green-600">
                          ₹{stub.net.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Attendance History */}
            <div>
              <h3 className="font-bold text-slate-900 mb-4 text-lg flex items-center gap-2">
                <FiCalendar className="w-5 h-5" />
                Monthly Attendance
              </h3>
              <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                        Month
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-semibold text-slate-900">
                        Total Days
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-semibold text-slate-900">
                        Present
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-semibold text-slate-900">
                        Absent
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-semibold text-slate-900">
                        Percentage
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {attendanceData.map((att, idx) => {
                      const percentage = ((att.present / att.days) * 100).toFixed(1);
                      return (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="px-6 py-3 text-sm text-slate-900 font-medium">
                            {att.month}
                          </td>
                          <td className="px-6 py-3 text-center text-sm text-slate-900">
                            {att.days}
                          </td>
                          <td className="px-6 py-3 text-center">
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                              {att.present}
                            </span>
                          </td>
                          <td className="px-6 py-3 text-center">
                            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                              {att.absent}
                            </span>
                          </td>
                          <td className="px-6 py-3 text-center text-sm font-bold text-blue-600">
                            {percentage}%
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}