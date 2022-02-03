import React, {useState} from 'react';
import styles from '../app/App.css';
import up from '../../assets/up-arrow.png';
import down from '../../assets/down-arrow.png';

const BasicDropdown = ({ data, currentItem, handleSetExpanded }) => {
    const [isOpen, setIsOpen] = useState(false);


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
        <div className={styles.dropdownwrapper}>
            <div className={styles.dropdown}>
                <ul onClick={toggleSelf} className={isOpen ? "dropdown active" : "dropdown"}>
                    <li>{headerIcon}</li>
                    <li>{data.title}</li>
                </ul>
            </div>
            
            <div className={styles.itemswrapper}>
                {currentItem === data.id 
                ? (<div className={styles.dropdownitems}>{data.content}</div>) 
                : null}
            </div>
            
        </div>
        </>
    );
};
export default BasicDropdown;

            {/* <ul>
                <li><button onClick={toggleSelf} className={styles.trigger}></button>
                    <ul>
                        <li>{headerIcon}</li>
                        <li>{data.title}</li>
                    </ul>

                </li>
            </ul> */}
            // <label className={styles.dropdown}>
            //     <input className={styles.trigger} type='button' onClick={toggleSelf} value={data.title} />
            // </label>
            