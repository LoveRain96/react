import React from 'react';
import {Switch, Route} from  'react-router-dom'
import CourseList from "./CourseList";
import CompanyList from "./CompanyList";

export default  class Router extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path='/courses' component = {CourseList}/>
                    <Route path='/companies' component = {CompanyList}/>
                </Switch>
            </main>
        )
    }
}