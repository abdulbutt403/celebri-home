import React from 'react';
import Blog from '../components/Blog/Blog';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

export default function Blogs() {
    const navigate = useNavigate();

    const allBlogs = [
        {
            id: 111, 
            image:'https://i.insider.com/5e3450b65bc79c150736dea3?width=1300&format=jpeg&auto=webp',
            type:'Electronic',
            title:"Unveiling the Future: Exploring the Latest in Laptop Innovation",
            date:'06 December, 2023'
        },
        {
            id: 112,
            image: 'https://cdn.educba.com/academy/wp-content/uploads/2019/06/JavaScript-Math-Functions.jpg.webp',
            type: 'Programming',
            title: "Javascript is a language used for frontend and backend development",
            date: '06 December, 2023'
        }, {
            id: 113,
            image: 'https://sixtysixmag.com/wp-content/uploads/sancal-link-lifestyle-image-13-2400x1685.jpg',
            type: 'Furniture',
            title: "Unveiling the Future: Exploring the Latest in Laptop Innovation",
            date: '06 December, 2023'
        }, {
            id: 114,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW-lymXJ6dq28ub8iAO12HC9OHmwNuOfSm2g&usqp=CAU',
            type: 'Motivational Books',
            title: "Dont Forget to read this book",
            date: '06 December, 2023'
        }, {
            id: 115,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDEtWSq0JpCdA1ZoN2b7X8WBUlbh9_xg4gw&usqp=CAU',
            type: 'Youtube Channel',
            title: "How to make money by creating your own youtube channel",
            date: '06 December, 2023'
        }, {
            id: 116,
            image: 'https://www-cdn.bigcommerce.com/assets/article-image-affiliate-marketing-social-bigcommerce.png',
            type: 'Affiliate Marketing',
            title: "How to earn money by using affiliate marketing",
            date: '06 December, 2023'
        },
    ]
    const handleBlogClick = (blogId, ind) => {
        navigate(`/blogPost/${blogId}`, {
            state: {
               blogPostData: allBlogs[ind]
            }
        });
    };

    const blogContainerStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        marginTop:"40px"
    };

    return (
        <div className="home-page">
            <Navbar />
            <div className="users1">
                <h1 className="user-heading">
                    <span>Blogs</span>
                </h1>
                <p className="user-text">
                    Explore Insights and Ideas: Dive into our Thoughtful Blogs for Fresh Perspectives, Expert Advice, and Inspiring Stories.
                </p>
                <div style={blogContainerStyle}>
                    {allBlogs.map((blog, ind) => {
                    return (
                        <Blog
                            onClick={() => handleBlogClick(blog.id, ind)}
                            image={blog.image}
                            type={blog.type}
                            title={blog.title}
                            date={blog.date}
                            key={ind}
                        />
                    )
                })}
                </div>
            </div>

            <Footer />
        </div>
    );
}
