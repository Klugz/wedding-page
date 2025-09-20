"use client";

import styles from "./styles.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "../../utils/language";

import af_logo from "../../public/imgs/af_logo.png";
import landscape from "../../public/imgs/landscape.png";
import double_tulips from "../../public/imgs/double_tulips.png";
import tulip from "../../public/imgs/tulip.png";
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
import brazil_flag_icon from "../../public/imgs/brazil_flag_icon.png";
import italy_flag_icon from "../../public/imgs/italy_flag_icon.png";

import { libreBaskerville } from "../../styles/fonts/fonts";

export default function Home() {
  type confirmationForm = {
    guest_name: string;
    guest_family: string;
    guest_email: string;
    guest_phone: string;
    hotel: string;
    food_restriction: string;
    welcome_dinner: boolean;
    agriturism: boolean;
    wedding: boolean;
    dinner_wedding: boolean;
    dinner_agriturism_wedding: boolean;
    cant_come: boolean;
  };

  const router = useRouter();
  const targetDate = new Date(2026, 4, 26, 0, 0, 0);
  const checkbox_inputs = [
    "welcome_dinner",
    "agriturism",
    "wedding",
    "dinner_wedding",
    "dinner_agriturism_wedding",
    "cant_come",
  ];
  const [formData, setFormData] = useState({} as confirmationForm);
  const [status, setStatus] = useState("");
  const updatedFormData: Record<string, boolean> = {};
  const {
    language,
    setLanguage,
    getJsonTextLanguage,
    languageSelected,
    setLanguageSelected,
  } = useLanguage();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (checkbox_inputs.includes(e.target.name)) {
      checkbox_inputs.forEach((input_name) => {
        input_name === e.target.name
          ? (updatedFormData[input_name] = true)
          : (updatedFormData[input_name] = false);
      });
      setFormData({ ...formData, ...updatedFormData });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("Email sent successfully!");
      setFormData({
        guest_name: "",
        guest_family: "",
        guest_email: "",
        guest_phone: "",
        hotel: "",
        food_restriction: "",
        welcome_dinner: false,
        agriturism: false,
        wedding: false,
        dinner_wedding: false,
        dinner_agriturism_wedding: false,
        cant_come: false,
      });
    } else {
      setStatus("Failed to send email. Try again.");
    }
  };

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: "00", hours: "00", minutes: "00" });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = (e: React.MouseEvent, route: string) => {
    e.preventDefault();
    router.push(route);
  };

  const handleLanguageSelect = (e: React.MouseEvent, language: string) => {
    setLanguageSelected(true);
    setLanguage(language);
  };

  return (
    <div className={styles.container}>
      <div
        className={languageSelected ? styles.hiddenGem : styles.languageModal}
      >
        <div onClick={(e) => handleLanguageSelect(e, "pt-br")}>
          <Image src={brazil_flag_icon} alt="" className={styles.flagImage} />
          <span>PORTUGUÊS</span>
        </div>
        <div onClick={(e) => handleLanguageSelect(e, "it-it")}>
          <Image src={italy_flag_icon} alt="" className={styles.flagImage} />
          <span>ITALIANO</span>
        </div>
      </div>
      <header className={`${styles.header} ${styles.column}`}>
        <Image src={af_logo} alt="" className={styles.image} />
        <div className={styles.doubleTulipDiv}>
          <Image
            src={double_tulips}
            alt=""
            className={styles.doubleTulipsTop}
          />
        </div>
        <nav>
          <ul className={`${styles.navList} ${libreBaskerville.className}`}>
            <a className={styles.item} href="#">
              {getJsonTextLanguage(language, "navBar", 0)}
            </a>
            <a className={styles.item} href="#schedule">
              {getJsonTextLanguage(language, "navBar", 1)}
            </a>
            <a className={styles.item} href="#traveling">
              {getJsonTextLanguage(language, "navBar", 2)}
            </a>
            <a className={styles.item} href="#housing">
              {getJsonTextLanguage(language, "navBar", 3)}
            </a>
            <a className={styles.item} href="#recommendations">
              {getJsonTextLanguage(language, "navBar", 4)}
            </a>
            <a className={styles.item} href="#contact">
              {getJsonTextLanguage(language, "navBar", 5)}
            </a>
            <a className={styles.item} href="#confirmation">
              {getJsonTextLanguage(language, "navBar", 6)}
            </a>
            <a className={styles.item} href="#gifts">
              {getJsonTextLanguage(language, "navBar", 7)}
            </a>
            <a
              className={styles.item}
              onClick={(e) => handleClick(e, "/guest_manual")}
            >
              {getJsonTextLanguage(language, "navBar", 8)}
            </a>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <section id="home">
          <Image src={landscape} alt="" className={styles.landscape} />
        </section>

        <Image src={tulip} alt="" className={styles.firstTulip} />

        <section className={`${styles.nameDateSection} ${styles.column}`}>
          <Image src={wedding_names} alt="" className={styles.weddingNames} />
          <span className={styles.datesSpan}>
            {getJsonTextLanguage(language, "dateSpan", 0)} <br />
            {getJsonTextLanguage(language, "dateSpan", 1)}
          </span>
        </section>

        <section className={styles.frameSection}>
          <Image src={frame_1} alt="" className={styles.frameImage} />
          <div className={styles.frameText}>
            <span className={styles.textSpan}>Cari amici e familiari,</span>
            <span className={styles.textSpan}>
              {getJsonTextLanguage(language, "letterForm", 0)}
            </span>
            <span className={styles.textSpan}>
              {getJsonTextLanguage(language, "letterForm", 1)}
            </span>
            <span className={styles.textSpan}>
              {getJsonTextLanguage(language, "letterForm", 2)}
            </span>
            <span className={styles.textSpan}>
              {getJsonTextLanguage(language, "letterForm", 3)}
            </span>
            <span className={styles.textSpan}>
              {getJsonTextLanguage(language, "letterForm", 4)}
            </span>
            <span className={styles.textSpan}>Vi aspettiamo in Toscana!</span>
            <span className={styles.textSpan}>
              {getJsonTextLanguage(language, "letterForm", 5)}
              <br /> Amanda & Filippo
            </span>
            <Image src={heart} alt="" className={styles.heartImage} />
          </div>
        </section>

        <div className={styles.secondTulipDiv}>
          <Image src={tulip} alt="" className={styles.secondTulip} />
        </div>

        <section className={`${styles.countdownSection} ${styles.column}`}>
          <span className={`${styles.textSpan} ${styles.title}`}>
            <span className={styles.capitalLetter}>
              {getJsonTextLanguage(language, "countDownSection", 0)}
            </span>
            {getJsonTextLanguage(language, "countDownSection", 1)}
          </span>
          <Image src={minor_banner} alt="" className={styles.minorBanner} />
          <Image src={motorcycle} alt="" className={styles.motorcycle} />
          <Image src={major_banner} alt="" className={styles.majorBanner} />
          <div className={styles.countdownDiv}>
            <span className={styles.countdownSpanNumbers}>{timeLeft.days}</span>
            <span className={styles.countdownSpanNumbers}>:</span>
            <span className={styles.countdownSpanNumbers}>
              {timeLeft.hours}
            </span>
            <span className={styles.countdownSpanNumbers}>:</span>
            <span className={styles.countdownSpanNumbers}>
              {timeLeft.minutes}
            </span>
          </div>
          <div className={styles.countdownDiv}>
            <span className={styles.countdownSpanText}>
              {getJsonTextLanguage(language, "countDownSection", 2)}
            </span>
            <span className={styles.countdownSpanText}>
              {getJsonTextLanguage(language, "countDownSection", 3)}
            </span>
            <span className={styles.countdownSpanText}>
              {getJsonTextLanguage(language, "countDownSection", 4)}
            </span>
          </div>
        </section>

        <Image
          src={double_tulips}
          alt=""
          className={styles.secondDoubleTulips}
        />

        <section id="schedule" className={styles.frameSection}>
          <Image src={frame_1} alt="" className={styles.frameImage} />
          <div className={styles.frameText}>
            <span className={styles.title}>
              <span className={styles.capitalLetter}>
                {getJsonTextLanguage(language, "scheduleForm", 0)}
              </span>
              {getJsonTextLanguage(language, "scheduleForm", 1)}
            </span>
            <div className={styles.infoDiv}>
              <div className={styles.infoSpans}>
                <div>
                  <span className={styles.headerSpan}>
                    <span className={styles.capitalLetterSpan}>
                      {getJsonTextLanguage(language, "scheduleForm", 2)}
                    </span>
                    {getJsonTextLanguage(language, "scheduleForm", 3)}
                  </span>
                  <span className={styles.dateSpan}>
                    {getJsonTextLanguage(language, "scheduleForm", 4)}
                  </span>
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
                    {getJsonTextLanguage(language, "scheduleForm", 5)}
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
                  <span className={styles.headerSpan}>
                    <span className={styles.capitalLetterSpanAllura}>
                      {getJsonTextLanguage(language, "scheduleForm", 6)}
                    </span>
                    {getJsonTextLanguage(language, "scheduleForm", 7)}
                  </span>
                  <span className={styles.dateSpan}>
                    {getJsonTextLanguage(language, "scheduleForm", 8)}
                  </span>
                </div>
                <div>
                  <span className={styles.hourSpan}>10h</span>
                </div>
                <div>
                  <a
                    className={styles.textLink}
                    onClick={(e) => handleClick(e, "/agriturism")}
                  >
                    {getJsonTextLanguage(language, "scheduleForm", 9)}
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.infoDiv}>
              <div className={styles.infoSpans}>
                <div>
                  <span className={styles.headerSpan}>
                    <span className={styles.capitalLetterSpan}>
                      {getJsonTextLanguage(language, "scheduleForm", 10)}
                    </span>
                    {getJsonTextLanguage(language, "scheduleForm", 11)}
                  </span>
                  <span className={styles.dateSpan}>
                    {getJsonTextLanguage(language, "scheduleForm", 12)}
                  </span>
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
                    {getJsonTextLanguage(language, "scheduleForm", 13)}
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

        <Image
          src={double_tulips}
          alt=""
          className={styles.thirdDoubleTulips}
        />

        <section
          id="traveling"
          className={`${styles.travelingSection} ${styles.column}`}
        >
          <header className={`${styles.header} ${styles.column}`}>
            <span className={styles.title}>
              <span className={styles.capitalLetterAllura}>
                {getJsonTextLanguage(language, "travelingSection", 0)}
              </span>
              {getJsonTextLanguage(language, "travelingSection", 1)}
            </span>
            <Image src={plane} alt="" className={styles.planeImage} />
          </header>
          {language == "pt-br" ? (
            <>
              <p className={`${styles.paragraph} ${styles.column}`}>
                <span className={styles.textSpan}>
                  Gostaríamos muito que todos possam viver essa experiência
                  conosco na Toscana, de forma tranquila e inesquecível.
                </span>
                <span className={styles.textSpan}>
                  Para isso, contamos com a ajuda especial dos nossos amigos
                  Angela e Victor, da MHM Viagens. Eles serão responsáveis pela
                  organização da viagem dos convidados e estarão presentes no
                  casamento, oferecendo suporte próximo e personalizado em
                  passagens, hospedagem, aluguel de carro, seguro viagem e tudo
                  o que for relacionado a viagem.
                </span>
                <span>
                  <strong>COMO CHEGAR:</strong>
                </span>
                <span className={styles.textSpan}>
                  Para quem sai do Brasil, a forma mais prática é voar até Roma
                  (FCO) ou Florença (FLR) e, de lá, alugar um carro para seguir
                  até a Toscana. O trajeto até a região do casamento - Val
                  d’Orcia - leva em média 2h30 a 3h, em estradas seguras, bem
                  sinalizadas e cercadas por paisagens de tirar o fôlego. Ter um
                  carro garante facilidade e libertade para explorar cidades
                  vizinhas, vinhedos e toda a beleza incrível da região.
                </span>
                <span>
                  <strong>DICA:</strong>
                </span>
                <span className={styles.textSpan}>
                  Recomendamos comprar as passagens aéreas com alguns meses de
                  antecedência para garantir melhores tarifas e mais opções de
                  voos e conexões.
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
            </>
          ) : (
            <p className={`${styles.paragraph} ${styles.column}`}>
              <span className={styles.textSpan}>
                Ci sono diversi modi per arrivare, e ognuno ha i suoi vantaggi.
                Scegliete quello che si adatta meglio a voi:
              </span>
              <span className={styles.textSpan}>
                <strong>In Auto:</strong> Se vi piace viaggiare in libertà e
                godervi i paesaggi lungo il percorso, andare in auto è un’ottima
                scelta. In questo modo potrete stabilire il vostro ritmo, fare
                piccole soste e vivere il viaggio prima ancora di arrivare nella
                regione del nostro matrimonio. Per gruppi fino a 5 persone,
                questa può essere l’opzione più economica.
              </span>
              <span className={styles.textSpan}>
                <strong>In Aereo:</strong> Se arrivate da regioni più lontane,
                come Milano, volare può essere il modo più rapido e pratico per
                raggiungerci. L’aeroporto più vicino al luogo del matrimonio è
                l’Aeroporto di Firenze, che offre buoni collegamenti interni.
              </span>
              <span className={styles.textSpan}>
                <strong>In Treno:</strong>Viaggiare in treno è un’altra
                alternativa comoda e rilassante, che vi permette di godervi il
                percorso senza preoccuparvi del traffico. Le principali stazioni
                più vicine al luogo del matrimonio sono quelle di Firenze e
                Siena.
              </span>
              <span className={styles.textSpan}>
                <strong>Importante:</strong> Se scegliete di arrivare in aereo o
                in treno, sarà necessario affittare un’auto per completare il
                percorso fino al luogo del matrimonio, che si trova nella
                regione della Val d’Orcia, tra le città di Pienza e
                Monticchiello. Inoltre, avere un’auto vi garantirà comodità e
                libertà per esplorare i borghi vicini, le vigne e tutta la
                bellezza incredibile della regione nei giorni precedenti o
                successivi al matrimonio.
              </span>
            </p>
          )}
        </section>

        <div className={styles.thirdTulipDiv}>
          <Image src={tulip} alt="" className={styles.thirdTulip} />
        </div>

        <section
          id="housing"
          className={`${styles.housingSection} ${styles.column}`}
        >
          <Image src={line_division} alt="" className={styles.lineDivision} />
          <span className={styles.title}>
            <span
              className={`${
                language == "pt-br"
                  ? styles.capitalLetter
                  : styles.capitalLetterAllura
              }`}
            >
              {getJsonTextLanguage(language, "housingSection", 0)}
            </span>
            {getJsonTextLanguage(language, "housingSection", 1)}
          </span>
          <Image src={bagages} alt="" className={styles.bagagesImage} />
          <button
            className={styles.button}
            onClick={(e) => handleClick(e, "/housing")}
          >
            {getJsonTextLanguage(language, "housingSection", 2)}
          </button>
          <span className={styles.span}>
            {language == "pt-br"
              ? "CONFIRA AS SUGESTÕES DE HOSPEDAGENS FEITA PELA AGÊNCIA MHM"
              : ""}
          </span>
        </section>

        <Image
          src={double_tulips}
          alt=""
          className={styles.fourthDoubleTulips}
        />

        <section id="recommendations" className={styles.frameSection}>
          <Image src={frame_1} alt="" className={styles.frameImage} />
          <div className={styles.frameText}>
            <span className={styles.title}>
              <span className={styles.capitalLetter}>
                {getJsonTextLanguage(language, "recommendationsSection", 0)}
              </span>
              {getJsonTextLanguage(language, "recommendationsSection", 1)}
            </span>
            <div
              className={styles.moreDiv}
              onClick={(e) => handleClick(e, "/recommendations")}
            >
              <a
                className={styles.span}
                onClick={(e) => handleClick(e, "/recommendations")}
              >
                {getJsonTextLanguage(language, "recommendationsSection", 2)}
              </a>
              <Image src={forest} alt="" className={styles.image} />
            </div>
            <div
              className={styles.moreDiv}
              onClick={(e) =>
                handleClick(
                  e,
                  "https://www.villaapparita.it/i/blog/la-val-d-orcia-da-gustare/128"
                )
              }
            >
              <a
                target="_blank"
                className={styles.span}
                href="https://www.villaapparita.it/i/blog/la-val-d-orcia-da-gustare/128"
              >
                {getJsonTextLanguage(language, "recommendationsSection", 3)}
              </a>
              <Image src={wine_and_pasta} alt="" className={styles.image} />
            </div>
            <div
              className={styles.moreDiv}
              onClick={(e) => handleClick(e, "/hair_and_makeup")}
            >
              <a
                className={styles.span}
                onClick={(e) => handleClick(e, "/hair_and_makeup")}
              >
                {getJsonTextLanguage(language, "recommendationsSection", 4)}
              </a>
              <Image
                src={mirror_and_cosmetics}
                alt=""
                className={styles.image}
              />
            </div>
          </div>
        </section>

        <div className={styles.fourthTulipDiv}>
          <Image src={tulip} alt="" className={styles.fourthTulip} />
        </div>

        <section
          id="contact"
          className={`${styles.contactSection} ${styles.column}`}
        >
          <span className={styles.title}>
            {getJsonTextLanguage(language, "contactSection", 0)}
          </span>
          <p className={styles.paragraphText}>
            <span>{getJsonTextLanguage(language, "contactSection", 1)}</span>
            <span>{getJsonTextLanguage(language, "contactSection", 2)}</span>
            <span>{getJsonTextLanguage(language, "contactSection", 3)}</span>
          </p>
          <p className={styles.paragraphText}>
            <span>myitalyweddingplanner@gmail.com</span>
            <span>{getJsonTextLanguage(language, "contactSection", 4)}</span>
          </p>
        </section>

        <section id="confirmation" className={styles.frameSection}>
          <Image src={frame_1} alt="" className={styles.frameImageForm} />
          <form
            className={`${styles.frameForm} ${styles.column}`}
            onSubmit={handleSubmit}
          >
            <fieldset className={`${styles.fieldset} ${styles.column}`}>
              <legend className={styles.title}>
                <span className={styles.capitalLetter}>
                  {getJsonTextLanguage(language, "ConfirmationSection", 0)}
                </span>
                {getJsonTextLanguage(language, "ConfirmationSection", 1)}
              </legend>
              <input
                name="guest_name"
                type="text"
                value={formData.guest_name}
                onChange={handleChange}
                required
                placeholder={getJsonTextLanguage(
                  language,
                  "ConfirmationSection",
                  2
                )}
              />
              <label className={styles.optionalLabel} htmlFor="guest_family">
                <input
                  id="guest_family"
                  name="guest_family"
                  type="text"
                  value={formData.guest_family}
                  onChange={handleChange}
                  required
                  placeholder={getJsonTextLanguage(
                    language,
                    "ConfirmationSection",
                    3
                  )}
                />
                <strong>
                  {getJsonTextLanguage(language, "ConfirmationSection", 4)}
                </strong>
              </label>
              <input
                name="guest_email"
                type="text"
                value={formData.guest_email}
                onChange={handleChange}
                required
                placeholder={getJsonTextLanguage(
                  language,
                  "ConfirmationSection",
                  5
                )}
              />
              <input
                name="guest_phone"
                type="text"
                value={formData.guest_phone}
                onChange={handleChange}
                required
                placeholder={getJsonTextLanguage(
                  language,
                  "ConfirmationSection",
                  6
                )}
              />
              <input
                name="hotel"
                type="text"
                value={formData.hotel}
                onChange={handleChange}
                placeholder={getJsonTextLanguage(
                  language,
                  "ConfirmationSection",
                  7
                )}
              />
              <input
                name="food_restriction"
                type="text"
                value={formData.food_restriction}
                onChange={handleChange}
                required
                placeholder={getJsonTextLanguage(
                  language,
                  "ConfirmationSection",
                  8
                )}
              />
              <div className={styles.div}>
                <span>
                  {getJsonTextLanguage(language, "ConfirmationSection", 9)}
                </span>
                <label htmlFor="welcome_dinner">
                  <input
                    id="welcome_dinner"
                    name="welcome_dinner"
                    checked={formData.welcome_dinner ? true : false}
                    onChange={handleChange}
                    type="checkbox"
                    className={styles.checkbox}
                  />
                  {getJsonTextLanguage(language, "ConfirmationSection", 10)}
                </label>
                <label htmlFor="agriturism">
                  <input
                    id="agriturism"
                    name="agriturism"
                    checked={formData.agriturism ? true : false}
                    onChange={handleChange}
                    type="checkbox"
                    className={styles.checkbox}
                  />
                  {getJsonTextLanguage(language, "ConfirmationSection", 11)}
                </label>
                <label htmlFor="wedding">
                  <input
                    id="wedding"
                    name="wedding"
                    checked={formData.wedding ? true : false}
                    onChange={handleChange}
                    type="checkbox"
                    className={styles.checkbox}
                  />
                  {getJsonTextLanguage(language, "ConfirmationSection", 12)}
                </label>
                <label htmlFor="dinner_wedding">
                  <input
                    id="dinner_wedding"
                    name="dinner_wedding"
                    checked={formData.dinner_wedding ? true : false}
                    onChange={handleChange}
                    type="checkbox"
                    className={styles.checkbox}
                  />
                  {getJsonTextLanguage(language, "ConfirmationSection", 13)}
                </label>
                <label htmlFor="dinner_agriturism_wedding">
                  <input
                    id="dinner_agriturism_wedding"
                    name="dinner_agriturism_wedding"
                    type="checkbox"
                    checked={formData.dinner_agriturism_wedding ? true : false}
                    onChange={handleChange}
                    className={styles.checkbox}
                  />
                  {getJsonTextLanguage(language, "ConfirmationSection", 14)}
                </label>
                <label htmlFor="cant_come">
                  <input
                    id="cant_come"
                    name="cant_come"
                    checked={formData.cant_come ? true : false}
                    onChange={handleChange}
                    type="checkbox"
                    className={styles.checkbox}
                  />
                  {getJsonTextLanguage(language, "ConfirmationSection", 15)}
                </label>
              </div>
              <button className={styles.button}>
                {getJsonTextLanguage(language, "ConfirmationSection", 16)}
              </button>
            </fieldset>
          </form>
        </section>

        <Image src={tulip} alt="" className={styles.fifthTulip} />

        <section
          id="gifts"
          className={`${styles.giftsSection} ${styles.column}`}
        >
          <span className={styles.title}>
            <span className={styles.capitalLetter}>
              {getJsonTextLanguage(language, "giftsSection", 0)}
            </span>
            {getJsonTextLanguage(language, "giftsSection", 1)}
          </span>
          <Image src={presents} alt="" className={styles.bagagesImage} />
          <button
            className={styles.button}
            onClick={(e) => handleClick(e, "/gifts")}
          >
            {getJsonTextLanguage(language, "giftsSection", 2)}
          </button>
          <Image src={line_division} alt="" className={styles.lineDivision} />
        </section>
      </main>
      <footer>
        <span>
          {language == "pt-br"
            ? "SITE DESENVOLVIDO POR HENRIQUE KLUG"
            : "SITO SVILUPPATO DA HENRIQUE KLUG"}
        </span>
      </footer>
    </div>
  );
}
