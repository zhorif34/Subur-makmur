import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "6281234567890";

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20CV%20Subur%20Makmur%2C%20saya%20ingin%20bertanya%20tentang%20produk%20pertanian.`;

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}

      target="_blank"

      rel="noopener noreferrer"

      aria-label="Hubungi kami via WhatsApp"

      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-[var(--shadow-lift)] transition-transform duration-200 hover:scale-105 hover:brightness-110 sm:bottom-7 sm:right-7"
    >
      <MessageCircle className="h-5 w-5 fill-current" />
      Hubungi Kami
    </a>
  );
}
