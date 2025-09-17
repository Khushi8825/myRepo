import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import api from "../../api";

export default function SignupForm() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student", // default
  });
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/api/auth/signup", form);
      console.log("Signup Done");
      const { token, user } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      login(user.email, form.password);

      if (user.role === "student") navigate("/dashboard/student");
      else if (user.role === "employer") navigate("/dashboard/employer");
      else if (user.role === "university") navigate("/dashboard/university");
    } catch (err) {
      console.error("Signup Error:", err); // <-- logs full error object
      console.error("Response Data:", err.response?.data); // <-- logs backend response
      console.error("Status:", err.response?.status);
      setError(err.response?.data?.message || "Signup failed!");
    }
  };

  return (
    <div className="w-full max-w-md bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">Sign Up</h2>
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      <form onSubmit={submit} className="space-y-4">
        <input
          name="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Full Name"
          className="w-full p-3 border rounded"
          required
        />
        <input
          name="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email"
          className="w-full p-3 border rounded"
          required
        />
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          placeholder="Password"
          className="w-full p-3 border rounded"
          required
          autoComplete="new-password"
        />

        {/* userType dropdown */}
        <select
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
          className="w-full p-3 border rounded"
        >
          <option value="student">Student</option>
          <option value="employer">Employer</option>
          <option value="university">University</option>
        </select>

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-lg hover:scale-105 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
