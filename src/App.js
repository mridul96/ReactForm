import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
class App extends Component {

  state = {
    fields: {},
  };

  onSubmit = fields =>{
    console.log('App component got:', fields);
}

  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
       <Form onSubmit={fields => this.onSubmit(fields)} />
      </div>
      </MuiThemeProvider>  
    );
  }
}

export default App;
