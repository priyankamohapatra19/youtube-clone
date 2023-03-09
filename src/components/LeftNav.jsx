import { MdSubscriptions } from "react-icons/md";
import { BsHouseDoorFill } from "react-icons/bs";
import ytShorts from "./../images/youtube-shorts-icon.png";
import "./LeftNav.css";
import { categories, leftNavData } from "./../utils/constants";

const LeftNav = () => {
  return (
    <div className="left-nav-container">
      <div className="first-cat">
        <div className="home-container">
          <div className="home-img">
            <BsHouseDoorFill />
          </div>
          <div className="home-text">Home</div>
        </div>
        <div className="home-container-shorts">
          <img src={ytShorts} height="22px" alt="" />
          <div className="home-text">Shorts</div>
        </div>
        <div className="home-container">
          <div className="home-img">
            <MdSubscriptions />
          </div>
          <div className="home-text">Subscriptions</div>
        </div>
      </div>
      <div className="second-cat">
        {categories.map((category) => {
          return (
            <div className="cat-container">
              <div className="home-img">{category.icon}</div>
              <div className="home-text">{category.name}</div>
            </div>
          );
        })}
      </div>
      <div className="third-cat">
        {leftNavData.map((data) => {
          return (
            <div className="cat-container">
              <div className="home-img ">{data.icon}</div>{" "}
              <div className="home-text">{data.name}</div>
            </div>
          );
        })}
      </div>
      <div className="fourth-cat">
        <div className="text">
          About Press Copyright Contact us Creators Advertise Developers
        </div>
        <div className="text">
          Terms Privacy Policy&Safety How YouTube worksTest new features
        </div>
        <div className="last-text">© 2023 Google LLC</div>
      </div>
    </div>
  );
};
export default LeftNav;
