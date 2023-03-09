import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { useState, useEffect } from "react";
import DataContext from "./context/DataContext";
import SearchResultContainer from "./components/SearchResultContainer";
import VideoContainer from "./components/VideoContainer";

export default function App() {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const videoData = {
    data,
    isOpen,
    setIsOpen,
    input,
    setInput,
    searchData,
    setSearchData,
    modalOpen,
    setModalOpen
  };
  const fetchData = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "17cb908ad7msh45f9bde3ad50bcbp1586ccjsn2f90871d097d",
        "X-RapidAPI-Host": "simple-youtube-search.p.rapidapi.com"
      }
    };

    fetch(
      "https://simple-youtube-search.p.rapidapi.com/search?query=selena%gomez&safesearch=false",
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response.results))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <DataContext.Provider value={videoData}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:input" element={<SearchResultContainer />} />
          <Route path="/watch/:id" element={<VideoContainer />} />
        </Routes>
      </DataContext.Provider>
    </>
  );
}
