'use client'

import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { galleryImages, companyData } from '../data'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)
  const categories = ['All', ...new Set(galleryImages.map(img => img.category))]
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  return (
    <>
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-black to-gray-800 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold">Gallery</h1>
          <p className="text-xl text-gray-300 mt-4">View our completed projects</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24">
        <div className="container">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg transition ${
                  selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-gray-200 text-black hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="cursor-pointer overflow-hidden rounded-lg hover:shadow-xl transition group"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative h-64 bg-gray-200 overflow-hidden">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="bg-white p-4">
                  <h3 className="font-bold text-black">{image.title}</h3>
                  <p className="text-gray-600 text-sm">{image.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="bg-white rounded-lg max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-96 bg-gray-200">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{selectedImage.title}</h2>
              <p className="text-gray-600 mb-4">{selectedImage.category}</p>
              <button
                onClick={() => setSelectedImage(null)}
                className="btn-primary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="bg-black text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in Your Own Project?</h2>
          <a href={`tel:${companyData.phone}`} className="btn-primary inline-block">
            Contact Us Now
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
