import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  content: string;
  author: string;
  role: string;
  company?: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    content:
      "سیاوش و تیمش فوق‌العاده هستند. سرعت کار، تعهد و خلاقیت بی‌نظیرشان آن‌ها را به شریکان ارزشمند ما برای تولید محتوا تبدیل کرده است.",
    author: "مارکوس انگل",
    role: "موسس",
    company: "301 استودیو",
    avatar:
      "https://framerusercontent.com/images/AdtxRt4SttYxFVAQo4PSmPzbHA.png",
  },
  {
    content:
      "سیاوش و تیم ماتریکس استاندارد جدیدی در ادیت ویدیو با کیفیت و سرعت عالی ایجاد کردند. ۱۰ هزار از ۱۰!",
    author: "لارا آکوستا",
    role: "موسس",
    company: "LA Digital",
    avatar:
      "https://framerusercontent.com/images/xSbfB3WL8zsieiYgVAI8fJKYM.png",
  },
  {
    content:
      "کار عالی! هیچ وقت برای اصلاحات از روند خارج نشدند و مطمئن شدند ویدیو نهایی دقیقا همان چیزی باشد که می‌خواستیم.",
    author: "منا میخائیل",
    role: "موسس",
    company: "Human Voice Over",
    avatar:
      "https://framerusercontent.com/images/rmMW09SFJYFXmMfeE6vLaYiET8.png",
  },
  {
    content:
      "همکاری با سیاوش بسیار روان بود. کیفیت کار فوق‌العاده بود، با ویدیو و انیمیشن‌های متنوع. همه چیز یکجا! مشتاق همکاری بلندمدت هستم.",
    author: "اینگه فون آلوک",
    role: "موسس",
    company: "Penfriend",
    avatar:
      "https://framerusercontent.com/images/en50bB3rZx09rgc6noOm3FmYcw.png",
  },
];

const variants = {
  enter: (dir: number) => ({
    opacity: 0,
    x: dir === 1 ? -50 : 50,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir === 1 ? 50 : -50,
  }),
};

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
            دلیل رضایت <span className="text-gr">مشتریان ما</span> را بخوانید
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[300px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                className="absolute inset-0"
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                <div className="bg-gr p-8 md:p-10 rounded-xl border border-foreground shadow-lg">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={testimonials[current].avatar}
                        alt={testimonials[current].author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-lg md:text-xl text-foreground mb-4">
                        "{testimonials[current].content}"
                      </p>
                      <div>
                        <h4 className="font-bold text-foreground">{testimonials[current].author}</h4>
                        <p className="text-gray-400">
                          {testimonials[current].role}
                          {testimonials[current].company && (
                            <> @ {testimonials[current].company}</>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={prev}
              className="bg-matrix-green-deep/30 hover:bg-matrix-green/30 border border-foreground/60 p-3 rounded-full transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index < current ? -1 : 1);
                    setCurrent(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    current === index ? 'bg-matrix-green' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="bg-matrix-green-deep/30 hover:bg-matrix-green/30 border border-foreground/60 p-3 rounded-full transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-matrix-green opacity-10 blur-[150px] rounded-full" />
    </section>
  );
};

export default Testimonials;
