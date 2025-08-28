import Image from "next/image";
import styles from "../styles.module.css";
import local_styles from "./styles.module.css";

import frame_1 from "../../../public/imgs/frame_1.png";
import mirror_and_cosmetics from "../../../public/imgs/mirror_and_cosmetics.png";

export default function HairAndMakeup() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.frameSection}>
          <Image
            src={frame_1}
            alt=""
            className={`${styles.frameImage} ${local_styles.frameImage}`}
          />
          <div
            className={`${styles.frameText} ${local_styles.hairAndMakeupSection}`}
          >
            <span className={styles.title}>Cabelo e maquiagem</span>
            <Image
              src={mirror_and_cosmetics}
              alt=""
              className={`${styles.image} ${local_styles.mirrorImage}`}
            />
            <p>
              Sugestões de maquiadoras e cabeleireiras - brasileiras e italianas
              - para quem busca produção no dia do casamento. Os nomes levam
              direto ao Instagram profissional de cada uma, onde é possível
              alinhar os detalhes diretamente.
            </p>
            <ul className={local_styles.workersList}>
              <li>
                <a href="https://www.instagram.com/yanna_farias">
                  Yanna Farias
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/beautyonfleek.it">
                  Isabela de oliveira
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/makeupflorence">
                  Ana Matanovic
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/suely_hair_makeup">Suely</a>
              </li>
            </ul>
            <p>
              <strong>
                obs: Clique nas palavras em destaque para saber mais.
              </strong>
              Ao clicar, você será redirecionado(a) para uma página com mais
              informações. Caso ela esteja em italiano, basta clicar nos três
              pontinhos no canto superior direito do navegador e selecionar
              “Traduzir para o português”.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
