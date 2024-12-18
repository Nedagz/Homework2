// src/pages/CountryDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetails = () => {
      // const [countries, setCountries] = useState([]);
  const { cca3 } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams()
  console.log(params);
  

  useEffect(() => {
    const fetchCountryDetails = async () => {
      const response = await fetch(`https://restcountries.com/v3.1/alpha/${cca3}`)
      const data = await response.json();
      setCountry(data[0]);
      setLoading(false);
    };

    fetchCountryDetails();
  }, [cca3]);
  //  useEffect(() => {
  //       const fetchCountries = async () => {
  //         const response = await fetch('https://restcountries.com/v3.1/all');
  //         const data = await response.json();
  //         setCountries(data);
  //       };
        
  //       fetchCountries();
  //     }, []);
  

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Region: {country.region}</p>
      <p>Population: {country.population}</p>
      {/* سایر اطلاعات کشور */}
    </div>
  );
};

export default CountryDetails;





