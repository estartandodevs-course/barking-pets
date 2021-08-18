import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SairIcon } from "../../assets/icons";
import { EstablishmentPrice } from "../../components";
import { getBusinessById } from "../../services/business";
import "./styles.scss";

const HotelDescription = () => {
  const [business, setBusiness] = useState();
  const { id } = useParams();
  const idInNumber = Number(id);

  useEffect(() => {
    const data = getBusinessById(idInNumber);
    setBusiness(data);
  }, []);

  return (
    <section className="hotelDescription">
      {business && (
        <main key={business.id}>
          <div className="hotelDescription__images">
            <img
              src={SairIcon}
              alt="Sair"
              className="hotelDescription__image--sair"
            />
            <img
              src={business.image}
              alt={business.name}
              className="hotelDescription__image--hotel"
            />
          </div>
          <h1>{business.name}</h1>
          <p>{business.nota}</p>
          <EstablishmentPrice />
        </main>
      )}
    </section>
  );
};

export default HotelDescription;
