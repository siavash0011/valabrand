import { useState } from 'react';
import { motion } from 'framer-motion';
import { SiFacebook, SiX, SiInstagram, SiLinkedin, SiWhatsapp } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [formData, setFormData] = useState({ email: '', company: '' });
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState<'success' | 'error' | ''>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.company) return;

    try {
      const response = await fetch('http://localhost:1337/api/emails', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: {
            email: formData.email,
         
          },
        }),
      });

      if (!response.ok) throw new Error('Failed to submit');

      setFormData({ email: '', company: '' });
      setStatusMessage('Thanks for subscribing!');
      setStatusType('success');
    } catch (err) {
      setStatusMessage('Something went wrong. Try again.');
      setStatusType('error');
    }
  };

  return (
    <footer className="bg-background  pt-16 pb-8">
      <div className="container mx-auto lg:px-28">
        <div className="grid md:grid-cols-3  gap-8 mb-12 pt-6 border-t border-t-foreground/20">
          {/* Links and Info */}
          <div className="md:col-span-2 grid grid-cols-3   justify-items-start ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="font-bold text-foreground text-lg mb-4">لینک ها</h3>
              <ul className="space-y-2">
                <li><a href="#results" className="text-foreground/70 hover:text-foreground text-sm">نتایج</a></li>
                <li><a href="#services" className="text-foreground/70 hover:text-foreground text-sm">سرویس ها</a></li>
                <li><a href="#comparison" className="text-foreground/70 hover:text-foreground text-sm">مقایسه</a></li>
                <li><a href="#process" className="text-foreground/70 hover:text-foreground text-sm">پروسه</a></li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-bold text-foreground text-lg mb-4">بیشتر بدانید</h3>
              <ul className="space-y-2">
                <li><Link to="/#faq" className="text-foreground/70 hover:text-foreground text-sm">سوالات متداول</Link></li>
                <li><Link to="/contact-us" className="text-foreground/70 hover:text-foreground text-sm">تماس باما</Link></li>
                <li><Link to="/#services" className="text-foreground/70 hover:text-foreground text-sm">درباره ما</Link></li>
              </ul>
            </motion.div>
          </div>

          {/* Newsletter Section */}
          <div className="md:col-span-1 ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <a href="/#hero" className=" mb-4 ">
                <img
                  src="./logos/the-matrix-logo-png_seeklogo-138764-removebg-preview.png"
                  alt="Matrix Agency"
                  className="h-10 mb-4"
                />
              </a>
              <div className="mb-6 ">
                <h3 className="text-foreground font-bold text-lg mb-3">دریافت اخبار</h3>
                <p className="text-foreground/50 mb-3 text-sm">ثبت‌ نام در خبرنامه‌ی ما و اولین نفری باشید که از به‌روزرسانی‌های جدید باخبر می‌شوید. نگران نباشید، ما هم از اسپم خوشمان نمی‌آید </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <input
                      type="email"
                      id="email"
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className='form-box'/>
                    <button type="submit" className="btn">ارسال</button>
                  </div>

                  {/* Honeypot */}
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="hp"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {statusMessage && (
                    <p className={`text-sm mt-1 ${statusType === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                      {statusMessage}
                    </p>
                  )}
                </form>
              </div>
            </motion.div>
          </div>

        
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-foreground/20 pt-6 text-center text-foreground text-sm flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div>
            <p>© {new Date().getFullYear()} تمامی  حقوق برای والابرند محفوظ است</p>
          </div>
          <div className="mt-3 md:mt-0 flex gap-4">
            <a href="https://x.com" aria-label="X" className="hover:text-foreground/20 transition-colors">
              <SiX className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-foreground/20 transition-colors">
              <SiInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/siavashnajafi01"
              aria-label="LinkedIn"
              className="hover:text-foreground/20 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/+989054630123"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground/20 transition-colors"
            >
              <SiWhatsapp className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
