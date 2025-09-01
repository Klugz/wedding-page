import Image from "next/image";
import styles from "../styles.module.css";
import local_styles from "./styles.module.css";

import frame_1 from "../../../public/imgs/frame_1.png";
import af_logo from "../../../public/imgs/af_logo.png";

export default function HairAndMakeup() {
  return (
    <div className={`${styles.container} ${local_styles.container}`}>
      <main className={styles.main}>
        <section className={styles.frameSection}>
          <Image
            src={frame_1}
            alt=""
            className={`${styles.frameImage} ${local_styles.frameImage}`}
          />
          <div
            className={`${styles.frameText} ${local_styles.guestManualSection}`}
          >
            <span className={styles.title}>
              <span className={styles.capitalLetterAllura}>M</span>anual do
              Convidado
            </span>
            <ul className={local_styles.manual}>
              <li>- CONFIRME SUA PRESENÇA</li>
              <li>- NÃO SE ATRASE! SEJA PONTUAL</li>
              <li>- BRANCO É COR DA NOIVA</li>
              <li>- POR FAVOR, NÃO LEVE PESSOAS QUE NÃO FORAM CONVIDADAS</li>
              <li>- RESPEITE O DRESS CODE</li>
              <li>
                - NA HORA DA CERIMONIA NÃO ESQUECER DE DEIXAR SEU CELULAR NO
                SILENCIOSO
              </li>
              <li>- VAI TER BASTANTE COMIDA, VÁ COM FOME!</li>
              <li>- DIVERTA-SE</li>
              <li>- NÃO SAIA SEM DE DESPEDIR DOS NOIVOS</li>
              <li>- NÃO SE ESQUEÇA: VOCE É MUITO ESPECIAL PARA NÓS</li>
            </ul>
            <Image src={af_logo} alt="" className={local_styles.afImage} />
          </div>
        </section>
      </main>
    </div>
  );
}
