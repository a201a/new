import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import { fadeIn } from "@/lib/motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-dark/50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeading>عن مجموعتنا</SectionHeading>
          
          <motion.div 
            variants={fadeIn}
            className="bg-dark/80 rounded-2xl p-8 shadow-lg"
          >
            <p className="text-xl mb-6 leading-relaxed">
              مجموعتنا المتواضعة تهدف إلى خلق بيئة داعمة للطلاب الراغبين في تحقيق إنجازات دراسية متميزة وتغيير حياتهم للأفضل.
            </p>
            
            <p className="text-xl mb-6 leading-relaxed">
              نحن نؤمن بأن التغيير الحقيقي يبدأ من الداخل، ومن خلال الانضباط والالتزام والدعم المتبادل، يمكن للجميع تحقيق أهدافهم.
            </p>
            
            <div className="text-center mt-8">
              <p className="text-2xl font-bold text-secondary mb-8">
                "أمس كان في حمادة، والنهاردة حمادة تاني خالص"
              </p>
              <a 
                href="https://t.me/+0lYhA6OsJJM0OTY6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary/90 hover:bg-primary text-white px-6 py-2 rounded-full text-md font-medium transition-all shadow-lg hover:shadow-primary/30"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm3.21 14.89l-.781-5.102L8.323 8.772l-.482 1.777 4.112 1.955-.606 2.892c-.386.484-.114.514.256.25l1.293-1.16.949.73c.546.422.892.202.994-.377l1.036-5.704c.215-.912-.275-1.378-.913-1.095L7.57 11.941c-.86.344-.853.819-.146 1.023l1.593.494 3.633-2.226.475-2.095c.348-.969.63-.546.63-.546l-4.62 2.775-4.144-1.28c-.665-.235-.673-.651.148-.974l15.621-5.827c.838-.347 1.554.244 1.288 1.19l-1.638 9.139c-.261 1.119-1.044 1.396-1.478 1.248L12.45 11.238l-3.579 3.214 3.608 2.88c.599.476 1.056.451 1.73-.443z"></path>
                </svg>
                انضم إلى المجموعة على التلجرام
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
