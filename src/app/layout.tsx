import { libreBaskerville, amsterdamThreeSlant } from "../styles/fonts/fonts";
import "./globals.css";

// const libertinusMono = Libertinus_Mono({ weight: ["400"], subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body
        className={`${libreBaskerville.className} ${amsterdamThreeSlant.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
