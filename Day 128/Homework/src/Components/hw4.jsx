import React from 'react';

const Mappp = () => {
    const listn = ["data", "luka", "aravin"];

    return (
        <div>
            {listn.map((element, i) => {
                return <p key={i}>{element}</p>
            })}
        </div>
    );
}

export default Mappp;