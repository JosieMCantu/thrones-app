import React from 'react';
import { getQueens } from '../services/queensApi';
import QueensList from '../components/queens/QueensList';
import { useState, useEffect } from 'react/cjs/react.development';


function QueensContainer() {
    const [loading, setLoading] = useState(true);
    const [queens, setQueens] = useState([]);
    
    
    useEffect(() => {
        getQueens()
        .then((result) => setQueens(result))
        .finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }
    console.log(queens)
    return (
        <div>
            <h1>Queens Container</h1>
            <QueensList queens={queens} />
        </div>
    )
}

export default QueensContainer;

