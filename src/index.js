import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import styled, { css } from 'styled-components'
import { BrowserRouter as Router, Routes, Route, HashRouter} from "react-router-dom"
import Register from "./Register"
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <HashRouter>
     <Routes>
      <Route exact element={<App />} path="/" ></Route>
      <Route index element={<App />} path="/Login-Register-Frontend" ></Route>

      <Route element={<Register />} path="/Login-Register-Frontend/Register" ></Route>

     </Routes>
     

   </HashRouter>
);