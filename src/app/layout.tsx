import { libreBaskerville } from "../styles/fonts/fonts";
import "./globals.css";

// const libertinusMono = Libertinus_Mono({ weight: ["400"], subsets: ['latin'] });

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
