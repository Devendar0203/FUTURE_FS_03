import { useState } from 'react';

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'glamourstudio@gmail.com',
    href: 'mailto:glamourstudio@gmail.com',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Address',
    value: '12, MG Road, Hyderabad, Telangana — 500001',
    href: 'https://maps.google.com/?q=MG+Road+Hyderabad',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Working Hours',
    value: 'Mon–Sat, 9:00 AM – 8:00 PM',
    href: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email is required';
    if (!form.phone.trim() || form.phone.length < 10) e.phone = 'Valid phone number is required';
    if (!form.message) e.message = 'Please select a service';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: '', email: '', phone: '', message: '' });
    }, 1500);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#C2185B]/30 to-transparent" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#C2185B]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-[#F9A825]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#F9A825] font-inter text-sm font-semibold tracking-widest uppercase mb-4">Get In Touch</span>
          <h2 className="section-title">Book Your <span className="text-gradient">Appointment</span></h2>
          <div className="gold-divider max-w-xs mx-auto" />
          <p className="section-subtitle">
            Ready to look your best? Fill in the form below and we'll confirm your appointment within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="glass-card p-8">
            <h3 className="font-playfair text-2xl text-white font-bold mb-6">Send Us a Message</h3>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gradient-to-br from-[#C2185B] to-[#F9A825] rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-playfair text-2xl text-white font-bold mb-3">Booking Confirmed! 🎉</h4>
                <p className="text-gray-400 font-inter">Thank you! We'll reach out within 24 hours to confirm your appointment.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline mt-6"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Appointment booking form">
                <div className="space-y-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block font-inter text-sm text-gray-400 mb-2">
                      Full Name <span className="text-[#C2185B]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={`form-input ${errors.name ? 'border-red-500 focus:border-red-500' : ''}`}
                      aria-required="true"
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && <p className="mt-1 text-red-400 text-xs font-inter">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block font-inter text-sm text-gray-400 mb-2">
                      Email Address <span className="text-[#C2185B]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                      aria-required="true"
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <p className="mt-1 text-red-400 text-xs font-inter">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="contact-phone" className="block font-inter text-sm text-gray-400 mb-2">
                      Phone Number <span className="text-[#C2185B]">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className={`form-input ${errors.phone ? 'border-red-500' : ''}`}
                      aria-required="true"
                      aria-invalid={!!errors.phone}
                    />
                    {errors.phone && <p className="mt-1 text-red-400 text-xs font-inter">{errors.phone}</p>}
                  </div>

                  {/* Service Required Dropdown */}
                  <div>
                    <label htmlFor="contact-service" className="block font-inter text-sm text-gray-400 mb-2">
                      Service Required <span className="text-[#C2185B]">*</span>
                    </label>
                    <select
                      id="contact-service"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      className={`form-input appearance-none bg-no-repeat ${errors.message ? 'border-red-500' : ''}`}
                      style={{
                        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`,
                        backgroundPosition: 'right 16px center',
                        backgroundSize: '16px',
                        paddingRight: '40px',
                      }}
                      aria-required="true"
                      aria-invalid={!!errors.message}
                    >
                      <option value="" className="bg-[#0a0a0a] text-gray-500">Select a service...</option>
                      <option value="Haircut & Styling" className="bg-[#0a0a0a] text-white">Haircut & Styling — ₹200</option>
                      <option value="Facial Treatment" className="bg-[#0a0a0a] text-white">Facial Treatment — ₹500</option>
                      <option value="Hair Spa" className="bg-[#0a0a0a] text-white">Hair Spa — ₹1000</option>
                      <option value="Bridal Makeup" className="bg-[#0a0a0a] text-white">Bridal Makeup — ₹5000</option>
                      <option value="Manicure & Pedicure" className="bg-[#0a0a0a] text-white">Manicure & Pedicure — ₹600</option>
                      <option value="Hair Coloring" className="bg-[#0a0a0a] text-white">Hair Coloring — ₹1500</option>
                      <option value="Keratin Treatment" className="bg-[#0a0a0a] text-white">Keratin Treatment — ₹3000</option>
                      <option value="Custom Packages / Other" className="bg-[#0a0a0a] text-white">Custom Packages / Other</option>
                    </select>
                    {errors.message && <p className="mt-1 text-red-400 text-xs font-inter">{errors.message}</p>}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    id="contact-submit-btn"
                    disabled={loading}
                    className="btn-primary w-full text-base"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right sidebar */}
          <div className="space-y-6">
            {/* Contact info */}
            <div className="glass-card p-8">
              <h3 className="font-playfair text-2xl text-white font-bold mb-6">Visit Us</h3>
              <ul className="space-y-5">
                {contactInfo.map(({ icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#C2185B]/20 to-[#F9A825]/20 rounded-xl flex items-center justify-center text-[#F9A825] flex-shrink-0">
                      {icon}
                    </div>
                    <div>
                      <p className="font-inter text-gray-500 text-xs uppercase tracking-wider mb-1">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="font-inter text-gray-200 text-sm hover:text-[#F9A825] transition-colors duration-200"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="font-inter text-gray-200 text-sm">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Google Maps embed */}
            <div className="glass-card overflow-hidden">
              <div className="p-4 border-b border-white/10">
                <h3 className="font-playfair text-lg text-white font-bold flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#F9A825]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Find Us on Map
                </h3>
              </div>
              <iframe
                title="Glamour Studio Location — MG Road, Hyderabad"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5264975823!2d78.47340731487623!3d17.44648408804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c0a80d2e11%3A0x5e0c1d45b9e82d85!2sMG%20Road%2C%20Secunderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1617099376523!5m2!1sen!2sin"
                width="100%"
                height="240"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Google Maps showing Glamour Studio location on MG Road, Hyderabad"
              />
            </div>

            {/* Quick actions */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="tel:+919876543210"
                id="contact-call-link"
                className="glass-card p-4 flex flex-col items-center gap-2 hover:border-[#C2185B]/50 hover:scale-105 transition-all duration-300 text-center"
              >
                <div className="w-10 h-10 bg-[#C2185B]/20 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#C2185B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="font-inter text-white text-sm font-medium">Call Now</span>
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                id="contact-whatsapp-link"
                className="glass-card p-4 flex flex-col items-center gap-2 hover:border-emerald-500/50 hover:scale-105 transition-all duration-300 text-center"
              >
                <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <span className="font-inter text-white text-sm font-medium">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
