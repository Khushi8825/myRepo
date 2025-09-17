export default function UniversityHistory() { 
  const history = [
    { id: 1, action: "Uploaded 500 Certificates", date: "2025-09-08" },
    { id: 2, action: "Validated Certificate Batch 2023", date: "2025-09-10" },
    { id: 3, action: "Uploaded 300 Certificates", date: "2025-09-12" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 mt-20">
      <div className="glass-effect p-8 rounded-3xl shadow-xl mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">University Activity History</h2>
        <p className="text-gray-600">Track your certificate management activities</p>
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