import React, { useContext } from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Container, Button } from '@material-ui/core';
import logo from '../images/Logo2 (7).png'
import logoBlack from '../images/Logo.png';
import './nav.css';
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from 'react-router-dom';
import { ContextElement } from '../../App';

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
  appBarBlack: {
    background: 'white',
    boxShadow:'3px 3px 5px lightgray'
  },
  btn: {
      backgroundColor: "#ffa91e",
      color:'white',
  },
  btnBlack: {
    color:'black'
  }
});

const Navbar = () => {
  const classes = useStyles();
  const [
    headerNav,
    setHeaderNav,
    days,
    setDays,
    userLoginInfo,
    setUserLoginInfo,
  ] = useContext(ContextElement);

    return (
      <div>
        <AppBar className={headerNav ? classes.appBarBlack : classes.appBar}>
          <Toolbar>
            <Container>
              <Link to="/home">
                <img
                  src={headerNav ? logoBlack : logo}
                  alt=""
                  className={classes.logo}
                />
              </Link>
              <div className={headerNav ? "searchBoxBlack" : "searchBox"}>
                <SearchIcon
                  className={headerNav ? "searchIconBlack" : "searchIcon"}
                />
                <input
                  type="text"
                  className={headerNav ? "searchInputBlack" : "searchInput"}
                  placeholder="Search your destination..."
                  name=""
                  id=""
                />
              </div>
              <ul className="ul">
                <li className={headerNav ? "liBlack" : "li"}>
                  <Link to="/news">News</Link>
                </li>
                <li className={headerNav ? "liBlack" : "li"}>
                  <Link to="/destination">Destination</Link>
                </li>
                <li className={headerNav ? "liBlack" : "li"}>
                  <Link to="/blog">Blog</Link>
                </li>
                <li className={headerNav ? "liBlack" : "li"}>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>

              <Link to="/login">
                {userLoginInfo.isLogin ? <span style={{ color: 'black', fontWeight: '800' }}>{userLoginInfo.name}</span>
                  : (<Button variant="contained" className={classes.btn}>
                    Login
                  </Button>)}
              </Link>
            </Container>
          </Toolbar>
        </AppBar>
      </div>
    );
};

export default Navbar;