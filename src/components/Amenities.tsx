import { motion } from 'motion/react';
import { Waves, Utensils, Coffee, Trees, Wifi, Car, Sun, Users } from 'lucide-react';

const amenities = [
  { icon: Waves, title: 'Swimming Pool', desc: 'Refresh in our crystal clear outdoor pool.' },
  { icon: Utensils, title: 'Restaurant', desc: 'Authentic Sri Lankan and international cuisine.' },
  { icon: Coffee, title: 'Free Breakfast', desc: 'Start your day with a delicious complimentary meal.' },
  { icon: Trees, title: 'Garden Area', desc: 'Relax in our lush, well-maintained tropical gardens.' },
  { icon: Wifi, title: 'Free WiFi', desc: 'Stay connected with high-speed internet access.' },
  { icon: Car, title: 'Parking', desc: 'Secure and spacious parking for your vehicle.' },
  { icon: Sun, title: 'Outdoor Dining', desc: 'Enjoy meals under the stars or in the morning sun.' },
  { icon: Users, title: 'Family Friendly', desc: 'Safe and welcoming environment for all ages.' },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-20 bg-gradient-to-b from-light-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest-green mb-4">
            Our Amenities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need for a comfortable and memorable stay.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all text-center group"
            >
              <div className="w-14 h-14 mx-auto bg-soft-sage/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-forest-green transition-colors duration-300">
                <item.icon className="w-7 h-7 text-forest-green group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-dark-green mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
