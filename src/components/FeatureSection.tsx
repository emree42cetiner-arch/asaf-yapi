import { motion, Variants } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import renovationImage from "@/assets/renovation-interior.jpg";
import mechanicalImage from "@/assets/mechanical-installation.jpg";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const FeatureSection = () => {
  return (
    <>
      {/* Feature 1: Renovation */}
      <section id="hizmetler" className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Anahtar Teslim Tadilat Çözümleri
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Konutlardan ticari mekanlara, her türlü tadilat projesinde A'dan Z'ye 
                profesyonel hizmet sunuyoruz. Elektrik tesisatından boya badanaya, 
                parke döşemeden banyo yenilemeye kadar tüm ihtiyaçlarınızı tek çatı 
                altında karşılıyoruz.
              </p>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent" />
                  <span>Komple ev tadilatı ve renovasyon</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent" />
                  <span>Ofis ve ticari alan düzenlemeleri</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent" />
                  <span>Mutfak ve banyo yenileme</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <img
                  src={renovationImage}
                  alt="İç mekan tadilat çalışması"
                  className="w-full h-[400px] lg:h-[500px] object-cover shadow-2xl"
                />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature 2: Mechanical */}
      <section className="section-padding bg-concrete">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
            >
              <div className="relative">
                <img
                  src={mechanicalImage}
                  alt="Mekanik tesisat kurulumu"
                  className="w-full h-[400px] lg:h-[500px] object-cover shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary" />
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Yapıların Kalbi: Mekanik Tesisat
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Sıhhi tesisat, ısıtma-soğutma sistemleri, havalandırma ve yangın 
                söndürme sistemleri dahil tüm mekanik tesisat işlerinizi uzman 
                ekibimizle gerçekleştiriyoruz. Projeleriniz için en son teknoloji 
                çözümler sunuyoruz.
              </p>
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 mb-6">
                <ShieldCheck className="h-5 w-5 text-accent" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                  Garantili İşçilik
                </span>
              </div>
              
              <ul className="space-y-3 text-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent" />
                  <span>Sıhhi tesisat ve doğalgaz</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent" />
                  <span>Klima ve VRF sistemleri</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent" />
                  <span>Yangın söndürme sistemleri</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureSection;
