import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbard from "./components/parts/Navbard";
import Home from "./components/pages/Home";
import Footer from "./components/parts/Footer";
import { Route, Routes } from "react-router-dom";
import Actualite from "./components/pages/Actualite";
import Formation from "./components/pages/Formation";
import ViewBlog1 from "./components/pages/blogs/ViewBlog1";
import ViewBlog2 from "./components/pages/blogs/ViewBlog2";
import ViewBlog3 from "./components/pages/blogs/ViewBlog3";
import HomeBlogs from "./components/pages/HomeBlogs";
import AstrologieBlogs from "./components/pages/AstrologieBlogs";
import Viewblog4 from "./components/pages/blogs/ViewBlog4";
import NumerologieBlogs from "./components/pages/NumerologieBlogs";
import Viewblog5 from "./components/pages/blogs/ViewBlog5";
import Viewblog6 from "./components/pages/blogs/ViewBlog6";
import TarologieBlogs from "./components/pages/TarologieBlogs";
import Viewblog7 from "./components/pages/blogs/ViewBlog7";
import ViewBlog8 from "./components/pages/blogs/ViewBlog8";
import ViewBlog9 from "./components/pages/blogs/ViewBlog9";
import ViewBlog10 from "./components/pages/blogs/ViewBlog10";
import VideosPage from "./components/pages/VideosPage";
import "video-react/dist/video-react.css";
import BlogVideoTable from "./components/pages/admin-session/videos/BlogVideoTable";
import UsersTable from "./components/pages/admin-session/users/UsersTable";

function App() {
  // const handleContextMenu = (event: React.MouseEvent) => {
  // event.preventDefault();
  // }; //for disable the right click menu /onContextMenu={handleContextMenu}
  return (
    <>
      <div>
        <Navbard />
        <div>
          {localStorage.getItem("access_token") && (
            <Routes>
              <Route path="/addvideo" element={<BlogVideoTable />} />
              <Route path="/userstable" element={<UsersTable />} />
            </Routes>
          )}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/actualite" element={<Actualite />} />
            <Route path="/formation" element={<Formation />} />
            <Route path="/homeblogs" element={<HomeBlogs />} />
            <Route path="/astrologieblogs" element={<AstrologieBlogs />} />
            <Route path="/numerologieblogs" element={<NumerologieBlogs />} />
            <Route path="/tarologieblogs" element={<TarologieBlogs />} />
            <Route path="/viewblog1" element={<ViewBlog1 />} />
            <Route path="/viewblog2" element={<ViewBlog2 />} />
            <Route path="/viewblog3" element={<ViewBlog3 />} />
            <Route path="/viewblog4" element={<Viewblog4 />} />
            <Route path="/viewblog5" element={<Viewblog5 />} />
            <Route path="/viewblog6" element={<Viewblog6 />} />
            <Route path="/viewblog7" element={<Viewblog7 />} />
            <Route path="/viewblog8" element={<ViewBlog8 />} />
            <Route path="/viewblog9" element={<ViewBlog9 />} />
            <Route path="/viewblog10" element={<ViewBlog10 />} />
            <Route path="/videopage" element={<VideosPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
