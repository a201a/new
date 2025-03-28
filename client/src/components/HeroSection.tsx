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
        {/* Mobile layout */}
        <div className="flex flex-col items-center justify-center gap-6 md:hidden">
          <motion.div 
            variants={fadeIn}
            className="w-60 h-60 rounded-full overflow-hidden shadow-2xl shadow-primary/30"
          >
            <img 
              src={logoImage} 
              alt="شعار مجموعة بداية جديدة" 
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
          
          <motion.div 
            variants={slideUp}
            className="text-center max-w-md"
          >
            <h1 className="text-4xl font-bold mb-4 wave-border">بداية جديدة</h1>
            <p className="text-xl text-gray-400 mb-4">
              رحلة التغيير تبدأ من هنا
            </p>
            <p className="text-base mb-6">
              مجموعتنا تختص بالإنجازات الدراسية والتغيير للأفضل. القرار قرارك لو تكمل وتكسر روتين الحياة الغير منتظم وتستغل وقتك أفضل استغلال.
            </p>
            <div className="mt-6 flex flex-col gap-4 items-center">
              <a 
                href="https://t.me/+0lYhA6OsJJM0OTY6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg font-medium transition-all shadow-lg hover:shadow-primary/50 flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm3.21 14.89l-.781-5.102L8.323 8.772l-.482 1.777 4.112 1.955-.606 2.892c-.386.484-.114.514.256.25l1.293-1.16.949.73c.546.422.892.202.994-.377l1.036-5.704c.215-.912-.275-1.378-.913-1.095L7.57 11.941c-.86.344-.853.819-.146 1.023l1.593.494 3.633-2.226.475-2.095c.348-.969.63-.546.63-.546l-4.62 2.775-4.144-1.28c-.665-.235-.673-.651.148-.974l15.621-5.827c.838-.347 1.554.244 1.288 1.19l-1.638 9.139c-.261 1.119-1.044 1.396-1.478 1.248L12.45 11.238l-3.579 3.214 3.608 2.88c.599.476 1.056.451 1.73-.443z"></path>
                </svg>
                انضم عبر التلجرام
              </a>
              <a 
                href="#about" 
                className="text-secondary hover:text-primary transition-colors font-medium"
              >
                تعرف علينا أكثر
              </a>
            </div>
          </motion.div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:flex md:flex-row md:items-center md:justify-center md:gap-10 lg:gap-16">
          {/* Logo */}
          <motion.div 
            variants={fadeIn}
            className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl shadow-primary/30"
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
            className="text-right max-w-xl"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 wave-border">بداية جديدة</h1>
            <p className="text-xl lg:text-2xl text-gray-400 mb-6">
              رحلة التغيير تبدأ من هنا
            </p>
            <p className="text-lg mb-8">
              مجموعتنا تختص بالإنجازات الدراسية والتغيير للأفضل. القرار قرارك لو تكمل وتكسر روتين الحياة الغير منتظم وتستغل وقتك أفضل استغلال.
            </p>
            <div className="mt-8 flex gap-4 items-center">
              <a 
                href="https://t.me/+0lYhA6OsJJM0OTY6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg font-medium transition-all shadow-lg hover:shadow-primary/50 flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm3.21 14.89l-.781-5.102L8.323 8.772l-.482 1.777 4.112 1.955-.606 2.892c-.386.484-.114.514.256.25l1.293-1.16.949.73c.546.422.892.202.994-.377l1.036-5.704c.215-.912-.275-1.378-.913-1.095L7.57 11.941c-.86.344-.853.819-.146 1.023l1.593.494 3.633-2.226.475-2.095c.348-.969.63-.546.63-.546l-4.62 2.775-4.144-1.28c-.665-.235-.673-.651.148-.974l15.621-5.827c.838-.347 1.554.244 1.288 1.19l-1.638 9.139c-.261 1.119-1.044 1.396-1.478 1.248L12.45 11.238l-3.579 3.214 3.608 2.88c.599.476 1.056.451 1.73-.443z"></path>
                </svg>
                انضم عبر التلجرام
              </a>
              <a 
                href="#about" 
                className="text-secondary hover:text-primary transition-colors font-medium"
              >
                تعرف علينا أكثر
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
