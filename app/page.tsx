import Header from './components/Header'
import Footer from './components/Footer'
import Link from 'next/link'
import { companyData } from './data'

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-800 text-white py-20 md:py-32">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {companyData.tagline}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {companyData.description}
            </p>
            <div className="flex gap-4">
              <Link href="/services" className="btn-primary">
                Explore Services
              </Link>
              <a href={`tel:${companyData.phone}`} className="btn-secondary">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Professional construction and remodeling services</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {companyData.services.slice(0, 6).map((service) => (
              <div key={service.id} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="container">
          <h2 className="section-title">Service Areas</h2>
          <p className="section-subtitle">We serve the Greater Hamilton area and surrounding regions</p>
          
          <div className="grid md:grid-cols-4 gap-4">
            {companyData.serviceAreas.map((area, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center hover:shadow-md transition">
                <p className="font-semibold text-black">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation. We're here to bring your vision to life.
          </p>
          <a href={`tel:${companyData.phone}`} className="btn-primary inline-block">
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
