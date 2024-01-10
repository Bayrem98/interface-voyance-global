import { useEffect, useState } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import {
  ControlBar,
  LoadingSpinner,
  Player,
  VolumeMenuButton,
} from "video-react";
import Blog from "../../@types/Blog";
import { getBlogs } from "../../actions/Blogs/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";

const VideosPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    getBlogs(null, setBlogs);
  }, []);

  return (
    <>
      <div className="horoscope-page">
        <h2 className="horoscope-title">HOROSCOPE-2024</h2>
        <div className="container">
          <div className="row">
            {Array.isArray(blogs) && blogs.length ? (
              blogs.map((blog) => (
                <div
                  key={blog._id}
                  className="horoscope-view col-md-3"
                >
                  <Card className="horoscope-cards">
                    <CardHeader
                      style={{
                        textAlign: "center",
                      }}
                    >
                      <img
                        className="horoscope-cards-img"
                        src={blog.coverPath}
                        alt="."
                      />
                    </CardHeader>
                    <CardBody>
                      {" "}
                      <Player poster={blog.posterPath}>
                        <LoadingSpinner />
                        <source src={blog.videoPath} />
                        <ControlBar autoHide={false}>
                          <VolumeMenuButton vertical />
                        </ControlBar>
                      </Player>
                    </CardBody>
                  </Card>
                </div>
              ))
            ) : (
              <div
                className="text-center p-5"
                style={{
                  color: "#0e0e0ee7",
                  position: "absolute",
                  top: 150,
                  right: 550,
                }}
              >
                <FontAwesomeIcon icon={faBoxOpen} size="4x" />
                <br />
                Pas des données...
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideosPage;
