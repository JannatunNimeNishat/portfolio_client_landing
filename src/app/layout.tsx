import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jannatun Nime | Full Stack Developer",
  description: "Jannatun Nime's Full Stack Developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <Navbar />
          <div className="min-h-screen bg-[#111a28]">
            {children}
            <Toaster />
        </div>
          <Footer />
        </>
      </body>
    </html>
  );
}
