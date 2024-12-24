import React from 'react';

function NestedMap(){
    const arr = [["Apple", "No Apple"], ["Banana", "No Banana"], ["Cherry", "No Cherry"]];

    return (
        <ul>
            {arr.map((element, i) => {
                return <ul key={i}>{element.map((element, i) => {
                    return <li key={i}>{element}</li>
                })}</ul>
            })}
        </ul>
    );
}

export default NestedMap;
