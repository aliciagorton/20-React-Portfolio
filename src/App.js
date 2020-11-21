import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/index';
import About from './components/About'
import Projects from './components/Projects';
import Experience from './components/Experience';
import Resume from './components/Resume';
import {Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <CssBaseline/>
      <Route path="/" exact component={Home}/>
      <Route path="/about" exact component={About}/>
      <Route path="/projects" exact component={Projects}/>
      <Route path='/expereince' exact component={Experience}/>
      <Route path='/resume' exact component={Resume}/>
    </div>
  );
}

export default App;