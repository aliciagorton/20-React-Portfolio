 import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
    textAlign: "center",
    margrinRight:0,
    width: 500,
    height: 50,
    paddingRight: "260px",
    paddingTop: "20px",
  },
  subheading: {
    paddingLeft: "360px",
    color: "#0f9994",
    fontSize: "20px",
  },


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
        <div className={classes.root}>
            <h1 className={classes.subheading}>Technical Skills: </h1>
            <GridList cellHeight={20} className={classes.gridList} cols={10}>
                {tileData.map(tile => <GridListTile key={tile.img} cols={tile.cols || 1}>
                  <img src={tile.img} alt={tile.title} />
                </GridListTile>)}
            </GridList>
        </div>
    );
}  
 export default Skills;