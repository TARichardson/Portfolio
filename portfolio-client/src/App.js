import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Home   from './component/Home';
import About  from './component/About';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import './App.css';

class App extends Component {

  NavContent = () => {
    return (
      <Fragment>
        <Switch className="NavDiv">
          <Route exact path="/"   render={ ()     => <Redirect  to="/home" /> } />
          <Route path="/"         render={NavBar} />
        </Switch>
      </Fragment>
    )
  }

  FooterContent = () => {
    return (
      <Fragment>
          <Switch className="FooterDiv">
            <Route path="/"     render={Footer} />
          </Switch>
      </Fragment>
      )
    }

    MainContent = () => {
      return (
        <Fragment>
          {this.NavContent()}
          <Switch className="MainDiv">
            <Route path="/home"     render={Home} />
            <Route path="/about"  render={About} />
          </Switch>
          {this.FooterContent()}
        </Fragment>
        )

      }




      render() {
        const main = this.MainContent()

        return (
          <Router>
            <div className="App">
              {main}
            </div>
          </Router>
        );
      }
    }

    export default App;
    
