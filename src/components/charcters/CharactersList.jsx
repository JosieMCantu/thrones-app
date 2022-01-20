import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import styles from '../app/App.css';

function CharactersList({characters, theme}) {
    return (
        <div className={`${theme === 'light' ? styles.light : styles.dark}`}>
            <ul className={styles.imglist} aria-label='characters'>{characters.map((character) => (
                <li key={character.id + character.firstName}>
                    <Character 
                    firstName={character.firstName} 
                    title={character.title} 
                    image={character.imageUrl} />
                </li>
            ))}</ul>
        </div>
    )
}

CharactersList.propTypes = {
    chracters: PropTypes.arrayOf(
        PropTypes.shape({
            firstName: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    )
}

export default CharactersList;

