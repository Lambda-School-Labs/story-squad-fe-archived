import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import cityscape from '../child-dashboard/kid-progress/icons/cityscape.png';
import { url } from 'inspector';
export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        vs: {
            height: '88%',
            zIndex: 10,
            position: 'absolute',
        },
        card: {
            alignSelf: 'center',
            maxWidth: theme.breakpoints.values.md,
            width: '100%',
        },
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        containerStyling: {
            fontFamily: 'nunito',
            height: '100vh',
            boxSizing: 'border-box',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
        root: {
            fontFamily: 'nunito',
            display: 'flex',
            flexDirection: 'column',
            maxHeight: '510%',
        },
        h2Styling: {
            'fontFamily': 'Bangers',
            'color': '#FFFFFF',
            'fontSize': '70px',
            'fontWeight': 'bold',
            '-webkit-text-stroke-width': '1px',
            '-webkit-text-stroke-color': '#000000',
        },
        h3Styling: {
            'fontFamily': 'Bangers',
            'color': '#FFFFFF',
            'fontSize': '35px',
            'fontWeight': 'bold',
            '-webkit-text-stroke-width': '1px',
            '-webkit-text-stroke-color': '#000000',
        },
        h4Styling: {
            'fontFamily': 'Bangers',
            'color': '#FFFFFF',
            'fontSize': '48px',
            'lineHeight': '51px',
            'fontWeight': 'bold',
            '-webkit-text-stroke-width': '1px',
            '-webkit-text-stroke-color': '#000000',
            'marginLeft': '3%',
            'marginRight': '4%',
            'marginTop': '1%',
            // 'border': '1px solid red',
            'display': 'flex',
        },
        teamName: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignContent: 'center',
            // border: '1px solid blue',
            width: '80%',
        },
        appBar: {
            height: '26vh',
            width: '100%',
            backgroundColor: '#6CEAE6',
            backgroundImage: `url(${cityscape})`,
            backgroundRepeat: 'no-repeat',
            border: '7px solid #000000',
            backgroundSize: '101% 103%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        },
        logoutButton: {
            'marginLeft': '780px',
            'marginBottom': '105px',
            'backgroundColor': '#FF6B35',
            'fontSize': '24px',
            'fontWeight': 'bold',
            'borderRadius': '10px',
            'color': 'white',
            'width': '100px',
            'border': '3px solid #292929',
            'textTransform': 'capitalize',
            'fontFamily': 'nunito',
            '&:hover': {
                backgroundColor: '#FF6B35',
            },
        },
        logoutMenu: {
            'backgroundColor': '#FF6B35',
            'fontSize': '24px',
            'fontWeight': 'bold',
            'color': 'white',
            'width': '100px',
            'textTransform': 'capitalize',
            'border': '2px solid #292929',
            'fontFamily': 'nunito',
            '&:hover': {
                backgroundColor: '#FF6B35',
            },
        },
        // stuff from kid progress
        topRow: {
            display: 'flex',
            aligntItems: 'center',
        },
        bottomRow: {
            display: 'flex',
        },
        // The rows in which the content of the toprow and bottomrow are stored
        nameRow: {
            display: 'flex',
            justifyContent: 'space-between',
            zIndex: 9,
            width: '85%',
            height: '40%',
        },
        subRow: {
            display: 'flex',
            justifyContent: 'space-between',
            zIndex: 9,
            width: '105%',
            height: '45%',
        },
        //styling for the name and avatar within nameRow
        leftPlayer: {
            display: 'flex',
            // flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '3%',
            // border: '1px solid red',
        },
        rightPlayer: {
            display: 'flex',
            // flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '3%',
            // border: '1px solid blue',
        },
        totalScoreBig: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            fontFamily: 'Nunito',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '26px',
            color: '#FFFFFF',
            marginTop: '27%',
            marginRight: '5%',
        },
        totalScoreSmall: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            fontFamily: 'Nunito',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '26px',
            color: '#FFFFFF',
            marginTop: '33%',
            marginRight: '5%',
        },
        story1: {
            position: 'relative',
            backgroundColor: '#B5D33D',
            width: '55%',
            height: '37vh',
            border: '3.5px solid black',
            borderRight: '3.5px solid black',
            borderLeft: 'solid black 7px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'start',
            boxSizing: 'border-box',
            [theme.breakpoints.only('sm')]: {
                width: '100%',
            },
            background: 'url({ vsImg })',
        },
        pictureHover: {
            cursor: 'pointer',
        },
        story2: {
            position: 'relative',
            backgroundColor: '#EB7D5B',
            width: '45%',
            height: '37vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'start',
            border: '3.5px solid black',
            borderLeft: '3.5px solid black',
            borderRight: 'solid black 7px',
            boxSizing: 'border-box',
            [theme.breakpoints.only('sm')]: {
                width: '100%',
            },
        },
        picture1: {
            position: 'relative',
            backgroundColor: '#FED23F',
            width: '45%',
            height: '37vh',
            border: '3.5px solid black',
            borderLeft: '7px solid black',
            borderBottom: '7px solid black',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'start',
            boxSizing: 'border-box',
            [theme.breakpoints.only('sm')]: {
                width: '100%',
            },
        },
        picture2: {
            position: 'relative',
            background: '#429CB5',
            width: '55%',
            height: '37vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'start',
            border: '3.5px solid black',
            borderRight: '7px solid black',
            borderBottom: '7px solid black',
            boxSizing: 'border-box',
            [theme.breakpoints.only('sm')]: {
                width: '100%',
            },
        },
        btnContainer: {
            zIndex: 1,
            display: 'flex',
            justifyContent: 'center',
            width: '63.5%',
            position: 'absolute',
            height: '37vh',
            // border: '2px orange dashed',
        },
        btnDiv: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            width: '100%',
            // border: '1px green solid',
            margin: '0% 2% 1% 2%',
        },
        orangeButton: {
            'backgroundColor': '#FF6B35',
            'fontSize': '24px',
            'fontWeight': 'bold',
            'borderRadius': '10px',
            'color': 'white',
            'width': '200px',
            'border': '3px solid #292929',
            'textTransform': 'capitalize',
            'fontFamily': 'nunito',
            '&:hover': {
                backgroundColor: '#FF6B35',
            },
        },
        avatarStyle: {
            height: '63px',
            width: '63px',
            padding: '10px',
            margin: '10%',
        },
        playerName: {
            fontFamily: 'Bangers',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '24px',
            lineHeight: '26px',
            color: '#292929',
            // border: '1px solid blue',
            paddingRight: '25%',
            paddingLeft: '10%',
        },
    })
);
