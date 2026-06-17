import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";

import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MyProfile from "../pages/MyProfile";

import PriviteRoute from "../provider/PriviteRoute";
import Error from "../components/Error";
import Games from "../pages/Games";
import GameDetails from "../pages/GameDetails";




export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/games',
                element: <Games></Games>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/games/:id',
                element: <PriviteRoute>
                    <GameDetails></GameDetails>
                </PriviteRoute>
            },
            {
                path: '/myprofile',
                element: <PriviteRoute>
                    <MyProfile></MyProfile>
                </PriviteRoute>
            },
        ]
    },
    {
        path: '/*',
        element: <Error></Error>
    }
])

export default router;