import React from "react";

import Input from "../../Components/Input";
import { Background, Container, Content, AnimationContainer } from "./style";

import { MdPassword, MdOutlineMailOutline } from "react-icons/md";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../Components/Button";
import api from "../../Components/Services/api";
import { toast } from "react-toastify";
import { Link, Redirect, useHistory } from "react-router-dom";

export const Login = ({ authenticated, setAuthenticated }) => {
  const schema = yup.object().shape({
    email: yup.string().required("Preencha um email!"),
    password: yup.string().required("Insira uma senha valida"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();
  const onSubmitFunction = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        const { token, user } = response.data;

        localStorage.setItem("@Hub:token", JSON.stringify(token));
        localStorage.setItem("@Hub:user", JSON.stringify(user));

        toast.success("Seja bem vindo!");
        setAuthenticated(true);
        return history.push("/mainPage");
      })
      .catch((err) => toast.error("ALGO DE ERRADO NÃO ESTA CERTO!"));
  };

  if (authenticated) {
    return <Redirect to="/mainPage" />;
  }

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <div>
            <h1> ID DEV</h1>
            <Button onClick={() => history.push("/signup")}>
              Cadastrar-se
            </Button>
          </div>

          {/*
            criar checkin para senha não segura
            <Input label="Senha" placeholder="Digite aqui sua senha"></Input> */}

          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h2>Crie sua conta</h2>
            <small>Rapido e grátis, vamos nessa</small>

            <Input
              register={register}
              name="email"
              icon={MdOutlineMailOutline}
              label="Email"
              placeholder="Digite aqui seu email"
              error={errors.email?.message}
            />

            <Input
              register={register}
              name="password"
              icon={MdPassword}
              label="Senha"
              placeholder="Digite aqui sua senha"
              type="password"
              error={errors.password?.message}
            />
            <Button type="submit">Entrar</Button>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
