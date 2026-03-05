import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const rooms = [
  {
    id: 1,
    title: 'Deluxe Villa Room',
    description: 'Spacious room with a king-size bed and private balcony overlooking the garden.',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1000&auto=format&fit=crop',
    amenities: ['King Bed', 'Balcony', 'AC', 'Ensuite Bath'],
    price: '$80 / night'
  },
  {
    id: 2,
    title: 'Family Room',
    description: 'Perfect for families, featuring two queen beds and ample living space.',
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=1000&auto=format&fit=crop',
    amenities: ['2 Queen Beds', 'Living Area', 'AC', 'Mini Fridge'],
    price: '$120 / night'
  },
  {
    id: 3,
    title: 'Garden View Room',
    description: 'Cozy room with direct access to our lush tropical gardens.',
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1000&auto=format&fit=crop',
    amenities: ['Queen Bed', 'Garden Access', 'AC', 'Work Desk'],
    price: '$65 / night'
  }
];

export default function Rooms() {
  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest-green mb-4">
            Rooms & Villa Stay
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience comfort and tranquility in our thoughtfully designed rooms, blending modern amenities with natural charm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif font-bold text-dark-green">{room.title}</h3>
                  <span className="text-forest-green font-semibold">{room.price}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4 flex-1">{room.description}</p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map((amenity, idx) => (
                      <span key={idx} className="text-xs bg-soft-sage/20 text-dark-green px-2 py-1 rounded-md">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-forest-green text-white py-3 rounded-xl font-medium hover:bg-dark-green transition-colors flex items-center justify-center gap-2 group-hover:gap-3">
                  Book Now <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
