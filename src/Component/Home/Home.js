import React from 'react';
import './Home.css';
import Grid from "@material-ui/core/Grid";
import { Paper, Container } from '@material-ui/core';
import { data } from '../data';
import { Link } from 'react-router-dom';

const Home = () => {
    
    return (
      <div className="main">
        <Container>
          <Grid container spacing={3} className="gridContainer">
            {/* {data.map(p => <PlacesItem data ={p} key={p.id}></PlacesItem>)} */}
            <Grid item xs={4} className="gridContainer">
              <Link to="/bookNow/1">
                <Paper
                  style={{ borderRadius: "20px" }}
                  className="paper paper1" >
                  <p>COX'S BAZAR</p>
                </Paper>
              </Link>
            </Grid>
            <Grid item xs={4} className="gridContainer">
              <Link to="/bookNow/2">
                <Paper
                  style={{ borderRadius: "20px" }}
                  className=" paper paper2">
                  <p>SREEMANGAL</p>
                </Paper>
              </Link>
            </Grid>
            <Grid item xs={4} className="gridContainer">
              <Link to="/bookNow/3">
                <Paper
                  style={{ borderRadius: "20px" }}
                  className="paper paper3">
                  <p>SUNDARBAN</p>
                </Paper>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
};

// const PlacesItem = (props) => {
//     const { placeName, img } = props.data
//     console.log(props.data)
//     return (
//       <Grid item xs={4}>
//         <Paper className="paper" style={{backgroundImage:`${img}`}}></Paper>
//       </Grid>
//     );
// }
export default Home;