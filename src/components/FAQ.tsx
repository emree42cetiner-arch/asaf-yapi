import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const homepageFaq = [
  {
    q: "Tadilat fiyatı nasıl belirlenir?",
    a: "Tadilat fiyatı; işin metrekaresi, kullanılacak malzeme kalitesi, iş kapsamı (yıkım, tesisat, boya, mutfak, banyo vb.) ve teslim süresine göre belirlenir. Ücretsiz keşif sonrasında; işçilik, malzeme ve süre kalemlerini ayrı ayrı içeren yazılı ve şeffaf bir teklif sunuyoruz. Sürpriz maliyet çıkarmıyoruz.",
  },
  {
    q: "Ücretsiz keşif yapıyor musunuz?",
    a: "Evet. Fatih ve İstanbul geneli tüm projelerde adresinize gelip ölçü alıyor, ihtiyacınızı dinliyor ve aynı gün ya da bir iş günü içinde yazılı fiyat teklifimizi sunuyoruz. Keşif ve teklif tamamen ücretsizdir.",
  },
  {
    q: "İstanbul'un hangi ilçelerine hizmet veriyorsunuz?",
    a: "Fatih merkezli çalışıyoruz; Eminönü, Balat, Fındıkzade, Aksaray, Beyazıt, Laleli, Zeytinburnu, Eyüpsultan, Beyoğlu, Şişli, Beşiktaş, Bakırköy, Bahçelievler, Başakşehir, Esenler ve İstanbul genelinde tadilat, dekorasyon ve yapı hizmetleri sunuyoruz.",
  },
  {
    q: "Tadilat süresi neye göre değişir?",
    a: "Süre; dairenin metrekaresi, yıkım miktarı, tesisat yenileme kapsamı, seçilen malzemelerin tedarik süresi ve iş yoğunluğuna göre değişir. Ortalama olarak 2+1 bir daire komple tadilat 3-6 hafta, banyo tadilatı 5-10 iş günü, mutfak tadilatı 7-14 iş günü içinde teslim edilir. Sözleşmede net teslim tarihi belirtilir.",
  },
  {
    q: "Malzeme temini size mi ait?",
    a: "Talebinize göre iki modelimiz var: yalnızca işçilik verdiğimiz sözleşme veya anahtar teslim (malzeme dahil) çalışma. Anahtar teslim modelde seramik, boya, vitrifiye, dolap gibi tüm malzemeleri sizin adınıza kaliteli markalardan tedarik ediyoruz.",
  },
  {
    q: "İşçilik garantisi veriyor musunuz?",
    a: "Evet. Tamamlanan her iş için yazılı işçilik garantisi veriyoruz. Su yalıtımı, mantolama ve tesisat gibi kritik işlerde garanti süresi 2 yıla kadar uzayabilir. Teslimden sonra da destek hizmetimiz devam eder.",
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
