/* eslint-disable no-unused-vars */
import React from 'react';
import Mainlayout from '../Layouts/Mainlayout';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Products from '../Pages/Products/Products';
import Dashboard from '../Pages/dashboard/Dashboard';
import Pro from '../Pro/Pro';
import Dash from '../dash/Dash';
import Profile from '../Profile/Profile';
import EProfile from '../EProfile/EProfile';
const Route = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout></Mainlayout>,
        children: [{
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/products',
            element: <Products></Products>,
            loader: () => fetch(`https://dummyjson.com/products`)
        },
        {
            path: '/dashboard',
            element: <Dashboard></Dashboard>,
            children: [
                {
                    path: '/dashboard',
                    element: <Dash></Dash>

                }, {
                    path: '/dashboard/profile',
                    element: <Profile></Profile>
                }
                , {
                    path: '/dashboard/edit profile',
                    element: <EProfile></EProfile>
                },

            ]
        }, {
            path: '/products/:id',
            element: <Pro></Pro>,
            loader: ({ params }) => fetch(`https://dummyjson.com/products/${params.id}`)
        }
        ]
    }
])
export default Route;