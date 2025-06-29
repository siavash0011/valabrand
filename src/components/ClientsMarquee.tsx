import { motion, useAnimation } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface Testimonial {
  name: string;
  image: string;
  description: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Dr. Dustin Portela",
    image: "https://framerusercontent.com/images/r6dPvXcOoM8hG1vEJKXWbHdif8.jpeg",
    description: "I've used Siavash and his team for 2-3 months, creating 40-50 amazing videos.",
    role: "Founder @ Scale Video Agency",
  },
  {
    name: "Jimmy Conover",
    image: "https://i.ytimg.com/vi_webp/Slm6Ek465ow/sddefault.webp",
    description: "I struggled with editors until I found Matrix. Our first video hit 80k views.",
    role: "Speaking Coach",
  },
  {
    name: "Alex Martinez",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    description: "The communication, speed, and results are top-notch. Highly recommended!",
    role: "Marketing Expert",
  },
  {
    name: "Sofia Lopez",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    description: "They went beyond expectations with every delivery. Perfect for creators.",
    role: "Content Strategist",
  },
  {
    name: "Ryan Brooks",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
    description: "Their editing style matched my brand perfectly. I'll continue working with them.",
    role: "Fitness Influencer",
  },
];

// Hook to detect vertical (tablet and up) layout
const useIsVertical = (): boolean => {
  const [isVertical, setIsVertical] = useState<boolean>(
    typeof window !== "undefined" ? window.innerWidth >= 768 : true
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = (e: MediaQueryListEvent) => setIsVertical(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isVertical;
};

interface ColumnScrollerProps {
  direction: "up" | "down";
  className?: string;
}

const ColumnScroller = ({ direction, className = "" }: ColumnScrollerProps) => {
  const controls = useAnimation();
  const isVertical = useIsVertical();
  const axis = isVertical ? "y" : "x";
  const [duration, setDuration] = useState<number>(30);
  const durRef = useRef<number>(duration);
  durRef.current = duration;

  useEffect(() => {
    const animation: any = {
      transition: {
        duration: durRef.current,
        ease: "linear",
        repeat: Infinity,
      },
    };
    animation[axis] = direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"];
    controls.start(animation);
  }, [axis, direction, controls]);

  // Use a smaller fixed height on mobile to reduce vertical space
  const heightClass = isVertical ? "h-[400px]" : "h-[200px]";

  return (
    <div
      onMouseEnter={() => setDuration(60)}
      onMouseLeave={() => setDuration(30)}
      className={`relative ${heightClass} overflow-hidden w-full mx-auto ${className}`}
    >
      <motion.div
        key={axis}
        className={`absolute top-0 left-0 flex ${isVertical ? "flex-col" : "flex-row"} gap-2`}
        animate={controls}
      >
        {[...testimonials, ...testimonials].map((item, i) => (
          <div
            key={i}
            className={`${
              isVertical ? "" : "min-w-[20%]"
            } bg-matrix-green-deep/20 border border-foreground/10 p-4 rounded-xl backdrop-blur-md`}
          >
            <p className="text-sm text-foreground/80 mb-5">{item.description}</p>
            <div className="flex gap-4 items-center mb-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-10 h-10 rounded-full object-cover border border-foreground"
              />
              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-xs text-foreground/50">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const TestimonialsWall = () => (
  <section className="relative bg-background  text-foreground overflow-hidden">
    <div className="max-w-4xl mx-auto px-4">
      {/* Mobile: stacked horizontal scrollers (200px height), Medium: 2 vertical columns, Large: 3 vertical columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {["up", "down", "up"].map((dir, idx) => (
          <ColumnScroller
            key={idx}
            direction={dir as "up" | "down"}
            className={idx === 2 ? "md:hidden lg:block" : ""}
          />
        ))}
      </div>
    </div>

    {/* Fade overlays */}
    <div className="hidden md:block pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-background to-transparent" />
    <div className="hidden md:block pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent" />

    {/* Mobile: fade left/right */}
    <div className="block md:hidden pointer-events-none absolute inset-y-0 left-2 w-6 bg-gradient-to-r from-background to-transparent" />
    <div className="block md:hidden pointer-events-none absolute inset-y-0 right-2 w-6 bg-gradient-to-l from-background to-transparent" />
  </section>
);

export default TestimonialsWall;
