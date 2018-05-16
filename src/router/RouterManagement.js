import React from 'react';
import {Switch, Route} from  'react-router-dom'
import Course from "../components/course/Course";
import Company from "../components/company/Company";

export default  class RouterManagement extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path='/management/courses' component = {Course}/>
                    <Route path='/management/companies' component = {Company}/>
                </Switch>
            </main>
        )
    }
}