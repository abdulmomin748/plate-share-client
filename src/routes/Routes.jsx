import { createBrowserRouter } from "react-router-dom";
// import MainLayout from "../Layout/HomeLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage.jsx";
import Register from "../pages/Register";
import MainLayout from "../layout/MainLayout.jsx";
import AvailableFoods from "../pages/AvailableFoods.jsx";
import Login from "../pages/Login.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import AddFood from "../pages/AddFood.jsx";
import ManageMyFoods from "../pages/ManageMyFoods.jsx";
import MyFoodRequest from "../pages/MyFoodRequest.jsx";

 const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/available-foods',
                element: <AvailableFoods />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/add-food',
                element: <PrivateRoute>
                    <AddFood/>
                </PrivateRoute>
            },
            {
                path: '/manage-my-foods',
                element: <PrivateRoute>
                    <ManageMyFoods/>
                </PrivateRoute>
            },
            {
                path: '/my-food-req',
                element: <PrivateRoute>
                    <MyFoodRequest/>
                </PrivateRoute>
            }
        ]
    }
])
export default router;