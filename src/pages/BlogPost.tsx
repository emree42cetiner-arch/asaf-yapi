import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import blogBuilding from "@/assets/blog-building.jpg";
import blogSafety from "@/assets/blog-safety.jpg";
import blogSustainable from "@/assets/blog-sustainable.jpg";

const blogPosts: Record<string, any> = {
  "istanbul-komple-ev-tadilati": {
    title: "İstanbul'da Komple Ev Tadilatı Ne Kadar Sürer?",
    date: "12 Ocak 2026",
    image: blogBuilding,
    content: `İstanbul'da komple ev tadilatı ne kadar sürer?" sorusunun tek bir cevabı yoktur. Süre; dairenin metrekaresine, evin boş veya eşyalı olmasına, tesisatın yenilenip yenilenmeyeceğine ve seçilen ürünlerin hazır bulunmasına göre değişir. Planı tamamlanmış, malzemeleri önceden belirlenmiş bir projede 1+1 daire yaklaşık 15–25 iş günü, 2+1 daire 20–35 iş günü, 3+1 ve daha büyük daireler ise 30–45 iş günü içinde tamamlanabilir. Kapsamlı tesisat değişikliği, özel üretim mutfak dolabı, mantolama, çatı tamiri veya ruhsat gerektiren işlemler bu süreyi uzatabilir.

Komple ev tadilatı genellikle keşif ve ölçülendirmeyle başlar. Ardından kırım-söküm, moloz tahliyesi, elektrik ve su tesisatı, banyo su yalıtımı, sıva-alçı, boya badana, seramik, parke, kapı ve dolap montajı gelir. İşlerin doğru sırada ilerlememesi, bitmiş yüzeylerin yeniden kırılmasına ve teslim tarihinin gecikmesine yol açar. Bu nedenle "80 m² ev tadilatı kaç gün sürer?" diye araştırırken yalnızca ekip sayısına değil, firmanın iş programına da bakılmalıdır. Mutfak dolabı, kapı ve özel ölçü mobilyalar daha kırım başlamadan siparişe bağlanırsa bekleme kaynaklı boş günler azaltılabilir.

Fatih'te komple ev tadilatı planlayanlar için bina yaşı ayrıca önemlidir. Eski yapılarda duvar açıldığında yıpranmış temiz su hattı, gider eğimi veya elektrik kabloları görülebilir. Bu riskler keşif sırasında olasılık olarak bütçeye ve takvime eklenmelidir. Güncel İstanbul taleplerinde banyo, mutfak, boya, parke, kapı-pencere, tesisat ve yalıtım işlerinin aynı projede toplandığı görülüyor; bu nedenle net süre ancak kalem kalem keşiften sonra verilebilir.

Fatih merkezli yapı dekorasyon ekibimiz, komple ev tadilatını tek ustaya bağlı ilerleyen dağınık bir süreç yerine, günlük iş planı ve aşamalı kontrol sistemiyle yönetir. Teslim tarihi kadar önemli olan; su yalıtımının bekleme süresine uymak, tesisatı kapatmadan test etmek ve son kontrolde eksik bırakmamaktır.`,
    relatedArticles: [
      { slug: "fatih-banyo-tadilati-dikkat", title: "Banyo Tadilatında Su Yalıtımı" },
      { slug: "anahtar-teslim-tadilat-firma-secimi", title: "Firma Seçim ve Sözleşme" }
    ],
    externalLinks: [
      { title: "Çevre Bakanlığı - İnşaat Atıkları Yönetimi", url: "https://www.csb.gov.tr/" },
      { title: "Fatih Belediyesi - Ruhsat ve İzinler", url: "https://www.fatih.bel.tr/" },
      { title: "İstanbul Teknik Üniversitesi - İnşaat Mühendisliği", url: "https://insaat.itu.edu.tr/" }
    ]
  },
  "fatih-banyo-tadilati-dikkat": {
    title: "Fatih'te Banyo Tadilatı Yaptırırken Nelere Dikkat Edilmeli?",
    date: "5 Ocak 2026",
    image: blogSafety,
    content: `"Fatih'te banyo tadilatı yaptırırken nelere dikkat edilmeli?" sorusunun cevabı yalnızca seramik ve dolap seçiminden ibaret değildir. Özellikle yaşı yüksek binalarda önce temiz su boruları, gider hattı, zemin eğimi ve havalandırma kontrol edilmelidir. Güzel görünen fakat altyapısı yenilenmeyen bir banyo, kısa sürede kaçak, kötü koku veya alt kata su sızması gibi sorunlar çıkarabilir.

Komple banyo tadilatında doğru sıra; ölçü ve yerleşim planı, kırım-söküm, tesisat yenileme, elektrik hazırlığı, zemin düzenleme, su yalıtımı, seramik, tavan, dolap ve vitrifiye montajıdır. "Banyo su yalıtımı nasıl yapılır?" diye araştıranların dikkat etmesi gereken nokta, yalıtımın yalnızca duşakabin altına sürülmemesidir. Islak hacim zemini, duvar birleşimleri, süzgeç çevresi ve boru geçişleri birlikte ele alınmalıdır. Çevre, Şehircilik ve İklim Değişikliği Bakanlığının teknik şartnamesinde ıslak hacim döşemesinde suyun tahliyeye yönlenmesi için en az yüzde 1,5 eğim ve sistem bileşenlerinin birbiriyle uyumlu olması öngörülür.

Küçük banyo tadilatı planlanırken büyük ebat seramik her zaman en iyi seçenek değildir. Kesim miktarı, süzgeç konumu ve duvar kaçıklıkları hesaba katılmadan yapılan seçimler görüntüyü bozabilir. Gömme rezervuar, niş, çamaşır makinesi dolabı veya duş alanı değişecekse ölçüler kırımdan önce netleşmelidir. Banyo ve tuvaletlerde baca ya da mekanik havalandırma bulunması da hem nem hem koku kontrolü açısından önemlidir. Planlı Alanlar İmar Yönetmeliği'nde banyo ve benzeri alanların havalandırma bacası veya mekanik sistemle havalandırılması öngörülmektedir.

"Komple banyo tadilatı kaç gün sürer?" sorusuna çoğu proje için 7–15 iş günü aralığıyla cevap verilebilir; ancak tesisatın tamamen değişmesi, özel ölçü duşakabin ve dolap üretimi süreyi uzatabilir. Teklif alırken su yalıtımının markası, kaç kat uygulanacağı, seramik işçiliği, moloz taşıma, vitrifiye montajı ve teslim sonrası garanti ayrı ayrı yazılmalıdır.

Fatih merkezli ekibimiz; banyo tadilatı, su yalıtımı, tesisat yenileme, seramik ve boya işlerini tek plan altında yöneterek sonradan ortaya çıkan sürprizleri azaltmayı hedefler.`,
    relatedArticles: [
      { slug: "istanbul-komple-ev-tadilati", title: "Komple Ev Tadilatı Süresi" },
      { slug: "anahtar-teslim-tadilat-firma-secimi", title: "Güvenilir Firma Seçimi" }
    ],
    externalLinks: [
      { title: "TS 5447 - Su Yalıtımı Standartları", url: "https://www.tse.org.tr/" },
      { title: "Çevre Bakanlığı - İnşaat Teknik Şartnamesi", url: "https://www.csb.gov.tr/" },
      { title: "Türk Tesisat Mühendisleri Derneği", url: "https://www.ttmd.org.tr/" }
    ]
  },
  "anahtar-teslim-tadilat-firma-secimi": {
    title: "Anahtar Teslim Tadilatta Doğru Firma Nasıl Seçilir?",
    date: "28 Aralık 2025",
    image: blogSustainable,
    content: `"Anahtar teslim tadilatta doğru firma nasıl seçilir?" sorusunun cevabı, en düşük fiyatı veren firmayı bulmak değildir. Doğru firma; keşif yapan, işleri yazılı hale getiren, malzeme sınıfını açıkça belirten ve süreci tek sorumlu üzerinden yöneten firmadır. "Fatih anahtar teslim tadilat firması" aramasındaki teklifleri toplam rakama göre değil, kapsamlarına göre karşılaştırın.

İyi hazırlanmış bir tadilat sözleşmesinde kırım-söküm, moloz tahliyesi, elektrik ve su tesisatı, banyo, mutfak, boya badana, parke, kapı, su yalıtımı, mantolama veya çatı tamiri ayrı ayrı yazılmalıdır. Ürünlerin marka-serisi, metrajı, işçilik kapsamı, başlangıç ve bitiş tarihi, ödeme aşamaları ve ilave işler için onay yöntemi belirtilmelidir. "Anahtar teslim ev tadilatı fiyatı neleri kapsar?" sorusunun cevabı sözleşmede yoksa, başlangıçta uygun görünen teklif sonradan pahalı hale gelebilir.

Referans kontrolünde yalnızca bitmiş fotoğraflara bakmayın. Mümkünse devam eden bir şantiyeyi görün; köşe dönüşlerini, seramik derzlerini, boya yüzeyini ve çalışma düzenini inceleyin. Firmanın ustaları nasıl koordine ettiğini, günlük sorumlunun kim olduğunu ve gecikmede nasıl bilgi verdiğini sorun. Teklifte molozun nasıl uzaklaştırılacağı da yer almalıdır; İstanbul'da inşaat ve yıkıntı atıkları izinli taşıma ve bertaraf süreçlerine tabidir.

Fatih'te duvar kaldırma, cepheye müdahale, çatı değişikliği veya planı etkileyen işler yapılacaksa işe başlamadan önce belediye ve apartman yönetimi açısından gerekli izinler kontrol edilmelidir. Fatih Belediyesinin faaliyet raporlarında "dahili tadilat ruhsatı" ayrı bir işlem olarak izlenmektedir; bu nedenle "içeride yapılıyor, izin gerekmez" varsayımıyla hareket etmek doğru değildir.

Fatih merkezli yapı dekorasyon ekibimiz, keşiften teslimata kadar tek muhatap, yazılı iş programı ve aşama kontrolüyle çalışır. Güvenilir anahtar teslim tadilat; güzel bir sonuç kadar, bütçenin ve teslim tarihinin baştan yönetilmesidir.`,
    relatedArticles: [
      { slug: "istanbul-komple-ev-tadilati", title: "Komple Ev Tadilatı Süresi" },
      { slug: "fatih-banyo-tadilati-dikkat", title: "Banyo Tadilatında Dikkat Edilecekler" }
    ],
    externalLinks: [
      { title: "Fatih Belediyesi - Ruhsat ve İzinler", url: "https://www.fatih.bel.tr/" },
      { title: "Çevre Bakanlığı - İnşaat Atıkları Yönetimi", url: "https://www.csb.gov.tr/" },
      { title: "Tüketici Hakları Derneği", url: "https://www.tuhder.org.tr/" },
      { title: "Ticaret Odası - Müşteri Hakları", url: "https://www.itob.org.tr/" }
    ]
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Yazı Bulunamadı</h1>
          <p className="text-muted-foreground mb-8">Aradığınız blog yazısı mevcut değil.</p>
          <Link to="/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80">
            <ArrowLeft className="h-4 w-4" />
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-96 md:h-[500px] overflow-hidden"
      >
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="container-custom py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          {/* Back Button */}
          <Link
            to="/#blog"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Blog'a Dön
          </Link>

          {/* Meta */}
          <div className="flex items-center gap-2 text-muted-foreground mb-4">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">{post.date}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
            {post.title}
          </h1>

          {/* Divider */}
          <div className="h-1 w-16 bg-accent rounded-full mb-8" />

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            {post.content.split('\n\n').map((paragraph: string, index: number) => (
              <p
                key={index}
                className="text-lg text-muted-foreground leading-relaxed mb-6 text-justify"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Related Articles Section */}
          {post.relatedArticles && post.relatedArticles.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 p-8 bg-concrete rounded-lg border border-border"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">İlgili Yazılar</h3>
              <div className="space-y-3">
                {post.relatedArticles.map((article: any, idx: number) => (
                  <Link
                    key={idx}
                    to={`/blog/${article.slug}`}
                    className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors group"
                  >
                    <span className="text-lg">→</span>
                    <span className="group-hover:underline">{article.title}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

          {/* External Resources Section */}
          {post.externalLinks && post.externalLinks.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 p-8 bg-background border border-border rounded-lg"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">Otoriter Kaynaklar</h3>
              <div className="space-y-3">
                {post.externalLinks.map((link: any, idx: number) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors group"
                  >
                    <span className="text-lg">↗</span>
                    <span className="group-hover:underline">{link.title}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          )}

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 bg-concrete rounded-lg border border-border"
          >
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Hizmetlerimiz Hakkında Bilgi Almak İster misiniz?
            </h3>
            <p className="text-muted-foreground mb-6">
              Fatih'te tadilat, dekorasyon ve yapı işleri konusunda profesyonel danışmanlık ve uygulama hizmetleri sunuyoruz.
            </p>
            <a
              href="tel:+905XXXXXXXXX"
              className="inline-block px-6 py-3 bg-accent hover:bg-accent/90 text-white rounded-lg font-semibold transition-colors"
            >
              İletişime Geç
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;
