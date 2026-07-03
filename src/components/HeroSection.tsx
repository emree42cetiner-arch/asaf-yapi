import { motion, Variants } from "framer-motion";
import { MessageCircle, Phone, FileText } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const HeroSection = () => {
  return (
    <section className="relative min-h-[720px] h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Asaf Yapı — Fatih İstanbul tadilat ve dekorasyon"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="max-w-4xl mx-auto"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-accent mb-5"
          >
            Fatih Merkezli · 20+ Yıl Tecrübe
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
          >
            Fatih Merkezli İstanbul Yapı Dekorasyon ve Tadilat Hizmetleri
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto mb-10"
          >
            Komple ev tadilatı, banyo, mutfak, boya, mantolama ve su yalıtımı —
            Fatih ve İstanbul genelinde anahtar teslim, garantili hizmet.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center"
          >
            <a
              href="https://wa.me/905428209599?text=Merhaba,%20teklif%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20b558] text-white px-6 py-4 font-semibold uppercase tracking-wide text-sm transition w-full sm:w-auto justify-center"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a
              href="tel:+905428209599"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-6 py-4 font-semibold uppercase tracking-wide text-sm transition w-full sm:w-auto justify-center"
            >
              <Phone className="h-4 w-4" /> Hemen Ara
            </a>
            <a
              href="#teklif"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-4 font-semibold uppercase tracking-wide text-sm transition w-full sm:w-auto justify-center"
            >
              <FileText className="h-4 w-4" /> Teklif Al
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
