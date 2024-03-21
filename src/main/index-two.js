import React,{useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import Services from "../components/Service";
import CTABanner from "../components/CTABanner";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";
import HeroTwo from "../components/HeroTwo";
import Clients from "../components/Clients";
import { useNavigate } from "react-router-dom";

export default function IndexTwo(props){
    const {data} = props;
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
            <Navbar data={data}/>
            <HeroTwo data={data}/>
            <AboutUs/>
            <Services data={data}/>
            <CTABanner data={data}/>
            <Experience data={data}/>
            <Projects data={data}/>
            <Clients data={data}/>  
            <Blogs/>
            <GetInTouch/>
            <Footer/>
            
        </>
    )
}