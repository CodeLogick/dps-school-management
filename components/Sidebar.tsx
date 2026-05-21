'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FiHome,
  FiUsers,
  FiBook,
  FiBarChart2,
  FiSettings,
  FiCalendar,
  FiClipboard,
  FiUser,
} from 'react-icons/fi';

const MENU_ITEMS = {
  admin: [
    { icon: FiHome, label: 'Dashboard', href: '/dashboard' },
    { icon: FiUsers, label: 'Students', href: '/dashboard/admin/students' },
    { icon: FiUsers, label: 'Teachers', href: '/dashboard/admin/teachers' },
    { icon: FiBook, label: 'Classes', href: '/dashboard/admin/classes' },
    { icon: FiSettings, label: 'Settings', href: '/dashboard/admin/settings' },
  ],
  teacher: [
    { icon: FiHome, label: 'Dashboard', href: '/dashboard' },
    { icon: FiBook, label: 'Classes', href: '/dashboard/teacher/classes' },
    { icon: FiClipboard, label: 'Attendance', href: '/dashboard/teacher/attendance' },
    { icon: FiBarChart2, label: 'Marks', href: '/dashboard/teacher/marks' },
    { icon: FiCalendar, label: 'Timetable', href: '/dashboard/teacher/timetable' },
    { icon: FiUser, label: 'Profile', href: '/dashboard/teacher/profile' },
  ],
  student: [
    { icon: FiHome, label: 'Dashboard', href: '/dashboard' },
    { icon: FiUser, label: 'Profile', href: '/dashboard/student/profile' },
    { icon: FiBarChart2, label: 'Grades', href: '/dashboard/student/grades' },
    { icon: FiClipboard, label: 'Attendance', href: '/dashboard/student/attendance' },
    { icon: FiCalendar, label: 'Timetable', href: '/dashboard/student/timetable' },
  ],
};

interface SidebarProps {
  role: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ role, isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const menuItems = MENU_ITEMS[role as keyof typeof MENU_ITEMS] || [];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
          onClick={onClose}
        />
      )}

      <aside
        className={`w-64 bg-slate-900 text-white overflow-y-auto transition-all duration-300 z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-6 border-b border-slate-700">
          <Link href="/dashboard" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-lg font-bold">📚</span>
            </div>
            <div>
              <h1 className="font-bold text-sm">DPS International</h1>
              <p className="text-xs text-slate-400">School Management</p>
            </div>
          </Link>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-700 bg-slate-950 text-xs text-slate-400">
          <p className="font-semibold mb-2">DPS International</p>
          <p>📍 Kilpauk, Chennai</p>
          <p>📞 9884177607</p>
          <p className="truncate">✉️ sanjay.nishad@dpsinternational.com</p>
        </div>
      </aside>
    </>
  );
}