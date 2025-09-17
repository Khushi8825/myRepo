export default function EmployerHistory() {
  const history = [
    { id: 1, action: "Scanned Certificate - ID12345", date: "2025-09-10" },
    { id: 2, action: "Uploaded Bulk Certificates", date: "2025-09-11" },
    { id: 3, action: "Verified Certificate - ID98765", date: "2025-09-12" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 mt-20">
      <div className="glass-effect p-8 rounded-3xl shadow-xl mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Employer Activity History</h2>
        <p className="text-gray-600">Track your verification activities</p>
      </div>

      <div className="glass-effect p-8 rounded-3xl shadow-xl">
        <div className="space-y-4">
          {history.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-4 bg-white rounded-xl border border-gray-100"
            >
              <span className="text-gray-800">{item.action}</span>
              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{item.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}