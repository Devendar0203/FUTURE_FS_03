import { useState, useRef } from 'react';

const galleryItems = [
  {
    label: 'Bridal Look',
    emoji: '👰',
    gradient: 'from-rose-900 via-pink-800 to-rose-700',
    span: 'row-span-2',
    description: 'Timeless bridal transformations',
  },
  {
    label: 'Hair Color',
    emoji: '🎨',
    gradient: 'from-amber-900 via-yellow-700 to-amber-600',
    span: '',
    description: 'Vibrant balayage & highlights',
  },
  {
    label: 'Facial Glow',
    emoji: '✨',
    gradient: 'from-purple-900 via-pink-700 to-rose-600',
    span: '',
    description: 'Radiant skin treatments',
  },
  {
    label: 'Hair Spa',
    emoji: '💆',
    gradient: 'from-teal-900 via-emerald-700 to-teal-600',
    span: '',
    description: 'Deep conditioning therapy',
  },
  {
    label: 'Nail Art',
    emoji: '💅',
    gradient: 'from-pink-900 via-rose-700 to-pink-600',
    span: 'row-span-2',
    description: 'Creative nail designs',
  },
  {
    label: 'Hair Styling',
    emoji: '✂️',
    gradient: 'from-indigo-900 via-purple-700 to-indigo-600',
    span: '',
    description: 'Expert cuts & styling',
  },
  {
    label: 'Keratin Glow',
    emoji: '💫',
    gradient: 'from-orange-900 via-amber-700 to-orange-600',
    span: '',
    description: 'Silky smooth hair therapy',
  },
  {
    label: 'Makeup Artistry',
    emoji: '💄',
    gradient: 'from-red-900 via-rose-700 to-red-600',
    span: '',
    description: 'Party-ready glamour looks',
  },
];

function GalleryCard({ label, emoji, gradient, span, description, index }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const observed = useRef(false);

  const handleRef = (el) => {
    if (!el || observed.current) return;
    ref.current = el;
    observed.current = true;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          el.classList.add('opacity-100', 'scale-100');
          el.classList.remove('opacity-0', 'scale-95');
        }, index * 100);
        observer.unobserve(el);
      }
    }, { threshold: 0.1 });
    observer.observe(el);
  };

  return (
    <div
      ref={handleRef}
      className={`gallery-item relative overflow-hidden rounded-2xl cursor-pointer opacity-0 scale-95 transition-all duration-700 ease-out ${span} min-h-[200px]`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image placeholder as gradient with SEO alt */}
      <img
        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        alt={`${label} - ${description} at Glamour Studio Hyderabad`}
        className={`absolute inset-0 w-full h-full bg-gradient-to-br ${gradient} transition-transform duration-500 ${hovered ? 'scale-110' : 'scale-100'}`}
      />

      {/* Emoji overlay */}
      <div className={`absolute inset-0 flex items-center justify-center text-8xl transition-all duration-500 ${hovered ? 'opacity-20 scale-125' : 'opacity-30 scale-100'}`}>
        {emoji}
      </div>

      {/* Overlay */}
      <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`} />

      {/* Content */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center p-4 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <span className="font-playfair text-white text-xl font-bold text-center mb-2">{label}</span>
        <span className="font-inter text-gray-300 text-sm text-center">{description}</span>
        <div className="mt-3 w-8 h-0.5 bg-gradient-to-r from-[#C2185B] to-[#F9A825]" />
      </div>

      {/* Bottom label (always visible) */}
      <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 ${hovered ? 'opacity-0' : 'opacity-100'}`}>
        <h3 className="font-playfair text-white text-base font-semibold">{label}</h3>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#C2185B]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#F9A825] font-inter text-sm font-semibold tracking-widest uppercase mb-4">Our Work</span>
          <h2 className="section-title">Beauty <span className="text-gradient">Gallery</span></h2>
          <div className="gold-divider max-w-xs mx-auto" />
          <p className="section-subtitle">
            A glimpse into the transformations we create every day — each look a testament 
            to our passion for beauty and artistry.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4">
          {galleryItems.map((item, i) => (
            <GalleryCard key={item.label} {...item} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 font-inter mb-6">
            Follow us on Instagram for daily beauty inspiration
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            id="gallery-instagram-btn"
            className="btn-primary inline-flex"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Follow @GlamourStudioHyd
          </a>
        </div>
      </div>
    </section>
  );
}
