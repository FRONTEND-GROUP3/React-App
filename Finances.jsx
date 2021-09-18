import React from "react";
import { NavLink } from "react-router-dom";

const Finances = () => {
    return (
        <>
            <div className="serve">
                <h1>Welcome to Finances Page</h1>
                <p>We provide various services in Finances.To know more contact us.</p>
                <NavLink to="/Contact" className="btn btn-dark">Contact Us</ NavLink>
            </div>
        </>
    );
};

export default Finances;