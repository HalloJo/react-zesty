import styled, { createGlobalStyle } from "styled-components";

export const Section = styled.section`
  display: flex;
  height: 100vh;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;800&display=swap');

    * {
        box-sizing: border-box;
        margin: 0;
    }

    body {
        font-family: "Poppins", sans-serif;
        background-color: #fbdd74;
        color: #294910;
        height: 100vh;
        width: 100vw;
        position: relative;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
    }

    .display {
        opacity: 1;
    }
  
    .hide {
        opacity: 0;
    }
  


`;
