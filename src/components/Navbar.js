import React, { Component } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

class Navbar extends Component {
   
    render() { 
        
        return ( 
            <ThemeContext.Consumer>{(context) => {
                const { isLightTheme, light, dark } = context;
                const themed = isLightTheme ? light : dark;
                return (
                <nav style={{background: themed.ui, color: themed.style}}>
                    <h1>Context App</h1>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                )
            }}</ThemeContext.Consumer>
              
         );
    }
}
 
export default Navbar;