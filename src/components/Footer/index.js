import "./styles.scss";
import facebook from "../../assets/icons/facebook-icon.svg";
import instagram from "../../assets/icons/instagram-icon.svg";
import Petlogo from "../../assets/img/Pet-Doodles.svg";

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
              src={instagram}
              alt="icone instagram"
              className="footer__icons"
            />
            <img
              src={facebook}
              alt="icone facebook"
              className="footer__icons--facebook"
            />
          </div>
        </div>
        <img src={Petlogo} alt="icone petlogo" />
      </footer>
    </>
  );
}
