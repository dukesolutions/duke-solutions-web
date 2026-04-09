import Header from '../components/Header'
import Footer from '../components/Footer'
import { companyData } from '../data'

export default function Services() {
  return (
    <>
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-black to-gray-900 text-white py-32 md:py-40">
        <div className="container">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">Our Services</h1>
          <p className="text-2xl text-gray-300 font-light">Comprehensive construction and remodeling solutions</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 md:py-48 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {companyData.services.map((service) => (
              <div key={service.id} className="group border-l-4 border-black pl-8 py-6 hover:pl-10 transition-all">
                <div className="flex items-start gap-6">
                  <div className="text-6xl flex-shrink-0 group-hover:scale-110 transition-transform">{service.icon}</div>
                  <div>
                    <h3 className="text-3xl font-bold mb-3 text-black">{service.name}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-br from-gray-100 to-gray-50 py-32 md:py-48">
        <div className="container">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-20">Why Choose Duke Solutions?</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-12 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-200">
              <h3 className="text-2xl font-bold mb-6 text-black">27 Years Experience</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Decades of proven expertise in construction and remodeling with satisfied customers throughout the region</p>
            </div>
            <div className="bg-white p-12 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-200">
              <h3 className="text-2xl font-bold mb-6 text-black">Professional Team</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Skilled craftsmen dedicated to quality workmanship and attention to every detail</p>
            </div>
            <div className="bg-white p-12 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-200">
              <h3 className="text-2xl font-bold mb-6 text-black">Customer Focused</h3>
              <p className="text-gray-600 text-lg leading-relaxed">We follow your ideas and adapt to your needs, ensuring your vision becomes reality</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-32 md:py-40">
        <div className="container text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-12 font-light">Contact us today for a free consultation on your project</p>
          <a href={`tel:${companyData.phone}`} className="btn-primary text-lg py-4 px-10 inline-block">
            Contact Us Today
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
