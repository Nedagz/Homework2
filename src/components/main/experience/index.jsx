import React from "react";

const Experience = () => {
    return(
        <div className="mb-10">
            <h4 className="font-bold text-2xl text-red-400 border-b-4 inline-block border-red-400 pb-2 mb-4">Professional Experience</h4>
            <h3 className="font-bold text-lg">Netcracker Technology | Software Engineer</h3>
            <p className="font-medium mb-2">2021 - Present</p>
            <h3 className="font-semibold text-lg">Key Responsibilities</h3>
            <ul>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-black inline-block rounded-full mr-2"></span>Working on customer facing product</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-black inline-block rounded-full mr-2"></span>Deliverying highly efficient solutions</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-black inline-block rounded-full mr-2"></span>Solving critical bugs</li>
            </ul>

            <h3 className="font-bold text-lg mt-10">TailwindFlex.com | Lead</h3>
            <p className="font-medium mb-2">2020 - 2021</p>
            <h3 className="font-semibold text-lg">Key Responsibilities</h3>
            <ul>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-black inline-block rounded-full mr-2"></span>Developed usable components</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-black inline-block rounded-full mr-2"></span>Solving complex problems</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-black inline-block rounded-full mr-2"></span>Solving critical bugs</li>
            </ul>
        </div>
    );
}

export default Experience;