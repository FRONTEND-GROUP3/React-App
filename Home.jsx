import React from "react";
import home from "../src/images/home2.jpg";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
    return (
        <>
            <Common name="Today,Tomorrow,Forever with" imgsrc={home} visit="/service" btname="Get Started" />
        </>
    );
};

export default Home;