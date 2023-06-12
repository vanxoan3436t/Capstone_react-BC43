import React from 'react';
import ReactDOM from 'react-dom/client';
import {unstable_HistoryRouter as HistoryRouter, Route, Routes } from 'react-router-dom';
import HomeTemplate from './Templates/HomeTemplate';
import Login from './Pages/Login';
import Search from './Pages/Search';
import Detail from './Pages/Detail';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import Carts from './Pages/Carts';
import Home from './Pages/Home';
import './assets/scss/index.scss'

//cấu hình redux
import { Provider } from 'react-redux';
import { store } from './redux/configStore';

import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
         <HistoryRouter history={history}>
        <Routes>
            <Route path='' element={<HomeTemplate />}>
                <Route index element={<Home />}></Route>
                <Route path='search' element={<Search />}></Route>
                <Route path='detail' >
                    <Route path=':id' element={<Detail />}></Route>
                </Route>
                <Route path='login' element={<Login />}></Route>
                <Route path='register' element={<Register />}></Route>
                <Route path='profile' element={<Profile />}></Route>
                <Route path='carts' element={<Carts />}></Route>
                <Route path='details' element={<Detail />}></Route>
            </Route>
        </Routes>
        </HistoryRouter>
    </Provider>
);