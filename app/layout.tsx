import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MindFlare | Tech Society - MAIT",
  description: "Official tech society of the IT Department, MAIT. Explore events, innovation, and tech culture with MindFlare.",
  keywords: ["MindFlare", "MAIT", "Tech Society", "DSAXtreme", "Build Wars", "Coding", "IT Department"],
  authors: [{ name: "MindFlare Tech Team" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white`}>
        {/* You can wrap this in a <Providers> component if needed */}
        {children}
      </body>
    </html>
  );
}
