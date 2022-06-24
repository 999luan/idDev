import React from "react";
import Button from "../Button";
import api from "../Services/api";
import { Container } from "./styles";

import { AiOutlineDelete } from "react-icons/ai";

const TechList = ({ title, status, id, token }) => {
  function handleDelete() {
    api
      .delete(
        `/users/techs/${id}`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => console.log("correto"));
  }
  return (
    <Container>
      <h2>{title}</h2>
      <small>{status}</small>
      <Button onClick={handleDelete}>
        {" "}
        <AiOutlineDelete />
      </Button>
    </Container>
  );
};
export default TechList;
