import "./styles.scss";
import { Card } from "../Card";

export function CardTips({ image, description }) {
  return (
    <Card image={image} containerClass="card" classImages="card__image--hoteis">
      <div className="card__footer--animais">
        <p className="card__footer--text--animais">{description}</p>
      </div>
    </Card>
  );
}
