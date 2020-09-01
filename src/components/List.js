import React from 'react';


export default function List(props){
    console.log(props)
    return(
        <div className="List">
        <h1>{props.headline}</h1>
        <ul>
            <li>Armenia</li>
            <li>Georgia</li>
            <li>France</li>
        </ul>
        </div>
    )
}