import React, { Component } from 'react';
import './App.css';
import LayoutDemo from "./Layout";
import Todos from "./Todo/Todos"
class App extends Component {
    render() {
        return(
            <div>
                <LayoutDemo/>
                <Todos/>
            </div>
        )
    }
}
export default App;
