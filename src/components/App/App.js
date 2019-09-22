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
import TokenService from '../../services/TokenService';
import BeerContext from '../../contexts/BeerContext';

class App extends Component {
  static contextType = BeerContext

  constructor(props) {
    super(props)
    this.state = {
      hasLogin: TokenService.hasAuthToken(),
    }
  }

  checkForLogin = () => {
    this.setState({
      hasLogin: TokenService.hasAuthToken()
    })
  }

  render() {
    return (
      <div className='App'>
        <header className='App_header'>
          <Header checkForLogin={this.checkForLogin} hasLogin={this.state.hasLogin}/>
        </header>
        <section className='App_search'>
          <Search />
        </section>
        <main className='App_main'>
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
            <Route
              path={'/login'}
              render={(props) => <LoginPage {...props} checkForLogin={this.checkForLogin}/>}
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