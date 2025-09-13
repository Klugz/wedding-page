"use client";

import Image from "next/image";
import styles from "../styles.module.css";
import local_styles from "./styles.module.css";
import { useLanguage } from "../../../utils/language";

import frame_1 from "../../../public/imgs/frame_1.png";
import af_logo from "../../../public/imgs/af_logo.png";
import double_tulips from "../../../public/imgs/double_tulips.png";

export default function HairAndMakeup() {
  const { language, setLanguage, getJsonTextLanguage } = useLanguage();

  return (
    <div className={`${styles.container} ${local_styles.container}`}>
      <main className={styles.main}>
        <Image src={double_tulips} alt="" className={styles.doubleTulipsLeft} />
        <section className={styles.frameSection}>
          <Image
            src={frame_1}
            alt=""
            className={`${styles.frameImage} ${local_styles.frameImage}`}
          />
          <div
            className={`${styles.frameText} ${local_styles.guestManualSection}`}
          >
            <span className={styles.title}>
              <span className={styles.capitalLetterAllura}>
                {getJsonTextLanguage(language, "guestManualPage", 0)}
              </span>
              {getJsonTextLanguage(language, "guestManualPage", 1)}
            </span>
            <ul className={local_styles.manual}>
              <li>{getJsonTextLanguage(language, "guestManualPage", 2)}</li>
              <li>{getJsonTextLanguage(language, "guestManualPage", 3)}</li>
              <li>{getJsonTextLanguage(language, "guestManualPage", 4)}</li>
              <li>{getJsonTextLanguage(language, "guestManualPage", 5)}</li>
              <li>{getJsonTextLanguage(language, "guestManualPage", 6)}</li>
              <li>{getJsonTextLanguage(language, "guestManualPage", 7)}</li>
              <li>{getJsonTextLanguage(language, "guestManualPage", 8)}</li>
              <li>{getJsonTextLanguage(language, "guestManualPage", 9)}</li>
              <li>{getJsonTextLanguage(language, "guestManualPage", 10)}</li>
              <li>{getJsonTextLanguage(language, "guestManualPage", 11)}</li>
            </ul>
            <Image src={af_logo} alt="" className={local_styles.afImage} />
          </div>
        </section>
      </main>
    </div>
  );
}
