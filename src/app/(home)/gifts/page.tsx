import Image from "next/image";
import styles from "../styles.module.css";
import local_styles from "./styles.module.css";

import frame_2 from "../../../public/imgs/frame_2.png";
import presents from "../../../public/imgs/presents.png";
import double_tulips from "../../../public/imgs/double_tulips.png";
import qr_code_pix from "../../../public/imgs/qr_code_pix.png";

export default function Gifts() {
  return (
    <div className={`${styles.container} ${local_styles.container}`}>
      <main className={styles.main}>
        <Image src={double_tulips} alt="" className={styles.doubleTulipsLeft} />
        <section
          className={`${styles.frameSection} ${local_styles.giftsSection}`}
        >
          <Image src={frame_2} alt="" className={local_styles.frameImage} />
          <div className={`${styles.frameText} ${local_styles.frameContent}`}>
            <span className={`${styles.title} ${local_styles.title}`}>
              <span className={local_styles.capitalLetter}>P</span>resentes
            </span>
            <Image src={presents} alt="" className={local_styles.giftImage} />
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
            <Image
              src={qr_code_pix}
              alt=""
              className={local_styles.qrCodeImage}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
