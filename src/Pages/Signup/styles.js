import styled, { keyframes } from "styled-components";

import CadastroAssets from "../../Assets/CadastroAssets.png";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Background = styled.div`
  @media (min-width: 1100px) {
    flex: 1;
    background: url(${CadastroAssets}) no-repeat center, var(--black);
    background-size: contain;
  }
`;

export const Content = styled.div`
  background: #212529;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;

export const appearFromRight = keyframes`
from{
    opacity: 0;
    transform: translateX(50px)
}
to{
    opacity: 0;
    transform: translateX(0px)
}
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromRight} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    height: 710px;
    text-align: center;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    color: white;
  }

  h1 {
    margin-bottom: 32px;
    color: white;
  }
  p {
    margin-top: 8px;
    color: white;
  }
  small {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 9.59437px;
    line-height: 18px;
    color: #868e96;
  }
  a {
    font-weight: bold;
    color: var(--orange);
  }
`;
