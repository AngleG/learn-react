
'use strict';
import React, { Component, PropTypes } from 'react';
import ReactDOM, { render } from 'react-dom';
import { browserHistory } from 'react-router';

export default class Home extends Component {
    constructor () {
        super()
    }
    componentDidMount(){
        setTimeout( () => browserHistory.push('/login'), 3000)
    }
    render () {
        return (
            <h2>This is the IndexRoute.</h2>
        )
    }
}