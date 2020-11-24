import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Avatar } from '@material-ui/core';
import avatar from './static/logo.png';

const useStyles = makeStyles({
  main: {
    backgroundColor: "#081321",
    height: "55px",
    // position: "fixed",
    flex: 1, 
    float: "right",
    display: "flex", 
    // textAlign: "center",
  },
  navMenu: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    
    // textAlign: "right",
    // display: "flex",
    // overflow: "auto",
  },
  
  navItem: {
    justifyContent: "end",
    textAlign: "right",
  },
  navLinks: {
    color: "white",
    listStyleType: "none",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "20px",
    padding: "20px 80px",
    float: "left",
    
  },
  resume: {
    color: "white",
    textDecoration: "none",
  }
})

const Navbar = () => {
  const classes = useStyles();
  const [click_state, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  const resume_pdf = "/AliciaGorton.pdf";

  return (
    <AppBar className={classes.main}>
      <ul className={click_state ? 'nav-menu active' : 'nav-menu'} style={{listStyleType: "none", padding: 0, margin: 0}}>
        <li className={classes.navItem} style={{display: "inline"}}>
          <Link to='/' className={classes.navLinks} onClick={closeMobileMenu}>
            <Avatar alt="Dog Ears" src={avatar} className={classes.avatar}/>
          </Link>
        </li>
        <li className={classes.navItem} style={{display: "inline"}}>
          <Link
            to='/about'
            className={classes.navLinks}
            onClick={closeMobileMenu}
          >
            About
          </Link>
        </li>
        <li className={classes.navItem} style={{display: "inline"}}>
          <Link
            to='/projects'
            className={classes.navLinks}
            onClick={closeMobileMenu}
          >
            Projects
          </Link>
        </li>
        <li className={classes.navItem} style={{display: "inline"}}>
          <Link
            to='/experience'
            className={classes.navLinks}
            onClick={closeMobileMenu}
          >
            Experience
          </Link>
        </li>
        <li className={classes.navItem} style={{display: "inline"}}>
          <a href={resume_pdf} className={classes.navLinks} target="_blank">Resumé</a>
        </li>
      </ul>
    </AppBar>
  )
}

export default Navbar


