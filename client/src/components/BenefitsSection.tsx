import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import { staggerContainer, fadeIn } from "@/lib/motion";
import { BenefitCardProps } from "@/lib/types";

const BenefitCard = ({ icon, title, description, variant }: BenefitCardProps) => {
  return (
    <motion.div 
      variants={fadeIn}
      whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
      className="bg-dark/80 rounded-xl p-6 hover:shadow-lg hover:shadow-primary/20 transition-all"
    >
      <div className={`w-16 h-16 ${variant === 'primary' ? 'bg-primary/20' : 'bg-secondary/20'} rounded-full flex items-center justify-center mb-6 mx-auto`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-center">{title}</h3>
      <p className="text-gray-400 text-center">
        {description}
      </p>
    </motion.div>
  );
};

export default function BenefitsSection() {
  const benefits = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "زيادة الإنتاجية",
      description: "تعلم كيفية إدارة وقتك بفعالية وزيادة إنتاجيتك في الدراسة والحياة اليومية.",
      variant: "primary"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "دعم مستمر",
      description: "انضم إلى مجتمع من الأشخاص الملهمين الذين يشاركونك نفس الأهداف والتطلعات.",
      variant: "secondary"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      ),
      title: "تحسين المستوى الدراسي",
      description: "اكتساب مهارات وأساليب دراسية فعالة تساعدك على تحقيق نتائج أفضل في دراستك.",
      variant: "primary"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "أفكار جديدة",
      description: "التعرف على طرق تفكير مختلفة وأساليب إبداعية لحل المشكلات ومواجهة التحديات.",
      variant: "secondary"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "الحافز والإلهام",
      description: "ابق متحمسًا ومتحفزًا لتحقيق أهدافك من خلال مشاركة قصص النجاح والتجارب الملهمة.",
      variant: "primary"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: "تغيير إيجابي شامل",
      description: "لا يقتصر التغيير على الجانب الدراسي فقط، بل يمتد ليشمل جميع جوانب حياتك.",
      variant: "secondary"
    },
  ];

  return (
    <section id="benefits" className="py-20">
      <div className="container mx-auto px-6">
        <SectionHeading>ماذا ستستفيد؟</SectionHeading>
        
        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              variant={benefit.variant as "primary" | "secondary"}
            />
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://t.me/+0lYhA6OsJJM0OTY6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary/90 hover:bg-secondary text-white px-8 py-3 rounded-full text-lg font-medium transition-all shadow-lg hover:shadow-secondary/30"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm3.21 14.89l-.781-5.102L8.323 8.772l-.482 1.777 4.112 1.955-.606 2.892c-.386.484-.114.514.256.25l1.293-1.16.949.73c.546.422.892.202.994-.377l1.036-5.704c.215-.912-.275-1.378-.913-1.095L7.57 11.941c-.86.344-.853.819-.146 1.023l1.593.494 3.633-2.226.475-2.095c.348-.969.63-.546.63-.546l-4.62 2.775-4.144-1.28c-.665-.235-.673-.651.148-.974l15.621-5.827c.838-.347 1.554.244 1.288 1.19l-1.638 9.139c-.261 1.119-1.044 1.396-1.478 1.248L12.45 11.238l-3.579 3.214 3.608 2.88c.599.476 1.056.451 1.73-.443z"></path>
            </svg>
            انضم لتحصل على هذه المميزات
          </a>
        </div>
      </div>
    </section>
  );
}
