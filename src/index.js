import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import App from './App';
import {Provider} from 'react-redux';
import store from "./redux/store";
import axios from 'axios';

axios.defaults.baseURL = 'https://inigambar.tepuntal.com/api';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);