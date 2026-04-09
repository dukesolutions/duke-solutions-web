import Header from '../components/Header'
import Footer from '../components/Footer'
import { companyData } from '../data'

export default function About() {
  return (
    <>
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-black to-gray-800 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold">About Duke Solutions</h1>
          <p className="text-xl text-gray-300 mt-4">Your trusted construction partner</p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Who We Are</h2>
              <p className="text-gray-600 text-lg mb-6">
                Duke Solutions is a professional construction and remodeling company with 27 years of experience serving the Greater Hamilton area and surrounding regions.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                Founded by Cesar Augusto Duque Ospina, we pride ourselves on delivering exceptional craftsmanship and customer service. Our philosophy is simple: we follow your ideas and adapt to your needs.
              </p>
              <p className="text-gray-600 text-lg">
                Whether you're planning a small renovation or a complete home transformation, our experienced team is ready to bring your vision to life.
              </p>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-400">
                <p className="text-6xl mb-4">🏗️</p>
                <p>Your Project Image Here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="container">
          <h2 className="section-title text-center mb-12">Company Information</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Details</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-black">Phone</p>
                  <a href={`tel:${companyData.phone}`} className="text-blue-600 hover:underline">
                    {companyData.phone}
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-black">Email</p>
                  <a href={`mailto:${companyData.email}`} className="text-blue-600 hover:underline">
                    {companyData.email}
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-black">Address</p>
                  <p className="text-gray-600">{companyData.address}</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Business Hours</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-black">Hours</p>
                  <p className="text-gray-600">{companyData.hours}</p>
                </div>
                <div>
                  <p className="font-semibold text-black">Languages</p>
                  <p className="text-gray-600">{companyData.languages.join(', ')}</p>
                </div>
                <div>
                  <p className="font-semibold text-black">Payment Methods</p>
                  <p className="text-gray-600">{companyData.paymentMethods.join(', ')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-8">Contact us for a free consultation</p>
          <a href={`tel:${companyData.phone}`} className="btn-primary inline-block">
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
