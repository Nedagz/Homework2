import React from "react";

export const Toggle = ({handleChange, isChecked}) => {
    return(
        <div className=" bg-gray-600 p-4 font-semibold rounded text-white mb-8">
            <input className="hidden" type="checkbox" id="check" checked={isChecked} onChange={handleChange}/>
            <label htmlFor="check">Switch to Light Theme</label>
        </div>
        
    )

}

export default Toggle;