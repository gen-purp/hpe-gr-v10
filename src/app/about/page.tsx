import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Horsepower Electric
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your trusted electrical partner with over 15 years of experience 
              serving residential and commercial customers.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2008, Horsepower Electric began as a small family business with a 
                simple mission: to provide reliable, professional electrical services that 
                our customers could trust.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we&apos;ve grown from a one-man operation to a team of skilled 
                electricians, but we&apos;ve never lost sight of our core values: quality workmanship, 
                honest pricing, and exceptional customer service.
              </p>
              <p className="text-lg text-gray-600">
                Today, we&apos;re proud to serve thousands of satisfied customers throughout the 
                region, handling everything from simple outlet installations to complex 
                commercial electrical systems.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                To provide safe, reliable, and professional electrical services that exceed 
                our customers&apos; expectations while maintaining the highest standards of 
                quality and integrity.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Our Values</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">✓</span>
                  Safety First
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">✓</span>
                  Quality Workmanship
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">✓</span>
                  Honest Communication
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">✓</span>
                  Customer Satisfaction
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">✓</span>
                  Continuous Learning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team of licensed electricians is dedicated to providing 
              exceptional service and ensuring your complete satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl">👨‍🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mike Johnson</h3>
              <p className="text-yellow-600 font-medium mb-2">Owner & Master Electrician</p>
              <p className="text-gray-600">
                20+ years of experience in residential and commercial electrical work. 
                Licensed, bonded, and insured.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl">👩‍🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sarah Chen</h3>
              <p className="text-yellow-600 font-medium mb-2">Senior Electrician</p>
              <p className="text-gray-600">
                Specializes in smart home installations and energy-efficient solutions. 
                12 years of experience.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl">👨‍🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">David Rodriguez</h3>
              <p className="text-yellow-600 font-medium mb-2">Commercial Electrician</p>
              <p className="text-gray-600">
                Expert in commercial and industrial electrical systems. 
                15 years of experience with large-scale projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Licenses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certifications & Licenses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain all required licenses and certifications to ensure the highest 
              standards of safety and professionalism.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📜</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Licensed Electrician</h3>
              <p className="text-gray-600">State Licensed #EL-12345</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Bonded & Insured</h3>
              <p className="text-gray-600">$2M General Liability</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⭐</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">BBB A+ Rating</h3>
              <p className="text-gray-600">Better Business Bureau</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏆</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Angie&apos;s List</h3>
              <p className="text-gray-600">Super Service Award</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Experience the difference that professional, reliable electrical service makes. 
            Contact us today for your free estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-medium text-lg"
            >
              Get Free Quote
            </a>
            <a
              href="tel:5551234567"
              className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-900 hover:text-white transition-colors font-medium text-lg"
            >
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
