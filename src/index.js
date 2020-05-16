import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
// import { Provider } from 'reasct-redux'
import './index.less';
// import '@/untils/rem.js'
import '@/untils/reset.css'
import Router from '@/router'
ReactDOM.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
  document.querySelector('#root')
);

