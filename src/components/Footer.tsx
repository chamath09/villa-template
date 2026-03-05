import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-green text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Frozen Villa</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              A peaceful nature escape in Embilipitiya. Experience the perfect blend of comfort and nature.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#rooms" className="hover:text-white transition-colors">Rooms</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Ratnapura Road, Embilipitiya</li>
              <li>+94 77 713 7041</li>
              <li>info@frozenvilla.com</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-white/70 text-sm mb-4">Subscribe for offers and updates.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-white w-full"
              />
              <button className="bg-forest-green px-4 py-2 rounded-lg text-sm font-medium hover:bg-white hover:text-forest-green transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Frozen Villa. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-white/70 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="text-white/70 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-white/70 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
