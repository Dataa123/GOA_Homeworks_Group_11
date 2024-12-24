import React from 'react';

function InlineStyles(){
    const style = {
        width: "200px",
        height: "200px",
        backgroundColor: "black"
    }

    return (
        <div style={style}></div>
    );
}

export default InlineStyles;