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
              <p className="text-2xl font-bold text-secondary">
                حمادة الجديد ينتظرك!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
