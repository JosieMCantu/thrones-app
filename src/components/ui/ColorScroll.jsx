import React from 'react';
import { generatePath } from 'react-router-dom/cjs/react-router-dom.min';
import styles from '../app/App.css';

function ColorScroll({ colorScroll, handleColorScroll }) {

    return (
        <div className={styles.colorcontainer}>
            <span style={{
                backgroundColor: `${'#' + colorScroll}`,
                color: 'whitesmoke',
                height: "50px",
                width: "50px",
                padding: "50px",
                border: "1px solid black",
                transition: ".2s ease",
            }}></span>
            <button onClick={handleColorScroll}>On/Off</button>
        </div >
    )
}

export default ColorScroll
