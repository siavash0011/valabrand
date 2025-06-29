import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const japaneseChars = "アイウエオカキクケコサシスセソタチツテトナニヌネノ";
const getRandomChar = () => japaneseChars[Math.floor(Math.random() * japaneseChars.length)];

const finalSentence = "The Matrix has you.";
const chars = finalSentence.split("");

const FALL_DURATION = 0.5;
const DROP_HEIGHT = "3vh";
const CHAR_DELAY = 0.05;
const SCRAMBLE_SPEED = 30;

interface FallingCharProps {
  delay: number;
  index: number;
  start: boolean;
}

const FallingChar: React.FC<FallingCharProps> = ({ delay, index, start }) => {
  const [char, setChar] = useState(getRandomChar());
  const [locked, setLocked] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (!start) return;
    controls.start({
      y: DROP_HEIGHT,
      opacity: 1,
      transition: { duration: FALL_DURATION, delay }
    });

    const scrambleInterval = setInterval(() => {
      if (!locked) setChar(getRandomChar());
    }, SCRAMBLE_SPEED);

    const timeout = setTimeout(() => {
      clearInterval(scrambleInterval);
      setLocked(true);
      setChar(chars[index]);
      controls.stop();
    }, (delay + FALL_DURATION) * 1000);

    return () => {
      clearInterval(scrambleInterval);
      clearTimeout(timeout);
    };
  }, [delay, index, start, locked, controls]);

  const renderChar = char === " " ? "\u00A0" : char;

  if (locked) {
    return (
      <span
        style={{ display: "inline-block", transform: `translateY(${DROP_HEIGHT})` }}
        className="text-white text-lg leading-none"
      >
        {renderChar}
      </span>
    );
  }

  return (
    <motion.div
      initial={{ y: 0, opacity: 0.8 }}
      animate={controls}
      className="inline-block font-matrix font-bold text-lg leading-none"
      style={{ width: "1ch" }}
    >
      <span className="text-green-400">{renderChar}</span>
    </motion.div>
  );
};

const MatrixRain: React.FC = () => {
  const [start, setStart] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-screen bg-black flex justify-center items-center">
      <div className="text-center select-none whitespace-nowrap">
        {chars.map((_, idx) => (
          <FallingChar key={idx} delay={idx * CHAR_DELAY} index={idx} start={start} />
        ))}
      </div>
    </div>
  );
};

export default MatrixRain;