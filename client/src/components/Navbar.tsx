import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { fadeIn } from "@/lib/motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      variants={fadeIn}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-dark/90 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/">
          <span className="text-secondary font-bold text-xl cursor-pointer">بداية جديدة</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          <a href="#about" className="text-light hover:text-primary transition-colors">
            عن المجموعة
          </a>
          <a href="#benefits" className="text-light hover:text-primary transition-colors">
            المميزات
          </a>
          <a href="#transformation" className="text-light hover:text-primary transition-colors">
            التحول
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-light focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-dark/95 backdrop-blur-sm border-t border-gray-800"
        >
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-light hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              عن المجموعة
            </a>
            <a 
              href="#benefits" 
              className="text-light hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              المميزات
            </a>
            <a 
              href="#transformation" 
              className="text-light hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              التحول
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
