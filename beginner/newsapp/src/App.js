// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
//UpTo Video:30
//key-9d77ef5da4e346db8f658997cdd474e6
export default class App extends Component {
   c='Lakhan';
  render() {
    return (
      <div>
        <NavBar/>
        <News pageSize={6} country="us" category="science" />
      </div>
    )
  }
}
