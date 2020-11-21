import React from 'react';
import { Avatar, Box, Grid, Typography } from '@material-ui/core';
import avatar from './logo.png';
import Typed from 'react-typed';
import { makeStyles } from '@material-ui/core/styles';


//Styling
const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title: {
        color: "#0277bd"
    },
    subtitle: {
        color: "#039be5",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }
}))



const Header = () => {

    const classes = useStyles();

    return (
        <>       
            <Box className={classes.typedContainer}>
                <Grid>
                    <Avatar src={avatar} alt = "Dog Ears" />
                </Grid>
                <Typography className={classes.subtitle} variant="h5">
                    <Typed 
                        strings={["Hello my name is"]}
                        typeSpeed={40}
                        backSpeed={60}
                        loop
                    />
                </Typography>
                <Typography>
                    <Typed strings={["Alicia Gorton"]} typeSpeed={40}/>
                </Typography>
                
            </Box>
        </>
    );
};

export default Header;