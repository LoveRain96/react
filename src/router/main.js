import React from 'react';
import {Switch, Route} from  'react-router-dom'
import LayoutDemo from "../Layout";




export default  class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={LayoutDemo}/>
                </Switch>
            </main>
        )
    }
}