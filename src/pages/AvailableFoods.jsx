import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FaStar } from "react-icons/fa";
import useAxiosIns from "../hooks/useAxiosIns";
import { Link } from "react-router-dom";
import FeatureFItem from "../components/FeatureFItem";

const AvailableFoods = () => {
  const axiosInstance = useAxiosIns();
  const [availbeFoods, setAvailbeFoods] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);
  useEffect(() => {
    axiosInstance("/availableFoods").then((data) => setAvailbeFoods(data.data));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false);
    }, 700);
  }, []);

  if (pageLoading) {
    return (
      <div className="flex justify-center items-center h-[500px]">
        <div class="loader"></div>
      </div>
    );
  }
  // console.log(filterPlantItem);

  document.title = "Available Foods";

  return (
    <div className="c-container ">
      <h2 className="text-center text-5xl mb-8 pt-20"> Featured Foods </h2>
      <p className="max-w-[700px] w-full m-auto text-center mb-5">
        Discover freshly prepared meals shared by generous donors in your
        community. Grab your favorite dishes before they’re gone!
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 mb-20 md:grid-cols-2 gap-5">
        {availbeFoods.map((fFoodItem) => (
          <FeatureFItem fFoodItem={fFoodItem} />
        ))}
      </div>
    </div>
  );
};

export default AvailableFoods;
