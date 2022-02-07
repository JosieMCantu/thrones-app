import React, { useState, useEffect } from 'react';
import styles from '../app/App.css';
import fetchLight from '../../services/fetchLight';

function TrafficLight() {
    const [mode, setMode] = useState('order');
    const [color, setColor] = useState('white');
    const [colorArray, setColorArray] = useState([]);
    const [count, setCount] = useState(0);

    const reference = ['green', 'yellow', 'red'];

    const getColor = async () => {
        await fetchLight().then((result) => {
                setColorArray(colorArray.concat(result))
                if (mode === 'chaos') {
                    setColor(result);
                }
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (mode === 'order') {
            // removes duplicates from the array in state
            const newSet = Array.from(new Set(colorArray));

            // sorts newSet according to the reference array
            const sortArr = newSet.sort((a, b) => reference.indexOf(a) - reference.indexOf(b));

            // iterate count array and restart the loop at the end of array
            setCount(idx => idx < sortArr.length ? (idx + 1) % sortArr.length : idx);

            // set color array with the sorted array
            setColorArray(sortArr);
            // set color according to state of count
            setColor(sortArr[count]);
        } else {
            getColor();
        }
    }

    const handleChange = ({ target }) => {
        setMode(target.value)
    }

    // populate the colorArray on mount
    useEffect(() => {
        const timer = setTimeout(() => {
            getColor();
        });

        // stop populating once all colors from the refernce array are present
        const containsAll = reference.every(item => colorArray.includes(item));
        if (containsAll) return clearTimeout(timer);

    });

    return (
        <div className={styles.lightwrapper}>
            <div className={styles.trafficlightcontainer}>
                <div className={`${color === 'red' ? styles.red : styles.white}`}></div>
                <div className={`${color === 'yellow' ? styles.yellow : styles.white}`}></div>
                <div className={`${color === 'green' ? styles.green : styles.white}`}></div>
            </div>
            <form onSubmit={handleSubmit}>
                <label>
                    Order
                    <input onChange={handleChange} type='radio' name='mode' value='order' />
                </label>
                <label>
                    Chaos
                    <input onChange={handleChange} type='radio' name='mode' value='chaos' />
                </label>
                <button>Change!</button>
            </form>
        </div>
    )

}

export default TrafficLight
