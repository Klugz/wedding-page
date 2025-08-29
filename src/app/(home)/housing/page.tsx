import Image from "next/image";
import styles from "../styles.module.css";
import local_styles from "./styles.module.css";

import frame_2 from "../../../public/imgs/frame_2.png";
import bagages from "../../../public/imgs/bagages.png";

export default function Housing() {
  return (
    <div className={`${styles.container} ${local_styles.container}`}>
      <main className={styles.main}>
        <section
          className={`${styles.frameSection} ${local_styles.housingSection}`}
        >
          <Image src={frame_2} alt="" className={styles.frameImage} />
          <div className={styles.frameText}>
            <span className={`${styles.title} ${local_styles.title}`}>
              Hospedagem
            </span>
            <Image src={bagages} alt="" className={local_styles.bagageImage} />
            <p>
              Para aproveitar a experiência com conforto e praticidade,
              sugerimos que todos os convidados se hospedem próximos ao local do
              casamento. No dia da cerimônia, haverá um transfer de ida e volta
              para todos que estiverem hospedados em um raio de até 10 km do
              local do evento, garantindo assim pontualidade e segurança,
              especialmente considerando que haverá bebidas durante a festa
            </p>
            <p>
              As cidades mais próximas e com boa infraestrutura são Pienza e
              Monticchiello. Abaixo, reunimos algumas opções de hospedagem
              próximas ao local da cerimônia:
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
