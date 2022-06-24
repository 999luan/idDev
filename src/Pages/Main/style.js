import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 38px;
  background: #343b41;
`;

export const Header = styled.header`
  width: 100%;
  height: 72px;
  background: #343b41;
  color: white;
  text-align: center;
`;

export const Welcome = styled.div`
  width: 100%;
  height: 118px;
  background-color: #343b41;
  color: white;
  text-align: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
  padding: 0 38px;
  background: #343b41;
  color: white;
  section {
    display: flex;
    > div {
      max-width: 80%;
      flex: 1;
      margin-right: 1;
      color: white;
    }
  }

  button {
    max-width: 260px;
    height: 60px;
    margin: 0;
  }
`;

export const ListContainer = styled.div`
  padding: 0 38px;
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
  background: #343b41;
  color: white;

  justify-content: center;

  div {
    color: white;
    margin-top: 16px;
    margin-right: 32px;
    background-color: black;
    color: white;
    background: #343b41;
    border: 1px solid grey;
  }
`;
