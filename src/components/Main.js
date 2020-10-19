import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { FormControl, NativeSelect, Options } from '@material-ui/core';

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
      color:"white"
  },
  appBar: {
      backgroundColor: "#373737",
      height: "60px"
  }
}));


export default function Main() {
    const classes = useStyles();
    return (
        <div>
        <div className="top-bar">
            <img id="logo" src={require('./logo.png')} alt="khareed le"/>
            <select defaultValue="0">
                <option value = "0" className="provinces">Select province</option>
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
        {/* <div className={classes.root}>
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
      </div> */}
      </div>
    )
}
