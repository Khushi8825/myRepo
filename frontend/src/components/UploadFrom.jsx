import { useState } from "react";

export default function UploadForm({ mode = "both", onUpload }) {
  const [singleFile, setSingleFile] = useState(null);
  const [bulkFiles, setBulkFiles] = useState([]);

  const handleSingle = (e) => setSingleFile(e.target.files?.[0] ?? null);
  const handleBulk = (e) => setBulkFiles(Array.from(e.target.files ?? []));

  const submitSingle = (e) => {
    e.preventDefault();
    if (!singleFile) return alert("Select a file");
    console.log("Single upload:", singleFile);
    if (onUpload) onUpload([singleFile]);
  };

  const submitBulk = (e) => {
    e.preventDefault();
    if (bulkFiles.length === 0) return alert("Select files for bulk upload");
    console.log("Bulk upload:", bulkFiles);
    if (onUpload) onUpload(bulkFiles);
  };

  return (
    <div className="space-y-6">
      {(mode === "single" || mode === "both") && (
        <form onSubmit={submitSingle} className="p-6 glass-effect rounded-3xl">
          <h4 className="font-semibold text-gray-800 text-lg mb-4">
            Upload Single Certificate
          </h4>
          <div className="flex flex-col items-center p-6 border-2 border-dashed border-gray-300 rounded-2xl mb-4">
            <svg
              className="w-10 h-10 text-gray-400 mb-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <input
              type="file"
              accept=".pdf,.jpg,.png"
              onChange={handleSingle}
              className="text-sm text-gray-600"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition"
          >
            Upload
          </button>
        </form>
      )}

      {(mode === "bulk" || mode === "both") && (
        <form onSubmit={submitBulk} className="p-6 glass-effect rounded-3xl">
          <h4 className="font-semibold text-gray-800 text-lg mb-4">
            Upload Bulk Certificates
          </h4>
          <div className="flex flex-col items-center p-6 border-2 border-dashed border-gray-300 rounded-2xl mb-4">
            <svg
              className="w-10 h-10 text-gray-400 mb-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            <input
              type="file"
              accept=".pdf,.jpg,.png"
              multiple
              onChange={handleBulk}
              className="text-sm text-gray-600"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition"
          >
            Upload All
          </button>
        </form>
      )}
    </div>
  );
}
