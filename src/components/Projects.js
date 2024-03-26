import React, { useState } from "react";
import { Link, Link as Link2 } from "react-router-dom";
import * as Unicons from '@iconscout/react-unicons'
import Lightbox from 'react-18-image-lightbox';
import '../../node_modules/react-18-image-lightbox/style.css';

export default function Projects(props) {
    const [photoIndex, setActiveIndex] = useState(0);
    const [isOpen, setOpen] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const { data } = props;
    const [projects, setProjects] = useState(data.projects)
    let project = projects.sort((a, b) => b.sequence - a.sequence)
    project = project.filter((item) => item.enabled === true)
    project = project.slice(0, 6);

    const handleCLick = (index) => {
        setActiveIndex(index)
        setOpen(!isOpen);
    }

    const toggleChecked = () => {
        setIsChecked(prevState => !prevState);
    }

    return (
        <>

            <section className="relative md:py-24 py-16" id="project">
                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">Projects
                            <div className="toggle" onClick={toggleChecked}><input type="checkbox" checked={isChecked} className="toggle-btn" onChange={() => { }}></input></div>
                            Blogs
                        </h3>
                    </div>
                    {!isChecked &&
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                            {project.map((item, index) => (<div className="text-center mt-2 m-6">
                                <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800" key={index}>
                                    <img src={item.image.url} alt="" />
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                                    <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                                        <Link2 to="#!" className="text-white hover:text-amber-500 font-semibold transition-all duration-500">{item.title}</Link2>
                                    </div>

                                    <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">

                                        <Link2 to="#" onClick={() => handleCLick(index)} className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"><Unicons.UilCamera width={16} /></Link2>
                                    </div>
                                </div>

                                <div key={index} className="mt-3 flex justify-between">
                                    <a href={item.liveurl ? item.liveurl : "/error"} className="live-Project font-bold">Live Project</a>

                                    <a href={item.githuburl ? item.githuburl : "/error"} className="font-bold github-link"><Unicons.UilGithub width={30} /></a>
                                </div>

                                <div className="mt-2">
                                    <strong style={{ display: "block" }} className="bg-amber-500">Tech Used:</strong>
                                    {item.techStack.map((tech, index) => (<>
                                        <span key={index}>{tech}</span>
                                        {index !== item.techStack.length - 1 && <span>,</span>}
                                    </>
                                    ))}
                                </div>
                            </div>
                            ))}
                        </div>
                    }

                    {isChecked && 
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
                        {project.map((item, index) => {
                            return (
                                <div className="blog relative rounded-lg shadow shadow-slate-200 dark:shadow-gray-800 overflow-hidden" key={index}>
                                    <img src={item.image.url} alt="" />

                                    <div className="content p-6">
                                        <Link to="" className="text-[17px] hover:text-amber-500 dark:text-white dark:hover:text-amber-500 transition duration-500 ease-in-out font-medium h5">{item.title}</Link>
                                        <p className="text-slate-400 mt-3 text-[15px]">{item.description}</p>
                                    </div>

                                    <div key={index} className="mt-3 flex justify-between">
                                    <a href={item.liveurl ? item.liveurl : "/error"} className="live-Project font-bold">Live Project</a>

                                    <a href={item.githuburl ? item.githuburl : "/error"} className="font-bold github-link"><Unicons.UilGithub width={30} /></a>
                                </div>
                                </div>
                            )
                        })}
                    </div>}
                </div>
            </section>

            {isOpen && (
                <Lightbox
                    mainSrc={project[photoIndex].image.url}
                    nextSrc={project[(photoIndex + 1) % project.length]}
                    prevSrc={project[(photoIndex + project.length - 1) % project.length]}
                    onCloseRequest={() => setOpen(false)}
                    onMovePrevRequest={() =>
                        setActiveIndex((photoIndex + project.length - 1) % project.length)
                    }
                    onMoveNextRequest={() =>
                        setActiveIndex((photoIndex + 1) % project.length)
                    }
                />
            )}

        </>

    )
}