import React from 'react'
import { render } from "react-dom";
import {BrowserRouter,Routes,Route, Link} from "react-router-dom";
import { Login } from '../pages/auth/Login';
import { Home } from '../pages/home/Home';
interface RouteappProps {}

export const Routeapp: React.FC<RouteappProps> = ({}) => {
        return (
            <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </BrowserRouter>
        );
}