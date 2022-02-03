import React from 'react';
import styles from '../app/App.css';

function ColorPicker({ handleColorChange, colorPicker, currentColor }) {

    const toggle = () => {
       
        const number = Math.floor(Math.random() * 4) + 1;
        handleColorChange(number);
        
        if (number === currentColor) {
            if (number === 4) {
                handleColorChange(number - 2)
            } else {
                handleColorChange(number + 1);
            }
        } else {
            handleColorChange(number);
        } 
    }

    return (
        <div className={styles.colorcontainer}>
            <span style={{
                          backgroundColor: `${colorPicker}`,
                          color: 'whitesmoke',
                          height: "50px",
                          width: "50px",
                          padding: "50px",
                          border: "1px solid black",
                          transition: ".5s ease",
                        }}></span>
            <button onClick={toggle}>Get a Color</button>
        </div>
    )
}

export default ColorPicker


