import React from 'react';

function DynamicAttributes(){
    const obj1 = {
        src: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
        alt: "Elephant"
    }

    return (
        <div>
            <img {...obj1} />
        </div>
    );
}

export default DynamicAttributes;