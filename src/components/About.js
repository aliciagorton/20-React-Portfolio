import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Avatar, Typography, Box, Grid, Paper} from '@material-ui/core';
import Img from './static/img.jpeg';
import Skills from './Skills';
import Education from './Education';
import Footer from "./Footer";



const useStyles = makeStyles({
    outterContainer: {
        justifyContent: "center",
       
    },
    imgContainer: {
        marginTop: "40px",
        marginBottom: "40px",
        paddingLeft: "200px",
        paddingTop:"40px",
        borderStyle: "none",
        boxShadow: "none",
    },
    heading: {
        // marginTop: "30px",
        color: "#0f9994", 
        fontWeight: "bold",
        fontSize: "60px",
        // paddingTop: "120px",
        textTransform: "uppercase",
        
    },
    subHeading: {
        color: "#8fc7e3",
        padding: "0",
    },
    img: {
        display: "flex",
        height: 85,
        width: 85,
        // paddingLeft: "50px",
        borderRadius: "50%",
        justifyContent: "center",
        marginLeft: "100px",
    },

    aboutMe: {
        // paddingTop: "30px",
        // paddingLeft: "30px",
        justifyContent: "center",
        textAlign: 'center',
    },

    root: {
        // flexGrow: 1,
      },
    paper: {
        // padding: "spacing(2)",
        textAlign: 'center',
        backgroundColor:" #082738",
        borderStyle: "none",
        boxShadow: "none",
    },
});

function About() {

    const classes = useStyles();

    return (
        <Grid container item xs={12} sm={12} className={classes.outterContainer}>
            <Grid container spacing={2} direction="row" justify="space-evenly" className={classes.imgContainer}> 
                <Grid container item xs={12} sm={3}>
                    <Paper align="center" className={classes.paper}>
                        <Avatar alt="Alicia Gorton" align="Right" src={Img} className={classes.img} />
                    </Paper>
                </Grid>
                <Grid container item xs={12} sm={9}>
                    <Paper className={classes.paper}>
                        <Typography variant="h3" align="Left"  className={classes.heading}>
                        About Me  
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>      
            <Grid container item xs={12} sm={8}>
                <Box className={classes.aboutMe}  component="div" whiteSpace="normal">
                    <Typography align="left" className={classes.subHeading}>
                        A recent graduate of a Full Stack Web Developer bootcamp taught by UC Davis, with a MERN focus.Passionate ​to merge professional background in healthcare with technology.Adept communicator, organizer, and problem solver.Confident in ability to utilize learned skills and ability to strengthen any team.
                        <br />
                        <br />
                        Expert in customer service and client satisfaction.Trained at prioritizing tasks, being efficient with time and dealing in high stress environments.Previously a nurse and behavioral technician specializing in children who have Autism.Those experiences have enabled a strong sense of self and what others may need but can’t always articulate.Aim to build better software experiences, driven to make a difference, motivated to work as part of a team to diagnose and solve complex problems.
                    </Typography>
                </Box>
                <Skills /> 
                <Education /> 
                <Footer />
            </Grid>   
        </Grid>
        
    );
}



export default About;