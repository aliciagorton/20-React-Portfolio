import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    mainContainer: {
        backgroundColor: "rgba(60, 60, 60, 0.9.5)",
        height: "100vh"
    },
    particlesCanvas: {
        position: "fixed",
        opacity: "0.3",
    }
});


const Home = () => {
    const classes = useStyles();

    return(
        <div>
            <Navbar />
            <Header />
        </div>
    );
}

export default Home;