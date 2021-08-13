import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import flashbacks from './images/flashbacks.png'

const App = () => {
    return (
        <Container maxidth="lg"> 
            <AppBar position="static" color="inherit">
                <Typography variant="h2" alogn="center">Flashbacks</Typography>
                <img src={flashbacks} alt="flashbacks" height="60"/>
            </AppBar>

        </Container>
    );
}

export default App;