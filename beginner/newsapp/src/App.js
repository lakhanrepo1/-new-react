import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
//UpTo Video:23
export default class App extends Component {
   c='Lakhan';
  render() {
    return (
      <div>
        <NavBar/>
        <News/>
      </div>
    )
  }
}
