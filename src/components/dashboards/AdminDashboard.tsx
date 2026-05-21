'use client';

import { useEffect, useState } from 'react';
import { db } from '@/lib/db';
import {
  FiUsers,
  FiBook,
  FiUserCheck,
  FiTrendingUp,
  FiBarChart3,
} from 'react-icons/fi';
import StatCard from '@/components/StatCard';
import AttendanceChart from '@/components/charts/AttendanceChart';

interface Metrics {
  totalStudents: number;
  totalTeachers: number;
  totalClasses: number;
  todayAttendance: number;
}

export default function AdminDashboard() {
  const [metrics, setMetrics] = useState<Metrics>({
    totalStudents: 0,
    totalTeachers: 0,
    totalClasses: 0,
    todayAttendance: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        // Mock data - replace with actual DB queries
        setMetrics({
          totalStudents: 1250,
          totalTeachers: 85,
          totalClasses: 35,
          todayAttendance: 89,
        });
      } catch (error) {
        console.error('Failed to fetch metrics:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMetrics();
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">School Overview</h1>
        <p className="text-slate-600 mt-2">
          Welcome to DPS International School Management System
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={FiUsers}
          label="Total Students"
          value={metrics.totalStudents}
          trend="+12% this month"
          color="blue"
        />
        <StatCard
          icon={FiUsers}
          label="Teachers"
          value={metrics.totalTeachers}
          trend="All active"
          color="green"
        />
        <StatCard
          icon={FiBook}
          label="Classes"
          value={metrics.totalClasses}
          trend="All sections"
          color="purple"
        />
        <StatCard
          icon={FiUserCheck}
          label="Today's Attendance"
          value={`${metrics.todayAttendance}%`}
          trend="Good participation"
          color="orange"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <AttendanceChart />
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="font-bold text-slate-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg text-sm font-medium transition">
              Add New Student
            </button>
            <button className="w-full px-4 py-2 bg-green-50 hover:bg-green-100 text-green-600 rounded-lg text-sm font-medium transition">
              Add New Teacher
            </button>
            <button className="w-full px-4 py-2 bg-purple-50 hover:bg-purple-100 text-purple-600 rounded-lg text-sm font-medium transition">
              Create New Class
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}