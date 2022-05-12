import styled from "styled-components";

export const Figure = styled.figure`
  width: 50vw;
  margin: 0;
  position: relative;

  @media (max-width: 800px) {
    figure {
      flex-grow: 1;
      width: 100vw;
    }
  }
`;

export const Navigation = styled.nav`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 4;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 10px;
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
