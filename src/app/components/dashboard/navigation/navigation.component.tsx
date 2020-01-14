import React from 'react';
import { NavLink } from 'react-router-dom';

import {
    Divider,
    Drawer,
    Icon,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { CircularDeterminate } from '../../common/circular-progress';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'center',
    },
    icon: {
        marginRight: theme.spacing(1),
    },
}));

const NavigationDrawer = () => {
    const classes = useStyles();

    return (
        <Drawer
            className={classes.drawer}
            variant='permanent'
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor='left'>
            <Toolbar className={classes.toolbar}>
                <Icon className={classes.icon}>book</Icon>
                <Typography variant='h6'>Story Squad</Typography>
            </Toolbar>
            <Divider />
            <List>
                <NavLink to='/dashboard'>
                    <ListItem button>
                        <ListItemText primary='Dashboard' />
                    </ListItem>
                </NavLink>
                <ListItem button>
                    <ListItemText primary='Settings' />
                </ListItem>
                <NavLink to='/dashboard/cards'>
                    <ListItem button>
                        <ListItemText primary='Payment' />
                    </ListItem>
                </NavLink>
                <ListItem button>
                    <ListItemText primary='Help' />
                </ListItem>
            </List>
        </Drawer>
    );
};

export { NavigationDrawer };
