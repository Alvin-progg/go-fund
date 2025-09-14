import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Go Funds",
  description: "Made by Alvin-Progg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${inter.className} ${roboto.className} antialiased bg-bg text-text`}
      >
        {children}
      </body>
    </html>
  );
}
