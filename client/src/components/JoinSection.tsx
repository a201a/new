import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import SectionHeading from "@/components/ui/section-heading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { fadeIn } from "@/lib/motion";

const joinSchema = z.object({
  name: z.string().min(2, { message: "الاسم يجب أن يكون أكثر من حرفين" }),
  email: z.string().email({ message: "البريد الإلكتروني غير صالح" }),
  phone: z.string().min(10, { message: "رقم الهاتف يجب أن يكون على الأقل 10 أرقام" }),
  motivation: z.string().min(10, { message: "الرجاء كتابة المزيد عن دوافعك للانضمام" })
});

type JoinFormValues = z.infer<typeof joinSchema>;

export default function JoinSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<JoinFormValues>({
    resolver: zodResolver(joinSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      motivation: ""
    }
  });

  const onSubmit = async (data: JoinFormValues) => {
    setIsSubmitting(true);
    
    try {
      // In a real application, you would send this data to your backend
      console.log("Form data submitted:", data);
      
      // Simulate API request
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "تم إرسال طلبك بنجاح",
        description: "سنتواصل معك قريبًا",
        duration: 5000,
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "حدث خطأ",
        description: "لم نتمكن من إرسال طلبك، يرجى المحاولة مرة أخرى",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="join" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading>انضم إلينا</SectionHeading>
          <p className="text-xl mb-12">
            لا تفوت فرصة التغيير الحقيقي. انضم إلى مجموعتنا اليوم وابدأ رحلتك نحو مستقبل أفضل.
          </p>
          
          <motion.div 
            variants={fadeIn}
            className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 shadow-lg"
          >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-right">
              <div className="flex flex-col">
                <Label htmlFor="name" className="mb-2 text-right">الاسم</Label>
                <Input
                  id="name"
                  dir="rtl"
                  className="bg-dark/80 border border-gray-700 rounded-lg px-4 py-3 focus:border-primary"
                  {...form.register("name")}
                />
                {form.formState.errors.name && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
                )}
              </div>
              
              <div className="flex flex-col">
                <Label htmlFor="email" className="mb-2 text-right">البريد الإلكتروني</Label>
                <Input
                  id="email"
                  type="email"
                  dir="rtl"
                  className="bg-dark/80 border border-gray-700 rounded-lg px-4 py-3 focus:border-primary"
                  {...form.register("email")}
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                )}
              </div>
              
              <div className="flex flex-col">
                <Label htmlFor="phone" className="mb-2 text-right">رقم الهاتف</Label>
                <Input
                  id="phone"
                  type="tel"
                  dir="rtl"
                  className="bg-dark/80 border border-gray-700 rounded-lg px-4 py-3 focus:border-primary"
                  {...form.register("phone")}
                />
                {form.formState.errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.phone.message}</p>
                )}
              </div>
              
              <div className="flex flex-col">
                <Label htmlFor="motivation" className="mb-2 text-right">ما الذي يحفزك للانضمام إلينا؟</Label>
                <Textarea
                  id="motivation"
                  dir="rtl"
                  rows={4}
                  className="bg-dark/80 border border-gray-700 rounded-lg px-4 py-3 focus:border-primary"
                  {...form.register("motivation")}
                />
                {form.formState.errors.motivation && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.motivation.message}</p>
                )}
              </div>
              
              <div className="mt-8">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-6 rounded-full text-lg font-medium transition-all hover:shadow-lg hover:shadow-secondary/30 w-full md:w-auto h-auto"
                >
                  {isSubmitting ? "جاري الإرسال..." : "إرسال الطلب"}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
