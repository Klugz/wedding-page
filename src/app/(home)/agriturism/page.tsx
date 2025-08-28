import Image from "next/image";
import styles from "../styles.module.css";
import local_styles from "./styles.module.css";

import frame_1 from "../../../public/imgs/frame_1.png";
import grapes from "../../../public/imgs/grapes.png";

export default function Agriturism() {
  return (
    <div className={`${styles.container} ${local_styles.container}`}>
      <main className={styles.main}>
        <section className={styles.frameSection}>
          <Image src={frame_1} alt="" className={styles.frameImage} />
          <div
            className={`${styles.frameText} ${local_styles.agriturismSection}`}
          >
            <span className={styles.title}>
              <span className={styles.capitalLetter}>A</span>
              <span>griturismo</span>
            </span>
            <Image src={grapes} alt="" className={local_styles.grapeImage} />
            <p>
              Estamos organizando, para o dia anterior à festa de casamento, um
              passeio especial por um agriturismo na região da Toscana — uma
              experiência tipicamente italiana, que une vinhedos, gastronomia
              local (com possibilidade de aulas práticas!) e paisagens de tirar
              o fôlego.
            </p>
            <p>
              Ainda estamos definindo os detalhes, mas a ideia é reunir os
              convidados que quiserem viver esse momento conosco em um dia leve
              e gostoso, com direito a degustações, boa comida e aquele clima de
              filme.
            </p>
            <p>
              Importante: o passeio será opcional e os custos serão pagos
              separadamente, por cada convidado. Assim que tudo estiver 100%
              definido, avisaremos vocês e postaremos aqui todas as informações,
              como: valores, descrição do passeio, horário e endereço.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
