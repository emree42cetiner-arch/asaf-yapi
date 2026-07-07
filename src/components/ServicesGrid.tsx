import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { allServices } from "@/data/services";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServicesGrid = () => {
  return (
    <section id="hizmetlerimiz" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Hizmetlerimiz
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Fatih ve İstanbul Genelinde Tadilat Hizmetlerimiz
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Komple ev tadilatından mantolamaya kadar tüm yapı ve dekorasyon
            işlerinizi tek elden yönetiyoruz.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={container}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6"
        >
          {allServices.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.slug} variants={item}>
                <Link
                  to={service.href}
                  className="group block h-full bg-card border border-border rounded-lg p-6 hover:border-accent hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-accent/10 group-hover:bg-accent rounded-md transition-colors duration-300 mb-5">
                    <Icon className="h-6 w-6 text-accent group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {service.shortTitle}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {service.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-accent">
                    Hizmeti İncele
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
