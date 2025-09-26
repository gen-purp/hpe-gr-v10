import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Power Your
              <span className="text-yellow-500 block">Future</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Professional electrical services for residential and commercial properties. 
              Licensed, insured, and committed to excellence in every project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-yellow-500 text-white px-8 py-4 rounded-lg hover:bg-yellow-600 transition-colors font-medium text-lg text-center"
              >
                Get Free Quote
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-medium text-lg text-center"
              >
                Our Services
              </Link>
            </div>
            <div className="mt-8 flex items-center space-x-6 text-sm">
              <div className="flex items-center">
                <span className="text-yellow-500 mr-2">✓</span>
                Licensed & Insured
              </div>
              <div className="flex items-center">
                <span className="text-yellow-500 mr-2">✓</span>
                24/7 Emergency Service
              </div>
              <div className="flex items-center">
                <span className="text-yellow-500 mr-2">✓</span>
                Free Estimates
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-yellow-500 rounded-lg p-8 text-gray-900">
              <h3 className="text-2xl font-bold mb-4">Why Choose Horsepower Electric?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-gray-700 mr-3 mt-1">⚡</span>
                  <div>
                    <h4 className="font-semibold">Expert Technicians</h4>
                    <p className="text-sm text-gray-600">Certified professionals with years of experience</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-700 mr-3 mt-1">🛡️</span>
                  <div>
                    <h4 className="font-semibold">Fully Insured</h4>
                    <p className="text-sm text-gray-600">Complete protection for your peace of mind</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-700 mr-3 mt-1">⏰</span>
                  <div>
                    <h4 className="font-semibold">On-Time Service</h4>
                    <p className="text-sm text-gray-600">Punctual and reliable service every time</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-700 mr-3 mt-1">💰</span>
                  <div>
                    <h4 className="font-semibold">Fair Pricing</h4>
                    <p className="text-sm text-gray-600">Transparent pricing with no hidden fees</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
