import { RouteObject, createBrowserRouter } from "react-router-dom";
import Home from "../../screens/HomeScreens/Home.screen.jsx";
import App from "../../App";
import React from "react";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <Home />
    }
]


export const router = createBrowserRouter(routes);