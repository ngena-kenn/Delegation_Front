import './css/page.css';
import React, {Component} from 'react';
import Navigation from './body/Navigation';
import Delegations from './body/DelegationsComponent';
import Ville from './body/CitiesComponent';
import{Routes, Route} from "react-router-dom";

  

/*class Page1 extends Component{
    render()}*/
    function Page1() {
        return(
            <body>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Delegations />} />
                    <Route path="/delegations" element={<Delegations />} />
                    <Route path="/villes" element={<Ville />} />
                </Routes>    
           </body>          
        );
    }


  export default Page1;
  
