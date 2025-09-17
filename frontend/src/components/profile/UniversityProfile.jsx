import { useState } from "react";

export default function UniversityProfile() {
  const [profile, setProfile] = useState({
    name: "XYZ University",
    email: "admin@xyzuniv.edu",
    userType: "University",
    contact: "+91 9876543210",
    address: "Delhi, India",
    accreditation: "NAAC A++",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-20">
      <div className="glass-effect p-8 rounded-3xl shadow-xl mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">University Profile</h2>
        <p className="text-gray-600">Manage your institution information</p>
      </div>

      <div className="glass-effect p-8 rounded-3xl shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">University Name</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Contact</label>
            <input
              type="text"
              name="contact"
              value={profile.contact}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Accreditation</label>
            <input
              type="text"
              name="accreditation"
              value={profile.accreditation}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
          <textarea
            name="address"
            value={profile.address}
            onChange={handleChange}
            rows="3"
            className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        
        <button className="btn-primary text-white px-6 py-3 rounded-xl font-medium">
          Save Changes
        </button>
      </div>
    </div>
  );
}