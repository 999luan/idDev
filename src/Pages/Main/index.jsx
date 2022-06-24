import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";

import { AiOutlinePlus } from "react-icons/ai";

// material UI LIB
import {
  Container,
  Header,
  InputContainer,
  ListContainer,
  Welcome,
} from "./style";
import { IoMdAddCircleOutline } from "react-icons/io";
import api from "../../Components/Services/api";
import Card from "../../Components/Card";
import TechList from "../../Components/TechList";
import Button from "../../Components/Button";
const Main = ({ authenticated }) => {
  const [language, setLanguage] = useState([]);
  const [token] = useState(
    JSON.parse(localStorage.getItem("@Hub:token")) || ""
  );

  const [pageRegister, setPageRegister] = useState(false);

  function loadLanguage() {
    const user = JSON.parse(localStorage.getItem("@Hub:user"));

    api
      .get(`/users/${user.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setLanguage(response.data.techs))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    loadLanguage();
  }, [language]);

  const onSubmit = ({ language }) => {
    if (!language) {
      return console.error("Complete o campo");
    }

    api
      .post(
        "/users/techs",
        {
          title: language,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => loadLanguage());
  };

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Header>
        <h1>ID Dev</h1>
      </Header>
      <Welcome>
        {" "}
        <h1>Bem vindo </h1>
      </Welcome>

      <Container>
        <InputContainer>
          <h1> Tecnologias</h1>
          <Button onClick={() => setPageRegister(true)}>
            {" "}
            <AiOutlinePlus />{" "}
          </Button>
          {pageRegister && <Card setPageRegister={setPageRegister} />}
        </InputContainer>
      </Container>
      <ListContainer>
        {language.map((lang) => (
          <TechList
            key={lang.id}
            title={lang.title}
            status={lang.status}
            id={lang.id}
            token={token}
          />
        ))}
      </ListContainer>
    </>
  );
};

export default Main;
