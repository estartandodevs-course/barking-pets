import * as C from "../../components/index";
import { cards, hoteis } from "../../services/api";
import "./styles.scss";

const Home = () => {
  return (
    <>
      <C.Header />
      <C.MenuDesktop />
      <C.Menu />
      <div className="text">
        <p>Seja bem vindo, </p>

        <p> O que vamos fazer hoje?</p>
      </div>
      <C.Search />
      <section id="cards-hoteis">
        <div className="title-section">
          <p className="title-section--text">Hotéis mais avaliados</p>
          <div className="title-section--line" />
        </div>

        <div className="card-section">
          {hoteis.map(({ id, name, image, nota }) => {
            return (
              <C.CardHotel key={id} name={name} image={image} nota={nota} />
            );
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
