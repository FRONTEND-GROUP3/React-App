import React from "react";
import { NavLink } from "react-router-dom";

const Ecommerce = () => {
    return (
        <>
            <div className="serve">
                <h1>Welcome to E-Commerce Page</h1>
                <p>We provide various services in E-Commerce.To know more contact us.</p>
                <NavLink to="/Contact" className="btn btn-primary">Contact Us</ NavLink>
            </div>
        </>
    );
};

export default Ecommerce;