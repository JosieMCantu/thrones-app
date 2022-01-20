import React, {createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const CharacterContext = createContext();

function CharacterProvider({children}) {
    return (
        <CharacterContext.Provider>
            {children}
        </CharacterContext.Provider>
            
    )
}

CharacterProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default CharacterProvider

