import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mehmet K.",
    location: "Fatih, İstanbul",
    text: "Evimizin komple tadilatını Asaf Yapı ekibine yaptırdık. Söz verdikleri tarihte, temiz ve kaliteli işçilikle teslim ettiler. Kesinlikle tavsiye ederim.",
  },
  {
    name: "Ayşe D.",
    location: "Balat, İstanbul",
    text: "Banyo tadilatımızda su yalıtımından seramiğe kadar her şeyi profesyonelce yaptılar. Fiyat/kalite performansı çok iyi.",
  },
  {
    name: "Selim B.",
    location: "Eminönü, İstanbul",
    text: "Mutfak dolabımızı ve tezgahımızı yeniledik. Ölçüm ve montaj kusursuz. Ekip son derece nazik ve düzenli çalıştı.",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-concrete">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Müşteri Yorumları
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Müşterilerimiz Ne Diyor?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <article key={i} className="bg-background border border-border p-6 md:p-8 relative">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-accent/20" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6">"{t.text}"</p>
              <div className="border-t border-border pt-4">
                <div className="font-bold text-foreground">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.location}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
