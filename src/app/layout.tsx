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

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeCraft - An online ide and snippet sharing platform",
  description: "CodeCraft is an online ide and snippet sharing platform where students as well as developers can find useful snippets and share their own snippets with the community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <Script
            src="https://pl28876121.effectivegatecpm.com/4f/99/52/4f995267e1c6a1a6840e190ba5638af2.js"
            strategy="beforeInteractive"
          />

          <Script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4604348771845321"
            strategy="afterInteractive"
            crossOrigin="anonymous"
          />


          <meta name="google-adsense-account" content="ca-pub-4604348771845321" />

        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-linear-to-b from-gray-900 to-gray-950 text-gray-100 flex flex-col`}
        >
          <ConvexClientProvider>
            <Suspense fallback={null}>
              <TopLoader />
            </Suspense>
            {children}

            <div id="container-642ebed44c35363b1269292ce70b2cf1"></div>

            <Script
              async
              data-cfasync="false"
              src="https://pl28876281.effectivegatecpm.com/642ebed44c35363b1269292ce70b2cf1/invoke.js"
              strategy="afterInteractive"
            />

            <AdsenseAd />

            <Footer />
            <Toaster />
          </ConvexClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
