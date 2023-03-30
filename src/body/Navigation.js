import '../css/page.css';
import React, {Component,} from 'react';
import logo from '../images/logo-header.png';
import { Link } from "react-router-dom";


class Navigation extends Component{
    render() {
        return (
            <nav class="header">
                <div class="logo">
                    <img src={logo} className="logo" alt='logo' />
                </div>
                <div>
                    <div class="connect">
                        <Link to="/delegations">Voir les délégations</Link>
                    </div>
                    <div class="connect">
                        <Link to="/villes">Voir les villes</Link>
                    </div>
                </div>
                
            </nav>
        );
    }
    
}
export default Navigation;