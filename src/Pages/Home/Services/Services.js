import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import Typography from '@mui/material/Typography';

const services = [
    {
        name: 'Fluoride Treatement',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis numquam aliquid suscipit eligendi eveniet fugiat. Illum nesciunt mollitia dolor iste!',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis numquam aliquid suscipit eligendi eveniet fugiat. Illum nesciunt mollitia dolor iste!',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis numquam aliquid suscipit eligendi eveniet fugiat. Illum nesciunt mollitia dolor iste!',
        img: whitening
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500,m: 2, color: '#57F1E3 ' }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 5  }} variant="h4" component="div">
                   Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}

                        ></Service>)
                    }


                </Grid>
            </Container>
        </Box>
    );
};

export default Services;


