"use client";

import styles from "./styles.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
import presents from "../../public/imgs/presents.png";
import forest from "../../public/imgs/forest.png";
import mirror_and_cosmetics from "../../public/imgs/mirror_and_cosmetics.png";
import wine_and_pasta from "../../public/imgs/wine_and_pasta.png";
import heart from "../../public/imgs/heart.png";

import { libreBaskerville } from "../../styles/fonts/fonts";
import { routerServerGlobal } from "next/dist/server/lib/router-utils/router-server-context";

export default function Home() {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent, route: string) => {
    e.preventDefault();
    router.push(route);
  };

  return (
    <div className={styles.container}>
      <header className={`${styles.header} ${styles.column}`}>
        <Image src={af_logo} alt="" className={styles.image} />
        <Image src={double_tulips} alt="" className={styles.topRightImage} />
        <nav>
          <ul className={`${styles.navList} ${libreBaskerville.className}`}>
            <a className={styles.item} href="#">
              HOME
            </a>
            <a className={styles.item} href="#schedule">
              PROGRAMAÇÃO
            </a>
            <a className={styles.item} href="#traveling">
              COMO CHEGAR
            </a>
            <a className={styles.item} href="#housing">
              HOSPEDAGEM
            </a>
            <a className={styles.item} href="#recommendations">
              RECOMENDAÇÕES
            </a>
            <a className={styles.item} href="#contact">
              CONTATO
            </a>
            <a className={styles.item} href="#confirmation">
              CONFIRMAR PRESENÇA
            </a>
            <a className={styles.item} href="#gifts">
              PRESENTES
            </a>
            <a className={styles.item} href="#gifts">
              MANUAL DO CONVIDADO
            </a>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <section id="home">
          <Image src={landscape} alt="" className={styles.landscape} />
        </section>

        <section className={`${styles.nameDateSection} ${styles.column}`}>
          <Image src={wedding_names} alt="" className={styles.weddingNames} />
          <span className={styles.datesSpan}>
            26 A 29 DE MAIO DE 2026 <br /> LOCAL: PODERE LAMONE & LAMINO
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
            <Image src={heart} alt="" className={styles.heartImage} />
          </div>
        </section>

        <section className={`${styles.countdownSection} ${styles.column}`}>
          <span className={`${styles.textSpan} ${styles.title}`}>Faltam</span>
          <Image src={minor_banner} alt="" className={styles.minorBanner} />
          <Image src={motorcycle} alt="" className={styles.motorcycle} />
          <Image src={major_banner} alt="" className={styles.majorBanner} />
          <div className={styles.countdownDiv}>
            <span className={styles.countdownSpanNumbers}>00</span>
            <span className={styles.countdownSpanNumbers}>:</span>
            <span className={styles.countdownSpanNumbers}>00</span>
            <span className={styles.countdownSpanNumbers}>:</span>
            <span className={styles.countdownSpanNumbers}>00</span>
          </div>
          <div className={styles.countdownDiv}>
            <span className={styles.countdownSpanText}>DIAS</span>
            <span className={styles.countdownSpanText}>HORAS</span>
            <span className={styles.countdownSpanText}>MINUTOS</span>
          </div>
        </section>

        <section id="schedule" className={styles.frameSection}>
          <Image src={frame_1} alt="" className={styles.frameImage} />
          <div className={styles.frameText}>
            <span className={styles.title}>
              <span className={styles.capitalLetter}>P</span>rogramação
            </span>
            <div className={styles.infoDiv}>
              <div className={styles.infoSpans}>
                <div>
                  <span className={styles.headerSpan}>Welcome dinner</span>
                  <span className={styles.dateSpan}>26 MAIO DE 2026</span>
                </div>
                <div>
                  <span className={styles.hourSpan}>19h</span>
                </div>
                <div>
                  <a
                    target="_blank"
                    className={styles.textLink}
                    href="https://www.google.com/maps/place/Podere+Lamino/@43.057809,11.6990681,606m/data=!3m1!1e3!4m9!3m8!1s0x1329678b4265f597:0xa7cbc14effabb1d4!5m2!4m1!1i2!8m2!3d43.057809!4d11.701643!16s%2Fg%2F1td8mqr_?entry=ttu&g_ep=EgoyMDI1MDcyOC4wIKXMDSoASAFQAw%3D%3D"
                  >
                    PODERE LAMONE LAMINO
                  </a>
                  <a
                    target="_blank"
                    className={styles.textLink}
                    href="https://br.pinterest.com/amanklug/outfits-welcome-dinner"
                  >
                    TRAJE: ESPORTE FINO
                  </a>
                </div>
              </div>
              <Image
                src={pizza}
                alt=""
                className={`${styles.sideImage} ${styles.pizza}`}
              />
            </div>
            <div className={styles.infoDiv}>
              <Image src={grapes} alt="" className={styles.sideImage} />
              <div className={styles.infoSpans}>
                <div>
                  <span className={styles.headerSpan}>Agriturismo</span>
                  <span className={styles.dateSpan}>27 MAIO DE 2026</span>
                </div>
                <div>
                  <span className={styles.hourSpan}>10h</span>
                </div>
                <div>
                  <a
                    className={styles.textLink}
                    onClick={(e) => handleClick(e, "/agriturism")}
                  >
                    SAIBA MAIS
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.infoDiv}>
              <div className={styles.infoSpans}>
                <div>
                  <span className={styles.headerSpan}>Casamento</span>
                  <span className={styles.dateSpan}>28 MAIO DE 2026</span>
                </div>
                <div>
                  <span className={styles.hourSpan}>17h</span>
                </div>
                <div>
                  <a
                    target="_blank"
                    className={styles.textLink}
                    href="https://www.google.com/maps/place/Podere+Lamino/@43.057809,11.6990681,606m/data=!3m1!1e3!4m9!3m8!1s0x1329678b4265f597:0xa7cbc14effabb1d4!5m2!4m1!1i2!8m2!3d43.057809!4d11.701643!16s%2Fg%2F1td8mqr_?entry=ttu&g_ep=EgoyMDI1MDcyOC4wIKXMDSoASAFQAw%3D%3D"
                  >
                    PODERE LAMONE LAMINO
                  </a>
                  <a
                    target="_blank"
                    className={styles.textLink}
                    href="https://br.pinterest.com/amanklug/outfits-wedding-day"
                  >
                    TRAJE: SOCIAL COMPLETO
                  </a>
                </div>
              </div>
              <Image
                src={wedding_rings}
                alt=""
                className={`${styles.sideImage} ${styles.weddingRings}`}
              />
            </div>
          </div>
        </section>

        <section
          id="traveling"
          className={`${styles.travelingSection} ${styles.column}`}
        >
          <header className={`${styles.header} ${styles.column}`}>
            <span className={styles.title}>
              <span className={styles.capitalLetter}>C</span>omo chegar
            </span>
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
              as paisagens incríveis da Toscana. <br />
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
              e conexões. <br /> Para quem deseja praticidade, indicamos a
              Agência MHM, que está nos auxiliando em toda a organização da
              viagem. Eles oferecem suporte na emissão das passagens, na escolha
              dos melhores trajetos e também no aluguel de carro, tornando todo
              o processo mais simples e confortável.
            </span>
          </p>
          <button
            className={styles.button}
            onClick={(e) =>
              handleClick(
                e,
                "https://api.whatsapp.com/send/?phone=5541992525117&text&type=phone_number&app_absent=0"
              )
            }
          >
            <span>CONTATO AGÊNCIA DE VIAGEM MHM</span>
          </button>
        </section>

        <section
          id="housing"
          className={`${styles.housingSection} ${styles.column}`}
        >
          <Image src={line_division} alt="" className={styles.lineDivision} />
          <span className={styles.title}>
            <span className={styles.capitalLetter}>H</span>ospedagem
          </span>
          <Image src={bagages} alt="" className={styles.bagagesImage} />
          <button
            className={styles.button}
            onClick={(e) => handleClick(e, "/housing")}
          >
            CLIQUE AQUI
          </button>
          <span className={styles.span}>
            CONFIRA AS SUGESTÕES DE HOSPEDAGENS FEITA PELA AGÊNCIA MHM
          </span>
        </section>

        <section id="recommendations" className={styles.frameSection}>
          <Image src={frame_1} alt="" className={styles.frameImage} />
          <div className={styles.frameText}>
            <span className={styles.title}>
              <span className={styles.capitalLetter}>R</span>ecomendações
            </span>
            <div className={styles.moreDiv}>
              <a
                className={styles.span}
                onClick={(e) => handleClick(e, "/recommendations")}
              >
                O QUE FAZER NA REGIÃO
              </a>
              <Image src={forest} alt="" className={styles.image} />
            </div>
            <div className={styles.moreDiv}>
              <a
                target="_blank"
                className={styles.span}
                href="https://www.villaapparita.it/i/blog/la-val-d-orcia-da-gustare/128"
              >
                GASTRONOMIA TÍPICA
              </a>
              <Image src={wine_and_pasta} alt="" className={styles.image} />
            </div>
            <div className={styles.moreDiv}>
              <a
                className={styles.span}
                onClick={(e) => handleClick(e, "/hair_and_makeup")}
              >
                CABELO E MAQUIAGEM
              </a>
              <Image
                src={mirror_and_cosmetics}
                alt=""
                className={styles.image}
              />
            </div>
          </div>
        </section>

        <section
          id="contact"
          className={`${styles.contactSection} ${styles.column}`}
        >
          <span className={styles.title}>contato</span>
          <p className={styles.paragraphText}>
            <span>Para mais informações ou em caso de dúvidas,</span>
            <span>entrar em contato com a assessoria do casamento</span>
            <span>Lara e Julia – My Italy wedding planner</span>
          </p>
          <p className={styles.paragraphText}>
            <span>myitalyweddingplanner@gmail.com</span>
            <span>41 8801-9987</span>
          </p>
        </section>

        <section id="confirmation" className={styles.frameSection}>
          <Image src={frame_1} alt="" className={styles.frameImage} />
          <form
            method="POST"
            action="mailto:henriqueklug@gmail.com?subject=subject&body=body'"
            className={`${styles.frameForm} ${styles.column}`}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <fieldset className={`${styles.fieldset} ${styles.column}`}>
              <legend className={styles.title}>
                <span className={styles.capitalLetter}>C</span>onfirmar presença
              </legend>
              <input
                name="guest"
                type="text"
                required
                placeholder="CONVIDADO NOME COMPLETO (obrigatorio)"
              />
              <label className={styles.optionalLabel} htmlFor="family">
                <input
                  id="family"
                  name="family"
                  type="text"
                  placeholder="FAMILIARES NOME COMPLETO (se houver)"
                />
                *Somente nomes presentes no convite
              </label>
              <input name="email" type="text" required placeholder="EMAIL*" />
              <input
                name="phone"
                type="text"
                required
                placeholder="TELEFONE COM DDD*"
              />
              <input type="text" placeholder="LOCAL DE HOSPEDAGEM" />
              <input
                name="food_restriction"
                type="text"
                required
                placeholder="ALGUMA RESTRIÇÃO ALIMENTAR?*"
              />
              <div className={styles.div}>
                <span>CONFIRMO PRESENÇA EM:</span>
                <label htmlFor="welcome_dinner">
                  <input
                    id="welcome_dinner"
                    name="welcome_dinner"
                    type="checkbox"
                    className={styles.checkbox}
                  />
                  WELCOME DINNER
                </label>
                <label htmlFor="agriturismo">
                  <input
                    id="agriturismo"
                    name="agriturismo"
                    type="checkbox"
                    className={styles.checkbox}
                  />
                  AGRITURISMO
                </label>
                <label htmlFor="casamento">
                  <input
                    id="casamento"
                    name="casamento"
                    type="checkbox"
                    className={styles.checkbox}
                  />
                  CASAMENTO
                </label>
                <label htmlFor="welcome_dinner_marriage">
                  <input
                    id="welcome_dinner_marriage"
                    name="welcome_dinner_marriage"
                    type="checkbox"
                    className={styles.checkbox}
                  />
                  WELCOME DINNER e CASAMENTO
                </label>
                <label htmlFor="welcome_dinner_marriage_agriturism">
                  <input
                    id="welcome_dinner_marriage_agriturism"
                    name="welcome_dinner_marriage_agriturism"
                    type="checkbox"
                    className={styles.checkbox}
                  />
                  WELCOME DINNER, AGRITURISMO e CASAMENTO
                </label>
                <label htmlFor="cant_come">
                  <input
                    id="cant_come"
                    name="cant_come"
                    type="checkbox"
                    className={styles.checkbox}
                  />
                  INFELIZMENTE NÃO PODEREI COMPARECER
                </label>
              </div>
              <button className={styles.button}>ENVIAR</button>
            </fieldset>
          </form>
        </section>

        <section
          id="gifts"
          className={`${styles.giftsSection} ${styles.column}`}
        >
          <span className={styles.title}>
            <span className={styles.capitalLetter}>P</span>resentes
          </span>
          <Image src={presents} alt="" className={styles.bagagesImage} />
          <button
            className={styles.button}
            onClick={(e) => handleClick(e, "/gifts")}
          >
            CLIQUE AQUI
          </button>
          <Image src={line_division} alt="" className={styles.lineDivision} />
        </section>
      </main>
      <footer>
        <span>SITE DESENVOLVIDO POR HENRIQUE KLUG</span>
      </footer>
    </div>
  );
}
