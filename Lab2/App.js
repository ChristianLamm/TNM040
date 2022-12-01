import logo from './logo.svg';
import countries from 'world-countries';
import CountryInfo from './CountryInfo';
import CountryDetails from './CountryDetails';
import CountryList from './CountryList';
import './App.css';
import { useState } from 'react';
import {Route, BrowserRouter, Routes, Link, Switch, useParams} from "react-router-dom";

export default function App() {



    return(
    <div>
     <BrowserRouter>
          <Routes>
    
    <Route path="/" element={<CountryList />}/>
    <Route path="/country/:cca3" element={<CountryDetails />}/>
    
          </Routes>
    </BrowserRouter> 
    
    </div>
    )
    
    }

