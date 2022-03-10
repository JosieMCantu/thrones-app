import React from 'react';
import Queen from '../queens/Queen';

function QueensList({ queens }) {
    // console.log('here!', queens)
    return (
        <div>
            <h1>All the Queens</h1>
            <ul>{queens.map((queen) => {
                
                <li><Queen name={queen.name} /></li>
            })}    
            </ul> 

            {/* <Queen/> */}
        </div>
    )
}

export default QueensList;
