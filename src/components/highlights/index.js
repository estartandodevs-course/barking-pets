import React from "react";
import "./styles.scss";

export default function highlights({ data }) {
  return (
    <>
      <div className="">
        <p className="highlights__titleCard--detaque">Destaques</p>
        <div className="highlights__linha" />
      </div>

      <div className="highlights">
        {data?.map((cardItem) => {
          return (
            <div key={cardItem.id} className="highlights__item">
              <img
                className="highlights__item--image"
                src={cardItem.image}
                alt=""
              />
              <div className="highlights__item--footer">
                <p className="highlights_item--footer__text">
                  {cardItem.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
