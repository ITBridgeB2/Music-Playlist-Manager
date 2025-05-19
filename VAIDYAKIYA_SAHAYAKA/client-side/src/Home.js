import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Hero Section */}
      <div className="bg-blue-100 py-20 px-6 text-center">
        <h1 className="text-5xl font-bold text-blue-800 mb-4">Vaidyakiya Sahayaka</h1>
        <p className="text-xl text-blue-700 mb-6">
          Empowering patients through technology-driven healthcare support
        </p>
        <div className="space-x-4">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700" onClick={() => navigate('/register')}>
            Register
          </button>
          <button className="px-6 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700" onClick={() => navigate('/login')}>
            Login
          </button>
          <button className="px-6 py-2 bg-gray-800 text-white rounded-xl hover:bg-gray-900" onClick={() => navigate('/admin/login')}>
            Admin Login
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-5xl mx-auto mt-12 px-6">
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 mb-6">
            We are a dedicated NGO focused on bridging the gap between underserved communities and accessible healthcare by connecting patients to the right medical institutions.
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To ensure every citizen, regardless of income or location, has access to specialized care through a tech-enabled healthcare ecosystem.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">Our Vision</h3>
              <p className="text-gray-600">
                A healthier society empowered by data, compassion, and inclusive medical assistance.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">Why Choose Us?</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Seamless patient onboarding and tracking</li>
              <li>Real-time analytics and hospital matching</li>
              <li>Community-driven and privacy-focused approach</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 bg-gray-800 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} Vaidyakiya Sahayaka. All rights reserved.</p>
        <p className="text-sm mt-2">Built with love by dedicated volunteers </p>
      </footer>
    </div>
  );
}
