import "./styles.scss";

export function Header({ headerClass }) {
  return (
    <>
      <header className={`header ${headerClass}`}>
        <h1 className="header__titulo">Barking Pets</h1>
      </header>
    </>
  );
}
