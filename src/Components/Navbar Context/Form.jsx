import React, { useState } from 'react';
import Navbar from './Navbar';


const Form = () =>{
    const [name, setName] = useState('')

    const handlerInput = (e) =>{
        e.preventDefault();
        setName(e.target.value);
    }

    return (
        <div>
        <Navbar name={name}/>
        <form>
            <label>
                <span>Ingrese su nombre</span>
                <input type="text" onChange={handlerInput}/>
            </label>
        </form>
        </div>
    )
}

export default Form;