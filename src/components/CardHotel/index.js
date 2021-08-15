// import { PatinhaBlack, Ponto } from "../../assets/icons";
import { Card } from "../Card";

export function CardHotel({
  // name,
  image,
  //  nota,
  styles,
  children,
}) {
  return (
    <Card
      image={image}
      containerClass={`card ${styles?.container}`}
      classFooter={`card__footer ${styles?.footer}`}
      classImages={`card__image--hoteis ${styles?.picture}`}
    >
      <div>
        {children}
        {/* <p className={`card__footer--text ${styles?.text}`}>
          {name}
          <a href="top" className={`card__footer--link ${styles?.paw}`}>
            Saiba mais...
          </a>
        </p>
        <div className={`card__footer--patinha-black-and-nota ${styles?.link}`}>
          <img src={PatinhaBlack} alt="patinha" />
          <img src={Ponto} alt="ponto" />
          <p>{nota}</p>
        </div> */}
      </div>
    </Card>
  );
}
