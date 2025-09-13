import type { Metadata } from "next";
import "./globals.css";


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
        className={` antialiased bg-bg text-text`}
      >
        {children}
      </body>
    </html>
  );
}
