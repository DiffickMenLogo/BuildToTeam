import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from './components/Menu';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MainRouter from './MainRouter';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Menu />
    <MainRouter />
  </BrowserRouter>
);