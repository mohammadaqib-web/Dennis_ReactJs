import React,{useEffect, useState} from "react";
import AboutUs from "../components/AboutUs";
import Services from "../components/Service";
import CTABanner from "../components/CTABanner";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";
import HeroThree from "../components/HeroThree";
import NavbarLight from "../components/NavbarLight";
import Clients from "../components/Clients";
import { useNavigate } from "react-router-dom";

export default function IndexThree(props){
    const {data}=props;
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
        return <div>Loading...</div>; // or any loading indicator
    }
    return(
        <>
            <NavbarLight/>
            <HeroThree data={data}/>
            <AboutUs/>
            <Services data={data}/>
            <CTABanner/>
            <Experience data={data}/>
            <Projects data={data}/>
            <Clients data={data}/>  
            <Blogs/>
            <GetInTouch/>
            <Footer/>
            
        </>
    )
}