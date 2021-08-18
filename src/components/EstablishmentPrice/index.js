import React from "react";
import { Button } from "../Button";
import "./styles.scss";

export function EstablishmentPrice({ price }) {
  return (
    <div className="establishment-price">
      <div className="establishment-price__texts">
        <p className="establishment-price__texts--text">
          Valor médio da diária:
        </p>
        <p className="establishment-price__texts--price">{price}</p>
      </div>
      <Button classButton="establishment-price__button">
        Entrar em contato
      </Button>
    </div>
  );
}
