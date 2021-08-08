import React, { useState } from 'react';


const BoxForm = () =>{
    const [color, setColor] = useState('')
    const [boxObject, setBoxObject] = useState([])
    
    const handleColor = (e) =>{
        e.preventDefault();
        setColor(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setBoxObject(boxObject => [...boxObject, {"color": color}]);
        setColor('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <span>Ingrese un color:</span>
                <input
                    type="text"
                    onChange={handleColor}
                    value={color}
                    />
            </label>
            <input type="submit" value="Agregar"/>
            <p>{JSON.stringify(boxObject)}</p>
            {boxObject.map((box) =>(<Boxes bg={box.color}/>))}
        </form>
    )
}

const Boxes = (props) =>{
    const boxStyle = {
        border: "1px solid black",
        height: "100px",
        width: "100px",
        margin: "10px", 
        display: "inline-block",
        borderRadius: "5px",
        backgroundColor: ""+ props.bg +"",
    };
    return (
        <div style={boxStyle}>

        </div>
    )
}

export default BoxForm;