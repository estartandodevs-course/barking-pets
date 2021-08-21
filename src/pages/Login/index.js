import React from "react";
import { Input } from "../../components";

const Login = () => {
  return (
    <>
      <Input type="email" placeholder="contato@exemplo.com" name="email">
        E-mail
      </Input>
      <Input type="password" placeholder="contato@exemplo.com" name="senha">
        Senha
      </Input>
    </>
  );
};

export default Login;
