import React, { Component } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import { AuthContext } from './contexts/AuthContext';

class Navbar extends Component {
   
    render() { 
        
        return ( 
            <AuthContext.Consumer>{(AuContext) => (
                    
                <ThemeContext.Consumer>{(context) => {
                    // console.log(AuContext)
                    const { isAuthenticated, toggleAuth }= AuContext
                    const { isLightTheme, light, dark } = context;
                    const themed = isLightTheme ? light : dark;
                    return (
                    <nav style={{background: themed.ui, color: themed.style}}>
                        <h1>Context App</h1>
                        <div onClick={toggleAuth}>
                            {isAuthenticated ? 'IsLogged In' : 'isLogged Out'}
                        </div>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                    )
                }}</ThemeContext.Consumer>
            )}

            </AuthContext.Consumer>
              
         );
    }
}
 
export default Navbar;