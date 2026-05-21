'use client';

import { useSession } from 'next-auth/react';
import { FiUser, FiPhone, FiMail, FiMapPin, FiCalendar } from 'react-icons/fi';

export default function StudentProfilePage() {
  const { data: session } = useSession();

  const profileData = {
    name: session?.user?.name || 'Student Name',
    email: session?.user?.email || 'student@dpsinternational.com',
    rollNumber: 'A001',
    class: '10-A',
    section: 'A',
    dateOfBirth: '2008-05-15',
    gender: 'Male',
    phoneNumber: '9876543210',
    address: '123, Main Street, Chennai',
    fatherName: 'Mr. Sharma',
    motherName: 'Mrs. Sharma',
    guardianPhone: '9876543210',
    admissionDate: '2022-06-15',
    enrollmentStatus: 'Active',
  };

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">My Profile</h1>
        <p className="text-slate-600 mt-2">View your personal and academic information</p>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        {/* Header Background */}
        <div className="h-32 bg-gradient-to-r from-blue-600 to-blue-700"></div>

        {/* Profile Content */}
        <div className="px-6 py-6">
          {/* Profile Picture & Basic Info */}
          <div className="flex items-start gap-6 mb-8 -mt-16 relative z-10">
            <div className="w-24 h-24 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white text-3xl">
              {profileData.name.charAt(0)}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                {profileData.name}
              </h2>
              <p className="text-slate-600 mt-1">Roll No: {profileData.rollNumber}</p>
              <div className="mt-3 flex gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                  {profileData.enrollmentStatus}
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                  {profileData.class}-{profileData.section}
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
                <div className="flex items-start gap-3">
                  <FiCalendar className="w-5 h-5 text-slate-400 mt-1" />
                  <div>
                    <p className="text-xs text-slate-600 font-semibold">
                      DATE OF BIRTH
                    </p>
                    <p className="text-slate-900 font-medium">
                      {new Date(profileData.dateOfBirth).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FiUser className="w-5 h-5 text-slate-400 mt-1" />
                  <div>
                    <p className="text-xs text-slate-600 font-semibold">GENDER</p>
                    <p className="text-slate-900 font-medium">
                      {profileData.gender}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:col-span-2">
                  <FiMapPin className="w-5 h-5 text-slate-400 mt-1" />
                  <div>
                    <p className="text-xs text-slate-600 font-semibold">ADDRESS</p>
                    <p className="text-slate-900 font-medium">
                      {profileData.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="font-bold text-slate-900 mb-4 text-lg">
                Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <FiMail className="w-5 h-5 text-slate-400 mt-1" />
                  <div>
                    <p className="text-xs text-slate-600 font-semibold">EMAIL</p>
                    <p className="text-slate-900 font-medium">
                      {profileData.email}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FiPhone className="w-5 h-5 text-slate-400 mt-1" />
                  <div>
                    <p className="text-xs text-slate-600 font-semibold">
                      PHONE NUMBER
                    </p>
                    <p className="text-slate-900 font-medium">
                      {profileData.phoneNumber}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Parent/Guardian Information */}
            <div>
              <h3 className="font-bold text-slate-900 mb-4 text-lg">
                Parent/Guardian Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-lg">
                <div>
                  <p className="text-xs text-slate-600 font-semibold">
                    FATHER'S NAME
                  </p>
                  <p className="text-slate-900 font-medium">
                    {profileData.fatherName}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-600 font-semibold">
                    MOTHER'S NAME
                  </p>
                  <p className="text-slate-900 font-medium">
                    {profileData.motherName}
                  </p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-xs text-slate-600 font-semibold">
                    GUARDIAN PHONE
                  </p>
                  <p className="text-slate-900 font-medium">
                    {profileData.guardianPhone}
                  </p>
                </div>
              </div>
            </div>

            {/* Academic Information */}
            <div>
              <h3 className="font-bold text-slate-900 mb-4 text-lg">
                Academic Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-50 p-6 rounded-lg">
                <div>
                  <p className="text-xs text-slate-600 font-semibold">ADMISSION DATE</p>
                  <p className="text-slate-900 font-medium">
                    {new Date(profileData.admissionDate).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-600 font-semibold">CURRENT CLASS</p>
                  <p className="text-slate-900 font-medium">
                    {profileData.class}-{profileData.section}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-600 font-semibold">ROLL NUMBER</p>
                  <p className="text-slate-900 font-medium">
                    {profileData.rollNumber}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}