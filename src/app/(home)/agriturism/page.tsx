import Image from "next/image";
import styles from "../styles.module.css";

import frame_1 from "../../../public/imgs/frame_1.png";
import grapes from "../../../public/imgs/grapes.png";

export default function Agriturism() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.frameSection}>
          <Image src={frame_1} alt="" className={styles.frameImage} />
          <div className={styles.frameText}>
            <p className={styles.title}>
              <span className={styles.capitalLetter}>A</span>
              <span>griturismo</span>
            </p>
            <Image src={grapes} alt="" className={styles.image} />
          </div>
        </section>
      </main>
    </div>
  );
}
