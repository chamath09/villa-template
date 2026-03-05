import { motion } from 'motion/react';

export default function Booking() {
  return (
    <section id="booking" className="py-20 relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2000&auto=format&fit=crop"
          alt="Booking Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark-green/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">
              Book Your Stay
            </h2>
            <p className="text-white/80">
              Reserve your peaceful escape at Frozen Villa today.
            </p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-white/90 text-sm font-medium">Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-soft-sage"
              />
            </div>
            <div className="space-y-2">
              <label className="text-white/90 text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-soft-sage"
              />
            </div>
            <div className="space-y-2">
              <label className="text-white/90 text-sm font-medium">Check-in</label>
              <input
                type="date"
                className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-soft-sage [color-scheme:dark]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-white/90 text-sm font-medium">Check-out</label>
              <input
                type="date"
                className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-soft-sage [color-scheme:dark]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-white/90 text-sm font-medium">Guests</label>
              <select className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-soft-sage [&>option]:text-black">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4+ Guests</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-white/90 text-sm font-medium">Room Type</label>
              <select className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-soft-sage [&>option]:text-black">
                <option>Deluxe Villa Room</option>
                <option>Family Room</option>
                <option>Garden View Room</option>
              </select>
            </div>

            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                className="w-full bg-forest-green text-white font-bold py-4 rounded-xl hover:bg-white hover:text-forest-green transition-all shadow-lg"
              >
                Check Availability
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
