import { motion } from 'motion/react';

const attractions = [
  {
    title: 'Udawalawe National Park Safari',
    image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=1000&auto=format&fit=crop',
    desc: 'Witness majestic elephants and diverse wildlife in their natural habitat.'
  },
  {
    title: 'Elephant Transit Home',
    image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?q=80&w=1000&auto=format&fit=crop',
    desc: 'Visit the rehabilitation center for orphaned elephant calves.'
  },
  {
    title: 'Nature Boat Rides',
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1000&auto=format&fit=crop',
    desc: 'Relaxing boat tours on the Chandrika Lake surrounded by nature.'
  },
  {
    title: 'Village Tours',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1000&auto=format&fit=crop',
    desc: 'Experience the authentic rural lifestyle and culture of Sri Lanka.'
  }
];

export default function Experience() {
  return (
    <section className="py-20 bg-light-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest-green mb-4">
            Experience & Nearby Attractions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the wonders of Embilipitiya and Udawalawe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {attractions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-dark-green mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
