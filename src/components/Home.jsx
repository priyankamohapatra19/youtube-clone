import Header from "./Header";
import LeftNav from "./LeftNav";
import MainContainer from "./MainContainer";
import "./../styles.css";

const Home = () => {
  return (
    <div className="App">
      <Header />
      <div className="app-container">
        <LeftNav />
        <MainContainer />
      </div>
    </div>
  );
};
export default Home;
