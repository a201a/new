import { ReactNode } from "react";
import { motion } from "framer-motion";
import { textVariant } from "@/lib/motion";

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
}

export default function SectionHeading({ children, className = "" }: SectionHeadingProps) {
  return (
    <motion.h2 
      variants={textVariant}
      className={`text-3xl md:text-4xl font-bold mb-10 text-center wave-border ${className}`}
    >
      {children}
    </motion.h2>
  );
}
