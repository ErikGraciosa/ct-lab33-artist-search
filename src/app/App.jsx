import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home/Home';
import Artist from '../containers/Artist/Artist';
import Album from '../containers/Album/Album';
import Song from '../containers/Song/Song';
import Header from '../containers/Header/Header';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <switch>
          <Route exact path="/" component={Home} />
          <Route path="/artist/:id" component={Artist} />
          <Route path="/album/:id" component={Album} />
          <Route path="/song/:id" component={Song} />
        </switch>
      </Router>
    </>
  );
}
