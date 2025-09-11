import { libreBaskerville, amsterdamThreeSlant } from "../styles/fonts/fonts";
import "./globals.css";
import { LanguageProvider } from "../utils/language";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body
        className={`${libreBaskerville.className} ${amsterdamThreeSlant.variable}`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
