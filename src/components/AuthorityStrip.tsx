import { motion, Variants } from "framer-motion";

const stats = [
  { value: "20+", label: "Yıl Tecrübe" },
  { value: "500+", label: "Tamamlanan Proje" },
  { value: "%100", label: "Müşteri Memnuniyeti" },
];

const AuthorityStrip = () => {
  return (
    <section className="bg-navy py-8 md:py-12">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }
                }
              }}
              className="text-center text-white"
            >
              <div className="text-3xl md:text-4xl font-black mb-1">{stat.value}</div>
              <div className="text-sm md:text-base text-white/80 font-medium uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AuthorityStrip;
