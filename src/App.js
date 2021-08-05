import React from 'react';
import './App.css';
import NavigationBar from './NavigationBar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
// import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './pages/HomePage';
import TopRated from './pages/TopRated';
import Contact from './pages/Contact';
import MovieDetails from './components/movieDetails';



function App() {
  
  return (
    <div className="App Wrapper">
          <BrowserRouter>
            <nav className="App-header mt-3">
              <NavigationBar/>
            </nav>
            <div className="mt-2">
              <div className="" >
              <Switch>
                <Route path='/' component={HomePage} exact/>
                <Route path='/topRated' component={TopRated} exact/>
                <Route path='/contact' component={Contact} exact/>
                <Route path='/detail/:id' component={MovieDetails} exact/>
              </Switch>
              </div>
            </div>
          
          </BrowserRouter>
    </div>
  );
}

export default App;
