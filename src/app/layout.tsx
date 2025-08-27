import { libreBaskerville } from "../styles/fonts/fonts";
import { Metadata, Viewport } from "next";
import "./globals.css";

// const libertinusMono = Libertinus_Mono({ weight: ["400"], subsets: ['latin'] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, // optional
  userScalable: false, // optional
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </head>
      <body className={`${libreBaskerville.className}`}>{children}</body>
    </html>
  );
}
