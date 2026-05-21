'use client';

import { useSession } from 'next-auth/react';
import AdminDashboard from '@/components/dashboards/AdminDashboard';
import TeacherDashboard from '@/components/dashboards/TeacherDashboard';
import StudentDashboard from '@/components/dashboards/StudentDashboard';

export default function Dashboard() {
  const { data: session } = useSession();
  const role = session?.user?.role as string;

  return (
    <div>
      {role === 'admin' && <AdminDashboard />}
      {role === 'teacher' && <TeacherDashboard />}
      {role === 'student' && <StudentDashboard />}
    </div>
  );
}