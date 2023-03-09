import { dropDown, dropDownNotRequired } from "./../utils/constants";
import DropdownItem from "./DropdownItem";
import "./Dropdown.css";

const Dropdown = () => {
  return (
    <div className="dropdown-container">
      <div className="dropdown-first-cat">
        {dropDown &&
          dropDown.length > 0 &&
          dropDown.map((val) => {
            return <DropdownItem val={val} />;
          })}
      </div>
      <div className="dropdown-second-cat">
        {dropDownNotRequired.map((val) => {
          return <DropdownItem val={val} />;
        })}
      </div>
    </div>
  );
};
export default Dropdown;
