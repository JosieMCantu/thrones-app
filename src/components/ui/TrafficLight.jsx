import React, { useState, useEffect } from 'react';
import styles from '../app/App.css';
import fetchLight from '../../services/fetchLight';
import { fetchColors } from '../../services/apiFetch';

function TrafficLight() {
    const [mode, setMode] = useState('order');
    const [color, setColor] = useState('white');
    const [colorArray, setColorArray] = useState([]);
    const [index, setIndex] = useState(0);
    const [stop, setStop] = useState(true);

    const reference = ['green', 'yellow', 'red'];

    const getColor = async () => {
        await fetchLight().then((result) => {
            setColorArray(colorArray.concat(result))
            if (mode === 'chaos') {
                setColor(result);
            }
        })
    }
    const apiColor = async () => {
        await fetchColors().then((result) => {
            setColor(result);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (mode === 'order' || mode === 'automatic') {
            // removes duplicates from the array in state
            const newSet = Array.from(new Set(colorArray));

            // sorts newSet according to the reference array
            const sortArr = newSet.sort((a, b) => reference.indexOf(a) - reference.indexOf(b));

            // iterate index array and restart the loop at the end of array
            setIndex(idx => idx < sortArr.length ? (idx + 1) % sortArr.length : idx);

            // set color array with the sorted array
            setColorArray(sortArr);

            // set color according to state of index
            setColor(sortArr[index]);

            if (mode === 'automatic') {
                stop ? setStop(false) : setStop(true);
            }

        } else if (mode === 'api') {
            apiColor();
        } else {
            getColor();
        }
    }

    const handleChange = ({ target }) => {
        setMode(target.value);
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

    useEffect(() => {
        if (!stop && mode === 'automatic') {
            const timer = setTimeout(() => {
                setIndex(index => index < colorArray.length
                    ? (index + 1) % colorArray.length
                    : index);
                setColor(colorArray[index]);
            }, 1000);

            if (stop) return clearTimeout(timer)
        }
    }, [index]);

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
                    <input
                        onChange={handleChange}
                        type='radio'
                        name='mode'
                        value='order'
                    />
                </label>
                <label>
                    Chaos
                    <input
                        onChange={handleChange}
                        type='radio'
                        name='mode'
                        value='chaos'
                    />
                </label>
                <label>
                    Api
                    <input
                        onChange={handleChange}
                        type='radio'
                        name='mode'
                        value='api'
                    />
                </label>
                <label>
                    Automatic
                    <input
                        onChange={handleChange}
                        type='radio'
                        name='mode'
                        value='automatic'
                    />
                </label>
                <button>Change!</button>
            </form>
        </div>
    )

}

export default TrafficLight
