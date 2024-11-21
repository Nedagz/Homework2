import React from "react";
import image from "../../assets/images/2.png"

const Header = () => {
    return(
        <header className="box-border font-sans bg-red-400 flex justify-between items-center px-4 py-8 md:relative lg:text-start ">
            <div className="w-20 h-20 md:w-40 md:h-40 md:absolute md:top-5 lg:mr-80">
                <img src={image} className="w-fit h-fit md:rounded-full	"/>
            </div>
            <div className="text-white font-semibold md:grow md:text-center">
                <h2 className="text-2xl font-bold">Amir Pachange</h2>
                <p>Software Engineer</p>
            </div>
        </header>
    );
}
export default Header;
