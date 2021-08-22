/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// import { useState } from "react";
import { Link } from "react-router-dom";

import * as C from "../../components/index";
import { PatinhaBlack, Ponto } from "../../assets/icons";

import { cards, allBusiness } from "../../services/api";

import { states } from "../../services/mockLocations";

import "./styles.scss";
import * as S from "./home.module.scss";

const Home = () => {
  return (
    <>
      <C.Header />
      <C.MenuDesktop />
      <C.Menu />
      <div className="home-description">
        <p>Seja bem vindo, </p>
        <p> O que vamos fazer hoje?</p>
      </div>
      <C.Search suggestions={states} />
      <section id="cards-hoteis" className="card-overflow">
        <div className={S.titleSection}>
          <p className="title-section--text">Hotéis mais avaliados</p>
          <div className="title-section--line" />
        </div>

        <div className="card-section">
          {allBusiness.map(({ id, name, image, nota }) => {
            return (
              <C.CardHotel key={id} image={image}>
                <div className={S.footerContainer}>
                  <div className={S.titleContainer}>
                    <p className={S.hotelTitle}>{name}</p>

                    <img
                      className={S.simbolsHome}
                      src={PatinhaBlack}
                      alt="patinha"
                    />
                    <img src={Ponto} alt="ponto" />
                    <p className={S.hotelGrade}>{nota}</p>
                  </div>
                  <Link
                    to={`/description_hotel/${id}`}
                    className="card__footer--link"
                  >
                    Saiba mais...
                  </Link>
                </div>
              </C.CardHotel>
            );
          })}
        </div>
      </section>
      <section id="cards-animais" className="card-overflow">
        <div className={S.titleSection}>
          <p className="title-section--text">Veja nossas dicas</p>
          <div className="title-section--line" />
        </div>

        <div className="card-section">
          {cards.map(({ id, image, description }) => {
            return (
              <C.CardTips key={id} image={image} description={description} />
            );
          })}
        </div>
      </section>

      <C.Footer />
    </>
  );
};

export default Home;
