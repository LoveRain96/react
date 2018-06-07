import React           from 'react';
import {Switch, Route} from  'react-router-dom'
import CourseList      from "../components/Guest/CourseList";
import CompanyList     from "../components/Guest/CompanyList";
import FromLogin       from "../components/login/FromLogin";
import DetailCompany   from "../components/company/DetailCompany";
import UserProfile     from "../components/user/UserProfile";

export default  class RouterGuest extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path='/courses' component = {CourseList}/>
                    <Route path='/companies' component = {CompanyList}/>
                    <Route path='/company/:id' component = {DetailCompany}/>
                    <Route path='/login' component = {FromLogin}/>
                    <Route path='/user' component = {UserProfile}/>
                </Switch>
            </main>
        )
    }
}