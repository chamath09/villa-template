import { motion } from 'motion/react';
import { Wifi, Waves, Utensils, Car, Baby, Coffee } from 'lucide-react';

const features = [
  { icon: Wifi, label: 'Free WiFi' },
  { icon: Waves, label: 'Swimming Pool' },
  { icon: Utensils, label: 'Restaurant' },
  { icon: Car, label: 'Free Parking' },
  { icon: Baby, label: 'Kid Friendly' },
  { icon: Coffee, label: 'Breakfast Included' },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-light-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop"
                alt="Villa Exterior"
                className="rounded-2xl shadow-lg w-full h-64 object-cover mt-12"
              />
              <img
                src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1000&auto=format&fit=crop"
                alt="Villa Bedroom"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-soft-sage/20 rounded-full blur-3xl" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-forest-green font-serif text-4xl md:text-5xl font-bold mb-6">
              About Frozen Villa
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Frozen Villa is a peaceful getaway located in Embilipitiya, Sri Lanka. Surrounded by greenery and nature, the villa offers comfortable rooms, a swimming pool, delicious local food, and friendly hospitality for travelers visiting Udawalawe National Park.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100"
                >
                  <feature.icon className="w-8 h-8 text-forest-green mb-3" />
                  <span className="text-sm font-medium text-gray-700">{feature.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
