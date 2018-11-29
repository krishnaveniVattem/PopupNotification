
import './style.css'
import {  Route, BrowserRouter, Switch, link } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';



const element = (
       <BrowserRouter>
            <App/>
        </BrowserRouter>)
ReactDOM.render(
                    
                    element,
                    document.getElementById('root')
                );