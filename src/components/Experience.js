import React, { useState } from "react";
export default function Experience(props) {
    const { data } = props;
    const [exp, setExp] = useState(data.timeline);
    let experience = exp.filter((item) => item.forEducation === false)
    experience = experience.sort((a,b)=>new Date(b.startDate)-new Date(a.startDate))
    let education = exp.filter((item) => item.forEducation === true)
    education = education.sort((a,b)=>new Date(b.startDate)-new Date(a.startDate))
    
    return (
        experience&&
        <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="experience">
            <div className="container">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">Work Experience</h3>

                </div>

                <div className="grid grid-cols-1 pb-8">
                    <div className="relative after:content-[''] after:absolute after:top-0 ltr:md:after:right-0 ltr:md:after:left-0 rtl:md:after:left-0 rtl:md:after:right-0 after:w-px after:h-full md:after:m-auto after:border-s-2 after:border-dashed after:border-gray-200 dark:after:border-gray-700 ms-3 md:ms-0">


                        {experience.map((item, index) => (
                            
                            <div key={index} className={`ms-8 mt-0 ${index>0&&'mt-12'} md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-amber-500 md:after:mx-auto ltr:md:after:right-0 ltr:md:after:left-0 rtl:md:after:left-0 rtl:md:after:right-0 md:after:m-auto after:border-dashed after:border-gray-200 dark:after:border-gray-700 ms-3 md:ms-0 ltr:after:-left-9 rtl:after:-right-9 before:content-[''] before:absolute md:before:mx-auto ltr:md:before:right-0 ltr:md:before:left-0 ltr:before:-left-11 rtl:md:before:left-0 rtl:md:before:right-0 rtl:before:-right-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900`}>                                
                            <div className="grid md:grid-cols-2">
                                <div className={`md:text-${index % 2 === 0 ? 'end' : ''} md:${index % 2 === 0 ? 'me-8' : 'ms-8'} relative ${index % 2 === 0 ? '' : 'md:order-2'}`}>

                                    <h5 className="my-2 font-semibold text-lg">{item.company_name}</h5>
                                    <h6 className="text-sm mb-0">{item.startDate.slice(0,10)} - {item.endDate.slice(0,10)}</h6>
                                </div>

                                <div className={`ltr:float-left rtl:float-right text-${index % 2 === 0 ? 'start' : ''} md:${index % 2 === 0 ? 'ms-8' : 'me-8'} mt-6 md:mt-0 ${index % 2 === 0 ? '' : 'md:order-1'} md:text-${index%2!==0&&'end'}`} >
                                    <h5 className="title mb-1 font-semibold">{item.jobTitle}</h5>
                                    <p className="mt-3 mb-0 text-slate-400 text-[15px]">{item.summary}</p>
                                </div>
                            </div>
                            </div>
                        ))}

                    </div>
                </div>

                <div className="grid grid-cols-1 pb-8 text-center mt-8">
                    <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">Education</h3>

                </div>

                <div className="grid grid-cols-1">
                    <div className="relative after:content-[''] after:absolute after:top-0 ltr:md:after:right-0 ltr:md:after:left-0 rtl:md:after:left-0 rtl:md:after:right-0 after:w-px after:h-full md:after:m-auto after:border-s-2 after:border-dashed after:border-gray-200 dark:after:border-gray-700 ms-3 md:ms-0">


                        {education.map((item, index) => (
                            
                            <div key={index} className={`ms-8 mt-0 ${index>0&&'mt-12'} md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-amber-500 md:after:mx-auto ltr:md:after:right-0 ltr:md:after:left-0 rtl:md:after:left-0 rtl:md:after:right-0 md:after:m-auto after:border-dashed after:border-gray-200 dark:after:border-gray-700 ms-3 md:ms-0 ltr:after:-left-9 rtl:after:-right-9 before:content-[''] before:absolute md:before:mx-auto ltr:md:before:right-0 ltr:md:before:left-0 ltr:before:-left-11 rtl:md:before:left-0 rtl:md:before:right-0 rtl:before:-right-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900`}>                                
                            <div className="grid md:grid-cols-2">
                                <div className={`md:text-${index % 2 === 0 ? 'end' : ''} md:${index % 2 === 0 ? 'me-8' : 'ms-8'} relative ${index % 2 === 0 ? '' : 'md:order-2'}`}>

                                    <h5 className="my-2 font-semibold text-lg">{item.company_name}</h5>
                                    <h6 className="text-sm mb-0">{item.startDate.slice(0,10)} - {item.endDate.slice(0,10)}</h6>
                                </div>

                                <div className={`ltr:float-left rtl:float-right text-${index % 2 === 0 ? 'start' : ''} md:${index % 2 === 0 ? 'ms-8' : 'me-8'} mt-6 md:mt-0 ${index % 2 === 0 ? '' : 'md:order-1'} md:text-${index%2!==0&&'end'}`} >
                                    <h5 className="title mb-1 font-semibold">{item.jobTitle}</h5>
                                    <p className="mt-3 mb-0 text-slate-400 text-[15px]">{item.summary}</p>
                                </div>
                            </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}