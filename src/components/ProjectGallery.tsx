import kitchenImage from "@/assets/kitchen.webp";
import doorImage from "@/assets/door.webp";
import windowImage from "@/assets/window.webp";
import railingImage from "@/assets/railing.webp";
import balconyImage from "@/assets/balcony.webp";
import lightingImage from "@/assets/lighting.webp";

const images = [
  { src: kitchenImage, alt: "Profesyonel mutfak tadilat projesi" },
  { src: doorImage, alt: "Kaliteli kapı ve giriş çalışması" },
  { src: windowImage, alt: "Cam işleri ve pencereleme uygulaması" },
  { src: railingImage, alt: "Korkuluk ve dekoratif metal işleri" },
  { src: balconyImage, alt: "Balkon yenileme ve tasarımı" },
  { src: lightingImage, alt: "Profesyonel aydınlatma kurulumu" },
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
