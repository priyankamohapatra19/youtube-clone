import Navigation from "./Navigation";
import Content from "./Content";
import "./MainContainer.css";

const MainContainer = () => {
  return (
    <div className="main-container">
      <Navigation />
      <Content />
    </div>
  );
};
export default MainContainer;
