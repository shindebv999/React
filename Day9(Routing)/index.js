import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import{BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './home';
import Sports from './sports';
import News from './news';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter >
 
    <App />
    <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/news' element={<News />}></Route>
        <Route path='/sports' element={<Sports />}></Route>
    </Routes>
    </BrowserRouter>
);


