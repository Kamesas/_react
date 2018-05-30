import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import allReducers from './reducers'
//npm run start

const store = createStore();

ReactDOM.render(
  <button className="ui primary button">Save </button>, 
  document.getElementById('fieldToShow')
);
