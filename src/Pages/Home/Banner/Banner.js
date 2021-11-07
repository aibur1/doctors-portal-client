import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Typography, Container } from '@mui/material';
import { Box } from '@mui/system';


const bannerBg = {
    background: `url(${bg})`,

}

const verticleCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400,
    
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>

                <Grid item style={{ ...verticleCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Start Here
                        </Typography>
                        <Typography variant="h6" sx={{ my:3, fontSize: 13, fontWeight: 300, color: 'gray' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas natus libero itaque? Nisi aliquam dolore accusamus magnam eos asperiores minus.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Get Appointment</Button>
                    </Box>
                </Grid>

                <Grid item xs={12} md={6} style={verticleCenter}>
                    <img style={{ width: '350px' }} src={chair} alt="" srcset="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;