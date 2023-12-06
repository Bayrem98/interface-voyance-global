import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap";

const TarologieBlogs = () => {
  return (
    <>
      <div className="taro-blogs">
        <div className="">
          <Nav fill variant="tabs" defaultActiveKey="/tarologieblogs">
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
              <Nav.Link style={{ color: "black" }} href="/numerologieblogs">
                Numérologie-Blogs
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="home-blogs-nav1">
              <Nav.Link
                style={{ color: "rgba(147, 147, 203, 0.866)" }}
                href="/tarologieblogs"
              >
                Tarologie-Blogs
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className="taroviewblogs d-flex justify-content-center">
          <Link to={"/viewblog8"}>
            <Card className="taro-blogs-cards" inverse>
              <CardImg
                className="taro-blogs-cards-imag"
                alt="blog8"
                src="/img/blogs/blog8.jpg"
              />
              <CardImgOverlay>
                <CardTitle className="taro-blogs-cards-title">Blog-8</CardTitle>
                <CardText
                  className="taro-blogs-cards-text"
                  style={{
                    color: "lightgrey",
                  }}
                >
                  <small>Last updated 3 mins ago</small>
                </CardText>
              </CardImgOverlay>
            </Card>
          </Link>
          <Link to={"/viewblog9"}>
            <Card className="taro-blogs-cards" inverse>
              <CardImg
                className="taro-blogs-cards-imag"
                alt="blog9"
                src="/img/blogs/blog9.jpg"
              />
              <CardImgOverlay>
                <CardTitle className="taro-blogs-cards-title">Blog-9</CardTitle>
                <CardText
                  className="taro-blogs-cards-text"
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
            <Card className="taro-blogs-cards" inverse>
              <CardImg
                className="taro-blogs-cards-imag"
                alt="blog10"
                src="/img/blogs/blog10.jpg"
              />
              <CardImgOverlay>
                <CardTitle className="taro-blogs-cards-title">
                  Blog-10
                </CardTitle>
                <CardText
                  className="taro-blogs-cards-text"
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
export default TarologieBlogs;
