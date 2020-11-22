import React,  { useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar,Toolbar, Box, Button, IconButton, Avatar }
from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import resume from './static/AliciaGorton.pdf'
import avatar from './static/logo.png';

import { Link } from 'react-router-dom';



const useStyles = makeStyles ({
 navbar: {
    background: "linear-gradient(90deg, rgb(8, 14, 79) 0%, rgb(2, 5, 36) 100%)",
    height: "80px",
    display: "flex",
    textAlign: "center",
    fontSize: "1.2rem",
    position: "sticky",
    top: "0",
    zindex: "999",
  },
})

const Navbar = () => {
  
  const classes = useStyles();
  const [click_state, setClick] = useState(false);
  const handleClick = () => setClick(!click_state);
  const closeMobileMenu = () => setClick(false);


  return (
     <AppBar>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>

        <Box>
          <Link to='/' className={classes.navbarLogo}onClick={closeMobileMenu}>
            <Avatar alt="Dog Ears" src={avatar} className={classes.large}/>
          </Link>
          <ul className={click_state ? 'nav-menu active' : 'nav-menu'}>
            <li className={classes.navItem}>
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
              <a className={classes.link} href={resume} rel="noreferrer" download target="_blank">Resume</a>
          </Button>
        </Box>

      </Toolbar>
    </AppBar>
  )
}

export default Navbar


