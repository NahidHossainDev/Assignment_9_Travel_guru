import React from 'react';
import { Grid, Box } from '@material-ui/core';
import star from '../../images/Icon/star_1_.png'

const Hotel = (props) => {
    const style = {
        img: {
            height: '188px',
            width: '270px',
        },
        h5: {
            margin: "0px",
        },
        div2: {
            marginLeft: '45px',
            maxWidth: '280px',
        },
        p: {
            margin: '5px 0',
            color: 'gray',
        },
        span: {
            marginLeft: '20px',
        },
        star: {
            width: '20px',
            marginRight: '5px',
        },
       
    }
    const { img, title, rating, price, wif, cancellation, guest } = props.data;
    return (
      <div>
        <Grid container>

            <Grid item xs={5}>
              <img src={img} alt="" style={style.img} />
            </Grid>
            <Grid item xs={7} style={style.div2}>
              <h5 style={style.h5}>{title}</h5>
              <p style={style.p}>{guest}</p>
              <p style={style.p}>{wif}</p>
              <p style={style.p}>{cancellation}</p>
              <div>
                <span>
                  <img src={star} alt="" style={style.star} />
                  <span>{rating}</span>
                </span>
                <span style={style.span}>${price}</span>
              </div>
            </Grid>
        
        </Grid>
      </div>
    );
};

export default Hotel;