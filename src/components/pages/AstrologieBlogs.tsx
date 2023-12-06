import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap";

const AstrologieBlogs = () => {
  return (
    <>
      <div className="astro-blogs">
        <div className="">
          <Nav fill variant="tabs" defaultActiveKey="/astrologieblogs">
            <Nav.Item className="home-blogs-nav1">
              <Nav.Link style={{ color: "black" }} href="/homeblogs">
                Home-Blogs
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="home-blogs-nav1">
              <Nav.Link
                style={{ color: "rgba(147, 147, 203, 0.866)" }}
                href="/astrologieblogs"
              >
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
        <div className="astroviewblogs d-flex justify-content-center">
          <Link to={"/viewblog1"}>
            <Card className="astro-blogs-cards" inverse>
              <CardImg
                className="astro-blogs-cards-imag"
                alt="blog1"
                src="/img/blogs/blog1.jpg"
              />
              <CardImgOverlay>
                <CardTitle className="astro-blogs-cards-title">
                  Blog-1
                </CardTitle>
                <CardText
                  className="astro-blogs-cards-text"
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
            <Card className="astro-blogs-cards" inverse>
              <CardImg
                className="astro-blogs-cards-imag"
                alt="blog2"
                src="/img/blogs/blog2.jpg"
              />
              <CardImgOverlay>
                <CardTitle className="astro-blogs-cards-title">
                  Blog-2
                </CardTitle>
                <CardText
                  className="astro-blogs-cards-text"
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
            <Card className="astro-blogs-cards" inverse>
              <CardImg
                className="astro-blogs-cards-imag"
                alt="blog3"
                src="/img/blogs/blog3.jpg"
              />
              <CardImgOverlay>
                <CardTitle className="astro-blogs-cards-title">
                  Blog-3
                </CardTitle>
                <CardText
                  className="astro-blogs-cards-text"
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
            <Card className="astro-blogs-cards" inverse>
              <CardImg
                className="astro-blogs-cards-imag"
                alt="blog4"
                src="/img/blogs/blog4.jpg"
              />
              <CardImgOverlay>
                <CardTitle className="astro-blogs-cards-title">
                  Blog-4
                </CardTitle>
                <CardText
                  className="astro-blogs-cards-text"
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
export default AstrologieBlogs;
