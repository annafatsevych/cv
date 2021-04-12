// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Theme from "./theme";


import Home from "./components";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume"
import Gallery from "./components/Gallery";
import Portfolio from "./components/Portfolio";
import { SingleProject } from './components/SingleProject';

export default function App() {
  return (
    <Theme >
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <div>
        <Switch>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/image/:id" component={SingleProject} />
          <Route path="/test" component={Gallery} />

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </div>
      {/* <Footer /> */}
    </Router>
    </Theme>
  );
}
