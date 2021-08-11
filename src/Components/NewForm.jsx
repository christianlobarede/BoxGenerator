import React, {useReducer, useState} from 'react'

const initialState = {
    name: { 
        value:'',
        error: true
    },
    email: { 
        value:'',
        error: true
    },
};

const reducer = (state, action) =>{
    return{
        ...state,
        [action.type]: action.payload,
        error: false
    };
}

const NewForm = () =>{
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleChange =(e)=>{
        const {name, value} = e.target;
        dispatch({type: name, payload: value});
    }

    return(
        <div className="Form">
            {state.name.error ? <p>Ingrese un nombre</p> : ""}
            {state.email.error ? <p>Ingrese un email</p>: ""}
            <div>
                <label>
                    <span>Name:</span>
                <input 
                    name="name"
                    value={state.name.value}
                    onChange={handleChange}/>
                </label>
            </div>
            <div>
                <label>
                    <span>Email:</span>
                    <input
                        name="email"
                        value={state.email.value}
                        onChange={handleChange}/>
                </label>
            </div>
                <input type="submit"/>
                <p>{JSON.stringify(state)}</p>
                <p>{JSON.stringify(initialState)}</p>
        </div>
    );
}

export default NewForm;
