import Image from "next/image";
import styles from "../styles.module.css";

import frame_1 from "../../../public/imgs/frame_1.png";
import forest from "../../../public/imgs/forest.png";

export default function Recommendations() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.frameSection}>
          <Image src={frame_1} alt="" className={styles.frameImage} />
          <div className={styles.frameText}>
            <span className={styles.title}>O que fazer na região</span>
            <Image src={forest} alt="" className={styles.image} />
            <ul>
              <li>VISITE O CENÁRIO ONDE FOI GRAVADO O FILME GLADIADOR</li>
              <li>VISITE A GRUTA: LA BUCA DEL BEATO</li>
              <li>VISITE AS ÁGUAS TERMAIS E SPAS DA REGIÃO</li>
              <li>
                VISITE AS CIDADES DE: MONTICCHIELO, MONTEPULCIANO E PIENZA
              </li>
              <li>VISITE MONTALCINO</li>
              <li>VISITE O CASTELO DO ROBIN HOOD ITALIANO</li>
              <li>VISITE CASTIGLIONE D'ORCIA</li>
              <li>SOBOREIE OS PRODUTOS TÍPICOS DA REGIÃO</li>
              <li>FAÇA UM TOUR PELA ESTRADA DO VINHA ORCIA</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
