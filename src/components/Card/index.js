import React from "react";
import "./styles.scss";

export function Card({ children, ...dados }) {
  const { containerClass, image, id, classImages } = dados;

  return (
    <div key={id} className={containerClass}>
      <img className={classImages} src={image} alt="" />
      <div className="card__item--footer">{children}</div>
    </div>
  );
}
