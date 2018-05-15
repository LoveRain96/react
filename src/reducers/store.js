import {applyMiddleware, createStore} from "redux";
import  reducer from "../reducers/index";
import courseApi from "../components/middlewares/courseApi";
import companyApi from "../components/middlewares/companyApi";
import internshipApi from "../components/middlewares/internshipApi";

const store = createStore(reducer, applyMiddleware(...[courseApi, companyApi, internshipApi]));

export default store;