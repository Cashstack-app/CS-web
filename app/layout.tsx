/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cashstack",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${monaSans.variable} antialiased bg-white`}>
       <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
