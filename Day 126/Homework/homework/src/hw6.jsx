import React from 'react';

function Template(){
    const name = "John";
    const age = 30;

    return (
        <div>
            <p>{`${name} is ${age} years old.`}</p>
        </div>
    );
}

export default Template;