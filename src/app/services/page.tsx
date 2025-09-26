import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';

export default function ServicesPage() {
  const services = [
    {
      title: "Residential Electrical Services",
      description: "Complete electrical solutions for your home, ensuring safety and efficiency.",
      icon: "🏠",
      features: [
        "Outlet and Switch Installation",
        "Lighting Design & Installation", 
        "Electrical Panel Upgrades",
        "GFCI and AFCI Protection",
        "Whole House Rewiring",
        "Ceiling Fan Installation",
        "Electrical Inspections",
        "Code Compliance Updates"
      ]
    },
    {
      title: "Commercial Electrical Services",
      description: "Professional electrical solutions for businesses and commercial properties.",
      icon: "🏢",
      features: [
        "Office Building Wiring",
        "Retail Space Electrical",
        "Industrial Electrical Systems",
        "Security System Installation",
        "Energy Management Systems",
        "Backup Power Solutions",
        "LED Lighting Upgrades",
        "Electrical Maintenance"
      ]
    },
    {
      title: "Emergency Electrical Services",
      description: "24/7 emergency electrical services when you need them most.",
      icon: "🚨",
      features: [
        "Power Outage Restoration",
        "Electrical Fire Prevention",
        "Faulty Wiring Repairs",
        "Circuit Breaker Issues",
        "Electrical Safety Inspections",
        "Storm Damage Repairs",
        "Generator Installation",
        "Urgent Electrical Repairs"
      ]
    },
    {
      title: "Smart Home Solutions",
      description: "Modern smart home electrical installations and automation systems.",
      icon: "🏡",
      features: [
        "Smart Switch Installation",
        "Home Automation Systems",
        "Security System Integration",
        "Energy Monitoring Systems",
        "Smart Lighting Control",
        "Voice-Activated Controls",
        "Remote Access Systems",
        "Energy-Efficient Solutions"
      ]
    },
    {
      title: "Electrical Panel Services",
      description: "Expert electrical panel installation, upgrades, and maintenance services.",
      icon: "⚡",
      features: [
        "Panel Upgrades & Replacements",
        "Circuit Breaker Installation",
        "Load Center Installation",
        "Electrical Panel Inspections",
        "Code Compliance Updates",
        "Safety Switch Installation",
        "Panel Maintenance",
        "Electrical Load Analysis"
      ]
    },
    {
      title: "Outdoor & Landscape Lighting",
      description: "Beautiful and functional outdoor lighting solutions for your property.",
      icon: "🌳",
      features: [
        "Landscape Lighting Design",
        "Security Lighting Installation",
        "Pathway Lighting",
        "Deck & Patio Lighting",
        "Pool Area Lighting",
        "Outdoor Outlet Installation",
        "Motion Sensor Lights",
        "Solar Lighting Options"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Electrical Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From residential repairs to commercial installations, we provide comprehensive 
              electrical services with the highest standards of quality and safety.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure every project is completed 
              safely, efficiently, and to your satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Consultation</h3>
              <p className="text-gray-600">
                We start with a free consultation to understand your needs and assess the project.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Detailed Estimate</h3>
              <p className="text-gray-600">
                We provide a detailed, transparent estimate with no hidden fees or surprises.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Installation</h3>
              <p className="text-gray-600">
                Our licensed electricians complete the work with precision and attention to detail.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                We test everything thoroughly and provide warranties on all our work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Contact us today for a free estimate on your electrical project. 
            We&apos;re here to help power your future.
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
