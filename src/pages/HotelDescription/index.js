import React from "react";
import { useParams } from "react-router-dom";
import { ButtonContact } from "../../components";
import "./styles.scss";

const HotelDescription = ({ data }) => {
  const { id } = useParams();
  const idInNumber = JSON.parse(id);

  return (
    <section className="Full">
      {data
        .filter((hotel) => idInNumber === hotel.id)
        .map((hotel) => {
          return (
            <div key={hotel.id}>
              <h1>{hotel.name}</h1>
              <img src={hotel.image} alt={hotel.name} />
              <p>{hotel.nota}</p>
              <ButtonContact classButton="">Entrar Em Contato</ButtonContact>
            </div>
          );
        })}
    </section>
  );
};

export default HotelDescription;
