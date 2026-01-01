import { motion, Variants } from "framer-motion";
import heroImage from "@/assets/hero-construction.jpg";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const HeroSection = () => {
  return (
    <section className="relative min-h-[800px] h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Kuzey Yapı inşaat projesi"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 }
            }
          }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight mb-6"
          >
            İNŞAAT SEKTÖRÜNDE 20 YILLIK TECRÜBE VE GÜVEN
          </motion.h1>
          
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10"
          >
            Mekanik tesisattan ince dekorasyona, 20 yıllık tecrübemizle 
            hayalinizdeki yaşam alanlarını inşa ediyoruz.
          </motion.p>
          
          <motion.div variants={fadeInUp}>
            <button className="btn-outline text-white border-white/20 hover:border-white/40 hover:bg-white/10">
              Projelerimizi İnceleyin
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/40 flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
