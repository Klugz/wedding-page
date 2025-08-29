import {
  Libre_Baskerville,
  Alex_Brush,
  Allura,
  Playfair_Display,
} from "next/font/google";

import localFont from "next/font/local";

// Export your custom font
export const amsterdamThreeSlant = localFont({
  src: "../../public/fonts/amsterdam-three-slant.ttf",
  display: "swap", // improves performance
  variable: "--font-amsterdam", // creates a CSS variable
});

export const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const alexBrush = Alex_Brush({
  weight: ["400"],
  subsets: ["latin"],
  style: ["normal"],
});

export const allura = Allura({
  weight: ["400"],
  subsets: ["latin"],
  style: ["normal"],
});

export const playfair_display = Playfair_Display({
  weight: ["400"],
  subsets: ["latin"],
  style: ["normal"],
});
