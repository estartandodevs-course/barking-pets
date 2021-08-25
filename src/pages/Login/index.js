import React from "react";
import * as C from "../../components";
import { petLogin } from "../../assets/img";

import "./styles.scss";

const Login = () => {
  const options = [
    "Suporte ao usuário",
    "FAQ",
    "Sobre o Barking Pets",
    "Criar perfil Profissional",
  ];

  return (
    <>
      <C.Header />
      <C.MenuDesktop />

      <div className="login-container">
        <div className="white-div">
          <ul className="list-options">
            {" "}
            Mais opções
            {options.map((option) => {
              return <li>{option}</li>;
            })}
          </ul>

          <img src={petLogin} alt="pet" className="img-dog" />
        </div>
        <div className="yellow-div">
          <p className="loginText">Bem vindo(a) ao</p>
          <p className="productName">Barking Pets</p>
          <div className="inputContainet">
            <C.Input
              type="email"
              placeholder="contato@exemplo.com"
              name="email"
            >
              <p className="inputText">E-mail</p>
            </C.Input>
            <C.Input
              type="password"
              placeholder="Utilize letras e números"
              name="senha"
            >
              <p className="inputText">Senha</p>
            </C.Input>
            <C.Button classButton="login-button">
              <p>Login</p>
            </C.Button>
            <p className="forgot-password">Esqueci minha senha</p>
          </div>
        </div>
      </div>

      <C.Footer classFooter="loginFooter" />
    </>
  );
};

export default Login;
