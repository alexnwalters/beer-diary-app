import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Search from '../Search/Search';
import LandingPage from '../../routes/LandingPage/LandingPage'
import SignUpPage from '../../routes/SignUpPage/SignUpPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import ResultsPage from '../../routes/ResultsPage/ResultsPage';
import BeerInfoPage from '../../routes/BeerInfoPage/BeerInfoPage';
import DiaryPage from '../../routes/DairyPage/DiaryPage';
import ReviewInputPage from '../../routes/ReviewInputPage/ReviewInputPage'
import UpdateReviewPage from '../../routes/UpdateReviewPage/UpdateReviewPage'
import CreateBeerPage from '../../routes/CreateBeerPage/CreateBeerPage'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <Header />
        </header>
        <section className='App-search'>
          <Search />
        </section>
        <main className='App-main'>
          <Switch>
            <Route
              exact
              path={'/'}
              component={LandingPage}>
            </Route>
            <Route
              path={'/signup'}
              component={SignUpPage}>     
            </Route>
            <Route
              path={'/login'}
              component={LoginPage}>
            </Route>
            <Route
              path={'/search'}
              component={ResultsPage}>
            </Route>
            <Route
              path={'/beer/:beerId'}
              component={BeerInfoPage}>
            </Route>
            <Route
              path={'/diary'}
              component={DiaryPage}>
            </Route>
            <Route
              path={'/review/:beerId'}
              component={ReviewInputPage}>
            </Route>
            <Route
              path={'/update/:beerId'}
              component={UpdateReviewPage}>
            </Route>
            <Route
              path={'/create'}
              component={CreateBeerPage}>
            </Route>
          </Switch>  
        </main>
      </div>
    );
  }
}

export default App;