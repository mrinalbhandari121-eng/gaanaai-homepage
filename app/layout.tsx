import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GaanaAI — Creative that makes your products sell",
  description:
    "AI-powered creative, perfected by human experts — built for ecommerce brands that need to move product.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="js">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
