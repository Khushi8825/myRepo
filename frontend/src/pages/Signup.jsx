import SignupForm from "../components/Auth/SignupForm";
import { motion } from "framer-motion";

export default function Signup() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center p-6">
      <motion.div 
        className="mt-20 w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <SignupForm />
      </motion.div>
    </div>
  );
}