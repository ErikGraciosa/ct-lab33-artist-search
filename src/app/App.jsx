import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home/Home';
import Artist from '../containers/Artist/Artist';
import Album from '../containers/Album/Album';
import Lyrics from '../containers/Lyrics/Lyrics';
import Header from '../components/Header/Header';
import { ArtistProvider } from '../context/artistContext';


export default function App() {
  return (
    <>
      <Router>
        <ArtistProvider>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/artist/:id" component={Artist} />
            <Route path="/album/:id" component={Album} />
            <Route path="/songs/:id" component={Lyrics} />
          </Switch>
        </ArtistProvider>
      </Router>
    </>
  );
}
