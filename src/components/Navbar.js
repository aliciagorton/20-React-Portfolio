import React,  { useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar,Toolbar, Box, Button, IconButton, Avatar }
from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import resume from './static/AliciaGorton.pdf'
import avatar from './static/logo.png';

import { Link } from 'react-router-dom';




const useStyles = makeStyles ({
  main: {
    backgroundColor: '#081321',
    height:"75px",
    position: "fixed",
    
  },

  toolbar: {
    color: "white",

 
  },

  navMenu:  {
    listStyleType: "none", 
    margin: "0",
    padding: "0",
   
  },

  navLinks:  {
    color: "white",
    listStyleType: "none", 
    textDecoration: "none",
    display: "inline-block",
    fontSize: "20px",
    padding: "20px",
    float: "left",


  },

  resume:  {
    color: "white",
    textDecoration: "none",
    

  },



})

const Navbar = () => {
  
  const classes = useStyles();
  const [click_state, setClick] = useState(false);
  const handleClick = () => setClick(!click_state);
  const closeMobileMenu = () => setClick(false);


  return (
     <AppBar className={classes.main}>
      <Toolbar className={classes.toolbar}>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>

        <Box>
          <Link to='/' className={classes.navbarLogo} onClick={closeMobileMenu}>
            <Avatar alt="Dog Ears" src={avatar} className={classes.avatar}/>
          </Link>
          <ul className={click_state ? 'nav-menu active' : 'nav-menu'} style={{ listStyleType: "none",  }}>
            <li className={classes.navItem} styled={{ display: "inline",}}>
              <Link to='/' className={classes.navLinks} onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className={classes.navItem}>
              <Link
                to='/about'
                className={classes.navLinks}
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className={classes.navItem}>
              <Link
                to='/projects'
                className={classes.navLinks}
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li className={classes.navItem}>
              <Link
                to='/experience'
                className={classes.navLinks}
                onClick={closeMobileMenu}
              >
                Experience
              </Link>
            </li>
          </ul>
        </Box>
        <Box component="div" style={{textAlign: "center"}}> 
          <Button className={classes.button}>
              <a className={classes.resume} href={resume} rel="noreferrer" download target="_blank">Resume</a>
          </Button>
        </Box>

      </Toolbar>
    </AppBar>
  )
}

export default Navbar


