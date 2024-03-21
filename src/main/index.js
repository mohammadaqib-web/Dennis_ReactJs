import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HeroOne from "../components/HeroOne";
import AboutUs from "../components/AboutUs";
import Services from "../components/Service";
import CTABanner from "../components/CTABanner";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";
import Clients from "../components/Clients";
import { useNavigate } from "react-router-dom";

export default function Index(props) {
    const { data } = props;
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (loading) {
                navigate("/error");
            }
        }, 3000);

        return () => clearTimeout(timeout);
    }, [loading, navigate]);


    useEffect(() => {
        document.documentElement.setAttribute("dir", "ltr");
        document.documentElement.classList.add('light');

        if (data) {
            setLoading(false);
        }
    }, [data]);

    if (loading) {
        return <div className="text-center">
            <div className="mx-auto mt-5 loading" style={{ border: "10px dotted", width: "5dvw", borderRadius: "50px", height: "10dvh" }}> </div>
        </div>; // or any loading indicator
    }

    return (
        <>
            <Navbar data={data} />
            {data.about && <HeroOne data={data} />}
            {data.about && <AboutUs data={data} />}
            {data.services && <Services data={data} />}
            {data.about && <CTABanner data={data} />}
            {data.timeline && <Experience data={data} />}
            {data.projects && <Projects data={data} />}
            {data.testimonials && <Clients data={data} />}
            <Blogs />
            {data.about && <GetInTouch data={data} />}
            <Footer />
        </>
    )
}