import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=2574&auto=format&fit=crop"
          alt="Frozen Villa Nature View"
          className="w-full h-full object-cover"
        />
        {/* Much stronger overlay for maximum text readability */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            Frozen Villa <br />
            <span className="text-2xl md:text-4xl font-normal italic block mt-4 text-white drop-shadow-lg">
              A Peaceful Nature Escape in Embilipitiya
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-100 max-w-2xl mb-10 font-medium drop-shadow-lg"
        >
          Relax in a peaceful villa surrounded by nature, comfort, and Sri Lankan hospitality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#booking"
            className="bg-forest-green text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-dark-green transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Book Your Stay
          </a>
          <a
            href="#about"
            className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white hover:text-forest-green transition-all shadow-lg"
          >
            Explore Villa
          </a>
        </motion.div>
      </div>

      {/* Floating Leaves Animation (Simplified with CSS/Motion) */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-white/70"
      >
        <ArrowDown className="w-8 h-8 animate-bounce" />
      </motion.div>
    </section>
  );
}
