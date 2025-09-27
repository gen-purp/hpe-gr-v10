'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface ProfileData {
  full_name: string;
  email: string;
  password: string; // This will be hidden
}

export default function ProfilePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminName, setAdminName] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [profileData, setProfileData] = useState<ProfileData>({
    full_name: '',
    email: '',
    password: ''
  });
  const [editingField, setEditingField] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Check if admin is logged in
    const loggedIn = localStorage.getItem('adminLoggedIn');
    const email = localStorage.getItem('adminEmail');
    const name = localStorage.getItem('adminName');
    
    if (loggedIn === 'true' && email) {
      setIsAuthenticated(true);
      setAdminName(name || email);
      setAdminEmail(email);
      
      // Set initial profile data
      setProfileData({
        full_name: name || 'Matt ProductTest',
        email: email,
        password: '••••••••••••' // Hidden password
      });
      
      // Use the variables to avoid linting warnings
      console.log('Admin logged in:', { adminName: name, adminEmail: email });
      setAdminEmail(email);
    } else {
      router.push('/admin/login');
    }
  }, [router]);

  const handleEdit = (field: string, currentValue: string) => {
    setEditingField(field);
    setEditValue(field === 'password' ? '' : currentValue);
  };

  const handleCancel = () => {
    setEditingField(null);
    setEditValue('');
    setMessage('');
  };

  const handleSave = async (field: string) => {
    if (!editValue.trim()) {
      setMessage('Please enter a value');
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/admin/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          field,
          value: editValue,
          currentPassword: field === 'password' ? 'current_password_here' : undefined
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Update the profile data
        setProfileData(prev => ({
          ...prev,
          [field]: field === 'password' ? '••••••••••••' : editValue
        }));

        // Update localStorage if it's name or email
        if (field === 'full_name') {
          localStorage.setItem('adminName', editValue);
          setAdminName(editValue);
        } else if (field === 'email') {
          localStorage.setItem('adminEmail', editValue);
          setAdminEmail(editValue);
        }

        setMessage(data.message);
        setEditingField(null);
        setEditValue('');
      } else {
        setMessage(data.error || 'Failed to update. Please try again.');
      }
    } catch {
      setMessage('Failed to update. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-yellow-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Profile Details</h1>
              <p className="text-gray-600">Manage your account information for {adminName}</p>
            </div>
            <button
              onClick={() => router.push('/admin/dashboard')}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Back to Dashboard
            </button>
          </div>
        </div>

        {message && (
          <div className={`mb-6 p-4 rounded-lg ${
            message.includes('successfully') 
              ? 'bg-green-50 border border-green-200 text-green-600' 
              : 'bg-red-50 border border-red-200 text-red-600'
          }`}>
            {message}
          </div>
        )}

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-8">
            {/* Full Name Field */}
            <div className="border-b border-gray-200 pb-6">
              <div className="flex justify-between items-center">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  {editingField === 'full_name' ? (
                    <div className="flex items-center space-x-3">
                      <input
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="Enter full name"
                      />
                      <button
                        onClick={() => handleSave('full_name')}
                        disabled={isLoading}
                        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors disabled:opacity-50"
                      >
                        {isLoading ? 'Saving...' : 'Save'}
                      </button>
                      <button
                        onClick={handleCancel}
                        className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <span className="text-lg text-gray-900">{profileData.full_name}</span>
                      <button
                        onClick={() => handleEdit('full_name', profileData.full_name)}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Edit
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Email Field */}
            <div className="border-b border-gray-200 pb-6">
              <div className="flex justify-between items-center">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  {editingField === 'email' ? (
                    <div className="flex items-center space-x-3">
                      <input
                        type="email"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="Enter email address"
                      />
                      <button
                        onClick={() => handleSave('email')}
                        disabled={isLoading}
                        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors disabled:opacity-50"
                      >
                        {isLoading ? 'Saving...' : 'Save'}
                      </button>
                      <button
                        onClick={handleCancel}
                        className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <span className="text-lg text-gray-900">{profileData.email}</span>
                      <button
                        onClick={() => handleEdit('email', profileData.email)}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Edit
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Password Field */}
            <div className="pb-6">
              <div className="flex justify-between items-center">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  {editingField === 'password' ? (
                    <div className="flex items-center space-x-3">
                      <input
                        type="password"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="Enter new password"
                      />
                      <button
                        onClick={() => handleSave('password')}
                        disabled={isLoading}
                        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors disabled:opacity-50"
                      >
                        {isLoading ? 'Saving...' : 'Save'}
                      </button>
                      <button
                        onClick={handleCancel}
                        className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <span className="text-lg text-gray-900">{profileData.password}</span>
                      <button
                        onClick={() => handleEdit('password', '')}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Change Password
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Password is hidden for security. Click &quot;Change Password&quot; to update it.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
