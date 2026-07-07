import { motion } from "framer-motion";
import renovationImage from "@/assets/renovation-interior.jpg";
import mechanicalImage from "@/assets/mechanical-installation.jpg";
import blogBuilding from "@/assets/blog-building.jpg";
import blogSustainable from "@/assets/blog-sustainable.jpg";
import heroConstruction from "@/assets/hero-construction.jpg";
import blogSafety from "@/assets/blog-safety.jpg";

const projects = [
  {
    title: "Fatih — Komple Daire Tadilatı",
    before: heroConstruction,
    after: renovationImage,
  },
  {
    title: "Balat — Banyo Yenileme",
    before: blogSafety,
    after: mechanicalImage,
  },
  {
    title: "Eminönü — Mutfak Tadilatı",
    before: blogBuilding,
    after: blogSustainable,
  },
];

const BeforeAfter = () => {
  return (
    <section id="projeler" className="section-padding bg-concrete">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Öncesi & Sonrası
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Tamamladığımız Projelerden Örnekler
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fatih ve çevre ilçelerde gerçekleştirdiğimiz tadilat projelerinden
            dönüşüm hikayeleri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="grid grid-cols-2 gap-1">
                <div className="relative">
                  <img
                    src={project.before}
                    alt={`${project.title} - öncesi`}
                    loading="lazy"
                    className="w-full h-48 object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1">
                    Öncesi
                  </span>
                </div>
                <div className="relative">
                  <img
                    src={project.after}
                    alt={`${project.title} - sonrası`}
                    loading="lazy"
                    className="w-full h-48 object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-accent text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1">
                    Sonrası
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-foreground">{project.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
