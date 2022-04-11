import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, useLocation} from 'react-router-dom';
import Home from './components/pages/Home';
import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import {AnimatePresence} from 'framer-motion';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Skills from './components/pages/Skills';



function App() {

  let location = useLocation();

  return (
    <React.Fragment>



    <Navbar />

    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact component={Home} />
        <Route path="/pages/About" exact component={About} />
        <Route path="/pages/Contact" component={Contact} />
        <Route path="/pages/Skills" component={Skills} />

        <Route path='*' exact component={Home} />
      </Switch>
      </AnimatePresence>


    </React.Fragment>
  );
}

export default App;
