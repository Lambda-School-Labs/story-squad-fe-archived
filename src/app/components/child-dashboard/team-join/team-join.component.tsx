import React, { useEffect, useState } from 'react';
import { Container, CircularProgress } from '@material-ui/core';
import { useAPI } from '../../../hooks';
import { Child } from '../../../models';
import { KidHeader } from '../../reusable-components/';
import { TeamPlayer } from './team-player';
import avatar1 from '../../point-allocation-dashboard/img/cam.png';
import avatar2 from '../../point-allocation-dashboard/img/Hero13.png';
import { useStyles } from './team-join-styles';
interface TeamJoinProps {
    onUpdate?: () => void;
    child: Child;
}

const TeamJoin: React.FC<TeamJoinProps> = ({ child, onUpdate }) => {
    const classes = useStyles({});
    const [matchInfo] = useAPI(`/battlesRoutes/battles`, 'GET', false);

    return (
        <Container>
            <KidHeader title={'Join The Squad!'} />
            {!matchInfo ? (
                <div>
                    <CircularProgress />
                </div>
            ) : (
                <div className={classes.grid}>
                    <TeamPlayer
                        username={matchInfo.thisMatch.team.student.username}
                        ava={avatar1}
                        playerStyles={classes.player}
                        buttonStyles={classes.backButton}
                    />
                    <TeamPlayer
                        username={matchInfo.thisMatch.team.teammate.username}
                        ava={avatar2}
                        playerStyles={classes.teammate}
                        buttonStyles={classes.nextButton}
                    />
                </div>
            )}
        </Container>
    );
};
export { TeamJoin };
