"use client";

import Image from "next/image";
import styles from "../styles.module.css";
import local_styles from "./styles.module.css";
import { useLanguage } from "../../layout";

import frame_1 from "../../../public/imgs/frame_1.png";
import forest from "../../../public/imgs/forest.png";
import double_tulips from "../../../public/imgs/double_tulips.png";

export default function Recommendations() {
  const { language, setLanguage, getJsonTextLanguage } = useLanguage();

  return (
    <div className={`${styles.container} ${local_styles.container}`}>
      <main className={styles.main}>
        <Image src={double_tulips} alt="" className={styles.doubleTulipsLeft} />
        <section className={`${styles.frameSection}`}>
          <Image
            src={frame_1}
            alt=""
            className={`${styles.frameImage} ${local_styles.frameImage}`}
          />
          <div
            className={`${styles.frameText} ${local_styles.recommendationsSection}`}
          >
            <span className={styles.title}>
              {getJsonTextLanguage(language, "recommendationsPage", 0)}
            </span>
            <Image
              src={forest}
              alt=""
              className={`${styles.image} ${local_styles.trailImage}`}
            />
            <ul className={local_styles.recommendationsList}>
              <li>
                <a
                  target="_blank"
                  href="https://www.villaapparita.it/i/blog/la-cappella-di-vitaleta/105"
                >
                  {getJsonTextLanguage(language, "recommendationsPage", 1)}
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.villaapparita.it/i/blog/grotte-da-visitare-in-val-dorcia-la-buca-del-beato/124"
                >
                  {" "}
                  {getJsonTextLanguage(language, "recommendationsPage", 2)}
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.villaapparita.it/i/blog/terme-naturali-e-spa-per-tutti-i-gusti-in-toscana/121"
                >
                  {" "}
                  {getJsonTextLanguage(language, "recommendationsPage", 3)}
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.villaapparita.it/i/blog/itinerario-in-val-dorcia-monticchiello-montepulciano-e-pienza/89"
                >
                  {getJsonTextLanguage(language, "recommendationsPage", 4)}
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.villaapparita.it/i/blog/visitare-montalcino/86"
                >
                  {" "}
                  {getJsonTextLanguage(language, "recommendationsPage", 5)}
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.villaapparita.it/i/blog/visitare-radicofani/95"
                >
                  {" "}
                  {getJsonTextLanguage(language, "recommendationsPage", 6)}
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.villaapparita.it/i/blog/visitare-castiglion-d-orcia/88"
                >
                  {" "}
                  {getJsonTextLanguage(language, "recommendationsPage", 7)}
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.villaapparita.it/i/blog/itinerario-del-gusto/106"
                >
                  {" "}
                  {getJsonTextLanguage(language, "recommendationsPage", 8)}
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.villaapparita.it/i/blog/in-tour-nella-strada-del-vino-orcia/109"
                >
                  {" "}
                  {getJsonTextLanguage(language, "recommendationsPage", 9)}
                </a>
              </li>
            </ul>
            <p>
              <strong>
                {getJsonTextLanguage(language, "recommendationsPage", 10)}
              </strong>
              {getJsonTextLanguage(language, "recommendationsPage", 11)}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
