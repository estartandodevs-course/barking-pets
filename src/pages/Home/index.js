import React from "react";

import { Header, SearchComponent } from "../../components";
import Card from "../../components/highlights";

import { cards } from "../../services/api";
import "./styles.scss";

const Home = () => {
  return (
    <>
      <Header />
      <SearchComponent />
      <p>Destaques</p>
      <div className="carrousel">
        {cards.map(({ id, image, description }) => {
          return (
            <Card id={id} image={image}>
              <p>{description}</p>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Home;
