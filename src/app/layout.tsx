import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rageeb Mohammad Ridwan | Full-Stack Developer",
  description:
    "Full-stack web developer with expertise in TypeScript, React, and Node.js. Published IEEE researcher in deep learning for medical imaging.",
  keywords: [
    "full-stack developer",
    "TypeScript",
    "React",
    "Next.js",
    "Bangladesh",
    "web developer",
  ],
  authors: [{ name: "Rageeb Mohammad Ridwan" }],
  openGraph: {
    title: "Rageeb Mohammad Ridwan | Full-Stack Developer",
    description:
      "Full-stack web developer & IEEE published researcher based in Dhaka, Bangladesh.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
