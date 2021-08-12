import "./styles.scss";
import { PatinhaBlack, Ponto } from "../../assets/icons";
import { Card } from "../Card";
import { Favorite } from "../Favorite";

export function CardHotel({ name, image, nota }) {
  return (
    <Card image={image} containerClass="card" classImages="card__image--hoteis">
      <div className="card__footer">
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
