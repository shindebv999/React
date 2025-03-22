import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './PrivateRouting/Home';
import News from './PrivateRouting/News';
import Sports from './PrivateRouting/Sport';
import PrivateRouter from './PrivateRouting/prviateRouting';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>

        <Route path='/sports' element={<Sports />}></Route>
        <Route path='/private' element={<PrivateRouter />}>
          <Route path='home' element={<Home />}></Route>
          <Route path='news' element={<News />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>

);


