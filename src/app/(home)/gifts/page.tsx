import Image from "next/image";
import styles from "../styles.module.css";

import frame_2 from "../../../public/imgs/frame_2.png";
import presents from "../../../public/imgs/presents.png";

export default function Gifts() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.frameSection}>
          <Image src={frame_2} alt="" className={styles.frameImage} />
          <div className={styles.frameText}>
            <span className={styles.title}>Presentes</span>
            <Image src={presents} alt="" className={styles.image} />
          </div>
        </section>
      </main>
    </div>
  );
}
