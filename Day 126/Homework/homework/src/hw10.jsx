import React from 'react';

function Interpolation(){
    const greeting = "Hello";
    const name = "Alice";
    const string = `${greeting}, ${name}!`

    return (
        <div>
            <p>{string}</p>
        </div>
    );
}

export default Interpolation;