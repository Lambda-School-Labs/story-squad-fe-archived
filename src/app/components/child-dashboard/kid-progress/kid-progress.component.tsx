import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import {
    Card,
    Button,
    Checkbox,
    Paper,
    Popper,
    MenuItem,
    MenuList,
    Fade,
    Modal,
    Backdrop,
    Grow,
    ClickAwayListener,
} from '@material-ui/core';
import { useStyles } from './kid-progress-styles';
import { Child } from '../../../models';
import { useAPI } from '../../../hooks';

interface KidProgressProps {
    onUpdate?: () => void;
    child: Child;
}

const KidProgressCard: React.FC<KidProgressProps> = ({ child, onUpdate }) => {
    const classes = useStyles({});
    const [response, loading, request] = useAPI('/children/progress', 'POST');
    const [matchInfo] = useAPI(`/battlesRoutes/battles`, 'GET', false);
    const logout = () => window.dispatchEvent(new Event('logout'));
    const [menu, setMenu] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);
    const [open, setOpen] = React.useState(false);

    const handleToggle = () => {
        setMenu((prevMenu) => !prevMenu);
    };

    const modalClose = () => {
        setOpen(false);
    };

    const handleClose = (event: React.MouseEvent<EventTarget>) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
            return;
        }

        setMenu(false);
    };

    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setMenu(false);
        }
    }

    const prevMenu = React.useRef(menu);
    React.useEffect(() => {
        if (prevMenu.current === true && menu === false && anchorRef.current !== null) {
            anchorRef.current.focus();
        }
        prevMenu.current = menu;
    }, [menu]);

    React.useEffect(() => {
        if (response?.progress && onUpdate) onUpdate();
        if (response?.progress) response.progress = undefined;
    }, [onUpdate, response]);

    const { cohort, progress } = child;
    const { dueDates: dueDateStrings } = cohort;
    const dueDates = Object.fromEntries(
        Object.entries(dueDateStrings).map(([key, date]) => [key, moment(date)])
    );
    /* if progress.reading is false the inital modal with continue to open on render */
    React.useEffect(() => {
        if (progress.reading === false) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }, [progress.reading]);
    console.log(`MATCH INFO`, matchInfo);
    return (
        <>
            <Card className={classes.card}>
                {/* Logout button */}
                <Popper
                    open={menu}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    transition
                    disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                    placement === 'bottom' ? 'center top' : 'center bottom',
                            }}>
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList
                                        autoFocusItem={menu}
                                        id='menu-list-grow'
                                        onKeyDown={handleListKeyDown}
                                        className={classes.logoutMenu}>
                                        <MenuItem onClick={logout}>Logout</MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
                <section className={classes.columnFlex}>
                    {/* Mission header */}
                    <div className={classes.appBar}>
                        <div className={classes.headerFont}>Mission</div>
                        <div className={classes.btn}>
                            {' '}
                            {/* Menu button */}
                            <Button
                                ref={anchorRef}
                                aria-controls={menu ? 'menu-list-grow' : undefined}
                                aria-haspopup='true'
                                className={classes.logoutButton}
                                onClick={handleToggle}>
                                Menu
                            </Button>
                        </div>
                    </div>
                    {/* End of mission header  */}
                    {/* Read / Write / Draw container */}
                    <div className={classes.displayFlex}>
                        <div className={classes.read}>
                            <Checkbox
                                checked={progress.reading}
                                className={classes.alignRightTop}
                                color='primary'
                            />
                            <div className={classes.height50}>
                                <Link
                                    to={`/story/${cohort.week}`}
                                    onClick={() => request({ reading: true })}>
                                    <div className={classes.readIconDiv}></div>
                                </Link>
                            </div>
                        </div>
                        <div className={classes.writeDrawDiv}>
                            <div className={classes.write}>
                                <Checkbox
                                    checked={!!child.stories.length}
                                    className={classes.alignRight}
                                    color='primary'
                                />
                                <Link to={`/kids-dashboard/upload`}>
                                    <div className={classes.writeIconDiv}></div>
                                </Link>
                            </div>
                            <div className={classes.draw}>
                                <Checkbox
                                    checked={!!child.illustrations.length}
                                    className={classes.alignRight}
                                    color='primary'
                                />
                                <Link to={`/kids-dashboard/drawing-upload`}>
                                    <div className={classes.drawIconDiv}></div>
                                </Link>
                                {progress.reading &&
                                !!child.stories.length &&
                                !!child.illustrations.length &&
                                !!matchInfo ? (
                                    <Link to={`/kids-dashboard/team-join`}>
                                        <Button className={classes.orangeButton} type='button'>
                                            TEAM UP!
                                        </Button>
                                    </Link>
                                ) : (
                                    <Button
                                        disabled={
                                            !progress.reading ||
                                            !child.stories.length ||
                                            !child.illustrations.length ||
                                            !matchInfo
                                        }
                                        className={classes.grayButton}
                                        type='button'>
                                        {progress.reading &&
                                        child.stories.length &&
                                        child.illustrations.length
                                            ? 'Your team will be matched soon!'
                                            : 'Submissions needed to proceed!'}
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </Card>
            {/* Conditional modal  */}
            <Modal
                aria-labelledby='transition-modal-title'
                aria-describedby='transition-modal-description'
                className={classes.modal}
                open={open}
                onClose={modalClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}>
                <Fade in={open}>
                    <div className={classes.modalPaper}>
                        <h2 id='transition-modal-title' className={classes.modalFont}>
                            Welcome to Story Squad!
                        </h2>
                        <p id='transition-modal-description' className={classes.modalFont}>
                            To begin your journey, click the 'READ' icon and start the story!
                            <br />
                            Are you ready to accept the mission?
                        </p>
                        <Button onClick={modalClose} className={classes.modalBtn}>
                            I accept!!
                        </Button>
                    </div>
                </Fade>
            </Modal>
        </>
    );
};
export { KidProgressCard };
