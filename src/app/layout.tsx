import { libreBaskerville } from "../styles/fonts/fonts";
import { Metadata } from "next";
import "./globals.css";

// const libertinusMono = Libertinus_Mono({ weight: ["400"], subsets: ['latin'] });

export const metadata: Metadata = {
  viewport: "width=device-width, initial-scale=1.0",
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
