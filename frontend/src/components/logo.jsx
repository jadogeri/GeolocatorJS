import React from 'react';
import logo from "../assets/logo.jpg"


const Logo = () => {
    return (
        <img 
            src={logo}
            alt='logo'
            style={{height : 30,width : 30, borderRadius : 15}}
        
        />
    )
}

export default Logo;
