import React from 'react'

function Queen({name}) {
    return (
        <div>
            <h1>One Queen</h1>
            <span style={{
                backgroundColor: "thistle",
                color: 'black',
                height: "50px",
                width: "50px",
                padding: "50px",
                border: "1px solid black",
                }}>Name: {name}</span>
        </div>
    )
}

export default Queen;
