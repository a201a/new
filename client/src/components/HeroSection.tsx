import { motion } from "framer-motion";
import Star from "@/components/ui/star";
import logoImage from "@assets/IMG_20250328_105907_803.jpg";
import { fadeIn, slideUp } from "@/lib/motion";

export default function HeroSection() {
  return (
    <section className="min-h-screen pt-20 flex flex-col justify-center items-center relative overflow-hidden">
      <motion.div 
        variants={fadeIn}
        className="absolute inset-0 gold-rays opacity-30"
      />
      
      {/* Stars background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <Star className="absolute w-2 h-2 bg-secondary top-[15%] left-[10%]" delay={0} />
        <Star className="absolute w-3 h-3 bg-secondary top-[25%] left-[80%]" delay={0.2} />
        <Star className="absolute w-2 h-2 bg-secondary top-[60%] left-[85%]" delay={0.4} />
        <Star className="absolute w-1 h-1 bg-secondary top-[75%] left-[15%]" delay={0.6} />
        <Star className="absolute w-2 h-2 bg-secondary top-[40%] left-[30%]" delay={0.8} />
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          {/* Logo */}
          <motion.div 
            variants={fadeIn}
            className="w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl shadow-primary/30"
          >
            <img 
              src={logoImage} 
              alt="شعار مجموعة بداية جديدة" 
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
          
          {/* Text Content */}
          <motion.div 
            variants={slideUp}
            className="text-center md:text-right max-w-xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 wave-border">بداية جديدة</h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8">
              رحلة التغيير تبدأ من هنا
            </p>
            <p className="text-lg mb-8">
              مجموعتنا تختص بالإنجازات الدراسية والتغيير للأفضل. القرار قرارك لو تكمل وتكسر روتين الحياة الغير منتظم وتستغل وقتك أفضل استغلال.
            </p>
            <div className="mt-8">
              <a 
                href="#join" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg font-medium transition-all shadow-lg hover:shadow-primary/50"
              >
                انضم إلينا
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        animate={{ 
          y: [0, 10, 0],
          transition: { 
            repeat: Infinity, 
            duration: 1.5,
            ease: "easeInOut" 
          }
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="#D4AF37" 
          className="w-6 h-6"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 9l-7 7-7-7" 
          />
        </svg>
      </motion.div>
    </section>
  );
}
