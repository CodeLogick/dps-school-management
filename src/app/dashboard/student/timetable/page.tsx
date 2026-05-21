'use client';

import { useState } from 'react';
import { FiCalendar, FiClock, FiUser } from 'react-icons/fi';

interface TimetableEntry {
  period: number;
  startTime: string;
  endTime: string;
  subject: string;
  teacher: string;
  room: string;
}

const TIMETABLE: Record<string, TimetableEntry[]> = {
  Monday: [
    {
      period: 1,
      startTime: '08:00',
      endTime: '09:00',
      subject: 'Mathematics',
      teacher: 'Mr. Desai',
      room: 'A101',
    },
    {
      period: 2,
      startTime: '09:00',
      endTime: '10:00',
      subject: 'English',
      teacher: 'Ms. Sharma',
      room: 'A102',
    },
    {
      period: 3,
      startTime: '10:15',
      endTime: '11:15',
      subject: 'Science',
      teacher: 'Dr. Patel',
      room: 'Lab 1',
    },
    {
      period: 4,
      startTime: '11:15',
      endTime: '12:15',
      subject: 'History',
      teacher: 'Mr. Singh',
      room: 'A103',
    },
  ],
  Tuesday: [
    {
      period: 1,
      startTime: '08:00',
      endTime: '09:00',
      subject: 'Computer Science',
      teacher: 'Ms. Gupta',
      room: 'CompLab',
    },
    {
      period: 2,
      startTime: '09:00',
      endTime: '10:00',
      subject: 'Mathematics',
      teacher: 'Mr. Desai',
      room: 'A101',
    },
    {
      period: 3,
      startTime: '10:15',
      endTime: '11:15',
      subject: 'Geography',
      teacher: 'Mr. Kumar',
      room: 'A104',
    },
    {
      period: 4,
      startTime: '11:15',
      endTime: '12:15',
      subject: 'English',
      teacher: 'Ms. Sharma',
      room: 'A102',
    },
  ],
  Wednesday: [
    {
      period: 1,
      startTime: '08:00',
      endTime: '09:00',
      subject: 'Science',
      teacher: 'Dr. Patel',
      room: 'Lab 1',
    },
    {
      period: 2,
      startTime: '09:00',
      endTime: '10:00',
      subject: 'History',
      teacher: 'Mr. Singh',
      room: 'A103',
    },
    {
      period: 3,
      startTime: '10:15',
      endTime: '11:15',
      subject: 'Mathematics',
      teacher: 'Mr. Desai',
      room: 'A101',
    },
    {
      period: 4,
      startTime: '11:15',
      endTime: '12:15',
      subject: 'Computer Science',
      teacher: 'Ms. Gupta',
      room: 'CompLab',
    },
  ],
  Thursday: [
    {
      period: 1,
      startTime: '08:00',
      endTime: '09:00',
      subject: 'English',
      teacher: 'Ms. Sharma',
      room: 'A102',
    },
    {
      period: 2,
      startTime: '09:00',
      endTime: '10:00',
      subject: 'Geography',
      teacher: 'Mr. Kumar',
      room: 'A104',
    },
    {
      period: 3,
      startTime: '10:15',
      endTime: '11:15',
      subject: 'Science',
      teacher: 'Dr. Patel',
      room: 'Lab 1',
    },
    {
      period: 4,
      startTime: '11:15',
      endTime: '12:15',
      subject: 'Mathematics',
      teacher: 'Mr. Desai',
      room: 'A101',
    },
  ],
  Friday: [
    {
      period: 1,
      startTime: '08:00',
      endTime: '09:00',
      subject: 'Computer Science',
      teacher: 'Ms. Gupta',
      room: 'CompLab',
    },
    {
      period: 2,
      startTime: '09:00',
      endTime: '10:00',
      subject: 'Science',
      teacher: 'Dr. Patel',
      room: 'Lab 1',
    },
    {
      period: 3,
      startTime: '10:15',
      endTime: '11:15',
      subject: 'Mathematics',
      teacher: 'Mr. Desai',
      room: 'A101',
    },
    {
      period: 4,
      startTime: '11:15',
      endTime: '12:15',
      subject: 'English',
      teacher: 'Ms. Sharma',
      room: 'A102',
    },
  ],
};

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export default function StudentTimetablePage() {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const todayClasses = TIMETABLE[selectedDay];

  const getSubjectColor = (subject: string) => {
    const colors: Record<string, string> = {
      Mathematics: 'bg-blue-50 border-l-4 border-blue-500',
      English: 'bg-green-50 border-l-4 border-green-500',
      Science: 'bg-purple-50 border-l-4 border-purple-500',
      History: 'bg-amber-50 border-l-4 border-amber-500',
      Geography: 'bg-teal-50 border-l-4 border-teal-500',
      'Computer Science': 'bg-red-50 border-l-4 border-red-500',
    };
    return colors[subject] || 'bg-slate-50 border-l-4 border-slate-500';
  };

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">My Timetable</h1>
        <p className="text-slate-600 mt-2">Your weekly class schedule</p>
      </div>

      {/* Day Selection */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {DAYS.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-4 py-2 rounded-lg font-semibold transition whitespace-nowrap ${
              selectedDay === day
                ? 'bg-blue-600 text-white'
                : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50'
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Timetable for Selected Day */}
      <div className="space-y-3">
        {todayClasses.map((entry, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-lg ${getSubjectColor(entry.subject)}`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 text-lg">
                  {entry.subject}
                </h3>
                <div className="mt-2 space-y-1">
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <FiClock className="w-4 h-4" />
                    <span>
                      {entry.startTime} - {entry.endTime}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <FiUser className="w-4 h-4" />
                    <span>{entry.teacher}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <FiCalendar className="w-4 h-4" />
                    <span>Room {entry.room}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="inline-block px-3 py-1 bg-white rounded-full text-xs font-bold text-slate-700">
                  Period {entry.period}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}