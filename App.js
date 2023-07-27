
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News   from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {
  apiKey="61924b647daa493abcd25e9f5df57755"
  state={
    progress:0
  };
  setProgress = (progress)=>{
    this.setState({progress:progress})
  };
  render() {
    return (
      <div>
       
       <Router>
        <NavBar/>
        <LoadingBar
        height={'3'}
        color='#f11946'
        progress={this.state.progress}
       
      />
        <Switch>
          <Route  path="/">
            < News  setProgress={this.setProgress} apiKey={this.apiKey } key="entertainment" pageSize={18} country="in" category="entertainment"/>
          </Route>
          <Route  path="business">
            < News  setProgress={this.setProgress} apiKey={this.apiKey } key="business" pageSize={18} country="in" category="business"/>
          </Route>
          <Route  path="entertainment">
            < News  setProgress={this.setProgress} apiKey={this.apiKey } key="entertainment" pageSize={18} country="in" category="entertainment"/>
          </Route>
          <Route  path="general">
            < News  setProgress={this.setProgress} apiKey={this.apiKey } key="general" pageSize={18} country="in" category="general"/>
          </Route>
          <Route  path="health">
            < News  setProgress={this.setProgress} apiKey={this.apiKey }  key="health"pageSize={18} country="in" category="health"/>
          </Route>
          <Route  path="science">
            < News  setProgress={this.setProgress} apiKey={this.apiKey } key="sports" pageSize={18} country="in" category="science"/>
          </Route>
          <Route  path="sports">
            < News  setProgress={this.setProgress} apiKey={this.apiKey } key="sports" pageSize={18} country="in" category="sports"/>
          </Route>
          <Route  path="technology">
            < News  setProgress={this.setProgress} apiKey={this.apiKey } key="technology" pageSize={18} country="in" category="technology"/>
          </Route>
         
        </Switch>
        </Router>
    
      </div>
    )
  }
}
