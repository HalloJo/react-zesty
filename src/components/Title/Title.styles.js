import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 10vw;
  margin: 0 20px;
  line-height: 1.4;

  @media (max-width: 800px) {
    font-size: 80px;
  }
`;

export const P = styled.p`
  position: fixed;
  bottom: 0;
  font-size: 24px;
  line-height: 1.2;
  margin: 0 20px 20px 20px;

  @media (max-width: 800px) {
    position: relative;
  }
`;
