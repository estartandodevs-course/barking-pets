import "./styles.scss";

export function FilterItem({ title, index, filter, setFilter, detailsRef }) {
  const isSelected = title === filter;
  const aClass = isSelected ? "filter__text--selected" : " ";
  const detailsReef = detailsRef;
  const onClick = () => {
    setFilter(title);
    if (window.innerWidth < 768) {
      detailsReef.current.open = false;
    }
  };
  const onKeyPress = () => {
    setFilter(title);
  };
  return (
    <span
      role="button"
      tabIndex={index}
      onKeyPress={onKeyPress}
      onClick={onClick}
      key={title}
      className={`filter__text ${aClass}`}
    >
      <p>{title}</p>
    </span>
  );
}
