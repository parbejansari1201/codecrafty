import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ConvexClientProvider from "@/components/providers/ConvexClientProvider";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import TopLoader from "@/components/TopLoader";
import Script from "next/script";
import AdsenseAd from "@/components/AdsenseAd";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://codecrafty.vercel.app"),

  title: {
    default: "CodeCraft - Online IDE & Developer Snippet Platform",
    template: "%s | CodeCraft",
  },

  description:
    "CodeCraft is a modern online IDE and developer snippet sharing platform where developers and students can write, test, and share useful code snippets with the community.",

  keywords: [
    "online IDE",
    "code editor online",
    "developer snippets",
    "programming snippets",
    "share code snippets",
    "javascript snippets",
    "react snippets",
    "coding platform",
    "developer tools",
  ],

  authors: [{ name: "CodeCraft Team" }],

  creator: "CodeCraft",

  publisher: "CodeCraft",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://codecrafty.vercel.app",
  },

  openGraph: {
    type: "website",
    url: "https://codecrafty.vercel.app",
    title: "CodeCraft - Online IDE & Code Snippet Sharing Platform",
    description:
      "Write, test and share programming snippets easily with CodeCraft. A modern online IDE built for developers.",
    siteName: "CodeCraft",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CodeCraft Online IDE",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "CodeCraft - Online IDE & Snippet Sharing Platform",
    description:
      "A modern coding platform where developers can write and share snippets easily.",
    images: ["/og-image.png"],
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          {/* Popunder */}
          <Script
            src="https://cardinaltangible.com/4f/99/52/4f995267e1c6a1a6840e190ba5638af2.js"
            strategy="beforeInteractive"
          />

          {/* Google Adsense */}
          <Script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4604348771845321"
            strategy="afterInteractive"
            crossOrigin="anonymous"
          />

          <meta name="google-adsense-account" content="ca-pub-4604348771845321" />

          {/* Performance improvements */}
          <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
          <link rel="preconnect" href="https://googleads.g.doubleclick.net" />
          <link rel="dns-prefetch" href="//pagead2.googlesyndication.com" />
          <link rel="icon" href="/favicon.ico" sizes="any" />

          {/* Mobile optimization */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#0f172a" />
          <meta name="google-site-verification" content="VHJlxXjSrAHk965eVjOV_nhJKKVgMX_NkXI_4K83cgY" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "CodeCraft",
                url: "https://codecrafty.vercel.app",
                description:
                  "CodeCraft is an online IDE and developer snippet sharing platform where developers can write, test and share code snippets.",
                potentialAction: {
                  "@type": "SearchAction",
                  target:
                    "https://codecrafty.vercel.app/search?q={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              }),
            }}
          />
        </head>

        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-linear-to-b from-gray-900 to-gray-950 text-gray-100 flex flex-col`}
        >
          <ConvexClientProvider>
            <Suspense fallback={null}>
              <TopLoader />
            </Suspense>

            {children}

            <AdsenseAd />


            {/* Native Adsterra */}
            <div id="container-642ebed44c35363b1269292ce70b2cf1"></div>

            <Script
              async
              data-cfasync="false"
              src="https://pl28876281.effectivegatecpm.com/642ebed44c35363b1269292ce70b2cf1/invoke.js"
              strategy="afterInteractive"
            />

            {/* Social Bar Ad */}
            <Script
              src="https://pl28882988.effectivegatecpm.com/5c/24/5b/5c245b02715c54f05d60e2f7b839ac9e.js"
              strategy="afterInteractive"
            />

            {/* Adsterra referral banner */}
            <div style={{ maxWidth: 728 }}>
              <a
                href="https://beta.publishers.adsterra.com/referral/PuL4XmYrCg"
                rel="nofollow"
                target="_blank"
              >
                <Image
                  src="https://landings-cdn.adsterratech.com/referralBanners/png/728%20x%2090%20px.png"
                  alt="Adsterra referral banner"
                  width={728}
                  height={90}
                  style={{ width: "100%", height: "auto" }}
                />
              </a>
            </div>

            <Footer />
            <Toaster />
          </ConvexClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}