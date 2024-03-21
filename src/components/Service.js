import React from "react";
import { Link } from "react-router-dom";
import * as Unicons from "@iconscout/react-unicons"
export default function Services(props){
    const {data} = props;
    const servicesData = data.services
    return(
        servicesData&&
            <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="service">
        <div className="container">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="md:text-2xl text-xl md:leading-normal leading-normal font-semibold">What do i offer?</h3>

            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
               {servicesData.map((item,index)=>{
                
                return(
                    <div className="px-6 py-2 shadow bg-img shadow-gray-200 hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900" key={index}
                     >
                        <img src={item.image.url} style={{objectFit:"contain",height:"50vh"}}/>
                    <div className="content">
                        <Link to="" className="title h5 text-[17px] font-medium hover:text-amber-500">{item.name}</Link>
                        <p className="text-slate-400 mt-3 text-[15px]">{item.desc}</p>
                        <p className="title h5 mt-3 font-medium text-amber-500">{item.charge}</p>
                        <div className="mt-5">
                            <Link href="" className="hover:text-amber-500 dark:hover:text-amber-500 after:bg-amber-500 dark:text-white transition duration-500 inline-flex items-center gap-1">Read More <Unicons.UilArrowRight width={16}/></Link>
                        </div>
                    </div>
                </div> 
                )
               })}
                 
            </div>
        </div>
    </section>
        
        
    )
}