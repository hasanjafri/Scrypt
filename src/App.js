import React, { Component } from 'react';
import BaseTheme from './styles/BaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Sidebar from './components/Sidebar';
import Splash from './components/Splash';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false
        };
    }

    toggleSidebar = () => {
        this.setState({
            sidebarOpen: !this.state.sidebarOpen
        });
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(BaseTheme)}>
                <div>
                    <AppBar title="Scrypt" onLeftIconButtonClick={this.toggleSidebar}/>
                    <Sidebar isOpen={this.state.sidebarOpen}/>
                    <Splash/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
