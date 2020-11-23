import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Box, Button} from '@material-ui/core';
import Navbar from './Navbar';
import resume from './static/AliciaGorton.pdf'
import Footer from './Footer';

const useStyles = makeStyles(theme => ({
    mainContainer: {
        marginTop: "30px",
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid white",
            right: "40px",
            top:0
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]: {
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },
    timeLineItem:{
        padding: "1rem",
        borderBottom: "2px solid #0277bd",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute",
            background: "rgba(60, 60, 60, 0.5)"
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "#0277bd #0277bd transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "#0277bd"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent #0277bd #0277bd"
            }
        }
    },
    timeLineYear :{
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "#0f9994",
        color: "white",
        lineHeight: 1,
        padding: "0.5rem 0 1rem",
        "&:before": {
            display: "none"
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto"
            },
            "&:nth-of-type(2n):before": {
                display: "none"
            }
        }
    },
    heading: {
        color: "#0f9994", 
        fontWeight: "bold",
        fontSize: "60px",
        padding: "3rem 0",
        textTransform: "uppercase"
    },
    subHeading: {
        color: "#8fc7e3",
        padding: "0",
    },
    button: {
        background: "#0f9994",
        color: "white",

        "&:hover": {
            background: "#01579b"
        },
        justifyContent: "center",
        margin: "20px",
        padding: "10px"
    },
    link: {
        color: "white",
        textDecoration: "none"
    }
}));

const Experience = () => {

    const classes = useStyles();

    return(
        <Box className={classes.mainContainer}>
        <Box component="header" className={classes.mainContainer}>
            <Navbar/>
            <Typography variant="h4" align="center" className={classes.heading}> 
            Experience
            </Typography>
            <Box variant="div" className={classes.timeLine}>
                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    October 2019 - September 2020
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading} style={{fontWeight: "bold"}}>
                    Registered Behavioral Technician (RBT)
                    </Typography>
                    <Typography variant="body1" align="center" className={classes.subHeading} style={{color: "#039be5"}}>
                    Maxium Health Services
                    </Typography>
                    <Typography variant="body1" align="center" className={classes.subHeading} style={{color: "#039be5"}}>
                    Sacramento, CA 
                    </Typography>
                    <Typography variant="subtitle1" align="left" className={classes.subHeading}>
                    Worked in multiple environments to provide ABA therapy; including homes and in schools. Responsible for implementation of the plan of care and a strong relationship with families involved. Diligent documentation, self-sufficient in problem solving, and responsive to all parties involved.
                    <br></br>
                    Key Accomplishments: E​ncouraged and with recommendations by direct supervisor to apply for promotions within the company, along with being told by families how pivotal my care was to their child.
                    </Typography>
                </Box>
                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    June 2019 - October 2020
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading} style={{fontWeight: "bold"}}>
                    Registered Behavioral Technician (RBT)  
                    </Typography>
                    <Typography variant="body1" align="center" className={classes.subHeading} style={{color: "#039be5"}}>
                    Intercare Therapy Inc.  
                    </Typography>
                    <Typography variant="body1" align="center" className={classes.subHeading} style={{color: "#039be5"}}>
                    Sacramento, CA 
                    </Typography>
                    <Typography variant="subtitle1" align="left" className={classes.subHeading}>
                    Delivered direct ABA therapy to children with autism as well as a strong relationship with families involved. On a team that spearheaded the first rollout of online documentation in the company, a part of discussions of how to improve usability and ease within the app.
                    <br></br>
                    Key Accomplishments: P​assed exam for the state of California to become a Registered Behavioral Technician.
                    </Typography>
                </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    May 2018 - May 2019
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading} style={{fontWeight: "bold"}}>
                        Behavioral Technician   
                        </Typography>
                        <Typography variant="body1" align="center" className={classes.subHeading} style={{color: "#039be5"}}>
                        Comprehensive Early Autism Services  
                        </Typography>
                        <Typography variant="body1" align="center" className={classes.subHeading} style={{color: "#039be5"}}>
                        Chicago, IL 
                        </Typography>
                        <Typography variant="subtitle1" align="left" className={classes.subHeading}>
                        Provided ABA therapy to children with autism, in multiple settings such as community, school, and home environments. Responsibilities included detailed documentation, coaching for teachers, and ability to transmit important information to all parties. Learned invaluable de-escalation and crisis prevention techniques.
                        <br></br>
                        Key Accomplishments: P​assed CPI (crisis prevention courses).
                        </Typography>
                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    June 2016 - May 2017
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading} style={{fontWeight: "bold"}}>
                        Undergraduate Research Assistant   
                        </Typography>
                        <Typography variant="body1" align="center" className={classes.subHeading} style={{color: "#039be5"}}>
                        Language Acquisition Laboratory  
                        </Typography>
                        <Typography variant="body1" align="center" className={classes.subHeading} style={{color: "#039be5"}}>
                        Urbana, IL 
                        </Typography>
                        <Typography variant="subtitle1" align="left" className={classes.subHeading}>
                        Helped to design materials for experiments. Tested toddlers, preschoolers, and adults in experiments. Responsible for transcribing transcription, utilizing excel, coding of children's speech, and coding visual fixations into from video recordings.
                        <br></br>
                        Key Accomplishments: Repeatedly highered back for three semesters.
                        </Typography>
                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    July 2013 - June 2014
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading} style={{fontWeight: "bold"}}>
                        Licensed Practical Nurse  
                        </Typography>
                        <Typography variant="body1" align="center" className={classes.subHeading} style={{color: "#039be5"}}>
                        Carle Foundation Hospital 
                        </Typography>
                        <Typography variant="body1" align="center" className={classes.subHeading} style={{color: "#039be5"}}>
                        Urbana, IL 
                        </Typography>
                        <Typography variant="subtitle1" align="left" className={classes.subHeading}>
                        Delivered nursing to patients in outpatient procedures, while also being cross-trained in the scheduling department. Responsible for executing evaluations, interventions and modification of the plan of care individualized to each patient. Impeccable at communication, organizing of materials, and management of time in the production room or scheduling offices.
                        <br></br>
                        KeyAccomplishments: Cross trained throughout the department.
                        </Typography>
                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    August 2012 to June 2013
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading} style={{fontWeight: "bold"}}>
                        Heartland Healthcare Center  
                        </Typography>
                        <Typography variant="body1" align="center" className={classes.subHeading} style={{color: "#039be5"}}>
                        Urbana, IL 
                        </Typography>
                        <Typography variant="subtitle1" align="left" className={classes.subHeading}>
                        Provided skilled nursing care for assisted living, post-acute medical, rehabilitation and hospice care. Direct care was my primary responsibility, along with supervisor responsibility of nursing assistants.
                        <br></br>
                        KeyAccomplishments: Received numerous complements from families regarding their loved one and passed NCLEX exam. 
                        </Typography>
                    </Box>
                </Box>
                <Box component="div" style={{textAlign: "center"}}> 
                    <Button className={classes.button}>
                        <a className={classes.link} href={resume} rel="noreferrer" download target="_blank">Download Resume</a>
                    </Button>
                </Box>
            </Box>
            <Footer />
        </Box>
    );
}


export default Experience;