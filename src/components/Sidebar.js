import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import FlatButton from 'material-ui/FlatButton';
import '../styles/Sidebar.css';

export default class Sidebar extends Component {
    render() {
        return(
            <Menu customCrossIcon={false} customBurgerIcon={false} isOpen={this.props.isOpen} disableOverlayClick>
                <FlatButton secondary label='dashboard' fullWidth/>
                <FlatButton secondary label='my account' fullWidth/>
                <FlatButton secondary label='league of legends' fullWidth />
                <FlatButton secondary label='dota2' fullWidth/>
            </Menu>
        );
    }
}