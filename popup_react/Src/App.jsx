import React, { Component } from 'react'
import {  Router, Route, BrowserRouter, Switch, link } from 'react-router-dom'
import Login from './Login.jsx'
import Message from './Messages.jsx'


class App extends Component {
  render() {
    return (
            
        
        
            <Switch>
              
                <Route path="/" component={Login} exact />
                <Route path="/message/:id" component={Message} exact/>        
            </Switch>
        
    )
  }
}

export default App