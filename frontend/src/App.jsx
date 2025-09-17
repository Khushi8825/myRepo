// // import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// // import { useAuth } from "./context/AuthContext";
// // import Navbar from "./components/Navbar";

// // // Public pages
// // import Home from "./pages/Home";
// // import Help from "./pages/Help";
// // import Login from "./pages/Login";
// // import Signup from "./pages/Signup";

// // // Dashboards
// // import StudentDashboard from "./components/dashboard/StudentDashboard";
// // import EmployerDashboard from "./components/dashboard/EmployerDashboard";
// // import UniversityDashboard from "./components/dashboard/UniversityDashboard";

// // // Profiles
// // import StudentProfile from "./components/profile/StudentProfile";
// // import EmployerProfile from "./components/profile/EmployerProfile";
// // import UniversityProfile from "./components/profile/UniversityProfile";

// // // History
// // import StudentHistory from "./components/profile/StudentHistory";
// // import EmployerHistory from "./components/profile/EmployerHistory";
// // import UniversityHistory from "./components/profile/UniversityHistory";

// // // 🔹 Role-based dashboard redirect
// // function DashboardRedirect() {
// //   const { user } = useAuth();

// //   if (!user) return <Navigate to="/login" replace />;
// //   if (user.userType === "student") return <Navigate to="/student/dashboard" replace />;
// //   if (user.userType === "employer") return <Navigate to="/employer/dashboard" replace />;
// //   if (user.userType === "university") return <Navigate to="/university/dashboard" replace />;

// //   return <Navigate to="/login" replace />;
// // }

// // export default function App() {
// //   return (
// //     <Router>
// //       <Navbar />
// //       <div className="pt-20">
// //         <Routes>
// //           {/* Public pages */}
// //           <Route path="/" element={<Home />} />
// //           <Route path="/help" element={<Help />} />
// //           <Route path="/login" element={<Login />} />
// //           <Route path="/signup" element={<Signup />} />

// //           {/* Dashboard auto-redirect */}
// //           <Route path="/dashboard" element={<DashboardRedirect />} />

// //           {/* Student Dashboard */}
// //           <Route path="/student/dashboard" element={<StudentDashboard />} />
// //           <Route path="/student/profile" element={<StudentProfile />} />
// //           <Route path="/student/history" element={<StudentHistory />} />

// //           {/* Employer Dashboard */}
// //           <Route path="/employer/dashboard" element={<EmployerDashboard />} />
// //           <Route path="/employer/profile" element={<EmployerProfile />} />
// //           <Route path="/employer/history" element={<EmployerHistory />} />

// //           {/* University Dashboard */}
// //           <Route path="/university/dashboard" element={<UniversityDashboard />} />
// //           <Route path="/university/profile" element={<UniversityProfile />} />
// //           <Route path="/university/history" element={<UniversityHistory />} />

// //           {/* Catch-all redirect */}
// //           <Route path="*" element={<Navigate to="/" replace />} />
// //         </Routes>
// //       </div>
// //     </Router>
// //   );
// // }
// import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { useAuth } from "./context/AuthContext";
// import Navbar from "./components/Navbar";

// // Public pages
// import Home from "./pages/Home";
// import Help from "./pages/Help";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";

// // Dashboards
// import StudentDashboard from "./components/dashboard/StudentDashboard";
// import EmployerDashboard from "./components/dashboard/EmployerDashboard";
// import UniversityDashboard from "./components/dashboard/UniversityDashboard";

// // Profiles
// import StudentProfile from "./components/profile/StudentProfile";
// import EmployerProfile from "./components/profile/EmployerProfile";
// import UniversityProfile from "./components/profile/UniversityProfile";

// // History
// import StudentHistory from "./components/profile/StudentHistory";
// import EmployerHistory from "./components/profile/EmployerHistory";
// import UniversityHistory from "./components/profile/UniversityHistory";

// // 🔹 Role-based dashboard redirect
// function DashboardRedirect() {
//   const { user } = useAuth();

//   if (!user) return <Navigate to="/login" replace />;
//   if (user.userType === "student") return <Navigate to="/#/student/dashboard" replace />;
//   if (user.userType === "employer") return <Navigate to="/#/employer/dashboard" replace />;
//   if (user.userType === "university") return <Navigate to="/#/university/dashboard" replace />;

//   return <Navigate to="/login" replace />;
// }

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <div className="pt-20">
//         <Routes>
//           {/* Public pages */}
//           <Route path="/" element={<Home />} />
//           <Route path="/help" element={<Help />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />

//           {/* Dashboard auto-redirect */}
//           <Route path="/dashboard" element={<DashboardRedirect />} />

//           {/* Student Routes */}
//           <Route path="/student/dashboard" element={<StudentDashboard />} />
//           <Route path="/student/profile" element={<StudentProfile />} />
//           <Route path="/student/history" element={<StudentHistory />} />

//           {/* Employer Routes */}
//           <Route path="/employer/dashboard" element={<EmployerDashboard />} />
//           <Route path="/employer/profile" element={<EmployerProfile />} />
//           <Route path="/employer/history" element={<EmployerHistory />} />

//           {/* University Routes */}
//           <Route path="/university/dashboard" element={<UniversityDashboard />} />
//           <Route path="/university/profile" element={<UniversityProfile />} />
//           <Route path="/university/history" element={<UniversityHistory />} />

//           {/* Catch-all redirect */}
//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
 import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

// Public pages
import Home from "./pages/Home";
import Help from "./pages/Help";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// Dashboards
import StudentDashboard from "./components/dashboard/StudentDashboard";
import EmployerDashboard from "./components/dashboard/EmployerDashboard";
import UniversityDashboard from "./components/dashboard/UniversityDashboard";

// Profiles
import StudentProfile from "./components/profile/StudentProfile";
import EmployerProfile from "./components/profile/EmployerProfile";
import UniversityProfile from "./components/profile/UniversityProfile";

// History
import StudentHistory from "./components/profile/StudentHistory";
import EmployerHistory from "./components/profile/EmployerHistory";
import UniversityHistory from "./components/profile/UniversityHistory";

// 🔹 Role-based dashboard redirect
function DashboardRedirect() {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" replace />;
  if (user.role === "student") return <Navigate to="/student/dashboard" replace />;
  if (user.role === "employer") return <Navigate to="/employer/dashboard" replace />;
  if (user.role === "university") return <Navigate to="/university/dashboard" replace />;

  return <Navigate to="/login" replace />;
}

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20">
        <Routes>
          {/* Public pages */}
          <Route path="/" element={<Home />} />
          <Route path="/help" element={<Help />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Dashboard auto-redirect */}
          <Route path="/dashboard" element={<DashboardRedirect />} />

          {/* Student Routes */}
          <Route path="/student/dashboard" element={
            <ProtectedRoute requiredRole="student">
              <StudentDashboard />
            </ProtectedRoute>
          } />
          
          <Route path="/student/profile" element={
            <ProtectedRoute requiredRole="student">
              <StudentProfile />
            </ProtectedRoute>
          } />
          
          <Route path="/student/history" element={
            <ProtectedRoute requiredRole="student">
              <StudentHistory />
            </ProtectedRoute>
          } />

          {/* Employer Routes */}
          <Route path="/employer/dashboard" element={
            <ProtectedRoute requiredRole="employer">
              <EmployerDashboard />
            </ProtectedRoute>
          } />
          
          <Route path="/employer/profile" element={
            <ProtectedRoute requiredRole="employer">
              <EmployerProfile />
            </ProtectedRoute>
          } />
          
          <Route path="/employer/history" element={
            <ProtectedRoute requiredRole="employer">
              <EmployerHistory />
            </ProtectedRoute>
          } />

          {/* University Routes */}
          <Route path="/university/dashboard" element={
            <ProtectedRoute requiredRole="university">
              <UniversityDashboard />
            </ProtectedRoute>
          } />
          
          <Route path="/university/profile" element={
            <ProtectedRoute requiredRole="university">
              <UniversityProfile />
            </ProtectedRoute>
          } />
          
          <Route path="/university/history" element={
            <ProtectedRoute requiredRole="university">
              <UniversityHistory />
            </ProtectedRoute>
          } />

          {/* Catch-all redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;