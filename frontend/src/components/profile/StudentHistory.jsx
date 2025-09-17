import React from "react";

export default function StudentHistory() {
  const certificates = [
    { id: "C-001", name: "B.Tech Degree", status: "Verified", date: "2025-09-10" },
    { id: "C-002", name: "Internship Certificate", status: "Pending", date: "2025-09-12" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 mt-20">
      <div className="glass-effect p-8 rounded-3xl shadow-xl mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Certificate History</h2>
        <p className="text-gray-600">View your certificate verification status</p>
      </div>

      <div className="glass-effect p-8 rounded-3xl shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="pb-4 text-left text-gray-700">Certificate</th>
                <th className="pb-4 text-left text-gray-700">ID</th>
                <th className="pb-4 text-left text-gray-700">Date</th>
                <th className="pb-4 text-left text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {certificates.map((cert) => (
                <tr key={cert.id} className="border-b border-gray-100">
                  <td className="py-4 text-gray-800">{cert.name}</td>
                  <td className="py-4 text-gray-600">{cert.id}</td>
                  <td className="py-4 text-gray-600">{cert.date}</td>
                  <td className="py-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      cert.status === "Verified" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {cert.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}