"use client";

import Image from "next/image";
import styles from "../styles.module.css";
import local_styles from "./styles.module.css";
import { useRouter } from "next/navigation";
import { useLanguage } from "../../../utils/language";

import frame_2 from "../../../public/imgs/frame_2.png";
import frame_2_top from "../../../public/imgs/frame_2_top.png";
import frame_2_bottom from "../../../public/imgs/frame_2_bottom.png";
import bagages from "../../../public/imgs/bagages.png";
import hotel_1_image from "../../../public/imgs/hotel_1_image.png";
import hotel_2_image from "../../../public/imgs/hotel_2_image.png";
import double_tulips from "../../../public/imgs/double_tulips.png";

export default function Housing() {
  const router = useRouter();
  const { language, setLanguage, getJsonTextLanguage } = useLanguage();

  const handleClick = (e: React.MouseEvent, route: string) => {
    e.preventDefault();
    router.push(route);
  };
  return (
    <div className={`${styles.container} ${local_styles.container}`}>
      <main className={styles.main}>
        <Image src={double_tulips} alt="" className={styles.doubleTulipsLeft} />
        <section
          className={`${styles.frameSection} ${local_styles.housingSection}`}
        >
          <Image src={frame_2_top} alt="" className={local_styles.frameImage} />
          <Image
            src={frame_2_bottom}
            alt=""
            className={local_styles.frameImage}
          />
          <div className={`${styles.frameText} ${local_styles.frameContent}`}>
            <span className={`${styles.title} ${local_styles.title}`}>
              <span
                className={
                  language == "pt-br"
                    ? local_styles.capitalLetter
                    : local_styles.capitalLetterItalian
                }
              >
                {getJsonTextLanguage(language, "housingPage", 0)}
              </span>
              {getJsonTextLanguage(language, "housingPage", 1)}
            </span>
            <Image src={bagages} alt="" className={local_styles.bagageImage} />
            <p>
              {getJsonTextLanguage(language, "housingPage", 2)}
              <strong>{getJsonTextLanguage(language, "housingPage", 3)}</strong>
              {getJsonTextLanguage(language, "housingPage", 4)}
            </p>
            <p>
              {getJsonTextLanguage(language, "housingPage", 5)}
              <strong>
                {getJsonTextLanguage(language, "housingPage", 6)}.
              </strong>{" "}
              {getJsonTextLanguage(language, "housingPage", 7)}
            </p>
            <section className={local_styles.hotelsSection}>
              <div className={local_styles.hotelInfoDiv}>
                <span>
                  <strong>Hotel Relais II</strong>
                </span>
                <span>{getJsonTextLanguage(language, "housingPage", 8)}</span>
                <Image
                  src={hotel_1_image}
                  alt=""
                  className={local_styles.hotelImages}
                />
              </div>
              <div className={local_styles.hotelInfoDiv}>
                <span>
                  <strong>Hotel Rutiliano</strong>
                </span>
                <span>{getJsonTextLanguage(language, "housingPage", 9)}</span>
                <Image
                  src={hotel_2_image}
                  alt=""
                  className={local_styles.hotelImages}
                />
              </div>
            </section>
            <p>
              {getJsonTextLanguage(language, "housingPage", 10)}
              <span>{getJsonTextLanguage(language, "housingPage", 11)}</span>
              <ul>
                <li>{getJsonTextLanguage(language, "housingPage", 12)}</li>
                <li>{getJsonTextLanguage(language, "housingPage", 13)}</li>
                <li>{getJsonTextLanguage(language, "housingPage", 14)}</li>
              </ul>
              <span>{getJsonTextLanguage(language, "housingPage", 15)}</span>
            </p>
            <button
              className={`${styles.button} ${local_styles.button}`}
              onClick={(e) =>
                handleClick(
                  e,
                  "https://api.whatsapp.com/send/?phone=5541992525117&text&type=phone_number&app_absent=0"
                )
              }
            >
              <span>{getJsonTextLanguage(language, "housingPage", 16)}</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
