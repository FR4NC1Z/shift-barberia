import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://shiftbarberia.com"),
  title: "SHIFT Barbería | Tu estilo, tu sello",
  description:
    "Barbería premium y moderna. Encuentra tu próximo look, conecta con nosotros en redes sociales y reserva tu cita en SHIFT Barbería.",
  keywords: [
    "SHIFT Barbería",
    "barbería",
    "corte de cabello",
    "barba",
    "estilo masculino",
    "reserva cita barbería",
    "Perú",
  ],
  authors: [{ name: "SHIFT BARBERÍA" }],
  creator: "SHIFT BARBERÍA",
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    title: "SHIFT Barbería | Tu estilo, tu sello",
    description:
      "Barbería premium y moderna. Encuentra tu próximo look, conecta con nosotros en redes sociales y reserva tu cita en SHIFT Barbería.",
    siteName: "SHIFT Barbería",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 800,
        alt: "SHIFT Barbería Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SHIFT Barbería | Tu estilo, tu sello",
    description:
      "Barbería premium y moderna. Encuentra tu próximo look, conecta con nosotros en redes sociales y reserva tu cita en SHIFT Barbería.",
    images: ["/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#080808] text-white">
        {children}
      </body>
    </html>
  );
}

