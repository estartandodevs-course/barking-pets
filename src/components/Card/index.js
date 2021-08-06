import React from "react";
import "./styles.scss";

export function Card({ children, ...data }) {
  const { containerClass, image, id, classImages } = data;

  return (
    <div key={id} className={containerClass}>
      <img className={classImages} src={image} alt="" />
      <div className="card__item--footer">{children}</div>
    </div>
  );
}
