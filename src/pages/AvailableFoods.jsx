import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FaStar } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import useAxiosIns from "../hooks/useAxiosIns";
import { Link } from "react-router-dom";
import FeatureFItem from "../components/FeatureFItem";

const AvailableFoods = () => {
  const axiosInstance = useAxiosIns();
  const { user, loading } = useAuth();
  const [availbeFoods, setAvailbeFoods] = useState([]);
  const [aLoading,setALoading] = useState(true);
  useEffect(() => {
    axiosInstance("/availableFoods").then((data) => setAvailbeFoods(data.data),setALoading(false));
  }, []);

  // useEffect(() =>{
  //     startLoading();
  //     setTimeout(() => {
  //         stopLoading();
  //     }, 700);
  // },[])
  if (aLoading) {
    return (
      <div className="flex justify-center items-center h-[500px]">
        <div class="loader"></div>
      </div>
    );
  }
  // console.log(filterPlantItem);

  document.title = "Available Foods";

  return (
    <div className="c-container">
      <h2 className="text-center text-5xl mb-8 pt-20"> Featured Foods </h2>
      <p className="max-w-[700px] w-full m-auto text-center mb-5">
        Discover freshly prepared meals shared by generous donors in your
        community. Grab your favorite dishes before they’re gone!
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
        {availbeFoods.map((fFoodItem) => (
          <FeatureFItem fFoodItem={fFoodItem} />
        ))}
      </div>
      <div className="flex justify-center pt-15">
        <Link
          to={`/available-foods`}
          className="cursor-pointer bg-green-900 hover:bg-green-600 text-white font-semibold py-3 px-14 rounded-sm transition duration-300 ease-in-out  "
        >
          <span>Show All</span>
        </Link>
      </div>
    </div>
  );
};

export default AvailableFoods;
