import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface LinkItem {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  icon: React.ReactNode;
  badge?: string;
  isPrimary?: boolean;
}

function WhatsAppIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.217 8.217 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32a8.188 8.188 0 0 1-1.26-4.38c0-4.54 3.69-8.24 8.24-8.24m-2.96 3.71c-.15 0-.41.06-.63.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.68 2.58 4.09 3.61 2.01.85 2.42.68 2.86.64.44-.04 1.44-.59 1.64-1.15.21-.56.21-1.04.15-1.14-.06-.1-.22-.16-.46-.28-.24-.12-1.45-.71-1.67-.79-.23-.08-.39-.12-.56.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.02-.37-1.95-1.19-.72-.64-1.21-1.43-1.35-1.67-.14-.24-.01-.37.11-.49.11-.11.25-.29.37-.43.12-.14.17-.25.25-.4.08-.15.04-.28-.02-.4-.06-.12-.53-1.28-.72-1.76-.2-.46-.39-.4-.54-.41h-.41z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TikTokIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.96-4.49V8.69a8.18 8.18 0 0 0 4.79 1.54V6.78a4.85 4.85 0 0 1-.98-.09z" />
    </svg>
  );
}

function GoogleMapsIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

const whatsappMessage = encodeURIComponent(
  "¡Hola SHIFT Barbería! Quisiera agendar una cita. ¿Cuáles son los horarios disponibles?"
);

const links: LinkItem[] = [
  {
    id: "whatsapp",
    title: "Reservas por WhatsApp",
    subtitle: "Agenda tu cita y atención personalizada",
    href: `https://wa.me/51950141980?text=${whatsappMessage}`,
    icon: <WhatsAppIcon className="h-6 w-6" />,
    badge: "Directo",
    isPrimary: true,
  },
  {
    id: "instagram",
    title: "Instagram",
    subtitle: "@shift.barberia · Galería y estilo",
    href: "https://www.instagram.com/shift.barberia/",
    icon: <InstagramIcon className="h-6 w-6" />,
  },
  {
    id: "tiktok",
    title: "TikTok",
    subtitle: "@shift.barberia · Tendencias y videos",
    href: "https://www.tiktok.com/@shift.barberia",
    icon: <TikTokIcon className="h-6 w-6" />,
  },
  {
    id: "maps",
    title: "Ubicación en Google Maps",
    subtitle: "Cómo llegar a nuestro local",
    href: "https://maps.app.goo.gl/gFR8FrVay6Xe1tdV9",
    icon: <GoogleMapsIcon className="h-6 w-6" />,
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[#080808] text-white flex flex-col justify-between selection:bg-[#D2B477] selection:text-[#080808] px-4 py-8 sm:py-14">
      {/* Ambient background glow accents */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_75%_45%_at_50%_0%,rgba(210,180,119,0.12),rgba(8,8,8,0))]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_60%_30%_at_50%_100%,rgba(23,23,23,0.8),rgba(8,8,8,0))]"
        aria-hidden="true"
      />

      {/* Main container */}
      <div className="w-full max-w-md mx-auto flex flex-col items-center flex-1 justify-between">
        {/* Header Section */}
        <header className="w-full flex flex-col items-center text-center pt-2 sm:pt-4">
          {/* Accessible Heading for SEO */}
          <h1 className="sr-only">SHIFT Barbería | Tu estilo, tu sello</h1>

          {/* Official Brand Logo */}
          <div className="relative mb-2 flex items-center justify-center">
            {/* Ambient gold glow halo */}
            <div
              className="absolute h-44 w-44 rounded-full bg-[#D2B477]/15 blur-2xl filter animate-pulse pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative z-10 transition-transform duration-500 hover:scale-[1.03]">
              <Image
                src="/logo.jpg"
                alt="SHIFT Barbería"
                width={260}
                height={260}
                className="w-56 sm:w-64 h-auto object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
                priority
              />
            </div>
          </div>

          {/* Decorative Divider */}
          <div
            className="my-4 flex items-center justify-center gap-3 w-40"
            aria-hidden="true"
          >
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#D2B477]/60" />
            <div className="h-1.5 w-1.5 rotate-45 bg-[#D2B477] shadow-[0_0_8px_#D2B477]" />
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#D2B477]/60" />
          </div>

          {/* Phrase */}
          <p className="text-xs sm:text-sm font-semibold tracking-[0.24em] uppercase text-[#D2B477] pl-[0.24em]">
            TU ESTILO, TU SELLO
          </p>

          {/* Short Bio */}
          <p className="mt-2.5 text-sm sm:text-base text-zinc-300 font-light max-w-xs sm:max-w-sm leading-relaxed">
            Encuentra tu próximo look. Conecta con nosotros y reserva tu cita.
          </p>
        </header>

        {/* Buttons List */}
        <main
          className="mt-8 sm:mt-10 w-full flex flex-col gap-4"
          aria-label="Enlaces oficiales de SHIFT Barbería"
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex w-full items-center justify-between rounded-2xl border px-4 sm:px-5 py-4 sm:py-5 backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#D2B477]/70 active:scale-[0.99] overflow-hidden ${
                link.isPrimary
                  ? "border-[#D2B477]/50 bg-[#171717] shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:border-[#D2B477] hover:shadow-[0_10px_35px_rgba(210,180,119,0.2)]"
                  : "border-[#D2B477]/20 bg-[#171717] hover:border-[#D2B477] hover:bg-[#1a1a1a] hover:shadow-[0_10px_30px_rgba(210,180,119,0.15)]"
              }`}
            >
              {/* Shimmer sweep effect on hover */}
              <div
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-full"
                aria-hidden="true"
              />

              {/* Icon Container */}
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border bg-[#080808] text-[#D2B477] transition-all duration-300 group-hover:scale-105 group-hover:border-[#D2B477] group-hover:text-white ${
                  link.isPrimary
                    ? "border-[#D2B477]/45 shadow-[0_0_12px_rgba(210,180,119,0.18)] group-hover:shadow-[0_0_20px_rgba(210,180,119,0.4)]"
                    : "border-[#D2B477]/30 group-hover:shadow-[0_0_16px_rgba(210,180,119,0.3)]"
                }`}
              >
                {link.icon}
              </div>

              {/* Text Info */}
              <div className="ml-4 flex flex-1 flex-col text-left min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-semibold text-white tracking-wide transition-colors duration-300 group-hover:text-[#D2B477] text-base sm:text-lg truncate">
                    {link.title}
                  </span>
                  {link.badge && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#D2B477]/15 px-2 py-0.5 text-[10px] font-semibold tracking-wider text-[#D2B477] border border-[#D2B477]/40 uppercase">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D2B477] animate-pulse" />
                      {link.badge}
                    </span>
                  )}
                </div>
                <span className="text-xs sm:text-sm text-zinc-400 font-normal transition-colors duration-300 group-hover:text-zinc-200 truncate mt-0.5">
                  {link.subtitle}
                </span>
              </div>

              {/* Action indicator arrow */}
              <div
                className="ml-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#080808]/80 text-zinc-500 border border-white/5 transition-all duration-300 group-hover:border-[#D2B477]/50 group-hover:text-[#D2B477] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              >
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </a>
          ))}
        </main>

        {/* Footer */}
        <footer className="mt-12 sm:mt-16 w-full text-center pb-2">
          <p className="text-[11px] sm:text-xs text-zinc-500 tracking-[0.16em] uppercase font-light">
            © 2026 SHIFT BARBERÍA · TODOS LOS DERECHOS RESERVADOS
          </p>
        </footer>
      </div>
    </div>
  );
}
