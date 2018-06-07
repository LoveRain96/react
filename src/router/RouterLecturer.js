import React           from 'react';
import {Switch, Route} from  'react-router-dom'
import Company        from "../components/company/Company";
import Intern         from "../components/intern/Intern";
import CompanyEditor  from "../components/company/CompanyEditor";
import InternEditor   from "../components/intern/InternEditor";
import CreateIntern   from "../components/intern/CreateIntern";
import Registration   from "../components/registration/Registration";

export default  class RouterLecturer extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path='/management/companies' component = {Company}/>
                    <Route path='/management/company/:id' component = {CompanyEditor}/>
                    <Route path='/management/interns' component = {Intern}/>
                    <Route path={'/management/intern/:id'} component={InternEditor}/>
                    <Route path={'/management/intern'} component={CreateIntern}/>
                    <Route path={'/management/registration'} component={Registration}/>
                </Switch>
            </main>
        )
    }
}