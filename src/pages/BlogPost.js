import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import DOMPurify from "dompurify";

const BlogPost = () => {
  const { state } = useLocation();
  console.log(state);
  const blogPostBody = JSON.parse(state.blogPostData.body);
  const sanitizedHTML = DOMPurify.sanitize(blogPostBody);

  const cardStyle = {
    width: "80%",
    margin: 'auto',
    borderRadius: "12px",
    paddingBottom: "120px",
    
    display: "flex",// Bolder and clearer shadow effect
  };
  const imgStyle = {
    width: "100%",
    objectFit: "cover",
    height: "90vh",
  };
  return (
    <div>
      <Navbar />
      <div>
        <img
          src={`http://localhost:9000/uploads/${state.blogPostData.imagePath}`}
          style={imgStyle}
          alt=""
        ></img>
        <h1 className="user-heading" style={{ margin: "26px 100px" }}>
          <span>{state.blogPostData.title}</span>
        </h1>
        <p
          style={{ height: "100px", display: "flex", justifyContent: "center" }}
        >
          <h6>Word By Zack Islam</h6>
        </p>
        <div style={cardStyle}>

          <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
