import React from "react";

export default function StudentProfile() {
  const student = {
    name: "Test Student",
    email: "student@test.com",
    userType: "Student",
    dob: "2000-01-01",
    address: "New Delhi, India",
    contact: "9876543210",
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-20">
      <div className="glass-effect p-8 rounded-3xl shadow-xl mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">My Profile</h2>
        <p className="text-gray-600">Manage your personal information</p>
      </div>

      <div className="glass-effect p-8 rounded-3xl shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <p className="p-3 bg-white rounded-xl border border-gray-200">{student.name}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <p className="p-3 bg-white rounded-xl border border-gray-200">{student.email}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">User Type</label>
            <p className="p-3 bg-white rounded-xl border border-gray-200">{student.userType}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
            <p className="p-3 bg-white rounded-xl border border-gray-200">{student.dob}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Contact</label>
            <p className="p-3 bg-white rounded-xl border border-gray-200">{student.contact}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
            <p className="p-3 bg-white rounded-xl border border-gray-200">{student.address}</p>
          </div>
        </div>
        
        <button className="mt-8 btn-primary text-white px-6 py-3 rounded-xl font-medium">
          Edit Profile
        </button>
      </div>
    </div>
  );
}