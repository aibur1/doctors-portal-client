import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const appoinmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 47, 48,0.9)',
    backgroundBlendMode: "darken, luminosity",
    marginTop: 175
}

const AppoinmentBanner = () => {
    return (
        <Box style={appoinmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: '400px', marginTop: '-110px' }}
                        src={doctor} alt="" srcset="" />
                </Grid>
                <Grid item xs={12} md={6} sx={
                    {display:'flex,',
                     justifyContent:'flex-start',
                     textAlign:'left',
                     alignItems: 'center'
                     }}>
                    <Box>
                        <Typography variant="h6" sx={{ mb: 5 }} style={{ color: '#57F1E3' }}>
                            Appoinment
                        </Typography>
                        <Typography variant="h4" style={{ color: 'white' }}>
                            Make an Appoinment Today
                        </Typography>
                        <Typography variant="h6" sx={{my:5}} style={{
                            color: 'white', fontSize: 14,
                            fontWeight: '300'
                        }}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, harum. Fugiat, veniam impedit nihil repudiandae aperiam qui ratione illo eligendi.
                        </Typography>
                        <Button variant="contained" style={{backgroundColor:'#5CE7ED'}}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppoinmentBanner;