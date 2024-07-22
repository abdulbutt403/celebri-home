import React, { useEffect, useState } from "react";
import Blog from "../components/Blog/Blog";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Blogs() {
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);
  const [AllBogs, setAllBogs] = useState([]);

  useEffect(() => {
    getAllUser();
  }, []);

  const getAllUser = () => {
    setLoading(true);
    fetch(`https://celebri-backend.onrender.com/users/allBlogs`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.success === true) {
          setAllBogs(res.allBlogs);
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const handleBlogClick = (blogId, ind) => {
    navigate(`/blogPost/${blogId}`, {
      state: {
        blogPostData: AllBogs[ind],
      },
    });
  };

  const blogContainerStyle = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginTop: "40px",
  };

  return (
    <div className="home-page">
      <Navbar />
      <div className="users1">
        <h1 className="user-heading">
          <span>Blogs</span>
        </h1>
        <p className="user-text">
          Explore Insights and Ideas: Dive into our Thoughtful Blogs for Fresh
          Perspectives, Expert Advice, and Inspiring Stories.
        </p>
        <div style={blogContainerStyle}>
          {Loading ? (
            <div class="flex justify-center items-center h-min">
              <div class="loader-container">
                <div class="loader"></div>
              </div>
            </div>
          ) : (
            AllBogs &&
            AllBogs?.map((blog, ind) => {
              return (
                <Blog
                  onClick={() => handleBlogClick(blog?._id, ind)}
                  image={`${blog.imagePath}`}
                  type={blog?.type}
                  title={blog?.title}
                  undefined
                  key={ind}
                />
              );
            })
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
