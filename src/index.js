import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


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
            return { ...state, username: "Vix"}
        default:
            return state;
    }
}

let store = createStore(myReducer);

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
