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
          Des vidéos sur vous choix
        </h2>
        <br />
        <div
          className="d-flex justify-content-between"
          style={{ marginLeft: 20, marginRight: 20, marginBottom: 200 }}
        >
          {Array.isArray(blogs) && blogs.length ? (
            blogs.map((blog) => (
              <Card style={{ width: 300 }} key={blog._id}>
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
    </>
  );
};

export default VideosPage;
