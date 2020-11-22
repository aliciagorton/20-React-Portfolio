import React from 'react';
import { makeStyles } from '@material-ui/core/styles'; 
import {
    Box,
    Grid, 
    Card, 
    CardActionArea, 
    CardActions, 
    CardContent, 
    CardMedia,
    Button,
    Typography
} from '@material-ui/core';
import Navbar from './Navbar';

//Project Images
import project1 from './static/images/comingsoon.jpeg';
import project2 from './static/images/Kuma.png';
import project3 from './static/images/chuck.png';
import project4 from './static/images/burger.png';

const useStyles = makeStyles(theme => ({
    cardContainer: {
        maxWidth: 330,
        margin: "3rem auto",
        boxShadow: "0 19px 38px rgba(0,0,0,0.40), 0 15px 12px rgba(0,0,0,0.30)",
    },
    summary: {
        height: "410px",
        color: "black",
        margin: "2px"
    },
    heading: {
        color: "#0288d1", 
        fontWeight: "bold"
    },
    button: {
        background:"#039be5", 
        color: "white"
    }
}))

const Projects = () => {

    const classes = useStyles();

    return(
        <Box component="div">
            <Navbar />
            <Grid container justify="center">
            {/* Project 1 */}
            <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia 
                            component="img" 
                            alt="Project 1" 
                            height="225" 
                            image={project1}
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" className={classes.heading}>
                                Life Organizer
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" className={classes.summary}>
                                Life organizer is an application that allows the user to do just that - organize their life. Life Organizer is packed with four different functions to keep you on track and enable you to take charge of our day! Life Organizer allows the user to keep track of the weather, budget their finances, keep track of your daily caloric intake, and create a list of daily tasks to accomplish.
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button size="small" className={classes.button} href="https://github.com/davidlindnerjr/Life-Organizer" target="_blank">
                            Github Repository
                        </Button>
                        <Button size="small" className={classes.button} href="https://davidlindnerjr.github.io/Life-Organizer/" target="_blank">
                            Deployed Version
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            {/* Project 2 */}
            <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia 
                            component="img" 
                            alt="Project 2" 
                            height="225" 
                            image={project2}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" className={classes.heading}>
                                Kuma
                            </Typography>
                            <Typography variant="body2" color="black" component="p" className={classes.summary}>
                                Kuma is an application that allows the user to create a pet profile for their dog in order to find the best match for a dog playdate. The User can create one dog profile with their pet's information including name, breed, personality, bio, vet clinic, etc. After a profile is created their profile is shown on the profiles page, including all of the pet's information. By clicking the "dashboard" option on the navbar the user is then able to see the profiles of other user's dogs to see whether or not their pet will be a good match. The application utilizes a Sequelize, node, and express backend using passport for validation; in the front end the HTML is templated with handlebars, uses jQuery for making AJAX calls, and uses Materialize and Bootstrap for CSS frameworks.
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button size="small" className={classes.button} href="https://github.com/davidlindnerjr/Kuma" target="_blank">
                            Github Repository
                        </Button>
                        <Button size="small" className={classes.button} href="https://kuma-dl.herokuapp.com/" target="_blank">
                            Deployed Version
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            {/* Project 3 */}
            <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia 
                            component="img" 
                            alt="Project 3" 
                            height="225" 
                            image={project3}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" className={classes.heading}>
                            Weather Dashboard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.summary}>
                            This project is a basic weather application. You can search any city and the application will give you temperature, wind speed, uv index, and the humidity for the current day. The application will also display the weather and humidity for the following 5-days of the searched city. The last searched city will be saved in local stoarge for the user to see when the application is relaoded (when the application is first opened/used there will not be any city or stats displayed). While in use, the application will save the search history of the previous searched cities and can be clicked to look at those cities again.
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" className={classes.button} href="https://github.com/davidlindnerjr/HW06-WeatherDashboard" target="_blank">
                            Github Repository
                        </Button>
                        <Button size="small" className={classes.button} href="https://davidlindnerjr.github.io/HW06-WeatherDashboard/" target="_blank">
                            Deployed Version
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            {/* Project 4 */}
            <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia 
                            component="img" 
                            alt="Project 4" 
                            height="225" 
                            image={project4}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" className={classes.heading}>
                            Employee Directory
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.summary}>
                            Employee tracker is an application that allows the use to filter and view their employees based on the department. For example, if the user selects "All" then all of the employees will be shown, if "Management" is selected then the employees in the management department will be shown, etc. The employee is displayed with a picture of the employee, their role in the company, and the department they fall under.

                            The application utilizes React to dynamically render the employees depending on the user selection. The employees are rendered by using the "useState" and "useEffect" hooks; I found it to be the most graceful way to go about using only one function to get the input value of the user, sending it to the useState and setting the new filtered "employees" array from there. useEffect allowed me to render all of the employees by default when the application first loads.
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" className={classes.button} href="https://github.com/davidlindnerjr/Employee-Directory" target="_blank">
                            Github Repository
                        </Button>
                        <Button size="small" className={classes.button} href="https://davidlindnerjr.github.io/Employee-Directory/" target="_blank">
                            Deployed Version
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    </Box>
    );
}

export default Projects;

