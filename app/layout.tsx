import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gleuhr - Premium Dermatology & Wellness Clinic",
  description: "Science-led dermatology, nutrition and aesthetics tailored for modern Indian skin. Expert care with daily follow-ups and personalized treatment plans.",
  keywords: "dermatology, skin care, hair restoration, nutrition counseling, laser treatments, Chandigarh, Ludhiana, Bathinda, Amritsar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

