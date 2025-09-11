"use client";

import Image from "next/image";
import styles from "../styles.module.css";
import local_styles from "./styles.module.css";
import { useLanguage } from "../../../utils/language";

import frame_1 from "../../../public/imgs/frame_1.png";
import grapes from "../../../public/imgs/grapes.png";
import double_tulips from "../../../public/imgs/double_tulips.png";

export default function Agriturism() {
  const { language, setLanguage, getJsonTextLanguage } = useLanguage();

  return (
    <div className={`${styles.container} ${local_styles.container}`}>
      <main className={styles.main}>
        <Image src={double_tulips} alt="" className={styles.doubleTulipsLeft} />
        <section className={styles.frameSection}>
          <Image src={frame_1} alt="" className={styles.frameImage} />
          <div
            className={`${styles.frameText} ${local_styles.agriturismSection}`}
          >
            <span className={styles.title}>
              <span className={styles.capitalLetterAllura}>A</span>
              <span>griturismo</span>
            </span>
            <Image src={grapes} alt="" className={local_styles.grapeImage} />
            <p>{getJsonTextLanguage(language, "agriturismPage", 0)}</p>
            <p>{getJsonTextLanguage(language, "agriturismPage", 1)}</p>
            <p>
              <strong>Importante:</strong>
              {getJsonTextLanguage(language, "agriturismPage", 2)}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
