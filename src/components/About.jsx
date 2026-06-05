import { useEffect, useRef } from 'react';

const highlights = [
  {
    icon: '🏆',
    title: '10+ Years Experience',
    description: 'Over a decade of crafting beautiful transformations with expertise and dedication.',
  },
  {
    icon: '💖',
    title: '5,000+ Happy Clients',
    description: 'Thousands of satisfied customers who return to us again and again for their beauty needs.',
  },
  {
    icon: '✨',
    title: 'Expert Team',
    description: 'Certified beauty professionals trained in the latest techniques from across India.',
  },
];

function useIntersectionObserver(ref, options = {}) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('opacity-100', 'translate-y-0');
        el.classList.remove('opacity-0', 'translate-y-8');
        observer.unobserve(el);
      }
    }, { threshold: 0.1, ...options });
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
}

function AnimatedSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  useIntersectionObserver(ref);
  return (
    <div
      ref={ref}
      className={`opacity-0 translate-y-8 transition-all duration-700 ease-out ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C2185B]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#F9A825]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-[#F9A825] font-inter text-sm font-semibold tracking-widest uppercase mb-4">Our Story</span>
          <h2 className="section-title">About <span className="text-gradient">Glamour Studio</span></h2>
          <div className="gold-divider max-w-xs mx-auto" />
          <p className="section-subtitle">
            Where beauty meets artistry, and every visit is a transformative experience.
          </p>
        </AnimatedSection>

        {/* Story + Owner */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text content */}
          <AnimatedSection delay={100}>
            <div className="space-y-6">
              <p className="font-inter text-gray-300 text-lg leading-relaxed">
                Founded in 2014 by beauty enthusiast <strong className="text-[#F9A825]">Priya Sharma</strong>, 
                Glamour Studio was born from a simple belief — every person deserves to feel extraordinary. 
                What started as a humble parlour on MG Road has grown into Hyderabad's most sought-after 
                salon destination, serving clients from all walks of life.
              </p>
              <p className="font-inter text-gray-400 leading-relaxed">
                Our philosophy is rooted in personalized care. We take the time to understand your unique 
                style, hair type, and skin needs before crafting a beauty experience tailored just for you. 
                From everyday grooming to once-in-a-lifetime bridal transformations, we bring the same 
                passion and precision to every appointment.
              </p>
              <p className="font-inter text-gray-400 leading-relaxed">
                Glamour Studio is more than a salon — it's a sanctuary. Step through our doors and let 
                our team of certified artists take you on a journey of self-care, confidence, and beauty 
                that radiates from within. Because when you look good, you feel unstoppable.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary"
                  id="about-services-btn"
                >
                  Explore Our Services
                </button>
              </div>
            </div>
          </AnimatedSection>

          {/* Owner card */}
          <AnimatedSection delay={200}>
            <div className="glass-card p-8 relative">
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-[#C2185B] to-[#F9A825] rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#F9A825]/50 rounded-full" />

              {/* Owner image placeholder */}
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-[#C2185B] to-[#F9A825] flex items-center justify-center flex-shrink-0 shadow-2xl">
                  <span className="text-5xl">👩</span>
                </div>
                <div>
                  <h3 className="font-playfair text-2xl text-white font-bold mb-1">Priya Sharma</h3>
                  <p className="text-[#F9A825] text-sm font-inter font-semibold mb-3 tracking-wide">Founder & Lead Artist</p>
                  <p className="text-gray-400 font-inter text-sm leading-relaxed">
                    With over 10 years in the beauty industry and international certifications from Mumbai 
                    and Dubai, Priya brings global expertise and a personal touch to every client interaction.
                  </p>
                </div>
              </div>

              <div className="gold-divider mt-6 mb-4" />

              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { value: '10+', label: 'Years' },
                  { value: '10,000+', label: 'Sessions' },
                  { value: '4.9★', label: 'Rating' },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <div className="font-playfair font-bold text-xl text-gradient">{value}</div>
                    <div className="text-gray-500 text-xs font-inter">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map(({ icon, title, description }, i) => (
            <AnimatedSection key={title} delay={i * 150}>
              <article className="glass-card p-8 text-center service-card transition-all duration-500 cursor-default group">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#C2185B]/20 to-[#F9A825]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl" role="img" aria-label={title}>{icon}</span>
                </div>
                <h3 className="font-playfair text-xl text-white font-bold mb-3">{title}</h3>
                <p className="font-inter text-gray-400 text-sm leading-relaxed">{description}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
