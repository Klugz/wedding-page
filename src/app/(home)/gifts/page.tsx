"use client";

import Image from "next/image";
import styles from "../styles.module.css";
import local_styles from "./styles.module.css";
import { useLanguage } from "../../../utils/language";

import frame_2 from "../../../public/imgs/frame_2.png";
import presents from "../../../public/imgs/presents.png";
import double_tulips from "../../../public/imgs/double_tulips.png";
import qr_code_pix from "../../../public/imgs/qr_code_pix.png";
import qr_code from "../../../public/imgs/qr_code.png";

export default function Gifts() {
  const { language, setLanguage, getJsonTextLanguage } = useLanguage();

  return (
    <div className={`${styles.container} ${local_styles.container}`}>
      <main className={styles.main}>
        <Image src={double_tulips} alt="" className={styles.doubleTulipsLeft} />
        <section
          className={`${styles.frameSection} ${local_styles.giftsSection}`}
        >
          <Image src={frame_2} alt="" className={local_styles.frameImage} />
          {language == "pt-br" ? (
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
                isso não for possível. <br />A verdade é que o maior presente
                que poderíamos receber é a presença de vocês ao nosso lado.
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
          ) : (
            <div className={`${styles.frameText} ${local_styles.frameContent}`}>
              <span className={`${styles.title} ${local_styles.title}`}>
                <span className={local_styles.capitalLetterItalian}>R</span>
                egali
              </span>
              <Image src={presents} alt="" className={local_styles.giftImage} />
              <p>
                È una grande felicitá poter celebrare questo momento così
                speciale al fianco di ognuno di voi. La vostra presenza al
                nostro matrimonio è, senza dubbio, il regalo più bello che
                potessimo desiderare.
              </p>
              <p>
                Ma, se desiderate farci un dono in un altro modo, è possibile
                contribuire con una quota per la nostra luna di miele. Qualsiasi
                importo che abbia senso per voi sarà accolto con immenso affetto
                e gratitudine — e renderà questa esperienza ancora più
                indimenticabile. Per questo, mettiamo a disposizione il QR code
                o i dati bancari qui sotto, dove è possibile lasciare il vostro
                contributo.
              </p>
              <Image
                src={qr_code}
                alt=""
                className={local_styles.qrCodeImage}
              />
              <p>
                INTESTATARIA DEL CONTO: AMANDA KLUG
                <br />
                IBAN: BE53 9050 3817 4153
                <br />
                SWIFT/BIC: TRWIBEB1XXX
                <br />
                BANCA: Wise, Rue du Trône 100, 3rd floor, Brussels, 1050,
                Belgium
              </p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
