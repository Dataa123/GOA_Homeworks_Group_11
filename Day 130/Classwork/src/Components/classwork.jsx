import React from 'react';

// const Classwork1 = ({props}) => {
//     return (
//         <ul>
//             {props.map((element, i) => {
//                 return <li key={i}>{element}</li>
//             })}
//         </ul>
//     );
// }

// export default Classwork1;

const Classwork2 = ({props}) => {
    return (
        <ul>
            {props.map((element, i) => {
                return <li key={i}>{element}</li>
            })}
        </ul>
    );
}

export default Classwork2;