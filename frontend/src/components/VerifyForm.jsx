import { useState } from "react";

export default function VerifyForm({ onVerify }) {
  const [hash, setHash] = useState("");

  const handle = (e) => {
    e.preventDefault();
    if (!hash.trim()) return alert("Enter certificate hash or ID");
    console.log("verify:", hash);
    if (onVerify) onVerify(hash);
  };

  return (
    <form onSubmit={handle} className="p-6 glass-effect rounded-3xl">
      <h4 className="font-semibold text-gray-800 text-lg mb-4">Verify by Hash / ID</h4>
      <input 
        value={hash} 
        onChange={(e) => setHash(e.target.value)} 
        placeholder="Enter certificate hash or ID" 
        className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
      />
      <button className="w-full btn-primary text-white py-3 rounded-xl font-semibold">
        Verify Certificate
      </button>
    </form>
  );
}