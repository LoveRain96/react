import React           from 'react';
import {Switch, Route} from  'react-router-dom'
import Course         from "../components/course/Course";
import Company        from "../components/company/Company";
import Lecturer       from "../components/lecturer/Lecturer";
import Intern         from "../components/intern/Intern";
import CompanyEditor  from "../components/company/CompanyEditor";
import DetailLecturer from "../components/lecturer/DetailLecturer";
import InternEditor   from "../components/intern/InternEditor";
import CreateLecturer from "../components/lecturer/CreateLecturer";
import CreateIntern   from "../components/intern/CreateIntern";
import Council        from "../components/council/Council";
import Areas          from "../components/company/area/Areas";

export default  class RouterManagement extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path='/management/courses' component = {Course}/>
                    <Route path='/management/companies' component = {Company}/>
                    <Route path='/management/company/:id' component = {CompanyEditor}/>
                    <Route path='/management/lecturers' component = {Lecturer}/>
                    <Route path='/management/interns' component = {Intern}/>
                    <Route path={'/management/lecturer/:id'} component={DetailLecturer}/>
                    <Route path={'/management/lecturer'} component={CreateLecturer}/>
                    <Route path={'/management/intern/:id'} component={InternEditor}/>
                    <Route path={'/management/intern'} component={CreateIntern}/>
                    <Route path={'/management/council'} component={Council}/>
                    <Route path={'/management/areas'} component={Areas}/>
                </Switch>
            </main>
        )
    }
}