import React from 'react';
import './BlogCard.css';

const BlogCard = ({ onClick, image, type, title, date }) => {
    return (
        <div className="blog-card" onClick={onClick}>
            <img src={image} alt={title} className="blog-card-image" />
            <div className="blog-card-details">
                <span className="blog-card-type">{type}</span>
                <h2 className="blog-card-title">{title}</h2>
                <span className="blog-card-date">{date}</span>
            </div>
        </div>
    );
};

export default BlogCard;
