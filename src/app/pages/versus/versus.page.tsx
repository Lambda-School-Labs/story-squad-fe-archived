import React from 'react';

import { AppBar, Button, CircularProgress, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useAPI } from '../../hooks';
import { Versus } from '../../components';
import { Switch, Route } from 'react-router-dom';
import 'typeface-bangers';
import { StringifyOptions } from 'querystring';

const useStyles = makeStyles((theme) => ({
    loading: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
    },
    headerFont: {
        'fontFamily': 'Bangers',
        'fontSize': '86px',
        'fontWeight': 'bold',
        '-webkit-text-stroke-width': '1px',
        '-webkit-text-stroke-color': '#ff6d3a',
    },
    headerBorder: {
        border: '4px solid #292929',
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    welcome: {
        marginBottom: theme.spacing(2),
    },
    toolbar: theme.mixins.toolbar,
}));

const VersusPage: React.FC = () => {
    const classes = useStyles();
    const [response, loading, request] = useAPI('/children/me');
    const handleRequest = () => {
        request();
    };

    if (!response?.me)
        return (
            <section className={classes.loading}>
                <CircularProgress size={56} />
            </section>
        );

    console.log('versus response', response);

    return (
        <div className={classes.root}>
            <main className={classes.main}>
                <Switch>
                    <Route
                        path='/matchup'
                        component={Versus}
                        child={response.me}
                        onUpdate={handleRequest}
                    />
                </Switch>
            </main>
        </div>
    );
};

export { VersusPage };
