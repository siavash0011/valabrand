import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function ContactUs() {
  const [formData, setFormData] = useState({
    phone: '',
    firstName: '',
    email: '',
    message: '',
    company: '',  // honeypot
  });

  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState<'success' | 'error' | ''>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // if honeypot is filled, abort
    if (formData.company) return;

    // exclude 'company' from the payload we send
    const { company, ...cleanData } = formData;

    try {
      const response = await fetch('http://localhost:1337/api/forms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: cleanData }),
      });

      const result = await response.json();
      if (!response.ok) {
        console.error('Strapi error:', result);
        throw new Error(result.error?.message || 'Submission failed');
      }

      setFormData({
        phone: '',
        firstName: '',
        email: '',
        message: '',
        company: '',
      });
      setStatusMessage('Thank you! Your form was submitted.');
      setStatusType('success');
      setTimeout(() => setStatusMessage(''), 5000);
    } catch {
      setStatusMessage('There was a problem submitting the form.');
      setStatusType('error');
    }
  };

  return (
    <div className="bg-matrix-green dark:bg-matrix-bg bg-background text-foreground dark:text-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 rtl">
        <div className="flex justify-center mb-6">
          <Link to="/" className="flex">
            <img
              src="valabrand/logos/the-matrix-logo-png_seeklogo-138764-removebg-preview.png"
              alt="matrix"
              className="h-12 mb-20"
            />
          </Link>
        </div>

        <motion.h2
          className="text-5xl font-semibold tracking-tight sm:text-7xl text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
           <span className="text-gr">باما </span>کار کنید 
        </motion.h2>

        <motion.p
          className="mt-8 text-lg font-medium text-pretty dark:text-gray-300 text-muted-foreground sm:text-xl/8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
دنبال رشد کسب‌وکارتان در فضای دیجیتال هستید؟ با ما تماس بگیرید تا حضورتان در دنیای آنلاین را متحول کنیم.

        </motion.p>

        <div className="relative mt-16 w-full md:max-w-lg mx-auto z-10">
          <div className="absolute -top-60 left-1/2 -translate-x-1/2 w-[200px] h-[400px] bg-matrix-glow dark:opacity-40 blur-[120px] rounded pointer-events-none z-0" />

          <motion.form
            onSubmit={handleSubmit}
            className="relative z-10 space-y-6 backdrop-blur-sm"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium">شماره تلفن</label>
              <input
                id="phone"
                type="text"
                placeholder="09054630123"
                pattern="^\+?[0-9]{10,15}$"
                value={formData.phone}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-3 px-4 bg-transparent backdrop-blur-sm shadow-sm ring-1 ring-inset ring-foreground/10 focus:ring-2 focus:ring-inset focus:ring-matrix-glow sm:text-sm"
              />
            </div>

            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium">نام و نام خانوادگی</label>
              <input
                id="firstName"
                type="text"
                placeholder="سیاوش"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-3 px-4 bg-transparent backdrop-blur-sm shadow-sm ring-1 ring-inset ring-foreground/10 focus:ring-2 focus:ring-inset focus:ring-matrix-glow sm:text-sm"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium">ایمیل</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-3 px-4 bg-transparent backdrop-blur-sm shadow-sm ring-1 ring-inset ring-foreground/10 focus:ring-2 focus:ring-inset focus:ring-matrix-glow sm:text-sm"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium">پیام</label>
              <textarea
                id="message"
                rows={4}
                placeholder="پیام خود را بنویسید ..."
                value={formData.message}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-3 px-4 bg-transparent backdrop-blur-sm shadow-sm ring-1 ring-inset ring-foreground/10 focus:ring-2 focus:ring-inset focus:ring-matrix-glow sm:text-sm"
              />
            </div>

            {/* Honeypot (hidden) */}
            <input
              type="text"
              name="company"
              id="company"
              autoComplete="off"
              value={formData.company}
              onChange={handleChange}
              className="absolute opacity-0 -z-10 h-0 w-0 overflow-hidden"
              tabIndex={-1}
              aria-hidden="true"
            />

            <button
              type="submit"
              className="w-full rounded-md px-3.5 py-2.5 text-sm font-semibold text-white bg-matrix-deep hover:bg-matrix-glow transition-all duration-300 shadow-[0_0_15px_rgba(26,255,102,0.15)]"
            >
              ارسال
            </button>

            {statusMessage && (
              <p className={`text-center text-sm ${statusType === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                {statusMessage}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
