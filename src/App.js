import React from 'react';
import './App.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './components/navbar/';
import SiteNavbar from './components/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './home';
import About from './about';
import SignIn from './signin';
  
function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <SiteNavbar />
      <Switch>
        <Route path='/home' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/signin' component={SignIn} />
      </Switch>
    </Router>
  );
}
  
export default App;