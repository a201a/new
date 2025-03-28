import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import TransformationSection from "@/components/TransformationSection";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

export default function Home() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      className="min-h-screen overflow-x-hidden"
    >
      <Navbar />
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <TransformationSection />
      <JoinSection />
      <Footer />
    </motion.div>
  );
}
