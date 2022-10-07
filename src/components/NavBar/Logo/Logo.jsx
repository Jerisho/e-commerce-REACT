import React from 'react';
import './logo.css';
import { Link } from 'react-router-dom';


const Logo = () => {
    return (
        <Link to="/"><button className="logo-page flex-center"><img src="https://cdn-icons-png.flaticon.com/512/1579/1579000.png" alt="logo.png"></img></button></Link>
    );
};

export default Logo;