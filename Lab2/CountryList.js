import logo from './logo.svg';
import countries from 'world-countries';
import CountryInfo from './CountryInfo';
import App from './App';
import CountryDetails from './CountryDetails';
import './App.css';
import { useState } from 'react';
import {Route, BrowserRouter, Routes} from "react-router-dom";



function CountryList() {
 
let Sorterat = countries.sort((a,b) => b.area - a.area);
let relevanta = Sorterat.filter(c => c.name.common != "Antarctica");

const Filtrerat = Sorterat.filter(c => c.name.common != "Antarctica").slice(0,15);
const Topp15 = Filtrerat.slice(0,15);
const First5 = Filtrerat.slice(0,5);
const First15 = Filtrerat.splice(5,15);

const Largest = Topp15[0].area;

const Capital = countries.capital;
const Region = countries.region;

const [searchString, setSearchString] = useState("");

const textField = ( event ) => {
  setSearchString(event.target.value)
  console.log(searchString);
}

const matchText = ( c ) => {
let  word =  c.name.common;
const lowerCaseWord = word.toLowerCase();
const lowerCaseSearchString = searchString.toLowerCase();

return lowerCaseWord.indexOf(lowerCaseSearchString) === 0;
}

const RelFiltrerat = relevanta.filter(matchText);
const RelSortFilt = RelFiltrerat.slice(0,5);



return(

<div className='App'> {} 
  
<input className='textField' onChange={textField} type="text" name="name" id="myText" />

<div>
{RelSortFilt.map((country) => 
<CountryInfo data ={country} Largest={Largest} ></CountryInfo>
  )}

</div>

<div className='Topp15'> 

{/* <div className='topp5' >
{First5.map((country) => 
<CountryInfo data ={country} Largest={Largest} moreInfo={{Capital,Region}} ></CountryInfo>
)}
</div>

<div className='Rest'>
{First15.map((country) => 
<CountryInfo data ={country} Largest={Largest} ></CountryInfo>
)}</div> */}
</div>

</div>
);

}



export default CountryList;
