import { createBrowserRouter } from "react-router-dom";
// import MainLayout from "../Layout/HomeLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage.jsx";
import Register from "../pages/Register";
import MainLayout from "../layout/MainLayout.jsx";
import AvailableFoods from "../pages/AvailableFoods.jsx";
import Login from "../pages/Login.jsx";
import AddFood from "../pages/AddFood.jsx";
import MyFoodRequest from "../pages/MyFoodRequest.jsx";
import FoodDetails from "../pages/FoodDetails.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import ManageMyFoods from "../pages/ManageMyFoods.jsx";
import About from "../pages/About.jsx";
import TermsCondition from "../pages/TermsCondition.jsx";
import MyProfile from "../pages/MyProfile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/terms-conditions",
        element: <TermsCondition />,
      },
      {
        path: "/available-foods",
        element: <AvailableFoods />,
      },

      { path: "foodDetails/:id", element: <FoodDetails /> },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/my-profile",
        element: <PrivateRoute><MyProfile /></PrivateRoute>,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/add-food",
        element: (
          <PrivateRoute>
            <AddFood />
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-my-foods",
        element: (
          <PrivateRoute>
            <ManageMyFoods />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-food-req",
        element: (
          <PrivateRoute>
            <MyFoodRequest />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
