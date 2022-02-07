import React, { useState, useEffect, createContext } from 'react';
import CharactersList from '../components/charcters/CharactersList';
import { fetchCharacters } from '../services/thronesApi';
import styles from '../components/app/App.css';
import BasicDropdown from '../components/ui/BasicDropdown';
import { menus, colors } from '../services/arrays';
import ColorPicker from '../components/ui/ColorPicker';
import ColorScroll from '../components/ui/ColorScroll';
import TrafficLight from '../components/ui/TrafficLight';


const CharactersContainer = () => {
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);
    const [toggle, setToggle] = useState('light');
    const [theme, setTheme] = useState('light');
    const [currentItem, setCurrentItem] = useState(-1);
    const [colorPicker, setColorPicker] = useState('#778899');
    const [currentColor, setCurrentColor] = useState('');
    const [colorScroll, setColorScroll] = useState('778899');
    const [stop, setStop] = useState(true);

    const generateColor = () => {
        setColorScroll(Math.random().toString(16).slice(-6));
        return { colorScroll, generateColor }
    }

    const handleColorScroll = () => {
        stop ? setStop(false) : setStop(true);        
    }
    
    if (!stop) {
        setTimeout(() => {
            generateColor(); 
        }, 500);
    }

    const handleSetExpanded = (id) => {
        if (id === currentItem) {
            setCurrentItem(-1);
        } else {
            setCurrentItem(id);
        }
    };
    
    const handleColorChange = (number) => {
        const findColor = colors.map((item) => {
            if(number === item.id){
             setColorPicker(item.hex);
             setCurrentColor(number);
            }
        })
    }

    const onChange = ({ target }) => {
        if (target.value !== 'light') {
            setTheme('light')
            setToggle('light')
        } else {
            setTheme('dark')
            setToggle('dark')
        }
    }

    useEffect(() => {
        fetchCharacters()
            .then(setCharacters)
            .finally(() => setLoading(false))
    }, []);

    if (loading) {
        return <h1>Loading...</h1>
    }
    
    return (
        <div className={styles}>
            {/* npm run start http://localhost:7891/ */}

            {menus.map((menu, idx) => {
                return <BasicDropdown
                    key={idx}
                    handleSetExpanded={handleSetExpanded}
                    currentItem={currentItem}
                    data={menu} />
            })}
            
            <ul className={styles.secondnav}>
                <li>
                    <div className={styles.colorscroll}>
                    <h2>Scroll through colors</h2>
                    <ColorScroll
                        colorScroll={colorScroll}
                        handleColorScroll={handleColorScroll} />
                    </div>
                </li>
                <li>
                    <div className={styles.trafficlight}>
                    <h2>Traffic Light Demo</h2>
                    <TrafficLight />
                    </div>
                </li>
                <li>
                    <div className={styles.colorpicker}>
                    <h2>Change the colors</h2>
                    <ColorPicker 
                        currentColor={currentColor}
                        colorPicker={colorPicker} 
                        handleColorChange={handleColorChange} />
                    </div>
                </li>
                <li>
                    <div className={styles.wrapper}>
                    <h2>Change the theme</h2>
                        <label onChange={onChange} className={styles.switch}>
                            <input type='checkbox' name='theme' value={toggle} />
                            <span className={styles.slider}></span>
                        </label>
                    </div>
                </li>
            </ul>
            
            <CharactersList theme={theme} characters={characters} />

        </div>
    )
}

export default CharactersContainer;


{/* <a href='https://www.freepik.com/vectors/arrow'>Arrow vector created by rawpixel.com - www.freepik.com</a> */ }
