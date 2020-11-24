import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';



const useStyles = makeStyles({
    root: {
        "& .MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: 300,
        },
        "& .MuiSvgIcon-root": {
            fill: "#039be5",
            fontSize: "1.5rem",
        },
    },
})

const Footer = () => {

    const classes = useStyles();

    return(
        <BottomNavigation width="auto" style={{background: "#082738"}}>
            <BottomNavigationAction
                href="https://github.com/aliciagorton" 
                target="_blank"
                className={classes.root}
                style={{padding: 0}}
                icon={<GitHubIcon/>}
            />
            <BottomNavigationAction
                href="https://www.linkedin.com/in/alicia-gorton/" 
                target="_blank"
                className={classes.root}
                style={{padding: 0}}
                icon={<LinkedInIcon/>}
            />
            <BottomNavigationAction
                href="mailto:apersigehl@gmail.com" 
                target ="_blank"
                className={classes.root}
                style={{padding: 0}}
                icon={<MailOutlinedIcon/>}
            />
        </BottomNavigation>
    );
}

export default Footer;