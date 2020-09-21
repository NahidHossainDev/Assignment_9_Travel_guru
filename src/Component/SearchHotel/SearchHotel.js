import React, { useContext } from 'react';
import { ContextElement } from '../../App';
import { Container, Grid, Box } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import hotelData, { allData } from '../data';
import Hotel from './Hotel/Hotel';
import GoogleMap from '../GoogleMap/GoogleMap';

const SearchHotel = () => {
    const { id } = useParams();
    console.log(id)
    const [headerNav, setHeaderNav,days] = useContext(ContextElement);

    const placeDetail = allData.find((d) => d.id == id);
    const { placeName} = placeDetail;

   

    setHeaderNav(true);
    return (
      <div>
        <Container>
          <Grid container>
            <Grid item xs={6} className="gridContainer">
              <Box mt={15} className="">
                <p>You'll stay {days} days</p>
                <h2>{placeName}</h2>
                {hotelData.map((data) => (
                  <Hotel data={data}></Hotel>
                ))}
              </Box>
            </Grid>
            <Grid item xs={6} className="gridContainer">
              <Box mt={25} className="">
                <GoogleMap></GoogleMap>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
};

export default SearchHotel;