import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { FacebookIcon, TwitterIcon, InstagramIcon, WhatsAppIcon } from "@/lib/icons";

export default function Footer() {
  return (
    <motion.footer 
      variants={fadeIn}
      className="py-10 bg-dark/80 backdrop-blur-sm"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold text-secondary">بداية جديدة</div>
            <p className="text-gray-400 mt-2">رحلة التغيير تبدأ من هنا</p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <FacebookIcon />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <TwitterIcon />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <InstagramIcon />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <WhatsAppIcon />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            جميع الحقوق محفوظة &copy; بداية جديدة {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
