import React from "react";

import "./styles.scss";

export function PublishedComment({ image, text, name, blur }) {
  return (
    <div className="published-comment">
      <div className="published-comment__person">
        <img alt="" src={image} className="published-comment__person--image" />
        <p className="published-comment--text">{name}</p>
      </div>
      <p
        className={`published-comment--text published-comment__opinion ${
          blur && "published-comment--blur"
        }`}
      >
        {text}
      </p>
    </div>
  );
}
