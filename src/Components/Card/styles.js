import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 22px 32px;
  gap: 22px;
  width: 369px;
  height: 342px;
  background: #343b41;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  color: white;
  position: absolute;
  top: 40%;
  left: 40%;
  justify-content: center;
  hr {
    width: 80%;
    margin-top: 16px;
    margin-bottom: 16px;
  }

  button {
    align-self: flex-end;
    width: 324px;
    height: 48px;

    /* color-primary */

    background: #ff577f;
  }
  svg {
    font-size: 1.1rem;
    color: white;
    margin-right: 4px;
  }
  input,
  select {
    width: 329.93px;
    height: 48px;
    background: #343b41;

    text-align: left;

    color: var(--white);
    padding: 1rem;
    flex: 1;
    padding-left: 5px;
    border: 1px solid grey;
  }
`;
