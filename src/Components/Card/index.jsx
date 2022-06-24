import React from "react";
import { Container } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import api from "../Services/api";
import Input from "../Input";
import Button from "../Button";
import { AiOutlineClose } from "react-icons/ai";

const Card = ({ onClick, setPageRegister }) => {
  const schema = yup.object().shape({
    title: yup.string().required("Preencha uma tecnologia!"),
    status: yup.string().required("Insira um nivel"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(data);

    await api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("@Hub:token")
          )}`,
        },
      })
      .then((response) => {
        console.log(response);
        setPageRegister(false);
      });
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      {}

      <div>
        <button onClick={() => setPageRegister(false)}>
          <AiOutlineClose />
        </button>
        <h2>Cadastrar Tecnologia</h2>
      </div>
      <Input register={register} name="title" label="Tecnologia:" />
      <select {...register("status")} name="status" label="Nivel:">
        <option>Iniciante</option>
        <option>Intermediário</option>
        <option>Avançado</option>
      </select>
      <button type="submit">Cadastrar</button>
    </Container>
  );
};

export default Card;
