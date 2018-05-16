import React from 'react';
import {Switch, Route} from  'react-router-dom'
import Course from "../components/course/Course";
import Company from "../components/company/Company";
import Lecturer from "../components/lecturer/Lecturer";
import Intern from "../components/intern/Intern";

export default  class RouterManagement extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path='/management/courses' component = {Course}/>
                    <Route path='/management/companies' component = {Company}/>
                    <Route path='/management/lecturers' component = {Lecturer}/>
                    <Route path='/management/interns' component = {Intern}/>
                </Switch>
            </main>
        )
    }
}