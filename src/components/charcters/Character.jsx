import React from 'react';
import PropTypes from 'prop-types';
import styles from '../app/App.css';

function Character({image, firstName, title, theme}) {
    return (
        <span>
          <img src={image} alt={firstName} />
          <p>Name: {firstName}</p>  
          {/* <p>Title: {title}</p> */}
          </span>
    )
}

Character.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string,
    title: PropTypes.string.isRequired
}

export default Character;

