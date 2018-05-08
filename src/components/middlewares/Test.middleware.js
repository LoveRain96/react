import store from "../course/store";
import {applyMiddleware} from "redux";

const logger = (store) => (next) => (action) => {
    console.log('check_middleware', action);
    next(action);
};

export  const middleware = applyMiddleware(logger);