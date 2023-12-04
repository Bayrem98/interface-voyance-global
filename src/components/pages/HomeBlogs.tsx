import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap";

const HomeBlogs = () => {
  return (
    <>
      <div className="home-blogs">
        <div className="">
          <Nav fill variant="tabs" defaultActiveKey="/homeblogs">
            <Nav.Item className="home-blogs-nav1">
              <Nav.Link
                style={{ color: "rgba(147, 147, 203, 0.866)" }}
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
              <Nav.Link style={{ color: "black" }} href="/tarologieblogs">
                Tarologie-Blogs
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className="homeviewblogs d-flex justify-content">
          <Link to={"/viewblog1"}>
            <Card className="home-blogs-cards" inverse>
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
            <Card className="home-blogs-cards" inverse>
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
            <Card className="home-blogs-cards" inverse>
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
            <Card className="home-blogs-cards" inverse>
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
            <Card className="home-blogs-cards" inverse>
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
            <Card className="home-blogs-cards" inverse>
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
                  style={{ color: "white", textAlign: "center", fontSize: 30 }}
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
            <Card className="home-blogs-cards" inverse>
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
            <Card className="home-blogs-cards" inverse>
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
        <div
          className="d-flex justify-content"
          style={{ marginTop: 30, marginLeft: 20, marginRight: 20 }}
        >
          <Link to={"/viewblog9"}>
            <Card className="home-blogs-cards" inverse>
              <CardImg
                alt="blog9"
                src="/img/blogs/blog9.jpg"
                style={{
                  height: 300,
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
            <Card className="home-blogs-cards" inverse>
              <CardImg
                alt="blog10"
                src="/img/blogs/blog10.jpg"
                style={{
                  height: 300,
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
export default HomeBlogs;
