import React from 'react';
import ReactDOM from 'react-dom';

import {Store} from 'luna';


import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


function reducer(state = 0, action) {// default value here would be 0.
    if (action.type === "INC") {
        return state + 1;
    } else {
        return state;
    }
}

const store$ = new Store(reducer, {title: 'hahaha'});


ReactDOM.render(<App store$={store$} dispatch={store$.dispatch}/>, document.getElementById('root'));
registerServiceWorker();
