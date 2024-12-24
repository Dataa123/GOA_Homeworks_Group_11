import React from 'react';

function RenderTable(){
    const listn = [{name: "data", age: 17}, {name: "atuka", age: 16}, {name: "lasha", age: 16}];

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {listn.map((element, i) => {
                    return (
                        <tr key={i}>
                            <td>{element.name}</td>
                            <td>{element.age}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default RenderTable;