import { Card } from "../Card";

export function CardHotel({ image, styles, children }) {
  return (
    <Card
      image={image}
      containerClass={`card ${styles?.container}`}
      classFooter={`card__footer ${styles?.footer}`}
      classImages={`card__image--hoteis ${styles?.picture}`}
    >
      {children}
    </Card>
  );
}
