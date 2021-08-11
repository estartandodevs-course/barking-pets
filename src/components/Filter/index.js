import React, { useEffect, useRef } from "react";
import "./styles.scss";
import { FilterIcon } from "../../assets/icons";

export function Filter({ filter, setFilter }) {
  const filterLinks = [
    { title: "Hoteis Pet Friendly" },
    { title: "Hoteis para seu Pet" },
    { title: "Restaurantes Pet Friendly" },
    { title: "Clinicas Veterinarias" },
    { title: "Pet Park" },
  ];
  const detailsRef = useRef();
  useEffect(() => {
    detailsRef.current.open = true;
  }, []);
  return (
    <>
      <details ref={detailsRef}>
        <summary>
          <img className="filter--icon" src={FilterIcon} alt="Filter Icon" />
        </summary>

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
      </details>
    </>
  );
}
