import './app.component.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { PrivateRoute } from './components/common/private-route/private-route.component';

import { ExamplePage } from './pages/example.page';
import { Private } from './pages/private.page';
import { PrivacyPage } from './pages/privacy-policy.page';
import { ToSPage } from './pages/tos.page';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute redirect='/' path='/private' component={Private} />
                <Route path='/privacy-policy' component={PrivacyPage} />
                <Route path='/terms-of-service' component={ToSPage} />
                <Route path='/' component={ExamplePage} />
            </Switch>
        </Router>
    );
};

export { App };
