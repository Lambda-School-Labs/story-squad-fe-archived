import React, { useState, useEffect } from 'react';
import 'typeface-nunito';
import ava1 from '../point-allocation-dashboard/img/cam.png';
import ava2 from '../point-allocation-dashboard/img/Hero13.png';
import testSub from '../point-allocation-dashboard/img/draw2.jpg';
import {
    Button,
    Avatar,
    Typography,
    Container,
    Grid,
    Modal,
    Fade,
    Backdrop,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    CircularProgress,
    Card,
    Checkbox,
    Paper,
    Popper,
    MenuItem,
    MenuList,
    Grow,
    ClickAwayListener,
} from '@material-ui/core';
import { useStyles } from './versus-styles';
import { Child } from '../../models';
import { Link } from 'react-router-dom';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import AcceptMissionButton from './img/Accept-mission-button.png';

import vsImg from './img/VS.png';

interface PointCardProps {
    child: Child;
}
const Versus: React.FC<PointCardProps> = ({ child }) => {
    const classes = useStyles({});
    // const [student, setStudent] = useState({
    //     username: '',
    //     story: {
    //         id: 0,
    //         story: {
    //             page1: '',
    //             page2: '',
    //             page3: '',
    //             page4: '',
    //             page5: '',
    //         },
    //     },
    //     illustration: {
    //         id: 0,
    //         illustration: '',
    //     },
    // });
    // const [teammate, setTeammate] = useState({
    //     username: '',
    //     story: {
    //         id: 0,
    //         story: {
    //             page1: '',
    //             page2: '',
    //             page3: '',
    //             page4: '',
    //             page5: '',
    //         },
    //     },
    //     illustration: {
    //         id: 0,
    //         illustration: '',
    //     },
    // });
    //student/teammate submissions state
    return (
        <Container className={classes.containerStyling}>
            <Grid container>
                {/* Header code */}
                <Grid container direction='row' className={classes.appBar}>
                    <Grid
                        container
                        item
                        direction='column'
                        justify='space-around'
                        alignItems='center'>
                        <Typography className={classes.h2Styling} variant='h2'>
                            The Match Up
                        </Typography>
                        {/* team1 placeholder*/}
                        <Typography className={classes.h3Styling}>VS</Typography>
                        {/* team2 placeholder*/}
                        <Typography className={classes.h3Styling}>
                            201 Points Needed To Win!
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid className={classes.topRow}>
                <Grid className={classes.story1}>
                    <div className={classes.nameRow}>
                        <div className={classes.leftPlayer}>
                            <Avatar className={classes.avatarMargin} src={ava1}></Avatar>
                            <h3>Name1</h3>
                        </div>
                        <div className={classes.rightPlayer}>
                            <h3>Name2</h3>
                            <Avatar src={ava2}></Avatar>
                        </div>
                    </div>
                    <div className={classes.subRow}>
                        <Avatar>High story</Avatar>
                        <div className={classes.totalScore}>
                            <p>Total</p>
                        </div>
                        <Avatar>High story</Avatar>
                    </div>
                    <img className={classes.vs} src={vsImg} alt='this is a lightning bolt thing' />
                </Grid>
                <Grid className={classes.story2}>
                    <div className={classes.nameRow}>
                        <div className={classes.leftPlayer}>
                            <Avatar src={ava1}></Avatar>
                            <h3>Name3</h3>
                        </div>
                        <div className={classes.rightPlayer}>
                            <h3>Name4</h3>
                            <Avatar src={ava2}></Avatar>
                        </div>
                    </div>
                    <div className={classes.subRow}>
                        <Avatar>Low story</Avatar>
                        <div className={classes.totalScore}>
                            <p>Total</p>
                        </div>
                        <Avatar>Low story</Avatar>
                    </div>
                    <img className={classes.vs} src={vsImg} alt='this is a lightning bolt thing' />
                </Grid>
            </Grid>
            <Grid className={classes.bottomRow}>
                <Grid className={classes.picture1}>
                    <div className={classes.nameRow}>
                        <div className={classes.leftPlayer}>
                            <Avatar src={ava1}></Avatar>
                            <h3>Name1</h3>
                        </div>
                        <div className={classes.rightPlayer}>
                            <h3>Name4</h3>
                            <Avatar src={ava2}></Avatar>
                        </div>
                    </div>
                    <div className={classes.subRow}>
                        {/* <div className={classes.button}>
                            <Link to={`/kids-dashboard/points-dashboard`}>
                                <Button>Back</Button>
                            </Link>
                        </div> */}
                        <Avatar>high pic</Avatar>
                        <div className={classes.totalScore}>
                            <p>Total</p>
                        </div>
                        <Avatar>high pic</Avatar>
                    </div>
                    <img className={classes.vs} src={vsImg} alt='this is a lightning bolt thing' />
                </Grid>
                <Grid className={classes.picture2}>
                    <div className={classes.nameRow}>
                        <div className={classes.leftPlayer}>
                            <Avatar src={ava1}></Avatar>
                            <h3>Name3</h3>
                        </div>
                        <div className={classes.rightPlayer}>
                            <h3>Name2</h3>
                            <Avatar src={ava2}></Avatar>
                        </div>
                    </div>
                    <div className={classes.subRow}>
                        <Avatar>Low pic</Avatar>
                        <div className={classes.totalScore}>
                            <p>Total</p>
                        </div>
                        <Avatar>Low Pic</Avatar>
                        {/* <div className={classes.button}>
                            <Button>Vote</Button>
                        </div> */}
                    </div>
                    <img className={classes.vs} src={vsImg} alt='this is a lightning bolt thing' />
                </Grid>
            </Grid>
        </Container>
    );
};

export { Versus };
