import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const BlogPost = () => {
    const { state } = useLocation()
    const cardStyle = {
        width: "85%",
        margin: "12px auto 50px auto",
        borderRadius: "12px",
        padding: "12px",
        display: "flex",
        boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.2)", // Bolder and clearer shadow effect
    };
    const imgStyle = {
        width:"100%",
        objectFit: 'cover',
        height: "90vh"
    }

    return (
        <div>
            <Navbar />
            <div>
                <img src={`${state.blogPostData.image}`} style={imgStyle}></img>
                <h1 className="user-heading" style={{margin:"26px 100px"}}>
                    <span>{state.blogPostData.title}</span>
                </h1>
                <p style={{height:"100px", display:'flex', justifyContent:"center"}}>
                    <h6>Word By Zack Islam</h6>
                </p>
                <div style={cardStyle}>
                <div style={{width:"100%"}}></div>
                <div>
                <h2 style={{fontSize:"24px", fontWeight:"bold", margin:"12px 2px"}}>Heading ONE</h2>
                <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada faucibus ex nec ultricies. Donec mattis egestas nisi non pretium. Suspendisse nec eros ut erat facilisis maximus. In congue et leo in varius. Vestibulum sit amet felis ornare, commodo orci ut, feugiat lorem.
                </p>
                        <h2 style={{ fontSize: "24px", fontWeight: "bold", margin: "12px 2px" }}>Heading TWO</h2>
                <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada faucibus ex nec ultricies. Donec mattis egestas nisi non pretium. Suspendisse nec eros ut erat facilisis maximus. In congue et leo in varius. Vestibulum sit amet felis ornare, commodo orci ut, feugiat lorem.
                </p>
                        <h2 style={{ fontSize: "24px", fontWeight: "bold", margin: "12px 2px" }}>Heading THREE</h2>
                <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada faucibus ex nec ultricies. Donec mattis egestas nisi non pretium. Suspendisse nec eros ut erat facilisis maximus. In congue et leo in varius. Vestibulum sit amet felis ornare, commodo orci ut, feugiat lorem.
                </p>
                        <h2 style={{ fontSize: "24px", fontWeight: "bold", margin: "12px 2px" }}>Heading FOUR</h2>
                <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada faucibus ex nec ultricies. Donec mattis egestas nisi non pretium. Suspendisse nec eros ut erat facilisis maximus. In congue et leo in varius. Vestibulum sit amet felis ornare, commodo orci ut, feugiat lorem.
                </p>
                </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BlogPost;
