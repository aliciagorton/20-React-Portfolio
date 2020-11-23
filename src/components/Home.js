import React from 'react';
import Typed from 'react-typed';
import {  Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


//Styling
const useStyles = makeStyles({
    boxContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1,
        
    },
    titleContainer: {
        color: "#0f9994",
        fontSize: "15px",
        
    },
    name: {
        color: "#8fc7e3",
        marginBottom: "3rem",
        fontSize: "100px",
        zIndex: "12",
    },

    descContainer: {
        marginBottom: "3rem", 
    },

    desc: {
        fontSize: "20px",
        color: "#0f9994",
        paddingLeft: "120px",
        paddingRight: "120px",

    },
});



const Home = () => {
    const classes = useStyles();
    return (
        <>       
            <Box className={classes.boxContainer}>
                <Box className={classes.titleContainer}>
                    <Typography >
                        <Typed className={classes.title} variant="h5"
                            strings={["Hello my name is"]}
                            typeSpeed={140}
                            // backSpeed={2}
                            // loop
                        />
                    </Typography>
                </Box>
                <Box className={classes.nameContainer}>                         
                    <Typography >
                        <Typed className={classes.name} variant="h1"
                        strings={["Alicia Gorton"]} 
                        typeSpeed={200}/>
                    </Typography>
                </Box>
                <Box className={classes.descContainer} variant="h3">
                    <Typography className={classes.desc} >
                        I'm a full-stack web developer based in Sacramento, CA that enjoys crafting websites, applications, and everything in between. I am looking for opportunities of growth in the fields of emerging technology and data science.
                    </Typography>
                </Box>
            </Box>
        </>
    );
};

export default Home;