import type { Metadata } from "next";
import "./globals.css";
import { UserTypeProvider } from "@/contexts/UserTypeContext";

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
        className="antialiased font-sans bg-white"
      >
        <UserTypeProvider>
          {children}
        </UserTypeProvider>
      </body>
    </html>
  );
}
