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
        <div
          className="d-flex justify-content-center"
          style={{ marginTop: 130, marginLeft: 20, marginRight: 20 }}
        >
          <Link to={"/viewblog8"}>
            <Card inverse style={{ width: 200, marginRight: 10 }}>
              <CardImg
                alt="blog8"
                src="/img/blogs/blog8.jpg"
                style={{
                  height: 200,
                }}
                width="100%"
              />
              <CardImgOverlay>
                <CardTitle
                  style={{ color: "black", textAlign: "center", fontSize: 30 }}
                >
                  Blog-8
                </CardTitle>
                <CardText
                  style={{
                    position: "absolute",
                    bottom: 10,
                    color: "lightgrey",
                  }}
                >
                  <small>Last updated 3 mins ago</small>
                </CardText>
              </CardImgOverlay>
            </Card>
          </Link>
          <Link to={"/viewblog9"}>
            <Card inverse style={{ width: 200, marginRight: 10 }}>
              <CardImg
                alt="blog9"
                src="/img/blogs/blog9.jpg"
                style={{
                  height: 200,
                }}
                width="100%"
              />
              <CardImgOverlay>
                <CardTitle
                  style={{ color: "black", textAlign: "center", fontSize: 30 }}
                >
                  Blog-9
                </CardTitle>
                <CardText
                  style={{
                    position: "absolute",
                    bottom: 10,
                    color: "lightgrey",
                  }}
                >
                  <small>Last updated 3 mins ago</small>
                </CardText>
              </CardImgOverlay>
            </Card>
          </Link>
          <Link to={"/viewblog10"}>
            <Card inverse style={{ width: 200 }}>
              <CardImg
                alt="blog10"
                src="/img/blogs/blog10.jpg"
                style={{
                  height: 200,
                }}
                width="100%"
              />
              <CardImgOverlay>
                <CardTitle
                  style={{ color: "black", textAlign: "center", fontSize: 30 }}
                >
                  Blog-10
                </CardTitle>
                <CardText
                  style={{
                    position: "absolute",
                    bottom: 10,
                    color: "lightgrey",
                  }}
                >
                  <small>Last updated 3 mins ago</small>
                </CardText>
              </CardImgOverlay>
            </Card>
          </Link>
        </div>
      </div>
    </>
  );
};
export default TarologieBlogs;
