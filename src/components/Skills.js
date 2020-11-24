 import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: "#082738",
    marginTop:"10px",
    marginBottom:"30px",
    textAlign: "center"
  },
  gridList: {
    width: 500,
  },
  subheading: {
    color: "#0f9994",
    fontSize: "30px",
    fontWeight: "bold",
  },
  skillSet: {
    margin: "50px 0px",
    paddingLeft: "150px",
    justifyContent: 'space-around',
    textAlign: "center",
  }
}));

const Skills = () =>  {
    const classes = useStyles();
    const tileData = [
        {
            img: 'react.png',
            title: 'React',
        },
        {
            img: 'mongodb2.png',
            title: 'MongoDB',
        },
        {
            img: 'mysql2.png',
            title: 'MySQL',
        },
        {
            img: 'node.png',
            title: 'Node',
        },
        {
            img: 'express2.png',
            title: 'Express',
        },
        {
            img: 'js.png',
            title: 'Javascript',
        },
        {
            img: 'css.png',
            title: 'CSS',
        },
        {
            img: 'html2.png',
            title: 'HTML',
        },
        {
            img: 'materialui.png',
            title: 'MaterialUI',
        },
        {
            img: 'bootstrap4.png',
            title: 'Bootstrap',
        }
    ]; 

    return (
        <div className={classes.skillSet}>
            <Grid container item xs={12} sm={12} direction="row" justify="center" alignItems="center">
                <p className={classes.subheading}>Technical Skills</p>
            </Grid>
            <Grid container item xs={9} sm={12} direction="row" justify="center" alignItems="center">
                <GridList cellHeight={50} className={classes.gridList} cols={10}>
                    {tileData.map(tile => <GridListTile key={tile.img} cols={tile.cols || 1}>
                    <img src={tile.img} alt={tile.title} />
                    </GridListTile>)}
                </GridList>
            </Grid>
        </div>
    );
}  
 export default Skills;