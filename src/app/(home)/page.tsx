import styles from "./styles.module.css";
import Image from "next/image";

import af_logo from "../../public/imgs/af_logo.png";
import landscape from "../../public/imgs/landscape.png";
import double_tulips from "../../public/imgs/double_tulips.png";
import wedding_names from "../../public/imgs/wedding_names.png";
import frame_1 from "../../public/imgs/frame_1.png";
import minor_banner from "../../public/imgs/minor_banner.png";
import major_banner from "../../public/imgs/major_banner.png";
import motorcycle from "../../public/imgs/motorcycle.png";
import pizza from "../../public/imgs/pizza.png";
import grapes from "../../public/imgs/grapes.png";
import wedding_rings from "../../public/imgs/wedding_rings.png";
import plane from "../../public/imgs/plane.png";
import line_division from "../../public/imgs/line_division.png";
import bagages from "../../public/imgs/bagages.png";

import { libreBaskerville } from "../../styles/fonts/fonts";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={`${styles.header} ${styles.column}`}>
        <Image src={af_logo} alt="" className={styles.image} />
        <Image src={double_tulips} alt="" className={styles.topRightImage} />
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

        <section className={`${styles.nameDateSection} ${styles.column}`}>
          <Image src={wedding_names} alt="" className={styles.weddingNames} />
          <span className={styles.datesSpan}>
            26 a 29 de maio de 2026 <br /> podere lamone & lamino
          </span>
        </section>

        <section className={styles.frameSection}>
          <Image src={frame_1} alt="" className={styles.frameImage} />
          <div className={styles.frameText}>
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

        <section className={`${styles.countdownSection} ${styles.column}`}>
          <Image src={minor_banner} alt="" className={styles.minorBanner} />
          <span className={styles.textSpan}>Faltam</span>
          <Image src={motorcycle} alt="" className={styles.motorcycle} />
          <Image src={major_banner} alt="" className={styles.majorBanner} />
          <div className={styles.countdownDiv}>
            <span className={styles.countdownSpan}>
              <span className={styles.numbers}>00</span>
              <span className={styles.text}>DIAS</span>
            </span>
            <div className={styles.division}>:</div>
            <span className={styles.countdownSpan}>
              <span className={`${styles.numbers} ${styles.middleNumber}`}>
                00
              </span>
              <span className={styles.text}>HORAS</span>
            </span>
            <div className={styles.division}>:</div>
            <span className={styles.countdownSpan}>
              <span className={styles.numbers}>00</span>
              <span className={styles.text}>MINUTOS</span>
            </span>
          </div>
        </section>

        <section className={styles.frameSection}>
          <Image src={frame_1} alt="" className={styles.frameImage} />
          <div className={styles.frameText}>
            <span className={styles.title}>Programação</span>
            <div className={styles.infoDiv}>
              <div className={styles.infoSpans}>
                <span className={styles.headerSpan}>Welcome dinner</span>
                <span className={styles.dateSpan}>26 MAIO DE 2026</span>
                <span className={styles.hourSpan}>18h30</span>
                <a className={styles.textLink}>PODERE LAMONE LAMINO</a>
                <a className={styles.textLink}>TRAJE: ESPORTE FINO</a>
              </div>
              <Image src={pizza} alt="" className={styles.sideImage} />
            </div>
            <div className={styles.infoDiv}>
              <Image src={grapes} alt="" className={styles.sideImage} />
              <div className={styles.infoSpans}>
                <span className={styles.headerSpan}>Agriturismo</span>
                <span className={styles.dateSpan}>27 MAIO DE 2026</span>
                <span className={styles.hourSpan}>10h00</span>
                <a className={styles.textLink}>VERIFICAR LOCAL</a>
                <a className={styles.textLink}>INFORMAÇÕES SOBRE O PASSEIO</a>
              </div>
            </div>
            <div className={styles.infoDiv}>
              <div className={styles.infoSpans}>
                <span className={styles.headerSpan}>Casamento</span>
                <span className={styles.dateSpan}>28 MAIO DE 2026</span>
                <span className={styles.hourSpan}>17h00</span>
                <a className={styles.textLink}>PODERE LAMONE LAMINO</a>
                <a className={styles.textLink}>TRAJE: SOCIAL COMPLETO</a>
              </div>
              <Image src={wedding_rings} alt="" className={styles.sideImage} />
            </div>
          </div>
        </section>

        <section className={`${styles.travelingSection} ${styles.column}`}>
          <header className={`${styles.header} ${styles.column}`}>
            <span className={styles.title}>Como Chegar</span>
            <Image src={plane} alt="" className={styles.planeImage} />
          </header>
          <p className={`${styles.paragraph} ${styles.column}`}>
            <span className={styles.textSpan}>
              Para quem vem do Brasil, a melhor forma de chegar até a região da
              toscana é voando até a Itália, com destino final nas cidades de
              Roma ou Florença, que são os aeroportos mais próximos da região
            </span>
            <span className={styles.textSpan}>
              Não há voos diretos do Brasil para Florença, mas é possível chegar
              fazendo conexão nas principais cidades da Europa, como Lisboa,
              Madri, Paris, Londres, Viena, Frankfurt ou Roma.
            </span>
            <span className={styles.textSpan}>
              A maneira mais prática e confortável de chegar até a região é
              alugar um carro, tanto em Roma quanto em Florença. Assim, vocês
              terão mobilidade para explorar as cidades vizinhas, os vinhedos e
              as paisagens incríveis da Toscana.
            </span>
            <span className={styles.textSpan}>
              As estradas são bem sinalizadas, seguras e com paisagens de tirar
              o fôlego ao longo do caminho.
            </span>
            <ul className={styles.airportList}>
              <li className={styles.airportItem}>
                Aeroporto de Roma (Fiumicino – FCO) <br /> Aproximadamente 2h30
                a 3h de carro até Val d’Orcia, toscana.
              </li>
              <li className={styles.airportItem}>
                Aeroporto de Florença (FLR) <br /> Aproximadamente 1h45 a 2h de
                carro até Val d’Orcia, Toscana.
              </li>
            </ul>
            <span className={styles.textSpan}>DICAS IMPORTANTES</span>
            <span className={styles.textSpan}>
              Recomendamos a compra das passagens aéreas com antecedência, tanto
              para garantir melhores tarifas quanto para ter mais opções de voos
              e conexões.
            </span>
            <span className={styles.textSpan}>
              Para quem deseja praticidade, indicamos a Agência MHM, que está
              nos auxiliando em toda a organização da viagem. Eles oferecem
              suporte na emissão das passagens, na escolha dos melhores trajetos
              e também no aluguel de carro, tornando todo o processo mais
              simples e confortável.
            </span>
          </p>
          <button className={styles.button}>
            <span>CONTATO AGÊNCIA DE VIAGEM MHM</span>
          </button>
        </section>

        <section className={`${styles.housingSection} ${styles.column}`}>
          <Image src={line_division} alt="" className={styles.lineDivision} />
          <span className={styles.title}>Hospedagem</span>
          <Image src={bagages} alt="" className={styles.bagagesImage} />
          <button className={styles.button}>CLIQUE AQUI</button>
          <span className={styles.span}>
            CONFIRA AS SUGESTÕES DE HOSPEDAGENS FEITA PELA AGÊNCIA MHM
          </span>
        </section>

        <section className={styles.frameSection}>
          <Image src={frame_1} alt="" className={styles.frameImage} />
          <div className={styles.frameText}>
            <span className={styles.title}>Recomendações</span>
          </div>
        </section>
      </main>
    </div>
  );
}
