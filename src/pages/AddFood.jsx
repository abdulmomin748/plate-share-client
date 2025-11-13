import { useEffect, useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../hooks/useAuth";
import useAxiosIns from "../hooks/useAxiosIns";
import Swal from "sweetalert2";

const AddFood = () => {
  const { user } = useAuth();
  const axiosIns = useAxiosIns();
  const [startDate, setStartDate] = useState(new Date());
  const formatedDate = startDate.toISOString().split("T")[0];
  const [pageLoading, setPageLoading] = useState(true);

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

  const handleAddFood = (e) => {
    e.preventDefault();
    const name = user.displayName;
    const email = user.email;
    const image = user.photoURL;

    const foodName = e.target.fName.value;
    const foodImage = e.target.fImage.value;
    const foodQuantity = e.target.fQuantity.value;
    const pickupLocation = e.target.pickLocation.value;
    const additionalNotes = e.target.fAddtionalN.value;

    console.log(
      name,
      email,
      image,
      foodName,
      foodImage,
      foodQuantity,
      pickupLocation,
      additionalNotes
    );

    const newfood = {
      name,
      email,
      image,

      foodName,
      foodImage,
      foodQuantity,
      pickupLocation,
      expireDate: formatedDate,
      additionalNotes,
      food_status: "Available",
    };

    // post food
    axiosIns
      .post("/addFood", newfood)
      .then((data) => {
        e.target.fName.value ='';
        e.target.fImage.value='';
        e.target.fQuantity.value='';
        e.target.pickLocation.value='';
        e.target.fAddtionalN.value='';
        if (data.status == 200) {
          Swal.fire({
            icon: "success",
            title: "Your food has been saved",
          });
        }
      })
      .catch((err) => console.log(err));
    console.log(newfood);
  };
  document.title = "Add Foods";

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
        <form onSubmit={handleAddFood}>
          {/* Title and Category Row */}
          <div className=" mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Food Name
              </label>
              <input
                type="text"
                name="fName"
                placeholder="Food Name..........."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                required
              />
            </div>
          </div>

          {/* Price Range Row */}
          <div className=" mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Food Image
            </label>
            <input
              type="url"
              name="fImage"
              placeholder="Food Image Url..........."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Food Quantity
            </label>
            <input
              type="number"
              name="fQuantity"
              placeholder="Serves example people........."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
            />
          </div>

          {/* Location */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pickup Location
            </label>
            <input
              type="text"
              name="pickLocation"
              placeholder="City, Country......"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expire Date
            </label>
            <DatePicker
              className="focus:ring-purple-500 w-full p-2"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          {/* Description */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Notes for this food item
            </label>
            <textarea
              name="fAddtionalN"
              placeholder="Additional Notes for this food item..........."
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-md transition duration-200 ease-in-out transform hover:scale-[1.02]"
          >
            Create A Food
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
