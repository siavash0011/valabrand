import { motion } from 'framer-motion';

const ResultCard = ({ name, image, stats }: { name: string; image: string; stats: string[] }) => {
  return (
    <motion.div
      className="group bg-gradient-to-b from-matrix-green-deep to-matrix-black backdrop-blur-sm rounded-xl overflow-hidden border border-foreground/80 hover:border-matrix-green transition-all  duration-200 ease-in-out"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{name}</h3>
        <ul className="space-y-2">
          {stats.map((stat, idx) => (
            <li key={`${name}-stat-${idx}`} className="flex items-center gap-2 text-foreground/70">
              <span className="w-2 h-2 bg-matrix-green rounded-full" />
              <span className="">{stat}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Results = () => {
  const results = [
    {
      name: "دکتر داستین پورتلا",
      image: "https://framerusercontent.com/images/cR0i5UBAArtcLd5VuRqiV9GHSI.jpeg",
      stats: [
        "افزایش بیش از ۱۰ میلیون بازدید",
        "۱۰ هزار+ مشترک جدید",
        "تولید بیش از ۱۰ میلیون بازدید"
      ]
    },
    {
      name: "کریگ ولنتاین",
      image: "https://framerusercontent.com/images/n6tKwVkZYWM2DLaJl2ETfFefK0.jpeg",
      stats: [
        "افزایش بیش از ۷۰ هزار دنبال‌کننده",
        "تولید ۵ میلیون+ بازدید",
        "افزایش ۷۰ هزار+ دنبال‌کننده"
      ]
    },
    {
      name: "لارا آکوستا",
      image: "https://framerusercontent.com/images/xSbfB3WL8zsieiYgVAI8fJKYM.png",
      stats: [
        "از ۰ تا ۸ هزار+ مشترک",
        "تولید بیش از ۶۰ هزار دلار درآمد",
        "۵۰۰ هزار+ ایمپرشن"
      ]
    }
  ];

  return (
    <section id="results" className="py-24 bg-background text-foreground relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            نتایج <span className="text-gr">خودشان حرف می‌زنند</span>
          </h2>
          <p className=" max-w-2xl mx-auto">
            ما با برندها و افراد مختلف همکاری داشته‌ایم و به نتایج فوق‌العاده‌ای دست یافته‌ایم.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result) => (
            <ResultCard
              key={result.name}
              name={result.name}
              image={result.image}
              stats={result.stats}
            />
          ))}
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-matrix-green opacity-10 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-matrix-deep opacity-10 blur-[100px] rounded-full" />
    </section>
  );
};

export default Results;
