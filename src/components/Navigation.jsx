import { popular } from "./../utils/constants";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos
} from "react-icons/md";
import "./Navigation.css";

const Navigation = () => {
  const handleBack = () => {
    const container = document.querySelector(".popular-cat");

    container.scrollBy(-200, 0);
  };
  const handleForward = () => {
    const container = document.querySelector(".popular-cat");

    console.log("slide: ", container);
    container.scrollBy(200, 0);
  };
  return (
    <div className="nav-container" id="slides-container">
      <div className="backward-img" id="slide-arrow-prev" onClick={handleBack}>
        <MdOutlineArrowBackIosNew />
      </div>
      <div className="popular-cat">
        {popular.map((val, index) => {
          return <div className="popular-items">{val.name}</div>;
        })}
      </div>
      <div
        className="backward-img"
        id="slide-arrow-next"
        onClick={handleForward}
      >
        <MdOutlineArrowForwardIos />
      </div>
    </div>
  );
};
export default Navigation;
