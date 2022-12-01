import logo from './logo.svg';
import countries from 'world-countries';
import CountryInfo from './CountryInfo';
import App from './App';
import CountryList from './CountryList';
import './App.css';
import { useState } from 'react';
import {Route, BrowserRouter, Routes, useParams} from "react-router-dom";
import FIltrerat from './CountryList';

// const getCountryByCca3 = props => { 
//     let CountryByCca3 = FIltrerat.find(found => found.cca3 === props);
// console.log(CountryByCca3);
//     return CountryByCca3
//   }

function getCountryByCca3(id) {

return countries.find(country => country.cca3 === id)

}

function CountryDetails() {

  

    // const value = getCountryByCca3(match.params.cca3);
    // const borderCountries = value.borders.map(border => getCountryByCca3(border));
    // const SortedBorderCountries = borderCountries.sort((a,b) => b.area - a.area);

const params = useParams();
const id = params.cca3;
const thisCountry = getCountryByCca3(id);

const borders = thisCountry.borders.map(id=> getCountryByCca3(id));
borders.sort((a,b) => b.area - a.area);

const soughtAfterBorders = [...borders, thisCountry];
soughtAfterBorders.sort((a,b)=> b.area - a.area);

    

return (

<div>    
  <div className="SearchBar"></div>
<CountryInfo
data={thisCountry}
details
/>

<h2>Number of border countries: {borders.length}</h2>
{borders.map(c => (
<CountryInfo data={c}/>

))}

  </div>

)
    
    }
    
    
    export default CountryDetails;