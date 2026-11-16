import type { Metadata, Viewport } from "next";
import "@fontsource-variable/urbanist";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bunpo N4 · Japanese grammar",
  description: "Study every JLPT N4 grammar pattern with example sentences, vocabulary and bite-sized practice.",
};

export const viewport: Viewport = {
  themeColor: "#f6f5f7",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
