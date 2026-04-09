import Header from '../components/Header'
import Footer from '../components/Footer'
import { companyData } from '../data'

export default function About() {
  return (
    <>
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-black to-gray-900 text-white py-32 md:py-40">
        <div className="container">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">About Duke Solutions</h1>
          <p className="text-2xl text-gray-300 font-light">Your trusted construction partner</p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-32 md:py-48 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-black mb-8">Who We Are</h2>
              <p className="text-gray-600 text-xl mb-8 leading-relaxed">
                Duke Solutions is a professional construction and remodeling company with 27 years of experience serving the Greater Hamilton area and surrounding regions.
              </p>
              <p className="text-gray-600 text-xl mb-8 leading-relaxed">
                Founded by Cesar Augusto Duque Ospina, we pride ourselves on delivering exceptional craftsmanship and customer service. Our philosophy is simple: we follow your ideas and adapt to your needs.
              </p>
              <p className="text-gray-600 text-xl leading-relaxed">
                Whether you're planning a small renovation or a complete home transformation, our experienced team is ready to bring your vision to life with professionalism and dedication.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-50 h-96 rounded-2xl flex items-center justify-center border-2 border-gray-200">
              <div className="text-center">
                <p className="text-7xl mb-6">🏗️</p>
                <p className="text-gray-500 text-lg">Your Project Image Here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="bg-gradient-to-br from-gray-100 to-gray-50 py-32 md:py-48">
        <div className="container">
          <h2 className="text-5xl md:text-6xl font-bold text-black text-center mb-20">Company Information</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-white p-12 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-3xl font-bold mb-10 text-black">Contact Details</h3>
              <div className="space-y-8">
                <div>
                  <p className="font-semibold text-black text-lg mb-2">Phone</p>
                  <a href={`tel:${companyData.phone}`} className="text-blue-600 hover:underline text-xl">
                    {companyData.phone}
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-black text-lg mb-2">Email</p>
                  <a href={`mailto:${companyData.email}`} className="text-blue-600 hover:underline text-xl">
                    {companyData.email}
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-black text-lg mb-2">Address</p>
                  <p className="text-gray-600 text-lg leading-relaxed">{companyData.address}</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-12 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-3xl font-bold mb-10 text-black">Business Hours</h3>
              <div className="space-y-8">
                <div>
                  <p className="font-semibold text-black text-lg mb-2">Hours</p>
                  <p className="text-gray-600 text-lg">{companyData.hours}</p>
                </div>
                <div>
                  <p className="font-semibold text-black text-lg mb-2">Languages</p>
                  <p className="text-gray-600 text-lg">{companyData.languages.join(', ')}</p>
                </div>
                <div>
                  <p className="font-semibold text-black text-lg mb-2">Payment Methods</p>
                  <p className="text-gray-600 text-lg">{companyData.paymentMethods.join(', ')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-32 md:py-40">
        <div className="container text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-2xl text-gray-300 mb-12 font-light">Contact us for a free consultation</p>
          <a href={`tel:${companyData.phone}`} className="btn-primary text-lg py-4 px-10 inline-block">
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
