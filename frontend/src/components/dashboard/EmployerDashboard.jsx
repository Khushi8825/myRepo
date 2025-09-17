import { useState } from "react";
import QRScanner from "../QRScanner";
import VerifyForm from "../VerifyForm";
import UploadForm from "../UploadFrom";

export default function EmployerDashboard() {
  const [activeTab, setActiveTab] = useState("scan");

  return (
    <div className="max-w-6xl mx-auto p-6 mt-20">
      <div className="glass-effect p-8 rounded-3xl shadow-xl mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Employer Dashboard</h2>
        <p className="text-gray-600">Verify candidate certificates quickly and securely</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setActiveTab("scan")}
          className={`px-6 py-3 rounded-xl font-medium ${activeTab === "scan" ? "btn-primary text-white" : "bg-white text-gray-700"}`}
        >
          Scan QR
        </button>
        <button
          onClick={() => setActiveTab("verify")}
          className={`px-6 py-3 rounded-xl font-medium ${activeTab === "verify" ? "btn-primary text-white" : "bg-white text-gray-700"}`}
        >
          Verify Hash
        </button>
        <button
          onClick={() => setActiveTab("upload")}
          className={`px-6 py-3 rounded-xl font-medium ${activeTab === "upload" ? "btn-primary text-white" : "bg-white text-gray-700"}`}
        >
          Upload
        </button>
      </div>

      {/* Tab Content */}
      <div className="glass-effect p-8 rounded-3xl shadow-xl">
        {activeTab === "scan" && <QRScanner />}
        {activeTab === "verify" && <VerifyForm />}
        {activeTab === "upload" && <UploadForm mode="both" />}
      </div>
    </div>
  );
}