// import { useAuth } from "./context/AuthContext";

// // Certificate-related API calls
// export const useCertificateAPI = () => {
//   const { authFetch } = useAuth();

//   const uploadCertificate = async (formData) => {
//     const response = await authFetch('/certificates/upload', {
//       method: 'POST',
//       body: formData,
//       // Note: Don't set Content-Type header for FormData, browser will set it automatically
//     });
    
//     return response.json();
//   };

//   const verifyCertificate = async (hash) => {
//     const response = await authFetch(`/certificates/verify/${hash}`);
//     return response.json();
//   };

//   const getCertificateHistory = async () => {
//     const response = await authFetch('/certificates/history');
//     return response.json();
//   };

//   const bulkUploadCertificates = async (formData) => {
//     const response = await authFetch('/certificates/bulk-upload', {
//       method: 'POST',
//       body: formData,
//     });
    
//     return response.json();
//   };

//   return {
//     uploadCertificate,
//     verifyCertificate,
//     getCertificateHistory,
//     bulkUploadCertificates,
//   };
// };

// // User profile API calls
// export const useProfileAPI = () => {
//   const { authFetch } = useAuth();

//   const updateProfile = async (profileData) => {
//     const response = await authFetch('/profile', {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(profileData),
//     });
    
//     return response.json();
//   };

//   const getProfile = async () => {
//     const response = await authFetch('/profile');
//     return response.json();
//   };

//   return {
//     updateProfile,
//     getProfile,
//   };
// };
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
