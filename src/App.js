import "./App.css";
import Slideshow from "./components/Slideshow/Slideshow";
import Title from "./components/Title/Title";

const App = () => {
  return (
    <section className="App">
      <Title />
      <Slideshow />
    </section>
  );
};

export default App;
