import {applyMiddleware, createStore} from "redux";
import  reducer from "../reducers/index";
import courseApi from "../components/middlewares/courseApi";
import companyApi from "../components/middlewares/companyApi";

const store = createStore(reducer, applyMiddleware(...[courseApi,companyApi]));

export default store;