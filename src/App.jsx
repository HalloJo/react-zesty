
import Slideshow from "./components/Slideshow/Slideshow";
import Title from "./components/Title/Title";
import { GlobalStyle } from "./styles";

const App = () => {
  return (
    <>
    <GlobalStyle />
    <section className="App">
      <Title />
      <Slideshow />
    </section>
    </>
  );
};

export default App;
