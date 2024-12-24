import React from 'react';

const DynamicAttributes = () => {
    const attributes = {
        src: "https://freerangestock.com/sample/23839/random-paint-splats-background.jpg",
        alt: "Art",
        width: "20%"
    };

    return (
        <div>
            <img {...attributes} />
        </div>
    );
}

export default DynamicAttributes;