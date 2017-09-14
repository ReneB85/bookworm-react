import React from 'react';
import {Link} from "react-router-dom";


const HomePage = () => (
    <div>
        <h1>Home Page GitTest</h1>
        <Link to="/login">Login</Link>
    </div>
);

export default HomePage;