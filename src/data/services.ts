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
  contentSections?: {
    title: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
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
    excerpt: "Fatih'te elektrik, su tesisatı, mutfak, banyo, zemin ve boya işlerini birlikte planlayan komple ev yenileme hizmeti.",
    href: `${BASE}/komple-ev-tadilati`,
    seoTitle: "Fatih Komple Ev Tadilatı | Anahtar Teslim Yenileme",
    seoDescription: "Fatih'te eski daireler için keşif, tesisat, mutfak, banyo, zemin ve boya işlerini kapsayan planlı komple ev tadilatı hizmeti.",
    h1: "Fatih Komple Ev Tadilatı ve Anahtar Teslim Yenileme",
    intro: [
      "Fatih'te komple ev tadilatı, yalnızca evin görünümünü değiştirmekten ibaret değildir. Özellikle uzun yıllardır kullanılan apartman dairelerinde elektrik hatları, temiz ve atık su tesisatı, mutfak ile banyo altyapısı, zemin kaplamaları, duvar yüzeyleri, kapılar ve depolama alanları birlikte değerlendirilmelidir. Küçükler Yapı Dekorasyon olarak uygulama kapsamını hazır bir paket üzerinden değil, evin mevcut durumu ve kullanıcıların günlük ihtiyaçları üzerinden belirliyoruz.",
      "Aksaray, Fındıkzade, Çapa, Şehremini, Kocamustafapaşa, Yedikule, Balat ve çevresindeki eski yapılarda aynı metrekareye sahip iki dairenin ihtiyacı birbirinden tamamen farklı olabilir. Bir evde rutubet ve eski tesisat öne çıkarken başka bir evde dar mutfak, yetersiz priz, kullanışsız koridor veya depolama sorunu bulunabilir. Bu nedenle keşif, ölçülendirme, iş sıralaması ve malzeme kararı birlikte ele alınmalıdır."
    ],
    contentSections: [
      {
        title: "Fatih'te Komple Ev Tadilatı Hangi İşleri Kapsar?",
        paragraphs: [
          "Anahtar teslim komple ev tadilatı; söküm ve kırım işlemlerinden başlayarak elektrik ve sıhhi tesisatın kontrolü, mutfak ve banyo yenilemesi, duvar ile tavan hazırlığı, zemin kaplamaları, iç kapılar, boya ve son montajlara kadar uzanan bütünlüklü bir çalışma olabilir. Her evde bütün iş kalemlerinin uygulanması gerekmez. Kapsam, dairenin sorunları ve ev sahibinin öncelikleri belirlendikten sonra netleştirilir.",
          "Komple çalışmanın temel avantajı farklı ustalık alanlarının doğru sırayla yürütülmesidir. Örneğin elektrik ve su hatları duvarlar kapatılmadan önce hazırlanmalı, banyo su yalıtımı seramikten önce tamamlanmalı, mutfak dolaplarının ölçüsü tesisat ve zemin kararlarıyla uyumlu olmalıdır. İşlerin tek plan üzerinden ilerlemesi, sonradan yeni yapılan yüzeylerin yeniden kırılması veya monte edilen ürünlerin sökülmesi gibi gereksiz tekrarları azaltır."
        ],
        bullets: [
          "Söküm, kırım, moloz çıkarma ve alan koruma",
          "Elektrik panosu, kablolar, prizler ve aydınlatma düzeni",
          "Temiz su, atık su ve gider hatlarının kontrolü",
          "Mutfak ve banyo yenileme uygulamaları",
          "Zemin, duvar, tavan, sıva, alçı ve boya işleri",
          "İç kapı, süpürgelik, armatür ve son montajlar"
        ],
      },
      {
        title: "Eski Dairelerde Tadilat Öncesi Neler Kontrol Edilir?",
        paragraphs: [
          "Fatih'teki eski apartman dairelerinde yüzeyde görülen bir sorun, altta yatan daha önemli bir problemin işareti olabilir. Duvarın alt bölümündeki boya kabarması tesisat kaçağı, dış cepheden gelen yağmur suyu, zeminden yükselen nem veya yetersiz havalandırma nedeniyle oluşabilir. Kaynak belirlenmeden yalnızca alçı ve boya yapılması, kısa süre sonra aynı bozulmanın yeniden ortaya çıkmasına yol açabilir.",
          "Elektrik panosu, sigorta grupları, kablolar, priz sayısı ve yüksek güç tüketen cihazların bağlantıları ayrıca değerlendirilmelidir. Mutfakta fırın, ocak ve bulaşık makinesi; banyoda çamaşır makinesi veya termosifon; odalarda klima, bilgisayar ve televizyon için güvenli ve yeterli hat planlanması gerekir. Temiz su ve gider tesisatında düşük basınç, kötü koku, sık tıkanma ya da alt kata sızıntı varsa yüzeyler kapanmadan önce altyapı incelenmelidir."
        ],
      },
      {
        title: "Keşif, Ölçü ve İhtiyaç Analizi",
        paragraphs: [
          "Komple tadilatın ilk aşaması daireyi yerinde incelemektir. Keşifte odaların ölçüleri alınır, mevcut zemin ve duvar yüzeyleri kontrol edilir, mutfak ile banyonun yerleşimi değerlendirilir. Elektrik panosu, su bağlantıları, kapılar, pencereler, nem izleri ve havalandırma koşulları gözlemlenir. Ev sahibinin hangi alanlardan memnun olmadığı, yeni düzende neye ihtiyaç duyduğu ve hangi bölümlerin korunacağı konuşulur.",
          "Fatih'in bazı bölgelerinde dar sokaklar, sınırlı araç erişimi, küçük bina girişleri ve asansörsüz apartmanlar malzeme taşıma planını etkileyebilir. Balat, Cibali, Zeyrek veya Kocamustafapaşa çevresinde moloz çıkarma, ortak alanların korunması ve çalışma saatleri önceden düşünülmelidir. Bina sakinlerinin merdiven ve girişleri kullanmaya devam edeceği göz önünde bulundurularak geçişler kapatılmamalı, yüzeyler korunmalı ve günlük temizlik düzeni oluşturulmalıdır."
        ],
      },
      {
        title: "Tadilat İşleri Hangi Sırayla Yapılır?",
        paragraphs: [
          "Genel uygulama sırası, korunacak alanların kapatılması ve gerekli sökümlerin yapılmasıyla başlar. Daha sonra duvarların içinden geçecek elektrik, internet, klima, temiz su ve atık su hatları hazırlanır. Altyapı tamamlandıktan sonra sıva, alçı, şap, su yalıtımı ve benzeri yüzey altı işlemlere geçilir. Seramik ve zemin kaplamalarının ardından dolaplar, tezgâh, vitrifiye ürünleri, kapılar ve sabit mobilyalar monte edilir.",
          "Boya işleminin bazı katları montaj öncesinde, son rötuşları ise montajların ardından yapılabilir. Priz, anahtar, aydınlatma, armatür ve aksesuarlar son aşamada takılır. Duvar kaldırma, pencere değişimi, yerden ısıtma veya özel üretim mobilya gibi ek işler varsa program buna göre düzenlenir. Amaç, tamamlanmış bir uygulamanın sonraki ekip tarafından zarar görmesini önlemek ve her aşamayı kapatılmadan önce kontrol etmektir."
        ],
      },
      {
        title: "Küçük Daireler Nasıl Daha Kullanışlı Hale Getirilir?",
        paragraphs: [
          "Fatih'teki bazı 1+1, 2+1 ve 3+1 dairelerde oda ölçüleri küçük, koridorlar dar veya depolama alanları yetersiz olabilir. Alan kazanmak için her duvarı kaldırmak gerekmez. Kapı açılış yönünü değiştirmek, tavana kadar uzanan dolaplar kullanmak, antrede ayakkabılık ile temizlik dolabını birleştirmek, mutfakta çekmeceli alt modüller tercih etmek ve gereksiz boşlukları değerlendirmek günlük kullanımı belirgin biçimde kolaylaştırabilir.",
          "Duvar kaldırılması düşünülüyorsa duvarın yapısal niteliği, içinden geçen tesisatlar ve bina koşulları kontrol edilmelidir. Her duvara müdahale edilmesi mümkün veya doğru değildir. Binanın niteliğine, yönetim planına ve uygulanacak işleme göre gerekli teknik ve idari kontroller yapılmalıdır. Tarihî veya özel niteliği bulunan yapılarda dış görünüşü, ortak alanları veya taşıyıcı sistemi etkileyebilecek işlemler standart bir dekorasyon uygulaması gibi ele alınmamalıdır."
        ],
      },
      {
        title: "Rutubetli Eski Ev Tadilatında Nereden Başlanır?",
        paragraphs: [
          "Rutubetli bir evde ilk adım nemin kaynağını belirlemektir. Duvardaki kararma ve boya kabarması yetersiz havalandırma veya yoğuşmadan kaynaklanabileceği gibi çatı akması, dış cephe çatlağı, pencere çevresindeki sızıntı, tesisat kaçağı ya da komşu daireden gelen su nedeniyle de oluşabilir. Kaynak çözülmeden yapılan boya, kaplama veya dolap uygulaması çoğunlukla geçici kalır ve yeni malzemelerin de zarar görmesine neden olabilir.",
          "Tavanlarda yağmurdan sonra artan sarı lekeler varsa çatı, teras ve yağmur suyu bağlantıları; banyo ya da mutfağın arkasındaki duvarlarda nem varsa temiz su ve gider hatları; pencere kenarlarında küf varsa ısı köprüsü, hava sızıntısı ve dış cephe derzleri kontrol edilmelidir. Sorun giderildikten sonra yüzeyin yeterince kuruması beklenmeli, gevşeyen sıva temizlenmeli ve uygun astar ile boya sistemi uygulanmalıdır."
        ],
      },
      {
        title: "Mutfak ve Banyo Aynı Projede Nasıl Planlanır?",
        paragraphs: [
          "Mutfak ve banyo, komple tadilatın en fazla altyapı gerektiren alanlarıdır. Her iki bölümde de su ve elektrik hatları, giderler, havalandırma, dolap ölçüleri ve yüzey kaplamaları birbiriyle uyumlu düşünülmelidir. Banyo seramiği veya mutfak dolabı seçimine geçmeden önce cihazların, lavabo ve vitrifiye ürünlerinin kesin ölçüleri belirlenmeli; su ve elektrik çıkışları bu plana göre hazırlanmalıdır.",
          "Banyoda zemin eğimi, gider bağlantıları ve su yalıtımı alt kata sızıntı riskini azaltmak için önemlidir. Mutfakta ise buzdolabı, ocak ve evye arasındaki kullanım akışı, yeterli tezgâh alanı ve priz konumları değerlendirilmelidir. İki alanın aynı proje içinde yürütülmesi ortak tesisat kararlarını kolaylaştırabilir; ancak banyo ile mutfağın aynı anda kullanılamayacağı süreler evde yaşam planına göre önceden açıklanmalıdır."
        ],
      },
      {
        title: "Tadilat Süresi ve Maliyeti Neye Göre Değişir?",
        paragraphs: [
          "Bir 2+1 veya 3+1 dairenin komple tadilat süresi yalnızca metrekareye göre hesaplanamaz. Kırım miktarı, tesisatın tamamen değişip değişmeyeceği, özel üretim mutfak dolapları, kapı ve tezgâh teslimleri, yüzeylerin kuruma ihtiyacı, bina girişine erişim ve uygulama sırasında ortaya çıkabilecek gizli sorunlar takvimi etkiler. Bu nedenle yerinde inceleme yapılmadan kesin teslim süresi vermek sağlıklı değildir.",
          "Maliyet de iş kapsamı ve malzeme tercihlerine göre değişir. Sadece zemin, boya ve kapı yenilemesi gereken bir ev ile elektrik, su tesisatı, mutfak ve banyonun tamamen değişeceği bir ev aynı bütçeyle değerlendirilemez. Teklifte işçilik ve malzeme kalemlerinin anlaşılır biçimde belirtilmesi, sonradan ortaya çıkan ek ihtiyaçların uygulamadan önce açıklanması ve müşterinin onayı olmadan kapsamın genişletilmemesi önemlidir."
        ],
      },
      {
        title: "Fatih Mahallelerine Göre Uygulama Yaklaşımı",
        paragraphs: [
          "Fındıkzade, Çapa, Şehremini ve Haseki çevresindeki apartman dairelerinde eski tesisatlar, yetersiz prizler ve küçük mutfak planları sık karşılaşılan ihtiyaçlar arasındadır. Kocamustafapaşa, Samatya, Yedikule ve Silivrikapı çevresinde çatı, dış cephe veya zemin kaynaklı nem belirtileri de tadilat planına dahil edilebilir. Her sorun aynı yöntemle çözülmediği için belirtiler ayrı ayrı incelenmelidir.",
          "Balat, Cibali, Ayvansaray, Zeyrek ve Süleymaniye çevresindeki eski yapılarda binanın niteliği özellikle dikkate alınmalıdır. Aksaray, Laleli, Beyazıt, Vefa ve Eminönü çevresinde ise konutların yanında iş yeri veya karma kullanımlı binalar bulunabildiğinden çalışma saatleri, bina girişi ve malzeme taşıma planı farklılaşabilir. Hizmet alanı aynı olsa da uygulama şekli dairenin, binanın ve çevrenin gerçek koşullarına göre belirlenmelidir."
        ],
      },
      {
        title: "Tadilat Sırasında Evde Oturulabilir mi?",
        paragraphs: [
          "Komple tadilat sırasında evde kalınıp kalınamayacağı işin kapsamına bağlıdır. Yalnızca birkaç odanın boyandığı veya zeminlerin bölüm bölüm yenilendiği çalışmalarda yaşam alanı geçici olarak başka odaya taşınabilir. Elektrik ve su tesisatının, mutfak ile banyonun ve bütün zeminlerin aynı anda yenilendiği projelerde ise toz, gürültü, malzeme depolama ihtiyacı ve geçici kesintiler günlük yaşamı ciddi biçimde zorlaştırabilir.",
          "Evde kalınması gerekiyorsa çalışma alanları etaplara ayrılmalı, kullanılan odalar tozdan korunmalı ve güvenli geçiş bırakılmalıdır. Mobilyalar yalnızca naylonla örtülmemeli; darbe ve ince toza karşı uygun biçimde paketlenmelidir. Banyo veya mutfak kullanımının kesileceği tarihler önceden konuşulmalı, çocuklar ile evcil hayvanların çalışma alanına girmesi engellenmelidir. Etaplı uygulamanın toplam süreyi uzatabileceği de planlama sırasında dikkate alınmalıdır."
        ],
      },
    ],
    process: [
      { title: "Keşif", description: "Daire yerinde incelenir; ölçüler, altyapı ve kullanıcı ihtiyaçları belirlenir." },
      { title: "Kapsam", description: "Yapılacak işler, korunacak alanlar ve malzeme seçenekleri netleştirilir." },
      { title: "Planlama", description: "Uygulama sırası, tedarik adımları ve tahmini iş takvimi hazırlanır." },
      { title: "Uygulama", description: "Söküm, altyapı, kaplama, montaj ve boya işleri koordineli yürütülür." },
      { title: "Kontrol", description: "Bağlantılar, yüzeyler ve eksikler kontrol edilerek alan teslim edilir." },
    ],
    benefits: [
      "Farklı iş kalemlerinin tek uygulama planında koordine edilmesi",
      "Eski tesisat ve nem belirtilerinin yüzeyler kapanmadan değerlendirilmesi",
      "Küçük daireler için ölçüye ve kullanıma göre alan çözümleri",
      "İşçilik ve malzeme kapsamının uygulama öncesinde netleştirilmesi",
      "Fatih'in bina ve sokak koşullarına göre çalışma planı"
    ],
    faq: [
      { question: "Fatih'te eski bir ev komple nasıl yenilenir?", answer: "Önce dairenin tesisatı, yüzeyleri, mutfak ve banyosu yerinde incelenir. Sorunlar ile kullanım ihtiyaçları belirlendikten sonra söküm, altyapı, kaplama, montaj ve boya sırası oluşturulur. Her eski evin ihtiyacı farklı olduğu için hazır bir paket yerine keşfe dayalı plan daha sağlıklıdır." },
      { question: "Komple ev tadilatı hangi işleri kapsar?", answer: "Kapsama göre söküm, elektrik ve su tesisatı, banyo, mutfak, zemin, sıva, alçı, boya, kapı, aydınlatma ve sabit mobilya işleri bulunabilir. Bütün bu kalemlerin her projede yapılması gerekmez; mevcut durum ve bütçe üzerinden seçim yapılır." },
      { question: "2+1 veya 3+1 evin tadilatı ne kadar sürer?", answer: "Süre; kırım miktarına, tesisat kapsamına, özel üretim ürünlere, kuruma sürelerine ve bina erişimine göre değişir. Yerinde inceleme yapılmadan kesin gün vermek doğru değildir. İş programı, kapsam ve ürün teslimleri netleştikten sonra tahmini takvim oluşturulabilir." },
      { question: "Tadilat sırasında evde oturulabilir mi?", answer: "Sadece birkaç odanın yenilendiği işlerde bölümlü çalışma mümkün olabilir. Ancak mutfak, banyo, elektrik, su tesisatı ve bütün zeminler aynı anda yenileniyorsa toz, gürültü ve geçici kesintiler nedeniyle evde kalmak zorlaşır. Karar iş kapsamına göre verilmelidir." },
      { question: "Eski elektrik ve su tesisatı mutlaka değişmeli mi?", answer: "Mutlaka değişmesi gerektiği yalnızca bina yaşına bakılarak söylenemez. Elektrik panosu, kablolar, bağlantılar, su boruları, giderler ve görülen belirtiler kontrol edilmelidir. Güvenli ve yeterli durumda olan hatlar korunabilir; sorunlu veya yetersiz bölümler yenilenebilir." },
      { question: "Küçük bir daire daha kullanışlı hale getirilebilir mi?", answer: "Evet. Kapı yönleri, dolap derinlikleri, mutfak modülleri, antre depolaması, aydınlatma ve mobilya ölçüleri yeniden planlanarak alan daha verimli kullanılabilir. Duvar kaldırılması düşünülüyorsa yapısal ve idari kontroller yapılmadan işlem başlatılmamalıdır." },
      { question: "Rutubetli evde tadilata nereden başlanır?", answer: "Önce nemin kaynağı bulunmalıdır. Çatı, dış cephe, pencere çevresi, tesisat, yoğuşma ve havalandırma ayrı ayrı değerlendirilir. Kaynak giderilmeden yapılan alçı, boya veya kaplama kısa sürede yeniden bozulabilir." },
      { question: "Komple tadilatta mutfak ve banyo hangi sırada yapılır?", answer: "Genellikle önce söküm ve altyapı hatları, ardından sıva, şap ve su yalıtımı yapılır. Seramik ve zeminlerden sonra dolap, tezgâh, vitrifiye ve aksesuar montajlarına geçilir. Kesin sıra proje kapsamına ve ürün teslimlerine göre düzenlenir." },
      { question: "Tadilat maliyeti metrekareye göre mi hesaplanır?", answer: "Metrekare önemli olsa da tek başına yeterli değildir. Tesisat kapsamı, söküm miktarı, yüzey durumu, mutfak ve banyo ürünleri, kapılar ve seçilen malzemeler bütçeyi değiştirir. Sağlıklı değerlendirme için iş kalemlerinin ayrı ayrı belirlenmesi gerekir." },
      { question: "Fatih'in hangi bölgelerinde hizmet veriliyor?", answer: "Fatih merkez başta olmak üzere Aksaray, Fındıkzade, Çapa, Şehremini, Kocamustafapaşa, Yedikule, Balat, Cibali, Zeyrek ve çevresindeki projeler değerlendirilebilir. Uygulama planı binanın erişimi, niteliği ve iş kapsamına göre hazırlanır." },
    ],
    related: [
      "banyo-tadilati",
      "mutfak-tadilati",
      "boya-badana"
    ],
  },
  {
    slug: "banyo-tadilati",
    title: "Banyo Tadilatı",
    shortTitle: "Banyo Tadilatı",
    icon: Bath,
    excerpt: "Fatih'te tesisat, su yalıtımı, seramik, vitrifiye ve duş alanını birlikte ele alan komple banyo yenileme.",
    href: `${BASE}/banyo-tadilati`,
    seoTitle: "Fatih Banyo Tadilatı | Komple Banyo Yenileme",
    seoDescription: "Fatih'te küçük ve eski banyolar için tesisat, su yalıtımı, seramik, duşakabin ve dolap uygulamalarını kapsayan banyo tadilatı.",
    h1: "Fatih Banyo Tadilatı ve Komple Banyo Yenileme",
    intro: [
      "Fatih'te banyo tadilatı, yalnızca eski fayansların yenilenmesi değildir. Gider kokusu, alt kata su sızması, duş alanından dışarı su kaçması, küf, yetersiz havalandırma, düşük su basıncı ve kullanışsız yerleşim gibi sorunlar birlikte değerlendirilmelidir. Özellikle eski apartman dairelerinde seramiklerin altında kalan tesisat ve su yalıtımı, görünür kaplamalardan daha önemli olabilir.",
      "Küçükler Yapı Dekorasyon olarak banyonun ölçüsünü, tesisat noktalarını, gider eğimini, havalandırmayı ve kullanıcı ihtiyaçlarını yerinde inceliyoruz. Balat, Cibali, Aksaray, Fındıkzade, Çapa, Şehremini ve Kocamustafapaşa çevresindeki küçük banyolarda alan kazandıran çözümler; Yedikule, Samatya ve Silivrikapı çevresindeki eski yapılarda ise sızıntı ve altyapı kontrolleri öne çıkabilir."
    ],
    contentSections: [
      {
        title: "Küçük Banyo Nasıl Daha Kullanışlı Hale Getirilir?",
        paragraphs: [
          "Küçük bir banyoda ilk hedef, geçiş alanlarını daraltmadan gerekli işlevleri yerleştirmektir. Büyük ve derin dolaplar yerine duvara asılı, ölçüye uygun modüller; zemini tamamen kaplayan ürünler yerine altında boşluk bırakan çözümler tercih edilebilir. Duş alanının konumu, klozet kapağının açılması, lavabo önündeki hareket alanı ve kapının yönü birlikte değerlendirilmelidir.",
          "Açık renk yüzeyler ve dengeli aydınlatma banyoyu görsel olarak ferah gösterebilir; ancak gerçek kullanım kolaylığı doğru ölçüden gelir. Nişler, aynalı dolaplar, gömme raflar ve duvar üstü depolama günlük ürünlerin düzenli tutulmasını sağlar. Yaşlı veya hareket kısıtlı kullanıcılar için kaymaz zemin, eşiksiz duş, tutunma elemanları ve yeterli dönüş alanı planlanabilir."
        ],
        bullets: [
          "Kapı açılış yönünün kullanım alanına göre düzenlenmesi",
          "Ölçüye uygun duş alanı ve sabit cam seçenekleri",
          "Duvara asılı lavabo dolabı ve klozet çözümleri",
          "Niş, raf ve aynalı dolapla ek depolama",
          "Kaymaz zemin ve güvenli geçiş alanları"
        ],
      },
      {
        title: "Alt Kata Su Sızdıran Banyo Nasıl Onarılır?",
        paragraphs: [
          "Alt kata su sızması her zaman aynı nedenden oluşmaz. Temiz su borusunda kaçak, gider bağlantısında ayrılma, klozet contasında bozulma, duş teknesi veya silikon birleşimlerinde açıklık, zemindeki su yalıtımının yetersizliği ya da seramik derzlerinden uzun süreli su geçişi farklı ihtimaller arasındadır. Sadece alt kattaki tavanı boyamak veya görünen derzi kapatmak kaynağı çözmez.",
          "Sızıntının ne zaman arttığı önemli bir ipucudur. Duş kullanıldığında artıyorsa duş alanı ve gider; klozet kullanıldığında görülüyorsa bağlantılar; su kullanılmasa da devam ediyorsa basınçlı temiz su hattı kontrol edilebilir. Kaynak tespit edildikten sonra noktasal onarımın yeterli olup olmadığı belirlenir. Su yalıtımının genel olarak bozulduğu durumlarda kaplamaların sökülmesi ve sistemin yeniden yapılması gerekebilir."
        ],
      },
      {
        title: "Banyo Su Yalıtımı Nasıl Planlanır?",
        paragraphs: [
          "Su yalıtımı, seramik ile aynı şey değildir. Seramik yüzeyi suya dayanıklı görünse de derzlerden, köşelerden ve boru geçişlerinden su alt katmanlara ulaşabilir. Bu nedenle uygun hazırlanmış zemin ve duvar yüzeylerine, özellikle duş alanı ile zeminin tamamında seçilen sisteme göre yalıtım uygulanır. Köşeler, süzgeç çevresi ve tesisat çıkışları detay bantları veya uygun tamamlayıcı ürünlerle güçlendirilir.",
          "Yalıtım katmanı kapatılmadan önce yüzey bütünlüğü kontrol edilmelidir. Zemin eğimi suyun süzgece doğru ilerlemesini sağlamalı, suyun kapı tarafında veya klozet çevresinde göllenmesine izin verilmemelidir. Malzeme katları arasında üretici tarafından belirtilen bekleme sürelerine uyulması gerekir. Hızlı teslim amacıyla kuruma sürelerinin atlanması, sonradan kabarma ve sızıntı riskini artırabilir."
        ],
      },
      {
        title: "Gider Kokusu, Tıkanma ve Havalandırma Sorunları",
        paragraphs: [
          "Banyo giderinden gelen kötü koku; süzgeçte su tutan sifon bölümünün kuruması, hatalı gider bağlantısı, yetersiz eğim, boru içinde birikme veya ortak kolonla ilgili sorunlar nedeniyle oluşabilir. Koku yalnızca parfümlü ürünlerle bastırılmamalıdır. Süzgeç, lavabo, duş ve klozet bağlantılarının sızdırmazlığı ile havalandırma koşulları kontrol edilmelidir.",
          "Sık tıkanan giderlerde sadece kimyasal açıcı kullanmak kalıcı çözüm olmayabilir ve bazı borulara zarar verebilir. Boru çapı, hat eğimi, bağlantı noktaları ve birikmenin yeri değerlendirilmelidir. Penceresiz veya küçük pencereli banyolarda yetersiz hava değişimi küf ve yoğunlaşmayı artırır. Uygun menfez veya mekanik havalandırma, banyo kullanımı sonrasında nemin daha hızlı uzaklaşmasına yardımcı olabilir."
        ],
      },
      {
        title: "Seramik, Vitrifiye ve Duş Alanı Seçimi",
        paragraphs: [
          "Seramik seçiminde yalnızca desen değil, kayma direnci, yüzey dokusu, ölçü ve bakım kolaylığı da önemlidir. Çok büyük seramikler küçük veya eğimli zeminlerde fazla kesim gerektirebilir. Parlak zeminler ıslakken kaygan olabilir. Duvarlarda açık renk ve kolay temizlenen yüzeyler tercih edilebilirken duş zemininde güvenli kullanım öncelikli olmalıdır.",
          "Klozet, lavabo, armatür ve duşakabin ölçüleri mevcut tesisat noktalarıyla uyumlu seçilmelidir. Duş kapısının açılması, klozetin yan mesafesi ve dolap çekmecelerinin hareketi proje üzerinde kontrol edilmelidir. Sabit cam, sürgülü duşakabin veya katlanır sistem seçimi banyonun şekline göre değişebilir. Ürünler monte edilmeden önce duvar içi bağlantıların ve ölçülerin doğrulanması sonradan söküm riskini azaltır."
        ],
      },
      {
        title: "Fayans Kırmadan Banyo Yenilenebilir mi?",
        paragraphs: [
          "Mevcut seramikler sağlam, yüzey düzgün ve altta sızıntı belirtisi yoksa bazı durumlarda seramik üstü kaplama veya boya sistemleri değerlendirilebilir. Bu yöntem daha az kırım oluşturabilir; ancak her banyo için uygun değildir. Boşluk yapan seramik, çatlak zemin, kötü gider eğimi, tesisat kaçağı veya su yalıtımı sorunu varsa üstten kaplama problemi gizler ve zemini yükselterek kapı ile gider detaylarını zorlaştırabilir.",
          "Yalnızca görünüm değişikliği istenen, altyapısı sağlıklı banyolarda dolap, ayna, aydınlatma, armatür ve duşakabin değişimiyle kısmi yenileme yapılabilir. Fakat koku, nem, sızıntı veya sürekli tıkanma varsa önce sebep araştırılmalıdır. Fayans kırmadan çözüm vaadi yerine mevcut yüzeyin taşıma durumu ve altyapının sağlığı üzerinden karar verilmesi daha güvenlidir."
        ],
      },
      {
        title: "Fatih'te Banyo Tadilatı Süresi ve Uygulama Koşulları",
        paragraphs: [
          "Banyo tadilatının süresi; söküm miktarına, tesisat değişikliğine, yüzey kuruma sürelerine, seçilen seramik ölçüsüne ve özel üretim dolaplara göre değişir. Sadece vitrifiye ile dolap yenilemesi kısa sürebilirken su yalıtımı, gider düzenlemesi ve bütün kaplamaların değiştiği bir çalışma daha uzun sürer. Yerinde inceleme ve ürün seçimi tamamlanmadan kesin gün vermek doğru değildir.",
          "Fatih'teki dar sokaklı bölgelerde malzeme taşıma ve moloz çıkarma planı önceden yapılmalıdır. Apartmanda tek banyo varsa kullanıcıların geçici ihtiyaçları konuşulmalı; su kesintilerinin hangi aşamada olacağı açıklanmalıdır. Balat ve Zeyrek çevresindeki eski yapılarda, duvar ve döşeme koşullarına uygun olmayan ağır müdahalelerden kaçınılmalı; binanın niteliğine göre gerekli kontroller yapılmalıdır."
        ],
      },
      {
        title: "Banyo Tadilatında Sık Yapılan Hatalar",
        paragraphs: [
          "En sık hatalardan biri, sızıntının kaynağını bulmadan yalnızca silikon veya derz uygulamaktır. Diğer hatalar arasında gider eğiminin kontrol edilmemesi, duş alanının yanlış ölçülmesi, su yalıtımının köşelerde kesintiye uğraması, elektrik prizlerinin ıslak bölgelere yakın konumlandırılması ve boru bağlantılarının kapatılmadan önce test edilmemesi bulunur.",
          "Ürünlerin ölçüsü kesinleşmeden tesisat çıkışlarını hazırlamak da montaj sırasında sorun çıkarabilir. Büyük dolap veya geniş açılan kapı küçük banyoda hareket alanını kapatabilir. Ayrıca havalandırma hesaba katılmadan yalnızca küf önleyici boya kullanmak, nem kaynağını çözmez. Doğru planlama görünür malzemeler kadar altyapı detaylarına da zaman ayırmayı gerektirir."
        ],
      },
      {
        title: "Banyo Aydınlatması ve Elektrik Güvenliği",
        paragraphs: [
          "Banyoda aydınlatma yalnızca tavandaki tek bir armatürle sınırlı tutulduğunda ayna önü gölgeli kalabilir ve küçük alan daha karanlık görünebilir. Genel aydınlatma, ayna önü ışığı ve gerekiyorsa duş çevresindeki destek ışığı ayrı düşünülmelidir. Işık rengi, seramik yüzeyleri ve cilt tonunu doğal gösterecek biçimde seçilmeli; aşırı soğuk veya yetersiz ışık günlük kullanımı zorlaştırmamalıdır.",
          "Elektrik prizleri, anahtarlar, aydınlatmalar ve cihaz bağlantıları suyla temas riski gözetilerek planlanmalıdır. Çamaşır makinesi, termosifon, havalandırma fanı ve elektrikli aksesuarların bağlantıları mevcut hattın yeterliliğine göre kontrol edilmelidir. Islak hacimde kullanılan ürünlerin uygun koruma sınıfına sahip olması ve bağlantıların yetkin kişilerce yapılması önemlidir. Uzatma kablosu veya açıkta ek bağlantı, kalıcı çözüm olarak kullanılmamalıdır."
        ],
      },
      {
        title: "Banyo Tadilatı Maliyetini Neler Belirler?",
        paragraphs: [
          "Maliyet yalnızca banyonun metrekaresine göre belirlenmez. Söküm miktarı, tesisatın değişip değişmeyeceği, su yalıtımı, seramik ölçüsü, duvarların düzeltme ihtiyacı, vitrifiye ürünleri, gömme rezervuar, duşakabin, dolap ve armatür seçenekleri toplam bütçeyi etkiler. Küçük bir banyo, çok sayıda detay ve özel ölçü ürün nedeniyle daha büyük ancak sade bir banyodan daha yoğun işçilik gerektirebilir.",
          "Teklifte yalnızca toplam rakam değil, hangi işlerin ve malzemelerin kapsama dahil olduğu görülmelidir. Moloz çıkarma, tesisat testleri, su yalıtımı, seramik altı hazırlık, montaj ve silikon gibi aşamalar açıkça belirtilmelidir. Uygulama sırasında duvar içinden beklenmeyen eski boru veya hasarlı zemin çıkarsa ek işlem başlamadan önce ihtiyaç ve maliyet müşteriye açıklanmalıdır."
        ],
      },
      {
        title: "Banyoda Malzeme Bakımı ve Uzun Süreli Kullanım",
        paragraphs: [
          "Yeni banyonun uzun süre düzenli kalması için seramik, derz, silikon, armatür ve dolap yüzeyleri kullanılan malzemeye uygun ürünlerle temizlenmelidir. Çok aşındırıcı kimyasallar derzleri, metal kaplamaları ve silikonları zamanla bozabilir. Duş sonrasında zeminde sürekli su kalıyorsa yalnızca çekçek kullanmakla yetinilmemeli; eğim ve gider akışı kontrol edilmelidir. Silikonlarda ayrılma veya kararma görüldüğünde suyun duvar arkasına ilerlemeden yenileme yapılması faydalıdır.",
          "Dolapların şişmesini önlemek için su sıçrayan bölgeler kurulanmalı, havalandırma düzenli çalıştırılmalı ve giderler saç ile sabun birikimine karşı temiz tutulmalıdır. Armatürlerde damlama, rezervuarda sürekli su sesi veya klozet çevresinde nem fark edildiğinde küçük sorun büyümeden bağlantılar kontrol edilmelidir. Banyo tadilatı sonrası kullanım talimatlarının bilinmesi, yeni yüzeylerin ve tesisat elemanlarının ömrünü destekler.",
          "Periyodik bakım yalnızca temizlikten ibaret değildir. Duşakabin fitilleri, süzgeç kapağı, lavabo sifonu, rezervuar ve batarya bağlantıları belirli aralıklarla gözle kontrol edilebilir. Duvar arkasından gelen koku, zeminde sürekli nem veya dolap altında su izi fark edildiğinde sorun büyümeden müdahale edilmelidir. Özellikle tek banyolu evlerde küçük bir bağlantı arızasının günlük yaşamı tamamen etkilememesi için belirtileri ertelememek önemlidir."
        ],
      },
    ],
    process: [
      { title: "İnceleme", description: "Sızıntı, koku, nem, tesisat ve alan kullanımı yerinde değerlendirilir." },
      { title: "Ölçü ve Plan", description: "Ürün ölçüleri, yerleşim, gider ve bağlantı noktaları netleştirilir." },
      { title: "Söküm ve Altyapı", description: "Gerekli kaplamalar sökülür, tesisat ve yüzeyler hazırlanır." },
      { title: "Yalıtım ve Kaplama", description: "Su yalıtımı, eğim, seramik ve derz uygulamaları tamamlanır." },
      { title: "Montaj ve Kontrol", description: "Vitrifiye, dolap, armatür ve duş alanı monte edilip test edilir." },
    ],
    benefits: [
      "Sızıntı kaynağını yüzey kapatılmadan değerlendiren yaklaşım",
      "Küçük banyolara uygun ölçü ve depolama planı",
      "Su yalıtımı, eğim ve gider detaylarının birlikte ele alınması",
      "Vitrifiye ve duş alanında kullanım mesafelerinin kontrolü",
      "Fatih'teki eski bina ve dar erişim koşullarına göre planlama"
    ],
    faq: [
      { question: "Fatih'te küçük banyo nasıl daha kullanışlı yapılır?", answer: "Kapı yönü, duş ölçüsü, lavabo dolabı ve klozet çevresindeki geçişler birlikte planlanır. Duvara asılı ürünler, aynalı dolap, niş ve açık renk yüzeyler alanı daha düzenli gösterebilir. En önemli konu ürünlerin banyonun gerçek ölçüsüne uygun seçilmesidir." },
      { question: "Alt kata su sızdıran banyo nasıl onarılır?", answer: "Önce temiz su hattı, giderler, klozet bağlantısı, duş birleşimleri ve su yalıtımı kontrol edilir. Kaynağa göre noktasal bağlantı onarımı veya kaplamaların sökülerek yalıtımın yenilenmesi gerekebilir. Alt kattaki lekeyi boyamak tek başına çözüm değildir." },
      { question: "Banyo giderinden koku neden gelir?", answer: "Sifonun kuruması, hatalı bağlantı, yetersiz eğim, boru birikmesi veya ortak kolon sorunları koku oluşturabilir. Lavabo, duş, süzgeç ve klozet bağlantıları ayrı ayrı incelenmelidir. Kokuyu bastırmak yerine kaynağı bulmak gerekir." },
      { question: "Fayans kırmadan banyo yenilenebilir mi?", answer: "Mevcut seramikler sağlam ve altyapıda sorun yoksa bazı yüzey üstü uygulamalar değerlendirilebilir. Fakat sızıntı, boşluk yapan seramik, kötü eğim veya tesisat problemi varsa üstten kaplama uygun değildir ve sorunu gizleyebilir." },
      { question: "Banyo su yalıtımı hangi alanlara yapılır?", answer: "Uygulanacak sisteme göre zeminin tamamı, duş alanı duvarları, köşeler, süzgeç çevresi ve boru geçişleri ele alınır. Yalıtımın kesintisiz olması ve uygun kuruma sürelerinin beklenmesi önemlidir." },
      { question: "Klozet çevresinden su geliyorsa ne yapılır?", answer: "Rezervuar bağlantısı, temiz su girişi, klozet çıkış contası ve zemine oturma durumu kontrol edilmelidir. Su temiz kullanım suyundan veya giderden gelebilir. Kaynak belirlenmeden yalnızca dış çevreye silikon çekmek yeterli olmayabilir." },
      { question: "Duşakabinden dışarı su kaçması neden olur?", answer: "Yanlış eğim, kapı fitillerinin bozulması, silikon ayrılması, cam ölçüsünün uyumsuzluğu veya duş başlığının konumu su kaçırabilir. Önce suyun hangi noktadan çıktığı belirlenmeli, sonra fitil, birleşim veya zemin detayı düzeltilmelidir." },
      { question: "Banyo duvarındaki küf nasıl giderilir?", answer: "Küf temizlenmeden önce nemin kaynağı araştırılmalıdır. Yetersiz havalandırma, yoğuşma, dış duvar soğukluğu veya tesisat sızıntısı söz konusu olabilir. Kaynak giderildikten sonra yüzey kurutulur, bozuk katmanlar temizlenir ve uygun boya sistemi uygulanır." },
      { question: "Banyo tadilatı kaç gün sürer?", answer: "Süre iş kapsamına göre değişir. Kısmi ürün değişimi ile tesisat, su yalıtımı ve bütün seramiklerin yenilendiği çalışma aynı değildir. Ürün tedariki, kuruma süreleri ve mevcut yüzey koşulları görüldükten sonra tahmini takvim hazırlanabilir." },
      { question: "Yaşlılar için güvenli banyo nasıl tasarlanır?", answer: "Kaymaz zemin, eşiksiz veya düşük eşikli duş, tutunma noktaları, yeterli aydınlatma ve rahat geçiş alanları planlanabilir. Kullanıcının hareket durumu ve destek ihtiyacı ölçü alınırken değerlendirilmelidir." },
    ],
    related: [
      "komple-ev-tadilati",
      "su-yalitimi",
      "mutfak-tadilati"
    ],
  },
  {
    slug: "mutfak-tadilati",
    title: "Mutfak Tadilatı",
    shortTitle: "Mutfak Tadilatı",
    icon: ChefHat,
    excerpt: "Fatih'te dolap, tezgâh, seramik, su ve elektrik altyapısını birlikte planlayan komple mutfak yenileme.",
    href: `${BASE}/mutfak-tadilati`,
    seoTitle: "Fatih Mutfak Tadilatı | Komple Mutfak Yenileme",
    seoDescription: "Fatih'te küçük ve eski mutfaklar için dolap, tezgâh, seramik, ankastre, elektrik ve su tesisatı planlayan mutfak tadilatı.",
    h1: "Fatih Mutfak Tadilatı ve Modern Mutfak Yenileme",
    intro: [
      "Fatih'te mutfak tadilatı, yalnızca dolap kapaklarını değiştirmekten ibaret değildir. Dar çalışma alanı, yetersiz depolama, az priz, eski su tesisatı, sürekli tıkanan gider, tezgâh ile duvar arasından su sızması ve ankastre ürünlere uygun olmayan elektrik hattı gibi sorunlar birlikte ele alınmalıdır. Özellikle eski apartman dairelerinde dolap ölçüsü alınmadan önce duvar, zemin ve tesisat koşullarının değerlendirilmesi gerekir.",
      "Küçükler Yapı Dekorasyon olarak mutfağın ölçüsünü, kullanım alışkanlıklarını, cihazların konumunu, çalışma tezgâhını ve depolama ihtiyacını yerinde inceliyoruz. Aksaray, Fındıkzade, Çapa, Şehremini, Haseki, Kocamustafapaşa ve Balat çevresindeki küçük mutfaklarda alanı büyütmeden kullanım kolaylığı sağlayan çözümler; eski yapılarda ise altyapı kontrolü ve ölçüye uygun üretim öne çıkar."
    ],
    contentSections: [
      {
        title: "Küçük Mutfak Büyütülmeden Nasıl Kullanışlı Hale Getirilir?",
        paragraphs: [
          "Dar bir mutfakta alan kazanmanın yolu her zaman duvar kaldırmak değildir. Dolapların tavana kadar devam etmesi, köşe modüllerinin doğru çözülmesi, çekmeceli alt dolaplar, dar kiler üniteleri ve kullanılmayan boşlukların değerlendirilmesi depolama kapasitesini artırabilir. Tezgâh üzerinde sürekli duran küçük ev aletleri için özel bölmeler oluşturmak çalışma alanını rahatlatır.",
          "Kapı açılış yönü, buzdolabı kapağının hareketi, fırın ve bulaşık makinesi önündeki boşluklar birlikte planlanmalıdır. Koridor tipi mutfaklarda karşılıklı dolapların derinliği geçişi daraltmamalıdır. Açık renk kapaklar ve dengeli aydınlatma ferahlık hissi sağlayabilir; ancak gerçek kullanım kolaylığı doğru ölçü, ergonomik yükseklik ve günlük alışkanlıklara uygun yerleşimle oluşur."
        ],
        bullets: [
          "Tavana kadar uzanan depolama modülleri",
          "Çekmeceli alt dolap ve köşe çözümleri",
          "Cihaz kapakları için yeterli açılma mesafesi",
          "Tezgâh üstünü boşaltan küçük ev aleti bölmeleri",
          "Çalışma alanını destekleyen görev aydınlatması"
        ],
      },
      {
        title: "Mutfak Dolapları Tamamen Değişmeli mi?",
        paragraphs: [
          "Dolap gövdeleri sağlam, şişme ve bağlantı sorunu yoksa yalnızca kapak, kulp, menteşe veya tezgâh değişimi bazı mutfaklarda yeterli olabilir. Ancak suya maruz kalmış, gövdesi şişmiş, rafları eğilmiş veya ölçüsü yeni cihazlara uymayan dolapların kısmi yenilenmesi beklenen sonucu vermeyebilir. Karar görünüşe değil, gövde ve bağlantıların durumuna göre verilmelidir.",
          "Tam değişim sırasında mutfağın bütün yerleşimi yeniden düşünülme fırsatı doğar. Evye, ocak, buzdolabı ve hazırlık alanı arasındaki akış düzenlenebilir; çöp ayrıştırma, tencere çekmecesi, baharatlık, fırın kolonu ve kiler modülü gibi ihtiyaçlar plana eklenebilir. Mevcut gövdeler korunacaksa yeni kapak ve tezgâhın ölçüleri ile menteşe noktaları dikkatle kontrol edilmelidir."
        ],
      },
      {
        title: "Eski Mutfak Tesisatı Ankastre Ürünlere Uygun mu?",
        paragraphs: [
          "Fırın, elektrikli ocak, bulaşık makinesi, buzdolabı, davlumbaz ve tezgâh üstü cihazlar için mevcut hattın yeterliliği kontrol edilmelidir. Eski mutfaklarda bütün cihazların aynı hatta bağlı olması, uzatma kablosu kullanılması veya prizlerin su kaynaklarına çok yakın konumlandırılması güvenli değildir. Elektrik panosu, sigorta grupları, kablo kesitleri ve topraklama durumu uzman tarafından değerlendirilmelidir.",
          "Su tesisatında evye ve bulaşık makinesi bağlantıları, gider çapı ve eğimi önemlidir. Tezgâh altındaki kötü koku, yavaş akış veya sık tıkanma yalnızca sifondan değil, hat eğimi ve boru birikmesinden de kaynaklanabilir. Dolaplar monte edilmeden önce su ve elektrik çıkışlarının cihaz ölçülerine uygun konumda olduğu doğrulanmalı, bağlantılar kapatılmadan test edilmelidir."
        ],
      },
      {
        title: "Mutfakta Su Sızıntısı ve Gider Sorunları",
        paragraphs: [
          "Tezgâh ile duvar arasından su sızması; silikonun ayrılması, tezgâh birleşiminin açılması, evye kenarındaki sızdırmazlığın bozulması veya duvar yüzeyinin düzensizliği nedeniyle oluşabilir. Su dolap gövdesine ulaştığında şişme, koku ve küf meydana gelebilir. Yalnızca dışarıdan silikon çekmek yerine birleşimin altı, evye bağlantısı ve temiz su hortumları kontrol edilmelidir.",
          "Sürekli tıkanan mutfak giderinde yağ ve yemek artıkları, yetersiz eğim, dar boru veya hatalı bağlantı etkili olabilir. Kimyasal ürünlerin sık kullanımı bazı tesisatlara zarar verebilir. Giderin temizlenmesi yanında hattın yapısal sorunu olup olmadığı araştırılmalıdır. Eski borular yenilenecekse dolap ve seramik uygulamasından önce güzergâh planlanmalı, erişim gerektiren bağlantılar tamamen kapatılmamalıdır."
        ],
      },
      {
        title: "Dolap, Tezgâh ve Seramik Seçerken Nelere Dikkat Edilir?",
        paragraphs: [
          "Kapak ve gövde malzemesi seçilirken nem, temizlik sıklığı, kullanım yoğunluğu ve bütçe birlikte düşünülmelidir. Çok parlak yüzeyler parmak izi gösterebilir; yoğun dokulu yüzeyler temizliği zorlaştırabilir. Menteşe, ray ve kulp gibi hareketli parçaların kalitesi, mutfağın uzun süreli kullanımında en az kapak görünümü kadar önemlidir.",
          "Tezgâhta leke direnci, sıcaklık, çizilme, birleşim noktaları ve bakım ihtiyacı değerlendirilmelidir. Evye ve ocak kesimleri doğru yapılmalı, duvarla birleşim sızdırmazlığı sağlanmalıdır. Tezgâh arası seramik veya panel seçilirken priz yerleri ve dolap altı aydınlatma hesaba katılmalıdır. Büyük desenli kaplamalar küçük mutfakta fazla kesim oluşturabilir; ölçüye uygun malzeme seçimi uygulamayı kolaylaştırır."
        ],
      },
      {
        title: "Mutfak Tadilatında Doğru Uygulama Sırası",
        paragraphs: [
          "İlk aşamada mevcut dolaplar ve kaplamalar kontrollü biçimde sökülür. Duvar ve zemin durumu görüldükten sonra temiz su, gider, elektrik, doğalgaz ve havalandırma hatları hazırlanır. Gerekli sıva, şap, seramik ve boya işleri tamamlandıktan sonra kesin ölçü doğrulanır. Özel üretim dolap ve tezgâhın ölçüsü, altyapı kararları tamamlanmadan alınmamalıdır.",
          "Dolap gövdeleri ve tezgâh monte edildikten sonra evye, batarya, ankastre cihazlar, priz kapakları ve aydınlatmalar bağlanır. Su ve elektrik bağlantıları test edilir; kapak ayarları, çekmece hareketleri ve tezgâh birleşimleri kontrol edilir. İş sırasının ters yürütülmesi yeni dolabın zarar görmesine veya tesisat için tekrar sökülmesine neden olabilir."
        ],
      },
      {
        title: "Mutfak Tadilatı Sırasında Evde Yaşanabilir mi?",
        paragraphs: [
          "Mutfak tamamen söküldüğünde evye, ocak ve hazırlık alanı kullanılamaz. Su ve elektrik belirli aşamalarda kısa süreli kesilebilir; toz ve malzeme hareketi diğer odaları da etkileyebilir. Evde kalınacaksa geçici yemek hazırlama düzeni, buzdolabının konumu ve çalışma alanının diğer yaşam alanlarından ayrılması önceden planlanmalıdır.",
          "Yalnızca kapak veya tezgâh değişimi gibi kısmi çalışmalarda günlük yaşam daha az etkilenir. Tesisat, zemin, seramik ve bütün dolapların yenilendiği projelerde ise uygulama daha kapsamlıdır. Apartman girişinin ve ortak alanların korunması, molozların bekletilmemesi ve çalışma saatlerine uyulması özellikle Fatih'in yoğun ve dar sokaklı bölgelerinde önem taşır."
        ],
      },
      {
        title: "Fatih'te Mutfak Tadilatı Süresi ve Maliyet Unsurları",
        paragraphs: [
          "Süre; söküm miktarı, tesisat değişikliği, özel üretim dolapların hazırlanması, tezgâh ölçüsü ve ürün tedarikine göre değişir. Hazır ürün kullanılan kısmi bir yenileme ile ölçüye özel dolap, yeni tesisat ve seramik içeren proje aynı takvimde tamamlanmaz. Kesin süre, ölçü ve seçimler netleştikten sonra tahmini iş programı üzerinden değerlendirilmelidir.",
          "Maliyeti dolap gövdesi ve kapak malzemesi, mekanizmalar, tezgâh türü, seramik, ankastre bağlantıları ve altyapı ihtiyacı belirler. Aksaray, Laleli ve Vefa çevresindeki karma kullanımlı binalarda çalışma saatleri ve erişim; Balat, Cibali ve Zeyrek çevresindeki eski yapılarda duvar ile zemin koşulları uygulamayı etkileyebilir. Teklifte hangi ürün ve işlerin dahil olduğu açıkça belirtilmelidir."
        ],
      },
      {
        title: "Mutfakta Aydınlatma ve Havalandırma",
        paragraphs: [
          "Mutfakta yalnızca tavandaki genel aydınlatma, tezgâh üzerinde çalışan kişinin gölge oluşturmasına neden olabilir. Dolap altı görev aydınlatması hazırlık ve temizlik sırasında görünürlüğü artırır. Evye, ocak ve çalışma alanı yeterli ışık almalı; priz ve aydınlatma kabloları dolap montajından önce planlanmalıdır. Işık kaynaklarının bakım ve değişim için erişilebilir olması da önemlidir.",
          "Davlumbaz veya aspiratör seçimi, mutfağın hacmi ve mevcut havalandırma hattına göre yapılmalıdır. Cihazın yalnızca dolap içine yerleştirilmesi yeterli değildir; hava çıkışının uygun kesitte ve mümkün olduğunca kısa güzergâhla dışarı yönlendirilmesi gerekir. Ortak baca veya havalandırma sistemine yapılacak bağlantılar binanın mevcut düzeni dikkate alınarak değerlendirilmelidir. Penceresiz ya da küçük pencereli mutfaklarda nem ve koku kontrolü ayrıca planlanmalıdır."
        ],
      },
      {
        title: "Fatih Mahallelerinde Mutfak Yenileme Yaklaşımı",
        paragraphs: [
          "Fındıkzade, Çapa, Şehremini ve Haseki çevresindeki apartman dairelerinde dar koridor tipi mutfaklar, eski elektrik hatları ve sınırlı depolama sık görülebilir. Bu tip alanlarda karşılıklı dolap derinliği, buzdolabı kapağı ve çalışma geçişi ölçü üzerinden çözülmelidir. Kocamustafapaşa, Samatya ve Yedikule çevresindeki eski dairelerde zemin eğimi, duvar düzgünlüğü ve tesisat güzergâhı dolap üretiminden önce kontrol edilmelidir.",
          "Balat, Cibali ve Zeyrek çevresindeki yapılarda taşıyıcı veya özel nitelikli duvarlara müdahale düşünülüyorsa gerekli teknik ve idari kontroller yapılmalıdır. Aksaray, Laleli, Beyazıt ve Eminönü çevresindeki karma kullanımlı binalarda malzeme taşıma, çalışma saatleri ve ortak alan kullanımı iş programını etkileyebilir. Aynı dolap modeli her mekâna uyarlanmak yerine mutfağın gerçek ölçüsüne ve bina koşullarına göre plan hazırlanmalıdır."
        ],
      },
      {
        title: "Mutfak Yenilendikten Sonra Bakım ve Kullanım",
        paragraphs: [
          "Dolap kapakları, tezgâh, menteşe ve çekmece rayları üretici önerilerine uygun temizlenmelidir. Aşırı su, buhar ve güçlü kimyasallar özellikle kenar bantları ile metal yüzeylere zarar verebilir. Evye ve tezgâh birleşimlerinde silikon ayrılması, dolap içinde nem veya kötü koku fark edildiğinde bağlantılar gecikmeden kontrol edilmelidir. Sızıntının uzun süre devam etmesi gövde malzemesinde şişmeye ve küfe neden olabilir.",
          "Davlumbaz filtrelerinin temiz tutulması, giderlere yağ dökülmemesi, cihaz çevresinde yeterli hava boşluğu bırakılması ve prizlerin aşırı yüklenmemesi güvenli kullanım açısından önemlidir. Kapak ayarları zamanla değişebilir; sürtme veya sarkma görüldüğünde menteşe ayarı yapılmalıdır. Yeni tezgâhın sıcaklık ve çizilme dayanımı malzemeye göre farklı olduğundan doğrudan sıcak tencere koyma ve kesme işlemlerinde uygun koruyucu kullanılmalıdır.",
          "Tezgâh üstünde çalışan küçük ev aletleri için havalandırma ve kablo düzeni korunmalıdır. Su ısıtıcısı, kahve makinesi ve tost makinesi gibi cihazların aynı prize yüklenmesi yerine planlanan prizler kullanılmalıdır. Dolap içindeki su vanalarına ve sifona erişim kapatılmamalı; acil durumda suyun kolayca kesilebilmesi sağlanmalıdır. Bu küçük kullanım ayrıntıları, yeni mutfağın yalnızca ilk gün değil uzun vadede de düzenli ve güvenli kalmasına yardımcı olur."
        ],
      },
    ],
    process: [
      { title: "Keşif", description: "Mutfak ölçüsü, tesisat, cihazlar ve kullanım ihtiyaçları incelenir." },
      { title: "Yerleşim", description: "Dolap, tezgâh, evye, ocak ve cihaz konumları planlanır." },
      { title: "Altyapı", description: "Gerekli söküm, elektrik, su, gider ve yüzey işleri yapılır." },
      { title: "Üretim ve Montaj", description: "Dolap, tezgâh, seramik ve aydınlatma uygulamaları tamamlanır." },
      { title: "Bağlantı ve Kontrol", description: "Cihazlar ve tesisat bağlanır; kapak, çekmece ve sızıntı kontrolleri yapılır." },
    ],
    benefits: [
      "Küçük mutfaklar için ölçüye dayalı depolama planı",
      "Ankastre ürünlere uygun elektrik ve su bağlantılarının kontrolü",
      "Dolap, tezgâh ve seramik kararlarının birlikte ele alınması",
      "Gider, koku ve sızıntı sorunlarının kaplama öncesinde değerlendirilmesi",
      "Fatih'teki bina ve erişim koşullarına göre iş planı"
    ],
    faq: [
      { question: "Fatih'te küçük mutfak nasıl daha kullanışlı yapılır?", answer: "Tavana kadar dolap, çekmeceli alt modüller, köşe çözümleri ve cihazlara uygun yerleşim kullanılabilir. Geçiş alanı korunmalı, dolap kapakları ile cihaz kapaklarının çakışmadığı kontrol edilmelidir. Alan büyütülmeden de depolama ve tezgâh kullanımı iyileştirilebilir." },
      { question: "Eski mutfak dolapları tamamen değişmeli mi?", answer: "Gövde sağlam ve ölçüler uygunsa kapak, menteşe veya tezgâh yenilemesi yeterli olabilir. Su almış, şişmiş, eğilmiş veya yeni cihazlara uymayan gövdelerde tam değişim daha doğru olabilir. Karar yerinde incelemeyle verilmelidir." },
      { question: "Mutfak gideri sürekli tıkanıyorsa ne yapılır?", answer: "Yağ ve yemek birikimi temizlenmeli; boru çapı, eğim ve bağlantılar kontrol edilmelidir. Sadece kimyasal açıcı kullanmak kalıcı çözüm olmayabilir. Yapısal sorun varsa dolap ve kaplamalar yapılmadan önce gider hattı düzeltilmelidir." },
      { question: "Eski elektrik tesisatı ankastre ürünlere uygun mudur?", answer: "Bu, pano, kablo, sigorta ve topraklama kontrolü yapılmadan söylenemez. Fırın, elektrikli ocak, bulaşık makinesi ve diğer cihazlar için yeterli ve güvenli hatlar gerekebilir. Uzatma kablosu kalıcı çözüm olarak kullanılmamalıdır." },
      { question: "Mutfak tezgâhı ile duvar arasından neden su sızar?", answer: "Silikon ayrılması, tezgâh birleşiminin açılması, evye sızdırmazlığı veya düzensiz duvar yüzeyi sebep olabilir. Dolap içine su ilerliyorsa evye bağlantıları ve temiz su hortumları da kontrol edilmelidir." },
      { question: "Mutfak tadilatında önce tesisat mı dolap mı yapılır?", answer: "Genellikle önce su, gider, elektrik ve diğer altyapı hazırlanır; zemin ve duvar işleri tamamlanır. Dolap ve tezgâh bunlardan sonra monte edilir. Böylece yeni dolapların tesisat için yeniden sökülmesi önlenir." },
      { question: "Mutfak tadilatı sırasında evde oturulabilir mi?", answer: "Kısmi yenilemede mümkün olabilir. Komple söküm, tesisat ve zemin değişiminde mutfak bir süre kullanılamaz; toz ve geçici kesintiler oluşur. Evde kalınacaksa alternatif yemek hazırlama alanı önceden planlanmalıdır." },
      { question: "Açık renk dolap küçük mutfakta avantaj sağlar mı?", answer: "Açık renkler ve iyi aydınlatma alanı daha ferah gösterebilir. Ancak kullanım kolaylığını asıl belirleyen dolap ölçüleri, geçiş mesafesi, depolama düzeni ve cihaz yerleşimidir. Renk tek başına alan sorununu çözmez." },
      { question: "Mutfak dolabı ve tezgâh seçerken neye bakılır?", answer: "Nem ve temizlik dayanımı, mekanizma kalitesi, bakım ihtiyacı, tezgâh birleşimleri, evye ile ocak kesimleri ve bütçe birlikte değerlendirilmelidir. Ürünler yalnızca görünüşe göre değil günlük kullanım yoğunluğuna göre seçilmelidir." },
      { question: "Mutfak tadilatı ne kadar sürer?", answer: "Kapsam, özel üretim dolap, tezgâh tedariki, tesisat ve kaplama işlerine göre değişir. Ölçü ve ürünler netleşmeden kesin gün vermek sağlıklı değildir. Proje aşamasında tahmini takvim hazırlanabilir." },
    ],
    related: [
      "komple-ev-tadilati",
      "banyo-tadilati",
      "boya-badana"
    ],
  },
  {
    slug: "boya-badana",
    title: "Boya Badana",
    shortTitle: "Boya Badana",
    icon: Paintbrush,
    excerpt: "Fatih'te çatlak, kabarma, su lekesi ve küf nedenlerini değerlendirerek yapılan iç mekân boya ve yüzey hazırlığı.",
    href: `${BASE}/boya-badana`,
    seoTitle: "Fatih Boya Badana | İç Mekân Boya Uygulaması",
    seoDescription: "Fatih'te ev ve iş yerleri için çatlak onarımı, alçı, astar, tavan ve duvar boyasını kapsayan profesyonel boya badana hizmeti.",
    h1: "Fatih Boya Badana ve İç Mekân Boya Uygulaması",
    intro: [
      "Fatih'te boya badana yapılırken yalnızca yeni bir renk seçmek yeterli değildir. Boya kabarması, çatlak, tavandaki sarı su lekesi, sigara kokusu, küf, dökülen sıva ve farklı emiciliğe sahip yüzeyler uygulama öncesinde ayrı ayrı değerlendirilmelidir. Yüzey hazırlığı yapılmadan doğrudan boya sürülmesi, kısa sürede iz, dalgalanma, kabarma veya yeniden küflenme gibi sorunlara yol açabilir.",
      "Küçükler Yapı Dekorasyon olarak duvarın mevcut durumunu, nem belirtilerini, eski boya türünü ve kullanım koşullarını inceliyoruz. Fındıkzade, Çapa, Şehremini, Aksaray, Balat, Cibali, Kocamustafapaşa ve çevresindeki eski dairelerde sıva ve alçı onarımları; yoğun kullanılan ev ve iş yerlerinde ise silinebilirlik, koku ve hızlı kullanım ihtiyacı öne çıkabilir."
    ],
    contentSections: [
      {
        title: "Boya Öncesi Yüzey Hazırlığı Neden Önemlidir?",
        paragraphs: [
          "Boyanın düzgün görünmesi, büyük ölçüde altındaki yüzeye bağlıdır. Gevşeyen eski boya ve sıvalar temizlenmeli, çatlaklar açılarak uygun dolgu ile onarılmalı, kabarmış bölümler sağlam zemine kadar kazınmalıdır. Farklı malzemelerin birleştiği yerlerde oluşan çatlaklar yalnızca üstten macunlanırsa tekrar görülebilir. Yüzeyin taşıma gücü ve hareket nedeni değerlendirilmelidir.",
          "Macun ve alçı uygulamasından sonra yüzeyin yeterince kuruması beklenir ve zımpara ile düzgünlük sağlanır. Toz temizlenmeden astar veya boya uygulamak yapışmayı azaltabilir. Astar seçimi, duvarın emiciliğini dengelemek, eski koyu rengi kapatmaya yardımcı olmak ve son kat boyanın daha eşit dağılmasını sağlamak için önemlidir."
        ],
        bullets: [
          "Gevşek boya ve sıvanın temizlenmesi",
          "Çatlak, delik ve bozuk yüzeylerin onarılması",
          "Macun, alçı ve kontrollü zımpara uygulaması",
          "Tozdan arındırma ve uygun astar seçimi",
          "Son katlar arasında gerekli kuruma süresinin beklenmesi"
        ],
      },
      {
        title: "Rutubetli veya Küflü Duvara Doğrudan Boya Yapılır mı?",
        paragraphs: [
          "Rutubetli veya aktif biçimde ıslak bir duvara doğrudan boya yapmak kalıcı çözüm değildir. Nem; tesisat kaçağı, dış cephe çatlağı, çatı veya teras sızıntısı, zeminden yükselen su, yetersiz havalandırma ya da yoğuşma nedeniyle oluşabilir. Kaynak devam ederken uygulanan boya kısa süre içinde kabarabilir, lekelenebilir veya küf yeniden ortaya çıkabilir.",
          "Önce nemin nedeni belirlenmeli ve gerekli tesisat, su yalıtımı, çatı ya da havalandırma işlemi yapılmalıdır. Ardından yüzeyin kuruması beklenir, gevşeyen katmanlar temizlenir ve uygun hazırlık ürünleri uygulanır. Küf temizliği sırasında alan havalandırılmalı ve uygun koruyucu ekipman kullanılmalıdır. Küf önleyici boya, kaynağı çözülmüş yüzeyde destekleyici olabilir; tek başına su sorununu durdurmaz."
        ],
      },
      {
        title: "Boya Kabarması, Dökülmesi ve Tavan Çatlağı Neden Olur?",
        paragraphs: [
          "Boya kabarması nem, yetersiz yüzey temizliği, uyumsuz eski ve yeni boya katları, fazla kalın uygulama veya kuruma süresine uyulmaması nedeniyle oluşabilir. Boyanın altı tozlu veya gevşekse yeni kat yüzeye sağlam tutunamaz. Özellikle mutfak ve banyoya yakın duvarlarda buhar ve tesisat belirtileri ayrıca kontrol edilmelidir.",
          "Tavan çatlakları binadaki hareket, farklı malzemelerin birleşimi, eski sıva, su sızıntısı veya alçıpan ek yerlerinden kaynaklanabilir. İnce yüzey çatlakları ile yapısal olabilecek geniş ve ilerleyen çatlaklar aynı şekilde ele alınmamalıdır. Çatlak hızla büyüyor, kapı ve pencerelerde sıkışma eşlik ediyor veya tekrar ediyorsa yalnızca boya onarımıyla yetinilmemeli, uygun uzman değerlendirmesi alınmalıdır."
        ],
      },
      {
        title: "Su Lekesi Bulunan Tavana Hangi İşlem Uygulanır?",
        paragraphs: [
          "Tavandaki sarı veya kahverengi leke çoğunlukla üst kat tesisatı, banyo, teras veya çatı kaynaklı suyla ilişkilidir. Önce sızıntının devam edip etmediği kontrol edilmelidir. Kaynak giderilmeden lekenin üzerine boya sürülürse renk yeniden yüzeye çıkabilir ve nem kabarmaya neden olabilir.",
          "Kaynak çözüldükten ve tavan kuruduktan sonra gevşek katmanlar temizlenir, gerekirse sıva veya macun onarımı yapılır. Lekenin son kata geçmesini azaltmak için uygun izolasyon astarı değerlendirilebilir. Ardından tavan boyası katlar halinde uygulanır. Kuruma tamamlanmadan kapatma işlemi yapılması, içeride kalan nemin yeni boyayı bozmasına yol açabilir."
        ],
      },
      {
        title: "Sigara Kokusu ve Yoğun Kullanılmış Evler Nasıl Boyanır?",
        paragraphs: [
          "Sigara dumanı yalnızca duvar rengini sarartmaz; tavan, kapı, dolap yüzeyi ve tekstillere de koku bırakabilir. Boyadan önce yüzeylerin uygun yöntemle temizlenmesi, yağlı ve nikotinli tabakanın azaltılması gerekir. Temizlenmeyen yüzeyde boya yapışması zayıflayabilir ve sarı lekeler yeni katın üzerine çıkabilir.",
          "Koku yoğunluğuna göre yüzey kapatıcı astar, kapı ve ahşaplarda uygun boya sistemi, detaylı temizlik ve havalandırma birlikte planlanabilir. Sadece parfümlü boya kullanmak kalıcı çözüm değildir. Eşyalar ve perdeler de koku tutabileceği için boya uygulamasıyla birlikte genel temizlik ve hava değişimi düşünülmelidir."
        ],
      },
      {
        title: "Eşyalı Evde Boya Badana Nasıl Yapılır?",
        paragraphs: [
          "Eşyalı evde çalışma yapılacaksa küçük ve kırılabilir eşyalar odadan çıkarılmalı, büyük mobilyalar uygun şekilde gruplanarak örtülmelidir. Zemin, süpürgelik, pencere, kapı, priz ve sabit dolap yüzeyleri koruma malzemeleriyle kapatılır. Odalar sırayla boşaltılabiliyorsa günlük yaşam daha kontrollü sürdürülebilir; ancak toplam süre uzayabilir.",
          "Boyama sırasında havalandırma, çocuk ve evcil hayvanların alandan uzak tutulması, merdiven ve geçişlerin açık bırakılması önemlidir. Boya kuruduktan sonra mobilyalar duvara hemen yaslanmamalı ve yüzey tamamen sertleşmeden yoğun silme yapılmamalıdır. Kullanıma dönüş süresi ürün türüne, hava koşullarına ve uygulanan kat sayısına göre değişir."
        ],
      },
      {
        title: "Küçük ve Karanlık Odalarda Renk Seçimi",
        paragraphs: [
          "Açık ve nötr renkler ışığı daha fazla yansıtarak küçük odaları ferah gösterebilir. Ancak bütün yüzeyleri aynı parlak beyaza boyamak her zaman sıcak bir sonuç vermez. Gün ışığının yönü, yapay aydınlatma rengi, zemin ve mobilyalarla uyum dikkate alınmalıdır. Numune rengin duvarda farklı saatlerde görülmesi, kartela üzerindeki görüntüden daha sağlıklı karar sağlar.",
          "Tavanın duvardan biraz açık seçilmesi yükseklik hissini destekleyebilir. Dar koridorlarda güçlü ve çok koyu renkler dikkatli kullanılmalıdır. Silinebilirlik gereken çocuk odası, antre ve mutfak gibi alanlarda boya sınıfı; yatak odasında ise koku ve düşük emisyon özellikleri değerlendirilebilir. Renk seçimi ile yüzey kusurlarını gizleme beklentisi karıştırılmamalıdır; bozuk duvar önce onarılmalıdır."
        ],
      },
      {
        title: "Fatih'te Boya Badana Süresi ve Fiyatı Neye Göre Değişir?",
        paragraphs: [
          "Süre; evin büyüklüğü, eşyalı olup olmaması, duvarların onarım ihtiyacı, koyu renkten açığa geçiş, tavan ve kapıların kapsama dahil olması ile kuruma koşullarına göre değişir. Yalnızca temiz yüzeye iki kat boya yapılmasıyla yoğun alçı ve sıva onarımı gereken bir daire aynı sürede tamamlanmaz.",
          "Maliyet hesaplanırken metrekare yanında yüzey hazırlığı, kullanılacak astar ve boya türü, kat sayısı, tavan yüksekliği ve koruma ihtiyacı değerlendirilir. Balat, Zeyrek ve Cibali çevresindeki eski yapılarda bozuk sıva; Aksaray, Laleli ve Eminönü çevresindeki iş yerlerinde çalışma saati ve eşya koruması ek planlama gerektirebilir. Teklifte hazırlık ve boya kapsamının ayrı belirtilmesi karşılaştırmayı kolaylaştırır."
        ],
      },
      {
        title: "Silikonlu, Plastik ve Tavan Boyası Nasıl Seçilir?",
        paragraphs: [
          "Boya türü seçilirken yüzeyin bulunduğu alan, silinme ihtiyacı, nem, ışık ve mevcut boya sistemi dikkate alınmalıdır. Yoğun kullanılan antre, çocuk odası ve mutfak gibi alanlarda temizlenebilirlik önemli olabilir. Daha az temas gören tavanlarda ise mat görünüm ve yüzey kusurlarını daha az belli eden ürünler tercih edilebilir. Ürün etiketindeki teknik özellikler, yalnızca pazarlama adına göre daha güvenilir bir değerlendirme sağlar.",
          "Yeni boya eski katmanla uyumlu olmalıdır. Çok parlak veya yağlı yüzeylerde gerekli zımpara ve geçiş astarı yapılmadan uygulanan su bazlı boya tutunma sorunu yaşayabilir. Aynı odada farklı emiciliğe sahip alçı, eski sıva ve tamir bölgeleri varsa astar yüzeyi dengelemeye yardımcı olur. Renk ve kapatıcılık beklentisi, uygulanacak kat sayısı ve taban rengiyle birlikte değerlendirilmelidir."
        ],
      },
      {
        title: "Boya Uygulamasında Havalandırma ve Sağlıklı Kullanım",
        paragraphs: [
          "Uygulama sırasında alanın kontrollü biçimde havalandırılması, hem kuruma hem de iç hava kalitesi açısından önemlidir. Çok güçlü hava akımı yüzeyin düzensiz kurumasına neden olabileceği için pencere ve kapılar hava koşullarına göre ayarlanmalıdır. Soğuk, aşırı nemli veya çok sıcak ortamlar ürünün çalışma süresini ve görünümünü etkileyebilir. Uygulama, üreticinin önerdiği sıcaklık aralığında yapılmalıdır.",
          "Düşük kokulu su bazlı ürünler bile uygulama sırasında çalışma alanının kullanılmamasını gerektirebilir. Çocuklar, yaşlılar, hassas kişiler ve evcil hayvanlar boyama yapılan odadan uzak tutulmalıdır. Boya kuruduktan sonra da yeterli hava değişimi sağlanmalı; mobilyalar duvara tamamen yaslanmadan önce yüzeyin sertleşmesi beklenmelidir. Sağlıkla ilgili özel hassasiyetlerde ürün teknik belgeleri incelenmeli ve gerektiğinde uzman görüşü alınmalıdır."
        ],
      },
      {
        title: "Boyalı Yüzeylerin Bakımı ve Sonradan Oluşan İzler",
        paragraphs: [
          "Boya tamamen sertleşmeden duvarların silinmesi, mobilyaların sürtünmesi veya yapışkanlı ürünlerin uygulanması yüzeyde parlama ve iz oluşturabilir. Temizlik zamanı ve yöntemi kullanılan ürünün teknik özelliklerine göre belirlenmelidir. Silinebilir boya dahi sert sünger, yoğun kimyasal veya sürekli sürtünmeyle zarar görebilir. Küçük lekelerde önce görünmeyen bir alanda hafif temizlik denenmelidir.",
          "Sonradan oluşan ince çatlak, kabarma veya renk değişimi yalnızca boya kalitesiyle ilişkili olmayabilir. Yeni tesisat kaçağı, bina hareketi, mobilyanın duvara hava bırakmadan dayanması veya yetersiz havalandırma etkili olabilir. Aynı bölgede tekrar eden izlerde yüzeyi sürekli rötuşlamak yerine sebep araştırılmalıdır. Rötuş boyası zamanla ton farkı gösterebileceğinden geniş ve görünür alanlarda bütün duvarın yeniden boyanması daha dengeli sonuç verebilir.",
          "Duvara sonradan raf, televizyon veya ağır dekoratif ürün monte edilecekse tesisat güzergâhları ve duvar yapısı dikkate alınmalıdır. Delme sırasında su veya elektrik hattına zarar verilmesi yeni boya yüzeyinin tekrar açılmasına neden olabilir. Mobilyaların dış duvara tamamen yapıştırılması hava dolaşımını azaltabilir; özellikle nem eğilimi olan odalarda birkaç santimetre boşluk bırakmak ve düzenli havalandırma yapmak yüzeyin korunmasına yardımcı olur.",
          "El altında küçük miktarda aynı seri ve üretim koduna yakın rötuş boyası tutulması faydalı olabilir; yine de güneş, temizlik ve zaman nedeniyle eski yüzeyle yeni boya arasında ton farkı oluşabilir. Bu nedenle belirgin duvarlarda yalnızca nokta rötuşu yerine köşeden köşeye uygulama daha bütünlüklü görünür. Kullanılan renk kodu ve ürün bilgilerinin saklanması sonraki bakım çalışmalarını kolaylaştırır."
        ],
      },
    ],
    process: [
      { title: "Yüzey Kontrolü", description: "Nem, çatlak, kabarma, eski boya ve onarım ihtiyacı değerlendirilir." },
      { title: "Koruma", description: "Zemin, mobilya, kapı, pencere ve sabit yüzeyler kapatılır." },
      { title: "Onarım", description: "Gevşek katmanlar temizlenir; sıva, alçı, macun ve zımpara yapılır." },
      { title: "Astar ve Boya", description: "Yüzeye uygun astar ve gerekli boya katları uygulanır." },
      { title: "Rötuş ve Temizlik", description: "Kenarlar kontrol edilir, korumalar kaldırılır ve alan temizlenir." },
    ],
    benefits: [
      "Rutubet ve su lekesinin kaynağını dikkate alan yüzey değerlendirmesi",
      "Alçı, çatlak, astar ve boya aşamalarının birlikte planlanması",
      "Eşyalı evlerde zemin ve mobilya koruma düzeni",
      "Odanın ışığı ve kullanımına göre boya türü seçimi",
      "Eski Fatih dairelerinin sıva ve yüzey koşullarına uygun uygulama"
    ],
    faq: [
      { question: "Rutubetli duvara doğrudan boya yapılır mı?", answer: "Aktif nem bulunan duvara doğrudan boya yapılmamalıdır. Önce tesisat, çatı, dış cephe, yoğuşma veya havalandırma kaynakları araştırılmalıdır. Kaynak giderilip yüzey kuruduktan sonra bozuk katmanlar temizlenerek uygun sistem uygulanabilir." },
      { question: "Boya neden kabarır ve dökülür?", answer: "Nem, gevşek sıva, tozlu yüzey, uyumsuz boya katları, astar eksikliği veya kuruma süresine uyulmaması kabarmaya neden olabilir. Sağlam olmayan katmanlar temizlenmeden yeni boya yapılması sorunu tekrar ettirebilir." },
      { question: "Küflü duvar boyanmadan önce ne yapılır?", answer: "Önce küfün nedeni belirlenir ve nem kaynağı çözülür. Alan havalandırılır, uygun korumayla yüzey temizlenir ve kurutulur. Gerekli astar ve boya bundan sonra uygulanır. Sadece küf önleyici boya kullanmak kaynağı ortadan kaldırmaz." },
      { question: "Eski evde boya öncesi alçı gerekir mi?", answer: "Duvarlarda dalga, çatlak, delik veya dökülen sıva varsa bölgesel ya da genel alçı ve macun gerekebilir. Sağlam ve düzgün yüzeylerde yalnızca küçük onarımlar yeterli olabilir. Karar duvar incelendikten sonra verilmelidir." },
      { question: "Sigara kokusu olan ev nasıl boyanır?", answer: "Duvar ve tavanlardaki nikotinli tabaka uygun şekilde temizlenmeli, gerekirse kapatıcı astar kullanılmalıdır. Kapı ve diğer yüzeyler de koku tutabilir. Boya, temizlik ve havalandırmayla birlikte planlanmalıdır." },
      { question: "Su lekesi olan tavana doğrudan boya yapılır mı?", answer: "Hayır. Önce üst kat, çatı, teras veya tesisat kaynaklı sızıntı çözülmeli ve tavan kurutulmalıdır. Daha sonra gevşek katmanlar temizlenir, leke kapatıcı astar ve tavan boyası uygulanabilir." },
      { question: "Çocuklu evler için hangi boya tercih edilir?", answer: "Kolay temizlenen, düşük kokulu ve kullanım alanına uygun ürünler değerlendirilebilir. Ürünün teknik özellikleri, yüzey tipi ve üretici talimatları incelenmelidir. Çocuklar uygulama ve kuruma sırasında çalışma alanından uzak tutulmalıdır." },
      { question: "Ev eşyalıyken boya yapılabilir mi?", answer: "Evet, ancak eşyaların gruplanması, kırılabilir parçaların kaldırılması ve bütün yüzeylerin iyi korunması gerekir. Odalar sırayla boyanabilir; bu yöntem çalışma süresini uzatabilir." },
      { question: "Boya sonrası ev ne zaman kullanılabilir?", answer: "Bu süre boya türüne, kat sayısına, sıcaklık ve havalandırmaya göre değişir. Yüzey dokunma kuruluğuna ulaşsa bile tam sertleşme daha uzun sürebilir. Üretici talimatları dikkate alınmalı ve yoğun silme geciktirilmelidir." },
      { question: "Küçük odalarda hangi renkler tercih edilir?", answer: "Açık ve nötr tonlar alanı daha ferah gösterebilir. Ancak gün ışığı, zemin, mobilya ve yapay aydınlatma birlikte değerlendirilmelidir. Numune rengin duvarda farklı saatlerde görülmesi önerilir." },
    ],
    related: [
      "komple-ev-tadilati",
      "mantolama",
      "su-yalitimi"
    ],
  },
  {
    slug: "mantolama",
    title: "Mantolama",
    shortTitle: "Mantolama",
    icon: Layers,
    excerpt: "Fatih'te dış cephe onarımı, ısı köprüleri, levha sistemi, sıva ve son kat kaplamayı birlikte ele alan mantolama.",
    href: `${BASE}/mantolama`,
    seoTitle: "Fatih Mantolama | Dış Cephe Isı Yalıtımı",
    seoDescription: "Fatih'te eski binalar için cephe kontrolü, ısı yalıtım levhası, fileli sıva ve son kat kaplamayı kapsayan mantolama hizmeti.",
    h1: "Fatih Mantolama ve Dış Cephe Isı Yalıtımı",
    intro: [
      "Fatih'te mantolama uygulaması, binanın dış yüzeyine yalnızca levha yapıştırmak değildir. Cephedeki gevşek sıvalar, çatlaklar, pencere çevreleri, yağmur suyu detayları, ısı köprüleri, malzeme kalınlığı, dübelleme, fileli sıva ve son kat kaplama birlikte planlanmalıdır. Eski bir cephede gerekli onarım yapılmadan başlanan uygulama, kaplamanın ömrünü ve görünümünü olumsuz etkileyebilir.",
      "Küçükler Yapı Dekorasyon olarak cepheyi, binanın kullanımını, duvar yapısını ve nem belirtilerini yerinde değerlendiriyoruz. Fındıkzade, Çapa, Şehremini, Kocamustafapaşa, Yedikule, Balat ve çevresinde duvarların kışın soğuk olması, pencere kenarında küf, sıva dökülmesi ve yüksek ısı kaybı gibi şikâyetler görülebilir. Mantolamanın hangi sorunu çözebileceği, hangi sorunun ayrı müdahale gerektirdiği uygulama öncesinde açıklığa kavuşturulmalıdır."
    ],
    contentSections: [
      {
        title: "Mantolama Hangi Sorunlara Yardımcı Olur?",
        paragraphs: [
          "Dış cephe ısı yalıtımı, duvarlardan gerçekleşen ısı geçişini azaltmaya ve iç yüzey sıcaklığını daha dengeli hale getirmeye yardımcı olabilir. Kışın çok soğuyan, yazın hızlı ısınan dış duvarlarda doğru tasarlanmış sistem iç konforu destekler. Kolon, kiriş ve duvar birleşimlerinde oluşan ısı köprülerinin kesintisiz kaplanması, yalnızca duvar yüzeyine parça parça levha yapıştırmaktan daha etkilidir.",
          "Yakıt tasarrufu oranı bina yönü, pencere kalitesi, çatı, tesisat, kullanıcı alışkanlıkları ve yalıtım kalınlığı gibi birçok etkene bağlıdır; sabit bir oran garanti edilemez. Mantolama dış duvar kaynaklı ısı kaybını azaltabilir ancak bütün enerji sorunlarını tek başına çözmez. Çatı, pencere, ortak alan ve ısıtma sisteminin durumu da genel performansı etkiler."
        ],
        bullets: [
          "Dış duvarlarda ısı geçişinin azaltılmasına destek",
          "Kolon ve kiriş çevresindeki ısı köprülerinin ele alınması",
          "Cephe çatlakları ve gevşek sıvaların onarım fırsatı",
          "Son kat kaplamayla dış görünüşün yenilenmesi",
          "İç yüzey sıcaklığının daha dengeli hale gelmesine katkı"
        ],
      },
      {
        title: "Mantolama Rutubeti ve Küfü Tamamen Çözer mi?",
        paragraphs: [
          "Mantolama, soğuk dış duvar yüzeylerinde oluşan yoğuşmayı azaltmaya yardımcı olabilir; ancak her rutubet sorununun çözümü değildir. Küf; tesisat kaçağı, çatı veya teras sızıntısı, dış cephe çatlağı, pencere birleşimi, zeminden yükselen nem veya yetersiz havalandırma nedeniyle oluşabilir. Kaynak farklıysa yalnızca dış cephe yalıtımı yapmak sorunu devam ettirebilir.",
          "Pencere kenarında küf görülüyorsa ısı köprüsü yanında doğrama birleşimleri ve iç mekân nemi de değerlendirilmelidir. Yağmurdan sonra duvarda ıslaklık artıyorsa cephe çatlakları, parapetler ve yağmur suyu detayları kontrol edilmelidir. Nem kaynağı belirlendikten sonra mantolama, su yalıtımı, çatı tamiri veya havalandırma düzenlemesinden hangisinin gerekli olduğu netleştirilmelidir."
        ],
      },
      {
        title: "Eski Binada Mantolama Öncesi Cephe Onarımı",
        paragraphs: [
          "Eski binalarda gevşek sıva, kabaran boya, paslanan metal parçalar ve çatlak bölgeler mantolama öncesinde ele alınmalıdır. Taşıma gücü zayıf yüzeye yapıştırılan levha, altındaki katmanla birlikte ayrılabilir. Cephe yüzeyi kontrol edilmeli, gevşek bölümler temizlenmeli, gerekli tamirler yapılmalı ve yüzey sistemin istediği düzgünlüğe getirilmelidir.",
          "Çatlakların yalnızca üzerini sıva ile kapatmak yeterli olmayabilir. Çatlağın hareketli olup olmadığı, pencere ve balkon birleşimleri, saçak, parapet ve yağmur inişleri değerlendirilmelidir. Yapısal olabilecek geniş veya ilerleyen çatlaklarda mantolama uygulamasından önce uygun teknik inceleme yapılmalıdır. Isı yalıtım sistemi, taşıyıcı sistem sorununu gizlemek amacıyla kullanılmamalıdır."
        ],
      },
      {
        title: "EPS, XPS ve Taş Yünü Arasındaki Farklar",
        paragraphs: [
          "Yalıtım malzemesi seçimi yalnızca fiyat üzerinden yapılmamalıdır. EPS, dış cephe sistemlerinde yaygın kullanılan bir seçenektir ve farklı yoğunluk ile özelliklerde üretilebilir. XPS daha düşük su emme özelliği nedeniyle bazı detaylarda tercih edilebilir; ancak bütün cephede otomatik olarak en doğru seçenek olduğu söylenemez. Taş yünü ise yangın davranışı, ses ve buhar geçirgenliği gibi özellikleriyle belirli projelerde öne çıkabilir.",
          "Doğru malzeme; binanın yüksekliği, cephe yapısı, yangın gereksinimleri, uygulama detayı, iklim koşulları ve seçilen sistemin bütünlüğüne göre belirlenmelidir. Levha, yapıştırıcı, dübel, file, sıva ve son katın birbiriyle uyumlu sistem bileşenleri olması önemlidir. Sadece levhanın kalınlığına odaklanmak, köşe profilleri, dübelleme ve pencere detayları gibi kritik noktaları gözden kaçırabilir."
        ],
      },
      {
        title: "Mantolama Uygulamasının Temel Aşamaları",
        paragraphs: [
          "İlk aşamada güvenli erişim ve çalışma düzeni hazırlanır. Cephe temizlenir, gevşek katmanlar alınır ve gerekli tamirler yapılır. Başlangıç profili ve detaylar belirlendikten sonra yalıtım levhaları şaşırtmalı düzende, boşluk bırakmadan uygulanır. Pencere ve kapı köşelerinde birleşimlerin çatlak oluşturmayacak biçimde çözülmesi gerekir.",
          "Yapıştırma sonrası uygun sayıda ve tipte mekanik dübel kullanılır. Köşeler, açıklıklar ve darbe riski olan alanlar profillerle güçlendirilir. Alkali dayanımlı file, sıva katmanının içine bindirmeli olarak yerleştirilir. Kuruma tamamlandıktan sonra astar ve son kat dekoratif kaplama uygulanır. Hava sıcaklığı, yağış ve rüzgâr koşulları bütün aşamalarda dikkate alınmalıdır."
        ],
      },
      {
        title: "İskele, Güvenlik ve Bina Kullanımı",
        paragraphs: [
          "Dış cephe çalışmasında erişim yöntemi binanın yüksekliğine ve cephe koşullarına göre belirlenir. İskele kurulacaksa sağlam zemin, güvenli bağlantı, düşmeye karşı koruma ve yaya geçişleri planlanmalıdır. Bina girişi, balkonlar, klima dış üniteleri, tabelalar ve komşu yapıların durumu uygulama öncesinde değerlendirilir.",
          "Fatih'in yoğun sokaklarında malzeme indirme, iskele alanı ve yaya güvenliği ayrıca önem taşır. Aksaray, Laleli, Eminönü ve Balat gibi bölgelerde çevre kullanımı ve çalışma saatleri uygulama planını etkileyebilir. Gerekli idari izinler ve bina kararları işin niteliğine göre kontrol edilmelidir. Tarihî veya özel niteliği bulunan yapılarda dış cephe görünüşüne müdahale edilmeden önce ilgili koşullar araştırılmalıdır."
        ],
      },
      {
        title: "İçten Yalıtım mı, Dıştan Mantolama mı?",
        paragraphs: [
          "Dıştan mantolama, cephe boyunca daha kesintisiz bir yalıtım katmanı oluşturma ve kolon-kiriş gibi ısı köprülerini dışarıdan sarma avantajına sahiptir. İçten yalıtım ise dış cepheye müdahalenin mümkün olmadığı bazı durumlarda değerlendirilebilir. Ancak iç mekândan alan kaybı, yoğuşma riski ve birleşim detayları dikkatle hesaplanmalıdır.",
          "Tek bir dairenin içten yalıtılması ile bütün binanın dıştan yalıtılması aynı sonucu vermez. İç uygulamada tavan, döşeme, iç duvar ve pencere birleşimlerinde kesintiler oluşabilir. Yanlış buhar dengesi duvar içinde nem birikmesine yol açabilir. Bu nedenle malzeme ve katman düzeni, yalnızca pratik görünüşe göre değil duvar yapısı ve nem koşullarına göre belirlenmelidir."
        ],
      },
      {
        title: "Fatih'te Mantolama Maliyeti ve Karar Süreci",
        paragraphs: [
          "Maliyet; cephe metrekaresi, binanın yüksekliği, yüzey onarımı, seçilen yalıtım sistemi, levha kalınlığı, iskele, pencere detayları ve son kat kaplamaya göre değişir. Çok bozuk bir cephe ile sağlam ve düzgün bir yüzey aynı işçilikle değerlendirilemez. Teklifte yüzey tamiri, sistem bileşenleri, iskele ve son katın kapsamı açıkça belirtilmelidir.",
          "Kat malikleri kararı, yönetim planı, ortak alan kullanımı ve gerekli izinler uygulama öncesinde kontrol edilmelidir. Hangi çoğunluğun gerektiği veya dış cepheye hangi müdahalenin yapılabileceği bina ve işlem türüne göre değişebileceğinden kesin hukuki varsayım yapılmamalıdır. Özellikle Sultanahmet, Süleymaniye, Zeyrek, Balat ve çevresindeki özel nitelikli yapılarda işlemden önce ilgili kurum ve uzman görüşleri gerekebilir."
        ],
      },
      {
        title: "Pencere, Balkon ve Klima Detayları",
        paragraphs: [
          "Mantolama sisteminin başarısı geniş duvar yüzeyinden çok birleşim detaylarında belli olur. Pencere kenarlarında levhanın doğramaya yaklaşımı, denizlik uzatmaları, köşe profilleri ve file takviyeleri doğru çözülmelidir. Eski denizlik yalıtım kalınlığı sonrasında kısa kalırsa yağmur suyu cepheye akabilir. Damlalık ve eğim detayları kaplama başlamadan önce planlanmalıdır.",
          "Balkon döşeme kenarları, korkuluk bağlantıları, klima dış üniteleri, borular, kablolar ve tabelalar kesintisiz yalıtımı zorlaştırabilir. Bu elemanların çevresi rastgele köpük veya sıvayla kapatılmamalı; güvenli montaj ve su sızdırmazlık ayrıntıları oluşturulmalıdır. Klima cihazları sökülüp takılacaksa elektrik ve gaz bağlantıları yetkin kişilerce yapılmalı, taşıyıcı konsollar yalıtım sistemine zarar vermeyecek biçimde çözülmelidir."
        ],
      },
      {
        title: "Mantolama Sonrası Bakım ve Kontrol",
        paragraphs: [
          "Uygulama tamamlandıktan sonra cephe tamamen bakım gerektirmez hale gelmez. Yağmur olukları, iniş boruları, balkon giderleri ve parapetler düzenli kontrol edilmelidir. Bu alanlardan taşan su son kat kaplamada kirlenme, yosunlaşma ve zamanla bozulma oluşturabilir. Cepheye sonradan monte edilen tabela, kablo veya klima konsollarının yalıtım katmanını delmesi halinde bağlantı çevresi uygun biçimde kapatılmalıdır.",
          "Darbe alan alt kat bölgeleri, pencere köşeleri ve hareketli çatlaklar gözlemlenmelidir. Küçük bir hasar büyümeden onarılırsa suyun sisteme girmesi önlenebilir. Cephe yıkama veya boya yenilemesi yapılacaksa mevcut son katla uyumlu ürün kullanılmalıdır. Yalıtım levhasını açığa çıkaran agresif kazıma ve yüksek basınçlı uygulamalardan kaçınılmalıdır."
        ],
      },
      {
        title: "Mantolama Kararı Öncesi Bina Genelinde Değerlendirme",
        paragraphs: [
          "Mantolama ortak cepheyi etkileyen bir çalışma olduğundan yalnızca tek bir dairenin şikâyeti üzerinden planlanmamalıdır. Kuzey ve güney cephelerin güneş alma durumu, çatı ve bodrum koşulları, pencere yenilemeleri, balkon kapatmaları ve mevcut cephe kaplamaları birlikte incelenmelidir. Farklı dairelerde görülen küfün yeri ve zamanı kaydedildiğinde ısı köprüsü ile su sızıntısını ayırmak daha kolay olabilir.",
          "Bina sakinleriyle malzeme, renk, çalışma süresi, iskele, ortak alan kullanımı ve klima gibi cephe elemanları önceden konuşulmalıdır. Uygulamanın yalnızca görünen ön cephede bırakılması, yan ve arka cephe birleşimlerinde ısı köprüleri oluşturabilir. Bütçe nedeniyle etaplama yapılacaksa sistemin nerede bitirileceği teknik olarak çözülmeli, açıkta kalan levha veya yarım detay bırakılmamalıdır.",
          "Karar aşamasında yalnızca levha fiyatlarını karşılaştırmak yanıltıcıdır. Yüzey tamiri, iskele, dübel tipi ve sayısı, file ağırlığı, köşe profilleri, denizlik düzenlemeleri, son kat kaplama ve iş güvenliği toplam sistemin parçalarıdır. Daha düşük ilk maliyet için bu adımlardan birinin eksik bırakılması, ilerleyen dönemde çatlak, ayrılma veya su girişi nedeniyle daha yüksek onarım ihtiyacı doğurabilir. Teklifler sistem bileşenleri üzerinden karşılaştırılmalıdır.",
          "Uygulama başlamadan önce örnek cephe rengi ve doku seçilmesi, büyük yüzeyde ortaya çıkacak görünümü önceden değerlendirmeyi sağlar. Çok koyu renklerin güneş alan cephelerde yüzey sıcaklığını artırabileceği, bazı son kat ürünlerde renk sınırlamaları bulunduğu unutulmamalıdır. Renk kararı bina çevresi, mevcut doğramalar ve varsa yerel görünüş koşullarıyla birlikte verilmelidir."
        ],
      },
    ],
    process: [
      { title: "Cephe İncelemesi", description: "Yüzey, çatlak, nem, pencere detayları ve erişim koşulları incelenir." },
      { title: "Sistem Seçimi", description: "Yalıtım malzemesi, kalınlık, dübel ve son kat seçenekleri belirlenir." },
      { title: "Yüzey Hazırlığı", description: "Gevşek katmanlar temizlenir, çatlak ve sıva onarımları yapılır." },
      { title: "Yalıtım Uygulaması", description: "Levha, dübel, köşe profili, file ve sıva sistemi uygulanır." },
      { title: "Son Kat ve Kontrol", description: "Astar ve dekoratif kaplama tamamlanır; detaylar kontrol edilir." },
    ],
    benefits: [
      "Cephe onarımı ve ısı yalıtımının birlikte değerlendirilmesi",
      "Isı köprüleri ve pencere birleşimlerine detay odaklı yaklaşım",
      "Malzeme bileşenlerinin uyumlu sistem olarak seçilmesi",
      "Rutubet kaynağının mantolamadan ayrı değerlendirilmesi",
      "Fatih'in yoğun, eski ve özel nitelikli yapı koşullarına göre planlama"
    ],
    faq: [
      { question: "Fatih'te eski binaya mantolama yapılabilir mi?", answer: "Cephe taşıma gücü, çatlaklar, yüzey bozulmaları ve bina niteliği incelendikten sonra uygun sistem değerlendirilebilir. Gevşek sıva ve yapısal olabilecek sorunlar çözülmeden doğrudan levha uygulamak doğru değildir." },
      { question: "Mantolama rutubeti tamamen çözer mi?", answer: "Hayır. Yoğuşma kaynaklı bazı sorunları azaltabilir; ancak tesisat, çatı, dış cephe sızıntısı, zeminden nem veya yetersiz havalandırma ayrı müdahale gerektirir. Önce nemin kaynağı bulunmalıdır." },
      { question: "İç cephe yalıtımı mı dış cephe mantolama mı daha uygundur?", answer: "Dıştan yalıtım genellikle daha kesintisiz sistem sağlar. İçten yalıtım dış cepheye müdahalenin mümkün olmadığı durumlarda değerlendirilebilir; ancak alan kaybı ve yoğuşma riski doğru detaylandırılmalıdır." },
      { question: "Duvarlar kışın neden çok soğuk olur?", answer: "Yalıtımsız dış duvar, kolon-kiriş ısı köprüleri, hava kaçakları, pencere sorunları veya yetersiz ısıtma etkili olabilir. Sorun yalnızca duvar malzemesine bakılarak değil bütün bina kabuğu üzerinden değerlendirilmelidir." },
      { question: "Pencere kenarında küf neden oluşur?", answer: "Isı köprüsü, hava sızıntısı, dış cephe derzi, yüksek iç nem ve yetersiz havalandırma neden olabilir. Mantolama bazı ısı köprülerini azaltabilir; ancak pencere birleşimleri ve iç nem de kontrol edilmelidir." },
      { question: "Mantolama sonrası ısı kaybı azalır mı?", answer: "Doğru tasarlanmış ve uygulanmış sistem dış duvarlardan olan ısı geçişini azaltmaya yardımcı olabilir. Sonuç pencere, çatı, ısıtma sistemi, kullanıcı alışkanlığı ve uygulama kalitesine göre değişir; sabit tasarruf oranı garanti edilemez." },
      { question: "Mantolama öncesi cephe tamiri gerekir mi?", answer: "Gevşek sıva, kabaran boya, çatlak ve zayıf yüzey varsa evet. Yalıtım sistemi sağlam alt zemine uygulanmalıdır. Yapısal olabilecek çatlaklar ayrıca uzman tarafından değerlendirilmelidir." },
      { question: "Mantolamada hangi malzeme kullanılır?", answer: "EPS, XPS ve taş yünü farklı özelliklere sahiptir. Seçim bina yüksekliği, yangın gereksinimi, cephe yapısı, nem koşulları ve sistem tasarımına göre yapılmalıdır. Tek başına fiyat veya levha kalınlığı yeterli ölçüt değildir." },
      { question: "Mantolama için iskele gerekir mi?", answer: "Erişim yöntemi bina yüksekliği ve cephe koşullarına bağlıdır. Çoğu dış cephe çalışmasında güvenli iskele veya uygun erişim sistemi gerekir. Yaya geçişleri ve bina girişi de korunmalıdır." },
      { question: "Tarihî binada mantolama yapılabilir mi?", answer: "Binanın koruma durumu ve dış görünüşe ilişkin kurallar kontrol edilmeden uygulama başlatılmamalıdır. İlgili kurum, uzman ve yönetim görüşleri gerekebilir. Standart apartman uygulaması doğrudan özel nitelikli yapıya uyarlanamaz." },
    ],
    related: [
      "su-yalitimi",
      "cati-tamiri",
      "boya-badana"
    ],
  },
  {
    slug: "su-yalitimi",
    title: "Su Yalıtımı",
    shortTitle: "Su Yalıtımı",
    icon: Droplets,
    excerpt: "Fatih'te teras, balkon, banyo, dış cephe ve bodrumdaki sızıntının kaynağını belirlemeye dayalı su yalıtımı.",
    href: `${BASE}/su-yalitimi`,
    seoTitle: "Fatih Su Yalıtımı | Teras, Banyo ve Bodrum",
    seoDescription: "Fatih'te teras, balkon, banyo, dış cephe ve bodrum için kaynak tespiti, yüzey hazırlığı ve uygun sistemle su yalıtımı.",
    h1: "Fatih Su Yalıtımı ve Sızıntı Çözümleri",
    intro: [
      "Fatih'te su yalıtımı yapılmadan önce duvar, tavan veya zemindeki suyun nereden geldiği belirlenmelidir. Yağmur sonrası tavanda oluşan leke, banyodan alt kata sızma, teras kenarında kabarma, pencere çevresinden su girişi ve bodrumda sürekli nem aynı yöntemle çözülemez. Kaynak bulunmadan yalnızca görünen yüzeyi kapatmak, suyun başka bir noktadan çıkmasına veya yeni kaplamanın kısa sürede bozulmasına neden olabilir.",
      "Küçükler Yapı Dekorasyon olarak çatı, teras, balkon, banyo, dış cephe, pencere birleşimleri, temel ve bodrum kaynaklı sorunları ayrı ayrı değerlendiriyoruz. Balat, Cibali, Zeyrek, Yedikule, Kocamustafapaşa, Şehremini, Aksaray ve çevresindeki eski yapılarda yüzey çatlakları, yıpranmış kaplamalar, hatalı eğimler ve eski tesisatlar birlikte görülebilir. Uygulama sistemi, sorun kaynağı ve yüzey koşuluna göre seçilmelidir."
    ],
    contentSections: [
      {
        title: "Duvardan veya Tavandan Gelen Suyun Kaynağı Nasıl Bulunur?",
        paragraphs: [
          "Sızıntının zamanı ve yeri ilk ipucudur. Yağmur sırasında veya hemen sonrasında artan tavandaki su, çatı, teras, dere, oluk ya da dış cephe bağlantılarıyla ilişkili olabilir. Banyo veya mutfak kullanıldığında ortaya çıkan nem, temiz su veya gider tesisatını düşündürür. Su kullanılmasa da devam eden ıslaklık, basınçlı hatta kaçak ihtimalini artırabilir.",
          "Su her zaman girdiği noktadan görünmez. Döşeme, sıva, yalıtım katmanı veya duvar boşluğu içinde ilerleyerek daha uzaktaki bir noktadan çıkabilir. Bu nedenle yalnızca lekenin bulunduğu alanı kapatmak yeterli değildir. Üst yüzey, birleşimler, boru geçişleri, süzgeçler, parapetler ve çatlaklar sistemli biçimde kontrol edilmelidir."
        ],
        bullets: [
          "Sızıntının yağmur veya kullanım zamanıyla ilişkisinin belirlenmesi",
          "Temiz su ve gider hatlarının ayrı değerlendirilmesi",
          "Çatı, teras, cephe ve pencere birleşimlerinin kontrolü",
          "Suyun yapı içinde farklı noktaya ilerleyebileceğinin dikkate alınması",
          "Kaynak çözülmeden iç yüzeyin kapatılmaması"
        ],
      },
      {
        title: "Teras ve Balkondan Alt Kata Su Sızması",
        paragraphs: [
          "Teras veya balkonda su sızıntısı; yetersiz eğim, tıkalı süzgeç, çatlamış kaplama, bozulmuş derz, parapet ve duvar birleşimleri, kapı eşiği ya da yalıtım katmanındaki süreksizlik nedeniyle oluşabilir. Su yüzeyde gölleniyorsa yalnızca yeni bir kaplama sürmek sorunu çözmeyebilir. Önce suyun güvenli biçimde giderlere yönelmesi sağlanmalıdır.",
          "Uygulama öncesinde gevşek seramik, çatlak şap ve bozuk birleşimler kontrol edilir. Mevcut sistemin durumuna göre kaplamaların sökülmesi, eğim şapının yenilenmesi ve yeni yalıtım sistemi yapılması gerekebilir. Bazı sağlam yüzeylerde üstten uygulama değerlendirilebilir; fakat kapı eşikleri, süzgeç yüksekliği ve parapet detayları uygun değilse üst katman eklemek yeni sorun yaratabilir."
        ],
      },
      {
        title: "Banyo Su Yalıtımı Bozulduğunda Hangi Belirtiler Görülür?",
        paragraphs: [
          "Alt kat tavanında sararma, boya kabarması, duş sonrasında artan damlama, banyo duvarının arkasında nem ve süpürgelik çevresinde şişme su yalıtımı veya tesisat sorununa işaret edebilir. Ancak aynı belirtiler temiz su borusu, gider bağlantısı veya klozet contası nedeniyle de oluşabilir. Seramik derzinin koyulaşması tek başına yalıtımın tamamen bozulduğunu kanıtlamaz.",
          "Kaynağı ayırmak için duş, lavabo ve klozet kullanımı gözlemlenir; bağlantılar ve gider çevresi kontrol edilir. Tesisat sağlamsa ve su kaplama altına yayılıyorsa duş alanı ile zemindeki yalıtım detayları değerlendirilir. Kapsamlı bozulmada seramiklerin sökülmesi, yüzeyin hazırlanması, köşe ve süzgeç detaylarının yenilenmesi ve yeni kaplamanın uygulanması gerekebilir."
        ],
      },
      {
        title: "Dış Cephe ve Pencere Çevresinden Yağmur Suyu Girişi",
        paragraphs: [
          "Dış cephedeki saç teli çatlakları, gevşek sıva, pencere denizlikleri, doğrama ile duvar arasındaki boşluklar, parapet üstleri ve yağmur inişleri su girişine neden olabilir. Yağmurun rüzgârla belirli yönden geldiği günlerde sorun artıyorsa cephe birleşimleri önem kazanır. İç duvarda görülen leke, dışarıdaki giriş noktasının tam karşısında olmayabilir.",
          "Onarımda yalnızca iç duvarın boyanması yerine dış yüzeyin güvenli erişimle incelenmesi gerekir. Bozuk derz ve çatlaklar uygun malzemeyle onarılmalı, denizlik eğimleri ve damlalık detayları kontrol edilmelidir. Cephe tamamen kaplanacaksa yüzeyin taşıma gücü ve mevcut boya sistemi değerlendirilmelidir. Tarihî veya özel nitelikli yapılarda dış görünüşe müdahale öncesi gerekli kontroller yapılmalıdır."
        ],
      },
      {
        title: "Bodrum Kat Rutubeti ve Su Girişi",
        paragraphs: [
          "Bodrumdaki nem; dış zeminden duvara basınç yapan su, yetersiz temel-perde yalıtımı, zemin birleşimi, tesisat kaçağı, havalandırma eksikliği veya yoğuşma nedeniyle oluşabilir. Duvarın altından yukarı doğru ilerleyen tuzlanma ile tavandan gelen sızıntı aynı soruna işaret etmez. Su seviyesi ve yağışla ilişki değerlendirilmelidir.",
          "En sağlıklı çözüm çoğu zaman suyun geldiği dış taraftan müdahaledir; ancak bina çevresine erişim her zaman mümkün olmayabilir. İçten uygulanan negatif yön yalıtım sistemleri bazı koşullarda değerlendirilebilir, fakat yüzey basıncı, çatlaklar ve birleşimler doğru hazırlanmalıdır. Sadece iç duvara boya veya panel kaplamak nemi gizleyebilir ve arkasında küf oluşmasına neden olabilir."
        ],
      },
      {
        title: "Su Yalıtımında Yüzey Hazırlığı ve Malzeme Seçimi",
        paragraphs: [
          "Yalıtım malzemesi sağlam, temiz ve uygun nem oranındaki yüzeye uygulanmalıdır. Gevşek sıva, kabarmış boya, yağ, toz ve keskin çıkıntılar temizlenir; çatlaklar ile boşluklar uygun tamir harcıyla hazırlanır. Köşe ve boru geçişleri, sistemin en zayıf noktaları olabileceği için detay bantları ve tamamlayıcı ürünlerle ele alınır.",
          "Çimento esaslı sürme yalıtım, bitümlü membran, poliüretan ve farklı likit sistemlerin kullanım alanları birbirinden farklıdır. Güneş altında açıkta kalacak teras ile seramik altında kalacak banyo, toprakla temas eden temel ve hareketli balkon aynı ürünle çözülmeyebilir. Malzeme seçimi yüzey, su basıncı, UV maruziyeti, üst kaplama ve hareket ihtiyacına göre yapılmalıdır."
        ],
      },
      {
        title: "Membran ve Fayans Üstü Uygulamalar Ne Zaman Tercih Edilir?",
        paragraphs: [
          "Rulo membran sistemleri geniş çatı ve teras yüzeylerinde, uygun eğim ve detay çözümüyle kullanılabilir. Ek yerleri, parapet dönüşleri, süzgeç ve boru geçişleri dikkatle uygulanmalıdır. Membranın üzerine gelecek koruma katmanı, kullanım amacına göre planlanır. Açıkta bırakılan ve korumasız kalan malzeme mekanik darbelerden zarar görebilir.",
          "Fayans üstü su yalıtımı, mevcut kaplama sağlam ve altyapı problemi yoksa bazı durumlarda kısmi çözüm olabilir. Boşluk yapan seramik, çatlak şap, kötü eğim veya kapı eşiği sorunu varsa üstten uygulama kalıcı olmayabilir. Ayrıca yüzey yüksekliğinin artması süzgeç ve kapı detaylarını bozabilir. Karar, yalnızca kırım istememek üzerinden değil mevcut sistemin sağlığı üzerinden verilmelidir."
        ],
      },
      {
        title: "Fatih'te Su Yalıtımı Süresi ve Maliyet Unsurları",
        paragraphs: [
          "Süre; sorunun kaynağına, söküm miktarına, yüzey kurumasına, uygulanacak kat sayısına ve üst kaplamaya göre değişir. Küçük bir pencere birleşimi onarımı ile bütün terasın eğim ve membranının yenilenmesi aynı takvimde değerlendirilmez. Katlar arasındaki bekleme süreleri ve test aşaması atlanmamalıdır.",
          "Maliyet; alan büyüklüğü yanında erişim, yüzey onarımı, malzeme sistemi, detay sayısı, söküm ve yeniden kaplama ihtiyacına göre belirlenir. Balat, Zeyrek ve Cibali'deki eski yapılarda yüzey koşulları; Eminönü, Aksaray ve Laleli çevresindeki yoğun yapılarda erişim ve çalışma saatleri farklı olabilir. Teklifte hangi kaynağa müdahale edildiği ve üst kaplamanın dahil olup olmadığı açıklanmalıdır."
        ],
      },
      {
        title: "Yalıtım Sonrası Test ve Kuruma Süreci",
        paragraphs: [
          "Yalıtım katmanı uygulandıktan sonra hemen kapatılmamalıdır. Ürünün türüne göre gerekli kuruma süresi beklenmeli, yüzeyde boşluk, kabarcık, çatlak veya eksik detay bulunup bulunmadığı kontrol edilmelidir. Uygun alanlarda kontrollü su testi yapılabilir; ancak test yöntemi ve süresi, yapının durumu ile kullanılan sisteme göre belirlenmelidir. Kontrolsüz biçimde fazla su yüklemek alt katlara ek zarar verebilir.",
          "Test tamamlandıktan sonra koruyucu şap, seramik veya başka üst kaplama yalıtıma zarar vermeden uygulanmalıdır. Sonraki ekiplerin matkap, kesici alet veya ağır malzemeyle yalıtımı delmemesi için kritik noktalar işaretlenmelidir. Kaplama tamamlandıktan sonra süzgeçlerin açık olduğu, eğimin çalıştığı ve birleşimlerin kapandığı yeniden kontrol edilmelidir."
        ],
      },
      {
        title: "Su Yalıtımında Sık Yapılan Hatalar",
        paragraphs: [
          "En sık hata, kaynağı bulmadan lekenin bulunduğu yüzeye malzeme sürmektir. Diğer hatalar arasında ıslak veya tozlu zemine uygulama, çatlakları hazırlamadan kapatma, köşe ve boru geçişlerini güçlendirmeme, katlar arasında beklememe ve farklı ürünleri uyumluluk kontrolü olmadan üst üste kullanma bulunur. Bu durumlar yalıtımın yüzeyden ayrılmasına veya suyun detaylardan geçmesine neden olabilir.",
          "Yalıtımın üst kaplamayla birlikte düşünülmemesi de sorun yaratır. Terasta kötü eğim, banyoda yanlış süzgeç yüksekliği veya balkonda düşük kapı eşiği varsa iyi bir malzeme tek başına yeterli olmaz. Ayrıca görünür çatlağın yapısal hareketten kaynaklanabileceği ihtimali göz ardı edilmemelidir. Genişleyen çatlaklarda yalnızca elastik kaplama uygulamak yerine gerekli teknik inceleme yapılmalıdır."
        ],
      },
      {
        title: "Yalıtım Sonrasında İç Yüzey Onarımı",
        paragraphs: [
          "Sızıntı kaynağı giderildikten sonra iç duvar veya tavan hemen boyanmamalıdır. Yapı elemanının içinde biriken nemin uzaklaşması zaman alabilir. Yüzeyin yalnızca dıştan kuru görünmesi, alt katmanların tamamen kuruduğu anlamına gelmez. Gevşek boya ve sıva sağlam zemine kadar temizlenmeli, tuzlanma varsa uygun yöntemle giderilmeli ve yüzeyin durumuna göre tamir harcı, astar ve boya sistemi seçilmelidir.",
          "Kurutma sırasında alan havalandırılmalı, ancak yüzeyi aşırı hızlı kurutarak çatlatabilecek kontrolsüz ısı kaynaklarından kaçınılmalıdır. Küf oluşmuşsa temizlik uygun koruma önlemleriyle yapılmalıdır. Yeni boya sonrasında lekenin yeniden çıkması, kaynağın devam ettiğini veya yüzeyin yeterince kurumadığını gösterebilir. Böyle bir durumda yalnızca ek boya katı uygulamak yerine dış veya üst kaynağın tekrar kontrol edilmesi gerekir.",
          "İç yüzey onarımı tamamlandıktan sonra bölge bir süre gözlemlenmelidir. Özellikle yalnızca belirli yönden gelen rüzgârlı yağmurda ortaya çıkan sızıntılar, normal hava koşullarında hemen test edilemeyebilir. Nem ölçümü ve görsel takip, onarımın sonucunu değerlendirmeye yardımcı olur. Dolap, panel veya duvar kâğıdı gibi hava geçişini azaltan kaplamalar, yüzeyin gerçekten kuruduğu doğrulanmadan uygulanmamalıdır.",
          "Su kaynağı komşu bağımsız bölüm, ortak tesisat veya ortak çatıyla ilişkiliyse uygulama kapsamı ve sorumluluklar bina yönetimiyle birlikte değerlendirilmelidir. Görsel belirti tek dairede olsa bile giriş noktası ortak alanda olabilir. İşlem başlamadan önce erişim, izin ve kapatılacak alanların netleştirilmesi, yarım kalan onarımları ve gereksiz tekrarları azaltır."
        ],
      },
    ],
    process: [
      { title: "Kaynak Tespiti", description: "Suyun yağmur, tesisat, cephe, teras veya zeminden gelip gelmediği araştırılır." },
      { title: "Sistem Kararı", description: "Yüzey ve su etkisine uygun yalıtım yöntemi belirlenir." },
      { title: "Yüzey Hazırlığı", description: "Gevşek katmanlar, çatlaklar, eğimler ve birleşimler hazırlanır." },
      { title: "Yalıtım Uygulaması", description: "Seçilen sistem gerekli katlar ve detay ürünleriyle uygulanır." },
      { title: "Test ve Koruma", description: "Uygun kontroller yapılır; yalıtım üst kaplama veya koruyucu katla tamamlanır." },
    ],
    benefits: [
      "Sızıntı kaynağını kaplama öncesinde ayırmaya odaklanan inceleme",
      "Teras, banyo, cephe ve bodrum için farklı sistem yaklaşımı",
      "Köşe, süzgeç ve boru geçişlerinde detay odaklı uygulama",
      "Yüzey eğimi ve üst kaplamanın yalıtımla birlikte planlanması",
      "Fatih'teki eski yapıların erişim ve yüzey koşullarına göre değerlendirme"
    ],
    faq: [
      { question: "Duvardan gelen suyun kaynağı nasıl bulunur?", answer: "Sızıntının yağmurla mı, su kullanımıyla mı arttığı incelenir. Çatı, teras, dış cephe, pencere birleşimleri, temiz su ve gider hatları ayrı ayrı kontrol edilir. Su yapı içinde ilerleyebileceği için yalnızca lekenin görüldüğü noktaya bakmak yeterli değildir." },
      { question: "Yağmur yağınca tavandan neden su damlar?", answer: "Çatı kaplaması, kiremit, dere, baca dibi, teras, parapet, oluk veya yağmur inişlerinde sorun olabilir. Giriş noktası tavandaki damlanın tam üstünde olmayabilir. Yağış sonrası çatı ve birleşimler güvenli biçimde incelenmelidir." },
      { question: "Terastan alt kata su sızması nasıl önlenir?", answer: "Önce eğim, süzgeç, kaplama, çatlaklar, parapet ve kapı eşiği kontrol edilir. Mevcut sistemin durumuna göre noktasal detay onarımı veya kaplamaların sökülerek yalıtımın yenilenmesi gerekebilir." },
      { question: "Banyo yalıtımı bozulduğunda ne görülür?", answer: "Alt kat tavanında leke, duş sonrası artan nem, banyo duvarının arkasında kabarma ve süpürgeliklerde şişme görülebilir. Aynı belirtiler tesisat kaçağından da kaynaklanabileceği için bağlantılar ayrıştırılmalıdır." },
      { question: "Bodrum kattaki rutubet nasıl çözülür?", answer: "Suyun dış zeminden, temel birleşiminden, tesisattan veya yoğuşmadan gelip gelmediği belirlenir. Mümkünse suyun geldiği taraftan müdahale tercih edilir; dış erişim yoksa uygun içten sistemler teknik koşullara göre değerlendirilebilir." },
      { question: "Dış cephe çatlağından eve su girer mi?", answer: "Evet. Çatlak, gevşek sıva, pencere birleşimi veya denizlik detayı yağmur suyunu içeri taşıyabilir. İç yüzeyi boyamak yerine dış giriş noktası onarılmalıdır." },
      { question: "Membran su yalıtımı ne zaman kullanılır?", answer: "Geniş çatı, teras ve bazı temel uygulamalarında uygun detaylarla tercih edilebilir. Ek yerleri, süzgeçler, parapet dönüşleri ve üst koruma sistemi doğru planlanmalıdır." },
      { question: "Fayans üstü su yalıtımı kalıcı olur mu?", answer: "Mevcut seramik ve alt zemin sağlamsa bazı sistemler uygulanabilir. Ancak boşluk, kötü eğim, çatlak şap veya aktif tesisat sorunu varsa üstten uygulama problemi gizleyebilir ve kalıcı sonuç vermeyebilir." },
      { question: "Su kaçağı ile yalıtım problemi nasıl ayırt edilir?", answer: "Basınçlı su hattı, gider kullanımı ve yağmur koşulları ayrı ayrı gözlemlenir. Su kullanılmadan devam eden kaçak ile yalnızca yağışta oluşan sızıntının kaynakları farklıdır. Gerektiğinde tesisat testleri yapılmalıdır." },
      { question: "Küf ve boya kabarması su yalıtımıyla çözülür mü?", answer: "Kaynak dışarıdan veya yapı elemanından gelen suysa uygun yalıtım yardımcı olur. Sorun yoğuşma, yetersiz havalandırma veya tesisat kaçağıysa farklı müdahale gerekir. Önce neden belirlenmelidir." },
    ],
    related: [
      "banyo-tadilati",
      "cati-tamiri",
      "mantolama"
    ],
  },
  {
    slug: "cati-tamiri",
    title: "Çatı Tamiri",
    shortTitle: "Çatı Tamiri",
    icon: Warehouse,
    excerpt: "Fatih'te kiremit, mahya, baca dibi, dere, oluk, ahşap ve yalıtım katmanlarını birlikte kontrol eden çatı onarımı.",
    href: `${BASE}/cati-tamiri`,
    seoTitle: "Fatih Çatı Tamiri | Kiremit, Oluk ve Yalıtım",
    seoDescription: "Fatih'te çatı akıntısı, kırık kiremit, baca dibi, oluk ve teras sorunları için keşif, onarım ve yalıtım hizmeti.",
    h1: "Fatih Çatı Tamiri, Kiremit Aktarma ve Çatı Yalıtımı",
    intro: [
      "Fatih'te çatı tamiri yapılırken yalnızca görünen kırık kiremitlere bakmak yeterli değildir. Mahya, baca dipleri, çatı dereleri, yağmur olukları, iniş boruları, ahşap taşıyıcılar, kaplama altı örtüler ve teras birleşimleri birlikte kontrol edilmelidir. Yağmur suyunun girdiği nokta ile tavanda görülen leke aynı yerde olmayabilir; su çatı içinde ilerleyerek daha uzakta belirti verebilir.",
      "Küçükler Yapı Dekorasyon olarak akıntının zamanı, çatı tipi, kaplama durumu ve erişim koşullarını yerinde değerlendiriyoruz. Balat, Cibali, Zeyrek, Yedikule, Kocamustafapaşa, Samatya, Şehremini ve çevresindeki eski yapılarda kiremit kayması, ahşap yıpranması ve tıkalı oluklar görülebilir. Her akıntıda çatının tamamen yenilenmesi gerekmez; noktasal tamir, aktarma veya kapsamlı yenileme kararı keşif sonrasında verilmelidir."
    ],
    contentSections: [
      {
        title: "Yağmur Yağdığında Çatı Neden Akıtır?",
        paragraphs: [
          "Çatı akıntısı kırık veya kayan kiremit, bozulmuş mahya, baca çevresindeki açıklık, dere ve oluk tıkanması, yırtılmış alt örtü, kaplama birleşimi ya da teras çatlağı nedeniyle oluşabilir. Rüzgârlı yağmurda ortaya çıkan sızıntı ile dikey yağışta oluşan sızıntının giriş noktaları farklı olabilir. Akıntının hangi hava koşulunda başladığı incelemeye yardımcı olur.",
          "Su eğim boyunca ilerleyebilir, ahşap veya beton yüzeyden başka bir noktaya taşınabilir ve tavanda uzakta görünebilir. Bu nedenle yalnızca içteki lekenin üstüne müdahale etmek yeterli değildir. Çatının dış kaplaması, alt katmanları, baca ve parapet birleşimleri, yağmur suyu tahliyesi ve varsa güneş enerjisi ya da anten bağlantıları sistemli biçimde kontrol edilmelidir."
        ],
        bullets: [
          "Kırık, kayan veya eksilen kiremitlerin kontrolü",
          "Mahya ve baca dibi birleşimlerinin incelenmesi",
          "Dere, oluk ve iniş borularının temizliği",
          "Alt örtü ve kaplama birleşimlerinin değerlendirilmesi",
          "Ahşap taşıyıcı ve çatı arası nem izlerinin kontrolü"
        ],
      },
      {
        title: "Kırık Kiremit ve Kiremit Aktarma",
        paragraphs: [
          "Tek bir kırık kiremit dahi suyun alt katmana ulaşmasına neden olabilir; ancak akıntının tek sebebi olduğu varsayılmamalıdır. Çevredeki kiremitlerin oturması, bindirme düzeni, eğim ve alt örtü de incelenmelidir. Rüzgârla kayan kiremitler uygun biçimde sabitlenmeli, gelişigüzel harç kullanımı su akışını bozmayacak şekilde ele alınmalıdır.",
          "Kiremit aktarma işleminde mevcut kiremitler kontrollü olarak kaldırılır, sağlam olanlar ayrılır ve alt yüzey gözlemlenir. Ahşap latalar, örtü, dere ve birleşimler kontrol edilir; hasarlı parçalar yenilenir. Daha sonra kiremitler doğru bindirme ve sıra düzeniyle yeniden yerleştirilir. Bütün çatının aktarılması gerekip gerekmediği, kaplama ve alt sistemin genel durumuna göre belirlenir."
        ],
      },
      {
        title: "Baca Dibi, Mahya ve Çatı Deresi Onarımları",
        paragraphs: [
          "Baca dibi, farklı malzemelerin birleştiği ve suyun yön değiştirdiği kritik bir bölgedir. Eski harçların çatlaması, metal eteklerin ayrılması veya yanlış yapılmış silikon onarımları su girişine yol açabilir. Baca çevresinde yanmazlık ve güvenli mesafe koşulları da dikkate alınmalıdır. Geçici dolgu yerine hareket ve su akışına uygun detay çözülmelidir.",
          "Mahya hattı çatının üst birleşimidir; kırık parçalar, gevşek harç ve rüzgâr etkisi sızıntı oluşturabilir. Çatı dereleri ise iki eğimin suyunu topladığı için yaprak, harç ve atıkla tıkanmaya açıktır. Dere kesitinin daralması suyun kiremit altına taşmasına neden olabilir. Bu alanlar temizlenmeli, kaplama ve yalıtım sürekliliği kontrol edilmelidir."
        ],
      },
      {
        title: "Oluk ve İniş Borusu Neden Taşar?",
        paragraphs: [
          "Yağmur oluğu yaprak, toz, kuş yuvası, harç parçaları veya çatıdan gelen atıklarla tıkanabilir. Eğim yetersizse su belirli noktada göllenir ve cepheye taşar. Oluk bağlantılarında ayrılma, paslanma veya delik de duvarın sürekli ıslanmasına neden olabilir. Taşan su dış cephe boyasını, pencere çevresini ve bina temelini etkileyebilir.",
          "İniş borusunun tıkalı olması yalnızca çatı seviyesinde değil, alt bağlantılarda da geri tepmeye yol açabilir. Temizlik sonrasında oluk eğimi, askılar, ek yerleri ve suyun güvenli tahliye noktası kontrol edilmelidir. Yağmur suyunu doğrudan komşu alana veya bina girişine yönlendiren geçici çözümlerden kaçınılmalıdır."
        ],
      },
      {
        title: "Eski Çatıda Tamir mi, Komple Yenileme mi?",
        paragraphs: [
          "Noktasal hasar sınırlıysa kırık kiremit, baca dibi, dere veya oluk onarımı yeterli olabilir. Ancak çok sayıda kiremit bozuksa, alt örtü yaygın biçimde yırtılmışsa, ahşaplarda çürüme varsa veya farklı bölgelerde tekrar eden akıntılar görülüyorsa daha kapsamlı yenileme değerlendirilmelidir. Sadece görünen kaplama değiştirilmeden önce taşıyıcı ve alt katmanlar incelenmelidir.",
          "Komple yenileme kararında çatının yaşı tek ölçüt değildir. Bakım geçmişi, eğim, kaplama tipi, taşıyıcıların durumu, ısı ve su yalıtımı, yağmur tahliyesi ve kullanım amacı birlikte ele alınır. Çatı arası yaşam alanı olarak kullanılacaksa havalandırma, yoğuşma ve ısı yalıtımı detayları da standart bir depo çatısından farklı planlanmalıdır."
        ],
      },
      {
        title: "Teras Çatı Su Yalıtımı",
        paragraphs: [
          "Teras çatılarda akıntı; yetersiz eğim, tıkalı süzgeç, çatlak şap, parapet birleşimi, kapı eşiği veya eski yalıtım katmanından kaynaklanabilir. Yüzeyde su gölleniyorsa yalnızca üstüne yeni malzeme sürmek yeterli olmayabilir. Su tahliyesi ve detay yükseklikleri önce çözülmelidir.",
          "Mevcut kaplamanın sağlamlığına göre üstten uygulama veya kaplamaların sökülerek eğim ve yalıtımın yenilenmesi değerlendirilebilir. Süzgeç çevresi, parapet dönüşleri, boru geçişleri ve dilatasyon noktaları kesintisiz ele alınmalıdır. Açıkta kalacak sistemin güneş ve mekanik etkilere dayanımı, üstü kapatılacak sistemin ise koruma katmanı planlanmalıdır."
        ],
      },
      {
        title: "Çatı Isı Yalıtımı ile Çatı Tamiri Arasındaki Fark",
        paragraphs: [
          "Çatı tamiri, su girişine ve fiziksel hasara neden olan kiremit, örtü, dere, baca, oluk veya taşıyıcı sorunlarını onarmaya odaklanır. Isı yalıtımı ise çatıdan gerçekleşen ısı geçişini azaltmayı amaçlar. Bir çatı su geçirmiyor olabilir ancak yetersiz ısı yalıtımı nedeniyle kışın ısı kaybı ve yazın aşırı ısınma yaşanabilir.",
          "Isı yalıtımı yapılırken buhar dengesi ve havalandırma dikkate alınmalıdır. Yanlış katman sırası, çatı içinde yoğuşma ve ahşaplarda nem oluşturabilir. Su yalıtımı bozukken yalnızca ısı yalıtımı eklemek de yeni malzemelerin ıslanmasına yol açar. Önce su geçirmezlik ve taşıyıcı sağlık kontrol edilmeli, ardından uygun ısı yalıtım sistemi planlanmalıdır."
        ],
      },
      {
        title: "Fatih'te Çatı Tamiri Süresi, Güvenlik ve Maliyet",
        paragraphs: [
          "Süre; çatının büyüklüğü, erişim, hava koşulları, hasarın yaygınlığı, malzeme tedariki ve kuruma gerektiren uygulamalara göre değişir. Küçük bir oluk veya birkaç kiremit onarımı ile bütün çatının aktarılması aynı takvimde tamamlanmaz. Yağışlı ve kuvvetli rüzgârlı havalarda çalışma güvenliği ve uygulama kalitesi nedeniyle iş ertelenebilir.",
          "Maliyet hesaplanırken yalnızca çatı alanı değil, iskele veya güvenli erişim ihtiyacı, taşıyıcı onarımı, kiremit sayısı, membran, oluk, baca ve dere detayları değerlendirilir. Balat, Cibali ve Zeyrek çevresindeki eski ve özel nitelikli yapılarda çatı biçimi ile izin koşulları; Aksaray, Laleli ve Eminönü çevresinde bina kullanımı ve erişim farklılaşabilir. Keşif yapılmadan kesin fiyat ve tam yenileme kararı verilmemelidir."
        ],
      },
      {
        title: "Ahşap Taşıyıcılar ve Çatı Arası Havalandırması",
        paragraphs: [
          "Eski çatılarda kiremitlerin altında bulunan ahşap lata, mertek ve diğer taşıyıcılar nem, böceklenme, mantar veya uzun süreli su sızıntısı nedeniyle zayıflayabilir. Yüzeyde sağlam görünen bir kaplama altında çürümüş ahşap bulunabilir. Aktarma sırasında taşıyıcılar kontrol edilmeli; yumuşama, kesit kaybı ve bağlantı sorunları varsa uygun onarım veya değişim planlanmalıdır.",
          "Çatı arası havalandırması yetersiz olduğunda içeriden yükselen nem soğuk yüzeylerde yoğuşabilir. Bu durum su akıntısına benzer lekeler, küf ve ahşaplarda nem oluşturabilir. Saçak ve mahya çevresindeki hava hareketi, ısı yalıtımı ile buhar kontrol katmanları birlikte değerlendirilmelidir. Havalandırma açıklıkları kuş ve haşere girişini önleyecek ancak hava akışını kesmeyecek biçimde korunmalıdır."
        ],
      },
      {
        title: "Çatı Bakımı Ne Zaman Yapılmalıdır?",
        paragraphs: [
          "Çatı yalnızca akıntı başladıktan sonra kontrol edilmemelidir. Şiddetli fırtına, yoğun kar, dış cephe veya anten çalışması sonrasında kiremitlerin ve bağlantıların gözden geçirilmesi yararlı olabilir. Sonbaharda yaprak dökümü sonrası oluk ve derelerin temizlenmesi, kış yağışlarında taşma riskini azaltır. Kontrol için çatıya güvenlik ekipmanı olmadan çıkılmamalıdır.",
          "Çatı arasındaki yeni nem kokusu, tavanda sararma, dış cephede oluk izi, iniş borusundan su akmaması veya rüzgârda kiremit sesi bakım ihtiyacının işareti olabilir. Küçük bir açıklık erken onarıldığında ahşap, tavan ve iç boya hasarı büyümeden önlenebilir. Bakım sıklığı çatı tipi, çevredeki ağaçlar, hava koşulları ve önceki onarımlara göre değişir."
        ],
      },
      {
        title: "Çatı Onarımından Sonra İç Mekân Hasarı Nasıl Giderilir?",
        paragraphs: [
          "Çatıdaki giriş noktası onarıldıktan sonra tavandaki sarı leke, kabaran boya veya ıslak sıva hemen kapatılmamalıdır. Tavan döşemesi, yalıtım ve sıva içinde kalan nemin kuruması beklenmelidir. Çatı arasındaki ıslak yalıtım malzemesi veya ahşap da kontrol edilmeli; su tutan ve özelliğini kaybeden malzeme gerektiğinde değiştirilmelidir. Aksi halde koku, küf ve yeni lekeler devam edebilir.",
          "İç yüzey kuruduktan sonra gevşek boya ile sıva temizlenir, gerekli tamir ve leke kapatıcı astar uygulanır, ardından tavan boyası yapılır. Lekenin aynı yağış koşulunda tekrar edip etmediği gözlemlenmelidir. Çatı tamiri ile iç boya işini aynı gün tamamlamaya çalışmak, nemi içeride hapsedebilir. Onarım sırası önce dış kaynak, sonra kuruma ve en son iç yüzey şeklinde olmalıdır.",
          "Üst kat dairede elektrik hattı veya aydınlatma elemanları suya maruz kaldıysa yalnızca görsel kuruma yeterli kabul edilmemelidir. Güvenli kullanım için bağlantılar uygun şekilde kontrol edilmelidir. Geniş tavan hasarı, taşıyıcı ahşapta çürüme veya döşemede uzun süreli su etkisi görülüyorsa kapsam yalnızca kiremit değişimiyle sınırlandırılmamalıdır.",
          "Çatı onarımının ardından oluk ve inişlerin çalıştığı, suyun cepheye taşmadığı ve çatı arasında yeni damlama olmadığı takip edilmelidir. İlk yağış sonrası kontrol, gözden kaçan bir birleşimi erken fark etmeye yardımcı olabilir. Ancak yağış sırasında çatıya çıkmak güvenli değildir; gözlem iç mekândan ve güvenli noktalardan yapılmalıdır. Sorun tekrar ederse geçici iç kapatma yerine dış detay yeniden incelenmelidir.",
          "Çatıya sonradan anten, güneş paneli, klima hattı veya başka ekipman monte edilecekse kaplama ve yalıtım geçişleri uygun detayla yapılmalıdır. Gelişigüzel açılan delikler ve kapatılmayan bağlantılar yeni sızıntı noktaları oluşturabilir. Montaj sonrasında etekler, bağlantı elemanları ve su akış yönü kontrol edilmeli; bakım için güvenli erişim bırakılmalıdır."
        ],
      },
    ],
    process: [
      { title: "Çatı Keşfi", description: "Kaplama, baca, mahya, dere, oluk, taşıyıcı ve iç nem izleri incelenir." },
      { title: "Onarım Kararı", description: "Noktasal tamir, aktarma veya kapsamlı yenileme ihtiyacı belirlenir." },
      { title: "Güvenli Hazırlık", description: "Erişim, hava koşulları ve çalışma alanı güvenliği planlanır." },
      { title: "Uygulama", description: "Hasarlı kaplama, ahşap, örtü, oluk ve birleşimler onarılır." },
      { title: "Kontrol", description: "Su akış yolları, birleşimler ve iç yüzey belirtileri yeniden kontrol edilir." },
    ],
    benefits: [
      "Akıntının yalnızca görünen noktaya göre değerlendirilmemesi",
      "Kiremit, baca, dere, oluk ve alt örtünün birlikte kontrolü",
      "Noktasal tamir ile komple yenileme ihtiyacının ayrıştırılması",
      "Su ve ısı yalıtımı katmanlarının ayrı ama uyumlu planlanması",
      "Fatih'teki eski çatı ve dar erişim koşullarına uygun çalışma yaklaşımı"
    ],
    faq: [
      { question: "Fatih'te yağmur yağınca çatı neden akıtır?", answer: "Kırık kiremit, bozuk mahya, baca dibi, tıkalı dere veya oluk, yırtılmış alt örtü ve teras çatlağı neden olabilir. Suyun giriş noktası tavandaki lekenin tam üstünde olmayabilir; çatı bütünüyle incelenmelidir." },
      { question: "Kırık kiremit çatı akmasına neden olur mu?", answer: "Evet, suyun alt katmana ulaşmasına neden olabilir. Ancak çevredeki kiremitlerin oturması, alt örtü ve eğim de kontrol edilmelidir. Sadece kırık parçayı değiştirmek her durumda yeterli olmayabilir." },
      { question: "Çatı oluğu tıkanırsa eve su girer mi?", answer: "Taşan su kiremit altına, dış cepheye veya pencere birleşimlerine ilerleyebilir. Oluk yanında iniş borusu, eğim, askılar ve ek yerleri de temizlenip kontrol edilmelidir." },
      { question: "Baca kenarından su sızması nasıl onarılır?", answer: "Eski harç, metal etek, kaplama ve birleşimler incelenir. Hareket ve su akışına uygun detay oluşturulmalıdır. Yalnızca dıştan silikon uygulamak geçici kalabilir." },
      { question: "Eski çatıda tamir mi yenileme mi gerekir?", answer: "Hasar sınırlıysa noktasal tamir yeterli olabilir. Yaygın kiremit bozulması, yırtık alt örtü, çürümüş ahşap ve tekrar eden çoklu akıntılar varsa kapsamlı yenileme değerlendirilebilir. Karar keşifle verilir." },
      { question: "Kiremit aktarma ne zaman yapılır?", answer: "Kiremitlerin yerleşimi bozulduğunda, alt katmanın kontrol edilmesi gerektiğinde veya çok sayıda noktada akıntı görüldüğünde değerlendirilebilir. Sağlam kiremitler ayrılarak yeniden kullanılabilir; hasarlı parçalar değiştirilir." },
      { question: "Teras çatı yalıtımı nasıl yenilenir?", answer: "Eğim, süzgeç, parapet, kapı eşiği ve mevcut katmanlar kontrol edilir. Gerekirse kaplama sökülür, yüzey ve eğim hazırlanır, uygun yalıtım sistemi detaylarla birlikte uygulanır ve üst koruma tamamlanır." },
      { question: "Çatı altındaki tavanda sarı leke neden olur?", answer: "Çatı veya teras sızıntısı, baca ve dere birleşimi, tesisat ya da yoğuşma nedeniyle oluşabilir. Kaynak çözülmeden tavan boyanmamalı; yüzey kuruduktan sonra onarım yapılmalıdır." },
      { question: "Rüzgârda kayan kiremit nasıl sabitlenir?", answer: "Kiremit tipi, çatı eğimi ve alt taşıyıcı düzenine uygun sabitleme yapılmalıdır. Gelişigüzel harç kullanmak su akışını bozabilir. Çevredeki kiremitlerin de oturması kontrol edilmelidir." },
      { question: "Çatı tamiri ne kadar sürer?", answer: "Hasarın türü, çatı alanı, erişim ve hava koşullarına göre değişir. Noktasal tamir ile bütün çatının aktarılması aynı sürede tamamlanmaz. Güvenli çalışma ve malzeme koşulları görüldükten sonra tahmini takvim verilebilir." },
    ],
    related: [
      "su-yalitimi",
      "mantolama",
      "komple-ev-tadilati"
    ],
  }
];

// All services (summaries used in homepage grid). The extra services link to detail pages
// only if available; otherwise link to /#hizmetler.
export const allServices: ServiceSummary[] = [
  ...detailedServices.map(({ slug, title, shortTitle, icon, excerpt, href }) => ({
    slug,
    title,
    shortTitle,
    icon,
    excerpt,
    href,
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
  detailedServices.find((service) => service.slug === slug);