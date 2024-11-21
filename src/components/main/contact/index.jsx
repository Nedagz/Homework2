import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


const Contact = () => {
    return(
        <div className="mb-10 mt-10">
             <h4 className="font-bold text-2xl text-red-400 border-b-4 inline-block border-red-400 pb-2 mb-4">My Contact</h4>
             <p className="flex gap-2 text-lg font-medium"><EmailIcon/>amitpachange@gmail.com</p>
             <p className="flex gap-2 text-lg font-medium"><YouTubeIcon/>4574358775</p>
             <p className="flex gap-2 text-lg font-medium"><FacebookIcon/>sale galli latur</p>
             <p className="flex gap-2 text-lg font-medium"><TwitterIcon/>amitpachange21</p>
        </div>
    );
}

export default Contact;