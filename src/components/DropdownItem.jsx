import "./DropdownItem.css";

const DropdownItem = ({ val }) => {
  return (
    <div className="dropdownitem-container">
      <div className="dropdownitem-img">{val.icon}</div>
      <div className="dropdownitem-text">{val.title}</div>
    </div>
  );
};
export default DropdownItem;
