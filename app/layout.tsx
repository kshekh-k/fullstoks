import "./globals.scss";
import * as React from "react";
import Providers from "@/providers";
import { Metadata } from "next";
import { Inter } from "next/font/google";
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

// SEO GLOBAL
export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SERVER_URL}`),
  applicationName: "Next Js App Full Stack",
  keywords: ["nextjs", "reactjs", "ecommerce", "sylvaincodes"],
  authors: [{ name: "sylvaincodes", url: "https://github.com/sylvaincodes" }],
  publisher: "vercel",

  alternates: {
    canonical: "/",
    languages: {
      en: "en",
    },
  },

  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      noimageindex: true,
    },
  },

  manifest: `${process.env.NEXT_PUBLIC_SERVER_URL}/manifest.webmanifest`,

  icons: {
    icon: "/assets/images/fullstoks-fav.svg",
    shortcut: "/assets/images/fullstoks-fav.svg",
    apple: "/assets/images/fullstoks-fav.svg",
  },

  twitter: {
    card: "summary_large_image",
    title: "A full stack Nextjs ecommerce app",
    description: "Become a full stack next js developer",
    siteId: "NextjsApp",
    creator: "sylvaincodes",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SERVER_URL}/assets/images/og.png`,
      },
      {
        url: `${process.env.NEXT_PUBLIC_SERVER_URL}/assets/images/og_2.png`,
      },
    ],
  },

  openGraph: {
    title: "A full stack NEXTJS ecommerce app",
    description: "Become a full stack next js developer",

    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SERVER_URL}/assets/images/og.png`,
      },
    ],
    type: "website",
    url: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
    siteName: "NextJs App",
  },
};
const inter = Inter({ subsets: ['latin'], variable:'--inter',  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], })
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className={`min-h-screen  `}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
