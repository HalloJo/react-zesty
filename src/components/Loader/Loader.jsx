import { Aside, LoadingBar, Label, ProgressBar } from "./Loader.styles";

const Loader = ({ calculatedWidth }) => {
  return (
    <Aside>
      <LoadingBar className="loading-bar">
        <Label htmlFor="images-loaded">
          Loading all your favorite images...
        </Label>
        <ProgressBar
          id="images-loaded"
          max="100"
          value={calculatedWidth}
        ></ProgressBar>
      </LoadingBar>
    </Aside>
  );
};

export default Loader;
