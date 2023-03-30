import React from 'react';
import ReactDOM from 'react-dom';
import './css/page.css';
import Page1 from './Page1';
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
//import { unmountComponentAtNode, render } from 'react-dom';


/*
class ApplicationComponent extends HTMLElement {
  connectedCallback() {
    render(
    <BrowserRouter>
      <Page1 />
    </BrowserRouter>,
    this
    )
  }

  deconnectedCallback(){
    unmountComponentAtNode(this)
  }
}

customElements.define('app-sacem', ApplicationComponent)*/
ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Page1 />
  </BrowserRouter>,
  document.getElementById('root')

)
reportWebVitals()