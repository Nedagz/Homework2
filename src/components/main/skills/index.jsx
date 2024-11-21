import React from "react";
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import AndroidIcon from '@mui/icons-material/Android';
import CodeOffIcon from '@mui/icons-material/CodeOff';

const Skills = () => {
    return(
        <div className="mb-10">
            <h4 className="font-bold text-2xl text-red-400 border-b-4 inline-block border-red-400 pb-2 mb-4">Skills</h4>
            <p className="flex gap-2 text-lg font-medium"><CssIcon/>Tailwind Css</p>
            <p className="flex gap-2 text-lg font-medium"><JavascriptIcon/>Java</p>
            <p className="flex gap-2 text-lg font-medium"><AndroidIcon/>Andoid</p>
            <p className="flex gap-2 text-lg font-medium"><CodeOffIcon/>Html, Css, JS</p>
        </div>
    );
}

export default Skills;