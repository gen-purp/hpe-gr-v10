'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
  status: 'new' | 'in_progress' | 'completed' | 'closed';
  created_at: string;
}

export default function CRMPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'new' | 'in_progress' | 'completed' | 'closed'>('all');
  const router = useRouter();

  useEffect(() => {
    // Check if admin is logged in
    const loggedIn = localStorage.getItem('adminLoggedIn');
    const email = localStorage.getItem('adminEmail');
    
    if (loggedIn === 'true' && email) {
      setIsAuthenticated(true);
      fetchContacts();
    } else {
      router.push('/admin/login');
    }
  }, [router]);

  const fetchContacts = async () => {
    try {
      const response = await fetch('/api/admin/contacts');
      const data = await response.json();
      
      if (data.success) {
        setContacts(data.contacts);
      }
    } catch (error) {
      console.error('Error fetching contacts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateContactStatus = (id: string, newStatus: string) => {
    setContacts(prev => 
      prev.map(contact => 
        contact.id === id ? { ...contact, status: newStatus as 'new' | 'in_progress' | 'completed' | 'closed' } : contact
      )
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'in_progress': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredContacts = filter === 'all' 
    ? contacts 
    : contacts.filter(contact => contact.status === filter);

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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">CRM - Contact Management</h1>
              <p className="text-gray-600">Manage customer inquiries and leads</p>
            </div>
            <button
              onClick={() => router.push('/admin/dashboard')}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Back to Dashboard
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mb-6">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
            {[
              { key: 'all', label: 'All', count: contacts.length },
              { key: 'new', label: 'New', count: contacts.filter(c => c.status === 'new').length },
              { key: 'in_progress', label: 'In Progress', count: contacts.filter(c => c.status === 'in_progress').length },
              { key: 'completed', label: 'Completed', count: contacts.filter(c => c.status === 'completed').length },
              { key: 'closed', label: 'Closed', count: contacts.filter(c => c.status === 'closed').length }
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key as 'all' | 'new' | 'in_progress' | 'completed' | 'closed')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  filter === tab.key
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>
        </div>

        {/* Contacts List */}
        {isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading contacts...</p>
          </div>
        ) : filteredContacts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No contacts found</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredContacts.map((contact) => (
              <div key={contact.id} className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{contact.name}</h3>
                    <p className="text-gray-600">{contact.email}</p>
                    {contact.phone && <p className="text-gray-600">{contact.phone}</p>}
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(contact.status)}`}>
                      {contact.status.replace('_', ' ')}
                    </span>
                    <select
                      value={contact.status}
                      onChange={(e) => updateContactStatus(contact.id, e.target.value)}
                      className="text-sm border border-gray-300 rounded-md px-2 py-1"
                    >
                      <option value="new">New</option>
                      <option value="in_progress">In Progress</option>
                      <option value="completed">Completed</option>
                      <option value="closed">Closed</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Service Requested:</h4>
                  <p className="text-gray-900">{contact.service || 'Not specified'}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Message:</h4>
                  <p className="text-gray-900">{contact.message}</p>
                </div>
                
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>Submitted: {new Date(contact.created_at).toLocaleDateString()}</span>
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-800">Reply</button>
                    <button className="text-green-600 hover:text-green-800">Call</button>
                    <button className="text-red-600 hover:text-red-800">Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
}
