import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import LogoCarousel from './LogoCarousel';
import { Link } from 'react-router-dom';

const Hero = () => {
  const avatarImages = [
    './logos/Famous-Steve-Jobs-Picture-by-Albert-Watson-Now-in-Color-2.jpg',
    './logos/images.jpg',
    './logos/images (1).jpg',
    './logos/WhatsApp Image 2025-01-08 at 18.05.56 (2).jpeg',
  ];

  // تنظیمات تاخیر — این‌ها رو کم/زیاد کن
  const HEADER_BASE_DELAY = 0.12; // تاخیر برای خط اول هدر (کم)
  const HEADER_SECOND_LINE_DELAY = 0.22; // تاخیر برای خط دوم هدر (کمی بعد)
  const PARAGRAPH_DELAY = 0.36; // تاخیر برای پاراگراف (بعد از هدر)

  return (
    <section id="hero" className="relative pt-32 pb-20 overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div className="flex flex-col sm:flex-row justify-center items-center mb-8 text-center sm:text-left">
              <div className="relative flex-row-reverse h-16 flex-shrink-0 flex items-center justify-center sm:mr-5 mb-4 sm:mb-0">
                {avatarImages.map((avatar, i) => (
                  <motion.div
                    key={i}
                    className="group relative z-0"
                    style={{ marginLeft: i === 0 ? 0 : -10 }}
                    initial={{ opacity: 0, scale: 0.86 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.12, y: -5 }}
                    transition={{
                      opacity: { delay: 0.12 + i * 0.06 },
                      scale: { type: 'spring', stiffness: 120 },
                      y: { type: 'spring', stiffness: 120 },
                    }}
                  >
                    <img
                      src={avatar}
                      alt={`avatar-${i}`}
                      className="h-12 w-12 rounded-full object-cover will-change-transform"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Stars + Text */}
              <div className="text-center sm:text-left flex flex-col items-center sm:items-start mr-2">
                <div className="flex items-center gap-1 mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{
                        color: '#555',
                        scale: 1,
                        filter: 'drop-shadow(0 0 0px #facc15)',
                      }}
                      animate={{
                        color: ['#555', '#facc15', '#facc15'],
                        scale: [1, 1.12, 1],
                        filter: [
                          'drop-shadow(0 0 0px #facc15)',
                          'drop-shadow(0 0 6px #facc15)',
                          'drop-shadow(0 0 2px #facc15)',
                        ],
                      }}
                      transition={{
                        delay: 0.15 + i * 0.10,
                        duration: 0.55,
                        times: [0, 0.5, 1],
                        ease: 'easeOut',
                      }}
                    >
                      <Star className="w-3 h-3" fill="currentColor" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-muted-foreground font-medium">همکاری با 20+ برند معتبر</p>
              </div>
            </div>

            {/* هدر — هر خط با تاخیر کوتاه ظاهر می‌شود */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-relaxed">
              <motion.span
                className="block text-foreground"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: HEADER_BASE_DELAY, duration: 0.38, ease: 'easeOut' }}
              >
                افزایش ورودی با
              </motion.span>

              <motion.span
                className="block mt-5 text-transparent bg-clip-text bg-gradient-to-r from-matrix-deep via-matrix-green to-matrix-deep bg-[length:200%_100%] animate-gradient-x py-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: HEADER_SECOND_LINE_DELAY, duration: 0.42, ease: 'easeOut' }}
              >
                دیجیتال مارکتینگ حرفه ای
              </motion.span>
            </h1>

            {/* پاراگراف با تاخیر کمتر ظاهر می‌شود */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: PARAGRAPH_DELAY, duration: 0.45, ease: 'easeOut' }}
              className="text-lg md:text-xl text-foreground mb-12"
            >
              ویرایشگران و انیماتورهای حرفه‌ای ما به شما کمک می‌کنند ویدیوهای خیره‌کننده بسازید و سریع‌تر رشد کنید.
              <br />
              الان وقتشه که در دریای شباهت‌ها متفاوت دیده بشی.
            </motion.p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link to="/#booking">
                <button className="btn !py-3 !text-lg w-full">رزرو ملاقات</button>
              </Link>
              <Link to="#services">
                <button className="btn !py-3 !text-lg !bg-gray-600 w-full">بیشتر بدانید</button>
              </Link>
            </div>
          </motion.div>

          <p className="text-muted-foreground font-bold">مشتریان ما</p>
        </div>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] bg-matrix-deep opacity-100 blur-[100px] rounded" />
      <LogoCarousel />
    </section>
  );
};

export default Hero;
