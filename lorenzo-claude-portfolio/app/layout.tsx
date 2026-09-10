import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lorenzo Yohan Leonor — Engineer, Builder, Community Leader",
  description:
    "Personal portfolio of Lorenzo Yohan Leonor, a Computer Engineering student specializing in Artificial Intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
