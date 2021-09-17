import web from "../src/images/1.png";
import comm from "../src/images/comm.jpg";
import edu from "../src/images/edu.jpg";
import mark from "../src/images/mark.jpg";
import fin from "../src/images/fin1.jpg";

const Sdata = [
    {
        imgsrc : comm,
        title : "E-Commerce",
        disc: "A few clicks is all it takes.",
        btnn: "Launch",
        visit: "/Ecommerce",
    },
    {
        imgsrc: edu,
        title: "Education",
        disc: "A better learning future starts here.",
        btnn: "Launch",
        visit: "/Education",
    },
    {
        imgsrc: mark,
        title: "Digital Marketing",
        disc: "Trusted by the world's most established brands.",
        btnn: "Launch",
        visit: "/Marketing",
    },
    {
        imgsrc: fin,
        title: "Finance",
        disc: "Our financial expertise at your service.",
        btnn: "Launch",
        visit: "/Finances",
    },
];

export default Sdata;