import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import * as C from "../../components";
import { petLogin } from "../../assets/img";

import * as S from "./login.module.scss";
import { FilteredBusinessContext } from "../../contexts";

const Login = () => {
  const options = [
    "Suporte ao usuário",
    "FAQ",
    "Sobre o Barking Pets",
    "Criar perfil Profissional",
  ];

  const history = useHistory();
  const { setIsLogged } = useContext(FilteredBusinessContext);

  const onClick = () => {
    setIsLogged(true);
    history.goBack();
  };

  return (
    <>
      <C.Header />
      <C.Menu />
      <C.MenuDesktop />

      <div className={S.loginContainer}>
        <div className={S.listOptionsContainer}>
          <ul className={S.listOptions}>
            Mais opções
            {options.map((option) => {
              return <li>{option}</li>;
            })}
          </ul>

          <img src={petLogin} alt="pet" />
        </div>
        <div className={S.infoContainer}>
          <p className={S.loginText}>Bem vindo(a) ao</p>
          <p className={S.productName}>Barking Pets</p>
          <div className={S.inputContainer}>
            <C.Input
              type="email"
              placeholder="contato@exemplo.com"
              name="email"
            >
              <p className={S.inputText}>E-mail</p>
            </C.Input>
            <C.Input
              type="password"
              placeholder="Utilize letras e números"
              name="senha"
            >
              <p className={S.passwordInput}>Senha</p>
            </C.Input>
            <C.Button classButton={S.loginButton} onClick={onClick}>
              <p>Login</p>
            </C.Button>
            <p className={S.forgotPassword}>Esqueci minha senha</p>
          </div>
        </div>
      </div>

      <C.Footer classFooter={S.loginFooter} />
    </>
  );
};

export default Login;
