
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Components/Layout/Layout';
import Error from '../Components/Error/Error';
import Home from '../Components/Pages/Home/Home';
import Category from '../Components/Pages/Home/Category/Category';
import About from '../Components/Pages/About/About';
import News from '../Components/Pages/News/News';
import Login from '../Components/Pages/Login/Login';
import Register from '../Components/Pages/Login/Register';
import PrivateRoute from '../Private/PrivateRoute';
import Newses from '../Components/Pages/newsHead/Newses';
import Details from '../Components/Details/Details';
const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children: [

            {
                path: '/',
                element: <Home></Home>,
                children: [
                    {
                        path: `/news/:id`,
                        element: <Newses></Newses>
                    },
                    {
                        path: '/details',
                        element: <Details></Details>
                    }
                ]

            },
            {
                path: '/about',
                element: <PrivateRoute><About></About></PrivateRoute>
            }
            ,
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
    // {
    //     path: '/',
    //     element: <Category></Category>

    // },

])

export default Router;