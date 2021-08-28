/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
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
import { comment1, comment2, comment3 } from "../../assets/img";
import { FilteredBusinessContext } from "../../contexts";

const HotelDescription = () => {
  const [business, setBusiness] = useState();
  const { id } = useParams();
  const idInNumber = Number(id);
  const { isLogged } = useContext(FilteredBusinessContext);

  const history = useHistory();

  useEffect(() => {
    const data = getBusinessById(idInNumber);
    setBusiness(data);
  }, []);

  const carouselRef = useRef();

  const onNextStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      carouselRef.current.goTo(0);
    }
  };

  return (
    <section className={S.hotelDescription}>
      <C.Header headerClass={S.headerMobile} />
      <C.MenuDesktop />
      {business && (
        <main key={business.id}>
          <div className={S.hotelDescriptionImages}>
            <Carousel
              pagination={false}
              enableAutoPlay
              autoPlaySpeed={5000}
              transitionMs={1500}
              onNextStart={onNextStart}
              ref={carouselRef}
              disableArrowsOnEnd={false}
              renderArrow={({ type, onClick }) => {
                return (
                  <div className={S.carouselArrow} onClick={onClick}>
                    {type === "PREV" ? "<" : ">"}
                  </div>
                );
              }}
            >
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
              onClick={() => {
                history.goBack();
              }}
              aria-hidden="true"
            />
          </div>
          <div className={S.containerFirstInfos}>
            <div className={S.favoriteContainer}>
              <p className={S.hotelName}>{business.name}</p>
              <C.Favorite classFavorite={S.favoriteDescription} />
            </div>
            <div className={S.containerSecondInfos}>
              <div className={S.gradeContainer}>
                <img src={patinhaBrown} alt="Patinha" />
                <img src={pontoBrown} alt="ponto" />
                <p className={S.hotelGrade}>{business.nota}</p>
              </div>
              <p className={S.hotelPrice}>{business.price}</p>
              <div className={S.locationContainer}>
                <img
                  src={locationHeartBrown}
                  alt="simbolo de localização marrom"
                />
                <p>{`${business.endereco} ${business.pais} `}</p>
              </div>
            </div>
          </div>
          <div className={S.containerThirdInfos}>
            <div className={S.infoContainer}>
              <p className={S.descriptionInfos}>
                Informações do Estabelecimento:
              </p>
              <p>{business.descricao}</p>
            </div>
            <div className={S.commodityListContainer}>
              <p className={S.descriptionInfos}>Comodidades:</p>
              <ul className={S.commodityList}>
                {business.comodidades.map((comodidade) => {
                  return (
                    <li className={S.commodityItem}>
                      <img src={patinhaBrown} alt="patinha marron" />
                      <span>{comodidade}</span>
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
            <C.PublishedComment
              image={comment1}
              name="Vanessa C."
              text="Um lugar muito agradavel para você e para seu pet Tive uma experiencia incrivel, funcionarios atenciosos! Tive uma experiencia incrivel, funcionarios atenciosos!"
              blur={!isLogged}
            />
            <C.PublishedComment
              image={comment2}
              name="Luiz M."
              text="Tive uma experiencia incrivel, funcionarios atenciosos! voltaria mais vezes"
              blur={!isLogged}
            />
            <C.PublishedComment
              image={comment3}
              name="Mirla O."
              text="Tive uma experiencia incrivel, funcionarios atenciosos! Tive uma experiencia incrivel, funcionarios atenciosos!"
              blur={!isLogged}
            />
          </div>

          <span className={S.linkDescription}>
            <Link to="/entrar" className={S.linkDescriptionClique}>
              Clique aqui
            </Link>
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
