import React from "react";

import { CardHotel, CardTips, Header } from "../../components";

import { cards, hoteis } from "../../services/api";
import "./styles.scss";

const Home = () => {
  return (
    <>
      <Header />
      <section id="cards-hoteis">
        <div className="title-section">
          <p className="title-section--text">Hotéis mais avaliados</p>
          <div className="title-section--line" />
        </div>

        <div className="card-section">
          {hoteis.map(({ id, name, image, nota }) => {
            return <CardHotel key={id} name={name} image={image} nota={nota} />;
          })}
        </div>
      </section>

      <section id="cards-animais">
        <div className="title-section">
          <p className="title-section--text">Veja nossas dicas</p>
          <div className="title-section--line" />
        </div>

        <div className="card-section">
          {cards.map(({ id, image, description }) => {
            return (
              <CardTips key={id} image={image} description={description} />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
