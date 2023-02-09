import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dict from '../pages/Dict';
import ErrorPage from '../pages/ErrorPage';
import Scrabble from '../pages/Scrabble';
import Thes from '../pages/Thes';
import WordMeaning from '../pages/WordMeaning';
import './PageRouting.css';

const PageRouting = () => {
  return (
    <Router>
      {/* Foundation tab navigation */}
      <nav id='words-main-nav'>
        <ul
          className='tabs'
          data-deep-link='true'
          data-update-history='true'
          data-deep-link-smudge='true'
          data-deep-link-smudge-delay='500'
          data-tabs
          id='deeplinked-tabs'>
          <li className='tabs-title is-active'>
            <Link to='/'>
              Dictionary
            </Link>
          </li>
          <li className='tabs-title'>
            <Link to='/thesaurus'>Thesaurus</Link>
          </li>
          <li className='tabs-title'>
            <Link to='/scrabble'>Scrabble</Link>
          </li>
          {/* <li className='tabs-title'>
            <Link to='/word-meanings'>Word Meanings</Link>
          </li> */}
        </ul>
      </nav>
      {/* Specifying each page to load - like Django urls.py */}
      <Routes>
        <Route path='/' element={<Dict />} />
        <Route path='/thesaurus' element={<Thes />} />
        <Route path='/scrabble' element={<Scrabble />} />
        {/* <Route path='/word-meanings' element={<WordMeaning />} /> */}
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default PageRouting;
