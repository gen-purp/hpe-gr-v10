'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        alert('Thank you for your message! We will contact you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        setError(data.error || 'Failed to submit form. Please try again.');
      }
    } catch {
      setError('Failed to submit form. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to get started on your electrical project? Contact us today for a 
              free estimate and professional service.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get Your Free Estimate</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="residential">Residential Electrical</option>
                    <option value="commercial">Commercial Electrical</option>
                    <option value="emergency">Emergency Service</option>
                    <option value="smart-home">Smart Home Solutions</option>
                    <option value="panel-upgrade">Panel Upgrade</option>
                    <option value="outdoor-lighting">Outdoor Lighting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Please describe your electrical project or issue..."
                  />
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm">
                    {error}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-yellow-500 text-white py-4 rounded-lg hover:bg-yellow-600 transition-colors font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xl">📞</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">(555) 123-4567</p>
                      <p className="text-sm text-gray-500">Available 24/7 for emergencies</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xl">✉️</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">info@horsepowerelectric.com</p>
                      <p className="text-sm text-gray-500">We respond within 2 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xl">📍</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900">Address</h4>
                      <p className="text-gray-600">
                        123 Electric Avenue<br />
                        Your City, ST 12345
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xl">🕒</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900">Business Hours</h4>
                      <div className="text-gray-600">
                        <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                        <p>Saturday: 8:00 AM - 4:00 PM</p>
                        <p>Sunday: Emergency calls only</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-500 rounded-lg p-8 text-gray-900">
                <h3 className="text-2xl font-bold mb-4">Emergency Service</h3>
                <p className="mb-4">
                  Electrical emergencies can happen at any time. We provide 24/7 emergency 
                  service for urgent electrical issues.
                </p>
                <a
                  href="tel:5551234567"
                  className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium inline-block"
                >
                  Call Emergency Line
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We proudly serve the following areas with professional electrical services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏙️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Your City</h3>
              <p className="text-gray-600">Full electrical services</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏘️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Surrounding Areas</h3>
              <p className="text-gray-600">Within 30 miles</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Travel Service</h3>
              <p className="text-gray-600">Extended areas available</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
