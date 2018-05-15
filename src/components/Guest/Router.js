import React from 'react';
import {Switch, Route} from  'react-router-dom'
import CourseList from "./CourseList";
import CompanyList from "./CompanyList";
import InternshipList from "./InternshipList";

export default  class Router extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path='/courses' component = {CourseList}/>
                    <Route path='/companies' component = {CompanyList}/>
                    {/*<Route path='/course/:id/internships' component = {InternshipList}/>*/}
                </Switch>
            </main>
        )
    }
}