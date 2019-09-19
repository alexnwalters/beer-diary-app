import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Search from '../Search/Search';
import PrivateRoute from '../../utils/PrivateRoute';
import PublicOnlyRoute from '../../utils/PublicOnlyRoute';
import LandingPage from '../../routes/LandingPage/LandingPage'
import SignUpPage from '../../routes/SignUpPage/SignUpPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import ResultsPage from '../../routes/ResultsPage/ResultsPage';
import BeerInfoPage from '../../routes/BeerInfoPage/BeerInfoPage';
import DiaryPage from '../../routes/DiaryPage/DiaryPage';
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
              component={LandingPage}
            />
            <PublicOnlyRoute
              path={'/signup'}
              component={SignUpPage}
            />
            <PublicOnlyRoute
              path={'/login'}
              component={LoginPage}
            />
            <Route
              path={'/search'}
              component={ResultsPage}/>
            <Route
              path={'/beer/:beer_id'}
              component={BeerInfoPage}
            />
            <PrivateRoute
              path={'/diary'}
              component={DiaryPage}
            />
            <PrivateRoute
              path={'/review/:beer_id'}
              component={ReviewInputPage}
            />
            <PrivateRoute
              path={'/update/:review_id'}
              component={UpdateReviewPage}
            />
            <PrivateRoute
              path={'/create'}
              component={CreateBeerPage}
            />
          </Switch>  
        </main>
      </div>
    );
  }
}

export default App