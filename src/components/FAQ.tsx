import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const homepageFaq = [
  {
    q: "Fatih dışında hangi ilçelere hizmet veriyorsunuz?",
    a: "Fatih merkezli olarak Eminönü, Balat, Fındıkzade, Aksaray, Beyazıt, Laleli, Zeytinburnu, Eyüpsultan, Beyoğlu, Bakırköy, Bahçelievler, Başakşehir, Esenler dahil İstanbul'un tüm ilçelerinde hizmet veriyoruz.",
  },
  {
    q: "Keşif ve teklif ücretli mi?",
    a: "Hayır. Adresinize gelip ölçüm alıyor ve size ücretsiz, yazılı bir fiyat teklifi sunuyoruz.",
  },
  {
    q: "Tadilat işleri için garanti veriyor musunuz?",
    a: "Evet. Tamamlanan tüm işler için yazılı işçilik garantisi veriyoruz.",
  },
  {
    q: "Malzemeleri siz mi temin ediyorsunuz?",
    a: "Talebe göre hem yalnızca işçilik hem de anahtar teslim (malzeme dahil) çalışma modelimiz var.",
  },
  {
    q: "Ödeme nasıl yapılıyor?",
    a: "İşin başında avans, ara ödemeler ve teslimde bakiye şeklinde sözleşmede belirtilen plana göre ilerliyoruz.",
  },
  {
    q: "Tadilat sırasında evde kalabilir miyim?",
    a: "Küçük çaplı işlerde evet, komple tadilatlarda toz ve gürültü sebebiyle geçici olarak boşaltılması önerilir.",
  },
];

interface FAQProps {
  items?: { q: string; a: string }[];
  title?: string;
  includeSchema?: boolean;
}

const FAQ = ({ items = homepageFaq, title = "Sıkça Sorulan Sorular", includeSchema = true }: FAQProps) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };

  return (
    <section id="sss" className="section-padding bg-background">
      {includeSchema && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        </Helmet>
      )}
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            SSS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            {title}
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {items.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-semibold text-foreground">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
