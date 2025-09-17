import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex flex-col items-center justify-center p-6">
      {/* Animated background elements */}
      <motion.div 
        className="absolute w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 rotating-ball"
        animate={{ 
          x: [0, 120, -120, 0],
          y: [0, 60, -60, 0]
        }} 
        transition={{ duration: 20, repeat: Infinity }} 
      />
      <motion.div 
        className="absolute w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 rotating-ball"
        animate={{ 
          x: [50, -50, 0, 50],
          y: [30, -30, 0, 30]
        }} 
        transition={{ duration: 18, repeat: Infinity }} 
      />
      <motion.div 
        className="absolute w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 rotating-ball"
        animate={{ 
          x: [-40, 40, 0, -40],
          y: [-20, 20, 0, -20]
        }} 
        transition={{ duration: 22, repeat: Infinity }} 
      />

      <div className="relative z-10 text-center max-w-4xl mt-20">
        <motion.h1 
          className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">CertiSure</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Trusted certificate verification with a beautiful, modern experience powered by blockchain technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => (user ? navigate("/dashboard") : navigate("/login"))}
            className="px-8 py-4 btn-primary text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            Start Validation
          </button>
          
          <button
            onClick={() => navigate("/help")}
            className="px-8 py-4 bg-white text-gray-800 text-lg font-semibold rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all"
          >
            Learn More
          </button>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="stat-card p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">12,482</div>
            <div className="text-gray-600">Verified Certificates</div>
          </div>
          
          <div className="stat-card p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">256</div>
            <div className="text-gray-600">Trusted Institutions</div>
          </div>
          
          <div className="stat-card p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">98.7%</div>
            <div className="text-gray-600">Verification Accuracy</div>
          </div>
        </motion.div>

        {/* Footer section */}
        <motion.div 
          className="mt-16 pt-8 border-t border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-gray-600 mb-2">Visit the CertiSure website at</p>
          <a href="http://www.website.com/" className="text-purple-600 font-medium hover:underline">
            http://www.website.com/
          </a>
          
          <div className="mt-4">
            <p className="text-gray-600">Email:</p>
            <a href="mailto:support@webcome.org" className="text-purple-600 font-medium hover:underline">
              support@webcome.org
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}