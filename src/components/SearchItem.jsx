import "./SearchItem.css";
import { useNavigate } from "react-router-dom";

const SearchItem = ({ val }) => {
  const navigate = useNavigate();

  function numDifferentiation(val) {
    if (val >= 10000000) {
      val = (val / 10000000).toFixed(2) + " Cr";
    } else if (val >= 100000) {
      val = (val / 100000).toFixed(2) + " Lac";
    } else if (val >= 1000) val = (val / 1000).toFixed(2) + " K";
    return val;
  }
  const handleVideo = () => {
    navigate(`/watch/${val.video.videoId}`);
  };
  return (
    <>
      {val.type === "video" && (
        <div className="search-item-container" onClick={handleVideo}>
          <div className="search-item-img">
            <img
              className="search-img"
              src={val.video.thumbnails[0].url}
              alt=""
            />
          </div>
          <div className="search-item-detail">
            <div className="item-title">{val.video.title}</div>
            <div className="item-view">
              <div className="stats">
                {numDifferentiation(val.video.stats.views)}
              </div>
              <span className="published-time">
                .{val.video.publishedTimeText}
              </span>
            </div>
            <div className="item-name">
              <img
                className="item-image"
                src={val.video.author.avatar[0].url}
                alt=""
                width="40px"
                height="40px"
              />
              <div className="avatar-title">{val.video.author.title}</div>
            </div>
            <div className="item-description">
              {val.video.descriptionSnippet}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default SearchItem;
