/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { Button } from "../Button";
import { patinhaBrown, PatinhaDisable } from "../../assets/icons";

import "./styles.scss";

export function Comment({ bussiness }) {
  const pawsRating = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState(0);
  return (
    <>
      <div className="comment">
        <p className="comment__title">{`Já esteve no ${bussiness}?`}</p>
        <p className="comment__title">Publique aqui sua avaliação:</p>
        <textarea
          placeholder="Digite seu comentário aqui..."
          className="comment--textarea"
        />
        <div className="comment__icons">
          {pawsRating.map((number) => {
            const isActive = number <= rating;
            const src = isActive ? patinhaBrown : PatinhaDisable;
            const onClick = () => setRating(number);

            return (
              <div className="comment__icons--holder">
                <img
                  className="comment__icons--paw"
                  onClick={onClick}
                  src={src}
                  alt="comment--icon"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="comment--boton">
        <Button classButton="comment__button">
          <p className="comment__button--text">Publicar</p>
        </Button>
      </div>
    </>
  );
}
