import "./Content.css";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import Card from "./Card";

const Content = () => {
  const ctx = useContext(DataContext);
  const handleModal = () => {
    if (ctx.isOpen !== "") ctx.setIsOpen("");
  };
  return (
    <div className="content-container" onClick={handleModal}>
      {ctx.data.map((val) => {
        return <Card val={val} />;
      })}
    </div>
  );
};
export default Content;
