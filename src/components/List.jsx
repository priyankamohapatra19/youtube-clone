import { useContext } from "react";
import DataContext from "../context/DataContext";
import ListItem from "./ListItem";
import "./List.css";

const List = () => {
  const ctx = useContext(DataContext);
  return (
    <div className="list-container">
      {ctx.searchData &&
        ctx.searchData.length > 0 &&
        ctx.searchData.map((val) => {
          return <ListItem val={val} />;
        })}
    </div>
  );
};
export default List;
