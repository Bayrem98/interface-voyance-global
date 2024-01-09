import { useEffect, useState } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import { Player } from "video-react";
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
      <div className="" style={{ marginTop: 20 }}>
        <h2
          style={{
            textAlign: "center",
            color: "rgba(147, 147, 203, 0.866)",
            fontStyle: "oblique",
          }}
        >
         HOROSCOPE-2024
        </h2>
        <br />
        <div className="container">
          <div className="row">
            {Array.isArray(blogs) && blogs.length ? (
              blogs.map((blog) => (
                <div
                  key={blog._id}
                  className="col-6 col-sm-4"
                  style={{ padding: 30 }}
                >
                  <Card style={{ width: 300 }}>
                    <CardHeader
                      style={{
                        textAlign: "center",
                      }}
                    >
                      <img src={blog.coverPath} alt="." width={50} />
                    </CardHeader>
                    <CardBody>
                      {" "}
                      <Player poster={blog.posterPath}>
                        <source src={blog.videoPath} />
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
