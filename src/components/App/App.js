import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Search from '../Search/Search';
import LandingPage from '../../routes/LandingPage/LandingPage'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <Header></Header>
        </header>
        <section className='App-search'>
          <Search></Search>
        </section>
        <main className='App-main'>
          <Route
            exact
            path={'/'}
            component={LandingPage}>
          </Route>
        </main>
      </div>
    );
  }
}

export default App;