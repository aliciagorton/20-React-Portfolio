import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Avatar, Typography, Box, Grid, Paper} from '@material-ui/core';
import Navbar from './Navbar';
import Img from './static/img.jpeg';
import Skills from './Skills';
import Education from './Education';
import Footer from "./Footer";



const useStyles = makeStyles({
    mainContainer: {
       
        paddingLeft: "130px",
        paddingRight: "130px",
    },
    imgContainer: {
        marginTop: "40px",
        marginBottom: "40px",
        paddingLeft: "1px",
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
        paddingLeft: "50px",
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
        paddingTop: "30px",
        paddingLeft: "30px",
    },

    root: {
        flexGrow: 1,
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
        <Box className={classes.outterContainer}>
            <Box component="header" className={classes.mainContainer}>
                <Navbar />
                
                <Grid container spacing={1} direction="row" justify="space-evenly" alignItems="flex-start" className={classes.imgContainer}> 

                <Grid item xs={3}>
                    <Paper align="center" className={classes.paper}>
                        <Avatar alt="Alicia Gorton" align="center" src={Img} className={classes.img} />
                    </Paper>
                </Grid>
                <Grid item xs={9}>
                    <Paper className={classes.paper}>
                        <Typography variant="h4" align="left"  className={classes.heading}>
                        About Me  
                        </Typography>
                    </Paper>
                </Grid>


                    {/* <Box className={classes.imgContainer}>
                        <Avatar alt="Alicia Gorton" src={Img} className={classes.img} />
                    </Box> */}
                    {/* <Box>
                        <Typography variant="h4" align="center"  className={classes.heading}>
                        About Me  
                        </Typography>
                    </Box> */}
                </Grid>
               
                <Box className={classes.aboutMe}  component="div" whiteSpace="normal">
                    <Typography align="left" style={{ }}  className={classes.subHeading}>
                        A recent graduate of a Full Stack Web Developer bootcamp taught by UC Davis, with a MERN focus.Passionate ​to merge professional background in healthcare with technology.Adept communicator, organizer, and problem solver.Confident in ability to utilize learned skills and ability to strengthen any team.
                        <br />
                        <br />
                        Expert in customer service and client satisfaction.Trained at prioritizing tasks, being efficient with time and dealing in high stress environments.Previously a nurse and behavioral technician specializing in children who have Autism.Those experiences have enabled a strong sense of self and what others may need but can’t always articulate.Aim to build better software experiences, driven to make a difference, motivated to work as part of a team to diagnose and solve complex problems.
                    </Typography>
                </Box>
            </Box>
            <Skills /> 
            <Education /> 
            <Footer />
        </Box>
    );
}



export default About;