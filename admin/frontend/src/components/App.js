import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
// import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom"


// import { Provider as AlertProvider } from 'react-alert';
// import AlertTemplate from 'react-alert-template-basic';

// import Header from './layout/header';
// import Dashboard from './leads/Dashboard';
// import Alerts from './layout/Alerts';
// import Login from './accounts/Login';
// import Register from './accounts/Register';
// import PrivateRoute from './common/PrivateRoute';

// import { Provider } from 'react-redux';
// import store from '../store';
// import { loadUser } from '../actions/auth';


// //  Alert Oprions
// const alertOptions = {
//     timeout: 3000,
//     position: 'top center'
// }
class App extends Component {
    // componentDidMount() {
    //     store.dispatch(loadUser());
    // }
    render() {
        return <h1>React App</h1>
    }
};

ReactDom.render(<App />, document.getElementById('app'));