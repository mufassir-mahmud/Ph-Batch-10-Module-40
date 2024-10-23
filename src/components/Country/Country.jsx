import { useState } from 'react';
import './Country.css'

const Country = ({country,handleVisitedCountries,handleVisitedFlags}) => {
    
    const {name, flags, population, area, cca3} = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () =>{
        setVisited(!visited)
    }
    // console.log(handleVisitedCountries);
    return (
        <div className={`country ${visited ? 'visited': 'going'}`}>
            <h3 style={{color: visited? 'purple': 'black'}}>Name : {name.common}</h3>
            <img src={flags.png} alt="" />
            <h3>Population : {population}</h3>
            <p>Area : {area}</p>
            <p>Code: {cca3}</p>
            <button style={{marginRight:'10px'}} onClick={() => handleVisitedCountries(country)}>Mark As Visited</button>
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Visited Flags</button>
            <button onClick={handleVisited}>{visited ?'Visited' : 'Going'}</button> <br />
            <h3>{visited ? 'I Have Visit This Country' : 'I want To visit This country'}</h3>
        </div>
    );
};

export default Country;