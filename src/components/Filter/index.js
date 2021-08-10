import React from "react";

import "./styles.scss";

export function Filter({ filter, setFilter }) {
  const filterLinks = [
    { title: "Hoteis Pet Friendly" },
    { title: "Hoteis para seu Pet" },
    { title: "Restaurantes Pet Friendly" },
    { title: "Clinicas Veterinarias" },
    { title: "Pet Park" },
  ];

  return (
    <div className="filter">
      {filterLinks.map(({ title }, index) => {
        const isSelected = title === filter;
        const aClass = isSelected ? "filter__text--selected" : " ";
        const onClick = () => {
          setFilter(title);
        };
        const onKeyPress = () => {
          setFilter(title);
        };

        return (
          <span
            role="button"
            tabIndex={index}
            onKeyPress={onKeyPress}
            onClick={onClick}
            key={title}
            className={`filter__text ${aClass}`}
          >
            <p>{title}</p>
          </span>
        );
      })}
    </div>
  );
}
