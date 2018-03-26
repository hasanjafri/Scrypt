import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import FlatButton from 'material-ui/FlatButton';
import { Link, Route} from 'react-router-dom';
import Home from './Home/index';
import About from './About/index';
import '../styles/Sidebar.css';

export default class Sidebar extends Component {
    render() {
        return(
            <div>
                <Menu customCrossIcon={false} customBurgerIcon={false} isOpen={this.props.isOpen} disableOverlayClick>
                    <FlatButton secondary label='dashboard' fullWidth><Link to="/"/></FlatButton>
                    <FlatButton secondary label='about us' fullWidth><Link to="/about"/></FlatButton>
                    <FlatButton secondary label='league of legends' fullWidth />
                    <FlatButton secondary label='dota2' fullWidth/>
                </Menu>
                <Route exact={true} path="/" component={Home}/>
                <Route exact={true} path="/about" component={About}/>
            </div>

        );
    }
}