import React, { Component } from 'react';
import { ThemeContext } from './contexts/ThemeContext';


class BookList extends Component {
    static contextType = ThemeContext;
    render() { 
        const { isLightTheme, dark, light } = this.context;
        const themed = isLightTheme ? light : dark;
        return ( 
            <div className='book-list' style={{background: themed.bg, color: themed.style}}>
                <ul>
                    <li style={{ background: themed.ui }}>The way of Kings</li>
                    <li style={{ background: themed.ui }}>The name of the wind</li>
                    <li style={{ background: themed.ui }}>The final empire</li>
                </ul>
            </div>
         );
    }
}
 
export default BookList;