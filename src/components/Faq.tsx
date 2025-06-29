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
      question: 'How fast will I receive my videos?',
      answer:
        'Our standard turnaround time is 2-3 business days for most projects. For more complex edits, we may require up to 5 business days. We also offer rush delivery options if you need your videos sooner.',
    },
    {
      question: 'How do I request videos?',
      answer:
        'Once you sign up for our service, you\'ll get access to our client portal where you can submit your video requests, provide instructions, and upload your raw footage. Our team will keep you updated on the progress and deliver your completed videos through the same portal.',
    },
    {
      question: 'Why wouldn\'t I just hire my own editor?',
      answer:
        'Hiring and managing in-house editors comes with significant overhead costs, training time, and management responsibilities. Our service provides you with experienced editors at a fraction of the cost, plus we handle all the management, quality control, and ensure consistent results even if one editor is unavailable.',
    },
    {
      question: 'What if I\'m not happy with my video?',
      answer:
        'Customer satisfaction is our priority. If you\'re not completely satisfied with your video, we offer unlimited revisions until you\'re happy with the result. Simply provide your feedback, and we\'ll make the necessary adjustments.',
    },
    {
      question: 'Do you offer trials or make example videos?',
      answer:
        'Yes! We offer a trial period for new clients to experience our service before committing to a long-term plan. During this trial, you can request a sample edit so you can see the quality of our work firsthand.',
    },
    {
      question: 'Are there any refunds if I don\'t like the service?',
      answer:
        'We offer a 14-day money-back guarantee on our monthly subscription plans. If you\'re not satisfied with our service within the first 14 days, we\'ll provide a full refund, no questions asked.',
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
            Ready to <span className="text-gr">scale</span>? Let's talk!
          </h2>
          <p className=" max-w-2xl mx-auto">
            Book a free call with our team below to get started.
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
            Book a 30-min call
          </button>
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-matrix-green opacity-10 blur-[150px] rounded-full" />
    </section>
  );
};

export default Faq;
