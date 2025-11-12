import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useAuth();
  const location = useLocation();
  console.log(location);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[500px]">
        <div class="loader"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to={"/login"} state={location.pathname} />;
  }

  return children;
};

export default PrivateRoute;
