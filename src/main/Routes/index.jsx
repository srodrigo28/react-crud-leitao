import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from './../../components/home'
import UserCrud from './../../components/UserCrud'

// eslint-disable-next-line
export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/users' component={UserCrud} />
        <Redirect from='*' to='/' />
    </Switch>
