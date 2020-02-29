import React from 'react';

function PersonCard(props){
    return(
        <div>
        <p onClick= {props.click}> Name: {props.name}</p>
        <p> Name: {props.age}</p>

        </div>
    )
}

export default PersonCard