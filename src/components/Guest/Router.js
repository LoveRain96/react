import React from 'react';
import {Switch, Route} from  'react-router-dom'
import Guest from "./Guest";
import LayoutDemo from "../../Layout";

export default  class Router extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component = {LayoutDemo}/>
                    <Route path='/course/:id' component = {Guest}/>
                </Switch>
            </main>
        )
    }
}