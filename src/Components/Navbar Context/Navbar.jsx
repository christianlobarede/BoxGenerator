import React from 'react';

const Navbar = (props) =>{
    return(
        <div className="navbar">
            <p>Hello {props.name}</p>
        </div>
    )
}

export default Navbar