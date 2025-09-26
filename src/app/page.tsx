import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';

export default function Home() {
  const services = [
    {
      title: "Residential Electrical",
      description: "Complete electrical services for your home, from installations to repairs.",
      icon: "🏠",
      features: ["Outlet Installation", "Lighting Upgrades", "Panel Upgrades", "GFCI Installation"]
    },
    {
      title: "Commercial Electrical",
      description: "Professional electrical solutions for businesses and commercial properties.",
      icon: "🏢",
      features: ["Office Wiring", "Security Systems", "Energy Management", "Maintenance"]
    },
    {
      title: "Emergency Services",
      description: "24/7 emergency electrical services when you need them most.",
      icon: "🚨",
      features: ["Power Outages", "Electrical Fires", "Faulty Wiring", "Circuit Breaker Issues"]
    },
    {
      title: "Smart Home Solutions",
      description: "Modern smart home electrical installations and automation systems.",
      icon: "🏡",
      features: ["Smart Switches", "Home Automation", "Security Integration", "Energy Monitoring"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Electrical Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From residential repairs to commercial installations, we provide comprehensive 
              electrical services with the highest standards of quality and safety.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Horsepower Electric?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With over 15 years of experience in the electrical industry, we've built a 
                reputation for excellence, reliability, and customer satisfaction.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">⚡</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Licensed & Certified</h3>
                    <p className="text-gray-600">
                      All our electricians are fully licensed, bonded, and insured for your protection.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">🛡️</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Guarantee</h3>
                    <p className="text-gray-600">
                      We stand behind our work with comprehensive warranties and satisfaction guarantees.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">⏰</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Emergency Service</h3>
                    <p className="text-gray-600">
                      Available around the clock for electrical emergencies and urgent repairs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Estimate</h3>
              <p className="text-gray-600 mb-6">
                Ready to get started? Contact us today for a free, no-obligation estimate 
                on your electrical project.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-3">📞</span>
                  <span className="text-gray-700">(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-3">✉️</span>
                  <span className="text-gray-700">info@horsepowerelectric.com</span>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-3">📍</span>
                  <span className="text-gray-700">123 Electric Ave, Your City, ST 12345</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
