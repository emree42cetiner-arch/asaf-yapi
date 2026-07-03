import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/905428209599?text=Merhaba,%20Asaf%20Yapı'dan%20teklif%20almak%20istiyorum."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişime geç"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center h-14 w-14 bg-[#25D366] text-white shadow-2xl hover:scale-105 transition-transform"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
};

export default WhatsAppFloat;
