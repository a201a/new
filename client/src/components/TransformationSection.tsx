import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import { fadeIn, slideUp } from "@/lib/motion";

export default function TransformationSection() {
  return (
    <section className="py-20 bg-primary/10">
      <div className="container mx-auto px-6">
        <SectionHeading>رحلة التحول</SectionHeading>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-16">
          <motion.div 
            variants={fadeIn}
            className="w-full md:w-1/2"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-75 blur"></div>
              <div className="relative bg-dark rounded-xl overflow-hidden">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 200 150" 
                  className="w-full h-80"
                >
                  <defs>
                    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1E88E5" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  <rect width="200" height="150" fill="url(#bgGrad)" />
                  <g transform="translate(60, 40)">
                    <motion.path
                      d="M40,0 C17.90861,0 0,17.90861 0,40 C0,62.09139 17.90861,80 40,80 C62.09139,80 80,62.09139 80,40 C80,17.90861 62.09139,0 40,0 Z"
                      stroke="#D4AF37"
                      strokeWidth="3"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "loop", repeatDelay: 1 }}
                    />
                    <motion.path
                      d="M30,20 L50,60 M50,20 L30,60"
                      stroke="#ffffff"
                      strokeWidth="3"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "loop", repeatDelay: 1 }}
                    />
                  </g>
                </svg>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            variants={slideUp}
            className="w-full md:w-1/2"
          >
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="font-bold">١</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">البداية</h3>
                  <p className="text-gray-400">ستدخل المجموعة كشخص عادي، ربما تعاني من نقص الإنتاجية أو عدم الانتظام في الدراسة.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary/70 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="font-bold">٢</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">الرحلة</h3>
                  <p className="text-gray-400">ستتعلم أساليب جديدة، وتكتسب مهارات فعالة، وتبدأ في تطبيق روتين منظم وفعال.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="font-bold">٣</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">التحول</h3>
                  <p className="text-gray-400">ستخرج من المجموعة كشخص مختلف تمامًا، أكثر انضباطًا والتزامًا، وأكثر قدرة على تحقيق أهدافك.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-2xl font-bold text-secondary mb-8">
                حمادة الجديد ينتظرك!
              </p>
              <a 
                href="https://t.me/+0lYhA6OsJJM0OTY6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full text-lg font-medium transition-all shadow-lg hover:shadow-primary/30"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm3.21 14.89l-.781-5.102L8.323 8.772l-.482 1.777 4.112 1.955-.606 2.892c-.386.484-.114.514.256.25l1.293-1.16.949.73c.546.422.892.202.994-.377l1.036-5.704c.215-.912-.275-1.378-.913-1.095L7.57 11.941c-.86.344-.853.819-.146 1.023l1.593.494 3.633-2.226.475-2.095c.348-.969.63-.546.63-.546l-4.62 2.775-4.144-1.28c-.665-.235-.673-.651.148-.974l15.621-5.827c.838-.347 1.554.244 1.288 1.19l-1.638 9.139c-.261 1.119-1.044 1.396-1.478 1.248L12.45 11.238l-3.579 3.214 3.608 2.88c.599.476 1.056.451 1.73-.443z"></path>
                </svg>
                ابدأ رحلة التحول الآن
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
