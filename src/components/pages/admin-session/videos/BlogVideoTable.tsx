import { useEffect, useState } from "react";
import Blog from "../../../../@types/Blog";
import BlogVideoAdd from "./BlogVideoAdd";
import { ButtonGroup, Table } from "reactstrap";
import BlogVideoDelete from "./BlogVideoDelete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { getBlogs } from "../../../../actions/Blogs/action";
import { Player } from "video-react";

interface Props {}

const BlogVideoTable = (props: Props) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    getBlogs(null, setBlogs);
  }, []);

  return (
    <>
      <div
        style={{
          marginLeft: 50,
          marginRight: 50,
          marginTop: 50,
          marginBottom: 350,
        }}
      >
        <div className="d-flex justify-content-between">
          <h2 style={{ color: "rgba(147, 147, 203, 0.866)" }}>
            Tableau des videos
          </h2>
          <BlogVideoAdd refresh={() => getBlogs(null, setBlogs)} />
        </div>
        <br />
        <Table bordered responsive hover>
          <thead style={{ textAlign: "center" }}>
            <tr>
              <th>Image</th>
              <th>Poster</th>
              <th>Video</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(blogs) && blogs.length ? (
              blogs.map((blog) => (
                <tr key={blog._id} style={{ textAlign: "center" }}>
                  <td>
                    <img src={blog.coverPath} alt="." width={50} />
                  </td>
                  <td>
                    <img src={blog.posterPath} alt="." width={200} />
                  </td>
                  <td>
                    <Player>
                      <source src={blog.videoPath} />
                    </Player>
                  </td>
                  <td>
                    <ButtonGroup>
                      <BlogVideoDelete
                        blog={blog}
                        refresh={() => getBlogs(null, setBlogs)}
                      />
                    </ButtonGroup>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={7}
                  className="text-center p-5"
                  style={{ color: "#0e0e0ee7" }}
                >
                  <FontAwesomeIcon icon={faBoxOpen} size="4x" />
                  <br />
                  Pas des données...
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default BlogVideoTable;
