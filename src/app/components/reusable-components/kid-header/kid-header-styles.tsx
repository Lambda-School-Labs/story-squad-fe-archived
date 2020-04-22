import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import cityscape from '../../child-dashboard/kid-progress/icons/cityscape.png';
export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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
        h2Styling: {
            'fontFamily': 'Bangers',
            'color': '#FFFFFF',
            'fontSize': '70px',
            'fontWeight': 'bold',
            '-webkit-text-stroke-width': '1px',
            '-webkit-text-stroke-color': '#000000',
        },
        headerMenuDiv: {
            display: 'flex',
            height: '26vh',
            flexFlow: 'wrap no-wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        upperTitleDiv: {
            display: 'flex',
            height: '26vh',
            justifyContent: 'flex-end',
            alignItems: 'center',
            width: '65%',
        },
        upperHeaderButtonDiv: {
            display: 'flex',
            height: '18vh',
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            width: '20%',
        },
    })
);
