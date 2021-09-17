import React from "react";
import { NavLink } from "react-router-dom";

const Marketing = () => {
    return (
        <>
            <div className="serve">
                <h1>Welcome to Digital Marketing Page</h1>
                <p>We provide various services in Digital Marketing.To know more contact us.</p>
                <NavLink to="/Contact" className="btn btn-primary">Contact Us</ NavLink>
            </div>
        </>
    );
};

export default Marketing;