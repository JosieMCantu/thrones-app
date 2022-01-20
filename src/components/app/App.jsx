import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CharactersContainer from '../../containers/CharactersContainer';
import Header from '../ui/Header';
import '../app/App.css';

export default function App() {
  return <Router>
    <Header />
    <Route exact path='/' component={CharactersContainer} />
    </Router>
}
