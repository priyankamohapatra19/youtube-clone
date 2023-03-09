import { useNavigate } from "react-router-dom";
import "./RelatedVideo.css";

const RelatedVideo = ({ val }) => {
  const navigate = useNavigate();

  function numDifferentiation(val) {
    if (val >= 10000000) {
      val = (val / 10000000).toFixed(2) + " Cr";
    } else if (val >= 100000) {
      val = (val / 100000).toFixed(2) + " Lac";
    } else if (val >= 1000) val = (val / 1000).toFixed(2) + " K";
    return val;
  }

  const handleRelatedVideo = () => {
    navigate(`/watch/${val.video.videoId}`);
  };

  return (
    <div className="related-video-container" onClick={handleRelatedVideo}>
      <div className="related-video-related-image">
        <img
          className="related-video-image"
          src={val.video.thumbnails[0].url}
          alt=""
        />
        <div className="related-video-duration">{val.lengthSeconds}</div>
      </div>
      <div className="related-video-detail">
        <div className="related-video-tilte">{val.video.title}</div>
        <div className="related-video-author">{val.video.author.title}</div>
        <div className="related-video-view-details">
          <div className="related-video-views">
            {numDifferentiation(val.video.stats.views)}
          </div>
          <div className="related-video-time">
            .{val.video.publishedTimeText}
          </div>
        </div>
      </div>
    </div>
  );
};
export default RelatedVideo;
