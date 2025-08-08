import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  delay: number;
  reverseGradient?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, delay, reverseGradient }) => {
  return (
    <motion.div
      className="p-14 rounded-xl border border-foreground/20 flex flex-col items-center text-center justify-center"
      style={{
        background: `radial-gradient(
          ellipse at ${reverseGradient ? 'top left' : 'top right'}, 
          rgba(255,255,255,0.1) 0%, 
          rgba(${parseInt('00', 16)},${parseInt('CC', 16)},${parseInt('33', 16)},0.08) 20%, 
          rgba(${parseInt('00', 16)},${parseInt('33', 16)},${parseInt('00', 16)},0.1) 50%, 
          rgba(${parseInt('0B', 16)},${parseInt('0C', 16)},${parseInt('08', 16)},0.95) 100%
        )`,
        boxShadow: `0 10px 30px rgba(0, 0, 0, 0.3), 
                    0 0 40px rgba(${parseInt('1A', 16)},${parseInt('FF', 16)},${parseInt('66', 16)},0.2), 
                    inset 0 1px 1px rgba(255, 255, 255, 0.07)`
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <h3 className="text-4xl font-bold mb-6">{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      title: 'گوگل ادز',
      description:
        'اجرای کمپین‌های تبلیغاتی در گوگل ادز برای افزایش بازدید، جذب مشتریان جدید و رشد کسب‌وکار شما.',
    },
    {
      title: 'طراحی سایت',
      description:
        'طراحی و توسعه وب‌سایت‌های حرفه‌ای و کاربرپسند برای حضور مؤثر در فضای دیجیتال.',
    },
    {
      title: 'دیجیتال مارکتینگ',
      description:
        'ارائه راهکارهای بازاریابی دیجیتال برای افزایش تعامل، فروش و برندینگ کسب‌وکار شما.',
    },
    {
      title: 'ادیت ویدیو',
      description:
        'ویرایش حرفه‌ای ویدیو برای تولید محتوای جذاب، تبلیغات مؤثر و افزایش نرخ تبدیل.',
    },
  ];

  return (
    <section id="services" className="bg-background text-foreground relative overflow-hidden ">
      <div className="container mx-auto px-4 relative z-10 mb-24">
        <div className="text-center mb-16">
          <h2 className="mt-10 text-3xl md:text-4xl font-bold mb-2">
            چگونه می توانیم کمکتان کنیم <span className="text-gr">?</span>
          </h2>
          <p className="max-w-2xl mx-auto">
            از ویدیوهای کوتاه گرفته تا ویدیوهای بلند، از خلاقیت‌های تبلیغاتی تا VSLها، ما در هر زمینه‌ای در خدمت شما هستیم.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
              reverseGradient={index % 2 === 0} // even index → top-left, odd → top-right
            />
          ))}
        </div>
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-matrix-deep blur-[100px] " />
    </section>
  );
};

export default Services;
