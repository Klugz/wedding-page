"use client";

import Image from "next/image";
import styles from "../styles.module.css";
import local_styles from "./styles.module.css";
import { useRouter } from "next/navigation";

import frame_2 from "../../../public/imgs/frame_2.png";
import frame_2_top from "../../../public/imgs/frame_2_top.png";
import frame_2_bottom from "../../../public/imgs/frame_2_bottom.png";
import bagages from "../../../public/imgs/bagages.png";
import hotel_1_image from "../../../public/imgs/hotel_1_image.png";
import hotel_2_image from "../../../public/imgs/hotel_2_image.png";

export default function Housing() {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent, route: string) => {
    e.preventDefault();
    router.push(route);
  };
  return (
    <div className={`${styles.container} ${local_styles.container}`}>
      <main className={styles.main}>
        <section
          className={`${styles.frameSection} ${local_styles.housingSection}`}
        >
          <Image src={frame_2_top} alt="" className={local_styles.frameImage} />
          <Image
            src={frame_2_bottom}
            alt=""
            className={local_styles.frameImage}
          />
          <div className={`${styles.frameText} ${local_styles.frameContent}`}>
            <span className={`${styles.title} ${local_styles.title}`}>
              <span className={local_styles.capitalLetter}>H</span>ospedagem
            </span>
            <Image src={bagages} alt="" className={local_styles.bagageImage} />
            <p>
              Para aproveitar a experiência com conforto e praticidade,
              sugerimos que todos os convidados se hospedem próximos ao local do
              casamento. No dia da cerimônia, haverá um
              <strong>
                transfer de ida e volta para todos que estiverem hospedados em
                um raio de até 10 km do local do evento
              </strong>
              , garantindo assim pontualidade e segurança, especialmente
              considerando que haverá bebidas durante a festa
            </p>
            <p>
              As cidades mais próximas e com boa infraestrutura são{" "}
              <strong>Pienza e Monticchiello.</strong> Abaixo, reunimos algumas
              opções de hospedagem próximas ao local da cerimônia:
            </p>
            <section className={local_styles.hotelsSection}>
              <div className={local_styles.hotelInfoDiv}>
                <span>
                  <strong>Hotel Relais II</strong>
                </span>
                <span>Nota 8,8 - Centro de Pienza - $$</span>
                <Image
                  src={hotel_1_image}
                  alt=""
                  className={local_styles.hotelImages}
                />
              </div>
              <div className={local_styles.hotelInfoDiv}>
                <span>
                  <strong>Hotel Rutiliano</strong>
                </span>
                <span>Nota 8,6 - Pienza - $$</span>
                <Image
                  src={hotel_2_image}
                  alt=""
                  className={local_styles.hotelImages}
                />
              </div>
            </section>
            <p>
              A região oferece opções excelentes, desde hotéis charmosos até
              apartamentos e casas no estilo Airbnb. A agência pode ajudar a
              encontrar hospedagens de acordo com o perfil e estilo de cada
              convidado, garantindo que todos encontrem o lugar perfeito.
              <span>Reservando com a MHM Viagens, vocês terão:</span>
              <ul>
                <li>
                  - Condições especiais e facilidade no pagamento parcelado;
                </li>
                <li>- Suporte completo antes e durante a viagem;</li>
                <li>
                  - Atendimento personalizado com quem conhece todos os detalhes
                  do casamento.
                </li>
              </ul>
              <span>
                Contem com a ajuda deles para planejar tudo da melhor forma
                possível, deixando a viagem mais leve e evitando imprevistos.
              </span>
            </p>
            <button
              className={`${styles.button} ${local_styles.button}`}
              onClick={(e) =>
                handleClick(
                  e,
                  "https://api.whatsapp.com/send/?phone=5541992525117&text&type=phone_number&app_absent=0"
                )
              }
            >
              <span>CONTATO AGÊNCIA DE VIAGEM MHM</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
