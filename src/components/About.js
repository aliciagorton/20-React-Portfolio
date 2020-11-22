import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Avatar, Typography, Box} from '@material-ui/core';
import Navbar from './Navbar';
import Img from './static/img.jpeg';
import Skills from './Skills';
import Education from './Education';



const useStyles = makeStyles((theme) => {
    // root: {
    //     flexGrow: 1,
    //   },
    //   paper: {
    //     height: 140,
    //     width: 100,
    //   },
    //   control: {
    //     padding: theme.spacing(2),
    //   },
    })

const About = () => {

    const classes = useStyles();

    return(       
        <Box className={classes.mainContainer}>
        <Box component="header" className={classes.mainContainer}>
            <Navbar/>
            <Typography variant="h4" align="center" className={classes.heading}> 
            About Me
            </Typography>
            <Box variant="div" className={classes.aboutMe}>            
                <Typography variant="subtitle1" align="left" className={classes.subHeading}>
                A recent graduate of a Full Stack Web Developer bootcamp taught by UC Davis, with a MERN focus. ​Passionate ​to merge professional background in healthcare with technology. ​Adept communicator, organizer, and problem solver. Confident in ability to utilize learned skills and ability to strengthen any team.
                <br></br>
                Expert in customer service and client satisfaction. Trained at prioritizing tasks, being efficient with time and dealing in high stress environments. Previously a nurse and behavioral technician specializing in children who have Autism. Those experiences have enabled a strong sense of self and what others may need but can’t always articulate. Aim to build better software experiences, driven to make a difference, motivated to work as part of a team to diagnose and solve complex problems.
                </Typography>

                <Avatar alt="Remy Sharp" src={Img} className={classes.large} />


            </Box>
            {/* <Box>
                <Typography variant="body1" align="center" className={classes.subHeading} style={{color: "#039be5"}}>
                    Technical Skills
                </Typography>
                <Typography variant="subtitle1" align="left" className={classes.subHeading}>
                React MongoDB MySQL Node Express JavaScript Bootstrap
                </Typography>
                <table>
                    <tr>
                        <Skills />
                    </tr>
                </table>

            </Box> */}
            {/* <Box>
                <Typography variant="body1" align="center" className={classes.subHeading} style={{color: "#039be5"}}>
                <Education />
                </Typography>
                
            </Box> */}
        </Box>
        </Box>
        
    );
}



export default About;