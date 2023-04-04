import React from 'react';
import ReactDOM from 'react-dom';
import './css/page.css';
import App from './app';
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
  </BrowserRouter>,
  document.getElementById('root')

)
reportWebVitals()