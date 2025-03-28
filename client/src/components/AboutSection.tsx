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
              <p className="text-2xl font-bold text-secondary">
                "أمس كان في حمادة، والنهاردة حمادة تاني خالص"
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
