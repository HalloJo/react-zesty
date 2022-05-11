import "../css/Loader.css";

const Loader = ({ calculatedWidth }) => {
  return (
    <aside>
      <div className="loading-bar">
        <label htmlFor="images-loaded">
          Loading all your favorite images...
        </label>
        <progress
          id="images-loaded"
          max="100"
          value={calculatedWidth}
        ></progress>
      </div>
    </aside>
  );
};

export default Loader;
