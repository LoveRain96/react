import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css'
import registerServiceWorker from './registerServiceWorker';
import store from "./reducers/store";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom"

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>, document.getElementById('root'));
registerServiceWorker();
