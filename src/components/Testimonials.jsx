import { useState, useRef, useEffect } from 'react';

const testimonials = [
  {
    name: 'Anjali Reddy',
    location: 'Banjara Hills, Hyderabad',
    rating: 5,
    review:
      'Glamour Studio completely transformed my look for my sister\'s wedding! The bridal makeup was absolutely stunning — exactly what I had envisioned. The team was professional, warm, and made me feel like a queen. I\'ve found my go-to salon!',
    service: 'Bridal Makeup',
    avatar: '👩',
    color: 'from-rose-600 to-pink-700',
  },
  {
    name: 'Meera Krishnan',
    location: 'Jubilee Hills, Hyderabad',
    rating: 5,
    review:
      'I\'ve been a loyal client for 3 years and Glamour Studio never disappoints! My hair spa sessions have completely revived my damaged hair. The staff is always attentive to my needs and the atmosphere is so relaxing. Highly recommend!',
    service: 'Hair Spa',
    avatar: '👩‍🦱',
    color: 'from-amber-600 to-yellow-700',
  },
  {
    name: 'Pooja Nair',
    location: 'Madhapur, Hyderabad',
    rating: 5,
    review:
      'The balayage treatment I got was absolutely gorgeous! Priya understood exactly what I wanted and delivered beyond my expectations. The colour lasted for months and everyone kept complimenting me. Worth every penny!',
    service: 'Hair Coloring',
    avatar: '👩‍🦰',
    color: 'from-purple-600 to-indigo-700',
  },
  {
    name: 'Divya Sharma',
    location: 'Kukatpally, Hyderabad',
    rating: 5,
    review:
      'Best facial I\'ve ever had! My skin was glowing for weeks after the treatment. The products they use are premium quality and the therapist explained every step. Glamour Studio is the definition of luxury at an affordable price.',
    service: 'Facial Treatment',
    avatar: '🧖‍♀️',
    color: 'from-teal-600 to-emerald-700',
  },
  {
    name: 'Sravani Patel',
    location: 'Gachibowli, Hyderabad',
    rating: 5,
    review:
      'I came in for a simple haircut and left feeling like a completely new person! The stylist was incredibly skilled — she suggested a cut that perfectly suits my face shape. The salon is clean, elegant, and the team is so friendly!',
    service: 'Haircut & Styling',
    avatar: '💁‍♀️',
    color: 'from-rose-700 to-red-700',
  },
  {
    name: 'Kavitha Rao',
    location: 'Kondapur, Hyderabad',
    rating: 5,
    review:
      'My manicure and pedicure were absolutely perfect! The nail artist was so creative and the nail art she designed was unique and beautiful. The whole experience was relaxing and pampering. This is my new monthly ritual!',
    service: 'Manicure & Pedicure',
    avatar: '👩‍🎨',
    color: 'from-pink-600 to-rose-700',
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-[#F9A825]' : 'text-gray-600'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef(null);

  const goTo = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const next = () => goTo((current + 1) % testimonials.length);
  const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    intervalRef.current = setInterval(next, 5000);
    return () => clearInterval(intervalRef.current);
  }, [current]);

  return (
    <section id="testimonials" className="py-24 bg-[#080808] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#F9A825]/20 to-transparent" />
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-[#C2185B]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-[#F9A825]/5 rounded-full blur-3xl" />

      {/* Large quote mark */}
      <div className="absolute top-16 left-8 text-[200px] text-white/3 font-playfair leading-none select-none hidden lg:block">"</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#F9A825] font-inter text-sm font-semibold tracking-widest uppercase mb-4">Testimonials</span>
          <h2 className="section-title">What Our <span className="text-gradient">Clients Say</span></h2>
          <div className="gold-divider max-w-xs mx-auto" />
          <p className="section-subtitle">
            Real stories from real clients who trusted us with their beauty journey.
          </p>
        </div>

        {/* Main carousel */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="glass-card p-8 md:p-12">
            {/* Quote icon */}
            <div className="w-12 h-12 mb-6 bg-gradient-to-br from-[#C2185B] to-[#F9A825] rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${testimonials[current].color} flex items-center justify-center text-4xl shadow-xl transition-transform duration-500 ${isAnimating ? 'scale-90 rotate-6' : 'scale-100'}`}>
                  {testimonials[current].avatar}
                </div>
              </div>

              {/* Content */}
              <div className={`flex-grow transition-all duration-500 ${isAnimating ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
                <StarRating rating={testimonials[current].rating} />
                <blockquote className="font-inter text-gray-200 text-lg leading-relaxed mt-4 mb-6 italic min-h-[140px] md:min-h-[100px]">
                  "{testimonials[current].review}"
                </blockquote>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="font-playfair font-bold text-white text-xl">{testimonials[current].name}</p>
                    <p className="font-inter text-gray-500 text-sm">{testimonials[current].location}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C2185B]/20 border border-[#C2185B]/30">
                    <span className="w-1.5 h-1.5 bg-[#C2185B] rounded-full" />
                    <span className="text-[#F9A825] text-sm font-inter font-medium">{testimonials[current].service}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            type="button"
            onClick={prev}
            id="testimonial-prev-btn"
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 glass-card flex items-center justify-center hover:border-[#C2185B]/50 hover:scale-110 transition-all duration-300 min-h-[44px]"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            id="testimonial-next-btn"
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 glass-card flex items-center justify-center hover:border-[#C2185B]/50 hover:scale-110 transition-all duration-300 min-h-[44px]"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mb-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? 'w-8 h-2.5 bg-gradient-to-r from-[#C2185B] to-[#F9A825]'
                  : 'w-2.5 h-2.5 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Mini testimonial cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {testimonials.map(({ name, rating, avatar, color }, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              id={`testimonial-card-${i}`}
              className={`glass-card p-4 text-left transition-all duration-300 ${
                i === current
                  ? 'border-[#C2185B]/50 scale-105'
                  : 'hover:border-white/20 hover:scale-102'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-lg flex-shrink-0`}>
                  {avatar}
                </div>
                <div>
                  <p className="font-inter text-white text-sm font-semibold">{name.split(' ')[0]}</p>
                  <StarRating rating={rating} />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
