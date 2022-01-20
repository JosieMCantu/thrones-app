import React from 'react';
import styles from '../app/App.css';
import up from '../../assets/up-arrow.png';
import down from '../../assets/down-arrow.png';

const BasicDropdown = ({ data, currentItem, handleSetExpanded, showDropdown, setShowDropdown }) => {
    const headerIcon = currentItem === data.id
        ? (<img className={styles.arrow} src={up} alt='Up' />)
        : (<img className={styles.arrow} src={down} alt='Down' />);

    const toggleSelf = () => {
        const id = data.id;
        handleSetExpanded(id);
        setShowDropdown();
    };
    return (
        <>
        <div className={styles.menuwrapper}>
            
            <div onClick={toggleSelf} className={styles.trigger}>
                <div>{headerIcon}</div>
                <div>{data.title}</div>
            </div>
            
            
            {currentItem === data.id 
            ? (<div className={styles.listitem}>{data.content}</div>) 
            : null}
            
            
        </div>
        </>
    );
};
export default BasicDropdown;

