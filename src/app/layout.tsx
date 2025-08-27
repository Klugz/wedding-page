import { libreBaskerville } from "../styles/fonts/fonts";
import { Metadata, Viewport } from "next";
import "./globals.css";

// const libertinusMono = Libertinus_Mono({ weight: ["400"], subsets: ['latin'] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${libreBaskerville.className}`}>{children}</body>
    </html>
  );
}
