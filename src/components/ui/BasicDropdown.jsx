import React, {useState} from 'react';
import styles from '../app/App.css';
import up from '../../assets/up-arrow.png';
import down from '../../assets/down-arrow.png';

const BasicDropdown = ({ data, currentItem, handleSetExpanded }) => {

    const headerIcon = currentItem === data.id
        ? (<img className={styles.arrow} src={up} alt='Up' />)
        : (<img className={styles.arrow} src={down} alt='Down' />);

    const toggleSelf = () => {
        setIsOpen(true);
        const id = data.id;
        handleSetExpanded(id);
    };
    
    return (
        <>
        <div onClick={toggleSelf} className={styles.dropdownwrapper}>
            <div className={styles.dropdown}>
                <ul>
                    <li>{headerIcon}</li>
                    <li>{data.title}</li>
                </ul>
            </div>
            
            <div className={styles.itemswrapper}>
                {currentItem === data.id 
                ? (<div className={styles.dropdownitems} aria-expanded={!isOpen}>{data.content}</div>) 
                : null}
            </div>
            
        </div>
        </>
    );
};
export default BasicDropdown;

            