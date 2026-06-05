import { useRef } from 'react';

const services = [
  {
    icon: '✂️',
    name: 'Haircut & Styling',
    description: 'Precision cuts tailored to your face shape with expert blow-dry and styling finish.',
    price: '₹200',
    badge: 'Popular',
    badgeColor: 'bg-[#C2185B]',
  },
  {
    icon: '✨',
    name: 'Facial Treatment',
    description: 'Revitalizing facials using premium organic products to rejuvenate and brighten your skin.',
    price: '₹500',
    badge: null,
  },
  {
    icon: '💆',
    name: 'Hair Spa',
    description: 'Deep conditioning spa treatment to restore moisture, shine, and manageability to your hair.',
    price: '₹1000',
    badge: 'Trending',
    badgeColor: 'bg-[#F9A825]',
  },
  {
    icon: '👑',
    name: 'Bridal Makeup',
    description: 'Stunning bridal transformations — from traditional to contemporary — for your special day.',
    price: '₹5000',
    badge: 'Premium',
    badgeColor: 'bg-gradient-to-r from-[#C2185B] to-[#F9A825]',
  },
  {
    icon: '💅',
    name: 'Manicure & Pedicure',
    description: 'Complete nail care and grooming service with gel polish options and soothing scrubs.',
    price: '₹600',
    badge: null,
  },
  {
    icon: '🎨',
    name: 'Hair Coloring',
    description: 'Expert color application using international brands — highlights, balayage, global colors.',
    price: '₹1500',
    badge: 'New',
    badgeColor: 'bg-emerald-600',
  },
  {
    icon: '🧖',
    name: 'Keratin Treatment',
    description: 'Smoothen frizzy hair and restore silky texture with professional keratin therapy.',
    price: '₹3000',
    badge: null,
  },
  {
    icon: '💇',
    name: 'Hair Threading & Waxing',
    description: 'Precise threading for eyebrows, face shaping, and full-body waxing services.',
    price: '₹150',
    badge: null,
  },
];

function AnimatedCard({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const observed = useRef(false);

  const handleRef = (el) => {
    if (!el || observed.current) return;
    ref.current = el;
    observed.current = true;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          el.classList.add('opacity-100', 'translate-y-0');
          el.classList.remove('opacity-0', 'translate-y-8');
        }, delay);
        observer.unobserve(el);
      }
    }, { threshold: 0.1 });
    observer.observe(el);
  };

  return (
    <div
      ref={handleRef}
      className={`opacity-0 translate-y-8 transition-all duration-700 ease-out ${className}`}
    >
      {children}
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#080808] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#C2185B]/6 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#F9A825]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimatedCard className="text-center mb-16">
          <span className="inline-block text-[#F9A825] font-inter text-sm font-semibold tracking-widest uppercase mb-4">What We Offer</span>
          <h2 className="section-title">Our <span className="text-gradient">Services</span></h2>
          <div className="gold-divider max-w-xs mx-auto" />
          <p className="section-subtitle">
            From everyday care to transformative experiences — we have everything you need 
            to look and feel your absolute best.
          </p>
        </AnimatedCard>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon, name, description, price, badge, badgeColor }, i) => (
            <AnimatedCard key={name} delay={i * 80}>
              <article className="glass-card p-6 service-card transition-all duration-500 group cursor-default flex flex-col h-full relative overflow-hidden">
                {/* Badge */}
                {badge && (
                  <span className={`absolute top-4 right-4 text-white text-[10px] font-inter font-bold px-2 py-1 rounded-full ${badgeColor}`}>
                    {badge}
                  </span>
                )}

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C2185B]/0 to-[#F9A825]/0 group-hover:from-[#C2185B]/5 group-hover:to-[#F9A825]/5 transition-all duration-500 rounded-2xl" />

                {/* Icon */}
                <div className="relative w-14 h-14 mb-5 bg-gradient-to-br from-[#C2185B]/20 to-[#F9A825]/20 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:from-[#C2185B]/30 group-hover:to-[#F9A825]/30 transition-all duration-300">
                  <span className="text-2xl" role="img" aria-label={name}>{icon}</span>
                </div>

                {/* Content */}
                <h3 className="font-playfair text-lg text-white font-bold mb-2 group-hover:text-[#F9A825] transition-colors duration-300">
                  {name}
                </h3>
                <p className="font-inter text-gray-400 text-sm leading-relaxed flex-grow mb-4">
                  {description}
                </p>

                {/* Price + CTA */}
                <div className="pt-4 border-t border-white/5 mt-auto flex flex-col gap-3">
                  <div className="flex items-baseline justify-between">
                    <span className="text-[10px] font-inter text-gray-500 uppercase tracking-widest">Starting from</span>
                    <span className="font-playfair text-3xl font-extrabold text-[#F9A825] drop-shadow-[0_2px_8px_rgba(249,168,37,0.15)]">{price}</span>
                  </div>
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full btn-primary text-xs py-2.5 px-4 min-h-[44px] hover:scale-102 flex items-center justify-center gap-2"
                    aria-label={`Book ${name}`}
                  >
                    <span>Book Now</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </article>
            </AnimatedCard>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedCard delay={400} className="text-center mt-12">
          <p className="text-gray-400 font-inter mb-6">
            Can't find what you're looking for? We offer customized beauty packages too!
          </p>
          <a
            href="tel:+919876543210"
            className="btn-outline inline-flex"
            id="services-call-btn"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call for Custom Packages
          </a>
        </AnimatedCard>
      </div>
    </section>
  );
}
