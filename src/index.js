import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import styled, { css } from 'styled-components'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Register from "./Register"
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <Router>
     <Routes>
      <Route element={<App />} path="/" ></Route>
      <Route element={<Register />} path="/Register" ></Route>
     </Routes>
     

   </Router>
);