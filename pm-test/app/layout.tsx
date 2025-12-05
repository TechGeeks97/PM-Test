import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { fonts } from "@/constants/fonts";
import { UserTypeProvider } from "@/contexts/UserTypeContext";

// Configure Urbanist font with all weights and styles
const urbanist = Urbanist({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap", // Better performance
});

export const metadata: Metadata = {
  title: "Premier Markets - Trade Forex with Confidence",
  description: "Access global markets with advanced trading tools, competitive spreads, and institutional grade execution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white">
      <body
        className={`${urbanist.variable} antialiased font-sans bg-white`}
      >
        <UserTypeProvider>
          {children}
        </UserTypeProvider>
      </body>
    </html>
  );
}
