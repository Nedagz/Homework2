import React from "react";
import Aboutme from "./about_me";
import Experience from "./experience";
import Projects from "./projects";
import Education from "./education";
import Skills from "./skills";
import Contact from "./contact";

const Main = () => {
    return(
        <div className="box-border px-4 py-4 font-sans md:flex md:flex-row-reverse md:gap-6 md:items-center lg:gap-12">
            <div>
            <Aboutme/>
            <Experience/>
            <Projects/>
            </div>
            <div className="md:flex md:flex-col-reverse	md:self-stretch">
            <Education/>
            <Skills/>
            <Contact/>
            </div>
            
            
        </div>
    );
}

export default Main;