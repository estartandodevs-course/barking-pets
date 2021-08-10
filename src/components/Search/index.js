import React, { useEffect, useState } from "react";
import { SearchIcon } from "../../assets/icons/index";
import "./styles.scss";

export const Search = () => {
  const [users, setUsers] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const loadUsers = async () => {
      const response = await fetch("https://reqres.in/api/users?page=2");
      const data = await response.json();
      setUsers(data.data);
    };
    loadUsers();
  }, []);

  const onChageHandle = (valueText) => {
    setText(valueText);
  };

  console.log(users);
  return (
    <div className="search">
      <h1>{text}</h1>

      <form className="search__form">
        <input
          type="text"
          name="input"
          id="input"
          placeholder="Digite aqui a sua busca"
          className="search__input"
          onChange={(e) => onChageHandle(e.target.value)}
          value={text}
        />
        <img src={SearchIcon} alt="lupa" className="search__form--icon" />
      </form>
    </div>
  );
};
