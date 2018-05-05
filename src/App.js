import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import Todos from "./Todo/Todos";
//import {BrowserRouter as Router, Route} from 'react-router-dom';
//import Todos from "./Todo/Todos";
import Course from "./components/course/Course";

class App extends Component {
    render() {
        return(
            <div>
                <Course/>

            </div>
        )
    }
}
export default App;
