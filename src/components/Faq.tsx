import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, User } from 'lucide-react';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onToggle, index }) => {
  return (
    <motion.div
      className="border-b border-foreground/20 py-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <button
        className="flex w-full justify-between items-center text-left focus:outline-none"
        onClick={onToggle}
      >
        <h3 className="text-lg font-medium ">{question}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 transform transition-transform duration-300" />
        ) : (
          <ChevronDown className="w-5 h-5 transform transition-transform duration-300" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-3 text-muted-foreground ">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Faq = () => {
  const faqs = [
    {
      question: 'ویدیوهایم را چقدر سریع دریافت می‌کنم؟',
      answer:
        'زمان تحویل استاندارد ما برای بیشتر پروژه‌ها ۲ تا ۳ روز کاری است. برای ادیت‌های پیچیده‌تر ممکن است تا ۵ روز کاری زمان نیاز باشد. همچنین گزینه تحویل فوری نیز داریم.',
    },
    {
      question: 'چطور درخواست ویدیو بدهم؟',
      answer:
        'پس از ثبت‌نام، به پنل مشتریان دسترسی خواهید داشت و می‌توانید درخواست‌های ویدیویی خود را ثبت کنید، توضیحات بدهید و فایل‌ها را آپلود کنید. تیم ما شما را از روند کار مطلع می‌کند و ویدیوهای نهایی را از همان پنل دریافت خواهید کرد.',
    },
    {
      question: 'چرا خودم ادیتور استخدام نکنم؟',
      answer:
        'استخدام و مدیریت ادیتورهای داخلی هزینه و زمان زیادی می‌طلبد. سرویس ما با هزینه کمتر، ادیتورهای حرفه‌ای را در اختیار شما قرار می‌دهد و مدیریت و کنترل کیفیت را هم ما انجام می‌دهیم.',
    },
    {
      question: 'اگر از ویدیوی خود راضی نباشم چه می‌شود؟',
      answer:
        'رضایت شما اولویت ماست. اگر از ویدیوی خود راضی نبودید، تا زمانی که کاملاً راضی شوید، اصلاحات نامحدود انجام می‌دهیم. کافیست بازخورد خود را اعلام کنید.',
    },
    {
      question: 'آیا نمونه یا دوره آزمایشی دارید؟',
      answer:
        'بله! برای مشتریان جدید دوره آزمایشی داریم تا قبل از خرید نهایی کیفیت کار ما را ببینند. در این دوره می‌توانید یک نمونه ویدیو درخواست دهید.',
    },
    {
      question: 'اگر از سرویس راضی نباشم، بازگشت وجه دارید؟',
      answer:
        'ما ضمانت بازگشت وجه ۱۴ روزه برای پلن‌های ماهانه داریم. اگر در ۱۴ روز اول راضی نبودید، کل مبلغ را بدون پرسش بازمی‌گردانیم.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(-1);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-24 text-foreground bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            آماده رشد <span className="text-gr">کسب‌وکار</span> هستید؟ با ما صحبت کنید!
          </h2>
          <p className=" max-w-2xl mx-auto">
            برای شروع، یک جلسه رایگان با تیم ما رزرو کنید.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem
              key={`faq-${index}`}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => toggleFaq(index)}
              index={index}
            />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="btn flex gap-3 w-full md:w-auto">
            <User className="w-5 h-5" />
            رزرو جلسه ۳۰ دقیقه‌ای
          </button>
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-matrix-green opacity-10 blur-[150px] rounded-full" />
    </section>
  );
};

export default Faq;
