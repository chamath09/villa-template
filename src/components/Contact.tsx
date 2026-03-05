import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-light-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-serif font-bold text-forest-green mb-6">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-8">
              Have questions? Reach out to us directly or visit us in Embilipitiya.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-forest-green">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-dark-green">Address</h4>
                  <p className="text-gray-600">
                    Frozen Villa, Ratnapura Road,<br />
                    Embilipitiya 70200, Sri Lanka
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-forest-green">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-dark-green">Phone</h4>
                  <p className="text-gray-600">+94 77 713 7041</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-forest-green">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-dark-green">Email</h4>
                  <p className="text-gray-600">info@frozenvilla.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-80 lg:h-full min-h-[300px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63435.78762283685!2d80.8200!3d6.3300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae408ff84b55555%3A0x7f47144061680000!2sEmbilipitiya!5e0!3m2!1sen!2slk!4v1600000000000!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
