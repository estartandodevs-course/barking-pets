import React from "react";
import "./styles.scss";

export function Card({ children, ...data }) {
  const { containerClass, image, id, classImages, classFooter } = data;

  return (
    <div key={id} className={containerClass}>
      <img className={classImages} src={image} alt="" />
      <div className={classFooter}>{children}</div>
    </div>
  );
}
