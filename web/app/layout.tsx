import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "EduBoost",
  description: "EduBoost course template",
};

export const viewport: Viewport = {
  themeColor: "#f1f1f1",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full bg-[#f1f1f1] antialiased`}
    >
      <body className="flex min-h-full w-full flex-col bg-[#f1f1f1]">
        {children}
      </body>
    </html>
  );
}
