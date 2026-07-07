import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import blogBuilding from "@/assets/blog-building.jpg";
import blogSafety from "@/assets/blog-safety.jpg";
import blogSustainable from "@/assets/blog-sustainable.jpg";

const blogPosts = [
  {
    image: blogBuilding,
    title: "İstanbul'da Komple Ev Tadilatı Ne Kadar Sürer?",
    excerpt: "Daire büyüklüğü, yıkım miktarı ve malzeme seçimlerinin tadilat süresine etkisi ve gerçekçi bir planlama rehberi.",
    date: "12 Ocak 2026"
  },
  {
    image: blogSafety,
    title: "Fatih'te Banyo Tadilatı Yaptırırken Nelere Dikkat Edilmeli?",
    excerpt: "Su yalıtımı, tesisat yenileme, seramik ve vitrifiye seçiminde profesyonel bir sürecin olmazsa olmazları.",
    date: "5 Ocak 2026"
  },
  {
    image: blogSustainable,
    title: "Anahtar Teslim Tadilatta Doğru Firma Nasıl Seçilir?",
    excerpt: "Sözleşme, garanti, referanslar ve şeffaf fiyatlandırma — güvenilir bir yapı dekorasyon firmasında aramanız gerekenler.",
    date: "28 Aralık 2025"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const BlogSection = () => {
  return (
    <section id="blog" className="section-padding bg-concrete">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Sektörel Bilgiler ve İpuçları
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            İnşaat ve tadilat sektöründeki en güncel gelişmeleri takip edin.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="group bg-background rounded-lg shadow-sm hover:shadow-xl overflow-hidden border border-border hover:border-accent/40 transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs text-muted-foreground uppercase tracking-wide">
                  {post.date}
                </span>
                <h3 className="text-xl font-bold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors duration-200"
                >
                  Devamını Oku
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
