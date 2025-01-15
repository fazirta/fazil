import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fazil Tirtana | Software Engineer",
  description:
    "Hi, I'm Fazil, a passionate software engineer. I specialize in building innovative and efficient software solutions. Explore my projects, blog, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
