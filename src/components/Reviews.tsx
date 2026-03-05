import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const reviews = [
  {
    name: 'Sarah Johnson',
    rating: 5,
    text: 'Beautiful peaceful place surrounded by nature. The pool and staff were amazing. Highly recommended for a relaxing stay.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'David Chen',
    rating: 5,
    text: 'Great location near Udawalawe. The food was delicious and authentic. The rooms are spacious and very clean.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Emily Davis',
    rating: 4,
    text: 'A hidden gem! Loved the garden and the quiet atmosphere. Perfect for unwinding after a safari.',
    image: 'https://randomuser.me/api/portraits/women/68.jpg'
  },
  {
    name: 'Michael Brown',
    rating: 5,
    text: 'The hospitality was unmatched. We felt right at home. The nature walk nearby was a highlight.',
    image: 'https://randomuser.me/api/portraits/men/45.jpg'
  },
  {
    name: 'Jessica Lee',
    rating: 5,
    text: 'Absolutely stunning villa. The attention to detail in the rooms and the garden is impressive.',
    image: 'https://randomuser.me/api/portraits/women/22.jpg'
  }
];

export default function Reviews() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest-green mb-4">
            Guest Reviews
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-6 h-6 text-yellow-400 fill-current" />
            <span className="text-xl font-bold text-gray-800">4.8 / 5</span>
            <span className="text-gray-500">from 145 reviews</span>
          </div>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-12"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className="h-auto">
              <div className="bg-light-cream p-8 rounded-2xl relative h-full flex flex-col">
                {/* Quote Icon Background */}
                <div className="absolute top-4 right-6 text-6xl text-forest-green/10 font-serif">"</div>
                
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-dark-green">{review.name}</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic relative z-10 flex-grow">{review.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
