import { useAuth } from "../context/AuthContext";
import StudentDashboard from "../components/dashboard/StudentDashboard";
import EmployerDashboard from "../components/dashboard/EmployerDashboard";
import UniversityDashboard from "../components/dashboard/UniversityDashboard";

export default function DashboardPage() {
  const { user } = useAuth();

  if (!user) {
    return <div className="pt-28 text-center text-red-600">Please log in to access your dashboard.</div>;
  }

  if (user.userType === "student") return <StudentDashboard />;
  if (user.userType === "employer") return <EmployerDashboard />;
  if (user.userType === "university") return <UniversityDashboard />;

  return <div className="pt-28 text-center">No dashboard available for this role.</div>;
}