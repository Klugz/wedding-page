import Image from "next/image";
import styles from "../styles.module.css";

import frame_1 from "../../../public/imgs/frame_1.png";
import mirror_and_cosmetics from "../../../public/imgs/mirror_and_cosmetics.png";

export default function HairAndMakeup() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.frameSection}>
          <Image src={frame_1} alt="" className={styles.frameImage} />
          <div className={styles.frameText}>
            <span className={styles.title}>Cabelo e maquiagem</span>
            <Image src={mirror_and_cosmetics} alt="" className={styles.image} />
          </div>
        </section>
      </main>
    </div>
  );
}
