import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import key from './img/Key.png';
export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        containerStyling: {
            fontFamily: 'nunito',
            height: '100vh',
            boxSizing: 'border-box',
        },
        topRow: {
            display: 'flex',
            aligntItems: 'center',
        },
        bottomRow: {
            display: 'flex',
        },
        nameRow: {
            display: 'flex',
            justifyContent: 'space-between',
            zIndex: 9,
            width: '100%',
            height: '40%',
        },
        nameRowBig: {
            padding: '0 10% 0 10%',
        },
        nameRowSmall: {
            padding: '0 7% 0 7%',
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
        // versusRound styles
        // located here as conditional styling for totalScore divs wouldn't work if styles located n /// versusRound folder
        leftPlayer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '3%',
        },
        rightPlayer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '3%',
        },
        avatarStyle: {
            height: '63px',
            width: '63px',
            padding: '10px',
        },
        playerName: {
            fontFamily: 'Bangers',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '24px',
            lineHeight: '26px',
            color: '#292929',
            margin: '2%',
            marginBottom: '0',
        },
        vs: {
            height: '88%',
            zIndex: 10,
            position: 'absolute',
        },
        subRow: {
            display: 'flex',
            justifyContent: 'space-between',
            zIndex: 9,
            width: '100%',
            height: '45%',
        },
        root: {
            marginBottom: '26%',
            marginRight: '-8%',
            cursor: 'pointer',
        },
        imagePreview: {
            marginLeft: '8%',
            width: '150px',
            height: '90px',
            borderRadius: '10px',
            cursor: 'pointer',
            border: '4px solid red',
        },
        gridContainer: {
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignContent: 'center',
        },
        lock: {
            width: '17%',
            position: 'absolute',
            top: '54%',
            left: '79.5%',
            transform: 'translate(-50%, -50%)',
            cursor: `URL(${key}) 2 26, default`,
        },
        // unlocked: {
        //     width: '18%',
        //     height: '45%',
        //     position: 'absolute',
        //     top: '54%',
        //     left: '79.5%',
        //     transform: 'translate(-50%, -50%)',
        //     cursor: 'pointer',
        //     border: '2px solid red',
        // },
    })
);
