import {
  Home,
  Bath,
  ChefHat,
  Paintbrush,
  Layers,
  Building2,
  PaintBucket,
  Droplets,
  Warehouse,
  Square,
  LucideIcon,
} from "lucide-react";

export interface ServiceSummary {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  excerpt: string;
  href: string;
}

export interface ServiceDetail extends ServiceSummary {
  seoTitle: string;
  seoDescription: string;
  h1: string;
  intro: string[];
  process: { title: string; description: string }[];
  benefits: string[];
  faq: { question: string; answer: string }[];
  related: string[];
}

const BASE = "/hizmetler";

// Full detailed services (have dedicated pages)
export const detailedServices: ServiceDetail[] = [
  {
    slug: "komple-ev-tadilati",
    title: "Komple Ev Tadilatı",
    shortTitle: "Komple Ev Tadilatı",
    icon: Home,
    excerpt:
      "Anahtar teslim komple ev yenileme: yıkım, tesisat, boya, dekorasyon dahil A'dan Z'ye tadilat.",
    href: `${BASE}/komple-ev-tadilati`,
    seoTitle: "Fatih Komple Ev Tadilatı | Anahtar Teslim | Asaf Yapı",
    seoDescription:
      "Fatih ve İstanbul genelinde anahtar teslim komple ev tadilatı. Elektrik, su tesisatı, boya, mutfak ve banyo dahil profesyonel yenileme hizmeti.",
    h1: "Fatih Komple Ev Tadilatı ve Anahtar Teslim Yenileme",
    intro: [
      "Asaf Yapı olarak Fatih merkezli ekibimizle İstanbul'un tüm ilçelerinde komple ev tadilatı hizmeti sunuyoruz. Eski dairenizi, evinizi veya iş yerinizi baştan sona yeniliyor; elektrik, sıhhi tesisat, alçıpan, boya, mutfak ve banyo dahil tüm işleri tek elden yönetiyoruz.",
      "20 yılı aşkın tecrübemizle projelerinizi zamanında, bütçenize uygun ve garantili biçimde teslim ediyoruz. Ücretsiz keşif ve şeffaf fiyatlandırma ile sürpriz maliyetlere yer bırakmıyoruz.",
    ],
    process: [
      { title: "Ücretsiz Keşif", description: "Uzman ekibimiz adresinize gelir, ölçü alır ve ihtiyaçlarınızı dinler." },
      { title: "Detaylı Teklif", description: "Malzeme ve işçilik kalemleri dahil şeffaf, yazılı bir teklif sunarız." },
      { title: "Planlama", description: "İş takvimi, teslim tarihi ve malzeme seçimleri birlikte netleştirilir." },
      { title: "Uygulama", description: "Yıkım, tesisat, alçıpan, boya ve dekorasyon aşamaları koordineli yürütülür." },
      { title: "Teslim ve Garanti", description: "Temizlik sonrası kontrol yapılır ve yazılı işçilik garantisi verilir." },
    ],
    benefits: [
      "Tek firmadan komple çözüm — koordinasyon derdi yok",
      "Yazılı iş sözleşmesi ve işçilik garantisi",
      "Zamanında teslim taahhüdü",
      "Ücretsiz keşif ve şeffaf fiyat",
      "Fatih merkezli, İstanbul geneli hızlı servis",
    ],
    faq: [
      { question: "Komple ev tadilatı ne kadar sürer?", answer: "Ortalama 2+1 bir dairede süre 3-6 hafta arasında değişir. Proje kapsamı, malzeme temin süresi ve yıkım miktarına bağlıdır." },
      { question: "Tadilat fiyatı metrekareye göre mi belirleniyor?", answer: "Fiyat; metrekare, kullanılacak malzeme kalitesi ve iş kapsamına göre belirlenir. Ücretsiz keşif sonrası net teklif sunuyoruz." },
      { question: "Fatih dışındaki ilçelere hizmet veriyor musunuz?", answer: "Evet. Fatih merkezli olmakla birlikte Eminönü, Balat, Zeytinburnu, Beyoğlu, Bakırköy ve İstanbul'un tüm ilçelerinde hizmet veriyoruz." },
      { question: "Malzemeleri siz mi temin ediyorsunuz?", answer: "Talebe göre hem sadece işçilik hem de anahtar teslim (malzeme dahil) çalışıyoruz." },
    ],
    related: ["banyo-tadilati", "mutfak-tadilati", "boya-badana"],
  },
  {
    slug: "banyo-tadilati",
    title: "Banyo Tadilatı",
    shortTitle: "Banyo Tadilatı",
    icon: Bath,
    excerpt: "Seramik, vitrifiye, duş kabin, sıhhi tesisat ve su yalıtımı dahil komple banyo yenileme.",
    href: `${BASE}/banyo-tadilati`,
    seoTitle: "Fatih Banyo Tadilatı | Komple Banyo Yenileme | Asaf Yapı",
    seoDescription:
      "Fatih ve çevresinde banyo tadilatı: seramik, vitrifiye, duşakabin, su yalıtımı, sıhhi tesisat. Ücretsiz keşif ve garantili işçilik.",
    h1: "Fatih Banyo Tadilatı ve Komple Banyo Yenileme",
    intro: [
      "Banyonuzu modern, ferah ve konforlu bir alana dönüştürüyoruz. Eski seramikleri sökme, sıhhi tesisat yenileme, su yalıtımı, duşakabin ve vitrifiye montajı dahil tüm süreci yönetiyoruz.",
      "Fatih merkezli ekibimizle küçük banyoları bile fonksiyonel ve şık hale getiren çözümler sunuyoruz.",
    ],
    process: [
      { title: "Keşif ve Ölçüm", description: "Banyoya gelip mevcut durumu inceler, ihtiyacı belirleriz." },
      { title: "Tasarım Önerisi", description: "Alan verimliliği ve estetik odaklı seramik ve vitrifiye seçimi." },
      { title: "Sökme ve Tesisat", description: "Eski kaplama sökülür, sıhhi tesisat ve gider yenilenir." },
      { title: "Su Yalıtımı", description: "Duş alanı ve zemin su yalıtımı ile sızıntı problemine son verilir." },
      { title: "Kaplama ve Montaj", description: "Seramik döşeme, vitrifiye ve duşakabin montajı ile teslim." },
    ],
    benefits: [
      "Su yalıtımı ile sızıntı garantisi",
      "Küçük banyolarda alan kazandıran çözümler",
      "Kaliteli marka vitrifiye ve armatür seçenekleri",
      "Ortalama 5-10 günde teslim",
      "Yazılı işçilik garantisi",
    ],
    faq: [
      { question: "Banyo tadilatı ne kadar sürer?", answer: "Standart bir banyo tadilatı ortalama 5-10 iş günü sürer." },
      { question: "Su yalıtımı yapıyor musunuz?", answer: "Evet, her banyo tadilatında zemin ve duş bölgesinde su yalıtımı standart olarak uygulanır." },
      { question: "Sadece seramik döşeme yapıyor musunuz?", answer: "Evet, hem komple tadilat hem sadece seramik veya sadece vitrifiye montajı yapıyoruz." },
    ],
    related: ["komple-ev-tadilati", "su-yalitimi", "mutfak-tadilati"],
  },
  {
    slug: "mutfak-tadilati",
    title: "Mutfak Tadilatı",
    shortTitle: "Mutfak Tadilatı",
    icon: ChefHat,
    excerpt: "Mutfak dolabı, tezgah, seramik, tesisat ve dekorasyon dahil komple mutfak yenileme.",
    href: `${BASE}/mutfak-tadilati`,
    seoTitle: "Fatih Mutfak Tadilatı | Komple Mutfak Yenileme | Asaf Yapı",
    seoDescription:
      "Fatih İstanbul'da komple mutfak tadilatı: dolap, tezgah, seramik, su ve elektrik tesisatı. Ücretsiz keşif ve garantili işçilik.",
    h1: "Fatih Mutfak Tadilatı ve Modern Mutfak Yenileme",
    intro: [
      "Mutfağınızı ihtiyaçlarınıza göre yeniden tasarlıyor; dolap, tezgah, seramik, elektrik ve su tesisatı dahil komple yenileme yapıyoruz.",
      "Amerikan mutfak dönüşümleri, ada tezgah uygulamaları ve dar mutfaklar için özel çözümler sunuyoruz.",
    ],
    process: [
      { title: "Keşif ve İhtiyaç Analizi", description: "Kullanım alışkanlıklarınıza uygun mutfak planı çıkarılır." },
      { title: "Tasarım", description: "Dolap, tezgah ve renk seçimleri birlikte kararlaştırılır." },
      { title: "Sökme ve Alt Yapı", description: "Eski dolaplar sökülür, tesisat ve elektrik yenilenir." },
      { title: "Uygulama", description: "Seramik, dolap ve tezgah montajı yapılır." },
      { title: "Kontrol ve Teslim", description: "Ankastre bağlantıları test edilir, temiz teslim edilir." },
    ],
    benefits: [
      "Amerikan mutfak dönüşümü uzmanlığı",
      "Kaliteli MDF ve akrilik dolap seçenekleri",
      "Granit, kuvars ve çimstone tezgah",
      "Ankastre uyumlu tesisat düzenlemesi",
      "Yazılı garanti",
    ],
    faq: [
      { question: "Amerikan mutfak dönüşümü yapıyor musunuz?", answer: "Evet, statik olarak uygun duvarlarda yıkım ve amerikan mutfak dönüşümü yapıyoruz." },
      { question: "Mutfak dolabı hangi malzemelerden yapılıyor?", answer: "MDF laminat, membran, akrilik ve lake seçenekleri sunuyoruz." },
      { question: "Mutfak tadilatı ne kadar sürer?", answer: "Ortalama 7-14 iş günü içerisinde tamamlanır." },
    ],
    related: ["komple-ev-tadilati", "banyo-tadilati", "boya-badana"],
  },
  {
    slug: "boya-badana",
    title: "Boya Badana",
    shortTitle: "Boya Badana",
    icon: Paintbrush,
    excerpt: "İç mekan boya, badana, dekoratif boya ve macun uygulamaları. Temiz, hızlı, garantili.",
    href: `${BASE}/boya-badana`,
    seoTitle: "Fatih Boya Badana | İç Mekan Boya Ustası | Asaf Yapı",
    seoDescription:
      "Fatih İstanbul boya badana hizmeti. Saten, plastik, silikonlu boya ve dekoratif uygulamalar. Temiz iş, hızlı teslim.",
    h1: "Fatih Boya Badana Hizmeti ve İç Mekan Boya Uygulaması",
    intro: [
      "Ev, ofis ve iş yerleri için profesyonel boya badana hizmeti sunuyoruz. Saten, silikonlu, plastik ve tavan boyası uygulamalarında marka kalitesiyle çalışıyoruz.",
      "Eski boya kazıma, çatlak tamiri, macun ve astar dahil eksiksiz uygulama yapıyoruz.",
    ],
    process: [
      { title: "Yüzey Hazırlığı", description: "Eski boya kazınır, çatlaklar açılır ve temizlenir." },
      { title: "Macun ve Zımpara", description: "Yüzey macunlanır ve pürüzsüzleşene kadar zımparalanır." },
      { title: "Astar", description: "Kaliteli astar ile alt zemin hazırlanır." },
      { title: "Boya Uygulaması", description: "İki veya üç kat boya uygulanır, kaliteli sonuç garanti edilir." },
      { title: "Temizlik", description: "Tüm alanlar tertemiz teslim edilir." },
    ],
    benefits: [
      "Kaliteli marka boya kullanımı",
      "Mobilyaların örtülmesi ve korunması",
      "Hızlı teslim (bir daire 1-3 gün)",
      "Uygun fiyat",
      "Temiz iş, artıksız teslim",
    ],
    faq: [
      { question: "Bir daire boyaması ne kadar sürer?", answer: "2+1 bir daire ortalama 2-3 iş gününde teslim edilir." },
      { question: "Hangi boya markalarını kullanıyorsunuz?", answer: "Tercihinize göre Filli Boya, Marshall, Dyo, Polisan gibi markalarla çalışıyoruz." },
      { question: "Mobilyaları taşımam gerekiyor mu?", answer: "Hayır, mobilyalar naylon ile örtülür ve odanın ortasına toplanır." },
    ],
    related: ["komple-ev-tadilati", "mantolama", "banyo-tadilati"],
  },
  {
    slug: "mantolama",
    title: "Mantolama",
    shortTitle: "Mantolama",
    icon: Layers,
    excerpt: "Dış cephe mantolama ile ısı yalıtımı, yakıt tasarrufu ve modern görünüm.",
    href: `${BASE}/mantolama`,
    seoTitle: "Fatih Mantolama | Dış Cephe Isı Yalıtımı | Asaf Yapı",
    seoDescription:
      "Fatih ve İstanbul genelinde mantolama, dış cephe ısı yalıtımı. EPS, XPS ve taş yünü ile yakıt tasarrufu.",
    h1: "Fatih Mantolama ve Dış Cephe Isı Yalıtımı",
    intro: [
      "Mantolama ile binanızın dış cephesini ısı yalıtımı yaparak enerji faturanızı %50'ye varan oranlarda düşürüyoruz. EPS, XPS ve taş yünü seçenekleriyle projenize uygun çözüm sunuyoruz.",
      "Deneyimli ustalarımız ile TSE standartlarına uygun uygulama yapıyoruz.",
    ],
    process: [
      { title: "Cephe İncelemesi", description: "Cephe durumu ve uygun malzeme belirlenir." },
      { title: "İskele Kurulumu", description: "Güvenli çalışma için iskele kurulur." },
      { title: "Yalıtım Levha Uygulaması", description: "EPS/XPS levhalar aplike edilir ve dübellenir." },
      { title: "Sıva ve File", description: "Yalıtım üzerine file ve sıva uygulanır." },
      { title: "Dekoratif Kaplama", description: "Silikonlu boya veya dekoratif sıva ile bitiş yapılır." },
    ],
    benefits: [
      "%50'ye varan yakıt tasarrufu",
      "Küf ve nem problemine son",
      "Modern dış cephe görünümü",
      "TSE uyumlu malzeme kullanımı",
      "Uzun ömürlü uygulama",
    ],
    faq: [
      { question: "Mantolama fiyatı nasıl hesaplanır?", answer: "Cephe metrekaresi, seçilen yalıtım kalınlığı ve dekoratif kaplamaya göre hesaplanır." },
      { question: "Mantolamada hangi malzeme daha iyi?", answer: "En yaygın kullanım EPS'dir; ıslak zeminler için XPS, yangın dayanımı için taş yünü tercih edilir." },
      { question: "Bina sakinlerinin oy birliği gerekli mi?", answer: "Genellikle kat maliklerinin çoğunluk kararı yeterlidir; yönetim planı incelenmelidir." },
    ],
    related: ["su-yalitimi", "cati-tamiri", "boya-badana"],
  },
  {
    slug: "su-yalitimi",
    title: "Su Yalıtımı",
    shortTitle: "Su Yalıtımı",
    icon: Droplets,
    excerpt: "Teras, balkon, banyo ve temel su yalıtımı. Sızıntı ve nem problemine kesin çözüm.",
    href: `${BASE}/su-yalitimi`,
    seoTitle: "Fatih Su Yalıtımı | Teras, Banyo, Temel Yalıtım | Asaf Yapı",
    seoDescription:
      "Fatih ve İstanbul su yalıtımı hizmetleri. Teras, balkon, banyo, temel ve bodrum yalıtımı. Sızıntı ve rutubete kesin çözüm.",
    h1: "Fatih Su Yalıtımı ve Sızıntı Çözümleri",
    intro: [
      "Teras, balkon, banyo, bodrum ve temel gibi su ile temas eden tüm alanlarda profesyonel su yalıtımı hizmeti sunuyoruz. Çimento esaslı, poliüretan ve likit membran uygulamalarıyla uzun ömürlü çözümler üretiyoruz.",
      "Sızıntı tespiti ve nokta müdahaleden komple yalıtım projelerine kadar hizmet veriyoruz.",
    ],
    process: [
      { title: "Sızıntı Tespiti", description: "Sorunun kaynağı tespit edilir." },
      { title: "Yüzey Hazırlığı", description: "Yüzey temizlenir, çatlaklar açılır." },
      { title: "Astar Uygulaması", description: "Yapışmayı artıran astar sürülür." },
      { title: "Yalıtım Katmanı", description: "Uygun malzeme ile iki kat yalıtım uygulanır." },
      { title: "Koruyucu Kat", description: "Şap veya seramik ile üstü korunur." },
    ],
    benefits: [
      "Sızıntı ve rutubete kalıcı çözüm",
      "10 yıla kadar uzun ömür",
      "Küf ve mantar oluşumunu engeller",
      "Yapı ömrünü uzatır",
      "Yazılı garanti",
    ],
    faq: [
      { question: "Su yalıtımı ne kadar dayanır?", answer: "Doğru uygulama ile 10-15 yıl arasında sorunsuz kullanım sağlar." },
      { question: "Teras yalıtımı sırasında seramikleri sökmek gerekir mi?", answer: "Genellikle eski seramik sökülür; bazı ürünlerle üstten uygulama da mümkündür." },
      { question: "Banyo yalıtımı için tadilat şart mı?", answer: "Ciddi sızıntılarda seramikler sökülerek komple yalıtım tavsiye edilir." },
    ],
    related: ["banyo-tadilati", "cati-tamiri", "mantolama"],
  },
  {
    slug: "cati-tamiri",
    title: "Çatı Tamiri",
    shortTitle: "Çatı Tamiri",
    icon: Warehouse,
    excerpt: "Kiremit aktarma, çatı yalıtımı, oluk ve akıntı tamiri. Deneyimli çatı ustaları.",
    href: `${BASE}/cati-tamiri`,
    seoTitle: "Fatih Çatı Tamiri | Kiremit Aktarma ve Çatı Yalıtımı | Asaf Yapı",
    seoDescription:
      "Fatih İstanbul çatı tamiri ve kiremit aktarma. Çatı akıntısı, oluk tamiri, çatı yalıtımı. Ücretsiz keşif.",
    h1: "Fatih Çatı Tamiri, Kiremit Aktarma ve Çatı Yalıtımı",
    intro: [
      "Çatı akıntısı, kırık kiremit, kopan oluk gibi tüm çatı problemlerinize hızlı ve garantili çözüm sunuyoruz. Kiremit aktarma, çatı yalıtımı, oluk değişimi ve komple çatı yenileme işlerini deneyimli ustalarımızla yapıyoruz.",
    ],
    process: [
      { title: "Çatı İncelemesi", description: "Çatı kontrol edilir, sorun tespit edilir." },
      { title: "Detaylı Teklif", description: "Yapılacak işler ve malzemeler netleştirilir." },
      { title: "Sökme ve Onarım", description: "Bozuk kiremit, oluk ve ahşap malzemeler değiştirilir." },
      { title: "Yalıtım", description: "Gerekli görülen alanlarda su ve ısı yalıtımı uygulanır." },
      { title: "Kontrol ve Teslim", description: "Su testi yapılır ve garantili teslim edilir." },
    ],
    benefits: [
      "Deneyimli çatı ustaları",
      "Kiremit, membran ve shingle uygulamaları",
      "Oluk ve iniş borusu değişimi",
      "Su testi ile garantili teslim",
      "Ücretsiz keşif",
    ],
    faq: [
      { question: "Çatı akıntısı için nokta tamir yapıyor musunuz?", answer: "Evet, komple aktarma yerine nokta müdahale de yapıyoruz." },
      { question: "Kiremit aktarma ne kadar sürer?", answer: "Standart bir apartman çatısı 2-5 iş gününde tamamlanır." },
      { question: "Kışın çatı tamiri yapılabilir mi?", answer: "Yağışsız günlerde kış aylarında da nokta müdahale yapılabilir." },
    ],
    related: ["su-yalitimi", "mantolama", "komple-ev-tadilati"],
  },
];

// All services (summaries used in homepage grid). The extra services link to detail pages
// only if available; otherwise link to /#hizmetler.
export const allServices: ServiceSummary[] = [
  ...detailedServices.map(({ slug, title, shortTitle, icon, excerpt, href }) => ({
    slug, title, shortTitle, icon, excerpt, href,
  })),
  {
    slug: "alcipan-asma-tavan",
    title: "Alçıpan ve Asma Tavan",
    shortTitle: "Alçıpan & Asma Tavan",
    icon: Square,
    excerpt: "Alçıpan bölme duvar, asma tavan ve dekoratif kartonpiyer uygulamaları.",
    href: "/#hizmetler",
  },
  {
    slug: "dis-cephe-boya",
    title: "Dış Cephe Boya",
    shortTitle: "Dış Cephe Boya",
    icon: PaintBucket,
    excerpt: "Silikonlu ve elastomerik dış cephe boyaları ile uzun ömürlü kaplama.",
    href: "/#hizmetler",
  },
  {
    slug: "zemin-kaplama",
    title: "Zemin Kaplama",
    shortTitle: "Zemin Kaplama",
    icon: Building2,
    excerpt: "Laminat parke, seramik, vinil ve epoksi zemin kaplama uygulamaları.",
    href: "/#hizmetler",
  },
];

export const getServiceBySlug = (slug: string) =>
  detailedServices.find((s) => s.slug === slug);
