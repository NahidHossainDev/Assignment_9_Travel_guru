import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Container, Button } from '@material-ui/core';
import logo from '../images/Logo2 (7).png'
import './nav.css';
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  logo: {
    width: "120px",
    height: " 55px",
    marginRight: '30px',
    marginTop: '20px',
    display: 'inline-block'
  },
  appBar: {
    background: "transparent",
    boxShadow: "none",
  },
  btn: {
      backgroundColor: "#ffa91e",
      color:'white',
  },
});

const Navbar = () => {
    const classes = useStyles();

    return (
      <div>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Container>
              <Link to='/home'>
                <img src={logo} alt="" className={classes.logo} />
              </Link>
              <div className="searchBox">
                <SearchIcon className="searchIcon" />
                <input
                  type="text"
                  className="searchInput"
                  placeholder="Search your destination..."
                  name=""
                  id=""
                />
              </div>
              <ul className="ul">
                <li className="li">
                  <Link to="/news">News</Link>
                </li>
                <li className="li">
                  <Link to="/destination">Destination</Link>
                </li>
                <li className="li">
                  <Link to="/blog">Blog</Link>
                </li>
                <li className={classes.li}>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
              <Button variant="contained" className={classes.btn}>
                Login
              </Button>
            </Container>
          </Toolbar>
        </AppBar>
      </div>
    );
};

export default Navbar;