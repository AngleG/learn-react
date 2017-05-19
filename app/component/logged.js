'use strict';
import React, { Component, PropTypes } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Router, Route, Link } from 'react-dom';

export default class Logged extends Component {
    goBack () {
        window.history.go(-1)
    }
    render () {
        return (
            <div>
                <h3>Welcome to index.</h3>
                <p><button type="button" onClick={ this.goBack }>返回</button></p>
            </div>
        )
    }
}