import React from 'react';

function RenderList(){
    const arr = ["Apple", "Banana", "Cherry"];

    return (
        <ul>
            {arr.map((element, i) => {
                return <li key={i}>{element}</li>
            })}
        </ul>
    );
}

export default RenderList;