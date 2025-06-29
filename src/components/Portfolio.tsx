import { useState } from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, ChevronLeft, ChevronRight } from 'lucide-react';

interface Person {
  name: string;
  role: string;
  image: string;
  videoThumbnail?: string;
}

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featured: Person[] = [
    {
      name: "Lara Acosta",
      role: "Founder @ LA Digital",
      image: "https://framerusercontent.com/images/xSbfB3WL8zsieiYgVAI8fJKYM.png",
      videoThumbnail: "https://i.ytimg.com/vi_webp/SwBgVJNZ-6Q/sddefault.webp"
    },
    {
      name: "Dylan Hey",
      role: "CEO @ Hey Digital",
      image: "https://i.ytimg.com/vi_webp/Slm6Ek465ow/sddefault.webp",
      videoThumbnail: "https://i.ytimg.com/vi_webp/Slm6Ek465ow/sddefault.webp"
    },
    {
      name: "Mark Firth",
      role: "CEO @ B2B Growth Team",
      image: "https://ext.same-assets.com/2650834761/1793305743.jpeg",
      videoThumbnail: "https://ext.same-assets.com/2650834761/772108259.png"
    },
    {
      name: "Yasir Khan",
      role: "Public Speaking Coach",
      image: "https://ext.same-assets.com/2650834761/3708638618.jpeg",
      videoThumbnail: "https://ext.same-assets.com/2650834761/4274304582.webp"
    }
  ];

  const examples = [
    {
      id: 1,
      thumbnail: "https://i.ytimg.com/vi_webp/Slm6Ek465ow/sddefault.webp",
    },
    {
      id: 2,
      thumbnail: "https://i.ytimg.com/vi_webp/SwBgVJNZ-6Q/sddefault.webp",
    },
    {
      id: 3,
      thumbnail: "https://ext.same-assets.com/2650834761/1871786381.webp",
    },
    {
      id: 4,
      thumbnail: "https://ext.same-assets.com/2650834761/4274304582.webp",
    },
    {
      id: 5,
      thumbnail: "https://ext.same-assets.com/2650834761/772108259.png",
    },
    {
      id: 6,
      thumbnail: "https://ext.same-assets.com/2650834761/3418653330.png",
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === featured.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? featured.length - 1 : prev - 1));
  };

  const person = featured[currentSlide];

  return (
    <section id="portfolio" className="py-14 bg-background text-foreground relative overflow-hidden">
      
          {/* Video examples */}
          <div className="">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Short-Form Video <span className="text-gr">Examples</span>
            </h2>
            <p className="text-gray-400 text-center mb-10">
              Videos Optimized for All Platforms. Name any social media platform, we can handle it.
            </p>
            <div className="flex justify-center">
              <button className="btn ">
                Click here for pricing & packages
              </button>
            </div>
          </div>
      <div className="container mx-auto px-4 relative z-10 -5mt">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            {person.name}
          </h2>
          <p className="text-gray-400 text-center">{person.role}</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main featured portfolio item */}
          <div className="relative mb-16">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-video rounded-xl overflow-hidden"
            >
              <img
                src={person.videoThumbnail || person.image}
                alt={person.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold">{person.name}</h3>
                  <p className="text-gray-300">{person.role}</p>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-matrix-green/90 rounded-full flex items-center justify-center cursor-pointer">
                  <PlayCircle className="w-8 h-8 text-white" />
                </div>
              </div>
            </motion.div>

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center mb-12">
            <button className="btn w-full md:w-auto">Book a 30-min call</button>
          </div>

        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-matrix-green-deep opacity-20 blur-[150px] rounded-full" />
    </section>
  );
};

export default Portfolio;
