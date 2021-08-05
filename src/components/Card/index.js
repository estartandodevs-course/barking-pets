import React from "react";
import "./styles.scss";

export function Card({ children, ...dados }) {
  const { className, image, id } = dados;

  return (
    <div key={id} className={className}>
      <img className="card__item--image" src={image} alt="" />
      <div className="card__item--footer">{children}</div>
    </div>
  );
}
