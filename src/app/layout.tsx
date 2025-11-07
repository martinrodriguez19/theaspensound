import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "The Aspen Sound | Banda Retro En Vivo en Buenos Aires",
  description: "Banda tributo especializada en clásicos del rock de los 70s, 80s y 90s. Aspen, The Beatles y más. Contrataciones para eventos en Buenos Aires y Argentina.",
  keywords: "banda covers buenos aires, banda tributo argentina, música 80s 90s, the beatles tributo, aspen covers, banda para eventos buenos aires, música retro argentina",
  authors: [{ name: "The Aspen Sound" }],
  creator: "The Aspen Sound",
  publisher: "The Aspen Sound",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "The Aspen Sound | Banda Retro En Vivo",
    description: "Revive los clásicos del rock con The Aspen Sound. Banda profesional para eventos en Buenos Aires.",
    url: "https://theaspensound.com.ar",
    siteName: "The Aspen Sound",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Aspen Sound - Banda de Covers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Aspen Sound | Banda Retro Clásicos",
    description: "Banda tributo - Aspen, The Beatles y más clásicos del rock",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "tu-codigo-de-verificacion",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="canonical" href="https://theaspensound.com.ar" />
        <meta name="geo.region" content="AR-C" />
        <meta name="geo.placename" content="Buenos Aires" />
        <meta name="geo.position" content="-34.603722;-58.381592" />
        <meta name="ICBM" content="-34.603722, -58.381592" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}