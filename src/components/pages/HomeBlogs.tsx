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
            <Nav.Item className="home-blogs-nav1">
              <Nav.Link style={{ color: "black" }} href="/astrologieblogs">
                Astrologie-Blogs
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="home-blogs-nav1">
              <Nav.Link style={{ color: "black" }} href="/numerologieblogs">
                Numérologie-Blogs
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="home-blogs-nav1">
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
                className="home-blogs-cards-imag"
                alt="blog1"
                src="/img/blogs/blog1.jpg"
              />
              <CardImgOverlay>
                <CardTitle
                  className="home-blogs-cards-title"
                  style={{ color: "black" }}
                >
                  Blog-1
                </CardTitle>
                <CardText
                  className="home-blogs-cards-text"
                  style={{
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
                className="home-blogs-cards-imag"
                alt="blog2"
                src="/img/blogs/blog2.jpg"
              />
              <CardImgOverlay>
                <CardTitle
                  className="home-blogs-cards-title"
                  style={{ color: "black" }}
                >
                  Blog-2
                </CardTitle>
                <CardText
                  className="home-blogs-cards-text"
                  style={{
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
                className="home-blogs-cards-imag"
                alt="blog3"
                src="/img/blogs/blog3.jpg"
              />
              <CardImgOverlay>
                <CardTitle
                  className="home-blogs-cards-title"
                  style={{ color: "black" }}
                >
                  Blog-3
                </CardTitle>
                <CardText
                  className="home-blogs-cards-text"
                  style={{
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
                className="home-blogs-cards-imag"
                alt="blog4"
                src="/img/blogs/blog4.jpg"
              />
              <CardImgOverlay>
                <CardTitle
                  className="home-blogs-cards-title"
                  style={{ color: "black" }}
                >
                  Blog-4
                </CardTitle>
                <CardText
                  className="home-blogs-cards-text"
                  style={{
                    color: "lightgrey",
                  }}
                >
                  <small>Last updated 3 mins ago</small>
                </CardText>
              </CardImgOverlay>
            </Card>
          </Link>
        </div>
        <div className="homeviewblogs d-flex justify-content">
          <Link to={"/viewblog5"}>
            <Card className="home-blogs-cards" inverse>
              <CardImg
                className="home-blogs-cards-imag"
                alt="blog5"
                src="/img/blogs/blog5.jpg"
              />
              <CardImgOverlay>
                <CardTitle
                  className="home-blogs-cards-title"
                  style={{ color: "black" }}
                >
                  Blog-5
                </CardTitle>
                <CardText
                  className="home-blogs-cards-text"
                  style={{
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
                className="home-blogs-cards-imag"
                alt="blog6"
                src="/img/blogs/blog6.jpg"
              />
              <CardImgOverlay>
                <CardTitle
                  className="home-blogs-cards-title"
                  style={{ color: "black" }}
                >
                  Blog-6
                </CardTitle>
                <CardText
                  className="home-blogs-cards-text"
                  style={{
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
                className="home-blogs-cards-imag"
                alt="blog7"
                src="/img/blogs/blog7.jpg"
              />
              <CardImgOverlay>
                <CardTitle
                  className="home-blogs-cards-title"
                  style={{ color: "black" }}
                >
                  Blog-7
                </CardTitle>
                <CardText
                  className="home-blogs-cards-text"
                  style={{
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
                className="home-blogs-cards-imag"
                alt="blog8"
                src="/img/blogs/blog8.jpg"
              />
              <CardImgOverlay>
                <CardTitle
                  className="home-blogs-cards-title"
                  style={{ color: "black" }}
                >
                  Blog-8
                </CardTitle>
                <CardText
                  className="home-blogs-cards-text"
                  style={{
                    color: "lightgrey",
                  }}
                >
                  <small>Last updated 3 mins ago</small>
                </CardText>
              </CardImgOverlay>
            </Card>
          </Link>
        </div>
        <div className="homeviewblogs d-flex justify-content">
          <Link to={"/viewblog9"}>
            <Card className="home-blogs-cards" inverse>
              <CardImg
                className="home-blogs-cards-imag"
                alt="blog9"
                src="/img/blogs/blog9.jpg"
              />
              <CardImgOverlay>
                <CardTitle
                  className="home-blogs-cards-title"
                  style={{ color: "black" }}
                >
                  Blog-9
                </CardTitle>
                <CardText
                  className="home-blogs-cards-text"
                  style={{
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
                className="home-blogs-cards-imag"
                alt="blog10"
                src="/img/blogs/blog10.jpg"
              />
              <CardImgOverlay>
                <CardTitle
                  className="home-blogs-cards-title"
                  style={{ color: "black" }}
                >
                  Blog-10
                </CardTitle>
                <CardText
                  className="home-blogs-cards-text"
                  style={{
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
