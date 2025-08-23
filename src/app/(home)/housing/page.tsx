import Image from "next/image";
import styles from "../styles.module.css";

import frame_2 from "../../../public/imgs/frame_2.png";
import bagages from "../../../public/imgs/bagages.png";

export default function Housing() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.frameSection}>
          <Image src={frame_2} alt="" className={styles.frameImage} />
          <div className={styles.frameText}>
            <span className={styles.title}>Hospedagem</span>
            <Image src={bagages} alt="" className={styles.image} />
          </div>
        </section>
      </main>
    </div>
  );
}
