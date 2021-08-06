import React, {useReducer} from 'react'

const initialState = {
    name: { 
        value:'Hola Mundo',
        error: null
    },
    email: '',
};

const reducer = (state, action) =>{
    return{
        ...state,
        [action.type]: action.payload
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
                        value={state.email}
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
