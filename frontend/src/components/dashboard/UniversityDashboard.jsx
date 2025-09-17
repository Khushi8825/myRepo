import UploadForm from "../UploadFrom";

export default function UniversityDashboard() {
  return (
    <div className="max-w-6xl mx-auto p-6 mt-20">
      <div className="glass-effect p-8 rounded-3xl shadow-xl mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">University Dashboard</h1>
        <p className="text-gray-600">Bulk upload and validate certificates</p>
      </div>

      <div className="glass-effect p-8 rounded-3xl shadow-xl">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Bulk Upload & Validate</h3>
        <p className="text-gray-600 mb-6">Upload multiple certificates (ZIP or many files) and run bulk validation.</p>
        <UploadForm mode="bulk" onUpload={(files) => console.log("University bulk upload:", files)} />
      </div>
    </div>
  );
}