import Header from "./Header";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import "./VideoContainer.css";
import { useEffect, useState } from "react";
import { options } from "./../utils/constants";
import RelatedVideo from "./RelatedVideo";

const VideoContainer = () => {
  const [videoDetail, setVideoDetail] = useState({});
  const [relatedVideo, setRelatedVideo] = useState([]);
  const params = useParams();
  const idx = params.id;

  const getVideoDetail = () => {
    // const options = {
    //   method: "GET",
    //   headers: {
    //     "X-RapidAPI-Key": "c9f4d2850amshb9dfa4b5ccd2a36p114befjsnc2c56da7a633",
    //     "X-RapidAPI-Host": "youtube138.p.rapidapi.com"
    //   }
    // };

    fetch(
      `https://youtube138.p.rapidapi.com/video/details/?id=${idx}&hl=en&gl=US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setVideoDetail(response);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getVideoDetail();
  }, [params.id]);

  const fetchRelatedVideo = () => {
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Key': 'c9f4d2850amshb9dfa4b5ccd2a36p114befjsnc2c56da7a633',
    //     'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    //   }
    // };

    fetch(
      `https://youtube138.p.rapidapi.com/video/related-contents/?id=${idx}&hl=en&gl=US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log("ressss: ", response);
        setRelatedVideo(response.contents);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchRelatedVideo();
  }, [params.id]);

  return (
    <div className="video-container">
      <Header />
      {
        <div className="video-container-detail">
          <div className="react-player">
            <ReactPlayer
              url={`{https://www.youtube.com/watch?v=${idx}`}
              playing={true}
              controls
              width="98%"
              height="70%"
            />
            <div className="react-video-detail">{videoDetail?.title}</div>
            <div className="react-image-detail">
              <img
                className="react-image"
                src={videoDetail?.author?.avatar[0]?.url}
                alt=""
              />
              <div className="react-img-detail">
                <div className="video-detail-text">
                  {videoDetail?.author?.title}
                </div>
                <div className="video-detail-subscriber">
                  {videoDetail?.author?.stats?.subscribersText}
                </div>
              </div>
              <div className="subscribe-button">
                <button className="subscribe-text">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="related-videos-container">
            {relatedVideo &&
              relatedVideo.length > 0 &&
              relatedVideo.map((val) => {
                return <RelatedVideo val={val} />;
              })}
          </div>
        </div>
      }
    </div>
  );
};
export default VideoContainer;
