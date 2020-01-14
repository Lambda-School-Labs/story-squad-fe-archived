import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Child } from '../../../../models';
import { useAPI } from '../../../../hooks';
import { ChildCard } from '../card/card.component';

const useStyles = makeStyles((theme) => ({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
    },
    list: {
        margin: theme.spacing(3),
        display: 'grid',
        gridGap: theme.spacing(3),
        gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
    },
}));

interface ChildListProps {
    className?: string;
}

const ChildList: React.FC<ChildListProps> = ({ className }) => {
    const classes = useStyles({});
    const { request, response } = useAPI<{ children: Child[] }>('/children');

    React.useEffect(() => {
        request();
    }, [request]);

    if (!response?.children) return <div></div>;
    const { children } = response;
    return (
        <div className={className}>
            <section className={classes.header}>
                <Typography variant='overline' gutterBottom>
                    Child Accounts
                </Typography>

                <Link to='/dashboard/child/create'>
                    <Button>Add Child</Button>
                </Link>
            </section>

            <section className={classes.list}>
                {children.map((child) => (
                    <ChildCard key={child.id} child={child} onUpdate={request}></ChildCard>
                ))}
            </section>
        </div>
    );
};

export { ChildList };
