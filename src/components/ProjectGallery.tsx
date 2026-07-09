import renovationImage from "@/assets/renovation-interior.jpg";
import mechanicalImage from "@/assets/mechanical-installation.jpg";
import blogBuilding from "@/assets/blog-building.jpg";
import blogSustainable from "@/assets/blog-sustainable.jpg";
import heroConstruction from "@/assets/hero-construction.jpg";
import blogSafety from "@/assets/blog-safety.jpg";

const images = [
  { src: renovationImage, alt: "Modern iç mekan tadilat projesi — Fatih" },
  { src: mechanicalImage, alt: "Mekanik tesisat uygulaması" },
  { src: blogBuilding, alt: "Bina cephe yenileme çalışması" },
  { src: blogSustainable, alt: "Sürdürülebilir tadilat projesi" },
  { src: heroConstruction, alt: "İnşaat sahası — İstanbul" },
  { src: blogSafety, alt: "İş güvenliği uygulaması" },
];

const ProjectGallery = () => {
  return (
    <section id="projeler" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Galeri
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Proje Galerimiz
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <div key={i} className="overflow-hidden group rounded-lg">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
