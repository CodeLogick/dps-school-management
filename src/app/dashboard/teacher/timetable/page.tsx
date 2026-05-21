'use client';

import { useState } from 'react';
import { FiCalendar, FiClock, FiUsers } from 'react-icons/fi';

interface TimetableEntry {
  period: number;
  startTime: string;
  endTime: string;
  subject: string;
  class: string;
  room: string;
}

const TIMETABLE: Record<string, TimetableEntry[]> = {
  Monday: [
    {
      period: 1,
      startTime: '08:00',
      endTime: '09:00',
      subject: 'Mathematics',
      class: '10-A',
      room: 'A101',
    },
    {
      period: 2,
      startTime: '09:00',
      endTime: '10:00',
      subject: 'Mathematics',
      class: '10-B',
      room: 'A102',
    },
    {
      period: 3,
      startTime: '10:15',
      endTime: '11:15',
      subject: 'Advanced Mathematics',
      class: '12-A',
      room: 'A103',
    },
    {
      period: 4,
      startTime: '11:15',
      endTime: '12:15',
      subject: 'Mathematics',
      class: '11-A',
      room: 'A101',
    },
  ],
  Tuesday: [
    {
      period: 1,
      startTime: '08:00',
      endTime: '09:00',
      subject: 'Mathematics',
      class: '10-A',
      room: 'A101',
    },
    {
      period: 2,
      startTime: '09:00',
      endTime: '10:00',
      subject: 'Mathematics',
      class: '11-A',
      room: 'A101',
    },
    {
      period: 3,
      startTime: '10:15',
      endTime: '11:15',
      subject: 'Mathematics',
      class: '10-B',
      room: 'A102',
    },
    {
      period: 4,
      startTime: '11:15',
      endTime: '12:15',
      subject: 'Advanced Mathematics',
      class: '12-A',
      room: 'A103',
    },
  ],
  Wednesday: [
    {
      period: 1,
      startTime: '08:00',
      endTime: '09:00',
      subject: 'Mathematics',
      class: '10-B',
      room: 'A102',
    },
    {
      period: 2,
      startTime: '09:00',
      endTime: '10:00',
      subject: 'Advanced Mathematics',
      class: '12-A',
      room: 'A103',
    },
    {
      period: 3,
      startTime: '10:15',
      endTime: '11:15',
      subject: 'Mathematics',
      class: '11-A',
      room: 'A101',
    },
    {
      period: 4,
      startTime: '11:15',
      endTime: '12:15',
      subject: 'Mathematics',
      class: '10-A',
      room: 'A101',
    },
  ],
  Thursday: [
    {
      period: 1,
      startTime: '08:00',
      endTime: '09:00',
      subject: 'Mathematics',
      class: '10-A',
      room: 'A101',
    },
    {
      period: 2,
      startTime: '09:00',
      endTime: '10:00',
      subject: 'Mathematics',
      class: '10-B',
      room: 'A102',
    },
    {
      period: 3,
      startTime: '10:15',
      endTime: '11:15',
      subject: 'Mathematics',
      class: '11-A',
      room: 'A101',
    },
    {
      period: 4,
      startTime: '11:15',
      endTime: '12:15',
      subject: 'Advanced Mathematics',
      class: '12-A',
      room: 'A103',
    },
  ],
  Friday: [
    {
      period: 1,
      startTime: '08:00',
      endTime: '09:00',
      subject: 'Mathematics',
      class: '10-B',
      room: 'A102',
    },
    {
      period: 2,
      startTime: '09:00',
      endTime: '10:00',
      subject: 'Mathematics',
      class: '11-A',
      room: 'A101',
    },
    {
      period: 3,
      startTime: '10:15',
      endTime: '11:15',
      subject: 'Advanced Mathematics',
      class: '12-A',
      room: 'A103',
    },
    {
      period: 4,
      startTime: '11:15',
      endTime: '12:15',
      subject: 'Mathematics',
      class: '10-A',
      room: 'A101',
    },
  ],
};

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export default function TeacherTimetablePage() {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const todayClasses = TIMETABLE[selectedDay];

  const getSubjectColor = (subject: string) => {
    if (subject.includes('Advanced')) {
      return 'bg-red-50 border-l-4 border-red-500';
    }
    return 'bg-blue-50 border-l-4 border-blue-500';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">My Timetable</h1>
        <p className="text-slate-600 mt-2">Your weekly teaching schedule</p>
      </div>

      {/* Day Selection */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {DAYS.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-4 py-2 rounded-lg font-semibold transition whitespace-nowrap ${
              selectedDay === day
                ? 'bg-green-600 text-white'
                : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50'
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-4 border border-slate-200">
          <p className="text-xs text-slate-600 font-semibold">PERIODS</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">
            {todayClasses.length}
          </p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-slate-200">
          <p className="text-xs text-slate-600 font-semibold">CLASSES</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">
            {new Set(todayClasses.map((c) => c.class)).size}
          </p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-slate-200">
          <p className="text-xs text-slate-600 font-semibold">TOTAL HOURS</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">
            {todayClasses.length}h
          </p>
        </div>
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
                    <FiUsers className="w-4 h-4" />
                    <span>Class {entry.class}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <FiClock className="w-4 h-4" />
                    <span>
                      {entry.startTime} - {entry.endTime}
                    </span>
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