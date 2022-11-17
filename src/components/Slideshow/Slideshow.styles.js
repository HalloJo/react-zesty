import styled from "styled-components";
import { ReactComponent as RightArrow } from "../../assets/arrow-right.svg";
import { ReactComponent as LeftArrow } from "../../assets/arrow-left.svg";

export const Figure = styled.figure`
  width: 100vw;
  height: 100%;

  @media (min-width: 1024px) {
    width: 50vw;
    margin: 0;
    position: relative;
  }
`;

export const PreviousArrow = styled(LeftArrow)`
  @media (max-width: 800px) {
    width: 7.5vw;
  }
`;

export const NextArrow = styled(RightArrow)`
  @media (max-width: 800px) {
    width: 7.5vw;
  }
`;

export const Navigation = styled.nav`
  position: absolute;
  top: 60%;
  transform: translateY(-50%);
  z-index: 4;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 10px;

  @media (min-width: 1024px) {
    top: 50%;
  }
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;

  @media (max-width: 800px) {
    &:svg {
      width: 7.5vw;
    }
  }
`;

export const Figcaption = styled.figcaption`
  font-size: 36px;
  text-align: center;
  position: fixed;
  z-index: 1;
  color: white;
  bottom: 20px;
  margin: 0 auto;
  width: 50%;
  font-weight: 500;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  height: 100vh;
  width: 50%;
  object-fit: cover;
  position: fixed;
  opacity: 0;
  transition: opacity 0.3s ease;

  @media (max-width: 800px) {
    width: 100%;
  }
`;
