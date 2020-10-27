import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { FormControl, NativeSelect } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {cars} from "../data/Cars";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  dropDown: {
      color:"grey"
  },
  appBar: {
      backgroundColor: "rgba(153,204,255,0.1)",
      height: "60px",
      color:"grey"
  }
}));

const cardStyles = makeStyles({
  root: {
    width:"17.5%",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


export default function Main() {
    const classes = useStyles();
    const cardClasses = cardStyles();
    return (
        <div>
        <div className="top-bar">
            <img id="logo" src={require('./logo.png')} alt="khareed le"/>
            <select defaultValue="0">
                <option value = "Pakistan" className="provinces">Pakistan</option>
                <option value = "Sindh" className="provinces">Sindh</option>
                <option value = "Punjab" className="provinces">Punjab</option>
                <option value = "Baluchistan" className="provinces">Baluchistan</option>
                <option value = "Khyber Pakhtunkhwa" className="provinces">Khyber Pakhtunkhwa</option>
            </select>
            <div id="search-div">
                <input id="search-input" placeholder="Enter item to search"></input>
                <button id="search-button">Submit</button>
            </div>
        </div>
        <div className={classes.root}>
        <AppBar position="static" className={classes.appBar} >
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <FormControl>
                  <NativeSelect defaultValue="All Categories" className={classes.dropDown} id="categories-native-select">
                    <option className = "categories" value="All Categories">
                          All Categories
                      </option>
                      <option className = "categories"  value="Cars">
                          Cars
                      </option>
                      <option className = "categories"  value="Mobiles">
                          Mobiles
                      </option>
                      <option className = "categories"  value="Computers">
                          Computers
                      </option>
                  </NativeSelect>
              </FormControl>
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    
    <Card className={cardClasses.root}>
      <CardContent>
        <Typography className={cardClasses.title} color="textSecondary" gutterBottom>
          <img src={require('cars.c1.items[0].imgsrc')} alt="city" width='200px' height='150px'></img>
        </Typography>
        <Typography variant="h5" component="h2">
        
        </Typography>
        <Typography className={cardClasses.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
  );
    
    
}
