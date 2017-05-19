'use strict';
import React, {Component, PropTypes} from 'react';
import ReactDOM, { render } from 'react-dom';
// import Logged from './logged';
// import Register from './register';
// import { history } from '../config/Route';
import { browserHistory, Link } from 'react-router';

export default class Login extends Component {
    
    render () {
        const iconStyle = {
            color: 'red'
        };
        return (<div className="container">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 col-xs-3 control-label">Name</label>
                        <div className="col-sm-10 col-xs-9">
                            <input type="text" className="form-control" id="inputName" placeholder="name" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword" className="col-sm-2 col-xs-3 control-label">password
                            <span className="glyphicon glyphicon-star" style={iconStyle}></span>
                        </label>
                        <div className="col-sm-10 col-xs-9">
                            <input type="password" className="form-control" id="inputPassword" placeholder="password" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-10 col-sm-offset-2 col-xs-9 col-xs-offset-3">
                            <button className="btn btn-default" type="submit" onClick={ () => browserHistory.push('/logged') }>登录</button>
                            <button className="btn btn-default" type="submit" onClick={ () => browserHistory.push('/register') }>register</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}


// class ExampleComponent extends React.Component {
//      render() { 
//       // return <div>Hello, world.</div>;
//       return (<div className="container">
//                     <form className="form-horizontal">
//                         <div className="form-group">
//                             <label htmlFor="inputName" className="col-sm-2 col-xs-3 control-label">Name</label>
//                             <div className="col-sm-10 col-xs-9">
//                                 <input type="text" className="form-control" id="inputName" placeholder="name" />
//                             </div>
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="inputPassword" className="col-sm-2 col-xs-3 control-label">password
//                                 <span className="glyphicon glyphicon-star"></span>
//                             </label>
//                             <div className="col-sm-10 col-xs-9">
//                                 <input type="password" className="form-control" id="inputPassword" placeholder="password" />
//                             </div>
//                         </div>
//                         <div className="form-group">
//                             <div className="col-sm-10 col-sm-offset-2 col-xs-9 col-xs-offset-3">
//                             <button className="btn btn-default" type="submit" onClick={ () => browserHistory.push('/logged') }>登录</button>
//                             <Link to="/logged">登录</Link>
//                             <Link to="/register">register</Link>

//                             </div>
//                         </div>
//                     </form>
//                 </div>);
//      }
// }

// export default ExampleComponent;

      // <button className="btn btn-default" type="submit" onClick={ browserHistory.push('/logged') }>登录</button>
      // <button className="btn btn-default" type="submit" onClick={ browserHistory.push('/register') }>register</button>