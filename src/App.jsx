import React from 'react';
import Slideshow from "./components/Slideshow/Slideshow";
import Title from "./components/Title/Title";
import { Section, GlobalStyle } from "./styles";

const App = () => {
  return (
    <>
    <GlobalStyle />
    <Section className="App">
      <Title />
      <Slideshow />
    </Section>
    </>
  );
};

export default App;
