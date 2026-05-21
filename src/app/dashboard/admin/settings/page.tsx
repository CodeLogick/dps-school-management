'use client';

import { useState } from 'react';
import { FiSave, FiPhone, FiMail, FiMapPin, FiEdit2 } from 'react-icons/fi';

export default function SettingsPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [settings, setSettings] = useState({
    schoolName: 'DPS International',
    address: 'Kilpauk, Chennai',
    phone: '9884177607',
    email: 'sanjay.nishad@dpsinternational.com',
    principalName: 'Dr. Rajesh Kumar',
    academicYear: '2024-2025',
    website: 'www.dpsinternational.com',
    registrationNumber: 'DPS/REG/2024/001',
  });

  const [formData, setFormData] = useState(settings);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setSettings(formData);
    setIsEditing(false);
    alert('Settings updated successfully!');
  };

  const handleCancel = () => {
    setFormData(settings);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">School Settings</h1>
          <p className="text-slate-600 mt-2">
            Manage institution information and configuration
          </p>
        </div>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <FiEdit2 className="w-4 h-4" />
            Edit Settings
          </button>
        )}
      </div>

      {/* Main Settings Card */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="bg-slate-50 border-b border-slate-200 p-6">
          <h3 className="font-bold text-slate-900 text-lg">Institution Details</h3>
        </div>

        <div className="p-6 space-y-6">
          {/* School Name */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              School Name
            </label>
            <input
              type="text"
              name="schoolName"
              value={formData.schoolName}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg disabled:bg-slate-100 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Address
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              disabled={!isEditing}
              rows={3}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg disabled:bg-slate-100 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <FiPhone className="absolute left-3 top-3 text-slate-400" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg disabled:bg-slate-100 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <FiMail className="absolute left-3 top-3 text-slate-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg disabled:bg-slate-100 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Principal Name
              </label>
              <input
                type="text"
                name="principalName"
                value={formData.principalName}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg disabled:bg-slate-100 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Academic Year
              </label>
              <input
                type="text"
                name="academicYear"
                value={formData.academicYear}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg disabled:bg-slate-100 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          {/* Website & Registration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Website
              </label>
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg disabled:bg-slate-100 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Registration Number
              </label>
              <input
                type="text"
                name="registrationNumber"
                value={formData.registrationNumber}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg disabled:bg-slate-100 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          {/* Action Buttons */}
          {isEditing && (
            <div className="flex gap-3 pt-6 border-t border-slate-200">
              <button
                onClick={handleSave}
                className="flex items-center gap-2 flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition font-semibold"
              >
                <FiSave className="w-4 h-4" />
                Save Changes
              </button>
              <button
                onClick={handleCancel}
                className="flex-1 px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-900 rounded-lg transition font-semibold"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}