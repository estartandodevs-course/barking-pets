import "./styles.scss";
import { Link } from "react-router-dom";
import { PatinhaBlack, Ponto } from "../../assets/icons";
import { Card } from "../Card";

export function CardHotel({ name, image, nota, id }) {
  return (
    <Card image={image} containerClass="card" classImages="card__image--hoteis">
      <div className="card__footer">
        <p className="card__footer--text">
          {name}
          <Link to={`/description_hotel/${id}`} className="card__footer--link">
            Saiba mais...
          </Link>
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
