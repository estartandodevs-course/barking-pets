import "./styles.scss";
import * as I from "../../assets/icons";
import Petlogo from "../../assets/img/pet-footer.svg";

export function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__text--left">
          <p className="footer__text">Entrar em contato</p>
          <p className="footer__text--email">Barkingpets@hotmail.com</p>
        </div>
        <div className="footer__text--right">
          <p className="footer__text">Redes Sociais:</p>
          <div className="footer__container">
            <img
              src={I.InstagramIcon}
              alt="icone instagram"
              className="footer__icons"
            />
            <img
              src={I.FacebookIcon}
              alt="icone facebook"
              className="footer__icons--facebook"
            />
          </div>
        </div>
        <img
          className="footer__icons--petlogo"
          src={Petlogo}
          alt="icone petlogo"
        />
      </footer>
    </>
  );
}
