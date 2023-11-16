import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap";

const NumerologieBlogs = () => {
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
          <Nav fill variant="tabs" defaultActiveKey="/numerologieblogs">
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
              <Nav.Link
                style={{ color: "rgba(147, 147, 203, 0.866)", fontSize: 20 }}
                href="/numerologieblogs"
              >
                Numérologie-Blogs
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{ color: "black" }} href="#">
                Tarologie-Blogs
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div
          className="d-flex justify-content-center"
          style={{ marginTop: 130, marginLeft: 20, marginRight: 20 }}
        >
          <Link to={"/viewblog5"}>
            <Card inverse style={{ width: 200, marginRight: 10 }}>
              <CardImg
                alt="blog5"
                src="/img/blogs/blog5.jpg"
                style={{
                  height: 200,
                }}
                width="100%"
              />
              <CardImgOverlay>
                <CardTitle
                  style={{ color: "white", textAlign: "center", fontSize: 30 }}
                >
                  Blog-5
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
          <Link to={"/viewblog6"}>
            <Card inverse style={{ width: 200, marginRight: 10 }}>
              <CardImg
                alt="blog6"
                src="/img/blogs/blog6.jpg"
                style={{
                  height: 200,
                }}
                width="100%"
              />
              <CardImgOverlay>
                <CardTitle
                  style={{ color: "black", textAlign: "center", fontSize: 30 }}
                >
                  Blog-6
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
          <Link to={"/viewblog7"}>
            <Card inverse style={{ width: 200, marginRight: 10 }}>
              <CardImg
                alt="blog7"
                src="/img/blogs/blog7.jpg"
                style={{
                  height: 200,
                }}
                width="100%"
              />
              <CardImgOverlay>
                <CardTitle
                  style={{ color: "black", textAlign: "center", fontSize: 30 }}
                >
                  Blog-7
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
export default NumerologieBlogs;
