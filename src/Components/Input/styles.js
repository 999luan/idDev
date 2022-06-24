import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;
`;

export const InputContainer = styled.div`
  background: #343b41;
  display: flex;

  border: 1px solid #343b41;
  border-radius: 4px;
  width: 80%;
  width: 329.93px;
  height: 48px;
  align-items: center;
  transition: 0.4s;
  ${(props) =>
    props.isErrored &&
    css`
      border-color: red;
      svg {
        color: red;
      }
    `}

  padding-left: 5px;
  gap: 1rem;
  input {
    background: #343b41;

    text-align: left;

    color: var(--white);
    padding: 1rem;
    flex: 1;
    padding-left: 5px;
    border: none;
    &::placeholder {
      color: 343b41;
    }
  }
  svg {
    margin-right: 16px;
  }
`;
