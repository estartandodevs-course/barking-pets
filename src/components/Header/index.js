import patinha1 from "../../assets/img/patinha-header.svg";
import patinha2 from "../../assets/img/patinha-header2.svg";
import "./styles.scss";

export function Header() {
  return (
    <>
      <header className="header">
        <img src={patinha1} alt="patinhas1" className="header--image" />
        <img src={patinha2} alt="patinhas2" className="header--image" />

      </header>
      <h1 className="titulo">Barking Pets</h1>
    </>
  );
}
