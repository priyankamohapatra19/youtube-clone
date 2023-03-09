import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch, FiVideo, FiBell } from "react-icons/fi";
import { BiMicrophone } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import "./Header.css";
import DataContext from "../context/DataContext";
import List from "./List";
import { options } from "./../utils/constants";

const Header = () => {
  const ctx = useContext(DataContext);
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const inp = e.target.value;
    ctx.setInput(inp);
    ctx.setModalOpen(true);

    if (inp === "") {
      ctx.setModalOpen(false);
      ctx.setSearchData([]);
    } else {
      ctx.setModalOpen(true);
      fetch(
        `https://youtube138.p.rapidapi.com/auto-complete/?q=${e.target.value}&hl=en&gl=US`,
        options
      )
        .then((response) => response.json())
        .then((response) => ctx.setSearchData(response.results))
        .catch((err) => console.error(err));
    }
  };

  const handleSearchDropdown = () => {
    // ctx.setIsModalOpen(true);
  };
  const logoHandler = () => {
    navigate("/");
  };
  return (
    <div className="header-container" onclick={handleSearchDropdown}>
      <div className="fix">
        <AiOutlineMenu />
      </div>
      <div className="logo" onClick={logoHandler}>
        <img
          src="https://download.logo.wine/logo/YouTube/YouTube-Logo.wine.png"
          alt="ytlogo"
          width="100px"
          height="80px"
        />
        <span id="super">IN</span>
      </div>
      <div className="search-query-field">
        <input
          className="input"
          type="text"
          placeholder="Search"
          value={ctx.input}
          onChange={handleInputChange}
        />
        <div className="search">
          <FiSearch />
        </div>
        <div className="micro-phone">
          <BiMicrophone />
        </div>
      </div>
      <div className="other-cat">
        <div className="fivideo">
          <FiVideo />
        </div>
        <div className="fibell">
          <FiBell />
        </div>
      </div>
      <div className="photo">
        <img
          src="https://ca.slack-edge.com/T2BJH134Y-U026ED59BEK-0702945ba5dc-512"
          width="40px"
          height="40px"
          alt=""
          className="profile"
        />
      </div>
      {ctx.modalOpen && <List />}
    </div>
  );
};
export default Header;
