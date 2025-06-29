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
      {/* Parent div with overflow-hidden */}
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
      name: "Dr. Dustin Portela",
      image: "https://framerusercontent.com/images/cR0i5UBAArtcLd5VuRqiV9GHSI.jpeg",
      stats: [
        "Added over 10M+ views",
        "10K+ Subscribers",
        "Generated 10M+ Views"
      ]
    },
    {
      name: "Craig Valentine",
      image: "https://framerusercontent.com/images/n6tKwVkZYWM2DLaJl2ETfFefK0.jpeg",
      stats: [
        "Added over 70K+ followers",
        "Generated 5M+ Views",
        "Added 70K+ Followers"
      ]
    },
    {
      name: "Lara Acosta",
      image: "https://framerusercontent.com/images/xSbfB3WL8zsieiYgVAI8fJKYM.png",
      stats: [
        "From 0 to 8K+ subscribers",
        "Generated over $60K+",
        "500K+ Impressions"
      ]
    }
  ];

  return (
    <section id="results" className="py-24 bg-background text-foreground relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Results speak for <span className="text-gr">themselves</span>.
          </h2>
          <p className=" max-w-2xl mx-auto">
            We've worked across a number of industries and have achieved some incredible results with some incredible people and brands.
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
