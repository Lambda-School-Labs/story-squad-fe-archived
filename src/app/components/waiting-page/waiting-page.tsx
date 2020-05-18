import React from 'react';
import { WaitingHeader } from './header/waiting-header';
import { useStyles } from './waiting-page-styles';
import { Button, Typography, Container, Grid } from '@material-ui/core';

const WaitingPage: React.FC = () => {
    const classes = useStyles({});
    return (
        <Container className={classes.mainDiv}>
            <WaitingHeader />
            <Grid className={classes.holdingContainer}>
                <div className={classes.txtDiv}>
                    <h2 className={classes.h3Styling}>WAITING FOR THE REST OF THE VOTES</h2>
                </div>
            </Grid>
        </Container>
    );
};

export { WaitingPage };
