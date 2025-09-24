import type { Metadata } from "next";
import "./globals.css";
import { nfUltra } from "./fonts";

export const metadata: Metadata = {
  title: "Misa Rome",
  description: "Portfolio of Misa Rome - Live Events, Productions, and Directed Works",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={nfUltra.variable}>
      <body className="font-nf-ultra bg-black text-white antialiased m-0 p-0">
        {/* Background pattern */}
        <div className="fixed inset-0 bg-black -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/20 to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_0%,transparent_50%)]"></div>
        </div>
        <div className="relative z-0">
          {children}
        </div>
      </body>
    </html>
  );
}