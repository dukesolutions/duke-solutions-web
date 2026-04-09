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
      <section className="bg-gradient-to-br from-black to-gray-900 text-white py-32 md:py-40">
        <div className="container">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">Gallery</h1>
          <p className="text-2xl text-gray-300 font-light">View our completed projects and transformations</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-32 md:py-48 bg-white">
        <div className="container">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 mb-16 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-3 rounded-full font-semibold text-lg transition-all ${
                  selectedCategory === category
                    ? 'bg-black text-white shadow-lg scale-105'
                    : 'bg-gray-200 text-black hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="cursor-pointer overflow-hidden rounded-2xl hover:shadow-2xl transition-all duration-300 group"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative h-80 bg-gray-200 overflow-hidden">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      View
                    </button>
                  </div>
                </div>
                <div className="bg-white p-6">
                  <h3 className="font-bold text-black text-lg">{image.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">{image.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-96 md:h-96 bg-gray-200">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-10">
              <h2 className="text-4xl font-bold mb-4 text-black">{selectedImage.title}</h2>
              <p className="text-gray-600 mb-8 text-lg">{selectedImage.category}</p>
              <button
                onClick={() => setSelectedImage(null)}
                className="btn-primary text-lg py-3 px-8"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-32 md:py-40">
        <div className="container text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Interested in Your Own Project?</h2>
          <p className="text-2xl text-gray-300 mb-12 font-light">Let's create something amazing together</p>
          <a href={`tel:${companyData.phone}`} className="btn-primary text-lg py-4 px-10 inline-block">
            Contact Us Now
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
