import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';



const useStyles = makeStyles({
    root: {
        "& .MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: 300,
        },
        "& .MuiSvgIcon-root": {
            fill: "#039be5",
            fontSize: "1.5rem",
            // paddingLeft: "100px",
            // paddingRight: "100px",
        },
       
    },

    // designBy: {
    //     fontSize: "12px",
    //     textAlign: "center",
    //     color: "#369ed1",
    // },
})

const Footer = () => {

    const classes = useStyles();

    return(
        <BottomNavigation width="auto" style={{background: "#082738"}}>
            
            {/* <Typography className={classes.designBy}>
                Designed & Built by Alicia Gorton: 
            </Typography>
            
            */}
            <BottomNavigationAction
                href="https://github.com/aliciagorton" target="_blank"
                className={classes.root}
                style={{padding: 0}}
                icon={<GitHubIcon/>}
            />
            <BottomNavigationAction
                href="https://www.linkedin.com/in/alicia-gorton/" target="_blank"
                className={classes.root}
                style={{padding: 0}}
                icon={<LinkedInIcon/>}
            />
            <BottomNavigationAction
                href="https://twitter.com/alicia_gorton" target ="_blank"
                className={classes.root}
                style={{padding: 0}}
                icon={<TwitterIcon/>}
            />
        </BottomNavigation>
    );
}

export default Footer;
