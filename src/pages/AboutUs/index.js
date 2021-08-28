import React from "react";
import { useHistory } from "react-router-dom";
import { SairIcon } from "../../assets/icons";
import { AboutUs1, AboutUs2, AboutUs3, AboutUs4 } from "../../assets/img";
import { BackTop, Button, Footer, Header, MenuDesktop } from "../../components";
import "./styles.scss";

const AboutUs = () => {
  const hitory = useHistory();

  const backPage = () => {
    hitory.goBack();
  };

  return (
    <div className="aboutUs">
      <Header />
      <MenuDesktop />
      <div className="tittleSection">
        <p className="tittleSection--text">o que é o barking pets?</p>
        <img
          src={SairIcon}
          alt="iconeSair"
          className="tittleSection--iconSair"
          onClick={backPage}
          aria-hidden="true"
        />
      </div>

      <div className="aboutUs1">
        <img src={AboutUs1} alt="" className="aboutUs1--image" />
        <p className="aboutUs1--text">
          Já imaginou ter um local onde você pode encontrar tudo o quê precisa
          em relação ao seu PEt? Se sim, você com certeza pensou em Barking
          Pets.
        </p>
      </div>

      <div className="aboutUs2">
        <img src={AboutUs2} alt="" className="aboutUs2--image" />
        <div className="aboutUs2__box">
          <p className="AboutUs2__box--text">
            A plataforma pensada para você que como nós, ama seu peludinho, e
            também ama viajar, aqui acabou a dor de cabeça na hora de escolher
            entre ficar grudadinho com eles, ou se ele for do tipo caseiro,
            encontrar o melhor hotel de Pets para acomodar seu bichinho.
          </p>
        </div>
      </div>

      <div className="aboutUs3">
        <img src={AboutUs3} alt="" className="aboutUs3--image" />
        <p className="aboutUs3--text">
          Aqui você também poderá criar uma carteira digital para seu Pet, o quê
          irá facilitar na hora de viajar com ele, se hospedar com ele e até na
          hora das consultas clinicas, pois criamos um histórico de vacinas,
          remédios e claro, locais onde seu Pet, se hospedou, para você nunca
          mais ter que se preocupar com isso.
        </p>
      </div>

      <div className="aboutUs4">
        <img src={AboutUs4} alt="" className="aboutUs4--image" />
      </div>

      <div className="buttonsAboutUs">
        <Button classButton="buttonAboutUs--button"> Vamos começar! </Button>
      </div>
      <div className="buttonBack">
        <BackTop />
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
