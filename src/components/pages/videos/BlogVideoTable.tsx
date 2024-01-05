import { useEffect, useState } from "react";
import Blog from "../../../@types/Blog";
import BlogVideoAdd from "./BlogVideoAdd";
import { ButtonGroup, Table } from "reactstrap";
import BlogVideoDelete from "./BlogVideoDelete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { getBlogs } from "../../../actions/Blogs/action";

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
          <p className="titlebookstable">Tableau des videos</p>
          <BlogVideoAdd refresh={() => getBlogs(null, setBlogs)} />
        </div>

        <Table className="bookstable-table" bordered responsive hover>
          <thead className="bookstable-table-thead">
            <tr>
              <th>Image</th>
              <th>Video</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(blogs) && blogs.length ? (
              blogs.map((blog) => (
                <tr key={blog._id}>
                  <td>
                    <img src={blog.coverPath} alt="." />
                  </td>
                  <td>
                    <audio controls controlsList="nodownload">
                      <source src={blog.videoPath} />
                    </audio>
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
