import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

const style = {textDecoration:'none'}

class Navbar extends React.Component
{

    render()
    {
     // console.log("navbar render called");

        return(
         <header className = "header">
            <div className = "container">
              <div className = "brand-icon">
                <p>ICON</p>
              </div>
              <div className = "navigation-link">
                <ul className="ul-list">
                   <Link to = "/" style = {style}><li>  HOME  </li></Link> 
                   <Link to = "/watchlist" style = {style}><li> WATCHLIST </li></Link> 
                   {/* <Link to = "/about" style = {style}><li> ABOUT </li></Link>  */}
                </ul>
              </div>
            </div>
         </header>
        )
    }
}

export default Navbar;