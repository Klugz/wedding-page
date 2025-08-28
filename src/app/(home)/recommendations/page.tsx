import Image from "next/image";
import styles from "../styles.module.css";
import local_styles from "./styles.module.css";

import frame_1 from "../../../public/imgs/frame_1.png";
import forest from "../../../public/imgs/forest.png";

export default function Recommendations() {
  return (
    <div className={`${styles.container} ${local_styles.container}`}>
      <main className={styles.main}>
        <section className={`${styles.frameSection}`}>
          <Image
            src={frame_1}
            alt=""
            className={`${styles.frameImage} ${local_styles.frameImage}`}
          />
          <div
            className={`${styles.frameText} ${local_styles.recommendationsSection}`}
          >
            <span className={styles.title}>O que fazer na região</span>
            <Image
              src={forest}
              alt=""
              className={`${styles.image} ${local_styles.trailImage}`}
            />
            <ul className={local_styles.recommendationsList}>
              <li>
                <a
                  target="_blank"
                  href="https://www.villaapparita.it/i/blog/la-cappella-di-vitaleta/105"
                >
                  - VISITE O CENÁRIO ONDE FOI GRAVADO O FILME GLADIADOR
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.villaapparita.it/i/blog/grotte-da-visitare-in-val-dorcia-la-buca-del-beato/124"
                >
                  {" "}
                  -VISITE A GRUTA: LA BUCA DEL BEATO
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.villaapparita.it/i/blog/terme-naturali-e-spa-per-tutti-i-gusti-in-toscana/121"
                >
                  {" "}
                  -VISITE AS ÁGUAS TERMAIS E SPAS DA REGIÃO
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.villaapparita.it/i/blog/itinerario-in-val-dorcia-monticchiello-montepulciano-e-pienza/89"
                >
                  - VISITE AS CIDADES DE: MONTICCHIELO, MONTEPULCIANO E PIENZA
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.villaapparita.it/i/blog/visitare-montalcino/86"
                >
                  {" "}
                  -VISITE MONTALCINO
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.villaapparita.it/i/blog/visitare-radicofani/95"
                >
                  {" "}
                  -VISITE O CASTELO DO ROBIN HOOD ITALIANO
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.villaapparita.it/i/blog/visitare-castiglion-d-orcia/88"
                >
                  {" "}
                  -VISITE CASTIGLIONE D'ORCIA
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.villaapparita.it/i/blog/itinerario-del-gusto/106"
                >
                  {" "}
                  -SOBOREIE OS PRODUTOS TÍPICOS DA REGIÃO
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.villaapparita.it/i/blog/in-tour-nella-strada-del-vino-orcia/109"
                >
                  {" "}
                  -FAÇA UM TOUR PELA ESTRADA DO VINHA ORCIA
                </a>
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
