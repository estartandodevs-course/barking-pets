import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SairIcon, patinhaBrown } from "../../assets/icons";
import { BackTop, EstablishmentPrice } from "../../components";
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
          <p>{business.price}</p>
          <p>{business.endereco}</p>
          <p>{business.pais}</p>
          <h3>Informações do hotel:</h3>
          <p>{business.descricao}</p>
          <h3>Comodidades:</h3>
          <ul>
            {business.comodidades.map((comodidade) => {
              return (
                <li>
                  <img src={patinhaBrown} alt="patinha marron" />
                  <span>{comodidade}</span>
                </li>
              );
            })}
          </ul>
          <h3>Avaliações:</h3>
          <EstablishmentPrice price={business.price} />
          <BackTop />
        </main>
      )}
    </section>
  );
};

export default HotelDescription;
