import React, { useState } from 'react';

const Content = [
    {id: 1, content: "Hello World"},
    {id: 2, content: "Hello React"},
    {id: 3, content: "Hello Javascript"},
];


const TabComponent = () =>{
    const [tab, setTab] = useState('')


    const ButtonTab = (props) =>{
        return (
            <button onClick={()=> setTab(props.cnt)}>tab{props.tab}</button>
        )
    }
    return (
        <div>
            {Content.map((tab)=>(<ButtonTab cnt={tab.content} tab={tab.id}/>))}
            <p>{tab}</p>
        </div>
    )
}




export default TabComponent;