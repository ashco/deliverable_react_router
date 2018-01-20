import React, { Component } from 'react';
// IMPORT STYLING AND MATERIAL THEME
import '../node_modules/materialize-css/dist/css/materialize.css';
import './App.css';
// IMPORT REACT ROUTER
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
// IMPORT PAGE COMPONENTS
import Homepage from './Homepage.js';
import Blog from './Blog.js';
import Ship from './Ship.js';
import Plunder from './Plunder.js';
import About from './About.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <body>    
          <header>
            <nav>
              <div className="nav-wrapper nav">
                <Link to="/" className="brand-logo"><img className="nav__brand" src="../pirate-header.jpg"/></Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><Link className="nav__link" to="/blog">Blarg</Link></li>
                  <li><Link className="nav__link" to="/ship">Ship</Link></li>
                  <li><Link className="nav__link" to="/plunder">Plunder</Link></li>
                  
                </ul>
              </div>
            </nav>
          </header>
          <main className="container">
            <Route exact path="/" component={Homepage} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/ship" component={Ship} />
            <Route exact path="/plunder" component={Plunder} />
            <Route exact path="/about" component={About} />
          </main>
          <footer className="page-footer">
            <div className="footer-copyright">
              <div className="footer__text container">
              © 2017
              <Link className="footer__text right" to="/about">About</Link>
              {/* <a className="footer__text right" href="#!">About</a> */}
              </div>
            </div>
          </footer>
        </body>
        </div>
      </Router>
    );
  }
}

export default App;