/* 
* @Author: wxx
* @Date:   2017-04-24 16:33:35
* @Last Modified time: 2017-05-19 16:41:56
*/

// var styleCss = require("./style.css");     //commonJS写法
// var BootstrapCss = require("bootstrap");
// var cont = require("./content.js");
// window.$ = require("jquery");
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';     //es6的写法
import './style.css';
import $ from 'jquery';
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Login from './component/login';
import routeConfig from './config/Route';


//我是用bootstrap写的
ReactDOM.render(
        routeConfig
    , document.getElementById('app')
);