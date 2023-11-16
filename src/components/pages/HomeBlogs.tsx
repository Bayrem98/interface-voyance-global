import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap";

const HomeBlogs = () => {
  return (
    <>
      <div
        className="home-blogs"
        style={{
          marginLeft: 50,
          marginRight: 50,
          marginTop: 20,
          marginBottom: 10,
        }}
      >
        <div className="">
          <Nav fill variant="tabs" defaultActiveKey="/homeblogs">
            <Nav.Item>
              <Nav.Link
                style={{ color: "rgba(147, 147, 203, 0.866)", fontSize: 20 }}
                href="/homeblogs"
              >
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
              <Nav.Link style={{ color: "black" }} href="#">
                Tarologie-Blogs
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div
          className="d-flex justify-content"
          style={{ marginTop: 30, marginLeft: 20, marginRight: 20 }}
        >
          <Link to={"/viewblog1"}>
            <Card inverse style={{ width: 280, marginRight: 10 }}>
              <CardImg
                alt="blog1"
                src="/img/blogs/blog1.jpg"
                style={{
                  height: 300,
                }}
                width="100%"
              />
              <CardImgOverlay>
                <CardTitle
                  style={{ color: "black", textAlign: "center", fontSize: 30 }}
                >
                  Blog-1
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
          <Link to={"/viewblog2"}>
            <Card inverse style={{ width: 280, marginRight: 10 }}>
              <CardImg
                alt="blog2"
                src="/img/blogs/blog2.jpg"
                style={{
                  height: 300,
                }}
                width="100%"
              />
              <CardImgOverlay>
                <CardTitle
                  style={{ color: "white", textAlign: "center", fontSize: 30 }}
                >
                  Blog-2
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
          <Link to={"/viewblog3"}>
            <Card inverse style={{ width: 280, marginRight: 10 }}>
              <CardImg
                alt="blog3"
                src="/img/blogs/blog3.jpg"
                style={{
                  height: 300,
                }}
                width="100%"
              />
              <CardImgOverlay>
                <CardTitle
                  style={{ color: "white", textAlign: "center", fontSize: 30 }}
                >
                  Blog-3
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
          <Link to={"/viewblog4"}>
            <Card inverse style={{ width: 280 }}>
              <CardImg
                alt="blog4"
                src="/img/blogs/blog4.jpg"
                style={{
                  height: 300,
                }}
                width="100%"
              />
              <CardImgOverlay>
                <CardTitle
                  style={{ color: "black", textAlign: "center", fontSize: 30 }}
                >
                  Blog-4
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
        <div
          className="d-flex justify-content"
          style={{ marginTop: 30, marginLeft: 20, marginRight: 20 }}
        >
          <Link to={"/viewblog5"}>
            <Card inverse style={{ width: 280, marginRight: 10 }}>
              <CardImg
                alt="blog5"
                src="/img/blogs/blog5.jpg"
                style={{
                  height: 300,
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
            <Card inverse style={{ width: 280, marginRight: 10 }}>
              <CardImg
                alt="blog6"
                src="/img/blogs/blog6.jpg"
                style={{
                  height: 300,
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
            <Card inverse style={{ width: 280, marginRight: 10 }}>
              <CardImg
                alt="blog7"
                src="/img/blogs/blog7.jpg"
                style={{
                  height: 300,
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
          <Link to={"/viewblog8"}>
            <Card inverse style={{ width: 280 }}>
              <CardImg
                alt="blog8"
                src="/img/blogs/blog8.jpg"
                style={{
                  height: 300,
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
        </div>
      </div>
    </>
  );
};
export default HomeBlogs;
