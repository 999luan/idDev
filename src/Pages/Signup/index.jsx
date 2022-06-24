import React from "react";

import Input from "../../Components/Input";
import { Background, Container, Content, AnimationContainer } from "./styles";

import { BiUser } from "react-icons/bi";
import { BsCardChecklist, BsPhone } from "react-icons/bs";
import { MdPassword, MdOutlineMailOutline } from "react-icons/md";
import { GiBrain } from "react-icons/gi";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../Components/Button";
import api from "../../Components/Services/api";
import { toast } from "react-toastify";
import { Link, Redirect, useHistory } from "react-router-dom";

export const Signup = ({ authenticated, setAuthenticated }) => {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Preencha um nome!"),
    email: yup.string().required("Preencha um email!"),
    password: yup
      .string()
      .min(8, "Minimo 8 digitos!")
      .required("Insira uma senha valida"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas não coincidem!")
      .required("campo obrigatorio"),
    bio: yup.string().required("Campo Obrigatorio"),
    contact: yup.string().required("Insira um numero valido"),
    course_module: yup.string(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = ({
    name,
    email,
    password,
    bio,
    contact,
    course_module,
  }) => {
    const user = {
      name,
      email,
      password,
      bio,
      contact,
      course_module,
    };
    console.log(user);

    api
      .post("/users", user)
      .then((response) => {
        toast.success("Conta criado com sucesso!");
        return history.push("/login");
      })
      .catch((err) => toast.error("aff!, deu ruim"));
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
            <h1> ID Dev</h1>
            <Button onClick={() => history.push("/")}>Voltar</Button>

            {/* <p>
              Ou faça um login 
            </p> */}
          </div>
          {/*
            criar checkin para senha não segura
            <Input label="Senha" placeholder="Digite aqui sua senha"></Input> */}
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <Input
              name="name"
              register={register}
              icon={BiUser}
              label="Nome"
              placeholder="Digite aqui seu nome"
              error={errors.name?.message}
            />
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
            <Input
              register={register}
              name="confirmPassword"
              icon={MdPassword}
              label="Confirmar Senha"
              placeholder="Digite novamente sua senha"
              type="password"
              error={errors.confirmPassword?.message}
            ></Input>
            <Input
              register={register}
              name="bio"
              icon={GiBrain}
              label="Bio"
              placeholder="Uma frase sobre voce"
              error={errors.bio?.message}
            />
            <Input
              register={register}
              name="contact"
              icon={BsPhone}
              label="Contato"
              placeholder="Opção de Contato"
              error={errors.contact?.message}
            />
            <Input
              register={register}
              name="course_module"
              icon={BsCardChecklist}
              label="Selecionar módulo"
              placeholder="Primeiro Modulo"
              error={errors.module?.message}
            />

            <Button type="submit">enviar</Button>
          </form>
          {/* <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h2>Crie sua conta</h2>
            <small>Rapido e grátis, vamos nessa</small>
            <Input
              name="name"
              register={register}
              icon={BiUser}
              label="Nome"
              placeholder="Digite aqui seu nome"
              error={errors.name?.message}
            ></Input>
            <Input
              register={register}
              name="Email"
              icon={MdOutlineMailOutline}
              label="Email"
              placeholder="Digite aqui seu email"
              error={errors.name?.message}
            ></Input>

            <Input
              register={register}
              name="password"
              icon={MdPassword}
              label="Senha"
              placeholder="Digite aqui sua senha"
              type="password"
              error={errors.password?.message}
            ></Input>

            <Input
              register={register}
              name="confirmPassword"
              icon={MdPassword}
              label="Confirmar Senha"
              placeholder="Digite novamente sua senha"
              type="password"
              error={errors.confirmPassword?.message}
            ></Input>
            <Input
              register={register}
              name="bio"
              icon={GiBrain}
              label="Bio"
              placeholder="Uma frase sobre voce"
              error={errors.bio?.message}
            ></Input>
            <Input
              register={register}
              name="contact"
              icon={BsPhone}
              label="Contato"
              placeholder="Opção de Contato"
              error={errors.contact?.message}
            ></Input>
            <Input
              register={register}
              name="course_module"
              icon={BsCardChecklist}
              label="Selecionar módulo"
              placeholder="Primeiro Modulo"
              error={errors.module?.message}
            ></Input>
            <input type="submit" placeholder=" next" />
            <button type="submit">Cadastrar-se</button>
            {/* <Button>Botao</Button> */}
          {/* </form> */}
        </AnimationContainer>
      </Content>
    </Container>
  );
};
