import React, { useEffect, useRef } from "react";
import "./styles.scss";
import { FilterIcon } from "../../assets/icons";
import { FilterItem } from "../FilterItem";

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
            return (
              <FilterItem
                title={title}
                index={index}
                filter={filter}
                setFilter={setFilter}
                detailsRef={detailsRef}
              />
            );
          })}
        </div>
      </details>
    </>
  );
}
