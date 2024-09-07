import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({  weight: ['100', '200', '300', '400', '500'], style: ['normal', 'italic'], subsets: ['latin'], });

export const metadata: Metadata = {
  title: "sprout",
  description: "Know your garden grow your garden.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
