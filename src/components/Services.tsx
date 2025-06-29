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
        backgroundImage: reverseGradient
        ? 'radial-gradient(farthest-corner at top right, rgba(0, 180, 51, 0.3), transparent 60%)'
        : 'radial-gradient(farthest-corner at top left, rgba(26, 200, 102, 0.3), transparent 60%)',
      backgroundBlendMode: 'overlay',
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <h3 className="text-4xl font-bold mb-6">{title}</h3>
      <p className="">{description}</p>
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
    <section id="services" className=" bg-background text-foreground relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className=" mt-10 text-3xl md:text-4xl font-bold mb-2">
            چگونه می توانیم کمکتان کنیم <span className="text-gr">?</span>
          </h2>
          <p className=" max-w-2xl mx-auto">
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
              reverseGradient={index % 2 === 0} // even index = right-to-left, odd = left-to-right
            />
          ))}
        </div>
      </div>

      <div className="absolute top-0 left-1/2  -translate-x-1/2 w-[300px] h-[300px] bg-matrix-deep blur-[100px] " />
    </section>
  );
};

export default Services;
