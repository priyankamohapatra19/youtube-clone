import "./Card.css";
import { GoKebabVertical } from "react-icons/go";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";
import Dropdown from "./Dropdown";

const Card = ({ val }) => {
  const ctx = useContext(DataContext);
  const navigate = useNavigate();

  function numDifferentiation(val) {
    if (val >= 10000000) {
      val = (val / 10000000).toFixed(2) + " Cr";
    } else if (val >= 100000) {
      val = (val / 100000).toFixed(2) + " Lac";
    } else if (val >= 1000) val = (val / 1000).toFixed(2) + " K";
    return val;
  }
  const handleKebab = (id) => {
    if (ctx.isOpen === id) {
      ctx.setIsOpen("");
    } else {
      ctx.setIsOpen(id);
    }
  };
  const handleCard = (id) => {
    navigate(`/watch/${id}`);
  };

  return (
    <div className="card-container" onClick={() => handleCard(val.id)}>
      <div className="image-detail">
        <img className="img" src={val.thumbnail.url} alt="" />
        <div className="duration">{val.duration_formatted}</div>
      </div>
      <div className="channel-detail">
        <div className="channel-logo">
          <img className="channel-logo-img" src={val.channel.icon} alt="" />
        </div>
        <div className="channel-title">{val.title}</div>
        <div className="kebab" onClick={() => handleKebab(val.id)}>
          <GoKebabVertical />
        </div>
      </div>
      <div className="channel-name">{val.channel.name}</div>
      <div className="view-detail">
        <div>{numDifferentiation(val.views)}</div>
        <div className="video-upload">.{val.uploadedAt}</div>
      </div>
      <div>{ctx.isOpen === val.id && <Dropdown />}</div>
    </div>
  );
};
export default Card;
