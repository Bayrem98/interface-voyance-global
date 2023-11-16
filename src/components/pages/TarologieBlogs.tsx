import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap";

const TarologieBlogs = () => {
  return (
    <>
      <div
        className="numerologie-blogs"
        style={{
          marginLeft: 50,
          marginRight: 50,
          marginTop: 20,
          marginBottom: 330,
        }}
      >
        <div className="">
          <Nav fill variant="tabs" defaultActiveKey="/tarologieblogs">
            <Nav.Item>
              <Nav.Link style={{ color: "black" }} href="/homeblogs">
                Home-Blogs
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{ color: "black" }} href="/astrologieblogs">
                Astrologie-Blogs
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{ color: "black" }} href="/numerologieblogs">
                Numérologie-Blogs
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                style={{ color: "rgba(147, 147, 203, 0.866)", fontSize: 20 }}
                href="/tarologieblogs"
              >
                Tarologie-Blogs
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </div>
    </>
  );
};
export default TarologieBlogs;
