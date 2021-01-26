import React from "react";
import { Container, Wrapper, CloseButtonWrapper } from "./styles";

export const Modal = ({ children, handleClose }: any) => {
  return (
    <Container>
      <CloseButtonWrapper onClick={handleClose}>
        <svg
          width="36"
          height="42"
          viewBox="0 0 36 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L35 41"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35 1L0.999999 41"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </CloseButtonWrapper>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};
