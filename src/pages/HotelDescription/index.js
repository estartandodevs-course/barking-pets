/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";
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
      <C.Header headerClass={S.headerMobile} />
      <C.MenuDesktop />
      {business && (
        <main key={business.id}>
          <div className={S.hotelDescriptionImages}>
            <Carousel pagination={false} enableAutoPlay>
              {business.images.map((image) => {
                return (
                  <img
                    src={image}
                    alt="fotos hotel"
                    className={S.hotelDescriptionImageHotel}
                  />
                );
              })}
            </Carousel>
            <img
              src={SairIcon}
              alt="Sair"
              className={S.hotelDescriptionImageSair}
            />
          </div>
          <div className={S.containerFirstInfos}>
            <div className={S.favoriteContainer}>
              <p className={S.hotelName}>{business.name}</p>
              <C.Favorite classFavorite={S.favoriteDescription} />
            </div>
            <div className={S.containerSecondInfos}>
              <div className={S.gradeContainer}>
                <img src={patinhaBrown} alt="Patinha" className={S.pawBrown} />
                <img src={pontoBrown} alt="ponto" className={S.pontoBrown} />
                <p className={S.hotelGrade}>{business.nota}</p>
              </div>
              <p className={S.hotelPrice}>{business.price}</p>
              <div className={S.locationContainer}>
                <img
                  className={S.locationHeart}
                  src={locationHeartBrown}
                  alt="simbolo de localização marrom"
                />
                <p>{`${business.endereco} ${business.pais} `}</p>
              </div>
            </div>
          </div>
          <div className={S.containerThirdInfos}>
            <div className={S.infoContainer}>
              <p className={S.descriptionInfos}>Informações do hotel:</p>
              <p>{business.descricao}</p>
            </div>
            <div className={S.commodityListContainer}>
              <p className={S.descriptionInfos}>Comodidades:</p>
              <ul className={S.commodityList}>
                {business.comodidades.map((comodidade) => {
                  return (
                    <li>
                      <img src={patinhaBrown} alt="patinha marron" />
                      <span className={S.commodityItem}>{comodidade}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <C.EstablishmentPrice
            price={business.price}
            establishmentClass={S.establishmentClass}
          />
          <div className={S.linkDescriptionContainer}>
            <p className={S.descriptionInfos}>Avaliações:</p>
            <C.PublishedComment text="testando" blur />
          </div>

          <span className={S.linkDescription}>
            <Link to="/entrar">Clique aqui</Link>
            {" para ter acesso as publicações"}
          </span>

          <C.Comment bussiness={business.name} />
          <C.BackTop />
          <C.Footer />
        </main>
      )}
    </section>
  );
};

export default HotelDescription;
