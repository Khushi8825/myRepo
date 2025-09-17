export default function ResultCard({ status = "valid", certId, holderName, issueDate, hash }) {
  return (
    <div className={`p-6 rounded-3xl shadow-lg border-2 ${status === "valid" ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-gray-800 text-lg">Certificate Verification</h3>
        <span className={`px-4 py-2 rounded-full font-semibold ${status === "valid" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"}`}>
          {status === "valid" ? "✅ Valid" : "❌ Invalid"}
        </span>
      </div>

      <div className="text-gray-700 space-y-3">
        <div><strong>ID:</strong> {certId || "—"}</div>
        <div><strong>Holder:</strong> {holderName || "—"}</div>
        <div><strong>Issued:</strong> {issueDate || "—"}</div>
        <div className="truncate"><strong>Hash:</strong> {hash || "—"}</div>
      </div>
    </div>
  );
}