import {
  Libre_Baskerville,
  Alex_Brush,
  Allura,
  Playfair_Display,
} from "next/font/google";

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
