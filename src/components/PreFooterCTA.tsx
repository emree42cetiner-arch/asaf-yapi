import { motion } from "framer-motion";
import { Calculator } from "lucide-react";

const PreFooterCTA = () => {
  return (
    <section className="bg-anthracite py-20 md:py-28">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <Calculator className="h-12 w-12 text-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Projeniz İçin Ücretsiz Keşif ve Net Fiyat Teklifi
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Fatih merkezli ekibimiz adresinize gelsin, ölçü alsın ve size şeffaf,
            yazılı bir fiyat teklifi sunsun. Keşif ve teklif tamamen ücretsizdir.
          </p>
          <a href="/#teklif" className="btn-accent inline-block px-10 py-5 text-base">
            Ücretsiz Keşif Talep Et
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PreFooterCTA;
