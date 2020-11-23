import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from './tileData';
import reactLogo from '../components/static/images/react.png';
import mongoDBLogo from '../components/static/images/mongodb2.png';
import mysqlLogo from '../components/static/images/mysql2.png';
import nodejsLogo from '../static/images/node.png';
import expressLogo from '../static/images/express2.png';
import jsLogo from '../static/images/js.png';
import htmlLogo from '../static/html2.png';
import cssLogo from '../static/images/css.png';
import materialuiLogo from '../static/images/materialuilogo.png';
import bootstrapLogo from '../static/images/bootstrap4.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },


}));

const Skills = () =>  {

    const classes = useStyles();

 

    return (
        <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} cols={10}>
                {tileData.map((tile) => (
                <GridListTile key={tile.img} cols={tile.cols || 1}>
                    <img src={reactLogo.img} alt={reactLogo.title} />  
                    <img src={mongoDBLogo.img} alt={mongoDBLogo.title} /> 
                    <img src={mysqlLogo.img} alt={mysqlLogo.title} />   
                    <img src={nodejsLogo.img} alt={nodejsLogo.title} />   
                    <img src={expressLogo.img} alt={expressLogo.title} />   
                    <img src={jsLogo.img} alt={jsLogo.title} />  
                    <img src={cssLogo.img} alt={cssLogo.title} /> 
                    <img src={htmlLogo.img} alt={htmlLogo.title} />  
                    <img src={materialuiLogo.img} alt={materialuiLogo.title} />  
                    <img src={bootstrapLogo.img} alt={bootstrapLogo.title} />         
                </GridListTile>
                    ))}
            </GridList>
        </div>
    );
 }  
 export default Skills;