import React from "react";

const Button = ({type, title,onClick, ...props}) => {
    return(
        <button type={type} onClick={onClick && onClick} {...props} className="p-2 bg-blue-400 rounded">{title}</button>
    )
}

export default Button;