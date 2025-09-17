import { motion } from "framer-motion";

export default function Help() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center p-6">
      <motion.div 
        className="glass-effect p-10 rounded-3xl shadow-xl max-w-4xl w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Help & Support</h1>
        <p className="text-gray-600 mb-8">How to use CertiSure — quick guide and FAQs.</p>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold text-purple-600 mb-3">Getting Started</h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-600">
              <li>Create an account based on your role (Student, Employer, or University)</li>
              <li>Login to access your personalized dashboard</li>
              <li>Start validation process based on your needs</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold text-purple-600 mb-3">For Students</h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-600">
              <li>Upload your certificates for verification</li>
              <li>Track verification status in your history</li>
              <li>Share verified certificates with employers</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold text-purple-600 mb-3">For Employers</h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-600">
              <li>Scan QR codes to instantly verify certificates</li>
              <li>Upload single or multiple certificates for verification</li>
              <li>Verify certificates using hash/ID manually</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold text-purple-600 mb-3">For Universities</h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-600">
              <li>Bulk upload certificates for verification</li>
              <li>Manage your institution's certificate database</li>
              <li>Track verification history and status</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 p-6 bg-purple-50 rounded-2xl">
          <h3 className="text-lg font-semibold text-purple-700 mb-3">Need more help?</h3>
          <p className="text-gray-700">
            Contact our support team at <a href="mailto:support@webcome.org" className="text-purple-600 font-medium">support@webcome.org</a> 
            or visit our website at <a href="http://www.website.com/" className="text-purple-600 font-medium">http://www.website.com/</a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}