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
      const res = await api.post("/api/auth/login", form);
      console.log("Login DONE"); // 🔑 backend API
      const { token, user } = res.data;

      // save token in localStorage
      localStorage.setItem("token", token);

      // update context
      // login({ ...user, token });
      // store token in localStorage
      // localStorage.setItem("certisure_token", token);

      // manually update AuthContext user
      setToken(token);
      setUser(user);  // you need to import `setUser` from AuthContext


      // redirect according to userType
      if (user.role === "student") navigate("/student/dashboard/");
      else if (user.role === "employer") navigate("/dashboard/employer");
      else if (user.role === "university") navigate("/dashboard/university");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed!");
    }
  };

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
