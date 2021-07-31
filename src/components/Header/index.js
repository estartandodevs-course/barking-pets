import patinha from "../../assets/img/patinha.png";
import "./styles.scss";

export function Header() {
  return (
    <>
      <header className="header">
        <img src={patinha} alt="logo barking pets" className="header--logo" />
        <h1 className="header--titulo">Barking Pets</h1>
      </header>
    </>
  );
}
