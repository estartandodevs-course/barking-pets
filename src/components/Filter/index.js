import React, { useEffect, useRef } from "react";
import "./styles.scss";
import { FilterIcon } from "../../assets/icons";
import { FilterItem } from "../FilterItem";

export const filterTypes = {
  HOT_FRIENDLY: "Hoteis Pet Friendly",
  HOT_PET: "Hoteis para seu Pet",
  REST_PET: "Restaurantes Pet Friendly",
  CLIN_VET: "Clinicas Veterinarias",
  PET_PARK: "Pet Park",
};

export function Filter({ filter, setFilter }) {
  const filterLinks = [
    { title: filterTypes.HOT_FRIENDLY },
    { title: filterTypes.HOT_PET },
    { title: filterTypes.REST_PET },
    { title: filterTypes.CLIN_VET },
    { title: filterTypes.PET_PARK },
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
