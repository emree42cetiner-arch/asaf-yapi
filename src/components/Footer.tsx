import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { detailedServices } from "@/data/services";

const serviceAreas = [
  "Fatih", "Eminönü", "Balat", "Fındıkzade", "Aksaray", "Beyazıt",
  "Laleli", "Zeytinburnu", "Eyüpsultan", "Beyoğlu", "Bakırköy",
  "Bahçelievler", "Başakşehir", "Esenler",
];

const Footer = () => {
  return (
    <footer id="iletisim" className="bg-navy-dark text-white py-16 md:py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-6 tracking-tight">KÜÇÜKLER YAPI DEKORASYON</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Fatih merkezli, İstanbul genelinde 20 yılı aşkın tecrübeyle
              tadilat, dekorasyon ve yapı hizmetleri.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Hizmetlerimiz</h4>
            <ul className="space-y-3">
              {detailedServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={s.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="text-lg font-bold mb-6">Hizmet Bölgeleri</h4>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-2 text-sm text-gray-400">
              {serviceAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">İletişim</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <a
                  href="https://maps.google.com/?q=Saray+Ağası+Cd.+no75/A,+34087+Fatih/İstanbul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Saray Ağası Cd. no75/A,
                  <br />
                  34087 Fatih/İstanbul
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+905325549292"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  0532 554 92 92
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <a
                  href="https://wa.me/905325549292"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:info@kucukleryapidekorasyon.com.tr"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  info@kucukleryapidekorasyon.com.tr
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © 2026 Küçükler Yapı Dekorasyon. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
