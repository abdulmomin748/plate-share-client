import React from 'react';
import { Link } from 'react-router-dom';

const FeatureFItem = ({fFoodItem}) => {
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
        food_status
    } = fFoodItem;
    return (
        <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      {/* Food Image */}
      <img
        src={foodImage}
        alt={foodName}
        className="w-full h-48 object-cover"
      />

      {/* Card Content */}
      <div className="p-4 space-y-3">
        <h2 className="text-2xl font-semibold text-gray-800">{foodName}</h2>
        <p className="text-gray-500 text-sm">Serves {foodQuantity} People</p>
        <p className="text-gray-600">
          <span className="font-semibold">Pickup:</span> {pickupLocation}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Expire Date:</span> {expireDate}
        </p>
        <p className="text-gray-600 text-sm italic">{additionalNotes}</p>

        {/* Status */}
        <div className='flex justify-between mt-8 mb-5'>
            <p
          className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
            food_status === "Available"
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          }`}
            >
            {food_status}
            </p>
            <p>
                <Link to={`/foodDetails/${_id}`} className="w-full cursor-pointer bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
                <span>View Details</span>
            </Link>
            </p>
        </div>
        {/* Donor Info */}
        <div className="flex items-center gap-3 mt-3 border-t pt-3">
          <img
            src={image}
            alt={name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-gray-800">{name}</p>
            <p className="text-sm text-gray-500">{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default FeatureFItem;