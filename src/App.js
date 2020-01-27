import React from 'react';
import Header from './components/Header/Header';
import Reviews from './pages/Reviews/Reviews';
import { createBrowserHistory } from 'history';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import ReviewDetails from './pages/ReviewDetails/ReviewDetails';

const history = createBrowserHistory();

function App() {
  return (
    <div className="app">
      <Router history={history}>
        <div className='app-container'>
          <Header></Header>
          <Switch>
            <Route path="/reviews">
              <Reviews />
            </Route>
            <Route path="/review-details/:id">
              <ReviewDetails />
            </Route>
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
