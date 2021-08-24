import React from "react";
import * as C from "../../components";
import { petLogin } from "../../assets/img";

import "./styles.scss";

const Login = () => {
  return (
    <>
      <C.Header />
      <C.MenuDesktop />

      <div className="login">
        <p className="login-mais">Mais Opções</p>
        <p className="login-text">
          Suporte ao usuário FAQ Sobre o Barking Pets Criar perfil Profissional
        </p>

        <div className="login-img">
          <img src={petLogin} alt="pet" className="img-dog" />
        </div>

        <div className="login-input">
          <p className="login-welcome">Bem vindo(a) ao</p>
          <h1 className="login-pets">Barking Pets</h1>

          <C.Input type="email" placeholder="contato@exemplo.com" name="email">
            E-mail
          </C.Input>
          <C.Input
            type="password"
            placeholder="Utilize letras e números"
            name="senha"
          >
            Senha
          </C.Input>
          <C.Button name="Login" />
        </div>
      </div>

      <C.Footer classname="loginFooter" />
    </>
  );
};

export default Login;
