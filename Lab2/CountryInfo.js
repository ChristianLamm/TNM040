import logo from './logo.svg';
import countries from 'world-countries';
import App from './App';
import CountryDetails from './CountryDetails';
import './App.css';
import { useState } from 'react';
import {Route, BrowserRouter, Routes, Link, useParams} from "react-router-dom";


function CountryInfo({data, Largest, moreInfo, lessInfo}){

    

     return( 
    <><div className="CountInfo">
             <Link style={{textDecoration: 'none'}} to={'/country/' + data.cca3} className='namn'>{data.name.common} </Link> 
             <p className="area">{data.area} km </p><p><sup>2</sup></p>

         </div>
    
    
    <div className="bar" style={{width: ((data.area/Largest)*100)+"%" }}>  </div>

    {moreInfo &&
        <div className="Detailed">
        <a>Capital: {data.capital}</a>
        <p>Region: {data.region}</p>
        </div>
        
    }

            </> )
        
        }
        
        

        export default CountryInfo;