import styles from "./styles.module.css";
import Image from "next/image";

import af_logo from "../../public/imgs/af_logo.png";
import landscape from "../../public/imgs/landscape.png";
import double_tulips from "../../public/imgs/double_tulips.png";
import wedding_names from "../../public/imgs/wedding_names.png";
import frame_1 from "../../public/imgs/frame_1.png";

import { libreBaskerville } from "../../styles/fonts/fonts";

export default function Home() {
  return (
    <div className={styles.container}>
      <Image src={af_logo} alt="" width={300} />
      <header className={styles.header}>
        <Image
          src={double_tulips}
          alt=""
          width={300}
          className={styles.topRightImage}
        />
        <nav>
          <ul className={`${styles.navList} ${libreBaskerville.className}`}>
            <li>HOME</li>
            <li>PROGRAMAÇÃO</li>
            <li>COMO CHEGAR</li>
            <li>HOSPEDAGEM</li>
            <li>RECOMENDAÇÕES</li>
            <li>CONTATO</li>
            <li>CONFIRMAR PRESENÇA</li>
            <li>PRESENTES</li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <section>
          <Image src={landscape} alt="" className={styles.landscape} />
        </section>

        <section className={styles.nameDataSection}>
          <Image src={wedding_names} alt="" className={styles.weddingNames} />
          <span className={styles.datesSpan}>
            26 a 29 de maio de 2026 <br /> podere lamone & lamino
          </span>
        </section>

        <section className={styles.letterSection}>
          <Image src={frame_1} alt="" className={styles.letterImage} />
          <div className={styles.letterText}>
            <span className={styles.textSpan}>Cari amici e familiari,</span>
            <span className={styles.textSpan}>
              A Itália faz parte da nossa história e da nossa trajetória como
              casal. Mais do que um lugar, ela representa uma conexão profunda
              com as nossas memórias, nossos sonhos e com a cultura que o
              Filippo carrega — e que, com o tempo, também se tornou parte de
              nós. Foi cenário de viagens inesquecíveis, de descobertas e de
              tantos momentos especiais que vivemos juntos ao longo dos anos.
            </span>
            <span className={styles.textSpan}>
              Por isso, escolhemos a Toscana — com suas paisagens encantadoras,
              seus vinhedos, suas colinas e sua atmosfera romântica — para
              celebrar o amor e o início de um novo capítulo das nossas vidas.
            </span>
            <span className={styles.textSpan}>
              Estamos preparando tudo com muito carinho, desejando que esses
              dias tenham a nossa essência, sejam felizes e inesquecíveis para
              todos que estarão conosco.
            </span>
            <span className={styles.textSpan}>
              A presença de cada um de vocês tornará esse momento ainda mais
              especial.
            </span>
            <span className={styles.textSpan}>
              Aqui reunimos informações importantes para que possam se organizar
              e aproveitar essa experiência da melhor forma possível.
            </span>
            <span className={styles.textSpan}>Vi aspettiamo in Toscana!</span>
            <span className={styles.textSpan}>
              Com carinho,
              <br /> Amanda & Filippo
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}
