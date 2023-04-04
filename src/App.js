import './css/page.css';
import Navigation from './body/Navigation';
import Delegations from './body/DelegationsComponent';
import Ville from './body/CitiesComponent';
import{Routes, Route} from "react-router-dom";

  

    function App() {
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


  export default App;
  
