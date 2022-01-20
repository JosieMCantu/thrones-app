import React, { useState, useEffect, createContext } from 'react';
import CharactersList from '../components/charcters/CharactersList';
import { fetchCharacters } from '../services/thronesApi';
import styles from '../components/app/App.css';
import BasicDropdown from '../components/ui/BasicDropdown';
import { menus } from '../services/arrays';


const CharactersContainer = () => {
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);
    const [toggle, setToggle] = useState('light');
    const [theme, setTheme] = useState('light');
    const [currentItem, setCurrentItem] = useState(-1);
    const [showDropdown, setShowDropdown] = useState(false);


    const handleSetExpanded = (id) => {
        if (id === currentItem) {
            setCurrentItem(-1);
        } else {
            setCurrentItem(id);
        }
    };

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
                    showDropdown={showDropdown}
                    setShowDropdown={() => setShowDropdown(!showDropdown)}
                    key={idx}
                    handleSetExpanded={handleSetExpanded}
                    currentItem={currentItem}
                    data={menu} />
            })}
            <br /><br />
            
            <h2>This changes the theme</h2>
            <div className={styles.wrapper}>
                <label onChange={onChange} className={styles.switch}>
                    <input type='checkbox' name='theme' value={toggle} />
                    <span className={styles.slider}></span>
                </label>
            </div>
    
            <CharactersList theme={theme} characters={characters} />

        </div>
    )
}

export default CharactersContainer;


{/* <a href='https://www.freepik.com/vectors/arrow'>Arrow vector created by rawpixel.com - www.freepik.com</a> */ }