import { motion } from 'motion/react';

const images = [
  { src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1000&auto=format&fit=crop', alt: 'Poolside' },
  { src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop', alt: 'Villa Exterior' },
  { src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000&auto=format&fit=crop', alt: 'Dining' },
  { src: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1000&auto=format&fit=crop', alt: 'Bedroom' },
  { src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop', alt: 'Garden' },
  { src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1000&auto=format&fit=crop', alt: 'Food' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest-green mb-4">
            Gallery
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A glimpse into the serene atmosphere of Frozen Villa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                index === 0 || index === 3 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium tracking-wider uppercase border border-white px-4 py-2 rounded-sm">
                  View
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
