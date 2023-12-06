import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap";

const NumerologieBlogs = () => {
  return (
    <>
      <div className="numero-blogs">
        <div>
          <Nav fill variant="tabs" defaultActiveKey="/numerologieblogs">
            <Nav.Item className="home-blogs-nav1">
              <Nav.Link style={{ color: "black" }} href="/homeblogs">
                Home-Blogs
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="home-blogs-nav1">
              <Nav.Link style={{ color: "black" }} href="/astrologieblogs">
                Astrologie-Blogs
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="home-blogs-nav1">
              <Nav.Link
                style={{ color: "rgba(147, 147, 203, 0.866)" }}
                href="/numerologieblogs"
              >
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
        <div className="numeroviewblogs d-flex justify-content-center">
          <Link to={"/viewblog5"}>
            <Card className="numero-blogs-cards" inverse>
              <CardImg
                className="numero-blogs-cards-imag"
                alt="blog5"
                src="/img/blogs/blog5.jpg"
              />
              <CardImgOverlay>
                <CardTitle className="numero-blogs-cards-title">
                  Blog-5
                </CardTitle>
                <CardText
                  className="numero-blogs-cards-text"
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
            <Card className="numero-blogs-cards" inverse>
              <CardImg
                className="numero-blogs-cards-imag"
                alt="blog6"
                src="/img/blogs/blog6.jpg"
              />
              <CardImgOverlay>
                <CardTitle className="numero-blogs-cards-title">
                  Blog-6
                </CardTitle>
                <CardText
                  className="numero-blogs-cards-text"
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
            <Card className="numero-blogs-cards" inverse>
              <CardImg
                className="numero-blogs-cards-imag"
                alt="blog7"
                src="/img/blogs/blog7.jpg"
              />
              <CardImgOverlay>
                <CardTitle className="numero-blogs-cards-title">
                  Blog-7
                </CardTitle>
                <CardText
                  className="numero-blogs-cards-text"
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
export default NumerologieBlogs;
