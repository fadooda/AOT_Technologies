import React, { Component } from "react";
import Navbar from './components/aotNavbar'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './components/landingPage'
import ResultPage from './components/resultsPage'

class Header extends Component {
  render() {

    return (
      <div >
        <div>
          <Navbar />   
        </div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route path='/resultsPage' component={ResultPage}/>
          </Switch>
      </BrowserRouter>
      </div>

    )
  }
}

export default Header;