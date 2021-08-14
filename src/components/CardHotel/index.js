import { PatinhaBlack, Ponto } from "../../assets/icons";
import { Card } from "../Card";

export function CardHotel({ name, image, nota }) {
  return (
    <Card
      image={image}
      containerClass="card"
      classFooter="card__footer"
      classImages="card__image--hoteis"
    >
      <div>
        <p className="card__footer--text">
          {name}
          <a href="top" className="card__footer--link">
            Saiba mais...
          </a>
        </p>
        <div className="card__footer--patinha-black-and-nota">
          <img src={PatinhaBlack} alt="patinha" />
          <img src={Ponto} alt="ponto" />
          <p>{nota}</p>
        </div>
      </div>
    </Card>
  );
}
