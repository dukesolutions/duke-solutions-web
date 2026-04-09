import { companyData } from '../data'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{companyData.name}</h3>
            <p className="text-gray-400 mb-4">{companyData.description}</p>
            <p className="text-gray-400 text-sm">Languages: {companyData.languages.join(', ')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/services" className="hover:text-white transition">Services</a></li>
              <li><a href="/about" className="hover:text-white transition">About Us</a></li>
              <li><a href="/gallery" className="hover:text-white transition">Gallery</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>
                <strong>Phone:</strong><br />
                <a href={`tel:${companyData.phone}`} className="hover:text-white transition">
                  {companyData.phone}
                </a>
              </p>
              <p>
                <strong>Email:</strong><br />
                <a href={`mailto:${companyData.email}`} className="hover:text-white transition">
                  {companyData.email}
                </a>
              </p>
              <p>
                <strong>Hours:</strong><br />
                {companyData.hours}
              </p>
              <p>
                <strong>Payment:</strong><br />
                {companyData.paymentMethods.join(', ')}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} {companyData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
