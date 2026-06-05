import { useEffect, useRef } from 'react';

export default function Hero() {
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const items = [headlineRef.current, subRef.current, ctaRef.current];
    items.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      setTimeout(() => {
        el.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 300 + i * 200);
    });
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 hero-overlay" />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#C2185B]/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#F9A825]/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C2185B]/5 rounded-full blur-3xl" />

      {/* Decorative particles */}
      <div className="absolute top-20 right-1/4 w-2 h-2 bg-[#F9A825] rounded-full particle" style={{ animationDelay: '0s' }} />
      <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-[#C2185B] rounded-full particle" style={{ animationDelay: '0.7s' }} />
      <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-[#F9A825] rounded-full particle" style={{ animationDelay: '1.4s' }} />
      <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-white/40 rounded-full particle" style={{ animationDelay: '2.1s' }} />

      {/* Decorative scissors icon */}
      <div className="absolute top-32 right-16 opacity-10 text-[#F9A825] text-8xl select-none hidden lg:block animate-float">✂️</div>
      <div className="absolute bottom-32 left-16 opacity-10 text-[#C2185B] text-7xl select-none hidden lg:block animate-float" style={{ animationDelay: '1s' }}>💄</div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#F9A825]/30 bg-[#F9A825]/10 mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 bg-[#F9A825] rounded-full animate-pulse" />
          <span className="text-[#F9A825] text-xs font-inter font-semibold tracking-widest uppercase">Hyderabad's Premium Salon</span>
        </div>

        {/* Main headline */}
        <div ref={headlineRef}>
          <h1 className="font-playfair font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-tight mb-4">
            <span className="block">Transform</span>
            <span className="block text-gradient">Your Beauty</span>
          </h1>
        </div>

        {/* Tagline */}
        <div ref={subRef}>
          <p className="font-inter text-lg sm:text-xl md:text-2xl text-gradient mb-4 font-semibold tracking-wide">
            Look Good • Feel Great • Every Day
          </p>
          <p className="font-inter text-base text-gray-400 max-w-xl mx-auto mb-10">
            Experience world-class hair, skin, and beauty treatments at Glamour Studio — 
            Hyderabad's most trusted destination for elegance and style.
          </p>
        </div>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <button
            id="hero-book-btn"
            onClick={() => scrollTo('contact')}
            className="btn-primary text-base px-10 py-4 w-full sm:w-auto"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book Appointment
          </button>
          <a
            id="hero-call-btn"
            href="tel:+919876543210"
            className="btn-outline text-base px-10 py-4 w-full sm:w-auto"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now
          </a>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto">
          {[
            { value: '10+', label: 'Years Experience' },
            { value: '5,000+', label: 'Happy Clients' },
            { value: '15+', label: 'Expert Artists' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="font-playfair font-bold text-2xl sm:text-3xl text-gradient">{value}</div>
              <div className="font-inter text-xs sm:text-sm text-gray-400 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-gray-500 text-xs font-inter tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 border-2 border-gray-600 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-[#F9A825] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
