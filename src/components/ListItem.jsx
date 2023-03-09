import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import DataContext from "../context/DataContext";
import "./ListItem.css";

const ListItem = ({ val }) => {
  const ctx = useContext(DataContext);
  const navigate = useNavigate();
  const handleItem = () => {
    ctx.setInput(val);
    ctx.setModalOpen(false);
    navigate(`/${val.replace(" ", "+")}`);
  };
  return (
    <div className="list-item-container" onClick={handleItem}>
      <div className="list-item-search">
        <FiSearch />
      </div>
      <div className="list-item-text">{val}</div>
    </div>
  );
};
export default ListItem;
