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

  return (
    <section id="hero" className="relative pt-32 pb-20 overflow-hidden bg-background">

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col sm:flex-row justify-center items-center mb-8 text-center sm:text-left">
  <div className="relative flex-row-reverse h-16 flex-shrink-0 flex items-center justify-center sm:mr-5 mb-4 sm:mb-0">
                {avatarImages.map((avatar, i) => (
                  <motion.div
                    key={i}
                    className="group relative z-0"
                    style={{ marginLeft: i === 0 ? 0 : -10 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.2, y: -5 }}
                    transition={{
                      opacity: { delay: 0.2 + i * 0.1 },
                      scale: { type: 'spring', stiffness: 100 },
                      y: { type: 'spring', stiffness: 100 },
                    }}
                  >
                    <img
                      src={avatar}
                      alt={`avatar-${i}`}
                      className="h-12 w-12 rounded-full  object-cover will-change-transform"
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
                        // first light up + grow, then settle
                        color: ['#555', '#facc15', '#facc15'],
                        scale: [1, 1.15, 1],
                        filter: [
                          'drop-shadow(0 0 0px #facc15)',
                          'drop-shadow(0 0 8px #facc15)',
                          'drop-shadow(0 0 2px #facc15)',
                        ],
                      }}
                      transition={{
                        delay: .5 + i * 0.2,
                        duration: 0.6,
                        times: [0, 0.5, 1],
                        ease: 'easeOut',
                      }}
                    >
                      <Star className="w-3 h-3" fill="currentColor" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-muted-foreground font-medium">همکاری با 30+ برند معتبر</p>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-relaxed">
              <span className="block text-foreground">افزایش ورودی با</span>
              <span className="block mt-5 text-transparent bg-clip-text bg-gradient-to-r from-matrix-deep via-matrix-green to-matrix-deep bg-[length:200%_100%] animate-gradient-x py-1">
               دیجیتال مارکتینگ حرفه ای
              </span>
            </h1>
            <p className="text-lg md:text-xl text-foreground mb-12">
              ویرایشگران و انیماتورهای حرفه‌ای ما به شما کمک می‌کنند ویدیوهای خیره‌کننده بسازید و سریع‌تر رشد کنید.
الان وقتشه که در دریای شباهت‌ها متفاوت دیده بشی.
            </p>
           <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link to="/#booking">
                <button className="btn !py-3 !text-lg w-full">رزرو ملاقات</button>
              </Link>
              <Link
                to="#services">
                    <button className="btn !py-3 !text-lg !bg-gray-600 w-full">بیشتر بدانید</button>
              </Link>
            </div>
          </motion.div>
          <p className="text-muted-foreground font-bold">مشتریان ما</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[300px] bg-matrix-deep opacity-80 blur-[80px] rounded" />
<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[300px] bg-matrixdeep opacity-90 blur-[80px] rounded mix-blend-multiply" />
      <LogoCarousel />
    </section>
  );
};

export default Hero;
