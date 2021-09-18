import React from "react";
import { NavLink } from "react-router-dom";

const Education = () => {
    return (
        <>
        <div className="serve">
        <h1>Welcome to Education Page</h1>
       <p>We provide various services in Education.To know more contact us.</p>
         <NavLink to="/Contact" className="btn btn-dark">Contact Us</ NavLink>
        </div>
        </>
    );
};

export default Education;