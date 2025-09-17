import React from "react";

export default function StudentDashboard() {
  return (
    <div className="max-w-6xl mx-auto p-6 mt-20">
      <div className="glass-effect p-8 rounded-3xl shadow-xl mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Student Dashboard</h2>
        <p className="text-gray-600">Manage and verify your certificates</p>
      </div>

      {/* Upload Section */}
      <div className="glass-effect p-8 rounded-3xl shadow-xl">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Upload Your Certificate</h3>
        <div className="flex flex-col items-center p-8 border-2 border-dashed border-gray-300 rounded-2xl mb-6">
          <svg className="w-12 h-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
          </svg>
          <p className="text-gray-600 mb-4">Drag & drop your certificate file here</p>
          <input type="file" className="hidden" id="certificate-upload" />
          <label htmlFor="certificate-upload" className="btn-primary text-white px-6 py-3 rounded-xl cursor-pointer">
            Choose File
          </label>
        </div>
        <button className="btn-primary text-white px-8 py-4 rounded-xl font-semibold w-full">
          Upload Certificate
        </button>
      </div>
    </div>
  );
}