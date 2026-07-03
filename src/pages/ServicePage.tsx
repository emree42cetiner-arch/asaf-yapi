import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CheckCircle2, Phone, MessageCircle, ArrowRight, ChevronRight } from "lucide-react";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import FAQ from "@/components/FAQ";
import { getServiceBySlug, detailedServices } from "@/data/services";

const SITE = "https://asaf-yapi.lovable.app";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) return <Navigate to="/404" replace />;

  const url = `${SITE}${service.href}`;
  const related = service.related
    .map((s) => detailedServices.find((d) => d.slug === s))
    .filter(Boolean);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    provider: {
      "@type": "LocalBusiness",
      name: "Küçükler Yapı Dekorasyon",
      telephone: "+905325549292",
      areaServed: "İstanbul",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Fatih",
        addressRegion: "İstanbul",
        addressCountry: "TR",
      },
    },
    areaServed: [
      "Fatih", "Eminönü", "Balat", "Fındıkzade", "Aksaray", "Beyazıt",
      "Laleli", "Zeytinburnu", "Eyüpsultan", "Beyoğlu", "Bakırköy",
      "Bahçelievler", "Başakşehir", "Esenler",
    ],
    description: service.seoDescription,
    url,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE + "/" },
      { "@type": "ListItem", position: 2, name: "Hizmetler", item: SITE + "/#hizmetlerimiz" },
      { "@type": "ListItem", position: 3, name: service.title, item: url },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{service.seoTitle}</title>
        <meta name="description" content={service.seoDescription} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={service.seoTitle} />
        <meta property="og:description" content={service.seoDescription} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={service.seoTitle} />
        <meta name="twitter:description" content={service.seoDescription} />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <TopBar />
      <Navigation />

      <main>
        {/* Hero */}
        <section className="bg-navy-dark text-white py-16 md:py-24">
          <div className="container-custom">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/60 flex items-center gap-2 flex-wrap">
              <Link to="/" className="hover:text-white">Ana Sayfa</Link>
              <ChevronRight className="h-3 w-3" />
              <Link to="/#hizmetlerimiz" className="hover:text-white">Hizmetler</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-white">{service.title}</span>
            </nav>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight max-w-4xl"
            >
              {service.h1}
            </motion.h1>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/905325549292"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20b558] text-white px-6 py-4 font-semibold uppercase tracking-wide text-sm transition"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href="tel:+905325549292"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-4 font-semibold uppercase tracking-wide text-sm transition"
              >
                <Phone className="h-4 w-4" /> Hemen Ara
              </a>
              <Link
                to="/#teklif"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-4 font-semibold uppercase tracking-wide text-sm transition"
              >
                Teklif Al
              </Link>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            {service.intro.map((p, i) => (
              <p key={i} className="text-lg text-foreground/90 leading-relaxed mb-6">
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="section-padding bg-concrete">
          <div className="container-custom max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
              Çalışma Süreci
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {service.process.map((step, i) => (
                <div key={i} className="bg-background border border-border p-6">
                  <div className="text-3xl font-black text-accent mb-2">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Neden Küçükler Yapı Dekorasyon?
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3 bg-card border border-border p-4">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <FAQ
          items={service.faq.map((f) => ({ q: f.question, a: f.answer }))}
          title={`${service.shortTitle} Hakkında Sıkça Sorulanlar`}
        />

        {/* Related */}
        {related.length > 0 && (
          <section className="section-padding bg-concrete">
            <div className="container-custom">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                İlgili Hizmetler
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((r) => r && (
                  <Link
                    key={r.slug}
                    to={r.href}
                    className="group bg-background border border-border p-6 hover:border-accent transition-colors"
                  >
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {r.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{r.excerpt}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
                      Detay <ArrowRight className="h-3 w-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="bg-anthracite py-16">
          <div className="container-custom text-center text-white">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              {service.shortTitle} için ücretsiz teklif alın
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://wa.me/905325549292"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20b558] text-white px-6 py-4 font-semibold uppercase tracking-wide text-sm transition"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <Link
                to="/#teklif"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-4 font-semibold uppercase tracking-wide text-sm transition"
              >
                Teklif Formu
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default ServicePage;
