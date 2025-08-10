import { motion } from 'framer-motion';

const Clients = () => {
  const clients = [
    {
      name: "دکتر عزتی",
      imageUrl: "https://framerusercontent.com/images/r6dPvXcOoM8hG1vEJKXWbHdif8.jpeg",
      description: "در مدتی با مهدی و سیاوس همکاری کردم می تونم از بهترین دوران کاری با یک تیم حرفه ای زندگیم نام ببرم. مهدی با خلاقیت و خوش اخلاقی و سیاوش با نظم و همکاری تیمی یک اهرم قدرتمند در کنار ما بودند و هنوز هم دوستی ما پابرجاست .",
      role: "مدیر عامل همدرد اول"
    },
    {
      name: " مهندس عباس نژاد ",
      imageUrl: "./matrix-298571.webp",
      description: "تیم والا برند با رهبری مهدی با اخلاق کاملا حرفه ای و تخصص بالا و با ایده های جالب ما رو به فرآیند جدیدی از  توسعه و درامدزایی رسوند و من از صمیم قلب برای این تیم موفقیت می خواهیم.",
      role: "مدیر عامل نسخه"
    }
  ];
  
  return (
    <section id="testimonials" className="py-20 text-foreground bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            نظرات <span className="text-gr">مشتریان ما</span> را بخوانید
          </h2>
          <p className="text-foreground max-w-2xl mx-auto">
            ببینید مشتریان ما درباره خدمات ما چه می‌گویند. رضایت آن‌ها نشان‌دهنده کیفیت خدمات ماست.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="bg-matrix-green-deep/30 backdrop-blur-sm rounded-xl p-6 border border-foreground/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <img
                  src={client.imageUrl}
                  alt={client.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-foreground"
                />
                <div>
                  <p className="text-foreground mb-4">{client.description}</p>
                  <h4 className="font-bold text-foreground">{client.name}</h4>
                  <p className="text-foreground/50 text-sm">{client.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-matrix-green-deep opacity-20 blur-[150px] rounded-full" />
    </section>
  );
};

export default Clients;
