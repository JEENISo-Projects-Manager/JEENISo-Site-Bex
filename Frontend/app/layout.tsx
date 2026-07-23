import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import SiteScripts from "@/components/SiteScripts";

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JEENISo | Junior Entreprise ENISo - Sousse, Tunisie",
  description:
    "JEENISo, la Junior-Entreprise de l'École Nationale d'Ingénieurs de Sousse (ENISo). Mécatronique, électronique industrielle, informatique appliquée et génie de production, au service de vos projets depuis 2011.",
  applicationName: "JEENISo",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "JEENISo - Junior Entreprise ENISo",
    title: "JEENISo | Junior Entreprise ENISo - Sousse, Tunisie",
    description:
      "La Junior-Entreprise de l'École Nationale d'Ingénieurs de Sousse. Quality is our Business.",
  },
  robots: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://jeeniso.com/#organization",
      name: "JEENISo - Junior Entreprise ENISo",
      alternateName: "JEENISo",
      slogan: "Quality is our Business",
      foundingDate: "2011-11-11",
      description:
        "Junior-Entreprise à but non lucratif de l'École Nationale d'Ingénieurs de Sousse (ENISo), formant les étudiants-ingénieurs au monde professionnel via des missions de conseil et d'études.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "École Nationale d'Ingénieurs de Sousse, BP 264 Sousse Erriadh",
        addressLocality: "Sousse",
        postalCode: "4023",
        addressCountry: "TN",
      },
      memberOf: {
        "@type": "Organization",
        name: "JET - Junior Enterprises of Tunisia",
      },
      sameAs: [
        "https://www.facebook.com/Junior.Entreprise.ENISo/",
        "https://tn.linkedin.com/company/junior-entreprise-eniso",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-FR" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>
        {children}
        <SiteScripts />
      </body>
    </html>
  );
}
