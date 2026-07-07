import { useState } from "react";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { Phone, MessageCircle } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Adınızı girin").max(80),
  phone: z
    .string()
    .trim()
    .min(7, "Geçerli bir telefon girin")
    .max(20)
    .regex(/^[0-9+\s()-]+$/, "Sadece rakam ve +() karakterleri"),
  service: z.string().trim().min(2).max(80),
  message: z.string().trim().max(600).optional(),
});

const services = [
  "Komple Ev Tadilatı",
  "Banyo Tadilatı",
  "Mutfak Tadilatı",
  "Boya Badana",
  "Mantolama",
  "Su Yalıtımı",
  "Çatı Tamiri",
  "Alçıpan / Asma Tavan",
  "Dış Cephe Boya",
  "Zemin Kaplama",
  "Diğer",
];

const QuoteForm = () => {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    service: services[0],
    message: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      toast({
        title: "Formu kontrol edin",
        description: parsed.error.errors[0]?.message ?? "Eksik/hatalı alan",
        variant: "destructive",
      });
      return;
    }
    const { name, phone, service, message } = parsed.data;
    const text = `Merhaba, teklif almak istiyorum.\n\nAd: ${name}\nTelefon: ${phone}\nHizmet: ${service}${
      message ? `\nMesaj: ${message}` : ""
    }`;
    const url = `https://wa.me/905325549292?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast({ title: "Teşekkürler!", description: "WhatsApp üzerinden yönlendirildiniz." });
  };

  return (
    <section id="teklif" className="section-padding bg-anthracite">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="text-white">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Ücretsiz Keşif Formu
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6 leading-tight">
            Ücretsiz Keşif ve Fiyat Teklifi Alın
          </h2>
          <p className="text-white/70 leading-relaxed mb-8">
            Bilgilerinizi bırakın, ekibimiz aynı gün içinde sizinle iletişime geçsin.
            Yerinde keşif sonrası net, yazılı ve şeffaf teklifimizi sunalım.
          </p>

          <ul className="grid grid-cols-2 gap-3 mb-8">
            {["Yerinde keşif", "Net fiyatlandırma", "Garantili uygulama", "Hızlı geri dönüş"].map((t) => (
              <li key={t} className="flex items-center gap-2 text-white/80 text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {t}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+905325549292"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-4 font-semibold uppercase tracking-wide text-sm rounded-md transition"
            >
              <Phone className="h-4 w-4" /> Hemen Ara
            </a>
            <a
              href="https://wa.me/905325549292"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20b558] text-white px-6 py-4 font-semibold uppercase tracking-wide text-sm rounded-md transition"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>

        <form onSubmit={submit} className="bg-white p-6 md:p-8 space-y-4 rounded-lg shadow-2xl">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1" htmlFor="qf-name">
              Adınız Soyadınız
            </label>
            <input
              id="qf-name"
              type="text"
              maxLength={80}
              required
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              className="w-full border border-border px-3 py-2 focus:outline-none focus:border-accent"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1" htmlFor="qf-phone">
              Telefon
            </label>
            <input
              id="qf-phone"
              type="tel"
              maxLength={20}
              required
              value={values.phone}
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
              placeholder="0 5xx xxx xx xx"
              className="w-full border border-border px-3 py-2 focus:outline-none focus:border-accent"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1" htmlFor="qf-service">
              Hizmet Türü
            </label>
            <select
              id="qf-service"
              value={values.service}
              onChange={(e) => setValues({ ...values, service: e.target.value })}
              className="w-full border border-border px-3 py-2 bg-white focus:outline-none focus:border-accent"
            >
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1" htmlFor="qf-msg">
              Mesajınız (opsiyonel)
            </label>
            <textarea
              id="qf-msg"
              rows={4}
              maxLength={600}
              value={values.message}
              onChange={(e) => setValues({ ...values, message: e.target.value })}
              className="w-full border border-border px-3 py-2 focus:outline-none focus:border-accent"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-accent hover:bg-accent/90 text-white px-6 py-4 font-semibold uppercase tracking-wide text-sm rounded-md shadow-md shadow-accent/20 transition"
          >
            Ücretsiz Keşif Talep Et
          </button>
        </form>
      </div>
    </section>
  );
};

export default QuoteForm;
