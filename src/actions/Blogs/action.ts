import axios from "axios";
import Blog from "../../@types/Blog";

export function getBlogs(
  query: { coverPath?: string; videoPath?: string } | null,
  callback: (data: Blog[]) => void
) {
  axios
    .get(`${process.env.REACT_APP_API_URL}/blog`, {
      params: query,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
    .then(({ data }) => {
      callback(data);
    })
    .catch((e) => {
      console.error(e);
    });
}

export function getBlog(id: string, callback: (data: Blog) => void) {
  axios
    .get(`${process.env.REACT_APP_API_URL}/blog/` + id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
    .then(({ data }) => {
      callback(data);
    })
    .catch((e) => {
      console.error(e);
    });
}

export function addblog(blog: Blog, callback: () => void) {
  axios
    .post(`${process.env.REACT_APP_API_URL}/blog`, blog)
    .then(() => {
      callback();
    })
    .catch((e) => {
      console.error(e);
    });
}

export function deleteBlogs(blog: Blog, callback: () => void) {
  axios
    .delete(`${process.env.REACT_APP_API_URL}/blog/${blog._id}`)
    .then(() => {
      callback();
    })
    .catch((e) => {
      console.error(e);
    });
}
