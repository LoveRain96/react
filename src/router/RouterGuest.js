import React from 'react';
import {Switch, Route} from  'react-router-dom'
import CourseList from "../components/Guest/CourseList";
import CompanyList from "../components/Guest/CompanyList";
import FromLogin from "../components/login/FromLogin";

export default  class RouterGuest extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path='/courses' component = {CourseList}/>
                    <Route path='/companies' component = {CompanyList}/>
                    <Route path='/login' component = {FromLogin}/>
                </Switch>
            </main>
        )
    }
}