import React,{useEffect} from "react";
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

export default function IndexDark(props){
    const{data}=props;

    useEffect(() => {
        document.documentElement.setAttribute("dir", "ltr");
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
    }, []);

    if (!data) {
        return <div>Loading...</div>; // or any loading indicator
    }
    return(
        <>
            <Navbar data={data}/>
            <HeroOne data={data}/>
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