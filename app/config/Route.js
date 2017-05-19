'use strict';
import React, {Component, PropTypes} from 'react';
import { Router, Route, IndexRoute, browserHistory, hashHistory, Redirect, IndexRedirect } from 'react-router';

import Logged from '../component/logged';  //已登录页面
import Login from '../component/login';   //登录页面
import Register from '../component/register';   //登录页面
import Home from '../component/home';   //IndexRoute

class Roots extends Component {
    render () {
        return(
            <div>
            {this.props.children}
            </div>
        )
    }
}

const routeConfig = (
    <Router history={ browserHistory }>
        <Route path="/" component={ Roots }>
            <IndexRoute component={ Home } />
            <Route path="logged" component={ Logged } />
            <Route path="register" component={ Register } />
            <Route path="login" component={ Login } />
        </Route>
    </Router>
);
export default routeConfig;