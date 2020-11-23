import React from 'react';
import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { AppBar } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { useTheme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#082738",
    display: 'flex',
    height: 300,
    color: "#0f9994",
    // fontSize: "15px",
    width: "500px",
    textAlign: "center",
    // paddingLeft:"160px",
    // paddingRight:"100px",
    boxShadow: "none",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  mainContainer: {
    backgroundColor: "#082738",
    color: "#0f9994",
    fontSize: "15px",
    boxShadow: "none",
  },
  subHeading: {
    color: "#8fc7e3",
    fontSize: "15px",
  },

  subContainer: {
    color: "white",
    fontSize: "15px",
  },

  SwipeableViews:{
    color: "white",
    fontSize: "15px",
  },

}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
  //   id: `full-width-tab-${index}`,
  //   'aria-controls': `full-width-tabpanel-${index}`,
  // };
}

function Education() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };
 

  return (
    <div className={classes.root}>
      <AppBar className={classes.mainContainer} position="static">
      <h1 className={classes.subheading}>Education </h1>
        <Tabs
          className={classes.tabs}
          orientation="vertical"
          // variant="fullWidth"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          indicatorColor="#8fc7e3"
          textColor="primary"
          
          aria-label="full width tabs example"
        >
          <Tab className={classes.subHeading}  label="Full-Stak Web Devleopment Bootcamp Certificate" {...a11yProps(0)} />
          <Tab className={classes.subHeading}  label="Bachelor of Science in Psychology" {...a11yProps(1)} />
          <Tab className={classes.subHeading}  label="Licensed Practical Nurse" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <Box className={classes.SwipeableViews}
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        >
        <TabPanel className={classes.subContainer} value={value} index={0} dir={theme.direction}>
            <p>University of California at Davis </p>
            <p>Davis, CA</p>
            <p>June 2020 to December 2020</p>
        </TabPanel>
        <TabPanel className={classes.subContainer} value={value} index={1} dir={theme.direction}>
            <p>University of Illinois at Urbana Champaign</p>
            <p>Urbana, IL</p>
            <p>August 2014 to May 2017</p>
        </TabPanel>
        <TabPanel className={classes.subContainer} value={value} index={2} dir={theme.direction}>
            <p>Parkland College</p>
            <p>Champaign, IL</p>
            <p>January 2011 to May 2012</p>
        </TabPanel>
      </Box>
    </div>
  );
}
export default Education;