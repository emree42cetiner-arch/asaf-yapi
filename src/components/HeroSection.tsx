import { motion, Variants } from "framer-motion";
import { MessageCircle, Phone, FileText, ShieldCheck, MapPin, Award, Ruler, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const trustPoints = [
  { icon: Award, label: "20+ Yıl Tecrübe" },
  { icon: MapPin, label: "Fatih Merkezli Ekip" },
  { icon: Ruler, label: "Ücretsiz Keşif" },
  { icon: ShieldCheck, label: "Garantili İşçilik" },
  { icon: CheckCircle2, label: "İstanbul Geneli Hizmet" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[720px] h-[92vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Küçükler Yapı Dekorasyon — Fatih İstanbul komple tadilat ve dekorasyon projesi"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Warm elegant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(215,45%,10%)]/85 via-[hsl(218,38%,12%)]/70 to-[hsl(18,45%,20%)]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 container-custom text-center px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="max-w-4xl mx-auto"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block text-[11px] md:text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-6 px-4 py-1.5 border border-accent/40 rounded-full bg-accent/5 backdrop-blur-sm"
          >
            Fatih Merkezli · 20+ Yıl Tecrübe
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-semibold text-white leading-[1.15] tracking-tight mb-6"
          >
            İstanbul Yapı Dekorasyon
            <br className="hidden sm:block" />
            {" "}ve{" "}
            <span className="text-accent">Tadilat Hizmetleri</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          >
            Fatih merkezli ekibimizle ev, ofis, banyo ve mutfak tadilatlarında
            keşiften teslimata anahtar teslim, planlı ve garantili uygulama.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12"
          >
            <a
              href="#iletisim"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-7 py-4 font-semibold uppercase tracking-wide text-sm rounded-md shadow-lg shadow-accent/20 transition w-full sm:w-auto justify-center"
            >
              <FileText className="h-4 w-4" /> Ücretsiz Keşif Talep Et
            </a>
            <a
              href="https://wa.me/905325549292?text=Merhaba,%20teklif%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20b558] text-white px-7 py-4 font-semibold uppercase tracking-wide text-sm rounded-md transition w-full sm:w-auto justify-center"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp'tan Yaz
            </a>
            <a
              href="tel:+905325549292"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white px-7 py-4 font-semibold uppercase tracking-wide text-sm rounded-md transition w-full sm:w-auto justify-center backdrop-blur-sm"
            >
              <Phone className="h-4 w-4" /> Hemen Ara
            </a>
          </motion.div>

          {/* Trust Bar */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-x-6 gap-y-3 pt-8 border-t border-white/10"
          >
            {trustPoints.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-white/75 text-xs md:text-sm">
                <Icon className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="font-medium">{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
