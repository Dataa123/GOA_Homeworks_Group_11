import React from 'react';

function DynamicRender(){
    const p = <p>This is dynamic!</p>;

    return (
        <div>
            {p}
        </div>
    );
}

export default DynamicRender;