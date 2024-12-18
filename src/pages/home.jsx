import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { COUNTRY_ROW_ROUTE } from "../constant/routes";

const HomeComponent = () => {
    const [countries, setCountries] = useState([]);
    const navigate = useNavigate();
   
  
    useEffect(() => {
      const fetchCountries = async () => {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setCountries(data);
      };
      
      fetchCountries();
    }, []);

      
    return(
        <div className="grid grid-cols-4 gap-4 grow">
        {countries?.map((item) => (
          // <CardComponent key={item.id} info={item} />
           <div key={item.cca3} className="flex flex-row justify-between items-center gap-4 border-2 p-4">
                <img src={item.flags.png} alt={item.name.common} className="w-[100px] h-[60px]" />
                <h1
                  className="text-blue-400 hover:underline cursor-pointer"
                  onClick={(e) => navigate(`${COUNTRY_ROW_ROUTE}/${item.cca3}`)}>
                  {item.name.common}
                </h1>
               
              </div>
        ))}
      </div>
    )
}

export default HomeComponent;





