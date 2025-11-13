import React, { useEffect, useRef, useState } from "react";
import {
  Calendar,
  MapPin,
  User,
  Mail,
  Package,
  Clock,
  FileText,
} from "lucide-react";
import useAxiosIns from "../hooks/useAxiosIns";
import { Link, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
const FoodDetails = () => {
  const params = useParams();
  const modalRef = useRef();
  const { user } = useAuth();
  const axiosInstance = useAxiosIns();
  const [foodItemDetails, setFoodItemDetails] = useState([]);
  useEffect(() => {
    axiosInstance(`/foodDetails/${params.id}`).then((data) =>
      setFoodItemDetails(data.data)
    );
  }, []);
  const {
    _id,
    name,
    email,
    image,
    foodName,
    foodImage,
    foodQuantity,
    pickupLocation,
    expireDate,
    additionalNotes,
    food_status,
  } = foodItemDetails;

  //   const getStatusColor = (status) => {
  //     switch (status) {
  //       case "available":
  //         return "bg-green-100 text-green-800";
  //       case "requested":
  //         return "bg-yellow-100 text-yellow-800";
  //       case "delivered":
  //         return "bg-blue-100 text-blue-800";
  //       default:
  //         return "bg-gray-100 text-gray-800";
  //     }
  //   };
  const handleModal = () => {
    modalRef.current.showModal();
  };

  const handleFoodReqSubmit = (e) => {
    e.preventDefault();
    const newReqForFood = {
      userEmail: user.email,
      name: user.displayName,
      photoURL: user.photoURL,
      foodId: params.id,
      food_status: "pending",
    };
    axiosInstance.post(`/reqFood`, newReqForFood).then((data) => {
      if (data.data.insertedId) {
        toast.success(`Request successfully submitted!`);
        modalRef.current.close();
      }
      console.log(data.data);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <Link
            to={"/available-foods"}
            className="text-orange-600 hover:text-orange-700 font-medium mb-4 flex items-center gap-2"
          >
            ← Back To Foods
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Food Details
          </h1>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Food Image */}
          <div className="relative h-64 md:h-96 w-full overflow-hidden">
            <img
              src={foodImage}
              alt={foodName}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4">
              <span className={`px-4 py-2 rounded-full text-sm font-semibold `}>
                {/* {food_status.charAt(0).toUpperCase() + food_status.slice(1)} */}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Food Name */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              {foodName}
            </h2>

            {/* Food Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Quantity */}
              <div className="flex items-start gap-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Package className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Quantity</p>
                  <p className="text-lg text-gray-900 font-semibold">
                    serves {foodQuantity} people
                  </p>
                </div>
              </div>

              {/* Expire Date */}
              <div className="flex items-start gap-3">
                <div className="p-2 bg-red-100 rounded-lg">
                  <Calendar className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">
                    Expire Date
                  </p>
                  <p className="text-lg text-gray-900 font-semibold">
                    {expireDate}
                  </p>
                </div>
              </div>

              {/* Pickup Location */}
              <div className="flex items-start gap-3 md:col-span-2">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">
                    Pickup Location
                  </p>
                  <p className="text-lg text-gray-900 font-semibold">
                    {pickupLocation}
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            {additionalNotes && (
              <div className="mb-8 p-4 bg-amber-50 rounded-lg border border-amber-200">
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-amber-700 font-medium mb-1">
                      Additional Notes
                    </p>
                    <p className="text-gray-700">{additionalNotes}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Divider */}
            <div className="border-t border-gray-200 my-6"></div>

            {/* Donor Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Donor Information
              </h3>
              <div className="flex items-center gap-4">
                <img
                  src={image}
                  alt={name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-orange-200"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <User className="w-4 h-4 text-gray-500" />
                    <p className="text-lg font-semibold text-gray-900">
                      {name}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <p className="text-gray-600">{email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-8">
              <button
                onClick={handleModal}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
              >
                Request This Food
              </button>
            </div>
          </div>
        </div>

        <dialog ref={modalRef} className="modal">
          <div className="modal-box max-w-7/12">
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
              <div className="bg-white w-[970px] rounded-2xl shadow-md p-8">
                <h2 className="text-3xl font-semibold text-center mb-6">
                  Update your food information
                </h2>

                <form onSubmit={(e) => handleFoodReqSubmit(e)}>
                  {/* Title and Category Row */}
                  <div className=" mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Location
                      </label>
                      <input
                        type="text"
                        name="rLocation"
                        placeholder="Location..........."
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact No.
                    </label>
                    <input
                      type="number"
                      name="rContackInf"
                      placeholder="Contack No........."
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    />
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Why Need Food
                    </label>
                    <textarea
                      name="rCause"
                      placeholder="Additional Notes for this food item..........."
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none resize-none"
                      required
                    />
                  </div>

                  {/* Submit Button */}

                  <div className="flex items-center gap-3 pt-2">
                    <form method="dialog" className="w-6/12">
                      <button className="px-4 py-2 w-full rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100">
                        Cancel
                      </button>
                    </form>
                    <button
                      type="submit"
                      className="w-6/12 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-md transition duration-200 ease-in-out transform hover:scale-[1.02]"
                    >
                      Update Food Item
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </dialog>
        {/* Food ID */}
        <p className="text-center text-sm text-gray-500 mt-4">Food ID: {_id}</p>
      </div>
    </div>
  );
};
export default FoodDetails;
