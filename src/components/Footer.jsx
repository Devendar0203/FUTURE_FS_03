const footerLinks = {
  'Quick Links': [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ],
  'Our Services': [
    { label: 'Haircut & Styling', href: '#services' },
    { label: 'Facial Treatment', href: '#services' },
    { label: 'Hair Spa', href: '#services' },
    { label: 'Bridal Makeup', href: '#services' },
    { label: 'Hair Coloring', href: '#services' },
    { label: 'Manicure & Pedicure', href: '#services' },
  ],
};

const socials = [
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    color: 'hover:text-pink-400',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    color: 'hover:text-blue-400',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    color: 'hover:text-red-400',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
];

const scrollTo = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5" role="contentinfo">
      {/* Top divider with gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C2185B]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C2185B] to-[#F9A825] flex items-center justify-center shadow-lg">
                <span className="text-white font-playfair font-bold text-lg">G</span>
              </div>
              <div>
                <span className="font-playfair font-bold text-xl text-white block leading-tight">Glamour Studio</span>
                <span className="text-[10px] text-[#F9A825] font-inter tracking-widest uppercase">Salon & Beauty</span>
              </div>
            </div>

            <p className="font-inter text-gray-400 text-sm leading-relaxed mb-6 italic">
              "Look Good. Feel Great. Every Day."
            </p>

            <p className="font-inter text-gray-500 text-sm leading-relaxed mb-6">
              Hyderabad's premier destination for professional beauty treatments. Trusted by thousands of happy clients since 2014.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {socials.map(({ label, href, color, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${label}`}
                  id={`footer-${label.toLowerCase()}-link`}
                  className={`w-10 h-10 glass-card flex items-center justify-center text-gray-400 ${color} hover:scale-110 transition-all duration-300`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-playfair text-white font-bold text-lg mb-6 relative">
                {title}
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-[#C2185B] to-[#F9A825]" />
              </h3>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      onClick={(e) => { e.preventDefault(); scrollTo(href); }}
                      className="font-inter text-gray-400 text-sm hover:text-[#F9A825] transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-[#C2185B]/50 rounded-full group-hover:bg-[#F9A825] transition-colors duration-300" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact mini */}
          <div>
            <h3 className="font-playfair text-white font-bold text-lg mb-6 relative">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-[#C2185B] to-[#F9A825]" />
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#F9A825] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-inter text-gray-400 text-sm">12, MG Road, Hyderabad, Telangana — 500001</span>
              </li>
              <li>
                <a href="tel:+919876543210" className="flex items-center gap-3 group">
                  <svg className="w-4 h-4 text-[#F9A825] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-inter text-gray-400 text-sm group-hover:text-[#F9A825] transition-colors">+91 98765 43210</span>
                </a>
              </li>
              <li>
                <a href="mailto:glamourstudio@gmail.com" className="flex items-center gap-3 group">
                  <svg className="w-4 h-4 text-[#F9A825] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-inter text-gray-400 text-sm group-hover:text-[#F9A825] transition-colors">glamourstudio@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#F9A825] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-inter text-gray-400 text-sm">Mon–Sat, 9:00 AM – 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-gray-600 text-sm text-center sm:text-left">
            © 2026 Glamour Studio. All Rights Reserved.
          </p>
          <div className="flex items-center gap-1">
            <span className="font-inter text-gray-600 text-xs">Made with</span>
            <span className="text-[#C2185B]">♥</span>
            <span className="font-inter text-gray-600 text-xs">in Hyderabad</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
