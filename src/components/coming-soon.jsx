import React from "react";
// import logo from './big-white.png'; // Adjust the path to where your logo image is stored

export default function ComingSoon() {
    return (
		<div className="coming-soon-container">
		<img src={'big-white.png'} alt="CelebriLinks Logo" className="logo"/>
		<h1 className="coming-heading"><b>Coming <span className="soon-text">Soon</span></b></h1>
	</div>
    );
}