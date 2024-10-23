import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
   const [countries, setCountries] = useState([]);
   const [visitedCountries, setVisitedCountries] = useState([]);
   const [visitedFlags, setVisitedFlags] = useState([]);

   
   useEffect(() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
   },[])

   const handleVisitedCountries = country =>{
    console.log('added visited country');
    const newVisitedCountries = [...visitedCountries, country]
    setVisitedCountries(newVisitedCountries)
   }
   const handleVisitedFlags = flags =>{
    console.log('added flags');
    const newVisitedFlags = [...visitedFlags, flags];
    setVisitedFlags(newVisitedFlags)
   }
    return (
        <div>
            <h2>Countries : {countries.length}</h2>
            <div>
                <h3>Visited Countries : {visitedCountries.length}</h3>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="flags-container">
                {
                    visitedFlags.map((flag , idx) => <img key={idx}  src={flag}></img>)
                }
            </div>
            <div className="countries-section">
               {
                countries.map(country => <Country country={country} handleVisitedFlags={handleVisitedFlags} handleVisitedCountries={handleVisitedCountries} key={country.cca3} ></Country>)
            }  
            </div>
           
        </div>
    );
};

export default Countries;