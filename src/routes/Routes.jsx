import { createBrowserRouter } from "react-router-dom";
// import MainLayout from "../Layout/HomeLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage.jsx";
import Register from "../pages/Register";
import MainLayout from "../layout/MainLayout.jsx";
import AvailableFoods from "../pages/AvailableFoods.jsx";
import Login from "../pages/Login.jsx";

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
            }
        ]
    }
])
export default router;