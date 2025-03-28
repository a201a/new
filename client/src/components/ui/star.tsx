import { motion } from "framer-motion";

interface StarProps {
  className?: string;
  delay?: number;
}

export default function Star({ className, delay = 0 }: StarProps) {
  return (
    <motion.div
      className={`star ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.7, 1, 0.7],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay,
      }}
      style={{
        clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
      }}
    />
  );
}
