import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  SairIcon,
  patinhaBrown,
  pontoBrown,
  locationHeartBrown,
} from "../../assets/icons";
import * as C from "../../components";
import { getBusinessById } from "../../services/business";
import * as S from "./hotelDescription.module.scss";

const HotelDescription = () => {
  const [business, setBusiness] = useState();
  const { id } = useParams();
  const idInNumber = Number(id);

  useEffect(() => {
    const data = getBusinessById(idInNumber);
    setBusiness(data);
  }, []);

  return (
    <section className={S.hotelDescription}>
      {business && (
        <main key={business.id}>
          <div className={S.hotelDescriptionImages}>
            <img
              src={SairIcon}
              alt="Sair"
              className={S.hotelDescriptionImageSair}
            />
            <img
              src={business.image}
              alt={business.name}
              className={S.hotelDescriptionImageHotel}
            />
            <C.Favorite classFavorite={S.favoriteDescription} />
          </div>
          <p className={S.hotelName}>{business.name}</p>
          <div className={S.gradeContainer}>
            <img src={patinhaBrown} alt="Patinha" className={S.pawBrown} />
            <img src={pontoBrown} alt="ponto" className={S.pontoBrown} />
            <p className={S.hotelGrade}>{business.nota}</p>
          </div>
          <p className={S.hotelPrice}>{business.price}</p>
          <div className={S.locationContainer}>
            <img src={locationHeartBrown} alt="simbolo de localização marrom" />
            <p>{business.endereco}</p>
          </div>
          <p>{business.pais}</p>
          <p className={S.descriptionInfos}>Informações do hotel:</p>
          <p>{business.descricao}</p>
          <p className={S.descriptionInfos}>Comodidades:</p>
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
          <p className={S.descriptionInfos}>Avaliações:</p>
          <C.EstablishmentPrice price={business.price} />
          <C.PublishedComment text="testando" blur />
          <a className={S.hotelPublicationsLinks}>
            Clique aqui para ter acesso as publicações
          </a>
          <C.Comment bussiness={business.name} />
          <C.BackTop />
          <C.Footer />
        </main>
      )}
    </section>
  );
};

export default HotelDescription;
