import Image from "next/image";
import styles from "../styles.module.css";
import local_styles from "./styles.module.css";

import frame_2 from "../../../public/imgs/frame_2.png";
import presents from "../../../public/imgs/presents.png";

export default function Gifts() {
  return (
    <div className={`${styles.container} ${local_styles.container}`}>
      <main className={styles.main}>
        <section
          className={`${styles.frameSection} ${local_styles.giftsSection}`}
        >
          <Image src={frame_2} alt="" className={local_styles.frameImage} />
          <div className={styles.frameText}>
            <span className={`${styles.title} ${local_styles.title}`}>
              Presentes
            </span>
            <Image src={presents} alt="" className={local_styles.giftImage} />
            <span>Para nossos queridos convidados brasileiros,</span>
            <p>
              Sabemos que viajar até a Itália representa um investimento
              importante, e valorizamos profundamente o esforço e o carinho de
              cada um que estará conosco nesse momento tão especial. Por isso,
              entendemos perfeitamente que um presente pode ser um compromisso
              adicional — e queremos que saibam que não há problema algum se
              isso não for possível. <br />A verdade é que o maior presente que
              poderíamos receber é a presença de vocês ao nosso lado.
              <br /> Mas, caso desejem nos presentear, ficaremos muito felizes
              com uma contribuição para nossa lua de mel — qualquer valor será
              recebido com carinho e gratidão.
            </p>
            <span>CHAVE PIX: CPF AMANDA KLUG - 068.971.099-24</span>
          </div>
        </section>
      </main>
    </div>
  );
}
