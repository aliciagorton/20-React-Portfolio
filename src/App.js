import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Navbar from './components/Navbar';
import Home from './components/Header';
import About from './components/About'
import Projects from './components/Projects';
import Experience from './components/Experience';
import Resume from './components/Resume';
// import Education from '/components/Education';
import { Route } from 'react-router-dom';
import './App.css';




function App() {
  return (
      <div className="App">
        <Navbar />
        <CssBaseline/>
          <Box>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/experience" component={Experience} />
            <Route path="/resume" component={Resume} />
          </Box>
      </div>
  );
}

export default App;
