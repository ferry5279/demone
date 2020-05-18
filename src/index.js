import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.less';
import '@/untils/reset.css'
import Router from '@/router'
ReactDOM.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
  document.querySelector('#root')
);

