import Header from '../components/Header'
import Footer from '../components/Footer'
import { companyData } from '../data'

export default function Services() {
  return (
    <>
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-black to-gray-800 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
          <p className="text-xl text-gray-300 mt-4">Professional construction and remodeling services</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {companyData.services.map((service) => (
              <div key={service.id} className="border-l-4 border-black pl-6 py-4">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{service.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                    <p className="text-gray-600 text-lg">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="container">
          <h2 className="section-title">Why Choose Duke Solutions?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">27 Years Experience</h3>
              <p className="text-gray-600">Decades of expertise in construction and remodeling</p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Professional Team</h3>
              <p className="text-gray-600">Skilled craftsmen dedicated to quality workmanship</p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Customer Focused</h3>
              <p className="text-gray-600">We follow your ideas and adapt to your needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <a href={`tel:${companyData.phone}`} className="btn-primary inline-block">
            Contact Us Today
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
