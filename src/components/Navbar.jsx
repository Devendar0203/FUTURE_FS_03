import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Highlight active section
      const sections = ['home', 'about', 'services', 'gallery', 'testimonials', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(194,24,91,0.2)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          className="flex items-center gap-3 group"
          aria-label="Glamour Studio Home"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C2185B] to-[#F9A825] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <span className="text-white font-playfair font-bold text-lg">G</span>
          </div>
          <div>
            <span className="font-playfair font-bold text-xl text-white block leading-tight">Glamour Studio</span>
            <span className="text-[10px] text-[#F9A825] font-inter tracking-widest uppercase">Salon & Beauty</span>
          </div>
        </a>

        {/* Desktop Nav Links & CTA */}
        <div className="hidden lg:flex items-center gap-12">
          <ul className="flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                  className={`relative font-inter font-medium text-sm tracking-wide transition-colors duration-300 py-1 group ${
                    activeSection === href.replace('#', '')
                      ? 'text-[#F9A825]'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#C2185B] to-[#F9A825] transition-all duration-300 ${
                    activeSection === href.replace('#', '') ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            className="inline-flex btn-primary text-sm px-6 py-2.5"
            id="navbar-book-btn"
          >
            Book Appointment
          </a>
        </div>

        {/* Hamburger (mobile) */}
        <button
          id="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5 rounded-lg border border-white/10 hover:border-[#C2185B]/50 transition-colors duration-300"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-500 overflow-hidden ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-black/95 backdrop-blur-xl border-t border-white/10 px-4 py-6">
          <ul className="flex flex-col gap-4">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                  className={`block font-inter font-medium text-base py-2 px-4 rounded-xl transition-all duration-300 ${
                    activeSection === href.replace('#', '')
                      ? 'text-[#F9A825] bg-white/5'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                className="btn-primary w-full text-center text-sm mt-2"
              >
                Book Appointment
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
