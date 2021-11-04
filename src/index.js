import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension';


import App from './App';

// define inital state (redux)
let initState = {
    username: 'Bob',
    location: 'London'
}

//create reducer function
function myReducer(state=initState, action){
    switch(action.type){
        case 'UPDATE_USERNAME':
            return { ...state, username: action.payload };
        case 'UPDATE_LOCATION':
            return { ...state, location: action.payload };
        default:
            return state;
    }
}

let store = createStore(myReducer, devToolsEnhancer());

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>    
    </React.StrictMode>,
    document.getElementById('root')
);
