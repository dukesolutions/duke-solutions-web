import Header from './components/Header'
import Footer from './components/Footer'
import Link from 'next/link'
import { companyData } from './data'

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-32 md:py-48">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              {companyData.tagline}
            </h1>
            <p className="text-2xl text-gray-300 mb-12 leading-relaxed font-light">
              Professional construction and remodeling services with 27 years of expertise in the Greater Hamilton area.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/services" className="btn-primary text-lg py-4 px-8 text-center">
                Explore Services
              </Link>
              <a href={`tel:${companyData.phone}`} className="btn-secondary text-lg py-4 px-8 text-center">
                Call: {companyData.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-32 md:py-48 bg-white">
        <div className="container">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">Our Services</h2>
            <p className="text-2xl text-gray-600 font-light">Expert construction and remodeling solutions</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {companyData.services.slice(0, 6).map((service) => (
              <div key={service.id} className="group bg-gray-50 p-10 rounded-2xl hover:shadow-2xl hover:bg-white transition-all duration-300 border border-gray-100">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-black">{service.name}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/services" className="btn-primary text-lg py-4 px-10">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-gradient-to-br from-gray-100 to-gray-50 py-32 md:py-48">
        <div className="container">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">Service Areas</h2>
            <p className="text-2xl text-gray-600 font-light">We proudly serve the Greater Hamilton region and surrounding communities</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {companyData.serviceAreas.map((area, index) => (
              <div key={index} className="bg-white p-8 rounded-xl text-center hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-200">
                <p className="font-semibold text-black text-lg">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 md:py-48 bg-white">
        <div className="container">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">Why Choose Duke Solutions?</h2>
            <p className="text-2xl text-gray-600 font-light">Trusted by homeowners for nearly three decades</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-gradient-to-br from-black to-gray-800 text-white p-12 rounded-2xl">
              <div className="text-5xl mb-6">🏆</div>
              <h3 className="text-2xl font-bold mb-4">27 Years Experience</h3>
              <p className="text-gray-300 text-lg leading-relaxed">Nearly three decades of proven expertise in residential construction and remodeling</p>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-50 text-black p-12 rounded-2xl border border-gray-200">
              <div className="text-5xl mb-6">👷</div>
              <h3 className="text-2xl font-bold mb-4">Professional Team</h3>
              <p className="text-gray-700 text-lg leading-relaxed">Skilled craftsmen dedicated to exceptional quality and attention to detail</p>
            </div>
            <div className="bg-gradient-to-br from-black to-gray-800 text-white p-12 rounded-2xl">
              <div className="text-5xl mb-6">💡</div>
              <h3 className="text-2xl font-bold mb-4">Customer Focused</h3>
              <p className="text-gray-300 text-lg leading-relaxed">We listen to your ideas and adapt our approach to meet your unique needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-32 md:py-48">
        <div className="container text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Ready to Start Your Project?</h2>
          <p className="text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Let's bring your vision to life. Contact us today for a free consultation.
          </p>
          <a href={`tel:${companyData.phone}`} className="btn-primary text-lg py-4 px-10 inline-block">
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
