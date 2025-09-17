import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import api from "../../api"; // axios instance with interceptor
import { Link } from "react-router-dom";

export default function LoginForm() {
  const { login } = useAuth();
  const { setUser, setToken } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
         // Use the login function from AuthContext instead of manual handling
      const result = await login(form.email, form.password);
      
      if (result.success) {
        console.log("Login successful");
        
        // Redirect based on user role
        const userRole = result.user?.role || form.role;
        
        if (userRole === "student") navigate("/student/dashboard");
        else if (userRole === "employer") navigate("/employer/dashboard");
        else if (userRole === "university") navigate("/university/dashboard");
      } else {
        setError(result.error || "Login failed!");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed!");
    }
  }
  return (
    <div className="w-full max-w-md bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">Login</h2>
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      <form onSubmit={submit} className="space-y-4">
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
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          placeholder="Password"
          type="password"
          className="w-full p-3 border rounded"
          required
          autoComplete="current-password"
        />
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-lg hover:scale-105 transition"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-600">
        New user?{" "}
          <Link className="text-indigo-600 font-medium" to="/signup">
            Create account
          </Link>
      </p>
    </div>
  );
}
