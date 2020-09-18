import React, { useContext } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { Container, Grid, Box, Paper, Button } from '@material-ui/core';
import { allData } from '../data';
import './BookNow.css';
import MaterialUIPickers from './DatePicker';
import { useForm } from "react-hook-form";
import { ContextElement } from '../../App';

const BookNow = () => {

  const [headerNav, setHeaderNav] = useContext(ContextElement);
  setHeaderNav(false);
    
  const { id } = useParams();
    let history = useHistory();
  
  const { register, handleSubmit, errors } = useForm();
  
    const onSubmit = (data) => {
      console.log(data);
      history.push(`/searchHotel/${id}`);
    };
  
    const placeDetail = allData.find(d => d.id == id);
    const { placeName, detail } = placeDetail;
    return (
      <div className="main">
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={6} className="gridContainer">
              <Box mt={25} className="box">
                <h1>{placeName}</h1>
                <p>{detail}</p>
              </Box>
            </Grid>
            <Grid item xs={6} className="gridContainer">
              <Box mt={20} p={10}>
                <div className="innerBox">
                  <Paper className="boxPaper">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <input
                        type="text"
                        placeholder="Origin "
                        name="Origin"
                        ref={register({ required: true, maxLength: 80 })}
                      />
                      {errors.Origin && (
                        <span className="error">Origin is required</span>
                      )}
                      <input
                        type="text"
                        placeholder="Destination"
                        name="Destination"
                        ref={register({ required: true, maxLength: 100 })}
                      />
                      {errors.Destination && (
                        <span className="error">Destination is required</span>
                      )}
                      <MaterialUIPickers></MaterialUIPickers>
                        <input
                          type="submit"
                          className="submitBtn"
                          value="Book now"
                        />
                    </form>
                  </Paper>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
};

export default BookNow;