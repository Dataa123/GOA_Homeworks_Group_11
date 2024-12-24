import React from 'react';

function ConditionalRendering(){
    const boolean = false;

    return (
        <div>
            {boolean ? "Welcome" : "Please log in"}
        </div>
    );
}

export default ConditionalRendering;