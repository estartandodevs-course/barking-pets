import { Card } from "../Card";
import "./styles.scss";

export function CardTips({ image, description }) {
  return (
    <Card
      image={image}
      containerClass="card card--tips"
      classFooter="card__footer--container"
      classImages="card__image--hoteis"
    >
      <div className="card__footer--animais">
        <p className="card__footer--text--animais">{description}</p>
      </div>
    </Card>
  );
}
