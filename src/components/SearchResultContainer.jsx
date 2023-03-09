import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../context/DataContext";
import Header from "./Header";
import LeftNav from "./LeftNav";
import SearchItem from "./SearchItem";
import { options } from "./../utils/constants";
import "./SearchResultContainer.css";

const SearchResultContainer = () => {
  const [searchResult, setSearchResult] = useState([]);
  const ctx = useContext(DataContext);
  const params = useParams();
  console.log("params: ", params);

  const getSearchresult = () => {
    const inputStr = params.input.replaceAll("+", " ");
    fetch(
      `https://youtube138.p.rapidapi.com/search/?q=${inputStr}&hl=en&gl=US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log("dsasa: ", response);
        setSearchResult(response.contents);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getSearchresult();
  }, [params.input]);
  console.log("inputtt: ", ctx.input);
  return (
    <div className="searchResult-container">
      <Header />
      <div className="search-result-item-container">
        <LeftNav />
        <div className="search-container-item">
          {searchResult &&
            searchResult.length > 0 &&
            searchResult.map((val) => {
              return <SearchItem val={val} />;
            })}
        </div>
      </div>
    </div>
  );
};
export default SearchResultContainer;
