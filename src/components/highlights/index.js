import React from "react";
import "./styles.scss";

export default function Card({ id, image, children }) {
  return (
    <div key={id} className="card__item">
      <img className="card__item--image" src={image} alt="" />
      <div className="card__item--footer">{children}</div>
    </div>
  );
}
